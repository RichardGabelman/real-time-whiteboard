import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", port: PORT });
});

io.on("connection", (socket) => {
  console.log(`[socket] client connected: ${socket.id} on port ${PORT}`);

  socket.on("join-board", (boardId: string) => {
    socket.join(boardId);
    console.log(`[socket] ${socket.id} joined board ${boardId}`);
    socket.emit("joined-board", { boardId });
  });

  socket.on("disconnect", () => {
    console.log(`[socket] client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
