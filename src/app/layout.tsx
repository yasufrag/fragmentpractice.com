// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Sora, Zen_Kaku_Gothic_New } from "next/font/google";

import Header from "@/components/Header";

/* Google Fonts (next/font) */
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
});

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="ja" className={`${sora.variable} ${zenKaku.variable}`}>
      <body>
        <a href="#main" className="skip-link">本文へスキップ</a>

        <Header />

        <main id="main" role="main">
          {children}
        </main>

        {/* フッター */}
        <footer className="site-footer" role="contentinfo">
          <div className="container footerbar" aria-label="著作権と法的リンク">
            <nav className="legal" aria-label="法的リンク">
              <a href="/terms">利用規約</a>
              <span className="sep" aria-hidden="true">・</span>
              <a href="/privacy">プライバシーポリシー</a>
            </nav>
            <div className="copy">© {year} Fragment Practice</div>
          </div>
        </footer>
      </body>
    </html>
  );
}