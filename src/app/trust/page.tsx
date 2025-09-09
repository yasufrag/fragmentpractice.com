// app/trust/page.tsx
export const metadata = {
  title: "Trust",
  description:
    "Fragment Practice合同会社の信頼とセキュリティ運用。セキュリティ、運用体制、契約フロー、守秘・データ取扱い、インシデント対応、BCP（事業継続）を簡潔に明記します。",
  openGraph: {
    title: "Fragment Practice — Trust",
    description:
      "セキュリティ、運用体制、契約フロー、守秘・データ取扱い、インシデント対応、BCP（事業継続）の方針。",
    url: "https://fragmentpractice.com/trust",
    type: "article",
  },
};

export default function TrustPage() {
  return (
    <div className="fp-container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Trust</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          本ページは、Fragment Practice合同会社の「信頼」に関する基本方針をまとめたものです。
          セキュリティ、運用体制、契約フロー、守秘・データ取扱い、インシデント対応、BCP（事業継続）について簡潔に記載します。
        </p>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>
          最終更新：2025-09-09（ドラフト）
        </p>
      </section>

      {/* Quick nav */}
      <nav aria-label="Quick links" className="fp-section" style={{ paddingTop: 0 }}>
        <ul className="chips" style={{ flexWrap: "wrap" }}>
          <li><a className="chip" href="#security">Security</a></li>
          <li><a className="chip" href="#operations">Operations</a></li>
          <li><a className="chip" href="#contract">Contract</a></li>
          <li><a className="chip" href="#confidentiality">Confidentiality</a></li>
          <li><a className="chip" href="#incident">Incident</a></li>
          <li><a className="chip" href="#bcp">BCP</a></li>
          <li><a className="chip" href="#faq">FAQ</a></li>
          <li><a className="chip" href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Security */}
      <section className="fp-section" id="security" aria-labelledby="security-h">
        <h2 id="security-h" className="h2" style={{ marginBottom: 12 }}>Security — 技術・物理の基本運用</h2>
        <ul style={{ maxWidth: 840, paddingLeft: 18 }}>
          <li><strong>多要素認証（2FA）</strong>：Google Workspace等の主要アカウントで2FAを必須化。</li>
          <li><strong>メールドメイン保護</strong>：DMARCを設定済。なりすまし対策を実施。</li>
          <li><strong>権限管理</strong>：最小権限の原則（Least Privilege）に基づき、共有範囲を案件単位で限定。</li>
          <li><strong>暗号化</strong>：端末のフルディスク暗号化、クラウド側の暗号化（各サービスの標準機能）を利用。</li>
          <li><strong>物理保護</strong>：重要書類・記録媒体は<em>耐火金庫</em>にて保管。バックアップは分離保管。</li>
          <li><strong>監査可能性</strong>：業務記録・ドキュメントは版管理し、変更履歴を保持。</li>
        </ul>
      </section>

      {/* Operations */}
      <section className="fp-section" id="operations" aria-labelledby="operations-h">
        <h2 id="operations-h" className="h2" style={{ marginBottom: 12 }}>Operations — 運用体制</h2>
        <ul style={{ maxWidth: 840, paddingLeft: 18 }}>
          <li><strong>会計・記録</strong>：freee を用い、適正記録・証跡を維持。</li>
          <li><strong>契約・合意</strong>：DocuSign による電子締結に対応（紙面も可）。</li>
          <li><strong>公開範囲の設計</strong>：Public / Private を事前に定義し、公開用資料と守秘資料を分離。</li>
          <li><strong>バックアップ</strong>：主要成果物はクラウド多重保存＋オフライン控えを併用。</li>
          <li><strong>レビュー</strong>：月次で方針・運用を見直し、必要に応じて更新。</li>
        </ul>
      </section>

      {/* Contract */}
      <section className="fp-section" id="contract" aria-labelledby="contract-h">
        <h2 id="contract-h" className="h2" style={{ marginBottom: 12 }}>Contract — 契約フロー</h2>
        <ol style={{ maxWidth: 840, paddingLeft: 18 }}>
          <li><strong>NDA（必要に応じて）</strong>：相互守秘の合意を締結。</li>
          <li><strong>要件定義</strong>：目的・制約・公開可否・成果物・期間・対価を整理。</li>
          <li><strong>契約締結</strong>：DocuSign で電子締結（書面も対応）。</li>
          <li><strong>実施・検収</strong>：合意範囲に基づき実施し、成果物の検収を行う。</li>
          <li><strong>振り返り</strong>：公開可否に応じた実績の扱いを確認し、継続の有無を検討。</li>
        </ol>
      </section>

      {/* Confidentiality & Data Handling */}
      <section className="fp-section" id="confidentiality" aria-labelledby="conf-h">
        <h2 id="conf-h" className="h2" style={{ marginBottom: 12 }}>Confidentiality — 守秘・データ取扱い</h2>
        <ul style={{ maxWidth: 840, paddingLeft: 18 }}>
          <li>委託元の情報は契約・NDAに基づき厳重に取り扱い、業務目的以外には利用しません。</li>
          <li>データは案件ごとに分離し、最小限の権限でアクセスを管理します。</li>
          <li>公開可能な内容は事前に双方で確認し、匿名化・集計化等を優先します。</li>
          <li>詳細は <a href="/privacy">Privacy Policy</a> をご参照ください。</li>
        </ul>
      </section>

      {/* Incident Response */}
      <section className="fp-section" id="incident" aria-labelledby="incident-h">
        <h2 id="incident-h" className="h2" style={{ marginBottom: 12 }}>Incident — インシデント対応</h2>
        <ul style={{ maxWidth: 840, paddingLeft: 18 }}>
          <li>疑いを検知した時点で直ちに関係者へ連絡し、影響範囲を特定。</li>
          <li>一次封じ込め（アカウント停止・鍵の更新・該当システム隔離）を実施。</li>
          <li>影響評価と再発防止策（運用ルール・技術設定の見直し）を共有。</li>
          <li>必要に応じて外部専門家と連携します。</li>
        </ul>
      </section>

      {/* BCP */}
      <section className="fp-section" id="bcp" aria-labelledby="bcp-h">
        <h2 id="bcp-h" className="h2" style={{ marginBottom: 12 }}>BCP — 事業継続</h2>
        <ul style={{ maxWidth: 840, paddingLeft: 18 }}>
          <li>主要業務はクラウドベースで運用し、物理障害時の継続性を確保。</li>
          <li>重要書類・媒体は耐火金庫に保管し、必要最低限の紙面控えも保持。</li>
          <li>災害・障害時の連絡手段（電話・メール）を冗長化。</li>
          <li>代替作業手順をドキュメント化（最小機能での継続運用）。</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="fp-section" id="faq" aria-labelledby="faq-h">
        <h2 id="faq-h" className="h2" style={{ marginBottom: 12 }}>FAQ</h2>
        <div className="grid" style={{ marginTop: 8 }}>
          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">実績を公開できますか？</h3>
            <p style={{ marginTop: 8 }}>
              公開可否は案件ごとに合意します。匿名化・集計化・ノーインデックス等の選択肢を用意しています。
            </p>
          </article>
          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">データの保管場所は？</h3>
            <p style={{ marginTop: 8 }}>
              主に国内外の信頼できるクラウドサービスを利用します。必要に応じて物理媒体での分離保管も実施します。
            </p>
          </article>
          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">契約は電子締結に対応していますか？</h3>
            <p style={{ marginTop: 8 }}>
              はい。DocuSign による電子締結に対応しています（紙面対応も可能）。
            </p>
          </article>
          <article className="card" style={{ gridColumn: "span 6" }}>
            <h3 className="title">メディア対応はどこから？</h3>
            <p style={{ marginTop: 8 }}>
              取材のご相談は <a href="/press">Press / Media</a> ページをご覧ください。
            </p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section className="fp-section" id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h" className="h2" style={{ marginBottom: 12 }}>Contact</h2>
        <p style={{ maxWidth: 720, marginBottom: 12 }}>
          本方針に関するご質問や個別要件のご相談は、<a href="/contact">Contact</a> フォームからご連絡ください。
        </p>
        <p style={{ maxWidth: 720, color: "var(--muted)" }}>
          ※ 本ページは情報提供を目的としたもので、法律上の助言ではありません。
        </p>
      </section>

      {/* （任意）構造化データ：Policy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Trust",
            url: "https://fragmentpractice.com/trust",
            about: [
              { "@type": "Thing", name: "Security" },
              { "@type": "Thing", name: "Operations" },
              { "@type": "Thing", name: "Confidentiality" },
              { "@type": "Thing", name: "Incident Response" },
              { "@type": "Thing", name: "Business Continuity" }
            ],
          }),
        }}
      />
    </div>
  );
}