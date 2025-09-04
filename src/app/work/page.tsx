// app/work/page.tsx
export const metadata = { title: "Work" };

export default function Work() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1">Work</h1>
        <p className="lead" style={{ marginTop: 8 }}>
          言葉と仕組みを整え、共創の足場を軽やかに整備します。<br />
          リフレクション設計／AI×言語実験／出版・講座／軽量コンサルティング。
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <a className="cta primary" href="/contact">お問い合わせ</a>
          <a className="cta" href="/company">会社情報</a>
        </div>
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="services">
        <h2 id="services" className="h2" style={{ marginBottom: 12 }}>サービス</h2>
        <p style={{ marginBottom: 20, color: "var(--muted)" }}>
          「言葉・構文・編集」を軸に、記録と対話からAI活用まで横断的に支援します。
          必要十分な最小構成から始め、合意を重ねながら拡張します。
        </p>

        <div className="grid">
          <article className="card">
            <div className="title">リフレクション設計</div>
            <div className="meta">記録・内省・編集のワークフロー</div>
            <p>
              日々の断片を扱う「器」を設計。記録→省察→共有までを無理なく続けられる
              プロセスとテンプレートを整えます。
            </p>
          </article>

          <article className="card">
            <div className="title">AI×言語実験</div>
            <div className="meta">LLM／エージェントの詩的運用</div>
            <p>
              プロンプト設計から評価・運用まで。「表現 × 実務」の両輪で活かす
              軽量な運用型を共創します。
            </p>
          </article>

          <article className="card">
            <div className="title">出版・ワークショップ</div>
            <div className="meta">ZINE／講座／登壇</div>
            <p>
              断片を束ねる編集術を軸に、ZINE制作や対話型の学びの場を企画・実施。
              社内外への共有・発信に接続します。
            </p>
          </article>

          <article className="card">
            <div className="title">軽量コンサルティング</div>
            <div className="meta">アセスメントと伴走</div>
            <p>
              課題の言語化→小さな施策→検証サイクル。最小限の仕組みだけを導入し、
              無駄なく改善を進めます。
            </p>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process">
        <h2 id="process" className="h2" style={{ marginBottom: 12 }}>進め方（最小の3ステップ）</h2>
        <p style={{ marginBottom: 20, color: "var(--muted)" }}>
          小さな合意と試行から始め、段階的に成果を共有。続ける価値がある部分だけを拡張します。
        </p>

        <div className="grid">
          <article className="card">
            <div className="title">1. 聞く / 観察する</div>
            <div className="meta">30–60分</div>
            <p>
              現状の言葉・断片・道具を拝見し、ゴールと制約を軽く合意します。
              初回相談の段階で費用は発生しません。
            </p>
          </article>

          <article className="card">
            <div className="title">2. 置く / 形にする</div>
            <div className="meta">1–2週間</div>
            <p>
              最小のプロトタイプ（文面、ノート、ワークフロー、画面）を素早く配置。
              実際に触れていただきながら調整します。
            </p>
          </article>

          <article className="card">
            <div className="title">3. 回す / 学ぶ</div>
            <div className="meta">スプリント</div>
            <p>
              小さく回して学習し、効果が出た部分から拡張。運用と学びのリズムを整えます。
            </p>
          </article>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section" aria-labelledby="engagement">
        <h2 id="engagement" className="h2" style={{ marginBottom: 12 }}>関わり方</h2>
        <p style={{ marginBottom: 20, color: "var(--muted)" }}>
          単発・スプリント・長期伴走まで柔軟に設計します。必要に応じて士業や外部パートナーとも連携。
        </p>

        <div className="grid">
          <article className="card">
            <div className="title">スポット</div>
            <div className="meta">ドキュメント／講座／設計レビュー</div>
            <p>
              契約書・NDA・メモの編集からZINE設計まで。単発の整備・レビューに対応します。
            </p>
          </article>

          <article className="card">
            <div className="title">スプリント伴走</div>
            <div className="meta">2–4週間</div>
            <p>
              小さな成果物を積み上げながら自走化を目指します。短期集中のアウトプットも可。
            </p>
          </article>

          <article className="card">
            <div className="title">継続パートナー</div>
            <div className="meta">月次</div>
            <p>
              内省リズム・編集・AI運用を継続チューニング。体制や季節性に合わせて調整します。
            </p>
          </article>
        </div>
      </section>

      {/* Problems we help with */}
      <section className="section" aria-labelledby="problems">
        <h2 id="problems" className="h2" style={{ marginBottom: 12 }}>対象となる課題例</h2>
        <p style={{ marginBottom: 20, color: "var(--muted)" }}>
          具体的な要件が固まっていなくても問題ありません。現状の断片から一緒に言語化します。
        </p>

        <div className="grid">
          <article className="card">
            <div className="title">記録が続かない</div>
            <div className="meta">ワークフロー設計</div>
            <p>毎日のメモ／議事録／ふりかえりを最小の器で回せるように整えます。</p>
          </article>
          <article className="card">
            <div className="title">AIをどこから始めるか</div>
            <div className="meta">プロトタイプ設計</div>
            <p>小さな実験から価値を検証。評価と運用の型までをご一緒に。</p>
          </article>
          <article className="card">
            <div className="title">言葉が定まらない</div>
            <div className="meta">編集と言語化</div>
            <p>社内向けの合意文面から対外発信まで、一貫した構文を作ります。</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h3 className="h3">まずは軽くご相談から。</h3>
        <p className="lead">現在地を一緒に整え、最小の一歩から始めましょう。</p>
        <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center" }}>
          <a className="cta primary" href="/contact">お問い合わせ</a>
          <a className="cta" href="/company">会社概要を見る</a>
        </div>
      </section>
    </div>
  );
}