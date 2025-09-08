"use server";

interface FieldErrors { name?: string; email?: string; message?: string }

export interface State {
  ok: boolean;            // ← boolean に統一（null は使わない）
  message: string;
  errors?: FieldErrors;
}

// 簡易バリデーション関数
function isEmail(v: string) {
  // ゆるめの RFC 準拠チェック
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function submitContact(prev: State, formData: FormData): Promise<State> {
  // 文字列化（eslint の no-base-to-string 対策）
  const hp = String(formData.get("hp_url") ?? "");         // ハニーポット
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // ボット（ハニーポット）なら成功扱いで黙って終了
  if (hp) {
    return { ok: true, message: "Thanks!", errors: {} };
  }

  const errors: FieldErrors = {};
  if (!name) errors.name = "お名前を入力してください。";
  if (!email) errors.email = "メールアドレスを入力してください。";
  else if (!isEmail(email)) errors.email = "メールアドレスの形式が正しくありません。";
  if (!message) errors.message = "内容を入力してください。";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "入力内容をご確認ください。", errors };
  }

  // ここで送信処理（外部API / メールなど）を実装
  // await sendToXxx({ name, email, message });

  return { ok: true, message: "送信が完了しました。担当者より折り返しご連絡します。", errors: {} };
}