"use client";

import { useFormState } from "react-dom";
import { submitContact, type State } from "./actions";

export function ContactForm() {
  // 初期 state を reducer の State に合わせる（ok は boolean）
  const initialState: State = { ok: false, message: "", errors: {} };
  const [state, formAction] = useFormState<State, FormData>(submitContact, initialState);

  return (
    <form action={formAction} noValidate className="cf-wrap" aria-describedby="cf-note">
      {/* 例：名前 */}
      <div className="cf-grid cf-field">
        <label htmlFor="name" className="cf-label">お名前 <span className="cf-req">※</span></label>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            className="cf-input"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "err-name" : undefined}
            placeholder="山田 太郎"
            autoComplete="name"
          />
          {state.errors?.name && <p id="err-name" className="cf-hint">{state.errors.name}</p>}
        </div>
      </div>

      {/* 例：メール */}
      <div className="cf-grid cf-field">
        <label htmlFor="email" className="cf-label">メール <span className="cf-req">※</span></label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            className="cf-input"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "err-email" : undefined}
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
          />
          {state.errors?.email && <p id="err-email" className="cf-hint">{state.errors.email}</p>}
        </div>
      </div>

      {/* 例：内容 */}
      <div className="cf-grid cf-field">
        <label htmlFor="message" className="cf-label">内容 <span className="cf-req">※</span></label>
        <div>
          <textarea
            id="message"
            name="message"
            className="cf-textarea"
            rows={7}
            aria-invalid={Boolean(state.errors?.message)}
            aria-describedby={state.errors?.message ? "err-message" : undefined}
          />
          {state.errors?.message && <p id="err-message" className="cf-hint">{state.errors.message}</p>}
        </div>
      </div>

      {/* ハニーポット（非表示） */}
      <input type="url" name="hp_url" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} />

      {/* 同意・送信 */}
      <div className="cf-field">
        <p id="cf-note" className="cf-meta">
          送信内容は当社の <a href="/privacy" className="underline">プライバシーポリシー</a> に基づき取り扱われることに同意します。
        </p>
        <div className="cf-actions">
          <button type="submit" className="btn primary">送信</button>
          <span className="cf-meta">担当者から折り返しご連絡します。</span>
        </div>
        {state.message && (
          <div className="cf-success" role="status" aria-live="polite" style={{ marginTop: 12 }}>
            {state.message}
          </div>
        )}
      </div>
    </form>
  );
}