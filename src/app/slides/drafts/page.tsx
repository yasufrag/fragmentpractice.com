// src/app/slides/drafts/page.tsx
import type { Metadata } from "next";
import { getSlides, type Slide } from "@/lib/slides";

export const metadata: Metadata = {
  title: "Draft Slides — Slides",
  robots: { index: false, follow: false }, // 念のため noindex
};

export default async function DraftSlidesPage() {
  const slides: Slide[] = await getSlides({ includeDrafts: true }); // 下書きも含む

  return (
    <div className="fp-container">
      <section className="fp-section section--slides">
        <h1 className="h1">Draft Slides</h1>
        <p className="lead">下書き（published: false）のスライド。社内確認・生成テスト用の場です。</p>

        <div className="slides-list" style={{ marginTop: 20 }}>
          {slides.map((s) => (
            <article key={s.slug} className="slide-card">
              <div className="slide-head">
                <div>
                  <div className="slide-title">
                    {s.title} {!s.published && <span className="badge draft" style={{ marginLeft: 8 }}>DRAFT</span>}
                  </div>
                  <div className="slide-meta">
                    <span>{s.date}</span>
                    {s.event ? <span>・{s.event}</span> : null}
                    <span>・<span className="mono">slug: {s.slug}</span></span>
                  </div>
                </div>

                <div className="slide-actions">
                  {s.hasHtml ? (
                    <a className="btn small" href={s.htmlUrl} rel="noopener" target="_blank">HTML</a>
                  ) : (
                    <button className="btn small" aria-disabled="true" title="HTML未生成">HTML</button>
                  )}
                  {s.hasPdf ? (
                    <a className="btn small" href={s.pdfUrl} rel="noopener" target="_blank">PDF</a>
                  ) : (
                    <button className="btn small" aria-disabled="true" title="PDF未生成">PDF</button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}