// src/components/BrandLogo.tsx
type BrandLogoProps = {
  size?: "header" | "compact";
  offset?: number; // Yオフセット（見た目調整用）
  variant?: "light" | "dark";
};

export default function BrandLogo({
  size = "header",
  offset = 0,
  variant = "dark",
}: BrandLogoProps) {
  const fontSize = size === "header" ? 28 : 22;
  const vbW = 400;
  const vbH = 80;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      role="img"
      aria-label="Fragment Practice"
      preserveAspectRatio="xMinYMid meet"
      style={{
        height: size === "header" ? "clamp(28px, 6vw, 56px)" : "clamp(22px, 5vw, 40px)",
        width: "auto",
        display: "block",
      }}
    >
      <title>Fragment Practice</title>
      {/* 円 */}
      <circle cx="30" cy="40" r="24" fill={variant === "light" ? "#fff" : "#000"} />
      <circle cx="30" cy="40" r="10" fill={variant === "light" ? "#000" : "#fff"} />

      {/* テキスト */}
      <text
        x="70"
        y={48 + offset}
        fontFamily='-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Segoe UI",
          "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif'
        fontWeight="900"
        fontSize={fontSize}
        letterSpacing="-0.01em"
        fill={variant === "light" ? "#fff" : "#000"}
        dominantBaseline="middle"
      >
        Fragment Practice
      </text>
    </svg>
  );
}