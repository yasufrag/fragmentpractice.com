// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Fragment Practice — Company",
  description: "Fragment Practice合同会社 公式サイト",
  metadataBase: new URL("https://fragmentpractice.com"),
  openGraph: {
    title: "Fragment Practice — Company",
    description: "共創・実験・編集のためのスタジオ",
    url: "https://fragmentpractice.com",
    siteName: "Fragment Practice",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Fragment Practice" }],
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fragment Practice — Company",
    description: "共創・実験・編集のためのスタジオ",
    images: ["/og.jpg"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="ja">
      <body>
        <a href="#main" className="skip-link">本文へスキップ</a>

        {/* 置き換え：Headerコンポーネント */}
        <Header />

        <main id="main" role="main">
          {children}
        </main>

        {/* フッター（既存のまま） */}
        <footer className="site-footer" role="contentinfo">
          {/* ...既存... */}
          <div className="container footergrid">
            {/* ...既存... */}
            <div className="footercol" aria-label="著作権情報">
              <h4>© {year} Fragment Practice</h4>
              <div className="muted">All rights reserved.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}