// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="container section">
      <h1 className="h2">お問い合わせ</h1>
      <p className="lead">案件・共創のご相談はメールまたはフォームからお送りください。</p>
      <ul>
        <li>メール: <a href="mailto:yasuhiro@fragmentpractice.com">yasuhiro@fragmentpractice.com</a></li>
        <li>電話: 087-810-3037（受付: 平日10:00-17:00）</li>
      </ul>
      <p style={{marginTop:12, color:'var(--muted)'}}>※ フォーム導入前はメールでの一次連絡にて承ります。</p>
    </div>
  );
}