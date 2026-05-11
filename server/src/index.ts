import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { createClient } from "redis";
import type { DrawEvent, CursorEvent } from "../../shared/types";

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

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", port: PORT });
  });

  io.on("connection", (socket: Socket) => {
    console.log(`[socket] client connected: ${socket.id} on port ${PORT}`);

    socket.on("join-board", (boardId: string) => {
      socket.join(boardId);
      socketBoards.set(socket.id, boardId);
      console.log(`[socket] ${socket.id} joined board ${boardId}`);
      socket.emit("joined-board", { boardId });
    });

    socket.on("draw", (event: DrawEvent) => {
      publisher.publish("draw", JSON.stringify(event));
    });

    socket.on("cursor-move", (event: CursorEvent) => {
      publisher.publish("cursor-move", JSON.stringify(event));
    });

    socket.on("disconnect", () => {
      const boardId = socketBoards.get(socket.id);
      console.log(
        `[socket] client disconnected: ${socket.id}, board: ${boardId}`,
      );
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
