'use client';

import { useActionState } from 'react';
import { submitContact, type State } from './actions';

export function ContactForm() {
  // 初期ステート（画面初期表示用）
  const initialState: State = { ok: false, message: '', errors: {} };

  // ✅ React 19: useActionState（useFormStateではなく）
  const [state, formAction, pending] = useActionState<State, FormData>(
    submitContact,
    initialState
  );

  return (
    <form action={formAction} noValidate className="cf-wrap" aria-describedby="cf-note">
      <div className="cf-grid">

        {/* お名前 */}
        <label htmlFor="name" className="cf-label">
          お名前 <span className="cf-req" aria-hidden>※</span>
        </label>
        <div className="cf-field">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="cf-input"
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? 'err-name' : undefined}
            required
          />
          {state.errors?.name && (
            <p id="err-name" role="alert" className="cf-hint">{state.errors.name}</p>
          )}
        </div>

        {/* メール */}
        <label htmlFor="email" className="cf-label">
          メール <span className="cf-req" aria-hidden>※</span>
        </label>
        <div className="cf-field">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="cf-input"
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? 'err-email' : undefined}
            required
          />
          {state.errors?.email && (
            <p id="err-email" role="alert" className="cf-hint">{state.errors.email}</p>
          )}
        </div>

        {/* 内容 */}
        <label htmlFor="message" className="cf-label">
          内容 <span className="cf-req" aria-hidden>※</span>
        </label>
        <div className="cf-field">
          <textarea
            id="message"
            name="message"
            className="cf-textarea"
            rows={6}
            aria-invalid={!!state.errors?.message}
            aria-describedby={state.errors?.message ? 'err-message' : undefined}
            required
          />
          {state.errors?.message && (
            <p id="err-message" role="alert" className="cf-hint">{state.errors.message}</p>
          )}
        </div>

        {/* 送信ボタン行（ラベル空白） */}
        <span aria-hidden />
        <div className="cf-actions">
          <button type="submit" className="btn primary" disabled={pending} aria-disabled={pending}>
            {pending ? '送信中…' : '送信'}
          </button>
          <p id="cf-note" className="cf-meta">
            送信内容は当社の <a href="/privacy">プライバシーポリシー</a> に基づき取り扱われます。
          </p>
        </div>

        {/* HP（ハニーポット） */}
        <input type="url" name="hp_url" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

        {/* 結果メッセージ */}
        <span aria-hidden />
        {state.message && (
          <div
            className="cf-success"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            style={{ marginTop: 8 }}
          >
            {state.message}
          </div>
        )}
      </div>
    </form>
  );
}