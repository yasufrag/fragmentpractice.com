import { ImageResponse } from "next/og";

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
          background: "#FAFAF7",        // var(--bg)
          color: "#0B0B0B",             // var(--fg)
          padding: "60px 80px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* タイトル */}
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>
          Fragment Practice
        </div>

        {/* ロゴ＋サブコピー */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* シンボル（太陽＋波） */}
          <svg width="120" height="120" viewBox="0 0 100 100">
            {/* 太陽（柿色） */}
            <circle cx="55" cy="50" r="45" fill="#E4582B" />
            {/* 波（円の中心X=55 に合わせるため +5px） */}
            <g transform="translate(5,0)" stroke="#DDD" strokeWidth="6" fill="none" strokeLinecap="round">
              <path d="M0 76 Q 25 68, 50 76 T 100 76" />
              <path d="M0 86 Q 25 78, 50 86 T 100 86" />
            </g>
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 800 }}>Fragment Practice — Company</div>
            <div style={{ fontSize: 28, color: "#6C6F75", marginTop: 6 }}>
              共創・実験・編集のためのスタジオ
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}