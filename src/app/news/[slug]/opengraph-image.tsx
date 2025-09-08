// src/app/news/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { updates } from "@/data/updates";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG({ params }: { params: { slug: string } }) {
  const u = updates.find((x) => x.slug === params.slug);

  const title = u?.title ?? "Fragment Practice — News";
  const date = u
    ? new Date(u.date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7",
          color: "#0B0B0B",
          padding: "64px 80px",
        }}
      >
        {/* タイトル */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -0.5,
            lineHeight: 1.25,
          }}
        >
          {title}
        </div>

        {/* ロゴ & サイト情報 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* ロゴ */}
          <svg
            width="92"
            height="92"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" fill="#E4582B" />
            <g
              stroke="#D5D7DB"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M0 76 Q 25 68, 50 76 T 100 76" />
              <path d="M0 86 Q 25 78, 50 86 T 100 86" />
            </g>
          </svg>

          {/* サイト名 & URL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 800,
              }}
            >
              Fragment Practice
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#6C6F75",
              }}
            >
              fragmentpractice.com{date ? ` ・ ${date}` : ""}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}