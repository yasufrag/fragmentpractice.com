// components/BrandLogo.tsx
"use client";

import { useId } from "react";

type BrandLogoProps = {
  /** ヘッダー用 or コンパクト（例：フッター/カード） */
  size?: "header" | "compact";
  /** テキスト色（既定: currentColor） */
  color?: string;
  /** 円の色（既定: var(--accent)） */
  accent?: string;
  /** 高さ(px)。未指定なら size に応じた推奨値 */
  height?: number;
  /** ベースラインの微調整 */
  offset?: number;
  /** 内側の小さなドットを表示するか */
  showBadge?: boolean;
  /** アクセシビリティ用のラベル/タイトル */
  label?: string;
};

export default function BrandLogo({
  size = "header",
  color = "currentColor",
  accent = "var(--accent)",
  height,
  offset = 0,
  showBadge = true,
  label = "Fragment Practice",
}: BrandLogoProps) {
  const titleId = useId();

  // スケール定義（見た目を保ちながらシンプルに）
  const S = size === "header"
    ? { font: 22, line: 22, circle: 40, gap: 12, svgH: 50, baseY: 28, cy: 31 }
    : { font: 16, line: 20, circle: 30, gap:  8, svgH: 40, baseY: 24, cy: 25 };

  const svgHeight = height ?? S.svgH;
  // 横幅は可変（テキスト長に合わせつつ、余白を確保）
  // ざっくり算出: 円の直径 + ギャップ + テキスト2行ぶんの目安幅
  // ※ auto なので viewBox を広めに取って安全側に
  const viewW = S.circle + S.gap + (S.font * 10);
  const viewH = Math.max(S.svgH, S.cy + S.circle / 2 + 4);

  return (
    <svg
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewW} ${viewH}`}
      preserveAspectRatio="xMinYMid meet"
      style={{ height: svgHeight, width: "auto", display: "block" }}
    >
      <title id={titleId}>{label}</title>

      {/* 円（ブランドアクセントに連動） */}
      <circle
        cx={S.circle / 2}
        cy={S.cy}
        r={S.circle / 2}
        fill={accent}
      />
      {showBadge && (
        <circle
          cx={S.circle / 2}
          cy={S.cy}
          r={S.circle / 4}
          fill="var(--bg)" /* 背景色に追従：和紙の“気配”を保つ */
        />
      )}

      {/* テキスト（見出しフォントに追従） */}
      <g
        transform={`translate(${S.circle + S.gap}, ${offset})`}
        style={{
          fontFamily:
            // next/font の変数 → フォールバック（安全側）
            'var(--font-display), "Sora", ui-sans-serif, system-ui, -apple-system, "Zen Kaku Gothic New", "Noto Sans JP", sans-serif',
          fontWeight: 700 as any,
          fill: color,
        }}
      >
        <text
          x={0}
          y={S.baseY}
          fontSize={S.font}
        >
          Fragment
        </text>
        <text
          x={0}
          y={S.baseY + S.line}
          fontSize={S.font}
        >
          Practice
        </text>
      </g>
    </svg>
  );
}