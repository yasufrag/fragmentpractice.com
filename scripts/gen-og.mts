// scripts/gen-og.mts
import * as fs from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";
import type { CSSProperties } from "react";

// フォント読み込み
async function loadFont(file: string, name: string, weight = 400) {
  const fontPath = join(process.cwd(), "public", "fonts", file);
  const data = await fs.readFile(fontPath);
  return { name, data, weight, style: "normal" as const };
}

// OG レイアウト
function Frame() {
  return (
    <div
      style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E4582B",
          color: "white",
          width: "1200px",
          height: "630px",
          fontFamily: "Sora, ZenKaku",
        } as CSSProperties
      }
    >
      {/* ロゴ風の円と波 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="160"
        height="160"
      >
        <circle cx="50" cy="50" r="45" fill="#E4582B" />
        <g
          stroke="#D5D7DB"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M0 76 Q 25 68, 50 76 T 100 76" />
          <path d="M0 86 Q 25 78, 50 86 T 100 86" />
        </g>
      </svg>

      <h1
        style={
          {
            marginTop: "48px",
            fontSize: "64px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          } as CSSProperties
        }
      >
        FRAGMENT PRACTICE
      </h1>
    </div>
  );
}

// メイン処理
async function main() {
  const fonts = [
    await loadFont("Sora-Bold.ttf", "Sora", 700),
    await loadFont("ZenKakuGothicNew-Regular.ttf", "ZenKaku", 400),
  ];

  const svg = await satori(<Frame />, {
    width: 1200,
    height: 630,
    fonts,
  });

  const png = await sharp(Buffer.from(svg)).jpeg().toBuffer();

  await fs.writeFile("public/og.jpg", png);
  console.log("✅ OG image written to public/og.jpg");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});