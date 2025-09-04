export const metadata = { title: "ZINE" };

export default function ZinePage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "center" }}>
        <h1 className="h1">Fragment Practice ZINE</h1>
        <p className="lead" style={{ marginTop: 12 }}>
          断片から編まれる実験誌。業界向けのプロトタイピングと、一般にひらかれた文化的営み。<br />
          両方を往復しながら、静かに刊行を準備しています。
        </p>
      </section>

      {/* 業界向け */}
      <section className="section" aria-labelledby="pro">
        <h2 id="pro" className="h2">プロトタイピングとしてのZINE</h2>
        <p style={{ marginTop: 12, maxWidth: 760, color: "var(--muted)" }}>
          AI 対話ログ、設計ノート、評価メモを冊子化。研究・開発・編集実務のための実験的ドキュメントです。
          小さく試し、学習を残せる形へ。
        </p>

        <div className="grid" style={{ marginTop: 20 }}>
          <article className="card coming">
            <div className="coming-ribbon" aria-hidden="true">COMING&nbsp;SOON</div>
            <div className="title">Prototype Issue #01</div>
            <div className="meta">LLM/Agent × 言語運用の設計断片</div>
            <p className="coming-note">
              収録予定：評価プロト、会話設計の版管理、失敗例と学びの抜粋、再現用スニペット
            </p>
          </article>
        </div>
      </section>

      {/* 一般向け */}
      <section className="section" aria-labelledby="culture">
        <h2 id="culture" className="h2">文化としてのZINE</h2>
        <p style={{ marginTop: 12, maxWidth: 760, color: "var(--muted)" }}>
          詩・写真・記述の断片を束ねる小冊子。暮らしのテンポ、注意の置き方、関係の編み方を、
          ゆっくり手元に残るかたちに。
        </p>

        <div className="grid" style={{ marginTop: 20 }}>
          <article className="card coming">
            <div className="coming-ribbon" aria-hidden="true">COMING&nbsp;SOON</div>
            <div className="title">Fragments / Season 01</div>
            <div className="meta">詩・写真・会話の小編集</div>
            <p className="coming-note">
              収録予定：短い詩／写真 8–12点／公開対話の抜粋／編集後記
            </p>
          </article>
        </div>
      </section>

      {/* クロージング */}
      <section className="section" style={{ textAlign: "center" }}>
        <p className="lead">
          先行案内をご希望の方は <a className="cta" href="/contact">Contact</a> へ。<br />
          刊行時にサンプルPDFと購読情報（一般・業界）をお送りします。
        </p>
      </section>
    </div>
  );
}