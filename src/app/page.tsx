// app/page.tsx (Home – spacing tuned & copy refined)
import Link from "next/link";
import NewsBar from "@/components/NewsBar";

export const metadata = {
  title: "Fragment Practice — Home",
  description:
    "AI・言語・編集を横断し、「注意・関係・編集」を支える静かな仕組みを設計します。高松から、実務と研究を往復させながら検証を続けます。",
  openGraph: {
    title: "Fragment Practice — Home",
    description:
      "AI・言語・編集を横断し、『注意・関係・編集』を支える静かな仕組みを設計します。",
    url: "https://fragmentpractice.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* News（最大3件・静かに） */}
      <NewsBar />

      <div className="fp-container">
        {/* Hero */}
        <section className="hero" style={{ textAlign: "left", paddingTop: 48, paddingBottom: 56 }}>
          <h1 className="h1" style={{ marginTop: 16, maxWidth: 860 }}>
            Quiet systems for
            <br />
            attention, relation, and editing.
          </h1>
          <p className="lead" style={{ marginTop: 14, maxWidth: 760 }}>
            Fragment Practice は、AI・言語・編集を横断して
            「注意・関係・編集」を支える静かな仕組みを設計します。
            高松から、実務と研究を往復させながら丁寧に検証を進めていきます。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <Link className="cta primary" href="/work" aria-label="Work ページへ">
              View Work
            </Link>
            <Link className="cta" href="/contact" aria-label="お問い合わせへ">
              Contact
            </Link>
          </div>
        </section>

        {/* 私たちが大切にすること */}
        <section
          className="fp-section"
          aria-labelledby="values"
          style={{ paddingTop: 64, paddingBottom: 56 }} // ← 上下をそろえて余白を拡張
        >
          <h2 id="values" className="h2" style={{ marginBottom: 12 }}>
            私たちが大切にすること
          </h2>
          <p className="lead" style={{ marginTop: 6, maxWidth: 760 }}>
            ノイズを減らし、関係の構文を整え、断片を編む。小さく検証しながら、
            再現可能な知を積層します。
          </p>

          <div className="grid" style={{ marginTop: 16 }}>
            <article className="card" style={{ gridColumn: "span 4" }}>
              <div className="title">注意</div>
              <p className="meta">Quiet Attention</p>
              <p style={{ marginTop: 6 }}>
                情報を足す前に、まず余白をつくる。観察・記録・間合いを守る
                最小フローを設計します。
              </p>
            </article>

            <article className="card" style={{ gridColumn: "span 4" }}>
              <div className="title">関係</div>
              <p className="meta">Relational Syntax</p>
              <p style={{ marginTop: 6 }}>
                前提・タグ・応答を揃え、実務と表現の双方で再現可能な
                やり取りを設計します。
              </p>
            </article>

            <article className="card" style={{ gridColumn: "span 4" }}>
              <div className="title">編集</div>
              <p className="meta">Editing as Practice</p>
              <p style={{ marginTop: 6 }}>
                断片を集めて編み、小さな成果物へ落とす。ZINEやメモの形で
                検証と共有を重ねます。
              </p>
            </article>
          </div>
        </section>

        {/* Explore: サイト内主要ページへの導線（静かに） */}
        <section
          className="fp-section"
          aria-labelledby="explore"
          style={{ paddingTop: 56, paddingBottom: 72 }}
        >
          <h2 id="explore" className="h2" style={{ marginBottom: 16 }}>Explore</h2>
          <div className="linkcards">
            <Link className="linkcard" href="/company">
              <h3 className="h3">Company</h3>
              <p>会社概要・公的情報</p>
            </Link>
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
            <Link className="linkcard" href="/zine">
              <h3 className="h3">ZINE</h3>
              <p>断片編集・小さな出版</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}