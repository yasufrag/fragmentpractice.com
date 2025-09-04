// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

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
        {/* Skip link */}
        <a href="#main" className="skip-link">本文へスキップ</a>

        {/* ヘッダー */}
        <header className="site-header" role="banner">
          <div className="container nav">
            <div className="brand">
              <Link
                href="/"
                aria-label="Fragment Practice ホーム"
                className="brand-link"
              >
                <BrandLogo size="header" offset={-3} />
              </Link>
            </div>
            <nav className="navlinks" aria-label="主要ナビゲーション">
              <Link href="/work">Work</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* メイン */}
        <main id="main" role="main">
          {children}
        </main>

        {/* フッター */}
        <footer className="site-footer" role="contentinfo">
          <div className="container footergrid">
            <div className="footercol" aria-label="会社情報">
              <h4>Fragment Practice合同会社</h4>
              <div>
                〒760-0018 香川県高松市天神前10番5号
                <br />
                高松セントラルスカイビルディング 3F south
              </div>
              <div>TEL 087-810-3037</div>
              <div>法人番号 7470003002956</div>
            </div>
            <div className="footercol" aria-label="関連リンク">
              <h4>Links</h4>
              <div><Link href="/company">会社概要</Link></div>
              <div><Link href="/privacy">プライバシー</Link></div>
              <div><Link href="/terms">利用規約</Link></div>
            </div>
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