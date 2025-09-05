// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fragment Practice — 共創・実験・編集のためのスタジオ",
  description:
    "AI・言語・編集を横断し、注意・関係・編集を支える“象徴的インフラ”を設計・実装・検証します。高松から世界へ。",
};

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>
          Quiet systems for <wbr />attention, relation, and editing.
        </h1>
        <p className="lead" style={{ marginTop: 10, maxWidth: 820 }}>
          Fragment Practice は、AI・言語・編集を横断して
          <strong>「注意・関係・編集」</strong>を支える仕組みを設計します。
          高松から、実務と研究を往復させながら、静かに検証していきます。
        </p>

        <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/work" className="cta primary" aria-label="Work ページへ">
            View Work
          </Link>
          <Link href="/contact" className="cta" aria-label="お問い合わせページへ">
            Contact
          </Link>
        </div>
      </section>

      {/* Value props */}
      <section className="section" aria-labelledby="values">
        <h2 id="values" className="h2" style={{ marginBottom: 12 }}>私たちが大切にすること</h2>
        <div className="grid">
          <div className="card">
            <div className="title">技術は“器”である</div>
            <p className="meta">象徴的インフラの設計</p>
            <p>
              AIを生産性の道具としてだけでなく、関係を整えるための
              <strong>基盤（インフラ）</strong>として扱います。目的化しません。
            </p>
          </div>
          <div className="card">
            <div className="title">小さく始めて観察する</div>
            <p className="meta">PoC／軽量ループ</p>
            <p>
              仮説を最小に圧縮し、<em>実装→観察→補正</em>を短く反復。
              成果は「再現性」と「読み心地」で評価します。
            </p>
          </div>
          <div className="card">
            <div className="title">安全を優先する</div>
            <p className="meta">公開は段階的に</p>
            <p>
              個人情報・機微情報の扱いは最小限。公開は段階的に進め、
              登壇・資料公開はケースごとに判断します。
            </p>
          </div>
        </div>
      </section>

      {/* Services digest */}
      <section className="section" aria-labelledby="services">
        <h2 id="services" className="h2" style={{ marginBottom: 12 }}>提供のダイジェスト</h2>
        <div className="grid">
          <div className="card">
            <div className="title">対話構造の設計（AI × Syntax）</div>
            <p className="meta">会話体験／プロトタイプ／軽量評価</p>
            <ul className="list-check">
              <li>対話構文の設計（遷移・記録・評価観点）</li>
              <li>小実装での比較（2–3案）と観察</li>
              <li>ノーリスク運用の設計</li>
            </ul>
          </div>
          <div className="card">
            <div className="title">編集と出版（ZINE / Docs）</div>
            <p className="meta">断片編集／ナレッジ整流</p>
            <ul className="list-check">
              <li>断片ログの編集方針／構成設計</li>
              <li>ZINE下地のテキスト整形</li>
              <li>読み心地を上げるドキュメント設計</li>
            </ul>
          </div>
          <div className="card">
            <div className="title">登壇・公開対話の設計</div>
            <p className="meta">専門家版／一般版の差分運用</p>
            <ul className="list-check">
              <li>論点マップの共通化</li>
              <li>物語寄り／技術寄りの二系統</li>
              <li>公開ポリシーの事前設計</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <Link href="/work" className="cta" aria-label="Work 詳細へ">Work の詳細へ</Link>
        </div>
      </section>

      {/* Process (short) */}
      <section className="section" aria-labelledby="process">
        <h2 id="process" className="h2" style={{ marginBottom: 12 }}>進め方（短縮版）</h2>
        <ol className="list-steps">
          <li><strong>Intake：</strong>目的・制約・公開範囲・安全域の仮説を共有。</li>
          <li><strong>Sketch：</strong>比較軸を定め、選択肢を2–3案に圧縮。</li>
          <li><strong>Prototype：</strong>小実装／小編集で実地に確認。</li>
          <li><strong>Observe：</strong>短い観察と補正で事実を積む。</li>
          <li><strong>Decide：</strong>維持／拡張／撤退を軽く判断。</li>
        </ol>
      </section>

      {/* ZINE Coming Soon（静かな版） */}
      <section className="section" aria-labelledby="zine">
        <h2 id="zine" className="h2" style={{ marginBottom: 12 }}>ZINE / Publishing</h2>
        <div className="coming-plain" role="note" aria-label="ZINE Coming Soon">
          <div className="coming-plain__ribbon" aria-hidden>COMING&nbsp;SOON</div>
          <p className="coming-plain__title">小さな冊子で、実験の星座を。</p>
          <p className="coming-plain__note">
            現在、断片編集の方針を整えています。サンプル配布と購読導線は、登壇以降に段階的公開予定です。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="cta">
        <h2 id="cta" className="h2" style={{ marginBottom: 12 }}>ご相談について</h2>
        <p className="lead" style={{ maxWidth: 760, marginBottom: 12 }}>
          現在は少数案件のみ。テーマ／目的／公開範囲（社内限定・一般公開）を明記のうえご連絡ください。
        </p>
        <Link href="/contact" className="cta" aria-label="お問い合わせへ">Contact</Link>
      </section>
    </div>
  );
}