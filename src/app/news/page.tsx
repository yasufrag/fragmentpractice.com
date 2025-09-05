// app/news/page.tsx
import Link from "next/link";
import { updatesSorted } from "@/data/updates";

export const metadata = { title: "News / Updates" };

export default function NewsIndexPage() {
  return (
    <div className="container">
      <section className="section" aria-labelledby="news">
        <h1 id="news" className="h2">News / Updates</h1>

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
                padding: "14px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {/* 日付 */}
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

              {/* タイトル */}
              <Link
                href={`/news/${u.slug}`}
                style={{
                  fontWeight: 600,
                  color: "var(--fg)",
                  textDecoration: "none",
                  fontSize: 18,
                  lineHeight: 1.5,
                }}
              >
                {u.title}
              </Link>

              {/* description */}
              <p
                style={{
                  margin: "6px 0 0",
                  color: "var(--muted)",
                  fontSize: 15,
                }}
              >
                {u.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}