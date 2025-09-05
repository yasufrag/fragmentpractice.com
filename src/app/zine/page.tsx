// app/zine/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZINE",
  description:
    "Fragment Practice の編集と小冊子（ZINE）の取り組み。現在は静かに準備中です。",
};

export default function ZinePage() {
  return (
    <div className="container">
      {/* Hero（最小） */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>ZINE</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          断片（Fragment）を束ね、静かな編集のリズムをかたちにする小冊子づくり。
          現在は公開に向けて準備を進めています。
        </p>
      </section>

      {/* Coming Soon（静かなカード） */}
      <section className="section" aria-labelledby="coming">
        <div className="coming--quiet" role="status" aria-live="polite">
          <div className="coming-header">
            <span className="pill" aria-hidden>COMING&nbsp;SOON</span>
          </div>

          <h2 id="coming" className="h2" style={{ marginBottom: 8, textAlign: "center" }}>
            静かに準備中です
          </h2>

          <p className="coming-note">
            初期号は、対話・記述・構文設計の実践から生まれた断片を編集し、
            冊子とPDFの二形態で小さく発行予定です。
            発行は少部数／不定期。準備が整い次第、静かにお知らせします。
          </p>

          <ul className="coming-list">
            <li>テーマ：注意・関係・編集（仮）</li>
            <li>形式：冊子（少部数）／PDF</li>
            <li>言語：日本語（一部英語併記の可能性）</li>
          </ul>

          <div className="coming-actions">
            <Link href="/company" className="chip" aria-label="Company ページへ">Company</Link>
            <Link href="/contact" className="chip" aria-label="Contact ページへ">Contact</Link>
          </div>

          <p className="coming-meta" aria-label="補足情報">
            ※ 公開までは検索想定の発信は行っていません。必要に応じて個別にご案内します。
          </p>
        </div>
      </section>
    </div>
  );
}