import Image from "next/image";
import Section from "@/components/Section";

export const metadata = {
  title: "Profile | Fragment Practice合同会社",
  description:
    "Yasuhiro Shinsho — poetic syntax practitioner exploring reflective structure and co-creation through FragmentPractice.",
};

export default function Profile() {
  return (
    <main className="content article">
      <a href="/" className="text-sm text-gray-400 hover:text-white">← Home</a>

      <header className="text-center flow-6 mt-8 mb-8 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Profile</h1>
        <div className="flex justify-center">
          <Image src="/images/profile.png" alt="Yasuhiro Shinsho" width={160} height={160} className="rounded-full" />
        </div>
      </header>

      {/* JP summary */}
      <Section className="flow-4">
        <h2 className="text-xl font-semibold">概要（現在の活動と受け入れ状況）</h2>
        <p className="text-neutral-300">
          静けさと構文性を核にした実践 <strong className="text-neutral-200">FragmentPractice</strong> を運用。
          2025年秋〜冬は <strong>登壇・対話型セッション・ZINE編集</strong> を中心に活動し、
          <strong>AI対話設計／リサーチの軽量案件</strong> を少量受け付けています（オンライン中心・Zoom対応）。
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
          <ul className="list-disc list-inside space-y-1">
            <li>主題：問いの設計／Fragment・Syntax／AIとの関係性</li>
            <li>形式：講演、公開対話、少人数ワークショップ</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>対応：オンライン（Zoom）／首都圏・四国の現地応相談</li>
            <li>連絡：<a href="/contact">Contact</a> からご相談ください</li>
          </ul>
        </div>
      </Section>

      {/* EN body */}
      <Section className="flow-6" /* lang="en" は SSR 警告避けるなら省略可 */>
        {/* 以下、本文は元HTMLを踏襲 */}
        <p><strong className="text-neutral-300">Yasuhiro Shinsho</strong><br/>
          Steward of FragmentPractice — poetic syntax designer, systems thinker, and reflective co-creator.</p>

        <p>
          I design quiet systems for writing, sensing, and reflecting — through a framework I call
          <strong className="text-neutral-300"> FragmentPractice</strong>. It invites poetic journaling and async dialogue
          via three core layers: <strong className="text-neutral-300">Quantum</strong> (unspoken noticing),
          <strong className="text-neutral-300"> Fragment</strong> (symbolic trace), and
          <strong className="text-neutral-300"> Syntax</strong> (structural rhythm).
        </p>

        <p>
          My journey began with an early sensitivity to emotion, silence, and unspeakable questions…
        </p>

        <p>
          <strong className="text-neutral-300">FragmentBot</strong> mirrors this philosophy…
        </p>

        <p>
          Through <strong className="text-neutral-300">ZINEs</strong> — small poetic bundles — …
        </p>

        <div className="flow-4">
          <p>I’m especially drawn to questions like:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>How can syntax support attention and care?</li>
            <li>What kinds of co-authorship emerge through fragments?</li>
            <li>How can AI become a symbolic infrastructure, not a productivity tool?</li>
          </ul>
        </div>

        <p>
          If this resonates, I’m open to quiet co-creation — from poetic correspondence to shared ZINEs,
          from bot logic to syntax mapping.
        </p>

        <p className="text-sm italic text-neutral-500">
          A fragment, written well, can become a world.<br/>A structure, designed softly, can become a shared rhythm.
        </p>

        <hr className="my-8 border-t border-neutral-700" />

        <div className="text-sm text-neutral-400 flow-4">
          <p><span className="font-semibold">Corporate Note</span>：
            Fragment Practice LLC（合同会社、日本）— remote-first, based in Kagawa / Tokyo.</p>
          <p>Inquiries → <a href="/contact">Contact page</a></p>
        </div>
      </Section>

      <Section className="text-sm text-neutral-500 italic">
        <p>FragmentPractice は「静けさ」と「構文性」を核にした詩的実践のフィールドです…</p>
        <p className="text-xs text-neutral-600 mt-4">© Fragment Practice LLC</p>
      </Section>
    </main>
  );
}