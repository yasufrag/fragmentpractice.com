// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

// ── Static config
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7", // 背景色
          color: "#0B0B0B",      // テキスト色
          padding: "64px 80px",
        }}
      >
        {/* --- Headline --- */}
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: -1,
            lineHeight: 1.12,
          }}
        >
          Fragment Practice
        </div>

        {/* --- Brand row --- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* Symbol (sun + waves) */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            style={{ display: "block" }}
          >
            <circle cx="50" cy="50" r="45" fill="#E4582B" />
            <g
              stroke="#C8C9CC" // 少し濃いグレー
              strokeWidth={6}
              strokeLinecap="round"
              fill="none"
            >
              <path d="M0 76 Q 25 68, 50 76 T 100 76" />
              <path d="M0 86 Q 25 78, 50 86 T 100 86" />
            </g>
          </svg>

          {/* Text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 44,
                fontWeight: 800,
              }}
            >
              Fragment Practice — Company
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#6C6F75",
                marginTop: 6,
              }}
            >
              共創・実験・編集のためのスタジオ
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}