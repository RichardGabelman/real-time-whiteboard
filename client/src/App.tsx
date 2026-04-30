import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io('http://localhost',{ path: "/socket.io" });

function App() {
  const [status, setStatus] = useState<string>("connecting...");
  const [boardId] = useState<string>("board-1");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected:", socket.id);
      setStatus(`connected: ${socket.id}`);
      socket.emit("join-board", boardId);
    });

    socket.on("joined-board", ({ boardId }: { boardId: string }) => {
      console.log("joined board:", boardId);
      setStatus(`connected to board: ${boardId}`);
    });

    socket.on("disconnect", () => {
      setStatus("disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("joined-board");
      socket.off("disconnect");
    };
  }, [boardId]);

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>Whiteboard</h1>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
