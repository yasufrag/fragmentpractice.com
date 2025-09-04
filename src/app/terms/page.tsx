export const metadata = { title: "Terms of Service" };

export default function TermsOfService() {
  return (
    <div className="container section">
      <h1 className="h1">利用規約</h1>
      <p className="lead" style={{ marginTop: 8 }}>
        本利用規約（以下「本規約」）は、Fragment Practice合同会社（以下「当社」）が提供するサービスの利用条件を定めるものです。
        利用者は本規約に同意の上で当社サービスをご利用いただきます。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>1. 適用</h2>
      <p>本規約は、当社が提供するウェブサイト、出版物、ワークショップ、その他関連サービスに適用されます。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>2. 禁止事項</h2>
      <ul>
        <li>法令または公序良俗に違反する行為</li>
        <li>当社または第三者の権利を侵害する行為</li>
        <li>サービス運営を妨害する行為</li>
        <li>虚偽の情報を提供する行為</li>
      </ul>

      <h2 className="h2" style={{ marginTop: 32 }}>3. 知的財産権</h2>
      <p>当社が提供するコンテンツ（テキスト・画像・プログラム等）の知的財産権は当社または正当な権利者に帰属します。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>4. 免責事項</h2>
      <p>
        当社は、サービス利用により生じたいかなる損害についても責任を負いません。
        ただし、当社の故意または重大な過失による場合はこの限りではありません。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>5. 規約の変更</h2>
      <p>当社は必要に応じて本規約を改定することができます。改定後はウェブサイト上で通知します。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>6. 準拠法・裁判管轄</h2>
      <p>本規約は日本法に準拠し、当社所在地を管轄する裁判所を専属管轄とします。</p>

      <p style={{ marginTop: 40, fontSize: 14, color: "var(--muted)" }}>
        制定日：2025年9月4日
      </p>
    </div>
  );
}