// src/app/news/[slug]/page.tsx
import { updates } from "@/data/updates"
import { Metadata } from "next"

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params
  const u = updates.find((x) => x.slug === slug)
  if (!u) return { title: "News" }

  return {
    title: u.title,
    description: u.description,
    openGraph: {
      title: u.title,
      description: u.description,
    },
  }
}

export default function NewsDetailPage({ params }: { params: Params }) {
  const u = updates.find((x) => x.slug === params.slug)
  if (!u) return <div>Not Found</div>

  // 日付を整形（例: 2025年9月5日）
  const formattedDate = new Date(u.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container">
      <section className="section" style={{ maxWidth: 720 }}>
        <h1 className="h1" style={{ marginBottom: 12 }}>
          {u.title}
        </h1>
        <p className="text-sm text-neutral-500" style={{ marginBottom: 24 }}>
          {formattedDate}
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.7 }}>{u.description}</p>
      </section>
    </div>
  )
}