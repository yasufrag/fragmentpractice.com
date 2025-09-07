// src/app/news/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { updates } from "@/data/updates";

/** ルートパラメータ */
interface Params {
  slug: string;
}

/** SSG: 動的パスを事前生成 */
export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

/** SEO: メタデータ（Next 15: params は Promise で受け取れる） */
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
    },
  };
}

/** ページ本体（Next 15: params を Promise で受け取る） */
export default async function NewsDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const u = updates.find((x) => x.slug === slug);
  if (!u) notFound();

  return (
    <article className="container section" style={{ maxWidth: 840 }}>
      <header style={{ marginBottom: 16 }}>
        <h1 className="h2" style={{ marginBottom: 6 }}>{u.title}</h1>
        <p className="muted" aria-label="date">
          {new Date(u.date).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </header>

      <p style={{ fontSize: 18, lineHeight: 1.8 }}>
        {u.description}
      </p>
    </article>
  );
}