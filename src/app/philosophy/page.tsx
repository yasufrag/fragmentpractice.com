// app/philosophy/page.tsx
export const metadata = { title: "Philosophy" };

export default function PhilosophyPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Philosophy</h1>
        <p className="lead" style={{ marginTop: 8 }}>
          Fragment Practice の核となる三層と、その姿勢。<br />
          Quantum / Fragment / Syntax を行き来しながら、注意・関係・編集を扱います。
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <a className="cta" href="/work">Work へ</a>
          <a className="cta" href="/contact">お問い合わせ</a>
        </div>
      </section>

      {/* Core Layers */}
      <section className="section" aria-labelledby="layers">
        <h2 id="layers" className="h2" style={{ marginBottom: 12 }}>Core Layers</h2>
        <p style={{ marginBottom: 20, color: "var(--muted)", maxWidth: 860 }}>
          私たちは「つくる前」の曖昧な領域（Quantum）、「日々の断片」（Fragment）、
          「関係づけと配置」（Syntax）を往復しながら実務に着地させます。
        </p>
        <div className="grid">
          <article className="card">
            <div className="title">Quantum</div>
            <div className="meta">生成の場／まだ名のないもの</div>
            <p>
              偶然・違和・未分化を受け入れ、観察を重ねる段階。結論よりも「気づき」を扱い、
              早すぎる最適化を避けます。
            </p>
          </article>
          <article className="card">
            <div className="title">Fragment</div>
            <div className="meta">断片／部分の記録</div>
            <p>
              メモ・写真・引用・発話など、部分的な素材をすばやく記録。
              完璧さよりも「続けられる器」を優先します。
            </p>
          </article>
          <article className="card">
            <div className="title">Syntax</div>
            <div className="meta">構文／関係づけと配置</div>
            <p>
              バラバラな断片の関係を見立て、並べ替え、要約し、配置する。
              語彙・見取り図・プロトタイプとして現れます。
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values">
        <h2 id="values" className="h2" style={{ marginBottom: 12 }}>Values</h2>
        <div className="grid">
          <article className="card">
            <div className="title">静けさ</div>
            <div className="meta">Silence</div>
            <p>
              情報量より注意の質を。余白をつくり、判断の速度をいったん緩めます。
            </p>
          </article>
          <article className="card">
            <div className="title">関係</div>
            <div className="meta">Relation</div>
            <p>
              個の独走ではなく、他者との交換で磨く。対話の往復を設計します。
            </p>
          </article>
          <article className="card">
            <div className="title">編集</div>
            <div className="meta">Edit</div>
            <p>
              取捨・束ね直し・要約・配置。小さな編集を重ね、大仰な仕組みは避けます。
            </p>
          </article>
        </div>
      </section>

      {/* Method / Approach */}
      <section className="section" aria-labelledby="approach">
        <h2 id="approach" className="h2" style={{ marginBottom: 12 }}>Approach</h2>
        <p style={{ marginBottom: 20, color: "var(--muted)", maxWidth: 860 }}>
          思想は実務へ落ちてはじめて作用します。観察→言語化→配置→対話→再編集の循環で、
          Work ページの 3 ステップ（聞く／置く／回す）に接続します。
        </p>
        <div className="grid">
          <article className="card">
            <div className="title">観察 → 言語化</div>
            <div className="meta">Notice & Name</div>
            <p>
              既にあるリズム・用語・制約を丁寧に観察し、仮の言葉を与えます。
            </p>
          </article>
          <article className="card">
            <div className="title">配置 → 対話</div>
            <div className="meta">Place & Converse</div>
            <p>
              断片を配置し、触れるものにして対話にかける。判断を早めず、確度を高めます。
            </p>
          </article>
          <article className="card">
            <div className="title">再編集 → 実装</div>
            <div className="meta">Refine & Implement</div>
            <p>
              小さく直しながら、必要十分の型へ。継続可能性を最優先に実装します。
            </p>
          </article>
        </div>
        <p style={{ marginTop: 16 }}>
          実務での流れは <a className="cta" href="/work">Work</a> をご覧ください。
        </p>
      </section>

      {/* FAQ-like clarifications (small) */}
      <section className="section" aria-labelledby="clarify">
        <h2 id="clarify" className="h2" style={{ marginBottom: 12 }}>Clarify</h2>
        <div className="grid">
          <article className="card">
            <div className="title">生産性ではなく、持続可能性</div>
            <p>
              一時的な加速より、続く形を選びます。道具は最小構成から。
            </p>
          </article>
          <article className="card">
            <div className="title">評価は手触りで</div>
            <p>
              言葉の解像度、記録の継続度、対話の深さを指標にします。
            </p>
          </article>
          <article className="card">
            <div className="title">境界をまたぐ</div>
            <p>
              詩／設計／運用を分けずに扱う。ZINEも仕様書も同じ編集の延長です。
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h3 className="h3">思想を、実務へ。</h3>
        <p className="lead">
          小さな一歩から始めましょう。現在地の把握と、最小のプロトタイプづくりをお手伝いします。
        </p>
        <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center" }}>
          <a className="cta primary" href="/contact">お問い合わせ</a>
          <a className="cta" href="/work">実務の進め方を見る</a>
        </div>
      </section>
    </div>
  );
}