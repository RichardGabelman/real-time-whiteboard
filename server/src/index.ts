import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { createClient } from "redis";
import type { DrawEvent, CursorEvent } from "../../shared/types";
import { prisma } from "./db";
import sessionRouter from "./routes/session";
import boardsRouter from "./routes/boards";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 3001;
const REDIS_URL = process.env.REDIS_URL || "redis://redis:6379";

const publisher = createClient({ url: REDIS_URL });
const subscriber = createClient({ url: REDIS_URL });

const socketBoards = new Map<string, string>();

async function startServer() {
  await publisher.connect();
  await subscriber.connect();

  console.log(`[redis] connected on port ${PORT}`);

  await subscriber.subscribe("draw", (message) => {
    const event: DrawEvent = JSON.parse(message);
    io.to(event.boardId).emit("draw", event);
  });

  await subscriber.subscribe("cursor-move", (message) => {
    const event: CursorEvent = JSON.parse(message);
    io.to(event.boardId).emit("cursor-move", event);
  });

  await subscriber.subscribe("user-left", (message) => {
    const { socketId, boardId } = JSON.parse(message);
    io.to(boardId).emit("user-left", { socketId });
  });

  await subscriber.subscribe("clear-board", (message) => {
    const { boardId } = JSON.parse(message);
    io.to(boardId).emit("clear-board", { boardId });
  });

  await subscriber.subscribe("board-renamed", (message) => {
    const { boardId, name } = JSON.parse(message);
    io.to(boardId).emit("board-renamed", { boardId, name });
  });

  app.use(express.json());
  app.use("/api/session", sessionRouter);
  app.use("/api/boards", boardsRouter);

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", port: PORT });
  });

  io.on("connection", (socket: Socket) => {
    console.log(`[socket] client connected: ${socket.id} on port ${PORT}`);

    socket.on(
      "join-board",
      async (data: { boardId: string; sessionId: string }) => {
        const { boardId, sessionId } = data;

        const session = await prisma.session.findUnique({
          where: { id: sessionId },
        });
        if (!session) {
          socket.emit("error", { message: "Invalid session" });
          return;
        }

        const board = await prisma.board.findUnique({ where: { id: boardId } });
        if (!board) {
          socket.emit("error", { message: "Board not found" });
          return;
        }

        socket.join(boardId);
        socketBoards.set(socket.id, boardId);
        console.log(
          `[socket] ${session.displayName} (${socket.id}) joined board ${boardId}`,
        );

        const strokes = await prisma.stroke.findMany({
          where: { boardId },
          orderBy: { createdAt: "asc" },
        });

        socket.emit("joined-board", {
          boardId,
          name: board.name,
          displayName: session.displayName,
        });
        socket.emit("board-history", strokes);
      },
    );

    socket.on("draw", async (event: DrawEvent) => {
      await prisma.stroke.create({
        data: {
          boardId: event.boardId,
          x0: event.x0,
          y0: event.y0,
          x1: event.x1,
          y1: event.y1,
          color: event.color,
          width: event.width,
        },
      });
      publisher.publish("draw", JSON.stringify(event));
    });

    socket.on("cursor-move", (event: CursorEvent) => {
      publisher.publish("cursor-move", JSON.stringify(event));
    });

    socket.on("clear-board", async ({ boardId }: { boardId: string }) => {
      await prisma.stroke.deleteMany({ where: { boardId } });
      publisher.publish("clear-board", JSON.stringify({ boardId }));
    });

    socket.on(
      "rename-board",
      async ({ boardId, name }: { boardId: string; name: string }) => {
        await prisma.board.update({ where: { id: boardId }, data: { name } });
        publisher.publish("board-renamed", JSON.stringify({ boardId, name }));
      },
    );

    socket.on("disconnect", () => {
      const boardId = socketBoards.get(socket.id);
      if (boardId) {
        publisher.publish(
          "user-left",
          JSON.stringify({ socketId: socket.id, boardId }),
        );
        socketBoards.delete(socket.id);
      }
    });
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(console.error);
