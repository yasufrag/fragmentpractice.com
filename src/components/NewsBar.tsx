import Link from "next/link";
import { updatesSorted } from "@/data/updates";

export default function NewsBar() {
  const items = updatesSorted.slice(0, 3);

  return (
    <div className="newsbar">
      <div className="container">
        <ul>
          {items.map((u) => (
            <li key={u.slug}>
              <strong>{u.date.replaceAll("-", "/")}</strong>
              <span>・</span>
              <Link
                href={`/news/${u.slug}`}
                aria-label={`${u.title} の詳細ページへ`}
                className="title"
              >
                {u.title}
              </Link>
            </li>
          ))}
          <li className="more">
            <Link href="/news">More</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}