// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#0b0b0b",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fragmentpractice.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  // 組織の構造化データ（検索結果の信頼性向上）
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fragment Practice合同会社",
    alternateName: "Fragment Practice LLC",
    url: "https://fragmentpractice.com",
    logo: "https://fragmentpractice.com/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "高松市天神前10番5号 高松セントラルスカイビルディング 3F south",
      addressLocality: "高松市",
      addressRegion: "香川県",
      postalCode: "760-0018",
      addressCountry: "JP",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "yasuhiro@fragmentpractice.com",
        telephone: "+81-87-810-3037",
        areaServed: "JP",
        availableLanguage: ["ja", "en"],
      },
    ],
  };

  return (
    <html lang="ja">
      <body>
        {/* Skip link: キーボードでメインにジャンプ */}
        <a href="#main" className="sr-only focus:not-sr-only focus:outline-none focus:ring">
          本文へスキップ
        </a>

        <header className="site-header" role="banner">
          <div className="container nav">
            <div className="brand">
              <Link href="/" aria-label="Fragment Practice ホーム">Fragment Practice</Link>
            </div>
            <nav className="navlinks" aria-label="主要ナビゲーション">
              <Link href="/company">Company</Link>
              <Link href="/philosophy">Philosophy</Link>
              <Link href="/work">Work</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main id="main" role="main">{children}</main>

        <footer className="site-footer" role="contentinfo">
          <div className="container footergrid">
            <div className="footercol">
              <h4>Fragment Practice合同会社</h4>
              <div>
                〒760-0018 香川県高松市天神前10番5号<br />
                高松セントラルスカイビルディング 3F south
              </div>
              <div>
                TEL 087-810-3037
              </div>
              <div>法人番号 7470003002956</div>
            </div>

            <div className="footercol">
              <h4>Links</h4>
              <div><Link href="/privacy">プライバシー</Link></div>
              <div><Link href="/terms">利用規約</Link></div>
            </div>

            <div className="footercol">
              <h4>© {year} Fragment Practice</h4>
              <div className="muted">All rights reserved.</div>
            </div>
          </div>
        </footer>

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: メタデータ用の静的JSONを埋め込み
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}