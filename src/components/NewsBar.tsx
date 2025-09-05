// components/NewsBar.tsx
import Link from "next/link";
import { updatesSorted } from "@/data/updates";

export default function NewsBar() {
  // 最新3件を取得
  const items = updatesSorted.slice(0, 3);

  return (
    <div className="newsbar" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
            padding: "8px 0",
            margin: 0,
            listStyle: "none",
            fontSize: 14,
          }}
        >
          {items.map((u) => (
            <li key={u.slug} style={{ display: "flex", gap: "6px" }}>
              <time
                dateTime={u.date}
                style={{ color: "var(--muted)", whiteSpace: "nowrap" }}
              >
                {new Date(u.date).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span style={{ margin: "0 4px" }}>·</span>
              <Link
                href={`/news/${u.slug}`}
                style={{ color: "var(--fg)", fontWeight: 500 }}
              >
                {u.title}
              </Link>
            </li>
          ))}
          {/* 一覧ページへのリンク */}
          <li className="more" style={{ marginLeft: "auto" }}>
            <Link href="/news" style={{ color: "var(--accent)" }}>
              More →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}