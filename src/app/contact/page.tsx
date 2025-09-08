import type { Metadata } from "next";
import ContactForm from "./form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="fp-container">
      <section className="fp-section">
        <h1 className="h1" style={{ marginBottom: "32px" }}>Contact</h1>
        <p className="lead" style={{ marginBottom: "24px", maxWidth: "720px" }}>
          講演・ZINE制作作成など、ご相談は以下のフォームからどうぞ。<br />
          ※ は必須項目です。送信後は担当者より折り返しご連絡します。
        </p>
        <ContactForm />
      </section>
    </div>
  );
}