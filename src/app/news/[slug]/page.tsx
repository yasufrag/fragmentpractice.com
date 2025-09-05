// /app/news/[slug]/page.tsx
import { updates, type Update } from "@/data/updates";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const u = updates.find((x) => x.slug === params.slug);
  if (!u) return { title: "News" };
  return {
    title: u.title,
    description: u.summary || u.title,
    openGraph: { title: u.title, description: u.summary || u.title },
  };
}

export default function NewsDetailPage({ params }: { params: Params }) {
  const u = updates.find((x) => x.slug === params.slug);
  if (!u) return <div className="container section">Not found.</div>;

  // JSON-LD（登壇は Event / お知らせは NewsArticle）
  const jsonLd =
    u.kind === "talk"
      ? {
          "@context": "https://schema.org",
          "@type": "Event",
          name: u.title,
          startDate: u.date,
          eventAttendanceMode: u.online ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: u.status === "upcoming" ? "https://schema.org/EventScheduled" : "https://schema.org/EventCompleted",
          location: u.online
            ? { "@type": "VirtualLocation", url: u.url || "https://fragmentpractice.com" }
            : {
                "@type": "Place",
                name: u.venue || "",
                address: u.city || "Kagawa, Japan",
              },
          organizer: {
            "@type": "Organization",
            name: "Fragment Practice LLC",
            url: "https://fragmentpractice.com",
          },
          url: `https://fragmentpractice.com/news/${u.slug}`,
          description: u.summary || u.title,
        }
      : {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: u.title,
          datePublished: u.date,
          description: u.summary || u.title,
          mainEntityOfPage: `https://fragmentpractice.com/news/${u.slug}`,
          publisher: {
            "@type": "Organization",
            name: "Fragment Practice LLC",
          },
        };

  return (
    <div className="container">
      <section className="section" aria-labelledby="headline">
        <h1 id="headline" className="h2" style={{ marginBottom: 6 }}>{u.title}</h1>
        <div style={{ color: "var(--muted)", marginBottom: 12, fontSize: 14 }}>
          <time dateTime={u.date}>{u.date.replaceAll("-", "/")}</time>
          <span style={{ margin: "0 8px" }}>·</span>
          {u.kind === "talk" ? "登壇" : "お知らせ"}
          {u.status === "upcoming" && <span className="badge badge-upcoming" style={{ marginLeft: 8 }}>予定</span>}
        </div>

        {u.summary && <p style={{ maxWidth: 720, color: "var(--fg)" }}>{u.summary}</p>}

        {/* 任意：外部リンクや会場情報 */}
        <ul style={{ marginTop: 12, paddingLeft: 18, maxWidth: 720 }}>
          {u.venue && <li>会場：{u.venue}</li>}
          {u.city && <li>所在地：{u.city}</li>}
          {u.online && <li>配信：オンライン</li>}
          {u.url && (
            <li>
              公式情報：<a href={u.url} target="_blank" rel="noopener noreferrer">{u.url}</a>
            </li>
          )}
        </ul>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
    </div>
  );
}