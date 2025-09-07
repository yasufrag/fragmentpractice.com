// components/BrandLogo.tsx
"use client";

import { memo, useId } from "react";

export default memo(function BrandLogo() {
  const uid = useId();
  const titleId = `fp-logo-${uid}`;

  // ── 基本スケール
  const FONT = 22;
  const LINE = 22;
  const CIRCLE = 40;     // 左シンボルの直径
  const R = CIRCLE / 2;
  const GAP = 12;
  const SVG_H = 50;
  const BASE_Y = 29;
  const CY = 30;

  const textW = FONT * 10;
  const viewW = CIRCLE + GAP + textW;
  const viewH = Math.max(SVG_H, CY + R + 4);

  const SYM_SCALE = CIRCLE / 90;
  const SYM_TX = R - 50 * SYM_SCALE;
  const SYM_TY = CY - 50 * SYM_SCALE;

  // ── 波線位置（2本のみ）
  const W1 = 72, W2 = 82;
  const CTRL_UP = 8; // 山の高さ

  return (
    <svg
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewW} ${viewH}`}
      preserveAspectRatio="xMinYMid meet"
      className="fp-brandlogo"
      style={{ height: SVG_H, width: "auto", display: "block" }}
    >
      <title id={titleId}>Fragment Practice</title>

      {/* ── 太陽（柿色）＋ 海（白抜き波2本） */}
      <g transform={`translate(${SYM_TX}, ${SYM_TY}) scale(${SYM_SCALE})`}>
        <circle cx="50" cy="50" r="45" fill="var(--accent)" />

        <g
          stroke="var(--bg)" // 白抜き固定
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        >
          <path d={`M0 ${W1} Q 25 ${W1 - CTRL_UP}, 50 ${W1} T 100 ${W1}`} />
          <path d={`M0 ${W2} Q 25 ${W2 - CTRL_UP}, 50 ${W2} T 100 ${W2}`} />
        </g>
      </g>

      {/* ── ワードマーク */}
      <g
        transform={`translate(${CIRCLE + GAP}, 0)`}
        style={{
          fontFamily:
            'var(--font-display), "Sora", ui-sans-serif, system-ui, -apple-system, "Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
          fontWeight: 700 as any,
          letterSpacing: "-0.01em",
          fill: "currentColor",
          textRendering: "optimizeLegibility",
        }}
      >
        <text x={0} y={BASE_Y} fontSize={FONT}>Fragment</text>
        <text x={0} y={BASE_Y + LINE} fontSize={FONT}>Practice</text>
      </g>
    </svg>
  );
});