// src/data/updates.ts
export interface Update {
  slug: string;
  title: string;
  date: string;        // ISO (YYYY-MM-DD)
  description: string;
}

export const updates: Update[] = [
  {
    slug: "site-launch-2025-09",
    title: "公式サイトを公開しました",
    date: "2025-09-04",
    description:
      "法人設立にあわせて、Fragment Practice の公式サイトを静かに公開しました。",
  },
  {
    slug: "soft-launch-2025-08",
    title: "Fragment Practice 合同会社を設立しました",
    date: "2025-08-12",
    description:
      "Fragment Practice 合同会社を設立し、本格的な活動をスタートしました。",
  },
];

export const updatesSorted: Update[] = [...updates].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// 型チェック（編集時の保険）
const _typeCheck: Update[] = updates;

// 呼び出し側の互換性を高めるため default も出しておく
export default updates;