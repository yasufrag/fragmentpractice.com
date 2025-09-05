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

        <Header />

        <main id="main" role="main">
          {children}
        </main>

        {/* フッター */}
        <footer className="site-footer" role="contentinfo">
          <div className="container footerbar" aria-label="著作権と法的リンク">
            <div className="copy">© {year} Fragment Practice</div>

            <nav className="legal" aria-label="法的リンク">
              <a href="/terms">利用規約</a>
              <span aria-hidden>・</span>
              <a href="/privacy">プライバシーポリシー</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}