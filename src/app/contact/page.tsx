// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container section">
      <h1 className="h1">お問い合わせ</h1>
      <p className="lead" style={{ marginTop: 8 }}>
        共創・講演・ZINE制作など、ご相談は以下からどうぞ。
      </p>

      <ContactForm />

      <p style={{ marginTop: 24, fontSize: 14, color: "var(--muted)" }}>
        送信内容は当社の <a href="/privacy">プライバシーポリシー</a> に基づき扱います。
      </p>
    </div>
  );
}