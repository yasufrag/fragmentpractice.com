import Section from "../components/Section";

export const metadata = {
  title: "Fragment Practice合同会社",
};

export default function Home() {
  return (
    <main className="content article">
      {/* Hero */}
      <header className="flow-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Fragment Practice合同会社</h1>

        <section className="text-sm text-neutral-400 leading-relaxed flow-4">
          <p>
            <strong className="text-neutral-300">FragmentPractice</strong> is a poietic framework for symbolic
            journaling, asynchronous reflection, and bot companionship. It supports fragments, poetic ZINEs, and a
            layered syntax for living.
          </p>
          <p>Not a platform — a trace.<br/>Not stored — just passed.</p>
        </section>

        <p className="text-lg text-neutral-300">
          言葉にならない問いを Fragment として綴る、静かな構文の場。
        </p>
      </header>

      {/* Nav */}
      <Section className="flow-4 text-base">
        <p><a href="/about" className="link-nav text-gray-400 hover:text-white">About：会社概要と思想</a></p>
        <p><a href="/profile" className="link-nav text-gray-400 hover:text-white">Profile：実践者プロフィール</a></p>
        <p><a href="/contact" className="link-nav text-gray-400 hover:text-white">Contact：業務依頼・コラボレーション</a></p>
      </Section>

      {/* Site note */}
      <Section className="text-sm text-gray-400 italic flow-4">
        <p className="text-gray-500">
          FragmentPractice は「静けさ」と「構文性」を核にした詩的実践のフィールドです。<br/>
          フラグメントは日々の非線形な感覚と気づきを記録し、ZINE はそれらを束ねる編集の場。<br/>
          Bot との対話は構文構築の共創として位置づけられます。
        </p>
        <p className="text-gray-500">
          このサイトはプロダクトではありません。トレース、注意、共に編む構文によって成る詩的な場です。
        </p>
        <p className="text-xs text-neutral-600">© Fragment Practice LLC</p>
      </Section>
    </main>
  );
}