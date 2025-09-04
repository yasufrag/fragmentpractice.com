// src/components/BrandLogo.tsx
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
  offset,
}: BrandLogoProps) {
  // ── sizeごとの最小セット（内部定数は必要最低限）
  const cfg =
    size === "header"
      ? { vbW: 760, vbH: 160, r: 40, hole: 18, gap: 32, font: 44, lineGap: 54, capAdj: -0.5, off: 2.5 }
      : { vbW: 500, vbH: 120, r: 26, hole: 11, gap: 20, font: 28, lineGap: 36, capAdj: -0.25, off: 2.0 };

  const centerY = cfg.vbH / 2;
  const textX   = cfg.r * 2 + cfg.gap;
  const offY    = offset ?? cfg.off;

  // 2行のベースライン：中心対称 + offsetぶんだけ全体を上下にスライド
  const yTop    = centerY - cfg.lineGap / 2 + offY + cfg.capAdj;
  const yBottom = centerY + cfg.lineGap / 2 + offY + cfg.capAdj;

  return (
    <svg
      viewBox={`0 0 ${cfg.vbW} ${cfg.vbH}`}
      role="img"
      aria-label="Fragment Practice"
      preserveAspectRatio="xMinYMid meet"
      style={{ height: height ?? (size === "header" ? 56 : 38), width: "auto", display: "block", color }}
    >
      <title>Fragment Practice</title>

      {/* ドーナツ円（塗り：currentColor / 穴：マスク） */}
      <defs>
        <mask id="fp-ring">
          <rect width="100%" height="100%" fill="#fff" />
          <circle cx={cfg.r} cy={centerY} r={cfg.hole} fill="#000" />
        </mask>
      </defs>
      <circle cx={cfg.r} cy={centerY} r={cfg.r} fill="currentColor" mask="url(#fp-ring)" />

      {/* タイプ（2行） */}
      <g
        fill="currentColor"
        fontFamily='-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"Segoe UI","Noto Sans JP","Hiragino Kaku Gothic ProN","Meiryo",sans-serif'
        fontWeight={800}
        fontSize={cfg.font}
        letterSpacing="-0.015em"
      >
        <text x={textX} y={yTop} dominantBaseline="alphabetic">Fragment</text>
        <text x={textX} y={yBottom} dominantBaseline="alphabetic">Practice</text>
      </g>
    </svg>
  );
}