// components/BrandLogo.tsx
"use client";

import { memo } from "react";

function BrandLogo() {
  // 見た目サイズ
  const HEIGHT = 50;
  // 左のシンボルは 100x100 図案を 0.4 倍で描画（= 40px 相当）
  const SYMBOL_SCALE = 0.4;
  const SYMBOL_TX = 0;
  const SYMBOL_TY = 5;

  // === 図案（100x100）側のジオメトリ ===
  // ※「アイコン版」に合わせて円の中心は (50,50)
  const CIRCLE_CX = 50;
  const CIRCLE_CY = 50;
  const CIRCLE_R  = 45;

  // 波（開始0→終了100、中心X=50で対称）もアイコン版に合わせる
  const W1 = 76;
  const W2 = 86;
  const CTRL_UP = 8;
  const WAVE_STROKE = 5; // アイコンSVGと同値（スケールで最終約2px相当）

  // ワードマークを少し詰めて配置
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
          strokeWidth={WAVE_STROKE}
          strokeLinecap="round"
          fill="none"
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