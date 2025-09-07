"use client"
import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main className="nf-wrap" role="main" aria-labelledby="err-title">
          <section className="nf-card">
            <div className="nf-badge" aria-hidden>500</div>
            <h1 id="err-title" className="nf-title">エラーが発生しました</h1>
            <p className="nf-desc">
              一時的な問題の可能性があります。お手数ですが、もう一度お試しください。
            </p>
            <div className="nf-actions">
              <button className="chip" onClick={() => reset()}>再読み込み</button>
              <Link className="chip" href="/">Home</Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}