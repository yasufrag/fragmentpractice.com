// /data/updates.ts
export type Update = {
  slug: string;
  title: string;
  date: string;        // ISO (e.g., "2025-09-05")
  description: string; // ★ 必須
};

export const updates: Update[] = [
  {
    slug: "site-launch-2025-09",
    date: "2025-09-05",
    title: "公式サイトを公開しました",
    summary: "法人設立に伴い公式サイトを静かに公開しました。",
  },
  {
    slug: "soft-launch-2025-08",
    date: "2025-08-12",
    title: "Fragment Practice 合同会社を設立しました",
    status: "past",
  },
];

export const updatesSorted = [...updates].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const _typeCheck: Update[] = updates;