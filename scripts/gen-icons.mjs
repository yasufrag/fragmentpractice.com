// scripts/gen-icons.mjs
// SVG（public/icon.svg）から各種 PNG と ICO を生成
// 16px は外し、見栄えが崩れにくい 32px 以上のみ出力

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "public", "icon.svg");
const OUT = path.join(ROOT, "public");

// 生成したい PNG サイズ（16 は除外）
const PNG_SIZES = [32, 48, 64, 180, 192, 512];

// ICO に含める解像度（Win 向けに 32/48/64 を用意）
const ICO_SIZES = [32, 48, 64];

// 小さいアイコンほど密度を上げてアンチエイリアスを効かせる
// （sharp の SVG → ラスタライズ時のオプション）
const svgDensity = 480; // 300〜600 あたりが無難

async function ensureExists(file) {
  try {
    await fs.access(file);
  } catch {
    throw new Error(`Source SVG not found: ${file}`);
  }
}

async function renderPng(size) {
  const out = path.join(OUT, `favicon-${size}x${size}.png`);
  const buf = await sharp(SRC, { density: svgDensity, unlimited: true })
    .resize(size, size, {
      fit: "cover",
      kernel: sharp.kernel.lanczos3, // 小さいサイズでのエッジを滑らかに
      withoutEnlargement: false,
    })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      effort: 10,
      palette: size <= 64, // 小さいサイズは減色でにじみを抑える
    })
    .toBuffer();

  await fs.writeFile(out, buf);
  return { size, path: out, buf };
}

async function renderIco(buffers) {
  const icoBuf = await pngToIco(buffers);
  const icoPath = path.join(OUT, "favicon.ico");
  await fs.writeFile(icoPath, icoBuf);
  return icoPath;
}

(async () => {
  console.log("→ Generating favicons from public/icon.svg");
  await ensureExists(SRC);

  // PNG を生成
  const results = [];
  for (const s of PNG_SIZES) {
    const r = await renderPng(s);
    results.push(r);
    console.log(`  ✓ favicon-${s}x${s}.png`);
  }

  // ICO を生成（32/48/64）
  const icoInput = [];
  for (const s of ICO_SIZES) {
    const hit = results.find((r) => r.size === s);
    if (hit) icoInput.push(hit.buf);
    else {
      // 無ければ都度生成
      const r = await renderPng(s);
      icoInput.push(r.buf);
    }
  }
  const icoPath = await renderIco(icoInput);
  console.log(`  ✓ ${path.basename(icoPath)}`);

  console.log("✔ Done. Files written to /public");
})().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});