import { ImageResponse } from "next/og";
import { updates } from "@/data/updates";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: { slug: string };
}) {
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
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: -0.5,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <svg width="92" height="92" viewBox="0 0 100 100">
            <circle cx="55" cy="50" r="45" fill="#E4582B" />
            <g
              transform="translate(5,0)"
              stroke="#DDD"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M0 76 Q 25 68, 50 76 T 100 76" />
              <path d="M0 86 Q 25 78, 50 86 T 100 86" />
            </g>
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>
              Fragment Practice
            </div>
            <div style={{ display: "flex", fontSize: 24, color: "#6C6F75" }}>
              fragmentpractice.com{date ? ` ・ ${date}` : ""}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}