// app/company/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

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
  const buildingName = "高松セントラルスカイビルディング";
  const addressLine =
    "香川県高松市天神前10番5号 高松セントラルスカイビルディング 3F south";
  const q = encodeURIComponent(`${buildingName} ${addressLine}`);

  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Company</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          Fragment Practice合同会社（Fragment Practice LLC）の会社概要と基本方針です。
          高松から世界へ。小さな実装と観察を重ね、確かな再現性を積層していきます。
        </p>
      </section>

      {/* 概要テーブル */}
      <section className="section" aria-labelledby="overview">
        <h2 id="overview" className="h2" style={{ marginBottom: 12 }}>会社概要</h2>
        <table className="orgtable">
          <tbody>
            <tr>
              <th className="orgkey" scope="row">商号</th>
              <td className="orgval">Fragment Practice合同会社</td>
            </tr>
            <tr>
              <th className="orgkey" scope="row">代表</th>
              <td className="orgval">新庄 泰大</td>
            </tr>
            <tr>
              <th className="orgkey" scope="row">所在地</th>
              <td className="orgval">
                <address className="addr">
                  〒760-0018<br />
                  香川県高松市天神前10番5号<br />
                  高松セントラルスカイビルディング 3F south
                </address>
                <div className="chips" aria-label="地図リンク">
                  <a
                    className="chip"
                    href={`https://maps.apple.com/?q=${q}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple&nbsp;Maps
                  </a>
                  <a
                    className="chip"
                    href={`https://www.google.com/maps/search/?api=1&query=${q}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&nbsp;Maps
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th className="orgkey" scope="row">電話</th>
              <td className="orgval"><a href="tel:+81878103037">087-810-3037</a></td>
            </tr>
            <tr>
              <th className="orgkey" scope="row">設立</th>
              <td className="orgval">2025年8月12日</td>
            </tr>
            <tr>
              <th className="orgkey" scope="row">法人番号</th>
              <td className="orgval">7470003002956</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}