"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  // ※ ここで毎回読む（トップレベルで読むとビルド時に固定されがち）
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  // 環境変数が無いときはフックを呼ばずにフォールバックUI
  if (!formId) {
    return (
      <div style={{ maxWidth: 640, marginTop: 24 }}>
        <p className="lead" role="status">
          ⚠️ 現在、問い合わせフォームの設定を準備中です。
        </p>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>
          お急ぎの方は
          {" "}
          <a href="mailto:hello@fragmentpractice.com">hello@fragmentpractice.com</a>
          {" "}
          までご連絡ください。
        </p>
      </div>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <p className="lead" role="status">
        ✅ 送信が完了しました。ありがとうございます。
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 640, marginTop: 24 }}>
      <label style={{ display: "block", marginBottom: 12 }}>
        お名前
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            border: "1px solid var(--line)",
            borderRadius: "8px",
          }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>

      <label style={{ display: "block", marginBottom: 12 }}>
        メール
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            border: "1px solid var(--line)",
            borderRadius: "8px",
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label style={{ display: "block", marginBottom: 12 }}>
        内容
        <textarea
          name="message"
          rows={6}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            border: "1px solid var(--line)",
            borderRadius: "8px",
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </label>

      {/* Honeypot（スパム対策） */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <button
        type="submit"
        disabled={state.submitting}
        className="cta primary"
        style={{ marginTop: 16 }}
      >
        {state.submitting ? "送信中…" : "送信"}
      </button>

      <ValidationError errors={state.errors} />
    </form>
  );
}