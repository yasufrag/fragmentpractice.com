import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fragment Practice合同会社",
  description:
    "AIとの対話を通じて、生活と構文を再設計する実践。Fragments, ZINEs, and a layered syntax for living.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://fragmentpractice.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased tracking-wide leading-relaxed">{children}</body>
    </html>
  );
}