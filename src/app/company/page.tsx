// app/company/page.tsx
export const metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Company</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice合同会社（Fragment Practice LLC）の会社概要と基本情報です。
        </p>
      </section>

      {/* 会社概要 */}
      <section className="section" aria-labelledby="overview">
        <h2 id="overview" className="h2" style={{ marginBottom: 12 }}>会社概要</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderTop: "1px solid var(--line)",
            borderLeft: "1px solid var(--line)",
            borderRight: "1px solid var(--line)",
            overflow: "hidden",
            borderRadius: "var(--radius)",
          }}
        >
          <tbody>
            {[
              ["代表者", "新庄 泰大"],
              [
                "所在地",
                <>
                  〒760-0018 香川県高松市天神前10番5号
                  <br />
                  高松セントラルスカイビルディング 3F south
                  <br />
                  <a
                    href="https://maps.apple.com/?q=高松セントラルスカイビルディング"
                    target="_blank"
                    rel="noreferrer"
                    className="cta"
                    style={{ marginRight: 8 }}
                  >
                    Apple Maps
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=高松セントラルスカイビルディング"
                    target="_blank"
                    rel="noreferrer"
                    className="cta"
                  >
                    Google Maps
                  </a>
                </>,
              ],
              ["設立", "2025年8月12日"],
              ["電話番号", <a key="tel" href="tel:+81878103037">087-810-3037</a>],
              ["法人番号", "7470003002956"],
            ].map(([k, v]) => (
              <tr key={k as string}>
                <th
                  scope="row"
                  style={{
                    textAlign: "left",
                    padding: "12px 10px",
                    borderBottom: "1px solid var(--line)",
                    width: "200px",
                    color: "var(--muted)",
                    background: "rgba(0,0,0,0.02)",
                  }}
                >
                  {k}
                </th>
                <td style={{ padding: "12px 10px", borderBottom: "1px solid var(--line)" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 提供領域 */}
      <section className="section" aria-labelledby="domains">
        <h2 id="domains" className="h2" style={{ marginBottom: 12 }}>提供領域</h2>
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          <li>登壇・講演／公開対話の設計</li>
          <li>ZINE・出版（写真／言葉／対話の編集）</li>
          <li>AI対話設計・軽量リサーチ（関係性設計・プロトタイピング）</li>
        </ul>
      </section>

      {/* ミッション / スタンス */}
      <section className="section" aria-labelledby="mission">
        <h2 id="mission" className="h2" style={{ marginBottom: 12 }}>思想と姿勢（Brief）</h2>
        <p style={{ color: "var(--muted)", maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice は「静けさ」と「構文性」を核に、<em>Quantum / Fragment / Syntax</em> の三層で
          生活と実務を編み直す実践です。  
          生産性ではなく「注意・関係・編集」を扱い、対話・記述・設計をひと続きの編集としてとらえます。
        </p>
        <p className="lead">
          ご相談は <a className="cta" href="/contact">Contact</a> へ。
        </p>
      </section>
    </div>
  );
}