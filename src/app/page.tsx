// app/page.tsx
export default function Home() {
  return (
    <div className="container section">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "center" }}>
        <h1 className="h1">言葉と仕組みをデザインするスタジオ</h1>
        <p className="lead" style={{ marginTop: 12, maxWidth: 820, marginInline: "auto" }}>
          Fragment Practice は、リフレクション設計・AI×言語実験・出版や講座を通じて、
          共創と実験の足場をつくります。小さく始め、回し、学び合う。
        </p>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a className="cta primary" href="/contact" aria-label="お問い合わせフォームへ">
            お問い合わせ
          </a>
          <a className="cta" href="/work" aria-label="サービスの詳細を見る">
            サービスを見る
          </a>
          <a className="cta" href="/zine" aria-label="刊行物を見る">
            刊行物を見る
          </a>
          <a className="cta" href="/company" aria-label="会社情報を見る">
            会社情報
          </a>
        </div>
      </section>

      {/* 提供領域 */}
      <section className="section" aria-labelledby="services">
        <h2 id="services" className="h2" style={{ textAlign: "center", marginBottom: 20 }}>
          提供領域
        </h2>

        <div className="grid">
          <article className="card" aria-labelledby="svc-reflection">
            <div id="svc-reflection" className="title">リフレクション設計</div>
            <div className="meta">記録・内省・編集</div>
            <p style={{ marginTop: 8 }}>
              日々の断片を扱う「器」を設計。記録→省察→共有の最小フローを整え、
              チームの学習サイクルを可視化します。
            </p>
          </article>

          <article className="card" aria-labelledby="svc-llm">
            <div id="svc-llm" className="title">AI×言語実験</div>
            <div className="meta">LLM / エージェント</div>
            <p style={{ marginTop: 8 }}>
              プロンプト設計から評価・運用まで。表現と実務の双方で効く“運用可能な型”を
              小さく検証しながら共創します。
            </p>
          </article>

          <article className="card" aria-labelledby="svc-pub">
            <div id="svc-pub" className="title">出版・講座</div>
            <div className="meta">ZINE / 学びの場</div>
            <p style={{ marginTop: 8 }}>
              断片を束ねる編集術で、ZINE制作や対話型の講座を設計。
              インナー共有から外部発信まで一貫して支援します。
            </p>
          </article>
        </div>

        {/* 補助導線（任意） */}
        <div style={{ marginTop: 28, textAlign: "center" }}>
          <a className="cta" href="/work">私たちの仕事を詳しく</a>
        </div>
      </section>
    </div>
  );
}