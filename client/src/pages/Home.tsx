import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createSession, createBoard } from "../api";
import { saveSession, getSession } from "../session";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const existing = getSession();
  const [displayName, setDisplayName] = useState(existing?.displayName ?? "");
  const [boardName, setBoardName] = useState("");
  const [password, setPassword] = useState("");
  const [usePassword, setUsePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  const locationError = (location.state as { error?: string })?.error ?? "";

  const handleCreate = async () => {
    if (!displayName.trim()) {
      setError("Enter your name first");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let session = existing;
      if (!session || session.displayName !== displayName.trim()) {
        session = await createSession(displayName.trim());
        saveSession(session);
      }

      const name = boardName.trim() || `${displayName.trim()}'s Board`;
      const board = await createBoard(name, usePassword ? password : undefined);
      navigate(`/board/${board.boardId}`);
    } catch (e) {
      console.log(e);
      setError("Something went wrong, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Whiteboard</h1>
        <p className={styles.subtitle}>Real-time collaborative drawing</p>

        <div className={styles.field}>
          <label className={styles.label}>Your name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>
            Board name <span className={styles.optional}>(optional)</span>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder={displayName ? `${displayName}'s Board` : "My Board"}
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </div>

        <div className={styles.checkboxRow}>
          <input
            id="usePassword"
            type="checkbox"
            checked={usePassword}
            onChange={(e) => setUsePassword(e.target.checked)}
          />
          <label htmlFor="usePassword">Password protect this board</label>
        </div>

        {usePassword && (
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        {locationError && <p className={styles.error}>{locationError}</p>}
        <button
          className={styles.button}
          onClick={handleCreate}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Board"}
        </button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <p className={styles.joinHint}>
          Have a board link? Just paste it in your browser.
        </p>
      </div>
    </div>
  );
}
