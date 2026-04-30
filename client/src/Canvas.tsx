import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

interface Props {
  boardId: string;
}

export default function Canvas({ boardId }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const [color] = useState("#000000");
  const [lineWidth] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

  const getPoint = (e: React.MouseEvent): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const drawLine = (
    ctx: CanvasRenderingContext2D,
    from: Point,
    to: Point,
    strokeColor: string,
    strokeWidth: number,
  ) => {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDrawing.current = true;
    lastPoint.current = getPoint(e);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing.current || !lastPoint.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const current = getPoint(e);
    drawLine(ctx, lastPoint.current, current, color, lineWidth);
    lastPoint.current = current;
  };

  const onMouseUp = () => {
    isDrawing.current = false;
    lastPoint.current = null;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{
        width: "100%",
        height: "100%",
        cursor: "crosshair",
        display: "block",
      }}
    />
  );
}
