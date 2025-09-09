// app/news/page.tsx (News Index – 全体修正版)
import Link from "next/link";
import type { Metadata } from "next";
import { updatesSorted } from "@/data/updates";

export const metadata: Metadata = {
  title: "News / Updates",
  description:
    "Fragment Practice のお知らせ一覧。法人の更新情報やリリース、登壇などの近況を掲載します。",
  openGraph: {
    title: "Fragment Practice — News / Updates",
    description:
      "Fragment Practice のお知らせ一覧。法人の更新情報やリリース、登壇などの近況。",
    url: "https://fragmentpractice.com/news",
    type: "website",
  },
};

export default function NewsIndexPage() {
  return (
    <div className="fp-container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left", paddingTop: 32 }}>
        <h1 className="h2" style={{ marginTop: 16 }}>News / Updates</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          法人の更新情報やリリース、登壇などの近況を掲載します。概要が固まっていない段階でも、
          ご相談は <Link className="inline" href="/contact">Contact</Link> からどうぞ。
        </p>
      </section>

      {/* List */}
      <section className="fp-section" aria-labelledby="news-list" style={{ paddingTop: 0 }}>
        <h2 id="news-list" className="h2" style={{ marginBottom: 12 }}>最新のお知らせ</h2>

        {updatesSorted.length === 0 ? (
          <p className="muted" style={{ maxWidth: 720 }}>
            まだお知らせはありません。公開準備が整い次第、こちらに掲載します。
          </p>
        ) : (
          <ul
            style={{
              marginTop: 16,
              paddingLeft: 0,
              listStyle: "none",
              maxWidth: 840,
            }}
          >
            {updatesSorted.map((u) => (
              <li
                key={u.slug}
                style={{
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <Link
                  href={`/news/${u.slug}`}
                  aria-label={`${u.title} の詳細へ`}
                  style={{
                    display: "block",
                    padding: "16px 0",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--muted)",
                      marginBottom: 4,
                    }}
                  >
                    <time dateTime={u.date}>
                      {new Date(u.date).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <div
                    style={{
                      fontWeight: 600,
                      color: "var(--fg)",
                      fontSize: 18,
                      lineHeight: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    {u.title}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {u.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Related */}
      <section className="fp-section" aria-labelledby="related" style={{ marginTop: 56 }}>
        <h2 id="related" className="h2" style={{ marginBottom: 16 }}>関連ページ</h2>
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
        </div>
      </section>

      {/* 構造化データ（ItemList + NewsArticle） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: updatesSorted.map((u, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://fragmentpractice.com/news/${u.slug}`,
              item: {
                "@type": "NewsArticle",
                headline: u.title,
                datePublished: u.date,
                description: u.description,
                mainEntityOfPage: `https://fragmentpractice.com/news/${u.slug}`,
              },
            })),
          }),
        }}
      />
    </div>
  );
}