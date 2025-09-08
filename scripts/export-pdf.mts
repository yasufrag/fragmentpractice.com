// scripts/export-pdf.mts
import { readdir, readFile, mkdir, access } from "node:fs/promises";
import { constants as FS } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { chromium } from "playwright";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content", "slides");
const PUBLIC_DIR = path.join(ROOT, "public", "slides");
const PDF_DIR = path.join(PUBLIC_DIR, "pdf");

// --include-drafts を付けたらドラフトもPDF化
const INCLUDE_DRAFTS = process.argv.includes("--include-drafts");

type Front = {
  title?: string;
  slug?: string;
  published?: boolean;
};

function toSlug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function exists(p: string) {
  try {
    await access(p, FS.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  console.log("→ Exporting slides to PDF");
  await mkdir(PDF_DIR, { recursive: true });

  const mdFiles = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));
  if (mdFiles.length === 0) {
    console.log("  ↷ No markdown files in content/slides.");
    return;
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 印刷に必要な CSS を優先（reveal は print.css がある）
  await page.emulateMedia({ media: "print" });

  let count = 0;

  for (const file of mdFiles) {
    const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(raw);
    const front = (data || {}) as Front;

    const slug = front.slug ?? toSlug(path.basename(file, path.extname(file)));
    const isDraft = front.published === false || front.published === undefined;

    if (isDraft && !INCLUDE_DRAFTS) {
      // ドラフトはデフォルト非対象
      continue;
    }

    // 生成済みHTMLの場所
    const htmlDir = isDraft
      ? path.join(PUBLIC_DIR, "drafts", slug)
      : path.join(PUBLIC_DIR, slug);
    const htmlFile = path.join(htmlDir, "index.html");

    if (!(await exists(htmlFile))) {
      console.warn(
        `  ! HTML not found for "${slug}". Run "pnpm slides" first. (missing: ${path.relative(
          ROOT,
          htmlFile
        )})`
      );
      continue;
    }

    const fileUrl = `file://${htmlFile}`;
    await page.goto(fileUrl, { waitUntil: "load" });

    const outPdf = path.join(PDF_DIR, `${slug}.pdf`);
    await page.pdf({
      path: outPdf,
      printBackground: true,
      preferCSSPageSize: true, // reveal の print.css に任せる
    });

    console.log(`  ✓ ${path.relative(ROOT, outPdf)}`);
    count++;
  }

  await browser.close();
  if (count === 0) {
    console.log("  ↷ Nothing exported. (no published slides or HTML missing)");
  } else {
    console.log("✔ Done.");
  }
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});