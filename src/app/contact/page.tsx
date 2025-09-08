// src/app/contact/page.tsx
import type { Metadata } from "next";
import { ContactForm } from "./form";

export const metadata: Metadata = {
  title: "Contact — Fragment Practice",
  description: "お問い合わせフォーム",
};

export default function ContactPage() {
  return (
    <main>
      <div className="fp-container section">
        {/* Heading */}
        <section aria-labelledby="contact-title" className="fp-section">
          <h1 id="contact-title" className="h1" style={{ marginTop: 8 }}>
            お問い合わせ
          </h1>
          <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
            共同・講演・ZINE制作など、ご相談は以下からどうぞ。<br />
            <span aria-hidden="true">※</span>は必須項目です。送信後は担当者より折り返しご連絡します。
          </p>
        </section>

        {/* Form */}
        <section aria-label="お問い合わせフォーム" className="fp-section" style={{ paddingTop: 12 }}>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}