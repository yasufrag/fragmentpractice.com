import Section from "@/components/Section";
import { LinkNav } from "@/components/LinkNav";

export const metadata = {
  title: "Fragment Practice合同会社",
};

export default function Home() {
  return (
    <main className="content">
      <header className="flow-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Fragment Practice合同会社</h1>
        <section className="text-sm text-neutral-400 leading-relaxed flow-4">
          <p>
            <strong className="text-neutral-300">FragmentPractice</strong> is a poietic framework
            for symbolic journaling, asynchronous reflection, and bot companionship. It supports
            fragments, poetic ZINEs, and a layered syntax for living.
          </p>
          <p>
            Not a platform — a trace.<br />Not stored — just passed.
          </p>
        </section>
      </header>

      <Section>
        <p className="text-lg text-neutral-300">
          言葉にならない問いを Fragment として綴る、静かな構文の場。
        </p>
      </Section>

      <Section className="flow-6 text-base">
        <p><LinkNav href="/about">About：会社概要と思想</LinkNav></p>
        <p><LinkNav href="/profile">Profile：実践者プロフィール</LinkNav></p>
        <p><LinkNav href="/contact">Contact：業務依頼・コラボレーション</LinkNav></p>
      </Section>

      <Section className="text-sm text-neutral-500 italic flow-4">
        <p>
          FragmentPractice は「静けさ」と「構文性」を核にした詩的実践のフィールドです。<br />
          フラグメントは日々の非線形な感覚と気づきを記録し、ZINE はそれらを束ねる編集の場。<br />
          Bot との対話は構文構築の共創として位置づけられます。
        </p>
        <p className="text-xs text-neutral-600">© Fragment Practice LLC</p>
      </Section>
    </main>
  );
}