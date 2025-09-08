// src/lib/slides.ts
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** 1件のスライドメタ */
export interface Slide {
  slug: string;
  title: string;
  date: string;          // ISO or YYYY-MM-DD
  event?: string;
  published: boolean;
  // 生成物の有無とパス
  hasHtml: boolean;
  hasPdf: boolean;
  htmlUrl?: string;      // /slides-static/<slug>/
  pdfUrl?: string;       // /slides-static/pdf/<slug>.pdf
}

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content", "slides");
const OUT_HTML_DIR = path.join(ROOT, "public", "slides-static");
const OUT_PDF_DIR  = path.join(OUT_HTML_DIR, "pdf");

async function pathExists(p: string): Promise<boolean> {
  try { await fs.access(p); return true; } catch { return false; }
}

function toStringSafe(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}
function toBoolSafe(v: unknown, def = false): boolean {
  return typeof v === "boolean" ? v : def;
}

/** content/slides/*.md を読み込み → メタ情報に整形 */
async function readAllFromContent(): Promise<Slide[]> {
  const items: Slide[] = [];

  // ディレクトリが無い場合は空配列
  if (!(await pathExists(CONTENT_DIR))) return items;

  const files = await fs.readdir(CONTENT_DIR);
  const mdFiles = files.filter((f) => f.toLowerCase().endsWith(".md"));

  for (const file of mdFiles) {
    const abs = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(abs, "utf8");
    const { data } = matter(raw);

    const slug = toStringSafe(data.slug) ?? file.replace(/\.md$/i, "");
    const title = toStringSafe(data.title) ?? "Untitled";
    const date = toStringSafe(data.date) ?? "";
    const event = toStringSafe(data.event);
    const published = toBoolSafe(data.published, false);

    // 生成物の存在チェック
    const htmlIndex = path.join(OUT_HTML_DIR, slug, "index.html");
    const pdfFile   = path.join(OUT_PDF_DIR, `${slug}.pdf`);

    const hasHtml = await pathExists(htmlIndex);
    const hasPdf  = await pathExists(pdfFile);

    const htmlUrl = hasHtml ? `/slides-static/${slug}/index.html` : undefined;
    const pdfUrl  = hasPdf  ? `/slides-static/pdf/${slug}.pdf` : undefined;

    items.push({ slug, title, date, event, published, hasHtml, hasPdf, htmlUrl, pdfUrl });
  }

  // 日付降順（不明は後ろ）
  items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return items;
}

/** 公開/非公開のフィルタを指定して取得 */
export async function getSlides(opts?: { includeDrafts?: boolean }): Promise<Slide[]> {
  const includeDrafts = opts?.includeDrafts ?? false;
  const all = await readAllFromContent();
  return includeDrafts ? all : all.filter((s) => s.published);
}

/** 便宜上: すべて（ドラフト含む） */
export async function getAllSlides(): Promise<Slide[]> {
  return getSlides({ includeDrafts: true });
}