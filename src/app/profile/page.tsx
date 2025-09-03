import Link from "next/link";
import Section from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <main className="content">
      <Link href="/" className="text-sm text-gray-400 hover:text-white">← Home</Link>

      <header className="text-center mt-8 flow-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Profile</h1>
        <div className="flex justify-center">
          <Image src="/images/profile.png" alt="Yasuhiro Shinsho" width={160} height={160} className="rounded-full" />
        </div>
      </header>

      {/* JP summary / availability */}
      <Section className="flow-6">
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
            <li>連絡：<Link href="/contact" className="underline">Contact</Link> からご相談ください</li>
          </ul>
        </div>
      </Section>

      {/* EN body */}
      <section className="flow-6 text-base" lang="en">
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
          My journey began with an early sensitivity to emotion, silence, and unspeakable questions. I studied computer
          science and security, worked in organizational design and learning systems, and gradually shifted toward
          creating poetic infrastructure for inner rhythm and shared reflection.
        </p>

        <p>I see syntax not merely as grammar — but as a way of being. The structure of how we speak, pause, and relate is itself a living architecture.</p>

        <p><strong className="text-neutral-300">FragmentBot</strong> mirrors this philosophy: no answers, but mirrors; tags, not solutions; an invitation to write — and write again.</p>

        <p>Through <strong className="text-neutral-300">ZINEs</strong> — small poetic bundles — I curate fragments across time and theme, forming shared compositions and constellations of presence.</p>

        <div>
          <p>I’m especially drawn to questions like:</p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>How can syntax support attention and care?</li>
            <li>What kinds of co-authorship emerge through fragments?</li>
            <li>How can AI become a symbolic infrastructure, not a productivity tool?</li>
          </ul>
        </div>

        <p>
          If this resonates, I’m quietly open to co-creation — from poetic correspondence to shared ZINEs, from bot logic to syntax mapping.
        </p>

        <p className="text-sm italic text-neutral-500">
          A fragment, written well, can become a world.<br/>A structure, designed softly, can become a shared rhythm.
        </p>

        <hr className="my-10 border-t border-neutral-700" />

        <div className="text-sm text-neutral-400">
          <p className="mb-2"><span className="font-semibold">Corporate Note</span>：Fragment Practice LLC（合同会社、日本）— remote-first, based in Kagawa / Tokyo.</p>
          <p>Inquiries → <Link href="/contact" className="underline">Contact page</Link></p>
        </div>
      </section>
    </main>
  );
}