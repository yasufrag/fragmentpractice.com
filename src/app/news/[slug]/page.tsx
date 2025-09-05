// src/app/news/[slug]/page.tsx
import { updates } from "@/data/updates";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { slug: string };

// --- SEO metadata ---
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const u = updates.find((x) => x.slug === slug);
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

// --- Page ---
export default async function NewsDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const u = updates.find((x) => x.slug === slug);
  if (!u) return notFound();

  const formattedDate = new Date(u.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container">
      <section className="section" style={{ maxWidth: 720 }}>
        <h1 className="h1" style={{ marginBottom: 12 }}>{u.title}</h1>
        <p className="text-sm text-neutral-500" style={{ marginBottom: 24 }}>
          {formattedDate}
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.7 }}>{u.description}</p>
      </section>
    </div>
  );
}