// src/app/slides/drafts/page.tsx
import type { Metadata } from "next";
import { getSlides, hasHtml, hasPdf, htmlUrl, pdfUrl } from "@/lib/slides";

export const metadata: Metadata = {
  title: "Draft Slides — Slides",
  description: "下書きのスライド一覧（published: false）。社内確認・生成テスト用。",
};

export const dynamic = "force-static";

export default async function DraftSlidesPage() {
  const all = await getSlides({ includeDrafts: true });
  const drafts = all.filter((s) => !s.published);

  return (
    <div className="fp-container">
      <section className="fp-section">
        <h1 className="h1">Draft Slides</h1>
        <p className="lead" style={{ marginTop: 6 }}>
          下書き（published: false）のスライド。社内確認や生成テスト用の場です。
        </p>

        <div style={{ marginTop: 28 }}>
          {drafts.map((s) => {
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