import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Canvas from "./Canvas";
import styles from "./App.module.css";

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
    <div className={styles.container}>
      <div className={styles.statusBar}>{status}</div>
      <div className={styles.canvasWrapper}>
        {joined && socket && <Canvas boardId={boardId} socket={socket} />}
      </div>
    </div>
  );
}

export default App;
