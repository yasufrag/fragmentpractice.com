export const metadata = {
  title: "Story",
  description: "Fragment Practice のストーリー",
  robots: {
    index: false,
    follow: false,
    nocache: true,            // 一部クローラ向け（無視されても害なし）
    noimageindex: true,       // 画像インデックス抑制
    nosnippet: true,          // 検索結果の抜粋抑制
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
      maxSnippet: -1,
      maxImagePreview: "none",
      maxVideoPreview: -1,
    },
  },
};

export default function StoryPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Story</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice合同会社の歩みとブランドストーリーです。
          瀬戸内・高松から世界へ。生活と研究を重ねながら、
          人間的な営みを探究していきます。
        </p>
      </section>

      {/* Roots */}
      <section className="section" aria-labelledby="roots">
        <h2 id="roots" className="h2">瀬戸内から始まる軌跡</h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice の物語は、香川県・瀬戸内に根を持ちます。
          船が行き交う光景を日常に見て育ち、
          「人生を進めることは船旅に似ている」という感覚を抱いてきました。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          幼少期から静けさや言葉にならない感情に敏感であったこと。
          その感性はやがて <strong>Computer Science / Security</strong> への関心と結びつき、
          組織設計やラーニングシステムの実務を経て、
          <em>「人の内的リズムに寄り添う詩的インフラ」</em> を構想する基盤となりました。
        </p>
      </section>

      {/* Company Vision */}
      <section className="section" aria-labelledby="vision">
        <h2 id="vision" className="h2">Fragment Practice という法人</h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice 合同会社は、
          <strong>AI・言語・文化実験</strong>を核に活動しています。
          研究・出版（ZINE）・国際的な登壇や共創を通じて、
          社会に新しい仕組みと表現を提案します。
        </p>
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          <li>AIと構文の実験：対話構造の設計と実装</li>
          <li>編集と出版（ZINE）：断片を編み、思考の星座を共有</li>
          <li>共創プロジェクト：国内外パートナーと価値を検証・展開</li>
        </ul>
        <p style={{ maxWidth: 840, marginTop: 16 }}>
          私たちの使命は技術を目的化せず、
          <strong>「人間的な営みとは何か」</strong>を問い続けることです。
          CS/セキュリティの厳密さと詩的実践の柔らかさを同じ器で扱い、
          技術を「関係を整えるためのインフラ」として設計します。
        </p>
      </section>

      {/* Closing */}
      <section className="section" aria-labelledby="closing">
        <h2 id="closing" className="h2">高松から、世界へ</h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          私たちは AI を“便利さ”のためだけに用いません。
          静けさと構文性を土台に、注意・関係・編集を支える<strong>象徴的インフラ</strong>を
          研究・実装し、社会に還元します。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          瀬戸内からの視座を忘れずに、国際的な共創と文化の実践を積み重ねます。
          プロトタイプ、ZINE、公開対話といった成果物を通して、
          「生活と研究の往復」から社会に静かな仕組みを届けていきます。
        </p>
        <p style={{ maxWidth: 840 }}>
          本ページは理念共有を目的としており検索インデックスの対象外です。
          協働や対話のご相談は、必要に応じて静かに受け付けています。
        </p>
        <div style={{ marginTop: 24, display: "flex", gap: "16px" }}>
          <a href="/zine" className="cta">ZINE を見る</a>
          <a href="/work" className="cta">登壇・共創を見る</a>
        </div>
      </section>
    </div>
  );
}