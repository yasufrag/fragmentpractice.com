export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <div className="container section">
      <h1 className="h1">プライバシーポリシー</h1>
      <p className="lead" style={{ marginTop: 8 }}>
        Fragment Practice合同会社（以下「当社」）は、利用者の個人情報を適切に取り扱い、保護することを重要な責務と認識しています。
        本プライバシーポリシーでは、当社における個人情報の取扱方針を定めます。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>1. 個人情報の取得</h2>
      <p>当社は、業務委託、出版活動、ワークショップ運営、お問い合わせ対応等の際に必要な範囲で、利用者の個人情報を取得します。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>2. 個人情報の利用目的</h2>
      <ul>
        <li>サービスの提供・運営のため</li>
        <li>契約や取引の遂行のため</li>
        <li>お問い合わせ対応のため</li>
        <li>情報提供やご案内のため</li>
        <li>法令に基づく対応のため</li>
      </ul>

      <h2 className="h2" style={{ marginTop: 32 }}>3. 個人情報の管理</h2>
      <p>当社は、個人情報を安全に管理するため、不正アクセス・漏洩・紛失等の防止に努めます。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>4. 第三者提供</h2>
      <p>法令に基づく場合を除き、利用者の同意なく第三者へ個人情報を提供することはありません。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>5. 開示・訂正・削除等</h2>
      <p>利用者ご本人からの要請に応じて、保有する個人情報の開示・訂正・削除に対応します。</p>

      <h2 className="h2" style={{ marginTop: 32 }}>6. お問い合わせ</h2>
      <p>
        本プライバシーポリシーに関するお問い合わせは、<br />
        Fragment Practice合同会社<br />
        〒760-0018 香川県高松市天神前10-5 高松セントラルスカイビルディング3F south<br />
        Mail: yasuhiro@fragmentpractice.com
      </p>

      <p style={{ marginTop: 40, fontSize: 14, color: "var(--muted)" }}>
        制定日：2025年9月4日
      </p>
    </div>
  );
}