// src/lib/slides.ts
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface Slide {
  title: string;
  date: string;        // ISO
  event?: string;
  slug: string;
  published: boolean;
  // ある/ないに関わらず将来のリンクのための推定パス
  htmlPath: string;    // /slides/decks/<slug>/ など（存在チェックは呼び出し側で）
  pdfPath: string;     // /slides/pdf/<slug>.pdf
}

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content", "slides");
const PUBLIC = path.join(ROOT, "public");

async function fileExists(p: string) {
  try { await fs.access(p); return true; } catch { return false; }
}

export async function getSlides(includeDrafts = false): Promise<Slide[]> {
  const files = await fs.readdir(CONTENT);
  const mdFiles = files.filter(f => f.endsWith(".md"));

  const items: Slide[] = [];
  for (const fname of mdFiles) {
    const full = path.join(CONTENT, fname);
    const raw = await fs.readFile(full, "utf8");
    const { data } = matter(raw);

    const slug = String(data.slug ?? fname.replace(/\.md$/, ""));
    const published = Boolean(data.published);

    if (!includeDrafts && !published) continue;

    // 生成物の想定配置（gen-slides / export-pdf が書き出す想定）
    const htmlPublicDir = path.join(PUBLIC, "slides", "decks", slug);
    const pdfPublicPath = path.join(PUBLIC, "slides", "pdf", `${slug}.pdf`);

    // 実在チェック（UI 表示のため）
    const hasHTML = await fileExists(path.join(htmlPublicDir, "index.html"));
    const hasPDF  = await fileExists(pdfPublicPath);

    items.push({
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      event: data.event ? String(data.event) : undefined,
      slug,
      published,
      htmlPath: hasHTML ? `/slides/decks/${slug}/` : "",
      pdfPath:  hasPDF  ? `/slides/pdf/${slug}.pdf` : "",
    });
  }

  // 新しい順
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}