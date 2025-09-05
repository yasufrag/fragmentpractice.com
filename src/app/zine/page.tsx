// app/zine/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZINE",
  description:
    "Fragment Practice の編集と小冊子（ZINE）の取り組み。断片を束ねる静かな編集のプロジェクトです。",
};

export default function ZinePage() {
  return (
    <div className="container">
      {/* Hero（最小） */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>ZINE</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          断片（Fragment）を束ね、静かな編集のリズムをかたちにする小冊子づくり。
          高松から、実務と研究の往復の中で生まれた記述・対話・構文設計の実験を、
          小さな冊子として編み直します。
        </p>
      </section>

      {/* Coming Soon（静かなカード） */}
      <section className="section" aria-labelledby="coming">
        <div className="coming--quiet" role="status" aria-live="polite">
          <div className="coming-header">
            <span className="pill" aria-hidden>COMING&nbsp;SOON</span>
          </div>

          <h2 id="coming" className="h2" style={{ marginBottom: 8, textAlign: "center" }}>
            最初の号を静かに準備中です
          </h2>

          <p className="coming-note">
            初回は、注意・関係・編集をめぐる短いエッセイ／対話の抜粋／図版メモで構成する予定です。
            冊子とPDFの二形態での頒布を想定し、少部数・不定期で刊行します。
          </p>

          {/* 具体化（公開して差し支えない範囲） */}
          <ul className="coming-list" aria-label="想定仕様">
            <li>A5 32–64ページ想定（変更の可能性あり）</li>
            <li>日英併記の抜粋を一部収録</li>
            <li>PDF版と限定プリント版</li>
          </ul>

          <div className="coming-actions" aria-label="関連リンク">
            <Link href="/news" className="chip" aria-label="News / Updates へ">
              News / Updates
            </Link>
            <Link href="/contact" className="chip" aria-label="Contact へ">
              Contact
            </Link>
          </div>

          <p className="coming-meta">
            ※ 公開までは検索想定の発信は行いません。必要に応じて個別にご案内します。
          </p>
        </div>
      </section>

      {/* 編集の姿勢（短く） */}
      <section className="section" aria-labelledby="ethos">
        <h2 id="ethos" className="h2" style={{ marginBottom: 12 }}>編集の姿勢</h2>
        <ul className="list-check" style={{ maxWidth: 840 }}>
          <li>技術を目的化せず、生活のリズムを損なわない編集。</li>
          <li>引用はコンセント（同意）を前提に最小限・匿名化を優先。</li>
          <li>再現可能な方法（編集ノート・記法）を付すこと。</li>
        </ul>
      </section>

      {/* 参加・入手（プレースホルダ） */}
      <section className="section" aria-labelledby="access">
        <h2 id="access" className="h2" style={{ marginBottom: 12 }}>入手と案内</h2>
        <p style={{ maxWidth: 840, marginBottom: 8, color: "var(--muted)" }}>
          初回は少部数頒布のため、一般販売は行わない可能性があります。
          公開時は <Link href="/news">News / Updates</Link> にて静かにお知らせします。
          個別のご相談は <Link href="/contact">Contact</Link> からご連絡ください。
        </p>
      </section>
    </div>
  );
}