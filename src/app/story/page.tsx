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
          小豆島から高松へ、そして世界へ。生活と研究を重ねながら、
          人間的な営みを探究していきます。
        </p>
      </section>

      {/* 小豆島から始まる軌跡 */}
      <section className="section" aria-labelledby="roots">
        <h2 id="roots" className="h2" style={{ marginBottom: 12 }}>
          小豆島から始まる軌跡
        </h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice の物語は、香川県・小豆島にルーツを持ちます。
          瀬戸内を行き交う船の光景を日常の風景として育った原体験は、
          「人生を前に進めることは船旅に似ている」という実感を私たちに残しました。
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

      {/* Enoar */}
      <section className="section" aria-labelledby="enoar">
        <h2 id="enoar" className="h2" style={{ marginBottom: 12 }}>
          Envision: Enoar（ローカルの顔）
        </h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          <strong>Enoar（エノア）</strong> は「人生のオール（oar）を自らの力で漕ぎ進められるように」という願いから生まれた
          ブランドです。教育現場での実践とコーチングを背景に、
          香川・小豆島・高松という地域に根ざした支援を行います。
        </p>
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          <li>コーチングと伴走支援（対話の設計）</li>
          <li>書や言葉のワークショップ（表現の設計）</li>
          <li>地域文化の発信（物語の設計）</li>
        </ul>
        <p style={{ maxWidth: 840, marginTop: 16 }}>
          Enoar は Fragment Practice の
          <strong>「ローカルの顔」</strong> として、
          生活と家族、教育と地域に寄り添い、
          グローバルな活動を内側から支えます。
        </p>
      </section>

      {/* 二つのレイヤー */}
      <section className="section" aria-labelledby="layers">
        <h2 id="layers" className="h2" style={{ marginBottom: 12 }}>
          二つのレイヤー：グローバルとローカル
        </h2>
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          <li>
            <strong>Fragment</strong>：AI・言語実験・国際的な共創（外へ開く）
          </li>
          <li>
            <strong>Enoar</strong>：コーチング・教育・地域文化（内に寄り添う）
          </li>
        </ul>
        <p style={{ maxWidth: 840, marginTop: 16 }}>
          両者は別ブランドというより、<strong>一つの法人に重なるレイヤー</strong>
          です。小豆島で芽生えた感性が高松で法人基盤となり、
          世界へと航路を延ばす——その往復運動こそが
          Fragment Practice の運動体です。
        </p>
      </section>

      {/* 技術と人間 */}
      <section className="section" aria-labelledby="syntax">
        <h2 id="syntax" className="h2" style={{ marginBottom: 12 }}>
          技術と人間の交差点へ
        </h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          私たちは <strong>Syntax（構文）</strong> を、文法にとどまらない「関わりの設計」と捉えます。
          話す／間を取る／関係を結ぶ——その全体を設計対象とし、
          AIを“生産性ツール”ではなく
          <strong>“象徴的インフラ”</strong> として位置づけます。
        </p>
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          <li>セキュリティの視座：信頼の前提を設計する</li>
          <li>システム思考：人・プロセス・道具を一体で捉える</li>
          <li>詩的構文：内的リズムを損なわない情報の流れを整える</li>
        </ul>
      </section>

      {/* 家族から世界へ */}
      <section className="section" aria-labelledby="family">
        <h2 id="family" className="h2" style={{ marginBottom: 12 }}>
          家族から世界へ
        </h2>
        <p style={{ maxWidth: 840 }}>
          Fragment Practice は法人であると同時に、家族の物語でもあります。
          <strong>小豆島から高松へ、そして世界へ。</strong>
          生活と研究、地域と国際、家族と社会。
          その重層的な広がりを、<strong>ことば</strong> と{" "}
          <strong>仕組み</strong> で結んでいきます。
        </p>
      </section>
    </div>
  )
}