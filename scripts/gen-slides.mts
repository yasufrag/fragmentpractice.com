// scripts/gen-slides.mts
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content", "slides");
const PUBLIC = path.join(ROOT, "public");
const OUT_HTML = path.join(PUBLIC, "slides-static"); // ← ここに出力

const REVEAL = "https://cdn.jsdelivr.net/npm/reveal.js@5";

const htmlTemplate = (title: string, md: string) => `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <link rel="stylesheet" href="${REVEAL}/dist/reveal.css">
  <link rel="stylesheet" href="${REVEAL}/dist/theme/white.css" id="theme">
  <style>
    .reveal { font-family: system-ui, -apple-system, "Helvetica Neue", Arial, "Noto Sans JP", sans-serif; }
  </style>
</head>
<body>
  <div class="reveal"><div class="slides">
    <section data-markdown>
      <textarea data-template>${md.replace(/<\/textarea>/g, "<\\/textarea>")}</textarea>
    </section>
  </div></div>

  <script src="${REVEAL}/dist/reveal.js"></script>
  <script src="${REVEAL}/plugin/markdown/markdown.js"></script>
  <script>
    const deck = new Reveal({
      hash: true,
      plugins: [ RevealMarkdown ],
      slideNumber: true,
      showNotes: false
    });
    deck.initialize();
  </script>
</body>
</html>`;

async function main() {
  await fs.mkdir(OUT_HTML, { recursive: true });

  const files = await fs.readdir(CONTENT);
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const src = path.join(CONTENT, file);
    const mdRaw = await fs.readFile(src, "utf8");
    const { data, content } = matter(mdRaw);
    const title = String(data.title ?? slug);

    const outDir = path.join(OUT_HTML, slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), htmlTemplate(title, content), "utf8");

    console.log(`  ✓ ${path.posix.join("public", "slides-static", slug, "index.html")}`);
  }

  console.log("✔ Done. Slide HTML written under public/slides-static/");
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});