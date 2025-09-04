// src/components/BrandLogo.tsx
type BrandLogoProps = {
  size?: "small" | "large";
  color?: string;
  height?: number;
};

export default function BrandLogo({
  size = "small",
  color = "currentColor",
  height,
}: BrandLogoProps) {
  const fontSize = size === "large" ? 80 : 28;   // フォントを少し大きく
  const vbH = size === "large" ? 120 : 64;
  const vbW = size === "large" ? 820 : 320;
  const y = size === "large" ? 88 : 46;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      role="img"
      aria-label="Fragment Practice"
      preserveAspectRatio="xMinYMid meet"
      style={{
        height: height ?? (size === "large" ? 80 : 36), // ← 小でも36pxに
        width: "auto",
        display: "block",
      }}
    >
      <title>Fragment Practice</title>
      <text
        x="0"
        y={y}
        fontFamily='-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Segoe UI",
          "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif'
        fontWeight="900"           // ← BoldからExtra Boldへ
        fontSize={fontSize}
        letterSpacing="-0.01em"    // ← 少し読みやすく
        fill={color}
        dominantBaseline="alphabetic"
      >
        Fragment Practice
      </text>
    </svg>
  );
}