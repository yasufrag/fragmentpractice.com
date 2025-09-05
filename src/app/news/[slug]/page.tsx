// /app/news/[slug]/page.tsx
import { updates } from "@/data/updates";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

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
    description: u.summary || u.title,
    openGraph: { title: u.title, description: u.summary || u.title },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const u = updates.find((x) => x.slug === slug);

  if (!u) return <div className="container section">Not found.</div>;

  return (
    <div className="container">
      <section className="section" aria-labelledby="headline">
        <h1 id="headline" className="h2">{u.title}</h1>
        <p>{u.summary}</p>
      </section>
    </div>
  );
}