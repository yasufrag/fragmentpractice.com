// app/page.tsx
import NewsBar from "@/components/NewsBar";

export const metadata = {
  title: "Fragment Practice — Home",
  description:
    "AI・言語・編集を横断し、注意・関係・編集を支える静かな仕組みを設計します。高松から、実務と研究を往復させながら検証していきます。",
};

export default function HomePage() {
  return (
    <>
      {/* News（最大3件・静かに） */}
      <NewsBar />

      <div className="container">
        {/* Hero */}
        <section className="hero" style={{ textAlign: "left" }}>
          <h1 className="h1" style={{ marginTop: 16, maxWidth: 860 }}>
            Quiet systems for<br />
            attention, relation, and editing.
          </h1>
          <p className="lead" style={{ marginTop: 14, maxWidth: 760 }}>
            Fragment Practice は、AI・言語・編集を横断して
            「注意・関係・編集」を支える仕組みを設計します。
            高松から、実務と研究を往復させながら静かに検証していきます。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <a className="cta primary" href="/work">View Work</a>
            <a className="cta" href="/contact">Contact</a>
          </div>
        </section>

        {/* 私たちが大切にすること（3点だけ） */}
        <section className="section" aria-labelledby="values">
          <h2 id="values" className="h2" style={{ marginBottom: 12 }}>
            私たちが大切にすること
          </h2>

          <div className="grid">
            <div className="card" style={{ gridColumn: "span 4" }}>
              <div className="title">注意</div>
              <p className="meta">Quiet Attention</p>
              <p style={{ marginTop: 6 }}>
                情報を足す前に、まずノイズを減らす。観察・記録・間合いを
                乱さないための最小フローを設計します。
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 4" }}>
              <div className="title">関係</div>
              <p className="meta">Relational Syntax</p>
              <p style={{ marginTop: 6 }}>
                対話の構文（前提・タグ・応答）を整え、実務と表現の双方で
                再現可能なやり取りをつくります。
              </p>
            </div>

            <div className="card" style={{ gridColumn: "span 4" }}>
              <div className="title">編集</div>
              <p className="meta">Editing as Practice</p>
              <p style={{ marginTop: 6 }}>
                断片を集めて編む。メモ、試作、ZINE 等の軽い成果物に落とし、
                検証と共有をくり返します。
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}