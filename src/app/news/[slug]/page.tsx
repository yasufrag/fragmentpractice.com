// src/app/news/[slug]/page.tsx (News Detail – 改良版)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { updates } from "@/data/updates";

/** ルートパラメータ */
interface Params {
  slug: string;
}

/** SSG: 動的パスを事前生成 */
export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

/** SEO: メタデータ */
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const u = updates.find((x) => x.slug === slug);
  if (!u) {
    return { title: "News" };
  }
  return {
    title: u.title,
    description: u.description,
    openGraph: {
      title: u.title,
      description: u.description,
      url: `https://fragmentpractice.com/news/${u.slug}`,
      type: "article",
    },
  };
}

/** ページ本体 */
export default async function NewsDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const u = updates.find((x) => x.slug === slug);
  if (!u) notFound();

  return (
    <article
      className="fp-container fp-section"
      style={{ maxWidth: 840, paddingTop: 64, paddingBottom: 64 }}
    >
      <header style={{ marginBottom: 32 }}>
        <h1 className="h2" style={{ marginBottom: 8 }}>{u.title}</h1>
        <p className="muted" aria-label="date">
          {new Date(u.date).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </header>

      <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
        {u.description}
      </p>

      {/* 戻るリンクをトップのContactと同じボタンデザインに */}
      <nav className="fp-section" aria-label="戻るナビゲーション" style={{ marginTop: 32 }}>
        <Link
          href="/news"
          className="btn"
          aria-label="ニュース一覧に戻る"
        >
          ニュース一覧に戻る
        </Link>
      </nav>

      {/* 関連ページ誘導 */}
      <section className="fp-section" aria-labelledby="related-h" style={{ marginTop: 56 }}>
        <h2 id="related-h" className="h2" style={{ marginBottom: 16 }}>関連ページ</h2>
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
    </article>
  );
}