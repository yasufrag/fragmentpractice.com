"use client";

import { useState } from "react";

/** フォームスプリーのエンドポイントを環境変数から解決
 * - NEXT_PUBLIC_FORMSPREE_ENDPOINT … 直接URL（推奨）
 * - NEXT_PUBLIC_FORMSPREE_FORM_ID … フォームID or URL どちらでもOK
 */
function resolveFormspreeEndpoint(): string {
  const ep =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ??
    "";

  if (!ep) return "";
  // フォームIDのみ渡された場合にURL化
  if (/^https?:\/\//i.test(ep)) return ep;
  return `https://formspree.io/f/${ep}`;
}

const FORMSPREE = resolveFormspreeEndpoint();

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
interface FsError { field?: string; message?: string }
interface FormspreeResponse { ok?: boolean; errors?: FsError[] }

function isFsResponse(v: unknown): v is FormspreeResponse {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  return (o.ok === undefined || typeof o.ok === "boolean") &&
         (o.errors === undefined ||
           (Array.isArray(o.errors) && o.errors.every(e => typeof e === "object" && e)));
}

export default function ContactForm() {
  type Status = "idle" | "submitting" | "success" | "error";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fatal, setFatal] = useState<null | "network" | "endpoint">(null);

  const safeGet = (fd: FormData, key: string) => {
    const v = fd.get(key);
    return typeof v === "string" ? v : "";
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setFatal(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = safeGet(fd, "name").trim();
    const email = safeGet(fd, "email").trim();
    const message = safeGet(fd, "message").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "お名前は必須です。";
    if (!email) nextErrors.email = "メールアドレスは必須です。";
    if (!message) nextErrors.message = "内容は必須です。";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    if (!FORMSPREE) {
      setFatal("endpoint");
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");

      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      const raw: unknown = await res.json().catch(() => ({}));
      const data: FormspreeResponse = isFsResponse(raw) ? raw : {};

      if (res.ok && data.ok !== false) {
        setStatus("success");
        form.reset();
        return;
      }

      // フィールド別のエラーを反映
      const fsErrors: FieldErrors = {};
      const arr = data.errors;
      if (Array.isArray(arr) && arr.length) {
        for (const e of arr) {
          const f = (e.field ?? "").toLowerCase();
          if (f === "name" || f === "email" || f === "message") {
            fsErrors[f] = e.message ?? "この項目を確認してください。";
          }
        }
      }

      if (Object.keys(fsErrors).length) {
        setErrors(fsErrors);
        setStatus("error");
      } else if (res.status >= 500) {
        setFatal("network");
        setStatus("error");
      } else {
        setErrors({ message: "送信に失敗しました。入力内容をご確認ください。" });
        setStatus("error");
      }
    } catch {
      setFatal("network");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="cf-success" role="status" aria-live="polite">
        送信が完了しました。担当者より折り返しご連絡いたします。ありがとうございました。
      </div>
    );
  }

  return (
    <form
      className="cf-form"
      method="POST"
      action={FORMSPREE || undefined}  // JS無効時のフォールバック
      onSubmit={(e) => { void handleSubmit(e); }}
      aria-describedby="cf-note"
      noValidate
    >
      {/* フォームのメタ（subject / 参照元 / ハニーポット） */}
      <input type="hidden" name="_subject" value="【Contact】サイトからの新規お問い合わせ" />
      <input type="hidden" name="source" value="fragmentpractice.com/contact" />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />

      <div className="cf-field">
        <label className="cf-label" htmlFor="name">
          お名前 <span className="cf-req">※</span>
        </label>
        <input
          className="cf-input"
          id="name"
          name="name"
          required
          placeholder="山田 太郎"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {errors.name && (
          <p id="err-name" className="cf-hint" role="alert" style={{ color: "#b91c1c" }}>
            {errors.name}
          </p>
        )}
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
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && (
          <p id="err-email" className="cf-hint" role="alert" style={{ color: "#b91c1c" }}>
            {errors.email}
          </p>
        )}
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
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && (
          <p id="err-message" className="cf-hint" role="alert" style={{ color: "#b91c1c" }}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="cf-submit-row">
        <button
          type="submit"
          className="cta primary"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          {status === "submitting" ? "送信中…" : "送信"}
        </button>

        <span id="cf-note" className="cf-note">
          送信内容は当社の <a href="/privacy">プライバシーポリシー</a> に基づき扱います。
        </span>
      </div>

      {fatal === "endpoint" && (
        <div className="cf-error" role="alert" aria-live="assertive" style={{ marginTop: "1rem" }}>
          送信先の設定に問題があります。管理画面で<strong>フォームのエンドポイント</strong>か
          <strong>フォームID</strong>の環境変数をご確認ください（
          <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> か <code>NEXT_PUBLIC_FORMSPREE_FORM_ID</code>）。
          また Formspree の <em>Allowed domains</em> に <code>fragmentpractice.com</code> と
          <code>localhost:3000</code> を追加してください。
        </div>
      )}
      {fatal === "network" && (
        <div className="cf-error" role="alert" aria-live="assertive" style={{ marginTop: "1rem" }}>
          送信に失敗しました。しばらく時間をおいて再度お試しください。至急のご連絡は
          <a href="/company">Company</a> 記載の電話番号をご利用ください。
        </div>
      )}
    </form>
  );
}