import Section from "@/components/Section";

export const metadata = {
  title: "About | Fragment Practice合同会社",
  description: "Fragment Practice合同会社の概要。所在地・事業内容・提供領域。",
};

export default function About() {
  return (
    <main className="content article">
      <a href="/" className="text-sm text-gray-400 hover:text-white">← Home</a>
      <header className="mt-8 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
      </header>

      <p className="text-neutral-300 mb-6">商号：Fragment Practice合同会社（Fragment Practice LLC）</p>

      <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
        <div>
          <h2 className="font-semibold text-white text-xl mb-2">基本情報</h2>
          <div className="space-y-2">
            <p>代表者：新庄 泰大</p>
            <p>所在地：香川県高松市天神前10-5 高松セントラルスカイビルディング 3F south</p>
            <p>設立：2025年</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-white text-xl mb-2">提供領域</h2>
          <div className="space-y-2">
            <p>登壇・講演／公開対話の設計</p>
            <p>ZINE・出版（写真／言葉／対話の編集）</p>
            <p>AI対話設計・軽量リサーチ（関係性設計・プロトタイピング）</p>
          </div>
        </div>
      </div>

      <Section className="space-y-3 text-neutral-300">
        <h2 className="text-2xl font-semibold">思想と姿勢（Brief）</h2>
        <p>
          FragmentPractice は「静けさ」と「構文性」を核に、Quantum / Fragment / Syntax の三層で
          生活と実務を編み直す実践です。生産性ではなく「注意・関係・編集」を扱います。
        </p>
      </Section>

      <Section className="text-neutral-400 text-sm">
        お問い合わせ：<a href="/contact" className="underline">Contact</a>（オンライン中心・Zoom対応）
      </Section>
    </main>
  );
}