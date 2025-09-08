// scripts/gen-slides.mts
import * as fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public");
const OUTDIR = path.join(PUB, "slides");
const SLIDES_DIR = path.join(ROOT, "slides");

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

async function listMarkdown(): Promise<string[]> {
  try {
    const files = await fs.readdir(SLIDES_DIR);
    return files.filter((f) => f.endsWith(".md")).map((f) => path.join("slides", f));
  } catch {
    return [];
  }
}

function htmlTemplate(mdFiles: string[]) {
  // Reveal.js CDN（5系）
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>Fragment Practice — Slides</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preload" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.min.js" as="script">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/white.css" id="theme">
  <style>
    .reveal h1, .reveal h2, .reveal h3 { letter-spacing: -0.02em; }
    .reveal section { text-align: left; }
  </style>
</head>
<body>
  <div class="reveal">
    <div class="slides">
      ${mdFiles.length
        ? mdFiles
            .map(
              (p) => `<section data-markdown="${p}" data-separator="^---$" data-separator-vertical="^--$"></section>`
            )
            .join("\n")
        : `
        <section>
          <h1>Fragment Practice</h1>
          <p>（ここにスライドのMarkdownを置くと自動で読み込まれます）</p>
          <pre><code>mkdir slides
echo "# タイトル\n\n---\n\n本文" > slides/deck.md
          </code></pre>
        </section>`}
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/markdown/markdown.min.js"></script>
  <script>
    const deck = new Reveal({
      hash: true,
      slideNumber: true,
      plugins: [ RevealMarkdown ],
      pdfSeparateFragments: false
    });
    deck.initialize();
  </script>
</body>
</html>`;
}

async function main() {
  console.log("→ Generating slides HTML");
  await ensureDir(OUTDIR);

  const mdFiles = await listMarkdown();
  const html = htmlTemplate(mdFiles);
  const out = path.join(OUTDIR, "index.html");
  await fs.writeFile(out, html, "utf8");
  console.log("  ✓ public/slides/index.html");
  console.log(mdFiles.length ? `  ↷ ${mdFiles.length} markdown file(s) linked` : "  ↷ No markdown found, wrote placeholder deck");
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});