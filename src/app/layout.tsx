// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fragment Practice — Company',
  description: 'Fragment Practice合同会社 公式サイト',
  metadataBase: new URL('https://fragmentpractice.com'),
  openGraph: {
    title: 'Fragment Practice — Company',
    description: '共創・実験・編集のためのスタジオ',
    url: 'https://fragmentpractice.com',
    siteName: 'Fragment Practice',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="container nav">
            <div className="brand">
              <a href="/">Fragment Practice</a>
            </div>
            <nav className="navlinks" aria-label="Primary">
              <a href="/company">Company</a>
              <a href="/work">Work</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footergrid">
            <div className="footercol">
              <h4>Fragment Practice合同会社</h4>
              <div>〒760-0018 香川県高松市天神前10番5号<br/>高松セントラルスカイビルディング 3F south</div>
              <div>TEL 087-810-3037</div>
              <div>法人番号 7470003002956</div>
            </div>
            <div className="footercol">
              <h4>Links</h4>
              <div><a href="/privacy">プライバシー</a></div>
              <div><a href="/terms">利用規約</a></div>
            </div>
            <div className="footercol">
              <h4>© {new Date().getFullYear()} Fragment Practice</h4>
              <div className="muted">All rights reserved.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}