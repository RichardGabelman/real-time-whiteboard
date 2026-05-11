import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import type { DrawEvent, CursorEvent } from "@shared/types";
import styles from "./Canvas.module.css";

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

interface Props {
  boardId: string;
  socket: Socket;
}

interface RemoteCursor {
  userId: string;
  x: number;
  y: number;
}

export default function Canvas({ boardId, socket }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const [color] = useState("#000000");
  const [lineWidth] = useState(3);
  const [cursors, setCursors] = useState<Record<string, RemoteCursor>>({});

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
        [event.userId]: { userId: event.userId, x: event.x, y: event.y },
      }));
    };

    const handleUserLeft = ({ socketId }: { socketId: string }) => {
      setCursors((prev) => {
        const next = { ...prev };
        delete next[socketId];
        return next;
      });
    };

    socket.on("draw", handleDraw);
    socket.on("board-history", handleHistory);
    socket.on("cursor-move", handleCursor);
    socket.on("user-left", handleUserLeft);

    return () => {
      socket.off("draw", handleDraw);
      socket.off("board-history", handleHistory);
      socket.off("cursor-move", handleCursor);
      socket.off("user-left", handleUserLeft);
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
    isDrawing.current = true;
    const point = getPoint(e);
    lastPoint.current = point;

    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(point.x, point.y, lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    socket.emit("draw", {
      boardId,
      socketId: socket.id ?? "",
      x0: point.x,
      y0: point.y,
      x1: point.x,
      y1: point.y,
      color,
      width: lineWidth,
    });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!socket) return;
    const current = getPoint(e);

    socket.emit("cursor-move", {
      boardId,
      socketId: socket.id ?? "",
      userId: socket.id ?? "",
      x: current.x,
      y: current.y,
    });

    if (!isDrawing.current || !lastPoint.current) {
      lastPoint.current = current;
      return;
    }

    const ctx = ctxRef.current;
    if (!ctx) return;

    renderStroke(ctx, lastPoint.current, current, color, lineWidth);

    socket.emit("draw", {
      boardId,
      socketId: socket.id ?? "",
      x0: lastPoint.current.x,
      y0: lastPoint.current.y,
      x1: current.x,
      y1: current.y,
      color,
      width: lineWidth,
    });

    lastPoint.current = current;
  };

  const onMouseUp = () => {
    isDrawing.current = false;
    lastPoint.current = null;
  };

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
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
          <span className={styles.cursorLabel}>
            {cursor.userId.slice(0, 6)}
          </span>
        </div>
      ))}
    </div>
  );
}
