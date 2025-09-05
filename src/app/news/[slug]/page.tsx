// src/app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { updates } from "@/data/updates";

type Params = { slug: string };

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const u = updates.find((x) => x.slug === params.slug);
  if (!u) return { title: "News" };
  return {
    title: u.title,
    description: u.description,
    openGraph: {
      title: u.title,
      description: u.description,
    },
  };
}

export default function NewsDetailPage({ params }: { params: Params }) {
  const u = updates.find((x) => x.slug === params.slug);
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
      <p style={{ fontSize: 18, lineHeight: 1.8 }}>{u.description}</p>
    </article>
  );
}