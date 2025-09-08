// scripts/gen-slides.mts
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// 入力MD
const CONTENT_DIR = path.join(process.cwd(), "content", "slides");
// 出力
const OUT_PUBLIC = path.join(process.cwd(), "public", "slides");

type Front = {
  title: string;
  date?: string;
  event?: string;
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

function htmlTemplate(md: string, front: Front) {
  const title = front.title ?? "Slides";
  return `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8" />
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/white.css" id="theme">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/print.css">
<style>
  .reveal { font-family: "Sora","Zen Kaku Gothic New", system-ui, -apple-system, sans-serif; }
</style>
</head>
<body>
<div class="reveal">
  <div class="slides">
    <section data-markdown>
      <script type="text/template">
${md.replace(/<\/script>/g, "<\\/script>")}
      </script>
    </section>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/markdown/markdown.js"></script>
<script>
  const deck = new Reveal({
    hash: true,
    plugins: [ RevealMarkdown ],
  });
  deck.initialize();
</script>
</body>
</html>`;
}

async function main() {
  console.log("→ Generating slide HTML (reveal.js via CDN)");
  await mkdir(OUT_PUBLIC, { recursive: true });

  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.log("  ↷ No markdown files in content/slides.");
    return;
  }

  for (const file of files) {
    const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
    const { content, data } = matter(raw);
    const front = (data || {}) as Front;

    const slug =
      front.slug ??
      toSlug(path.basename(file, path.extname(file))); // ファイル名からフォールバック

    const isDraft = front.published === false || front.published === undefined;
    const outDir = isDraft
      ? path.join(OUT_PUBLIC, "drafts", slug)
      : path.join(OUT_PUBLIC, slug);

    await mkdir(outDir, { recursive: true });
    const html = htmlTemplate(content.trim(), front);
    await writeFile(path.join(outDir, "index.html"), html);

    console.log(
      `  ✓ ${path.relative(process.cwd(), path.join(outDir, "index.html"))}`
    );
  }

  console.log("✔ Done. Slide HTML written under public/slides/");
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});