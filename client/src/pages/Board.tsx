import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { getSession, saveSession } from "../session";
import { createSession, getBoard, verifyBoard, renameBoard } from "../api";
import Canvas from "../Canvas";
import Toolbar, { type Tool } from "../Toolbar";
import styles from "./Board.module.css";

export default function Board() {
  const { boardId } = useParams<{ boardId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const verified =
    (location.state as { verified?: boolean })?.verified ?? false;

  const [socket, setSocket] = useState<Socket | null>(null);
  const [joined, setJoined] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(4);
  const [tool, setTool] = useState<Tool>("pen");

  const [nameInput, setNameInput] = useState(
    () => getSession()?.displayName ?? "",
  );
  const [passwordInput, setPasswordInput] = useState("");
  const [needsPassword, setNeedsPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [loading, setLoading] = useState(false);
  const [boardLoading, setBoardLoading] = useState(true);
  const [sessionData, setSessionData] = useState<{
    sessionId: string;
    displayName: string;
  } | null>(null);

  const [isEditingName, setIsEditingName] = useState(false);
  const [nameEditValue, setNameEditValue] = useState("");
  const [copied, setCopied] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!boardId) return;

    getBoard(boardId)
      .then((board) => {
        setBoardName(board.name);
        setNeedsPassword(board.hasPassword);
      })
      .catch(() => {
        navigate("/", { state: { error: "Board not found" } });
      })
      .finally(() => setBoardLoading(false));
  }, [boardId, navigate]);

  useEffect(() => {
    if (isEditingName && nameInputRef.current) {
      nameInputRef.current.focus();
      nameInputRef.current.select();
    }
  }, [isEditingName]);

  const handleJoin = async () => {
    if (!nameInput.trim()) {
      setNameError("Enter your name");
      return;
    }
    if (!boardId) return;

    setLoading(true);
    setNameError("");

    try {
      if (needsPassword && !verified) {
        if (!passwordInput) {
          setNameError("This board requires a password");
          setLoading(false);
          return;
        }
        await verifyBoard(boardId, passwordInput);
      }

      let session = getSession();
      if (!session || session.displayName !== nameInput.trim()) {
        session = await createSession(nameInput.trim());
        saveSession(session);
      }

      setDisplayName(session.displayName);
      setSessionData(session);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Something went wrong";
      setNameError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (boardLoading) return;
    if (joined) return;
    const session = getSession();
    if (session && (!needsPassword || verified)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleJoin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardLoading, needsPassword, verified]);

  useEffect(() => {
    if (!sessionData || !boardId) return;

    const newSocket = io(import.meta.env.VITE_API_URL, { path: "/socket.io" });
    setSocket(newSocket); // eslint-disable-line react-hooks/set-state-in-effect

    newSocket.on("connect", () => {
      newSocket.emit("join-board", {
        boardId,
        sessionId: sessionData.sessionId,
      });
    });

    newSocket.on(
      "joined-board",
      ({
        name,
        displayName: dn,
      }: {
        boardId: string;
        name: string;
        displayName: string;
      }) => {
        setBoardName(name);
        setDisplayName(dn);
        setJoined(true);
      },
    );

    newSocket.on("board-renamed", ({ name }: { name: string }) => {
      setBoardName(name);
    });

    newSocket.on("error", ({ message }: { message: string }) => {
      setNameError(message);
      newSocket.disconnect();
      setSocket(null);
      setSessionData(null);
    });

    newSocket.on("disconnect", () => {
      setJoined(false);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [sessionData, boardId]);

  useEffect(() => {
    if (boardName) {
      document.title = `${boardName} - Whiteboard`;
    } else {
      document.title = "Whiteboard";
    }

    return () => {
      document.title = "Whiteboard";
    };
  }, [boardName]);

  const handleRename = async () => {
    if (!boardId || !nameEditValue.trim()) return;
    try {
      await renameBoard(boardId, nameEditValue.trim());
    } catch {
      // silently fail
    }
    setIsEditingName(false);
  };

  const handleClear = () => {
    if (socket && boardId) socket.emit("clear-board", { boardId });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (boardLoading) {
    return (
      <div className={styles.joinPage}>
        <div className={styles.joinCard}>
          <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!joined) {
    return (
      <div className={styles.joinPage}>
        <div className={styles.joinCard}>
          <h2 className={styles.joinTitle}>{boardName || "Join Board"}</h2>

          <div className={styles.field}>
            <label className={styles.label}>Your name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Apollo"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleJoin()}
            />
          </div>

          {needsPassword && !verified && (
            <div className={styles.field}>
              <label className={styles.label}>Board password</label>
              <input
                className={styles.input}
                type="password"
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              />
            </div>
          )}

          {nameError && <p className={styles.error}>{nameError}</p>}

          <button
            className={styles.button}
            onClick={handleJoin}
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Board"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.boardName}>
          {isEditingName ? (
            <input
              ref={nameInputRef}
              className={styles.nameInput}
              value={nameEditValue}
              onChange={(e) => setNameEditValue(e.target.value)}
              onBlur={handleRename}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleRename();
                if (e.key === "Escape") setIsEditingName(false);
              }}
            />
          ) : (
            <>
              <span className={styles.nameText}>{boardName}</span>
              <button
                className={styles.editButton}
                onClick={() => {
                  setNameEditValue(boardName);
                  setIsEditingName(true);
                }}
                title="Rename board"
              >
                ✎
              </button>
            </>
          )}
        </div>
        <div className={styles.headerRight}>
          <span className={styles.userLabel}>{displayName}</span>
          <button className={styles.copyButton} onClick={handleCopyLink}>
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
      <Toolbar
        color={color}
        lineWidth={lineWidth}
        tool={tool}
        onColorChange={setColor}
        onLineWidthChange={setLineWidth}
        onToolChange={setTool}
        onClear={handleClear}
      />
      <div className={styles.canvasWrapper}>
        {socket && (
          <Canvas
            boardId={boardId!}
            socket={socket}
            color={color}
            lineWidth={lineWidth}
            tool={tool}
            displayName={displayName}
          />
        )}
      </div>
    </div>
  );
}
