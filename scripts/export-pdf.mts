// scripts/export-pdf.mts
import { chromium } from "playwright";
import * as fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUTHTML = path.join(ROOT, "public", "slides", "index.html");
const OUTPDF = path.join(ROOT, "public", "slides", "deck.pdf");

// gen-slides を動的 import（存在しなければスキップ）
async function ensureSlidesHtml() {
  try {
    await fs.access(OUTHTML);
  } catch {
    // 生成スクリプトを呼ぶ
    const gen = path.join(ROOT, "scripts", "gen-slides.mts");
    const { pathToFileURL } = await import("node:url");
    await import(pathToFileURL(gen).href);
  }
}

async function main() {
  console.log("→ Exporting slides to PDF");
  await ensureSlidesHtml();

  const url = "file://" + OUTHTML + "?print-pdf";
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1366, height: 768 },
  });
  const page = await ctx.newPage();

  await page.goto(url, { waitUntil: "load" });
  // Reveal が描画を安定させるまで少し待機
  await page.waitForTimeout(800);

  await page.pdf({
    path: OUTPDF,
    printBackground: true,
    margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
    format: "A4",
  });

  await browser.close();
  console.log("  ✓ public/slides/deck.pdf");
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});