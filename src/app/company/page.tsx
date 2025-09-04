export const metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Company</h1>
        <p className="lead" style={{ marginTop: 8 }}>
          商号：Fragment Practice合同会社（Fragment Practice LLC）
        </p>
      </section>

      {/* 基本情報 / 提供領域（2カラム） */}
      <section className="section">
        <div className="grid">
          <article className="card" style={{ gridColumn: "span 6" }}>
            <h2 className="h3" style={{ margin: 0, marginBottom: 8 }}>基本情報</h2>
            <div className="meta">Overview</div>
            <ul style={{ marginTop: 12, paddingLeft: 18 }}>
              <li>代表者：新庄 泰大</li>
              <li>所在地：香川県高松市天神前10番5号 高松セントラルスカイビルディング 3F south</li>
              <li>設立：2025年</li>
              <li>連絡先：TEL 087-810-3037</li>
              <li>法人番号：7470003002956</li>
            </ul>
          </article>

          <article className="card" style={{ gridColumn: "span 6" }}>
            <h2 className="h3" style={{ margin: 0, marginBottom: 8 }}>提供領域</h2>
            <div className="meta">Domains</div>
            <ul style={{ marginTop: 12, paddingLeft: 18 }}>
              <li>登壇・講演／公開対話の設計</li>
              <li>ZINE・出版（写真／言葉／対話の編集）</li>
              <li>AI対話設計・軽量リサーチ（関係性設計・プロトタイピング）</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 思想と姿勢 */}
      <section className="section">
        <h2 className="h2" style={{ marginBottom: 8 }}>思想と姿勢（Brief）</h2>
        <p style={{ color: "var(--muted)", maxWidth: 840 }}>
          Fragment Practice は「静けさ」と「構文性」を核に、Quantum / Fragment / Syntax の三層で
          生活と実務を編み直す実践です。生産性ではなく「注意・関係・編集」を扱います。
        </p>
        <p className="lead" style={{ marginTop: 8 }}>
          お問い合わせは <a className="cta" href="/contact">Contact</a> へ。
        </p>
      </section>
    </div>
  );
}