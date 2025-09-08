// src/app/contact/form.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "./actions";

// ← 返却 shape に合わせた State を定義（例）
interface FieldErrors { name?: string; email?: string; message?: string }
export interface State {
  ok: boolean | null;
  message: string;
  errors?: FieldErrors;
}

export function ContactForm() {
  // ✅ null ではなく、初期 state をオブジェクトで渡す
  const initialState: State = { ok: null, message: "" };
  const [state, formAction] = useFormState<State, FormData>(submitContact, initialState);

  return (
    <form action={formAction} noValidate className="cf-wrap" aria-describedby="cf-note">
      {/* 2カラムのグリッド（ラベル / フィールド） */}
      <div className="cf-grid" role="group" aria-label="入力項目">
        {/* お名前 */}
        <label htmlFor="name" className="cf-label">
          お名前 <span className="cf-req" aria-hidden="true">※</span>
        </label>
        <div className="cf-field">
          <input id="name" name="name" type="text" required autoComplete="name" className="cf-input" />
        </div>

        {/* メール */}
        <label htmlFor="email" className="cf-label">
          メール <span className="cf-req" aria-hidden="true">※</span>
        </label>
        <div className="cf-field">
          <input id="email" name="email" type="email" required autoComplete="email" className="cf-input" />
        </div>

        {/* 本文 */}
        <label htmlFor="message" className="cf-label">
          内容 <span className="cf-req" aria-hidden="true">※</span>
        </label>
        <div className="cf-field">
          <textarea id="message" name="message" required rows={8} className="cf-textarea" />
          <p id="cf-note" className="cf-hint">
            送信内容は当社の <a href="/privacy">プライバシーポリシー</a> に基づき取り扱われることに同意します。
          </p>
        </div>

        {/* 送信 */}
        <div aria-hidden="true" />
        <div className="cf-actions">
          <button type="submit" className="btn primary">送信</button>
          <span className="cf-meta">担当者から折り返しご連絡します。</span>
        </div>
      </div>

      {/* 透明なハニーポット */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="hp_url">URL欄（空欄のまま）</label>
        <input id="hp_url" name="hp_url" type="text" tabIndex={-1} />
      </div>

      {/* 成功/失敗メッセージ */}
      {state?.ok === true && (
        <div role="status" className="cf-success" style={{ marginTop: 16 }}>
          送信しました。ありがとうございます！
        </div>
      )}
      {state?.ok === false && (
        <div role="alert" className="cf-success" style={{ marginTop: 16, borderColor: "#E86A5E" }}>
          送信に失敗しました。時間を置いて再度お試しください。
        </div>
      )}
    </form>
  );
}