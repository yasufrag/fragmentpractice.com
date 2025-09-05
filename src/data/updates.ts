// /data/updates.ts
export type Update = {
  slug: string;                 // 個別ページ用
  date: string;                 // ISO: "2025-10-12"
  title: string;
  kind: "talk" | "news";        // 登壇 or お知らせ
  status?: "upcoming" | "past"; // 表示バッジ用
  venue?: string;               // 任意
  city?: string;                // 任意
  online?: boolean;             // 任意
  url?: string;                 // 外部カンファURLなど任意
  summary?: string;             // 一覧/個別の冒頭に使える任意
};

export const updates: Update[] = [
  {
    slug: "site-launch-2025-09",
    date: "2025-09-05",
    title: "公式サイトを公開しました",
    kind: "news",
    status: "past",
    summary: "法人設立に伴い公式サイトを静かに公開しました。",
  },
  {
    slug: "soft-launch-2025-08",
    date: "2025-08-12",
    title: "Fragment Practice 合同会社を設立しました",
    kind: "news",
    status: "past",
  },
];

// 日付降順（新しい→古い）
export const updatesSorted = [...updates].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);