// src/app/slides/page.tsx
import { Metadata } from "next";
import { getSlides, hasHtml, hasPdf, htmlUrl, pdfUrl } from "@/lib/slides";

export const metadata: Metadata = {
  title: "Slides",
  description: "公開中のスライド一覧。PDF / HTML は生成済みのみリンクが表示されます。",
};

export const dynamic = "force-static";

export default async function SlidesPage() {
  const slides = await getSlides({ includeDrafts: false }); // 公開のみ

  return (
    <div className="fp-container">
      <section className="fp-section">
        <h1 className="h1">Slides</h1>
        <p className="lead" style={{ marginTop: 6 }}>
          公開中のスライドです。PDF / HTML は生成済みのものだけリンクが表示されます。
        </p>

        <div style={{ marginTop: 28 }}>
          {slides.map((s) => {
            const htmlReady = hasHtml(s.slug);
            const pdfReady = hasPdf(s.slug);
            return (
              <div key={s.slug} className="slide-card">
                <div className="slide-head">
                  <div>
                    <div className="slide-title">{s.title}</div>
                    <div className="slide-meta">
                      <span>{s.date}</span>
                      {s.event && <span>・{s.event}</span>}
                      <span>（slug: {s.slug}）</span>
                    </div>
                  </div>
                  <div className="slide-actions">
                    {htmlReady ? (
                      <a className="btn small" href={htmlUrl(s.slug)} target="_blank" rel="noopener">
                        HTML
                      </a>
                    ) : (
                      <button className="btn small" aria-disabled="true">HTML 未生成</button>
                    )}
                    {pdfReady ? (
                      <a className="btn small" href={pdfUrl(s.slug)} target="_blank" rel="noopener">
                        PDF
                      </a>
                    ) : (
                      <button className="btn small" aria-disabled="true">PDF 未生成</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}