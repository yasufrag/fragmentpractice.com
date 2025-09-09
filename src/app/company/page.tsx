// src/app/company/page.tsx (revised – 安定版: カードデザインを元に戻し、内容のみ更新)
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Fragment Practice合同会社の会社概要。公的情報（所在地・法人番号）と、信頼性・セキュリティ方針、取材・問い合わせ窓口を掲載しています。",
  openGraph: {
    title: "Fragment Practice — Company",
    description:
      "Fragment Practice合同会社の会社概要。公的情報／信頼性・セキュリティ方針／関連リンク（About, Work, Press, Trust）。",
    url: "https://fragmentpractice.com/company",
    type: "article",
  },
};

export default function CompanyPage() {
  // 表記
  const buildingName = "高松セントラルスカイビルディング";
  const postal = "760-0018";
  const addressLine =
    "香川県高松市天神前10番5号 高松セントラルスカイビルディング 3F south";

  // 位置情報（掲載座標）
  const LAT = 34.3375959;
  const LNG = 134.0467874;

  // 地図用クエリ（人間可読）
  const qHuman = `${buildingName} ${addressLine}`;

  // 各サービス（緯度経度優先、fallback に検索語）
  const links = {
    apple: `https://maps.apple.com/?ll=${LAT},${LNG}&q=${encodeURIComponent(buildingName)}`,
    google: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
    osm: `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=18/${LAT}/${LNG}`,
    // 対応端末のみ：モバイルのマップアプリ起動
    geo: `geo:${LAT},${LNG}?q=${encodeURIComponent(qHuman)}`,
  } as const;

  return (
    <div className="fp-container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Company</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          Fragment Practice合同会社（Fragment Practice LLC）の会社概要です。
          高松から世界へ。小さな実装と観察を重ね、確かな再現性を積層していきます。
        </p>
      </section>

      {/* 会社概要 */}
      <section className="fp-section" aria-labelledby="overview">
        <h2 id="overview" className="h2" style={{ marginBottom: 12 }}>会社概要</h2>

        <article className="orgcard" aria-label="会社情報">
          <dl className="orgdl">
            <div className="row">
              <dt>商号</dt>
              <dd>Fragment Practice 合同会社</dd>
            </div>

            <div className="row">
              <dt>代表</dt>
              <dd>新庄 泰大</dd>
            </div>

            <div className="row">
              <dt>所在地</dt>
              <dd>
                <address className="addr">
                  〒{postal}<br />
                  香川県高松市天神前10番5号<br />
                  {buildingName} 3F south
                </address>

                {/* 地図リンク（緯度経度でピン） */}
                <div className="chips" aria-label="地図リンク">
                  <a className="chip" href={links.apple} target="_blank" rel="noopener noreferrer">
                    Apple&nbsp;Maps
                  </a>
                  <a className="chip" href={links.google} target="_blank" rel="noopener noreferrer">
                    Google&nbsp;Maps
                  </a>
                  <a className="chip" href={links.osm} target="_blank" rel="noopener noreferrer">
                    OpenStreetMap
                  </a>
                </div>
              </dd>
            </div>

            <div className="row">
              <dt>電話</dt>
              <dd>
                <a href="tel:+81878103037">087-810-3037</a>
              </dd>
            </div>

            <div className="row">
              <dt>設立</dt>
              <dd>2025年8月12日</dd>
            </div>

            <div className="row">
              <dt>法人番号</dt>
              <dd><span className="mono">7470003002956</span></dd>
            </div>
          </dl>
        </article>
      </section>

      {/* 関連ページ */}
      <section className="fp-section" aria-labelledby="related">
        <h2 id="related" className="h2" style={{ marginBottom: 12 }}>関連ページ</h2>

        {/* ここを linkcards / linkcard に置換 */}
        <div className="linkcards">
          <Link className="linkcard" href="/about">
            <h3 className="h3">About</h3>
            <p>代表／理念／活動領域</p>
          </Link>
          <Link className="linkcard" href="/work">
            <h3 className="h3">Work</h3>
            <p>提供メニュー・進め方</p>
          </Link>
          <Link className="linkcard" href="/press">
            <h3 className="h3">Press / Media</h3>
            <p>取材・掲載のご案内</p>
          </Link>
          <Link className="linkcard" href="/trust">
            <h3 className="h3">Trust</h3>
            <p>信頼・セキュリティ運用</p>
          </Link>
        </div>
      </section>

      {/* 連絡先 CTA */}
      <section className="fp-section" aria-labelledby="cta">
        <h2 id="cta" className="h2" style={{ marginBottom: 12 }}>お問い合わせ</h2>
        <p style={{ maxWidth: 720, marginBottom: 12 }}>
          取引・取材・業務提携のご相談は、<a href="/contact">Contact</a> フォームからご連絡ください。
        </p>
      </section>

      {/* 構造化データ（Organization最小） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fragment Practice 合同会社",
            url: "https://fragmentpractice.com",
            foundingDate: "2025-08-12",
            address: {
              "@type": "PostalAddress",
              postalCode: postal,
              addressRegion: "香川県",
              addressLocality: "高松市",
              streetAddress: "天神前10番5号 高松セントラルスカイビルディング 3F south",
            },
            geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
            telephone: "+81-87-810-3037",
          }),
        }}
      />
    </div>
  );
}
