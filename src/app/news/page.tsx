// /app/news/page.tsx
import { updatesSorted } from "@/data/updates";

export const metadata = { title: "News / Updates" };

export default function NewsIndexPage() {
  return (
    <div className="container">
      <section className="section" aria-labelledby="news">
        <h1 id="news" className="h2">News / Updates</h1>
        <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: "none", maxWidth: 840 }}>
          {updatesSorted.map((u) => (
            <li key={u.slug} style={{ padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>
                <time dateTime={u.date}>{u.date.replaceAll("-", "/")}</time>
                <span style={{ margin: "0 8px" }}>·</span>
                {u.kind === "talk" ? "登壇" : "お知らせ"}
                {u.status === "upcoming" && <span className="badge badge-upcoming" style={{ marginLeft: 8 }}>予定</span>}
              </div>
              <a href={`/news/${u.slug}`} style={{ fontWeight: 700, color: "var(--fg)", textDecoration: "none" }}>
                {u.title}
              </a>
              {u.summary && <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>{u.summary}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}