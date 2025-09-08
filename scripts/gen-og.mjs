import { promises as fs } from "node:fs";
import path from "node:path";
import satori from "satori";           // ローカル描画 or @vercel/og/edge runtimeも可
import sharp from "sharp";
import matter from "gray-matter";

const ROOT = process.cwd();
const TALKS_DIR = path.join(ROOT, "content", "talks");
const OUT = path.join(ROOT, "public", "og");

await fs.mkdir(OUT, { recursive: true });

const files = (await fs.readdir(TALKS_DIR)).filter(f => f.endsWith(".mdx"));

for (const f of files) {
  const mdx = await fs.readFile(path.join(TALKS_DIR, f), "utf8");
  const { data } = matter(mdx);
  const title = data.ogTitle ?? data.title;
  const subtitle = data.ogSubtitle ?? "";

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: 1200, height: 630, display: "flex",
          background: "#FAFAF7", color: "#0B0B0B",
          padding: 64, flexDirection: "column", justifyContent: "space-between"
        },
        children: [
          { type: "div", props: { style: { fontSize: 64, fontWeight: 800 }, children: title }},
          { type: "div", props: {
            style: { display: "flex", alignItems: "center", gap: 24 },
            children: [
              // 左にシンボル
              { type: "svg", props: { width: 92, height:92, viewBox:"0 0 100 100", children: [
                { type:"circle", props:{ cx:50, cy:50, r:45, fill:"#E4582B" }},
                { type:"g", props:{ stroke:"#D5D7DB", "stroke-width":5, fill:"none", "stroke-linecap":"round", children:[
                  { type:"path", props:{ d:"M0 76 Q 25 68, 50 76 T 100 76" }},
                  { type:"path", props:{ d:"M0 86 Q 25 78, 50 86 T 100 86" }},
                ]}}
              ]}},
              { type:"div", props:{ children:[
                { type:"div", props:{ style:{ fontSize:28, fontWeight:800 }, children:"Fragment Practice" }},
                { type:"div", props:{ style:{ fontSize:22, color:"#6C6F75" }, children:subtitle }},
              ]}}
            ]
          }}
        ]
      }
    },
    { width: 1200, height: 630, fonts: [] }
  );

  // SVG → PNG
  const png = await sharp(Buffer.from(svg)).png({ quality: 95 }).toBuffer();
  const slug = (data.slug ?? path.basename(f, ".mdx"));
  const outPath = path.join(OUT, `${slug}.png`);
  await fs.writeFile(outPath, png);
  console.log("OG:", outPath);
}