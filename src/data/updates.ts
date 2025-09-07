export interface Update {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const updates: Update[] = [
  {
    slug: "site-launch-2025-09",
    title: "公式サイトを公開しました",
    date: "2025-09-05",
    description: "法人設立に伴い公式サイトを静かに公開しました。",
  },
  {
    slug: "soft-launch-2025-08",
    title: "Fragment Practice 合同会社を設立しました",
    date: "2025-08-12",
    description: "Fragment Practice 合同会社を設立しました。",
  },
];

export const updatesSorted = [...updates].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// 型チェック用: updates が Update[] であることを保証
const _typeCheck: Update[] = updates;