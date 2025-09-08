"use client";

import React from "react";
import { submitContact, type FormState } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn primary" disabled={pending} aria-busy={pending || undefined}>
      {pending ? "送信中…" : "送信"}
    </button>
  );
}

export default function ContactPage() {
  const initialState: FormState = { ok: false };
  const [state, formAction] = useFormState(submitContact, initialState);

  // aria 属性ヘルパ
  const aria = (key: keyof NonNullable<FormState["errors"]>) => ({
    "aria-invalid": state.errors?.[key] ? true : undefined,
    "aria-describedby": state.errors?.[key] ? `${key}-error` : undefined,
  });

  // 成功時はフォームをクリアしたい → フォーム ref を使う
  const formRef = React.useRef<HTMLFormElement>(null);
  React.useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <main className="site-container py-12">
      <a href="#contact-form" className="skip-link">フォームにスキップ</a>

      <header className="mb-6">
        <h1 className="h1">お問い合わせ</h1>
        <p className="lead mt-2">
          講演・ZINE制作・ご相談は以下からどうぞ。<br />
          <span className="text-[color:var(--muted)]">* は必須項目です。送信後は担当者より折り返しご連絡します。</span>
        </p>
      </header>

      {/* ライブリージョン（読み上げ用） */}
      <div className="sr-only" role="status" aria-live="polite">
        {state.ok ? "送信成功" : state.errors || state.message ? "エラー" : ""}
      </div>

      {state.message && (
        <div className="cf-success mb-6" role={state.ok ? "status" : "alert"} aria-live={state.ok ? "polite" : "assertive"}>
          {state.message}
        </div>
      )}

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="cf-success mb-6" role="alert" aria-live="assertive">
          <p className="font-semibold mb-1">入力内容に不備があります。</p>
          <ul className="list-disc pl-5">
            {Object.entries(state.errors).map(([k, v]) => (
              <li key={k}><a href={`#${k}`} className="underline">{v}</a></li>
            ))}
          </ul>
        </div>
      )}

      <form id="contact-form" ref={formRef} action={formAction} noValidate className="cf-wrap">
        {/* honeypot（視覚外） */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
          <label>あなたのWebサイト（空欄のまま送信）</label>
          <input name="hp_url" type="text" autoComplete="off" />
        </div>

        <div className="cf-field">
          <label htmlFor="name" className="cf-label">
            お名前 <span className="cf-req" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className="cf-input" {...aria("name")} />
          {state.errors?.name && <div id="name-error" className="cf-hint" role="alert">{state.errors.name}</div>}
        </div>

        <div className="cf-field">
          <label htmlFor="email" className="cf-label">
            メール <span className="cf-req" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required className="cf-input" {...aria("email")} />
          {state.errors?.email && <div id="email-error" className="cf-hint" role="alert">{state.errors.email}</div>}
        </div>

        <div className="cf-field">
          <label htmlFor="message" className="cf-label">
            内容 <span className="cf-req" aria-hidden="true">*</span>
          </label>
          <textarea id="message" name="message" rows={8} required className="cf-textarea" {...aria("message")} />
          {state.errors?.message && <div id="message-error" className="cf-hint" role="alert">{state.errors.message}</div>}
        </div>

        <div className="cf-field">
          <label className="inline-flex items-start gap-2">
            <input id="consent" name="consent" type="checkbox" className="accent-[var(--accent)]" {...aria("consent")} />
            <span>
              <span aria-hidden="true">*</span> 送信内容は当社の{" "}
              <a className="underline" href="/privacy">プライバシーポリシー</a>{" "}
              に基づき取り扱われることに同意します。
            </span>
          </label>
          {state.errors?.consent && <div id="consent-error" className="cf-hint" role="alert">{state.errors.consent}</div>}
        </div>

        <div className="cf-actions">
          <SubmitButton />
          <span className="cf-meta">担当者から折り返しご連絡します。</span>
        </div>
      </form>

      <p className="mt-6 text-sm text-[color:var(--muted)]">
        迷惑メール対策のため、URL多用のメッセージは届かない場合があります。
      </p>
    </main>
  );
}