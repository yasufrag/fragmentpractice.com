// src/components/ContactForm.tsx
"use client";

import { useForm, ValidationError } from "@formspree/react";

interface FsError {
  field?: string;
  message?: string;
}

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  // フォーム未設定時のフォールバック
  if (!formId) {
    return (
      <div style={{ maxWidth: 640, marginTop: 24 }}>
        <p className="lead" role="status">
          ⚠️ 現在、問い合わせフォームの設定を準備中です。
        </p>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>
          お急ぎの方は{" "}
          <a href="mailto:hello@fragmentpractice.com">hello@fragmentpractice.com</a>{" "}
          までご連絡ください。
        </p>
      </div>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  // 送信成功時はサンクス表示
  if (state.succeeded) {
    return (
      <p className="lead" role="status">
        ✅ 送信が完了しました。ありがとうございます。
      </p>
    );
  }

  // ---------- A11y 用: errors を“配列”へ安全に正規化 ----------
  const rawErrors = state.errors as unknown;
  const errorArray: unknown[] = Array.isArray(rawErrors)
    ? rawErrors
    : rawErrors
      ? [rawErrors]
      : [];

  const ariaErrors: FsError[] = errorArray.filter(
    (e): e is FsError =>
      typeof e === "object" &&
      e !== null &&
      ("message" in (e as Record<string, unknown>) ||
        "field" in (e as Record<string, unknown>))
  );

  const hasError = (field: string) => ariaErrors.some((e) => e.field === field);

  return (
    <form
      // handleSubmit が内部で preventDefault 済。no-misused-promises 回避に void を付与
      onSubmit={(ev) => { void handleSubmit(ev); }}
      style={{ maxWidth: 640, marginTop: 24 }}
      noValidate
    >
      <label htmlFor="cf-name" style={{ display: "block", marginBottom: 12 }}>
        お名前
        <input
          id="cf-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={hasError("name")}
          aria-describedby={hasError("name") ? "cf-name-err" : undefined}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            border: "1px solid var(--line)",
            borderRadius: "8px",
          }}
        />
        {/* ValidationError には state.errors をそのまま渡す */}
        <ValidationError id="cf-name-err" prefix="Name" field="name" errors={state.errors} />
      </label>

      <label htmlFor="cf-email" style={{ display: "block", marginBottom: 12 }}>
        メール
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          aria-required="true"
          aria-invalid={hasError("email")}
          aria-describedby={hasError("email") ? "cf-email-err" : undefined}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            border: "1px solid var(--line)",
            borderRadius: "8px",
          }}
        />
        <ValidationError id="cf-email-err" prefix="Email" field="email" errors={state.errors} />
      </label>

      <label htmlFor="cf-message" style={{ display: "block", marginBottom: 12 }}>
        内容
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          aria-required="true"
          aria-invalid={hasError("message")}
          aria-describedby={hasError("message") ? "cf-message-err" : undefined}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            border: "1px solid var(--line)",
            borderRadius: "8px",
          }}
        />
        <ValidationError
          id="cf-message-err"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
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

      {/* フォーム全体のエラー（API由来など） */}
      <ValidationError errors={state.errors} />
    </form>
  );
}