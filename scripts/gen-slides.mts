// scripts/gen-slides.mts
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// 入力/出力
const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "content", "slides");
const OUT_DIR = path.join(ROOT, "public", "slides");

type FM = {
  title?: string;
  slug?: string;
  date?: string;
  event?: string;
  published?: boolean;
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function htmlTemplate({
  md,
  title,
  event,
  noindex,
}: {
  md: string;
  title: string;
  event?: string;
  noindex: boolean;
}) {
  // Reveal.js（CDN） + Markdownプラグイン
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ${noindex ? '<meta name="robots" content="noindex,nofollow" />' : ""}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/white.css" id="theme">
  <style>
    .reveal h1 { letter-spacing: .02em; }
    .reveal pre { background:#f5f5f5; padding:16px; border-radius:10px; }
    .badge { position:fixed; right:16px; bottom:14px; opacity:.5; font:12px/1.2 ui-sans-serif,system-ui; }
  </style>
</head>
<body>
  <div class="reveal">
    <div class="slides">
      <section data-markdown data-separator="^---$" data-separator-vertical="^--$">
        <textarea data-template>
# ${title}
${event ? `_${event}_\n` : ""}

${md.trim()}
        </textarea>
      </section>
    </div>
  </div>

  <div class="badge">${noindex ? "DRAFT" : "PUBLIC"}</div>

  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/markdown/markdown.js"></script>
  <script>
    const deck = new Reveal({
      hash: true,
      slideNumber: true,
      plugins: [ RevealMarkdown ],
      width: 1280, height: 720,
      margin: 0.06,
    });
    deck.initialize();
  </script>
</body>
</html>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(SRC_DIR)).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.log("↷ No markdown in content/slides. Skipped.");
    return;
  }

  const manifest: Array<{ title: string; slug: string; published: boolean; date?: string }> = [];

  for (const fn of files) {
    const full = path.join(SRC_DIR, fn);
    const raw = await readFile(full, "utf8");
    const { data, content } = matter(raw);
    const fm = (data as FM) || {};
    const title = fm.title || path.parse(fn).name;
    const baseSlug = fm.slug || slugify(path.parse(fn).name);
    const isDraft = fm.published === false;
    const outBase = isDraft ? path.join(OUT_DIR, "drafts", baseSlug) : path.join(OUT_DIR, baseSlug);

    await mkdir(outBase, { recursive: true });

    const html = htmlTemplate({
      md: content,
      title,
      event: fm.event,
      noindex: isDraft,
    });

    await writeFile(path.join(outBase, "index.html"), html, "utf8");

    manifest.push({ title, slug: baseSlug, published: !isDraft, date: fm.date });
    console.log(`  ✓ ${isDraft ? "drafts/" : ""}${baseSlug}/index.html`);
  }

  // 一覧ページ（公開のみ表示・ドラフト別ページも生成）
  const pub = manifest.filter((m) => m.published).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const drafts = manifest.filter((m) => !m.published);

  const list = (items: typeof manifest, heading: string) => `<!doctype html>
<html lang="ja"><head><meta charset="utf-8" />
<title>${heading} — Slides</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css">
</head>
<body>
<h1>${heading}</h1>
<ul>
${items
  .map((m) => `<li><a href="./${m.published ? m.slug : "drafts/" + m.slug}/">${m.title}</a>${m.date ? ` <small>(${m.date})</small>` : ""}</li>`)
  .join("\n")}
</ul>
<p><a href="./drafts/">Drafts</a></p>
</body></html>`;

  await writeFile(path.join(OUT_DIR, "index.html"), list(pub, "Slides"), "utf8");
  await mkdir(path.join(OUT_DIR, "drafts"), { recursive: true });
  await writeFile(path.join(OUT_DIR, "drafts", "index.html"), list(drafts, "Draft Slides"), "utf8");
}

main().catch((e) => {
  console.error("✖ Failed:", e);
  process.exit(1);
});