import styles from "./Toolbar.module.css";

export type Tool = "pen" | "eraser" | "sticky-note";

interface Props {
  color: string;
  lineWidth: number;
  tool: Tool;
  onColorChange: (color: string) => void;
  onLineWidthChange: (width: number) => void;
  onToolChange: (tool: Tool) => void;
  onClear: () => void;
}

const COLORS = [
  "#000000",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#ffffff",
];

const LINE_WIDTHS = [2, 4, 8, 16];

export default function Toolbar({
  color,
  lineWidth,
  tool,
  onColorChange,
  onLineWidthChange,
  onToolChange,
  onClear,
}: Props) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.section}>
        {COLORS.map((c) => (
          <button
            key={c}
            className={`${styles.colorSwatch} ${color === c && tool === "pen" ? styles.active : ""}`}
            style={{ background: c }}
            onClick={() => {
              onColorChange(c);
              onToolChange("pen");
            }}
            title={c}
          />
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        {LINE_WIDTHS.map((w) => (
          <button
            key={w}
            className={`${styles.widthButton} ${lineWidth === w ? styles.active : ""}`}
            onClick={() => onLineWidthChange(w)}
            title={`${w}px`}
          >
            <div
              className={styles.widthPreview}
              style={{ height: w, width: w * 3 }}
            />
          </button>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <button
          className={`${styles.toolButton} ${tool === "eraser" ? styles.active : ""}`}
          onClick={() => onToolChange("eraser")}
          title="Eraser"
        >
          Erase
        </button>
        <button
          className={`${styles.toolButton} ${tool === "sticky-note" ? styles.active : ""}`}
          onClick={() => onToolChange("sticky-note")}
          title="Sticky note"
        >
          Note
        </button>
        <button
          className={styles.toolButton}
          onClick={onClear}
          title="Clear canvas"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
