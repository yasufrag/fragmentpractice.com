// app/work/page.tsx
export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Work</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice は、AI・言語・編集の交差点で
          「静けさと構文性」に基づく軽量な伴走を提供します。
          まずは小さく試し、確かめながら深めます。
        </p>
      </section>

      {/* 提供内容（最小のカタログ） */}
      <section className="section" aria-labelledby="offers">
        <h2 id="offers" className="h2" style={{ marginBottom: 12 }}>提供内容</h2>

        <div className="grid" style={{ marginTop: 8 }}>
          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">Talk / Workshop（設計）</h3>
            <p className="meta">専門家向けの小規模セッション</p>
            <p style={{ marginTop: 8 }}>
              テーマ例：AIと構文設計、対話システムの思想、詩的実践と研究の往復。
              30–60分のトーク、または少人数ワークショップ。
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>講演アウトライン</li>
              <li>質疑ドキュメント（抜粋）</li>
            </ul>
          </article>

          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">AI対話設計 & 軽量リサーチ</h3>
            <p className="meta">仮説検証の“最小単位”を設計</p>
            <p style={{ marginTop: 8 }}>
              意図と関係性を整理し、対話構造・プロンプトの設計と簡易検証を行います。
              成果は再現可能なメモと試作に集約します。
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>設計メモ（前提/意図/タグ）</li>
              <li>試作（テキスト中心のプロトタイプ）</li>
            </ul>
          </article>

          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">編集・ZINE（小さな出版）</h3>
            <p className="meta">断片を編んで共有知へ</p>
            <p style={{ marginTop: 8 }}>
              断片（Fragment）を編集し、テーマ別に束ねます。
              公開は段階的に。まずは私家版の小冊子・PDF草案から。
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              <li>ZINE 企画メモ / 目次案</li>
              <li>サンプル数ページ（PDF）</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 進め方（最短ループ） */}
      <section className="section" aria-labelledby="process">
        <h2 id="process" className="h2" style={{ marginBottom: 12 }}>進め方</h2>
        <ol style={{ marginTop: 8, paddingLeft: 18, maxWidth: 840 }}>
          <li><strong>Intake（30–45min）</strong>：目的・制約・公開可否の確認。</li>
          <li><strong>Sketch（1–2週間）</strong>：設計メモ／最小プロト／次アクション定義。</li>
          <li><strong>Deliver & Reflect</strong>：成果物共有→短いふりかえり→必要に応じて継続。</li>
        </ol>
      </section>

      {/* 契約形態（控えめ） */}
      <section className="section" aria-labelledby="engagements">
        <h2 id="engagements" className="h2" style={{ marginBottom: 12 }}>契約形態</h2>
        <div className="grid" style={{ marginTop: 8 }}>
          <div className="card" style={{ gridColumn: "span 4" }}>
            <h3 className="title">Spot</h3>
            <p className="meta">単発 1 回</p>
            <p style={{ marginTop: 8 }}>講演／相談／レビューなど、焦点を絞った単発支援。</p>
          </div>
          <div className="card" style={{ gridColumn: "span 4" }}>
            <h3 className="title">Sprint</h3>
            <p className="meta">1–2 週間</p>
            <p style={{ marginTop: 8 }}>最小の仮説検証と設計メモの束ね。成果はテキスト中心。</p>
          </div>
          <div className="card" style={{ gridColumn: "span 4" }}>
            <h3 className="title">Ongoing</h3>
            <p className="meta">月次（小規模）</p>
            <p style={{ marginTop: 8 }}>必要に応じて継続。密度優先・少数限定。</p>
          </div>
        </div>
        <p style={{ marginTop: 12, color: "var(--muted)", maxWidth: 840 }}>
          ※ 金額・条件は内容と公開範囲に応じて個別に合意します（NDA/契約雛形あり）。
        </p>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="cta">
        <h2 id="cta" className="h2" style={{ marginBottom: 12 }}>まずは小さく、静かに試す</h2>
        <p style={{ maxWidth: 720, marginBottom: 12 }}>
          直近で対応可能な枠は限られています。概要が決まっていなくても構いません。
          合いそうかどうかの確認からご連絡ください。
        </p>
        <a className="cta" href="/contact" aria-label="お問い合わせへ">Contact</a>
      </section>
    </div>
  );
}