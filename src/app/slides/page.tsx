// src/app/slides/page.tsx
import type { Metadata } from "next";
import { getSlides } from "@/lib/slides";

export const metadata: Metadata = {
  title: "Slides",
  description: "公開中の登壇スライド一覧",
};

export default async function SlidesPage() {
  const slides = await getSlides(false); // published only

  return (
    <div className="container">
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Slides</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          公開中のスライドです。PDF / HTML は生成済みのものだけリンクが表示されます。
        </p>
      </section>

      <ul className="cardlist" style={{ marginTop: 24 }}>
        {slides.map(s => (
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
        {slides.length === 0 && <p>まだ公開スライドはありません。</p>}
      </ul>
    </div>
  );
}