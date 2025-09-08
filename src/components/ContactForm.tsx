"use client";

import { useForm, ValidationError } from "@formspree/react";

interface FsError { field?: string; message?: string }

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  // フォーム未設定時のフォールバック
  if (!formId) {
    return (
      <section className="cf-wrap" aria-live="polite">
        <p className="lead">⚠️ 現在、問い合わせフォームの設定を準備中です。</p>
        <p className="cf-hint">
          お急ぎの方は{" "}
          <a href="mailto:hello@fragmentpractice.com">hello@fragmentpractice.com</a>{" "}
          までご連絡ください。
        </p>
      </section>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  // 送信完了
  if (state.succeeded) {
    return (
      <section className="cf-wrap" role="status" aria-live="polite">
        <div className="cf-success" aria-label="送信完了">
          ✅ 送信が完了しました。ありがとうございます。
        </div>
      </section>
    );
  }

  // A11y用: エラー配列を安全に扱う（ValidationErrorには生のstate.errorsを渡す）
  const rawErrors = state.errors as unknown;
  const errorArray: unknown[] = Array.isArray(rawErrors) ? rawErrors : rawErrors ? [rawErrors] : [];
  const ariaErrors: FsError[] = errorArray.filter(
    (e): e is FsError =>
      typeof e === "object" &&
      e !== null &&
      ("message" in (e as Record<string, unknown>) ||
        "field" in (e as Record<string, unknown>)),
  );
  const hasError = (field: string) => ariaErrors.some((e) => e.field === field);

  return (
    <form
      className="cf-wrap"
      noValidate
      // useFormの返り値はpreventDefaultを内包。no-misused-promises回避にvoidを付ける
      onSubmit={(ev) => {
        void handleSubmit(ev);
      }}
      aria-describedby="cf-note"
      acceptCharset="utf-8"
      autoComplete="on"
    >
      <p id="cf-note" className="cf-hint">
        * は必須項目です。送信後は担当者より折り返しご連絡します。
      </p>

      {/* お名前 */}
      <div className="cf-field">
        <label htmlFor="cf-name" className="cf-label">
          お名前 <span aria-hidden="true" className="cf-req">*</span>
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={hasError("name")}
          aria-describedby={hasError("name") ? "cf-name-err" : undefined}
          className="cf-input"
          style={hasError("name") ? { borderColor: "var(--accent)" } : undefined}
        />
        <ValidationError id="cf-name-err" prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* メール */}
      <div className="cf-field">
        <label htmlFor="cf-email" className="cf-label">
          メール <span aria-hidden="true" className="cf-req">*</span>
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={hasError("email")}
          aria-describedby={hasError("email") ? "cf-email-err" : "cf-email-hint"}
          className="cf-input"
          style={hasError("email") ? { borderColor: "var(--accent)" } : undefined}
        />
        <p id="cf-email-hint" className="cf-hint" aria-hidden={hasError("email") || undefined}>
          例: you@example.com
        </p>
        <ValidationError id="cf-email-err" prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* 内容 */}
      <div className="cf-field">
        <label htmlFor="cf-message" className="cf-label">
          内容 <span aria-hidden="true" className="cf-req">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          aria-required="true"
          aria-invalid={hasError("message")}
          aria-describedby={hasError("message") ? "cf-message-err" : undefined}
          className="cf-textarea"
          style={hasError("message") ? { borderColor: "var(--accent)" } : undefined}
        />
        <ValidationError id="cf-message-err" prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Honeypot（スパム対策） */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" />

      {/* アクション */}
      <div className="cf-actions">
        <button
          type="submit"
          disabled={state.submitting}
          className="btn primary"
          aria-busy={state.submitting}
        >
          {state.submitting ? "送信中…" : "送信"}
        </button>
        <span className="cf-meta" aria-live="polite">
          {state.submitting ? "送信処理を行っています…" : ""}
        </span>
      </div>

      {/* フォーム全体のエラー（API由来など） */}
      <ValidationError errors={state.errors} />
    </form>
  );
}