// scripts/gen-og.mts
// 共通 OG（/public/og.jpg）だけ生成する軽量スクリプト（JSX不要版）
// ※ 角括弧の JSX を使わず、Satori が受け取れる「JSX互換オブジェクト」を渡してます。

import satori from "satori";
import sharp from "sharp";
import * as fs from "node:fs/promises";
import { join } from "node:path";

/** フォント読込（public/fonts から） */
async function loadFont(file: string, name: string, weight = 400) {
  const fontPath = join(process.cwd(), "public", "fonts", file);
  const data = await fs.readFile(fontPath);
  return { name, data, weight, style: "normal" as const };
}

/** ロゴの“波紋”モチーフ（SVGオブジェクト） */
function waves(size = 100) {
  return {
    type: "svg",
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      width: size,
      height: size,
      children: [
        { type: "circle", props: { cx: 50, cy: 50, r: 45, fill: "#E4582B" } },
        {
          type: "g",
          props: {
            stroke: "#C8C9CC",
            strokeWidth: 6,
            strokeLinecap: "round",
            fill: "none",
            children: [
              { type: "path", props: { d: "M0 76 Q 25 68, 50 76 T 100 76" } },
              { type: "path", props: { d: "M0 86 Q 25 78, 50 86 T 100 86" } },
            ],
          },
        },
      ],
    },
  };
}

/** 共通フレーム（タイトル＋ブランド列） */
function frame() {
  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FAFAF7",
        color: "#0B0B0B",
        padding: "64px 80px",
        fontFamily:
          'Sora, "Zen Kaku Gothic New", "Noto Sans JP", system-ui, -apple-system, sans-serif',
      },
      children: [
        // タイトル
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 8,
              lineHeight: 1.12,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 76,
                    fontWeight: 800,
                    letterSpacing: -1,
                  },
                  children: "Fragment Practice",
                },
              },
            ],
          },
        },
        // ブランド行
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: 28 },
            children: [
              waves(120),
              {
                type: "div",
                props: {
                  style: { display: "flex", flexDirection: "column" },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", fontSize: 44, fontWeight: 800 },
                        children: "Fragment Practice — Company",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          fontSize: 28,
                          color: "#6C6F75",
                          marginTop: 6,
                        },
                        children: "共創・実験・編集のためのスタジオ",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

/** SVG→PNG 変換 */
async function renderToPNG(jsxLike: any, fonts: any) {
  const svg = await satori(jsxLike, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toBuffer();
}

async function main() {
  console.log("→ Generating OG image (Satori + Sharp)");
  const fonts = [
    await loadFont("Sora-Bold.ttf", "Sora", 700),
    await loadFont("ZenKakuGothicNew-Regular.ttf", "Zen Kaku Gothic New", 400),
  ];

  const outFile = join(process.cwd(), "public", "og.jpg");
  const png = await renderToPNG(frame(), fonts);
  await fs.writeFile(outFile, png);

  console.log("  ✓ public/og.jpg");
  console.log("✔ Done.");
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});