// scripts/export-pdf.mts
import { chromium } from "playwright";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_HTML = path.join(ROOT, "public", "slides-static");
const OUT_PDF  = path.join(OUT_HTML, "pdf");

async function exists(p: string) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function main() {
  console.log("→ Exporting slides to PDF");
  await fs.mkdir(OUT_PDF, { recursive: true });

  // slides-static 直下の「スライド用ディレクトリ」のみを対象にする
  const dirents = await fs.readdir(OUT_HTML, { withFileTypes: true });
  const slugs = [];
  for (const d of dirents) {
    if (!d.isDirectory()) continue;
    if (d.name === "pdf") continue; // ← ここがポイント
    const indexHtml = path.join(OUT_HTML, d.name, "index.html");
    if (await exists(indexHtml)) slugs.push(d.name);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  let failures = 0;
  for (const slug of slugs) {
    try {
      const fileUrl = "file://" + path.join(OUT_HTML, slug, "index.html") + "?print-pdf";
      await page.goto(fileUrl, { waitUntil: "load", timeout: 60_000 });
      await page.waitForTimeout(800); // reveal の印刷CSS安定待ち

      const dest = path.join(OUT_PDF, `${slug}.pdf`);
      await page.pdf({ path: dest, printBackground: true, preferCSSPageSize: true });
      console.log(`  ✓ public/slides-static/pdf/${slug}.pdf`);
    } catch (e) {
      failures++;
      console.error(`  ✖ ${slug}:`, (e as Error).message);
    }
  }

  await browser.close();
  if (failures > 0) {
    console.error(`✖ Done with ${failures} failure(s).`);
    process.exit(1);
  } else {
    console.log("✔ Done. PDFs written under public/slides-static/pdf/");
  }
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});