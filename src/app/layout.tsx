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

const metadataBase = new URL("https://fragmentpractice.com");

export const metadata: Metadata = {
  metadataBase,
  // 既定タイトル + ページ側で template を使って上書き可
  title: {
    default: "Fragment Practice",
    template: "%s — Fragment Practice",
  },
  description:
    "AI・言語・編集を横断し、注意・関係・編集を支える“静かな仕組み”を設計します。高松から、実務と研究を往復させながら検証していきます。",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: metadataBase,
    siteName: "Fragment Practice",
    title: "Fragment Practice",
    description:
      "AI・言語・編集を横断し、注意・関係・編集を支える“静かな仕組み”を設計します。",
    locale: "ja_JP",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Fragment Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // 取得次第ここにアカウントを入れてください
    title: "Fragment Practice",
    description:
      "AI・言語・編集を横断し、注意・関係・編集を支える“静かな仕組み”を設計します。",
    images: ["/og.jpg"],
  },
  // iOS/Android の UI 着色
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
  ],
  // favicon 類は Next 15 の書式に寄せて整理
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-180x180.png" },
      { url: "/apple-touch-icon-167x167.png" },
      { url: "/apple-touch-icon-152x152.png" },
      { url: "/apple-touch-icon-120x120.png" },
    ],
    other: [
      // 用意があれば：Safari pinned tab
      // { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#E4582B" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="ja" className={`${sora.variable} ${zenKaku.variable}`}>
      <body>
        {/* Skip link for keyboard users */}
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>

        <Header />

        <main id="main" role="main">
          {children}
        </main>

        {/* Footer */}
        <footer className="site-footer" role="contentinfo">
          <div className="container footerbar" aria-label="著作権と法的リンク">
            <nav className="legal" aria-label="法的リンク">
              <a href="/terms">利用規約</a>
              <span className="sep" aria-hidden="true">
                ・
              </span>
              <a href="/privacy">プライバシーポリシー</a>
            </nav>
            <div className="copy">© {year} Fragment Practice</div>
          </div>
        </footer>
      </body>
    </html>
  );
}