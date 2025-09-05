// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  const year = new Date().getFullYear()

  return (
    <main className="nf-wrap" role="main" aria-labelledby="nf-title">
      <section className="nf-card" aria-live="polite">
        <div className="nf-badge" aria-hidden>404</div>
        <h1 id="nf-title" className="nf-title">ページが見つかりません</h1>
        <p className="nf-desc">
          URLが変更されたか、存在しない可能性があります。<br />
          上部のナビゲーション、または下のリンクから移動してください。
        </p>

        <div className="nf-actions" role="navigation" aria-label="代替リンク">
          <Link href="/" className="chip">Home</Link>
          <Link href="/company" className="chip">Company</Link>
          <Link href="/work" className="chip">Work</Link>
          <Link href="/zine" className="chip">ZINE</Link>
          <Link href="/contact" className="chip">Contact</Link>
        </div>

        <p className="nf-meta" aria-label="補足">
          © {year} Fragment Practice
        </p>
      </section>
    </main>
  )
}