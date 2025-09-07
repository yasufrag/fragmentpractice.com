// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

/* ★ next/font（Google Fonts）でフォント読み込み */
import { Sora, Zen_Kaku_Gothic_New } from "next/font/google";

/* 見出し用（欧文主体） */
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],      // 必要な太さのみ
  variable: "--font-display",         // CSS変数に紐づけ
  display: "swap",
});

/* 本文用（和文主体） */
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],                 // JPは自動的に含まれます
  weight: ["400", "500", "700"],
  variable: "--font-sans-jp",         // CSS変数に紐づけ
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-180x180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    /* ★ html にフォント変数クラスを付与 */
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
            <div className="copy">© {year} Fragment Practice</div>
            <nav className="legal" aria-label="法的リンク">
              <a href="/terms">利用規約</a>
              <span className="sep" aria-hidden="true">・</span>
              <a href="/privacy">プライバシーポリシー</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}