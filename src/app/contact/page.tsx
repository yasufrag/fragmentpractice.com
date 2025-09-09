import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Fragment Practice",
  description:
    "講演・ZINE制作・研究/実装の相談はこちらのフォームから。送信後、担当より折り返しご連絡します。",
  openGraph: {
    title: "Contact — Fragment Practice",
    description:
      "講演・ZINE制作・研究/実装の相談はこちらのフォームから。送信後に折り返しご連絡します。",
    url: "https://fragmentpractice.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="fp-container contact-page">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left", paddingTop: 48 }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Contact</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          講演・ZINE制作/入手・ご相談は以下のフォームからどうぞ。<br />
          ※ 必須項目です。送信後は担当者より折り返しご連絡します。
        </p>
      </section>

      {/* Form */}
      <section className="fp-section" aria-labelledby="form" style={{ paddingTop: 24 }}>
        <h2 id="form" className="h2" style={{ marginBottom: 12 }}>お問い合わせフォーム</h2>
        <ContactForm />
      </section>

      {/* 小さな補足（信頼ページへ） */}
      <section className="fp-section" aria-labelledby="trust" style={{ paddingTop: 24 }}>
        <h2 id="trust" className="h2" style={{ marginBottom: 12 }}>運用・守秘について</h2>
        <p style={{ maxWidth: 760, color: "var(--muted)" }}>
          NDA、セキュリティ、契約フローは <a href="/trust">Trust</a> にまとめています。
          個別要件がある場合はフォーム内に記載ください。
        </p>
      </section>
    </div>
  );
}