import { useCallback, useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import type {
  DrawEvent,
  CursorEvent,
  StickyNote as StickyNoteType,
} from "@shared/types";
import { type Tool } from "./Toolbar";
import StickyNoteComponent from "./StickyNote";
import styles from "./Canvas.module.css";

const generateId = () =>
  Math.random().toString(36).slice(2) + Date.now().toString(36);

const renderStroke = (
  ctx: CanvasRenderingContext2D,
  from: Point,
  to: Point,
  strokeColor: string,
  strokeWidth: number,
) => {
  if (from.x === to.x && from.y === to.y) {
    ctx.beginPath();
    ctx.arc(from.x, from.y, strokeWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = strokeColor;
    ctx.fill();
    return;
  }

  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
};

interface Point {
  x: number;
  y: number;
}

interface RemoteCursor {
  userId: string;
  displayName: string;
  x: number;
  y: number;
}

interface Props {
  boardId: string;
  socket: Socket;
  color: string;
  lineWidth: number;
  tool: Tool;
  displayName: string;
}

export default function Canvas({
  boardId,
  socket,
  color,
  lineWidth,
  tool,
  displayName,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const [cursors, setCursors] = useState<Record<string, RemoteCursor>>({});
  const [stickyNotes, setStickyNotes] = useState<
    Record<string, StickyNoteType>
  >({});

  const activeColor = tool === "eraser" ? "#ffffff" : color;
  const activeWidth = tool === "eraser" ? lineWidth * 4 : lineWidth;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    const resize = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.putImageData(imageData, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (!socket) return;

    const handleDraw = (event: DrawEvent) => {
      if (event.socketId === socket.id) return;
      const ctx = ctxRef.current;
      if (!ctx) return;
      renderStroke(
        ctx,
        { x: event.x0, y: event.y0 },
        { x: event.x1, y: event.y1 },
        event.color,
        event.width,
      );
    };

    const handleHistory = (strokes: DrawEvent[]) => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      strokes.forEach((stroke) => {
        renderStroke(
          ctx,
          { x: stroke.x0, y: stroke.y0 },
          { x: stroke.x1, y: stroke.y1 },
          stroke.color,
          stroke.width,
        );
      });
    };

    const handleCursor = (event: CursorEvent) => {
      if (event.socketId === socket.id) return;
      setCursors((prev) => ({
        ...prev,
        [event.userId]: {
          userId: event.userId,
          displayName: event.displayName,
          x: event.x,
          y: event.y,
        },
      }));
    };

    const handleUserLeft = ({ socketId }: { socketId: string }) => {
      setCursors((prev) => {
        const next = { ...prev };
        delete next[socketId];
        return next;
      });
    };

    const handleClear = () => {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleStickyNoteUpdate = (note: StickyNoteType) => {
      if (note.socketId === socket.id) return;
      setStickyNotes((prev) => ({ ...prev, [note.id]: note }));
    };

    const handleStickyNoteDelete = ({ id }: { id: string }) => {
      setStickyNotes((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    };

    const handleStickyNotesHistory = (notes: StickyNoteType[]) => {
      const map: Record<string, StickyNoteType> = {};
      notes.forEach((n) => {
        map[n.id] = n;
      });
      setStickyNotes(map);
    };

    socket.on("draw", handleDraw);
    socket.on("board-history", handleHistory);
    socket.on("cursor-move", handleCursor);
    socket.on("user-left", handleUserLeft);
    socket.on("clear-board", handleClear);
    socket.on("sticky-note-update", handleStickyNoteUpdate);
    socket.on("sticky-note-delete", handleStickyNoteDelete);
    socket.on("sticky-notes-history", handleStickyNotesHistory);

    return () => {
      socket.off("draw", handleDraw);
      socket.off("board-history", handleHistory);
      socket.off("cursor-move", handleCursor);
      socket.off("user-left", handleUserLeft);
      socket.off("clear-board", handleClear);
      socket.off("sticky-note-update", handleStickyNoteUpdate);
      socket.off("sticky-note-delete", handleStickyNoteDelete);
      socket.off("sticky-notes-history", handleStickyNotesHistory);
    };
  }, [socket]);

  const getPoint = (e: React.MouseEvent): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if (tool === "sticky-note") return;
    isDrawing.current = true;
    const point = getPoint(e);
    lastPoint.current = point;

    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(point.x, point.y, activeWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = activeColor;
    ctx.fill();

    socket.emit("draw", {
      boardId,
      socketId: socket.id ?? "",
      x0: point.x,
      y0: point.y,
      x1: point.x,
      y1: point.y,
      color: activeColor,
      width: activeWidth,
    });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!socket) return;
    const current = getPoint(e);

    socket.emit("cursor-move", {
      boardId,
      socketId: socket.id ?? "",
      userId: socket.id ?? "",
      displayName,
      x: current.x,
      y: current.y,
    });

    if (!isDrawing.current || !lastPoint.current || tool === "sticky-note") {
      lastPoint.current = current;
      return;
    }

    const ctx = ctxRef.current;
    if (!ctx) return;

    renderStroke(ctx, lastPoint.current, current, activeColor, activeWidth);

    socket.emit("draw", {
      boardId,
      socketId: socket.id ?? "",
      x0: lastPoint.current.x,
      y0: lastPoint.current.y,
      x1: current.x,
      y1: current.y,
      color: activeColor,
      width: activeWidth,
    });

    lastPoint.current = current;
  };

  const onMouseUp = () => {
    isDrawing.current = false;
    lastPoint.current = null;
  };

  const onClick = (e: React.MouseEvent) => {
    if (tool !== "sticky-note") return;
    const point = getPoint(e);
    const note: StickyNoteType = {
      id: generateId(),
      boardId,
      x: point.x,
      y: point.y,
      content: "",
      color: "#fef08a",
    };
    setStickyNotes((prev) => ({ ...prev, [note.id]: note }));
    socket.emit("sticky-note-create", note);
  };

  const handleNoteUpdate = useCallback(
    (note: StickyNoteType) => {
      setStickyNotes((prev) => ({ ...prev, [note.id]: note }));
      socket.emit("sticky-note-update", { ...note, socketId: socket.id ?? "" });
    },
    [socket],
  );

  const handleNoteDelete = useCallback(
    (id: string) => {
      setStickyNotes((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      socket.emit("sticky-note-delete", { id, boardId });
    },
    [socket, boardId],
  );

  const onTouchStart = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const canvas = canvasRef.current!;
      const rect = canvas.getBoundingClientRect();
      const point = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };

      if (tool === "sticky-note") {
        const note: StickyNoteType = {
          id: generateId(),
          boardId,
          x: point.x,
          y: point.y,
          content: "",
          color: "#fef08a",
        };
        setStickyNotes((prev) => ({ ...prev, [note.id]: note }));
        socket.emit("sticky-note-create", { ...note, socketId: socket.id ?? "" });
        return;
      }

      isDrawing.current = true;
      lastPoint.current = point;

      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(point.x, point.y, activeWidth / 2, 0, Math.PI * 2);
      ctx.fillStyle = activeColor;
      ctx.fill();

      socket.emit("draw", {
        boardId,
        socketId: socket.id ?? "",
        x0: point.x,
        y0: point.y,
        x1: point.x,
        y1: point.y,
        color: activeColor,
        width: activeWidth,
      });
    },
    [tool, boardId, socket, activeColor, activeWidth],
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      if (!isDrawing.current || !lastPoint.current) return;
      const touch = e.touches[0];
      const canvas = canvasRef.current!;
      const rect = canvas.getBoundingClientRect();
      const current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };

      const ctx = ctxRef.current;
      if (!ctx) return;

      renderStroke(ctx, lastPoint.current, current, activeColor, activeWidth);

      socket.emit("draw", {
        boardId,
        socketId: socket.id ?? "",
        x0: lastPoint.current.x,
        y0: lastPoint.current.y,
        x1: current.x,
        y1: current.y,
        color: activeColor,
        width: activeWidth,
      });

      lastPoint.current = current;
    },
    [boardId, socket, activeColor, activeWidth],
  );

  const onTouchEnd = useCallback(() => {
    isDrawing.current = false;
    lastPoint.current = null;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener(
      "touchstart",
      onTouchStart as unknown as EventListener,
      { passive: false },
    );
    canvas.addEventListener(
      "touchmove",
      onTouchMove as unknown as EventListener,
      { passive: false },
    );
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      canvas.removeEventListener(
        "touchstart",
        onTouchStart as unknown as EventListener,
      );
      canvas.removeEventListener(
        "touchmove",
        onTouchMove as unknown as EventListener,
      );
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [onTouchStart, onTouchMove, onTouchEnd]);

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{ cursor: tool === "sticky-note" ? "cell" : "crosshair" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClick={onClick}
      />
      {Object.values(cursors).map((cursor) => (
        <div
          key={cursor.userId}
          className={styles.cursor}
          style={{ left: cursor.x, top: cursor.y }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M0 0 L0 12 L3 9 L6 15 L8 14 L5 8 L9 8 Z"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
          <span className={styles.cursorLabel}>{cursor.displayName}</span>
        </div>
      ))}
      {Object.values(stickyNotes).map((note) => (
        <StickyNoteComponent
          key={note.id}
          note={note}
          onUpdate={handleNoteUpdate}
          onDelete={handleNoteDelete}
        />
      ))}
    </div>
  );
}
