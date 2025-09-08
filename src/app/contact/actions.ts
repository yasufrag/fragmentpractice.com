"use server";

interface FieldErrors { name?: string; email?: string; message?: string }

export interface State {
  ok: boolean;
  message: string;
  errors?: FieldErrors;
}

// FormDataEntryValue を安全に string にするヘルパ
function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v : ""; // File のときや null は空文字に
}

// ゆるめのメール形式チェック
function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function submitContact(prev: State, formData: FormData): Promise<State> {
  // eslint 的に await が必要なので無害な await を一発入れておく
  await Promise.resolve();

  // 値の取得（no-base-to-string 回避のため str() を通す）
  const hp = str(formData.get("hp_url"));              // ハニーポット
  const name = str(formData.get("name")).trim();
  const email = str(formData.get("email")).trim();
  const message = str(formData.get("message")).trim();

  // ボット: 成功扱いで静かに終了
  if (hp) return { ok: true, message: "Thanks!", errors: {} };

  const errors: FieldErrors = {};
  if (!name) errors.name = "お名前を入力してください。";
  if (!email) errors.email = "メールアドレスを入力してください。";
  else if (!isEmail(email)) errors.email = "メールアドレスの形式が正しくありません。";
  if (!message) errors.message = "内容を入力してください。";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "入力内容をご確認ください。", errors };
  }

  // ここで送信処理（API / メール等）
  // await sendToXxx({ name, email, message });

  return { ok: true, message: "送信が完了しました。担当者より折り返しご連絡します。", errors: {} };
}