import Section from '@/components/Section';
import EmailButton from '@/components/EmailButton';
import LinkNav from '@/components/LinkNav';

export const metadata = {
  title: 'Contact | Fragment Practice合同会社',
  description:
    'Fragment Practice合同会社への業務依頼・コラボレーションのご相談窓口。登壇、公開対話、軽量リサーチ、AI対話設計など。',
};

export default function ContactPage() {
  return (
    <main className="content article">
      <LinkNav href="/">← Home</LinkNav>

      <header className="mt-8 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
      </header>

      <Section className="flow-4">
        <p className="text-neutral-300">
          Fragment Practice合同会社（Fragment Practice LLC）への
          <strong className="text-neutral-100">業務依頼・コラボレーション</strong>のご相談窓口です。
          現在は <strong>登壇／公開対話セッション／ZINE編集協働／AI対話設計・軽量リサーチ</strong> を中心にお受けしています。（オンライン中心／Zoom対応）
        </p>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 flow-4">
          <p className="text-sm text-neutral-400">
            For international inquiries (OpenAI partners, Apple-related workstreams):
          </p>
          <p className="text-sm text-neutral-300">
            We’re quietly open to talks, dialogic sessions, lightweight research, and AI relation design. Please reach out with a brief outline.
          </p>
        </div>
      </Section>

      {/* メールボタン（クライアント側で完結） */}
      <Section className="section flow-4">
        <EmailButton />
        <p className="text-xs text-neutral-500">
          ※クリックで件名と本文テンプレが入ります。日本語・英語どちらでもお送りください。
        </p>
      </Section>

      <Section className="section">
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

      <footer className="section text-sm text-neutral-500 italic">
        <p>
          FragmentPractice は「静けさ」と「構文性」を核にした詩的実践のフィールドです。<br />
          フラグメントは日々の非線形な感覚と気づきを記録し、ZINE はそれらを束ねる編集の場。<br />
          Bot との対話は構文構築の共創です。
        </p>
        <p className="text-xs text-neutral-600 mt-4">© Fragment Practice LLC</p>
      </footer>
    </main>
  );
}