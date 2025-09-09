// src/app/story/page.tsx (Story – 全体修正版)
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story",
  description: "Fragment Practice の歩みとブランドストーリー。瀬戸内・高松から世界へ、生活と研究を往復しながら静かな仕組みを設計します。",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Fragment Practice — Story",
    description:
      "瀬戸内・高松から世界へ。AI・言語・編集を横断し、静けさと構文性を土台に“象徴的インフラ”を設計する歩み。",
    url: "https://fragmentpractice.com/story",
    type: "article",
  },
};

export default function StoryPage() {
  return (
    <div className="fp-container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left", paddingTop: 48, paddingBottom: 24 }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Story</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 720 }}>
          Fragment Practice 合同会社の歩みとブランドストーリー。瀬戸内・高松から世界へ。
          生活と研究を往復しながら、人間的な営みを静かに探究していきます。
        </p>
      </section>

      {/* Roots */}
      <section className="fp-section" aria-labelledby="roots" style={{ paddingTop: 32 }}>
        <h2 id="roots" className="h2" style={{ marginBottom: 12 }}>瀬戸内から始まる軌跡</h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice の物語は、香川県・瀬戸内に根を持ちます。行き交う船と水面のゆらぎを日常に見て育ち、
          「人生を進めることは船旅に似ている」という感覚が自然と育ちました。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 0 }}>
          幼い頃から静けさや言葉にならない気配に敏感だったこと。その感性はやがて
          <strong> Computer Science / Security </strong>への関心と結びつき、組織設計やラーニングシステムの実務を経て、
          <em>「人の内的リズムに寄り添う、詩的なインフラ」</em> を構想する基盤になりました。
        </p>
      </section>

      {/* Company Vision */}
      <section className="fp-section" aria-labelledby="vision" style={{ paddingTop: 40 }}>
        <h2 id="vision" className="h2" style={{ marginBottom: 12 }}>Fragment Practice という法人</h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          Fragment Practice 合同会社は、<strong>AI・言語・文化の実験</strong>を核に活動します。
          研究・出版（ZINE）・国際登壇や共創を通じて、社会に新しい仕組みと表現を提案します。
        </p>
        <ul style={{ marginTop: 8, paddingLeft: 18, maxWidth: 720 }}>
          <li>AI と構文の実験：対話構造の設計と軽量実装</li>
          <li>編集と出版（ZINE）：断片を編み、思考の星座を共有</li>
          <li>共創プロジェクト：国内外パートナーと価値の検証・展開</li>
        </ul>
        <p style={{ maxWidth: 840, marginTop: 16 }}>
          私たちの使命は技術を目的化せず、<strong>「人間的な営みとは何か」</strong>を問い続けること。
          CS/セキュリティの厳密さと詩的実践のやわらかさを同じ器で扱い、技術を
          <em>「関係を整えるためのインフラ」</em>として設計します。
        </p>
      </section>

      {/* Closing / CTA */}
      <section className="fp-section" aria-labelledby="closing" style={{ paddingTop: 40 }}>
        <h2 id="closing" className="h2" style={{ marginBottom: 12 }}>高松から、世界へ</h2>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          私たちは AI を“便利さ”のためだけに使いません。静けさと構文性を土台に、注意・関係・編集を支える
          <strong> 象徴的インフラ</strong>を研究し、実装し、社会に還元します。
        </p>
        <p style={{ maxWidth: 840, marginBottom: 16 }}>
          瀬戸内の視座を忘れずに、国際的な共創と文化の実践を積み重ねます。
          プロトタイプ、ZINE、公開対話といった成果物を通じ、「生活と研究の往復」から静かな仕組みを届けていきます。
        </p>
        <p style={{ maxWidth: 840, color: "var(--muted)" }}>
          ※ 本ページは理念共有を目的としており、検索インデックスの対象外です。協働や対話のご相談は、必要に応じて静かに受け付けています。
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/zine" className="cta" aria-label="ZINE へ">ZINE を見る</Link>
          <Link href="/work" className="cta" aria-label="Work へ">登壇・共創を見る</Link>
        </div>
      </section>

      {/* Related */}
      <section className="fp-section" aria-labelledby="related" style={{ paddingTop: 24 }}>
        <h2 id="related" className="h2" style={{ marginBottom: 16 }}>関連ページ</h2>
        <div className="linkcards">
          <Link className="linkcard" href="/about">
            <h3 className="h3">About</h3>
            <p>代表／理念／活動領域</p>
          </Link>
          <Link className="linkcard" href="/work">
            <h3 className="h3">Work</h3>
            <p>提供メニュー・進め方</p>
          </Link>
          <Link className="linkcard" href="/company">
            <h3 className="h3">Company</h3>
            <p>会社概要・公的情報</p>
          </Link>
          <Link className="linkcard" href="/press">
            <h3 className="h3">Press / Media</h3>
            <p>取材・掲載のご案内</p>
          </Link>
          <Link className="linkcard" href="/trust">
            <h3 className="h3">Trust</h3>
            <p>信頼・セキュリティ運用</p>
          </Link>
        </div>
      </section>
    </div>
  );
}