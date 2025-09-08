// components/BrandLogo.tsx
"use client";

import { memo } from "react";

function BrandLogo() {
  const HEIGHT = 50;          // ロゴ全体の高さ
  const SYMBOL_SCALE = 0.4;   // 100x100図案 → 40px相当
  const SYMBOL_TX = 0;
  const SYMBOL_TY = 5;

  const CIRCLE_CX = 55;       // 太陽の中心X
  const CIRCLE_CY = 50;
  const CIRCLE_R  = 45;

  // 波の基準
  const W1 = 76;
  const W2 = 86;
  const CTRL_UP = 8;

  const WORDMARK_TX = 60;

  return (
    <svg
      role="img"
      aria-label="Fragment Practice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 50"
      className="fp-brandlogo"
      style={{ height: HEIGHT, width: "auto", display: "block" }}
    >
      {/* シンボル（太陽＋波） */}
      <g transform={`translate(${SYMBOL_TX},${SYMBOL_TY}) scale(${SYMBOL_SCALE})`}>
        <circle cx={CIRCLE_CX} cy={CIRCLE_CY} r={CIRCLE_R} fill="var(--accent)" />
        <g
          stroke="hsl(0 0% 88%)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          transform="translate(5,0)" // ★ 波全体をX方向に+5移動
        >
          <path d={`M0 ${W1} Q 25 ${W1 - CTRL_UP}, 50 ${W1} T 100 ${W1}`} />
          <path d={`M0 ${W2} Q 25 ${W2 - CTRL_UP}, 50 ${W2} T 100 ${W2}`} />
        </g>
      </g>

      {/* ワードマーク */}
      <g
        transform={`translate(${WORDMARK_TX},0)`}
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