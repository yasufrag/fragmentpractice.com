// src/app/contact/actions.ts
"use server";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;
export interface FormState { ok: boolean; message?: string; errors?: Errors }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** FormData からテキスト入力だけを安全に取得（File や null は空文字に） */
function getText(fd: FormData, key: string): string {
  const v = fd.get(key);
  return typeof v === "string" ? v : "";
}
/** チェックボックス（存在すれば true） */
function getChecked(fd: FormData, key: string): boolean {
  return fd.get(key) !== null;
}

export async function submitContact(_: FormState | null, formData: FormData): Promise<FormState> {
  // ── Honeypot: 文字列化を避けて安全に評価
  const hp = getText(formData, "hp_url").trim();
  if (hp !== "") {
    return { ok: true, message: "送信が完了しました。" };
  }

  // ── 取り出し & 検証
  const name = getText(formData, "name").trim();
  const email = getText(formData, "email").trim();
  const message = getText(formData, "message").trim();
  const consent = getChecked(formData, "consent");

  const errors: Errors = {};
  if (!name) errors.name = "お名前を入力してください。";
  if (!email) errors.email = "メールアドレスを入力してください。";
  else if (!EMAIL_RE.test(email)) errors.email = "メールアドレスの形式が正しくありません。";
  if (!message) errors.message = "お問い合わせ内容を入力してください。";
  if (!consent) errors.consent = "同意が必要です。";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, message: "入力内容をご確認ください。" };
  }

  // ── 送信
  const endpoint = process.env.FORMS_ENDPOINT;
  try {
    if (endpoint) {
      // そのまま FormData を上流へ転送（文字列化なし）
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error(`Upstream ${res.status}`);
    } else {
      // 送信先未設定時はログのみ
      console.log("[contact] (dry-run)", { name, email, message });
    }
    return { ok: true, message: "送信が完了しました。担当者より折り返しご連絡します。" };
  } catch (err) {
    console.error("[contact] submit error:", err);
    return { ok: false, message: "送信に失敗しました。時間をおいて再度お試しください。" };
  }
}