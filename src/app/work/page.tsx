// app/work/page.tsx
export default function Work() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: 'left' }}>
        <h1 className="h1">Work</h1>
        <p className="lead" style={{ marginTop: 8 }}>
          軽やかな仕組みで、共創の足場を整えます。
          リフレクション設計／AI×言語実験／出版・講座／コンサルティング。
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
          <a className="cta primary" href="/contact">お問い合わせ</a>
          <a className="cta" href="/company">会社情報</a>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <h2 className="h2" style={{ marginBottom: 12 }}>提供領域</h2>
        <div className="grid">
          <article className="card">
            <div className="title">リフレクション設計</div>
            <div className="meta">記録・内省・編集のワークフロー</div>
            <p>日々の断片を扱う「器」を設計。記録→省察→共有までの最小プロセスを共創します。</p>
          </article>
          <article className="card">
            <div className="title">AI×言語実験</div>
            <div className="meta">LLM/エージェントの詩的運用</div>
            <p>プロンプト設計から評価・運用まで。AIを「表現と実務」の両輪で活かす型を作ります。</p>
          </article>
          <article className="card">
            <div className="title">出版・ワークショップ</div>
            <div className="meta">ZINE／講座／登壇</div>
            <p>断片を束ねる編集術を軸に、ZINE制作や対話型の学びの場を企画・実施します。</p>
          </article>
          <article className="card">
            <div className="title">軽量コンサルティング</div>
            <div className="meta">アセスメントと伴走</div>
            <p>課題の言語化→小さな施策→検証サイクル。必要十分な仕組みだけを導入します。</p>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <h2 className="h2" style={{ marginBottom: 12 }}>進め方（最小の3ステップ）</h2>
        <div className="grid">
          <article className="card">
            <div className="title">1. 聞く / 観察する</div>
            <div className="meta">30–60分</div>
            <p>現状の言葉・断片・道具を拝見し、ゴールと制約を軽く合意します。</p>
          </article>
          <article className="card">
            <div className="title">2. 置く / 形にする</div>
            <div className="meta">1–2週間</div>
            <p>最小のプロトタイプ（文面、ノート、ワークフロー、画面）を素早く配置します。</p>
          </article>
          <article className="card">
            <div className="title">3. 回す / 学ぶ</div>
            <div className="meta">スプリント</div>
            <p>小さく回して学習。続ける価値がある部分だけを拡張します。</p>
          </article>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section">
        <h2 className="h2" style={{ marginBottom: 12 }}>関わり方</h2>
        <div className="grid">
          <article className="card">
            <div className="title">スポット</div>
            <div className="meta">ドキュメント/講座/設計レビュー</div>
            <p>単発での整備・レビュー。契約書・NDA・メモの編集からZINE設計まで。</p>
          </article>
          <article className="card">
            <div className="title">スプリント伴走</div>
            <div className="meta">2–4週間</div>
            <p>小さな成果物を積み上げながら、仕組みの自走化を目指します。</p>
          </article>
          <article className="card">
            <div className="title">継続パートナー</div>
            <div className="meta">月次</div>
            <p>内省リズム・編集・AI運用を継続的にチューニング。必要に応じて士業と連携。</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h3 className="h3">まずは軽くご相談から。</h3>
        <p className="lead">要件が固まっていなくても大丈夫です。現在地を一緒に言語化します。</p>
        <div style={{ marginTop: 16, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a className="cta primary" href="/contact">お問い合わせ</a>
          <a className="cta" href="/company">会社概要を見る</a>
        </div>
      </section>
    </div>
  );
}