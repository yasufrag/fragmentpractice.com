// app/about/page.tsx (About Page – 全体修正版)
export const metadata = {
  title: "About",
  description:
    "Fragment Practice合同会社と代表・新庄泰大の紹介ページです。理念『静けさと構文性』を軸に、法人支援と文化的実践の両面を行っています。",
  openGraph: {
    title: "Fragment Practice — About",
    description:
      "Fragment Practice合同会社と代表・新庄泰大のプロフィール、活動領域、ビジョンを紹介するページ。",
    url: "https://fragmentpractice.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="fp-container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>About</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice合同会社と代表・新庄泰大の紹介ページです。理念「静けさと構文性」を軸に、
          法人支援と文化的実践を横断する活動を行っています。
        </p>
      </section>

      {/* Vision */}
      <section className="fp-section" id="vision" aria-labelledby="vision-h">
        <h2 id="vision-h" className="h2" style={{ marginBottom: 12 }}>Vision</h2>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          私たちは「静けさと構文性」を理念に、AI・言語・編集の交差点で新しい構造や実践を探求しています。
          法人案件への伴走と文化的な表現活動の両立を通じ、社会に軽やかで持続的な知の形を提供します。
        </p>
      </section>

      {/* Principles */}
      <section className="fp-section" id="principles" aria-labelledby="principles-h">
        <h2 id="principles-h" className="h2" style={{ marginBottom: 12 }}>Principles</h2>
        <ul style={{ maxWidth: 840, marginBottom: 12 }}>
          <li>小さなスプリントで回し、成果を積層する</li>
          <li>文化と法人を矛盾させず、表裏一体にする</li>
          <li>信頼・透明性を重視し、セキュリティと運用に配慮する</li>
        </ul>
      </section>

      {/* Profile */}
      <section className="fp-section" id="profile" aria-labelledby="profile-h">
        <h2 id="profile-h" className="h2" style={{ marginBottom: 12 }}>代表プロフィール</h2>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          新庄 泰大（Yasuhiro Shinsho）― Fragment Practice合同会社 代表。<br />
          専門は言語表現・構文設計と人工知能の応用。国内外での講演や文化的実践を通じ、法人支援と創作活動の両面を展開。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          2025年、香川県高松市にて法人を設立。拠点を地方に置きながら、言葉と構造の新しい接点を探る活動を続けています。
        </p>
      </section>

      {/* Activities */}
      <section className="fp-section" id="activities" aria-labelledby="activities-h">
        <h2 id="activities-h" className="h2" style={{ marginBottom: 12 }}>活動領域</h2>
        <ul style={{ maxWidth: 840, marginBottom: 12 }}>
          <li>AIと対話設計</li>
          <li>法人支援（ナラティブ・構文設計）</li>
          <li>文化的実践（ZINE制作・Fragment編集）</li>
          <li>登壇・講演（日英二言語）</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="fp-section" id="timeline" aria-labelledby="timeline-h">
        <h2 id="timeline-h" className="h2" style={{ marginBottom: 12 }}>タイムライン</h2>
        <ul style={{ maxWidth: 840, marginBottom: 12 }}>
          <li>2025年8月 — 第二子誕生</li>
          <li>2025年9月 — 活動再開（登壇・法人整備）</li>
          <li>2025年10月 — 英語登壇予定</li>
        </ul>
      </section>

      {/* Related Links */}
      <section className="fp-section" id="links" aria-labelledby="links-h">
        <h2 id="links-h" className="h2" style={{ marginBottom: 12 }}>関連ページ</h2>
        <div className="linkcards">
          <a className="linkcard" href="/company">
            <h3 className="h3">Company</h3>
            <p>法人情報・所在地・制度的概要</p>
          </a>
          <a className="linkcard" href="/work">
            <h3 className="h3">Work</h3>
            <p>提供メニューと事例紹介</p>
          </a>
          <a className="linkcard" href="/press">
            <h3 className="h3">Press / Media</h3>
            <p>取材・掲載・メディア対応</p>
          </a>
          <a className="linkcard" href="/trust">
            <h3 className="h3">Trust</h3>
            <p>セキュリティ・運用・契約フロー</p>
          </a>
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About — Fragment Practice合同会社",
            description:
              "Fragment Practice合同会社と代表・新庄泰大の紹介ページ。理念『静けさと構文性』を軸に、法人支援と文化的実践の両面を行っています。",
            url: "https://fragmentpractice.com/about",
            mainEntity: {
              "@type": "Person",
              name: "Yasuhiro Shinsho",
              alternateName: "新庄 泰大",
              jobTitle: "代表 / Research-Practice Lead",
              worksFor: {
                "@type": "Organization",
                name: "Fragment Practice合同会社",
              },
            },
          }),
        }}
      />
    </div>
  );
}