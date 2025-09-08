import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const TALKS_DIR = path.join(ROOT, "content", "talks");
const OUT_DIR = path.join(ROOT, "apps", "slides", "public"); // 静的配信用
await fs.mkdir(OUT_DIR, { recursive: true });

const revealCdn = "https://cdn.jsdelivr.net/npm/reveal.js@5";

function wrapHtml({ title, body }) {
  return `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<link rel="stylesheet" href="${revealCdn}/dist/reveal.css">
<link rel="stylesheet" href="${revealCdn}/dist/theme/white.css" id="theme">
<style>
:root{ --kaki:#E4582B; --fg:#0B0B0B; --muted:#6C6F75; }
.reveal h1,h2,h3{ letter-spacing:-.01em; }
.reveal .slides section{ padding: 16px 0; }
.reveal .slides .accent{ color: var(--kaki); font-weight: 800; }
</style>
</head>
<body>
<div class="reveal"><div class="slides">
${body}
</div></div>
<script src="${revealCdn}/dist/reveal.js"></script>
<script> Reveal.initialize({ hash:true, slideNumber:true }); </script>
</body>
</html>`;
}

const files = (await fs.readdir(TALKS_DIR)).filter(f => f.endsWith(".mdx"));

for (const f of files) {
  const raw = await fs.readFile(path.join(TALKS_DIR, f), "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug ?? path.basename(f, ".mdx");

  // --- 分割：`---` をスライド境界に（最小実装）
  const sections = content.split(/\n---\n/g).map(md =>
    `<section><div class="markdown">${md}</div></section>`
  ).join("\n");

  const html = wrapHtml({
    title: data.title ?? slug,
    body: sections
  });

  const out = path.join(OUT_DIR, `${slug}.html`);
  await fs.writeFile(out, html);
  console.log("Slides:", out);
}