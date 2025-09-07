// components/BrandLogo.tsx
"use client";

import { memo } from "react";

function BrandLogo() {
  // 図案（100x100）内の円の中心X
  const CIRCLE_CX = 55;
  // 波パスは中心X=50で描いてあるので +5 平行移動で揃える
  const WAVE_OFFSET_X = CIRCLE_CX - 50; // = 5

  return (
    <svg
      role="img"
      aria-label="Fragment Practice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165 50"
      className="fp-brandlogo"
      style={{ height: 50, width: "auto", display: "block" }}
    >
      {/* ── シンボル（太陽＋波） */}
      <g transform="translate(0,5) scale(0.4)">
        <circle cx={CIRCLE_CX} cy="50" r="45" fill="var(--accent)" />
        <g
          transform={`translate(${WAVE_OFFSET_X},0)`}
          stroke="#d9d9d9"
          strokeWidth={6}
          fill="none"
          strokeLinecap="round"
        >
          <path d="M0 72 Q 25 64, 50 72 T 100 72" />
          <path d="M0 82 Q 25 74, 50 82 T 100 82" />
        </g>
      </g>

      {/* ── ワードマーク（少し詰める：70 → 62） */}
      <g
        transform="translate(60,0)"
        style={{
          fontFamily:
            'var(--font-display), "Sora", ui-sans-serif, system-ui, "Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
          fontWeight: 700,
          letterSpacing: "-0.01em",
          fill: "currentColor",
          textRendering: "optimizeLegibility",
        }}
      >
        <text x={0} y={22} fontSize={20}>Fragment</text>
        <text x={0} y={45} fontSize={20}>Practice</text>
      </g>
    </svg>
  );
}

export default memo(BrandLogo);