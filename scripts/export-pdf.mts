// scripts/export-pdf.mts
import { chromium } from "playwright";
import path from "node:path";
import { readdir } from "node:fs/promises";

const ROOT = process.cwd();
const SLIDES_DIR = path.join(ROOT, "public", "slides");
const OUT_PDF = path.join(SLIDES_DIR, "pdf");

const pickTargets = async () => {
  const ents = await readdir(SLIDES_DIR, { withFileTypes: true });
  const dirs = ents.filter((e) => e.isDirectory()).map((e) => e.name);
  // drafts/ は除外し、--include-drafts で含められるように
  const includeDrafts = process.argv.includes("--include-drafts");
  const pub = dirs.filter((d) => d !== "drafts");
  if (!includeDrafts) return pub;
  const draftEnts = await readdir(path.join(SLIDES_DIR, "drafts"), { withFileTypes: true }).catch(() => []);
  const drafts = draftEnts.filter((e: any) => e.isDirectory()).map((e: any) => "drafts/" + e.name);
  return [...pub, ...drafts];
};

async function main() {
  console.log("→ Exporting slides to PDF");
  const targets = await pickTargets();
  if (targets.length === 0) {
    console.log("↷ No slide directories. Run: pnpm slides");
    return;
  }

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  await Promise.all(
    targets.map(async (slug) => {
      const page = await ctx.newPage();
      const url = "file://" + path.join(SLIDES_DIR, slug, "index.html");
      await page.goto(url);
      // Reveal の初期化待ち（簡易）
      await page.waitForTimeout(600);
      await page.pdf({
        path: path.join(OUT_PDF, `${slug.replace("/", "-")}.pdf`),
        format: "A4",
        landscape: true,
        printBackground: true,
      });
      await page.close();
      console.log(`  ✓ ${slug}.pdf`);
    })
  );
  await browser.close();
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});