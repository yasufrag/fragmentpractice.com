// src/app/slides/drafts/page.tsx
import type { Metadata } from "next";
import { getSlides } from "@/lib/slides";

export const metadata: Metadata = {
  title: "Draft Slides — Slides",
  description: "非公開（下書き）スライド一覧",
  robots: { index: false, follow: false }, // 検索避け
};

export default async function DraftSlidesPage() {
  const drafts = await getSlides(true).then(list => list.filter(s => !s.published));

  return (
    <div className="container">
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Draft Slides</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          下書き（published: false）のスライド。社内確認や生成テスト用の場です。
        </p>
      </section>

      <ul className="cardlist" style={{ marginTop: 24 }}>
        {drafts.map(s => (
          <li key={s.slug} className="card">
            <div className="card-body">
              <div className="h3" style={{ marginBottom: 6 }}>{s.title}</div>
              <div className="muted">
                {s.date}{s.event ? ` ・ ${s.event}` : ""}（slug: {s.slug}）
              </div>
              <div className="chips" style={{ marginTop: 10 }}>
                {s.htmlPath ? <a className="chip" href={s.htmlPath} target="_blank" rel="noopener noreferrer">HTML</a> : <span className="chip disabled">HTML 未生成</span>}
                {s.pdfPath  ? <a className="chip" href={s.pdfPath}  target="_blank" rel="noopener noreferrer">PDF</a>  : <span className="chip disabled">PDF 未生成</span>}
              </div>
            </div>
          </li>
        ))}
        {drafts.length === 0 && <p>下書きはありません。</p>}
      </ul>
    </div>
  );
}