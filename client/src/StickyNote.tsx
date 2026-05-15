import { useEffect, useRef, useState } from "react";
import type { StickyNote as StickyNoteType } from "@shared/types";
import styles from "./StickyNote.module.css";

interface Props {
  note: StickyNoteType;
  onUpdate: (note: StickyNoteType) => void;
  onDelete: (id: string) => void;
}

export default function StickyNote({ note, onUpdate, onDelete }: Props) {
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [note.content]);

  const onMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === "TEXTAREA") return;
    e.preventDefault();
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - note.x,
      y: e.clientY - note.y,
    };
  };

  useEffect(() => {
    if (!dragging) return;

    const onMouseMove = (e: MouseEvent) => {
      onUpdate({
        ...note,
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };

    const onMouseUp = () => setDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, note, onUpdate]);

  return (
    <div
      className={styles.note}
      style={{ left: note.x, top: note.y, background: note.color }}
      onMouseDown={onMouseDown}
    >
      <div className={styles.header}>
        <div className={styles.dragHandle} />
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(note.id)}
        >
          ✕
        </button>
      </div>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        value={note.content}
        placeholder="Type something..."
        onChange={(e) => onUpdate({ ...note, content: e.target.value })}
      />
    </div>
  );
}
