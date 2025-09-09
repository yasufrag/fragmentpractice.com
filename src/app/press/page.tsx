// app/press/page.tsx (Press/Media – 全体版・プレスキット除外)
export const metadata = {
  title: "Press / Media",
  description:
    "Fragment Practice に関する取材・掲載情報、プレス対応のご案内ページです。法人実践と文化的活動（ZINE, Fragment）の両面を対象に、取材依頼やお問い合わせを承ります。",
  openGraph: {
    title: "Fragment Practice — Press / Media",
    description:
      "Fragment Practice に関する取材・掲載情報、プロフィール、プレス対応のご案内ページ。",
    url: "https://fragmentpractice.com/press",
    type: "website",
  },
};

export default function PressPage() {
  return (
    <div className="fp-container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Press / Media</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice に関する取材・掲載情報、プレス対応のためのご案内です。
          法人活動と文化的実践（ZINE, Fragment）の両面について、お問い合わせを承ります。
        </p>
      </section>

      {/* プレスリリース用定型文 */}
      <section className="fp-section" id="press-release" aria-labelledby="press-release-h">
        <h2 id="press-release-h" className="h2" style={{ marginBottom: 12 }}>プレスリリース用紹介文（冒頭）</h2>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          Fragment Practice合同会社（所在地：香川県高松市、代表：新庄泰大）は、AI・言語・編集の交差点において、
          「静けさと構文性」に基づく伴走型の支援を提供しています。法人向けの研究・開発支援から、
          ZINE編集や文化実践まで、研究と実装を横断する活動を展開しています。
        </p>
      </section>

      {/* プロフィール（メディア用短縮版） */}
      <section className="fp-section" id="profile-short" aria-labelledby="profile-short-h">
        <h2 id="profile-short-h" className="h2" style={{ marginBottom: 12 }}>プロフィール（メディア用）</h2>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          新庄 泰大（Yasuhiro Shinsho）― Fragment Practice合同会社 代表。<br />
          AI・言語・編集の交差点で「静けさと構文性」に基づく軽量な伴走を提供。<br />
          詩的構文の実践者として、法人支援／登壇／ZINE制作を横断的に展開しています。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          略歴：2025年、香川県高松市にて法人設立。国内外での講演や文化実践を通じ、
          AIと言葉の新しい関わり方を探求。日本語と英語の両言語で活動。
        </p>
      </section>

      {/* プロフィール（フォーマル版） */}
      <section className="fp-section" id="profile-formal" aria-labelledby="profile-formal-h">
        <h2 id="profile-formal-h" className="h2" style={{ marginBottom: 12 }}>プロフィール（フォーマル版）</h2>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          新庄 泰大（しんしょう・やすひろ）／ Yasuhiro Shinsho。Fragment Practice合同会社 代表。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          専門は言語表現・構文設計と人工知能の応用。国内外での登壇を行い、詩的構文の研究実践を通じて、
          法人支援・文化活動の両面において新しい知の形を探求している。2025年、香川県高松市にて法人を設立。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          主な活動領域は「AIと対話設計」「構文性に基づく組織支援」「文化的実践の編集・出版」。
          日本語・英語の二言語で発信し、研究・産業・文化を横断する活動を続けている。
        </p>
      </section>

      {/* 誘導文 */}
      <section className="fp-section" id="guidance" aria-labelledby="guidance-h">
        <h2 id="guidance-h" className="h2" style={{ marginBottom: 12 }}>取材をご検討の方へ</h2>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          取材・掲載に際しては、まず <a href="/work">Work ページ</a> をご覧ください。提供メニューや活動範囲を簡潔にまとめています。
          法人案件の信頼性に関する情報や、文化的活動との調和もご確認いただけます。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 12 }}>
          プロフィールや活動の背景に関する基本的な情報は <a href="/about">About ページ</a> に掲載しています。
          また、最新の登壇予定や更新情報は <a href="/news">News ページ</a> にてご覧いただけます。
        </p>
      </section>

      {/* お問い合わせ */}
      <section className="fp-section" id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h" className="h2" style={{ marginBottom: 12 }}>お問い合わせ</h2>
        <p style={{ maxWidth: 720, marginBottom: 12 }}>
          掲載や取材のご相談は、<a href="/contact">Contact</a> フォームからご連絡ください。
          内容を確認の上、必要に応じて折り返しご案内いたします。
        </p>
        <a className="cta" href="/contact" aria-label="お問い合わせフォームへ">Contact Form</a>
      </section>

      {/* 構造化データ（Organization + Person） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fragment Practice合同会社",
            alternateName: "Fragment Practice LLC",
            url: "https://fragmentpractice.com",
            address: {
              "@type": "PostalAddress",
              addressRegion: "香川県",
              addressLocality: "高松市",
            },
            founder: {
              "@type": "Person",
              name: "Yasuhiro Shinsho",
              alternateName: "新庄 泰大",
              jobTitle: "Representative / Research-Practice Lead",
            },
            sameAs: [
              "https://fragmentpractice.com/company",
              "https://fragmentpractice.com/about",
              "https://fragmentpractice.com/work",
              "https://fragmentpractice.com/trust",
            ],
          }),
        }}
      />
    </div>
  );
}