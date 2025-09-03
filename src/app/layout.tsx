// src/app/layout.tsx
import './globals.css'; // ←これがないとCSSが一切適用されません
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fragment Practice合同会社',
  description:
    'AIとの対話を通じて、生活と構文を再設計する実践。Fragments, ZINEs, and a layered syntax for living.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}