// /components/NewsBar.tsx
import { updatesSorted } from "@/data/updates";

export default function NewsBar() {
  const items = updatesSorted.slice(0, 3);

  return (
    <div className="newsbar">
      <div className="container">
        <ul>
          {items.map((u) => (
            <li key={u.slug} title={u.title}>
              <strong>{u.date.replaceAll("-", "/")}</strong>
              <span aria-label={u.kind === "talk" ? "登壇" : "お知らせ"}>
                {u.kind === "talk" ? "登壇" : "お知らせ"}
              </span>
              <span style={{ margin: "0 6px" }}>·</span>
              <a href={`/news/${u.slug}`} aria-label={`${u.title} の詳細へ`}>
                {u.title}
              </a>
              {u.status === "upcoming" && (
                <span className="badge badge-upcoming">予定</span>
              )}
            </li>
          ))}
          <li className="more"><a href="/news">More →</a></li>
        </ul>
      </div>
    </div>
  );
}