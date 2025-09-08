// scripts/gen-icons.mjs
// SVG（public/icon.svg）から各種 PNG と ICO を生成
// 16px は外し、Apple Touch 向けも含めて出力

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "public", "icon.svg");
const OUT = path.join(ROOT, "public");

// 通常の favicon サイズ
const PNG_SIZES = [32, 48, 64, 192, 512];

// Apple Touch 用サイズ
const APPLE_SIZES = [120, 152, 167, 180];

// ICO に含めるサイズ
const ICO_SIZES = [32, 48, 64];

const svgDensity = 480;

async function ensureExists(file) {
  try {
    await fs.access(file);
  } catch {
    throw new Error(`Source SVG not found: ${file}`);
  }
}

async function renderPng(size, name = `favicon-${size}x${size}.png`) {
  const out = path.join(OUT, name);
  const buf = await sharp(SRC, { density: svgDensity, unlimited: true })
    .resize(size, size, {
      fit: "cover",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      effort: 10,
      palette: size <= 64,
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
  console.log("→ Generating favicons & apple-touch-icons from public/icon.svg");
  await ensureExists(SRC);

  // favicon PNG
  const results = [];
  for (const s of PNG_SIZES) {
    const r = await renderPng(s);
    results.push(r);
    console.log(`  ✓ favicon-${s}x${s}.png`);
  }

  // Apple Touch Icons
  for (const s of APPLE_SIZES) {
    await renderPng(s, `apple-touch-icon-${s}x${s}.png`);
    console.log(`  ✓ apple-touch-icon-${s}x${s}.png`);
  }

  // ICO
  const icoInput = [];
  for (const s of ICO_SIZES) {
    const hit = results.find((r) => r.size === s);
    if (hit) icoInput.push(hit.buf);
    else {
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