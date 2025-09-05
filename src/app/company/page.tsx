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

      {/* 提供領域（現段階の公開粒度） */}
      <section className="section" aria-labelledby="domains">
        <h2 id="domains" className="h2" style={{ marginBottom: 12 }}>提供領域（現段階）</h2>
        <div className="grid">
          <div className="card">
            <div className="title">対話構造の設計（AI × Syntax）</div>
            <p className="meta">小実装／軽量評価／安全設計</p>
            <ul className="list-check">
              <li>対話遷移・記録・評価観点の設計</li>
              <li>2–3案のプロトタイピングと観察</li>
              <li>機微情報を前提にしたノーリスク運用</li>
            </ul>
          </div>
          <div className="card">
            <div className="title">編集と出版（ZINE / Docs）</div>
            <p className="meta">断片編集／ナレッジ整流</p>
            <ul className="list-check">
              <li>断片ログの編集方針・構成設計</li>
              <li>読ませる仕様（可読性・追跡性）</li>
              <li>ZINEの段階的公開（Coming Soon）</li>
            </ul>
          </div>
          <div className="card">
            <div className="title">登壇・公開対話の設計</div>
            <p className="meta">専門家版／一般版の差分</p>
            <ul className="list-check">
              <li>論点マップの共通化</li>
              <li>技術寄り／物語寄りの切替</li>
              <li>公開ポリシーの事前設計</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 方針（ミッション／安全／公開） */}
      <section className="section" aria-labelledby="policy">
        <h2 id="policy" className="h2" style={{ marginBottom: 12 }}>基本方針</h2>
        <div style={{ maxWidth: 840 }}>
          <h3 className="h3" style={{ marginBottom: 6 }}>Mission</h3>
          <p style={{ marginBottom: 14 }}>
            技術を目的化せず、<strong>「注意・関係・編集」</strong>を支える
            <strong>象徴的インフラ</strong>として設計・実装・運用します。
            CS/セキュリティの厳密さと詩的実践の柔らかさを同じ器で扱います。
          </p>

          <h3 className="h3" style={{ marginBottom: 6 }}>Safety & Publication</h3>
          <ul className="list-check" style={{ marginBottom: 14 }}>
            <li>個人情報・機微情報の扱いは最小化し、段階的公開を原則とします。</li>
            <li>登壇・資料公開はケースごとに審査し、必要に応じて限定配布を選択します。</li>
            <li>サイト内の一部ページは <code>noindex</code> を適用し、関係者のみに共有します。</li>
          </ul>

          <h3 className="h3" style={{ marginBottom: 6 }}>Process（短縮）</h3>
          <ol className="list-steps">
            <li><strong>Intake：</strong>目的・制約・安全域・公開範囲の仮説共有</li>
            <li><strong>Sketch：</strong>比較軸の設定と2–3案への圧縮</li>
            <li><strong>Prototype：</strong>小実装／小編集で事実取得</li>
            <li><strong>Observe：</strong>短い観察→補正で再現性を積層</li>
            <li><strong>Decide：</strong>維持／拡張／撤退の軽い判断</li>
          </ol>
        </div>
      </section>

      {/* 連絡先・法務 */}
      <section className="section" aria-labelledby="contact">
        <h2 id="contact" className="h2" style={{ marginBottom: 12 }}>連絡先・法務</h2>
        <div className="grid">
          <div className="card">
            <div className="title">Contact</div>
            <p className="meta">通常のご連絡</p>
            <p>
              お問い合わせは <Link href="/contact">Contact</Link> から。
              テーマ／目的／公開範囲（社内限定・一般公開）の明記をお願いします。
            </p>
          </div>
          <div className="card">
            <div className="title">Legal</div>
            <p className="meta">利用規約・プライバシー</p>
            <p>
              <Link href="/terms">利用規約</Link> ・ <Link href="/privacy">プライバシーポリシー</Link>
              <br />
              NDA／業務委託契約は個別に締結します（テンプレートあり／専門家レビュー通過予定）。
            </p>
          </div>
          <div className="card">
            <div className="title">Publication</div>
            <p className="meta">段階的公開</p>
            <p>
              ZINE は登壇以降の段階的公開を予定。内部資料・実験結果は必要に応じて限定配布します。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}