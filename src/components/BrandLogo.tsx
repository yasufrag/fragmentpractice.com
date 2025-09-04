type BrandLogoProps = {
  size?: "header" | "compact";
  color?: string;
  height?: number;
  offset?: number;
};

export default function BrandLogo({
  size = "header",
  color = "currentColor",
  height,
  offset = 0,
}: BrandLogoProps) {
  const isHeader = size === "header";
  const fontSize = isHeader ? 22 : 16;   // 文字サイズ
  const lineHeight = isHeader ? 22 : 20; // 行間
  const circleSize = isHeader ? 40 : 30; // 円の大きさ
  const textOffset = isHeader ? 12 : 6;   // 円と文字の間隔

  return (
    <svg
      role="img"
      aria-label="Fragment Practice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 60"
      preserveAspectRatio="xMinYMid meet"
      style={{
        height: height ?? (isHeader ? 50 : 40),
        width: "auto",
        display: "block",
      }}
    >
      <title>Fragment Practice</title>

      {/* 円 */}
      <circle
        cx={circleSize / 2}
        cy={31}
        r={circleSize / 2}
        fill={color}
      />
      <circle
        cx={circleSize / 2}
        cy={31}
        r={circleSize / 4}
        fill="white"
      />

      {/* 二行テキスト */}
      <text
        x={circleSize + textOffset}
        y={28 + offset}
        fontFamily='-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Segoe UI",
          "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif'
        fontWeight="700"
        fontSize={fontSize}
        fill={color}
      >
        Fragment
      </text>
      <text
        x={circleSize + textOffset}
        y={28 + lineHeight}
        fontFamily='-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Segoe UI",
          "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif'
        fontWeight="700"
        fontSize={fontSize}
        fill={color}
      >
        Practice
      </text>
    </svg>
  );
}