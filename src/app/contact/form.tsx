'use client';

import React from 'react';

const FORMSPREE =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  'https://formspree.io/f/xnnbojyp';

export function ContactForm() {
  return (
    <form
      action={FORMSPREE}
      method="POST"
      className="cf-wrap"
      noValidate
      aria-describedby="cf-note"
    >
      {/* Bot 対策（Formspree 公認の honeypot） */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" hidden />

      {/* 2カラム */}
      <div className="cf-grid">
        <label className="cf-label" htmlFor="cf-name">
          お名前 <span className="cf-req">必須</span>
        </label>
        <div className="cf-field">
          <input
            id="cf-name"
            name="name"
            className="cf-input"
            required
            autoComplete="name"
            placeholder="山田 太郎"
          />
        </div>

        <label className="cf-label" htmlFor="cf-email">
          メール <span className="cf-req">必須</span>
        </label>
        <div className="cf-field">
          <input
            id="cf-email"
            type="email"
            name="email"
            className="cf-input"
            required
            inputMode="email"
            autoComplete="email"
            placeholder="taro@example.com"
          />
        </div>

        <label className="cf-label" htmlFor="cf-message">
          本文 <span className="cf-req">必須</span>
        </label>
        <div className="cf-field">
          <textarea
            id="cf-message"
            name="message"
            className="cf-textarea"
            required
            rows={8}
            placeholder="ご用件をご記入ください。"
          />
          <p id="cf-note" className="cf-hint">
            送信内容は Formspree 経由で配信されます。
          </p>
        </div>
      </div>

      <div className="cf-actions" style={{ marginTop: 12 }}>
        <button type="submit" className="btn primary">送信する</button>
        <span className="cf-meta">営業日中にご返信いたします。</span>
      </div>

      {/* 任意のメタ（ダッシュボードで確認しやすく） */}
      <input type="hidden" name="_subject" value="fragmentpractice.com からのお問い合わせ" />
      <input type="hidden" name="site" value="fragmentpractice.com" />
    </form>
  );
}