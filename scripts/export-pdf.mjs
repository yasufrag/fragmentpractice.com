import path from "node:path";
import { promises as fs } from "node:fs";
import { chromium } from "playwright";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "apps", "slides", "public");
const DIST = path.join(ROOT, "dist");
await fs.mkdir(DIST, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }});

for (const f of await fs.readdir(SRC)) {
  if (!f.endsWith(".html")) continue;
  const fileUrl = `file://${path.join(SRC, f)}`;
  await page.goto(fileUrl);
  await page.waitForLoadState("networkidle");
  const base = path.basename(f, ".html");
  await page.pdf({ path: path.join(DIST, `${base}.pdf`), width: "1440px", height: "900px" });
  await page.screenshot({ path: path.join(DIST, `${base}.png`) });
  console.log("Export:", base);
}

await browser.close();