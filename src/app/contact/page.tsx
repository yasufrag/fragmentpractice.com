import type { Metadata } from "next";
import ContactForm from "./form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="fp-container">
      <section className="fp-section" aria-labelledby="contact-title">
        <h1 id="contact-title" className="h1">Contact</h1>
        <p className="lead" style={{ marginTop: 6, maxWidth: 680 }}>
          講演・ZINE制作依頼など、ご相談は以下のフォームからどうぞ。<br />
          ※ は必須項目です。送信後は担当者より折り返しご連絡します。
        </p>

        <div style={{ marginTop: 20 }}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}