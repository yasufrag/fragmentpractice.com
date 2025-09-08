// scripts/gen-og.mts
// すべての OG 画像（共通 / News）を Satori + Sharp で生成
// フォントは public/fonts から読み込む（オフライン可）

import satori from "satori";
import sharp from "sharp";
import * as fs from "node:fs/promises";
import path from "node:path";
// どんなエクスポート形でも拾えるようにする
import * as updatesMod from "../src/data/updates";

type Update = { slug: string; title: string; date: string };

const updates: Update[] =
  // named export `updates`
  (updatesMod as any).updates ??
  // default export
  (updatesMod as any).default ??
  // それでも無ければ空配列で続行（警告あり）
  (console.warn(
    "[gen-og] No exports found in src/data/updates. Skipping News OG generation."
  ),
  []);

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public");
const FONTS = path.join(PUB, "fonts");

const WIDTH = 1200 as const;
const HEIGHT = 630 as const;

async function loadFonts() {
  type FontMeta = {
    name: string;
    file: string;
    weight: number;
    style: "normal" | "italic";
  };
  const must: FontMeta[] = [
    { name: "Sora", file: "Sora-Bold.ttf", weight: 700, style: "normal" },
    { name: "Zen Kaku Gothic New", file: "ZenKakuGothicNew-Regular.ttf", weight: 400, style: "normal" },
  ];

  const detectFormat = (buf: Buffer): "ttf" | "otf" | "woff" | "woff2" | "ttc" | "unknown" => {
    const sig = buf.subarray(0, 4).toString("ascii");
    if (sig === "OTTO") return "otf";
    if (sig === "wOFF") return "woff";
    if (sig === "wOF2") return "woff2";
    if (sig === "ttcf") return "ttc";
    // TTF は 00 01 00 00 か "true"
    if (buf[0] === 0x00 && buf[1] === 0x01 && buf[2] === 0x00 && buf[3] === 0x00) return "ttf";
    if (sig === "true") return "ttf";
    return "unknown";
  };

  const fonts: Array<{
    name: string;
    data: Buffer;
    weight: number;
    style: "normal" | "italic";
    // satori は format を指定可能（woff/woff2 を安全に扱う）
    format?: "woff" | "woff2" | "ttf" | "otf";
  }> = [];

  for (const f of must) {
    const p = path.join(FONTS, f.file);
    let data: Buffer;
    try {
      data = await fs.readFile(p);
    } catch {
      throw new Error(
        `Font not found: ${p}\n→ public/fonts/ に ${f.file} を配置してください（name="${f.name}", weight=${f.weight}).`
      );
    }

    const format = detectFormat(data);
    if (format === "unknown" || format === "ttc") {
      throw new Error(
        `Unsupported font format for ${f.file} (detected: ${format}).\n` +
          `→ TTF/OTF か WOFF/WOFF2 を用意してください（TTCは不可）。`
      );
    }

    // opentype.js 経由の satori は TTF/OTF が最も堅い。
    // WOFF/WOFF2 も format を付ければ動きますが、ビルドの相性で弾かれることがあります。
    fonts.push({
      name: f.name,
      data,
      weight: f.weight,
      style: f.style,
      format: format === "woff" || format === "woff2" ? format : undefined,
    });
  }
  return fonts;
}

function brandSymbol(size = 120) {
  return {
    type: "svg",
    props: {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      style: { display: "block" },
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

function frame({
  titleTop,
  titleBottom,
  subtitle,
}: {
  titleTop?: string;
  titleBottom?: string;
  subtitle?: { title?: string; desc?: string };
}) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
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
        // Headline
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 8, lineHeight: 1.12 },
            children: [
              titleTop && {
                type: "div",
                props: {
                  style: { display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -1 },
                  children: titleTop,
                },
              },
              titleBottom && {
                type: "div",
                props: {
                  style: { display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -1 },
                  children: titleBottom,
                },
              },
            ].filter(Boolean),
          },
        },
        // Brand row
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: 28 },
            children: [
              brandSymbol(120),
              {
                type: "div",
                props: {
                  style: { display: "flex", flexDirection: "column" },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", fontSize: 44, fontWeight: 800 },
                        children: subtitle?.title ?? "Fragment Practice",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", fontSize: 28, color: "#6C6F75", marginTop: 6 },
                        children: subtitle?.desc ?? "fragmentpractice.com",
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

async function renderToPng(jsx: any, fonts: any) {
  // 1) SatoriでSVG生成
  const svg = await satori(jsx, { width: WIDTH, height: HEIGHT, fonts });
  // 2) SharpでPNG化（*.jpg を書くなら .jpeg() に切替）
  const buf = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return buf;
}

async function buildCommonOG(fonts: any) {
  const jsx = frame({
    titleTop: "Fragment Practice",
    subtitle: {
      title: "Fragment Practice — Company",
      desc: "共創・実験・編集のためのスタジオ",
    },
  });
  const out = path.join(PUB, "og.jpg");
  const png = await renderToPng(jsx, fonts);
  await fs.writeFile(out, png);
  console.log("  ✓ public/og.jpg");
}

async function buildNewsOG(fonts: any) {
  if (!Array.isArray(updates) || updates.length === 0) {
    console.log("  ↷ No updates. Skipped News OG generation.");
    return;
  }

  const outDir = path.join(PUB, "og-news");
  await fs.mkdir(outDir, { recursive: true });

  for (const u of updates) {
    const date = new Date(u.date).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const jsx = {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
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
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: -0.5,
                lineHeight: 1.25,
              },
              children: u.title,
            },
          },
          // ブランド行
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: 28 },
              children: [
                brandSymbol(92),
                {
                  type: "div",
                  props: {
                    style: { display: "flex", flexDirection: "column" },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: { display: "flex", fontSize: 32, fontWeight: 800 },
                          children: "Fragment Practice",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: { display: "flex", fontSize: 24, color: "#6C6F75" },
                          children: `fragmentpractice.com ・ ${date}`,
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

    const out = path.join(outDir, `${u.slug}.png`);
    const png = await renderToPng(jsx, fonts);
    await fs.writeFile(out, png);
    console.log(`  ✓ ${path.relative(PUB, out)}`);
  }
}

(async () => {
  console.log("→ Generating OG images (Satori + Sharp)");
  const fonts = await loadFonts();
  await buildCommonOG(fonts);  // /public/og.jpg
  await buildNewsOG(fonts);    // /public/og-news/*.png
  console.log("✔ Done. Files written to /public");
})().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});