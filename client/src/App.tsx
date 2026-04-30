import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Canvas from "./Canvas";

const socket: Socket = io("http://localhost", { path: "/socket.io" });

function App() {
  const [status, setStatus] = useState<string>("connecting...");
  const [boardId] = useState<string>("board-1");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setStatus(`connected: ${socket.id}`);
      socket.emit("join-board", boardId);
    });

    socket.on("joined-board", ({ boardId }: { boardId: string }) => {
      setStatus(`board: ${boardId}`);
      setJoined(true);
    });

    socket.on("disconnect", () => {
      setStatus("disconnected");
      setJoined(false);
    });

    return () => {
      socket.off("connect");
      socket.off("joined-board");
      socket.off("disconnect");
    };
  }, [boardId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          padding: "0.5rem 1rem",
          borderBottom: "1px solid #eee",
          fontFamily: "monospace",
          fontSize: "0.8rem",
          color: "#666",
        }}
      >
        {status}
      </div>
      <div style={{ flex: 1, overflow: "hidden" }}>
        {joined && <Canvas boardId={boardId} />}
      </div>
    </div>
  );
}

export default App;
