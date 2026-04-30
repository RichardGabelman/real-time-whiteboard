import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Canvas from "./Canvas";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [status, setStatus] = useState<string>("connecting...");
  const [boardId] = useState<string>("board-1");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost", { path: "/socket.io" });
    setSocket(newSocket); // eslint-disable-line react-hooks/set-state-in-effect

    newSocket.on("connect", () => {
      setStatus(`connected: ${newSocket.id}`);
      newSocket.emit("join-board", boardId);
    });

    newSocket.on("joined-board", ({ boardId }: { boardId: string }) => {
      setStatus(`board: ${boardId}`);
      setJoined(true);
    });

    newSocket.on("disconnect", () => {
      setStatus("disconnected");
      setJoined(false);
    });

    return () => {
      newSocket.disconnect();
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
        {joined && socket && (
          <Canvas boardId={boardId} socket={socket} />
        )}
      </div>
    </div>
  );
}

export default App;
