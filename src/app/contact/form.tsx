"use client";

import { useState } from "react";

const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // フロント簡易バリデーション（空欄防止）
    const fd = new FormData(form);
    if (
      !String(fd.get("name") || "").trim() ||
      !String(fd.get("email") || "").trim() ||
      !String(fd.get("message") || "").trim()
    ) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // 成功表示（このページで完結）
  if (status === "success") {
    return (
      <div className="cf-success" role="status" aria-live="polite">
        送信が完了しました。担当者より折り返しご連絡いたします。
      </div>
    );
  }

  // 失敗表示（エンドポイント未設定・ネットワーク等）
  const showEndpointWarning = status === "error" || !FORMSPREE;

  return (
    <form
      className="cf-form"
      method="POST"
      action={FORMSPREE || undefined}
      onSubmit={handleSubmit}
      aria-describedby="cf-note"
      noValidate
    >
      <div className="cf-field">
        <label className="cf-label" htmlFor="name">
          お名前 <span className="cf-req">※</span>
        </label>
        <input className="cf-input" id="name" name="name" required placeholder="山田 太郎" />
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="email">
          メール <span className="cf-req">※</span>
        </label>
        <input
          className="cf-input"
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          placeholder="you@example.com"
        />
      </div>

      <div className="cf-field">
        <label className="cf-label" htmlFor="message">
          内容 <span className="cf-req">※</span>
        </label>
        <textarea
          className="cf-textarea"
          id="message"
          name="message"
          required
          placeholder="ご用件をご記入ください。"
        />
      </div>

      <div className="cf-submit-row">
        <button type="submit" className="cf-button">送信</button>
        <span id="cf-note" className="cf-note">
          送信内容は当社の <a href="/privacy">プライバシーポリシー</a> に基づき扱います。
        </span>
      </div>

      {showEndpointWarning && (
        <div className="cf-error" role="alert" aria-live="assertive" style={{ marginTop: "1rem" }}>
          送信に失敗しました。恐れ入りますが{" "}
          <a href="mailto:hello@fragmentpractice.com">hello@fragmentpractice.com</a>{" "}
          まで直接ご連絡ください。
        </div>
      )}
    </form>
  );
}