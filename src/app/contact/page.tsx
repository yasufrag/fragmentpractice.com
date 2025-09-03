import Section from "@/components/Section";

export const metadata = {
  title: "Contact | Fragment Practice合同会社",
  description:
    "Fragment Practice合同会社への業務依頼・コラボレーションのご相談窓口。登壇、公開対話、軽量リサーチ、AI対話設計など。",
};

export default function Contact() {
  const mailHref =
    "mailto:yasuhiro@fragmentpractice.com" +
    "?subject=%5BBusiness%20Inquiry%5D%20Fragment%20Practice%20LLC" +
    "&body=%E3%80%90Organization%2FCompany%E3%80%91%0A%E3%80%90Point%20of%20Contact%E3%80%91%0A%E3%80%90Purpose%20%2F%20Overview%E3%80%91%0A%E3%80%90Preferred%20format%E3%80%91%20Talk%20%2F%20Dialog%20Session%20%2F%20Light%20Research%20%2F%20AI%20Relation%20Design%0A%E3%80%90Tentative%20dates%20%2F%20Time%20zone%E3%80%91%0A%E3%80%90Confidentiality%E3%80%91%20NDA%20needed%20%2F%20Not%20required%0A%E3%80%90Notes%E3%80%91";

  return (
    <main className="content article">
      <a href="/" className="text-sm text-gray-400 hover:text-white">← Home</a>

      <header className="mt-8 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
      </header>

      {/* Intro */}
      <section className="flow-4">
        <p className="text-neutral-300">
          Fragment Practice合同会社（Fragment Practice LLC）への
          <strong className="text-neutral-100">業務依頼・コラボレーション</strong>のご相談窓口です。
          現在は <strong>登壇／公開対話セッション／ZINE編集協働／AI対話設計・軽量リサーチ</strong> を中心にお受けしています。
          （オンライン中心／Zoom対応）
        </p>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 flow-4">
          <p className="text-sm text-neutral-400">
            For international inquiries (research partners and collaborators):
          </p>
          <p className="text-sm text-neutral-300">
            We’re quietly open to talks, dialogic sessions, lightweight research, and AI relation design.
            Please feel free to reach out with a brief outline.
          </p>
        </div>
      </section>

      {/* Mail */}
      <Section className="flow-4">
        <a className="inline-block bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-5 py-3 rounded-md underline underline-offset-2" href={mailHref}>
          yasuhiro(at)fragmentpractice.com へメールする
        </a>
        <p className="text-xs text-neutral-500">※クリックで件名と本文テンプレが入ります。日本語・英語どちらでもお送りください。</p>
      </Section>

      {/* Availability / Policy */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flow-4 text-sm">
            <h2 className="text-white font-semibold">現在の受け入れ</h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-300">
              <li>講演・登壇（対話型含む）</li>
              <li>公開/社内向けダイアログ・セッション設計</li>
              <li>ZINE編集の共同企画</li>
              <li>AI対話設計・軽量リサーチ（関係性設計・プロトタイプ）</li>
            </ul>
          </div>
          <div className="flow-4 text-sm">
            <h2 className="text-white font-semibold">対応ポリシー</h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-300">
              <li>オンライン（Zoom）中心、機密事項はNDA下で対応可</li>
              <li>初回返答は通常2–3営業日以内（状況により前後）</li>
              <li>営利目的の一括営業メールはご遠慮ください</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-6">
          Corporate note：Fragment Practice LLC（合同会社／Japan, remote-first; Kagawa / Tokyo）
        </p>
      </Section>

      {/* Site note */}
      <Section className="text-sm text-neutral-500 italic">
        <p>
          FragmentPractice は「静けさ」と「構文性」を核にした詩的実践のフィールドです。<br/>
          フラグメントは日々の非線形な感覚と気づきを記録し、ZINE はそれらを束ねる編集の場。<br/>
          Bot との対話は構文構築の共創です。
        </p>
        <p className="text-xs text-neutral-600 mt-4">© Fragment Practice LLC</p>
      </Section>
    </main>
  );
}