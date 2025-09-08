"use client";

import { useState } from "react";

const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // safe getter: string 以外(File/null)は空文字に落とす
  const getStr = (fd: FormData, key: string) => {
    const v = fd.get(key);
    return typeof v === "string" ? v : "";
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = getStr(fd, "name").trim();
    const email = getStr(fd, "email").trim();
    const message = getStr(fd, "message").trim();

    if (!name || !email || !message) {
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

  if (status === "success") {
    return (
      <div className="cf-success" role="status" aria-live="polite">
        送信が完了しました。担当者より折り返しご連絡いたします。
      </div>
    );
  }

  const showEndpointWarning = status === "error" || !FORMSPREE;

  return (
    <form
      className="cf-form"
      method="POST"
      action={FORMSPREE || undefined}
      // async関数を直接渡さず void ラッパーでESLint回避
      onSubmit={(e) => { void handleSubmit(e); }}
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