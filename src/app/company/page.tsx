// app/company/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Fragment Practice合同会社の会社概要。AI・言語・編集を横断し、注意・関係・編集を支える“象徴的インフラ”を設計します。",
  openGraph: {
    title: "Fragment Practice — Company",
    description:
      "Fragment Practice合同会社の会社概要。AI・言語・編集を横断し、注意・関係・編集を支える“象徴的インフラ”を設計します。",
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

  // 位置情報（MapFan 掲載座標）
  const LAT = 34.3375959;
  const LNG = 134.0467874;

  // 地図用クエリ
  const qHuman = `${buildingName} ${addressLine}`;
  const q = encodeURIComponent(qHuman);

  // 各サービスへのリンク（緯度経度を優先）
  const links = {
    apple: `https://maps.apple.com/?ll=${LAT},${LNG}&q=${encodeURIComponent(buildingName)}`,
    google: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
    osm: `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=18/${LAT}/${LNG}`,
    // モバイルのマップアプリに直接渡す（対応端末のみ）
    geo: `geo:${LAT},${LNG}?q=${encodeURIComponent(qHuman)}`,
  };

  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Company</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          Fragment Practice合同会社（Fragment Practice LLC）の会社概要です。
          高松から世界へ。小さな実装と観察を重ね、確かな再現性を積層していきます。
        </p>
      </section>

      {/* 会社概要 */}
      <section className="section" aria-labelledby="overview">
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

      {/* 構造化データ（SEO/共有用に最小限） */}
      <script
        type="application/ld+json"
        // 住所とGeo座標を併記
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fragment Practice 合同会社",
            url: "https://fragmentpractice.com",
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