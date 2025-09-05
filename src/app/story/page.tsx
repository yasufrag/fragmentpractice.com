export const metadata = {
  title: "Story",
  description: "Fragment Practice のストーリー",
  robots: { index: false, follow: false },
}

export default function StoryPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>
          Story
        </h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice合同会社の歩みとブランドストーリーです。
          高松から世界へ。生活と研究を重ねながら、
          人間的な営みを探究していきます。
        </p>
      </section>

      {/* 瀬戸内から始まる軌跡 */}
      <section className="section" aria-labelledby="roots">
        <h2 id="roots" className="h2" style={{ marginBottom: 12 }}>
          瀬戸内から始まる軌跡
        </h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice の物語は、香川県にルーツを持ちます。
          瀬戸内を行き交う船の光景は、「人生を前に進めることは船旅に似ている」という感覚を呼び起こしました。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          幼少期から静けさや言葉にならない感情に敏感であること。
          その感性はやがて <strong>Computer Science / Security</strong>{" "}
          への関心と結びつき、仕組みを設計する眼差しへ。
          組織設計やラーニングシステムの実務を経て、
          <em>「人の内的リズムに寄り添う詩的インフラ」</em> を構想するに至りました。
        </p>
      </section>

      {/* Fragment Practice */}
      <section className="section" aria-labelledby="fragment">
        <h2 id="fragment" className="h2" style={{ marginBottom: 12 }}>
          Fragment Practice という法人
        </h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice 合同会社は、
          <strong>AI・言語・文化実験</strong>を核とする法人です。
          研究・出版（ZINE）・国際的な登壇や共創を通じて、
          社会に新しい仕組みと表現を提案します。
        </p>
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          <li>AIと構文の実験：対話構造の設計と実装</li>
          <li>編集と出版（ZINE）：断片を編み、思考の星座を共有</li>
          <li>共創プロジェクト：国内外パートナーと価値を検証・展開</li>
        </ul>
        <p style={{ maxWidth: 840, marginTop: 16 }}>
          私たちの使命は技術を目的化しないこと。
          <strong>「人間的な営みとは何か」</strong>を問い、
          技術を橋渡し（インフラ）として設計します。
          CS/セキュリティの厳密さと詩的実践の柔らかさを
          同じ器で扱います。
        </p>
      </section>

      {/* 結び */}
      <section className="section" aria-labelledby="closing">
        <h2 id="closing" className="h2" style={{ marginBottom: 12 }}>
           高松から、世界へ
        </h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          私たちは、AIを“便利さ”のためだけに使いません。静けさと構文性を土台に、
          注意・関係・編集を支える<strong>象徴的インフラ</strong>を設計し、運用に落とし込みます。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          研究と文化の往復を続けながら、再現可能な実践と成果物（プロトタイプ、ZINE、公開対話）を
          積層していきます。技術は目的ではなく、関係を整えるための器です。
        </p>
        <p style={{ maxWidth: 840 }}>
          本ページは理念の共有を目的としており、検索インデックスの対象外です。
          共同検証や対話のご相談は、必要に応じて静かに受け付けています。
          <a href="/contact" className="cta" style={{ marginLeft: 8 }}>Contact</a>
        </p>
      </section>
    </div>
  )
}