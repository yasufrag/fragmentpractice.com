// components/BrandLogo.tsx
"use client";

import { memo, useId } from "react";

export default memo(function BrandLogo() {
  const uid = useId();
  const titleId = `fp-logo-${uid}`;
  const maskId = `fp-bite-${uid}`;

  // ヘッダー固定スケール
  const FONT = 22;
  const LINE = 22;
  const CIRCLE = 40;
  const GAP = 12;
  const SVG_H = 50;
  const BASE_Y = 29;
  const CY = 30;

  // 欠け設定（案A）
  const BITE_ANGLE_DEG = 20; // 0=右, 90=下
  const BITE_RATIO = 0.33;   // 半径に対する欠けの半径
  const toRad = (d: number) => (d * Math.PI) / 180;

  const biteR = (CIRCLE / 2) * BITE_RATIO;
  const biteCx = CIRCLE / 2 + (CIRCLE / 2) * Math.cos(toRad(BITE_ANGLE_DEG));
  const biteCy = CY + (CIRCLE / 2) * Math.sin(toRad(BITE_ANGLE_DEG));

  // ビューボックス（テキスト分に余裕を見て広め）
  const textW = FONT * 10;
  const viewW = CIRCLE + GAP + textW;
  const viewH = Math.max(SVG_H, CY + CIRCLE / 2 + 4);

  return (
    <svg
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewW} ${viewH}`}
      preserveAspectRatio="xMinYMid meet"
      className="fp-brandlogo"               // ← CSSでフォント適用（下記2)参照）
      style={{ height: SVG_H, width: "auto", display: "block" }}
    >
      <title id={titleId}>Fragment Practice</title>

      {/* 欠けマスク */}
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width={viewW} height={viewH} fill="white" />
          <circle cx={biteCx} cy={biteCy} r={biteR} fill="black" />
        </mask>
      </defs>

      {/* 欠けた円（柿色＝--accent に追従） */}
      <circle
        cx={CIRCLE / 2}
        cy={CY}
        r={CIRCLE / 2}
        fill="var(--accent)"
        mask={`url(#${maskId})`}
      />

      {/* ワードマーク（見出しフォント＝--font-display を“CSS＆inline”で二重適用） */}
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