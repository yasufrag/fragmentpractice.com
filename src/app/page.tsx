export default function Home() {
  return (
    <div className="container section">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "center" }}>
        <h1 className="h1">言葉と仕組みを整えるスタジオ</h1>
        <p className="lead" style={{ marginTop: 12 }}>
          Fragment Practice は、リフレクション設計・AI×言語実験・出版/講座を通じて、
          共創と実験のための足場を軽やかに整えます。
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center" }}>
          <a className="cta primary" href="/contact">お問い合わせ</a>
          <a className="cta" href="/work">サービスを見る</a>
        </div>
      </section>

      {/* 提供領域 */}
      <section className="section">
        <h2 className="h2" style={{ textAlign: "center", marginBottom: 20 }}>提供領域</h2>
        <div className="grid">
          <article className="card">
            <div className="title">リフレクション設計</div>
            <div className="meta">記録・内省・編集</div>
            <p>日々の断片を扱う「器」を設計し、記録から共有までの流れを共創します。</p>
          </article>
          <article className="card">
            <div className="title">AI×言語実験</div>
            <div className="meta">LLM/エージェント</div>
            <p>プロンプト設計から評価・運用まで。AIを「表現と実務」の両輪で活かします。</p>
          </article>
          <article className="card">
            <div className="title">出版・講座</div>
            <div className="meta">ZINE／学びの場</div>
            <p>断片を束ねる編集術を軸に、ZINE制作や対話型の講座を企画・実施します。</p>
          </article>
        </div>
      </section>
    </div>
  );
}