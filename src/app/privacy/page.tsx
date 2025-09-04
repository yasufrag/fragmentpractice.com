// app/privacy/page.tsx
export const metadata = { title: "Privacy Policy" };

function ObfuscatedEmail() {
  const user = "yasuhiro";
  const domain = "fragmentpractice.com";
  const email = `${user}@${domain}`;
  return (
    <a href={`mailto:${email}`}>
      {user}
      [at]
      {domain}
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="container section prose">
      <h1 className="h1">プライバシーポリシー</h1>
      <p className="lead" style={{ marginTop: 8 }}>
        Fragment Practice合同会社（以下「当社」）は、個人情報の適正な取扱いを重要な責務とし、
        個人情報の保護に関する法律その他関係法令・ガイドラインを遵守します。
        本ポリシーは、当社ウェブサイト、フォーム、契約・請求等の業務における個人情報の取扱いについて定めるものです。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>1. 適用範囲・定義</h2>
      <p>
        本ポリシーは、当社が取得する「個人情報」（氏名、連絡先、所属、取引情報、問い合わせ内容 等）および
        Cookie等の識別子に適用されます。業務受託によりお預かりするデータについては、契約・指示に従い適切に取り扱います。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>2. 取得する情報と方法</h2>
      <ul>
        <li>お問い合わせフォーム：氏名、メールアドレス、内容、送信時の技術情報（送信日時、IP等）</li>
        <li>契約・請求：氏名・住所・所属・役職、請求先情報、銀行口座情報（振込・支払に必要な範囲）</li>
        <li>登壇・制作・共同研究等：連絡先、プロフィール情報、やり取りの記録</li>
        <li>サイト閲覧：Cookie等を用いたアクセス情報（閲覧ページ、参照元、ブラウザ情報 など）</li>
      </ul>

      <h2 className="h2" style={{ marginTop: 32 }}>3. 利用目的</h2>
      <ul>
        <li>ご依頼・お問い合わせへの対応、打合せ・連絡の実施</li>
        <li>契約締結、業務遂行、成果物の制作・納品、請求・支払等の事務処理</li>
        <li>イベント・刊行物・サービス等に関するご案内（同意・関係性に基づくもの）</li>
        <li>品質向上・安全管理・不正防止、法令・公的機関の要請への対応</li>
      </ul>

      <h2 className="h2" style={{ marginTop: 32 }}>4. 第三者提供・委託</h2>
      <p>
        当社は、法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供しません。
        ただし、業務運営のために外部事業者へ処理を委託することがあります（例：フォーム送信管理、ホスティング、メール配信、会計）。
        委託先とは守秘義務・安全管理に関する契約等を締結し、適切に監督します。
      </p>
      <p className="muted" style={{ marginTop: 8 }}>
        想定する委託・連携サービスの例：Formspree（問い合わせ受付）、ホスティング/デプロイ（例：Vercel等）、
        メール/ストレージ/会計ツール 等。具体の選定は運用上の合理性と安全性を基準に行います。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>5. 海外移転</h2>
      <p>
        クラウドサービスの利用等により、取得した個人情報が国外のサーバーで取扱われる場合があります。
        この場合も、関係法令に従い、適切な保護措置のもとで取扱います。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>6. Cookie等の利用</h2>
      <p>
        当社サイトでは、閲覧体験の改善や不正防止のためにCookie等を利用することがあります。
        ブラウザ設定によりCookieを無効化できますが、機能の一部が利用できない場合があります。
        アクセス解析や広告計測を導入する場合は、別途バナー・設定画面等で選択の機会を提供します。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>7. 安全管理措置</h2>
      <ul>
        <li>アクセス権限の最小化、認証情報の適切管理、暗号化・ログ監査の実施</li>
        <li>委託先の選定・契約・監督、事故時の連絡・再発防止対応</li>
        <li>物理的・技術的・組織的な安全管理措置の継続的改善</li>
      </ul>

      <h2 className="h2" style={{ marginTop: 32 }}>8. 保有期間</h2>
      <p>
        利用目的の達成に必要な範囲で保有し、目的達成後は法令・契約・会計基準に従い、適切な時期に削除・匿名化します。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>9. 共同利用</h2>
      <p>
        共同で業務を行うパートナー・登壇共催者等と、必要最小限の範囲で情報を共同利用する場合があります。
        その場合は、共同利用者の範囲、利用目的、管理責任者等を個別のご案内・契約で明示します。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>10. ご本人の権利</h2>
      <p>
        当社が保有する保有個人データについて、開示・利用目的の通知・訂正・追加・削除・利用停止・第三者提供の停止等のご請求が可能です。
        手続・本人確認の方法、手数料の有無はお問い合わせ時にご案内します。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>11. 未成年の方の情報</h2>
      <p>
        15歳未満の方が当社に個人情報を提供する場合は、保護者の同意を得たうえで行ってください。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>12. ポリシーの改定</h2>
      <p>
        本ポリシーの内容は、法令やサービス内容の変更等に応じて改定することがあります。重要な変更がある場合は、当社サイト上で告知します。
      </p>

      <h2 className="h2" style={{ marginTop: 32 }}>13. お問い合わせ窓口</h2>
      <p>
        Fragment Practice合同会社（Fragment Practice LLC）<br />
        〒760-0018 香川県高松市天神前10番5号 高松セントラルスカイビルディング 3F south<br />
        Mail: <ObfuscatedEmail /><br />
        Tel: 087-810-3037
      </p>

      <p style={{ marginTop: 40, fontSize: 14, color: "var(--muted)" }}>
        制定日：2025年9月4日／最終改定：2025年9月4日
      </p>

      <p className="muted" style={{ marginTop: 8, fontSize: 13 }}>
        ※本ページは一般的な指針であり、法的助言ではありません。実務・契約の内容に応じた最終確認は専門家へご相談ください。
      </p>
    </div>
  );
}