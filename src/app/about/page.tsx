import Section from "@/components/Section";
import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="content">
      <Link href="/" className="text-sm text-gray-400 hover:text-white">← Home</Link>

      <header className="mt-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
        <p className="text-neutral-300 mt-3">商号：Fragment Practice合同会社（Fragment Practice LLC）</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 text-neutral-300">
        <div>
          <h2 className="text-xl text-white mb-2">基本情報</h2>
          <div className="flow-4">
            <p>代表者：新庄 泰大</p>
            <p>所在地：香川県高松市天神前10-5 高松セントラルスカイビルディング 3F south</p>
            <p>設立：2025年</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl text-white mb-2">提供領域</h2>
          <div className="flow-4">
            <p>登壇・講演／公開対話の設計</p>
            <p>ZINE・出版（写真／言葉／対話の編集）</p>
            <p>AI対話設計・軽量リサーチ（関係性設計・プロトタイピング）</p>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">思想と姿勢（Brief）</h2>
        <p className="text-neutral-300">
          FragmentPractice は「静けさ」と「構文性」を核に、Quantum / Fragment / Syntax の三層で
          生活と実務を編み直す実践です。生産性ではなく「注意・関係・編集」を扱います。
        </p>
        <p className="text-neutral-400 text-sm">お問い合わせ：<Link href="/contact" className="underline">Contact</Link></p>
      </Section>
    </main>
  );
}