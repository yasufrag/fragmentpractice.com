// SVG（public/icon.svg）→ 各種 PNG / ICO を一括生成（フル対応）
// 16px は除外。アンチエイリアス最適化＆Apple Touch複数サイズを出力

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "public", "icon.svg");
const OUT = path.join(ROOT, "public");

// 一般（favicon/manifest 等）
const PNG_SIZES = [32, 48, 64, 180, 192, 512];

// Apple Touch Icon（端末別フル）
const APPLE_SIZES = [120, 152, 167, 180];

// ICO に含めるサイズ（Windows 用）
const ICO_SIZES = [32, 48, 64];

// 小サイズほど密度を高め、エッジを滑らかに
const svgDensity = 480;

async function ensureExists(file) {
  try { await fs.access(file); }
  catch { throw new Error(`Source SVG not found: ${file}`); }
}

async function renderPng(size, name) {
  const filename = name ?? `favicon-${size}x${size}.png`;
  const out = path.join(OUT, filename);

  const buf = await sharp(SRC, { density: svgDensity, unlimited: true })
    .resize(size, size, {
      fit: "cover",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
      background: { r: 255, g: 255, b: 255, alpha: 0 }, // 透過保持
    })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      effort: 10,
      palette: size <= 64, // 小サイズは減色
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
  console.log("→ Generating icons from public/icon.svg");
  await ensureExists(SRC);

  // 一般 PNG
  const results = [];
  for (const s of PNG_SIZES) {
    const r = await renderPng(s);
    results.push(r);
    console.log(`  ✓ favicon-${s}x${s}.png`);
  }

  // Apple Touch（ファイル名は慣例に合わせる）
  for (const s of APPLE_SIZES) {
    await renderPng(s, `apple-touch-icon-${s}x${s}.png`);
    console.log(`  ✓ apple-touch-icon-${s}x${s}.png`);
  }
  // 互換用（iOS は 180 を優先で拾うため alias も用意）
  await fs.copyFile(
    path.join(OUT, "apple-touch-icon-180x180.png"),
    path.join(OUT, "apple-touch-icon.png")
  );
  console.log("  ✓ apple-touch-icon.png (alias → 180x180)");

  // ICO
  const icoInput = [];
  for (const s of ICO_SIZES) {
    const hit = results.find((r) => r.size === s);
    if (hit) icoInput.push(hit.buf);
    else icoInput.push((await renderPng(s)).buf);
  }
  const icoPath = await renderIco(icoInput);
  console.log(`  ✓ ${path.basename(icoPath)}`);

  console.log("✔ Done. Files written to /public");
})().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});