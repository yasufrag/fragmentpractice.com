// /components/NewsBar.tsx
import { updatesSorted } from "@/data/updates";

export default function NewsBar() {
  const items = updatesSorted.slice(0, 3);

  return (
    <div className="newsbar">
      <div className="container">
        <ul>
          {items.map((u, i) => (
            <li key={u.slug} title={u.title}>
              <strong>{u.date.replaceAll("-", "/")}</strong>
              <span>・</span>
              <a href={`/news/${u.slug}`} aria-label={`${u.title} の詳細へ`} className="title">
                {u.title}
              </a>
            </li>
          ))}
          <li className="more"><a href="/news">More →</a></li>
        </ul>
      </div>
    </div>
  );
}