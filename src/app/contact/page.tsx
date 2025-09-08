import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Fragment Practice",
  description: "Fragment Practice合同会社へのお問い合わせフォームです。",
};

export default function ContactPage() {
  return (
    <div className="fp-container">
      <div className="fp-section">
        <h1 className="h1">Contact</h1>
        <p className="lead" style={{ marginTop: 8 }}>
          お問い合わせは以下のフォームからお願いいたします。
        </p>

        <form
          className="cf-form"
          action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}
          method="POST"
        >
          {/* 名前 */}
          <div className="cf-grid">
            <label htmlFor="name" className="cf-label">お名前</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="cf-input"
            />
          </div>

          {/* メール */}
          <div className="cf-grid">
            <label htmlFor="email" className="cf-label">メールアドレス</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="cf-input"
            />
          </div>

          {/* 内容 */}
          <div className="cf-grid">
            <label htmlFor="message" className="cf-label">お問い合わせ内容</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="cf-textarea"
            />
          </div>

          {/* ハニーポット（スパム対策） */}
          <input type="text" name="hp_url" className="sr-only" tabIndex={-1} autoComplete="off" />

          {/* 同意 */}
          <div className="cf-grid">
            <label className="cf-label">
              <input type="checkbox" name="consent" required /> 個人情報の取扱いに同意します
            </label>
          </div>

          {/* ボタン */}
          <button type="submit" className="btn-primary" style={{ marginTop: 16 }}>
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}