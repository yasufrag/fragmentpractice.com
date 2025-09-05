// app/work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Fragment Practice の提供領域・進め方・基本方針",
};

export default function WorkPage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero" style={{ textAlign: "left" }}>
        <h1 className="h1" style={{ marginTop: 16 }}>Work</h1>
        <p className="lead" style={{ marginTop: 8, maxWidth: 760 }}>
          AI・言語・編集を横断し、実務と研究を往復させながら
          <strong>「注意・関係・編集」</strong>を支える仕組みを設計・実装・検証します。
          現時点ではスモールスタートと限定的な共創を基本とします。
        </p>
      </section>

      {/* 提供内容 */}
      <section className="section" aria-labelledby="services">
        <h2 id="services" className="h2" style={{ marginBottom: 12 }}>提供内容（Services）</h2>
        <div className="grid">
          <div className="card">
            <div className="title">対話構造の設計（AI × Syntax）</div>
            <p className="meta">会話体験／プロトタイプ／軽量評価</p>
            <ul className="list-check">
              <li>対話構文の設計（プロンプト設計／状態遷移／記録設計）</li>
              <li>軽量リサーチ：仮説→小実装→観察→補正の高速ループ</li>
              <li>PoC支援：要件の圧縮・比較軸の設定・最小化</li>
            </ul>
          </div>

          <div className="card">
            <div className="title">編集と出版（ZINE / Docs）</div>
            <p className="meta">断片編集／ナレッジ整理／簡易レイアウト</p>
            <ul className="list-check">
              <li>断片（メモ／会話ログ）の編集と要約の方針設計</li>
              <li>ZINE下地の構成案・試し刷り用テキスト整形</li>
              <li>ドキュメントの読み心地設計（構文・見出し・導線）</li>
            </ul>
          </div>

          <div className="card">
            <div className="title">公開対話・登壇の設計</div>
            <p className="meta">専門家向け／一般向けの構成差分</p>
            <ul className="list-check">
              <li>テーマ骨子とメッセージレイヤの整理</li>
              <li>“物語寄り”と“技術寄り”の二系統スライド作法</li>
              <li>簡易デモ方針（安全域の見極め／ノーリスク運用）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関わり方 */}
      <section className="section" aria-labelledby="engagement">
        <h2 id="engagement" className="h2" style={{ marginBottom: 12 }}>関わり方（Engagement Models）</h2>
        <div className="table-pricing" role="table" aria-label="関わり方の比較">
          <div className="trow trow--head" role="row">
            <div className="tcell" role="columnheader">モデル</div>
            <div className="tcell" role="columnheader">概要</div>
            <div className="tcell" role="columnheader">適合する場面</div>
          </div>
          <div className="trow" role="row">
            <div className="tcell" role="cell"><span className="badge">Spot</span></div>
            <div className="tcell" role="cell">1–2 週間の短期伴走。仮説圧縮と最小プロトタイプ作成。</div>
            <div className="tcell" role="cell">まず動くものを見たい／方針の是非を早く判断したい</div>
          </div>
          <div className="trow" role="row">
            <div className="tcell" role="cell"><span className="badge">Sprint</span></div>
            <div className="tcell" role="cell">3–6 週間の検証。実装→観察→補正の反復で合意形成。</div>
            <div className="tcell" role="cell">小規模PoC／登壇前の内容固め／公開前の安全確認</div>
          </div>
          <div className="trow" role="row">
            <div className="tcell" role="cell"><span className="badge">Continuous</span></div>
            <div className="tcell" role="cell">月次の安定伴走。更新設計・編集基盤の保守と改善。</div>
            <div className="tcell" role="cell">小さく始めて、必要なところだけ厚みをつけたい</div>
          </div>
        </div>
        <p className="muted" style={{ marginTop: 8 }}>
          ※ 現時点ではキャパシティの都合で少数案件のみお受けしています。
        </p>
      </section>

      {/* 進め方 */}
      <section className="section" aria-labelledby="process">
        <h2 id="process" className="h2" style={{ marginBottom: 12 }}>進め方（Process）</h2>
        <ol className="list-steps">
          <li><strong>Intake：</strong>目的・制約・公開範囲を共有。安全域の仮説を言語化。</li>
          <li><strong>Sketch：</strong>比較軸を設定し、最小の選択肢（2–3案）へ圧縮。</li>
          <li><strong>Prototype：</strong>小実装／小編集。評価指標は「読み心地・再現性・リスク」。</li>
          <li><strong>Observe：</strong>短い観察とヒアリング。事実ベースで補正。</li>
          <li><strong>Decide：</strong>維持・拡張・撤退の三択で軽く意思決定。</li>
        </ol>
      </section>

      {/* 事例の型（匿名・抽象） */}
      <section className="section" aria-labelledby="cases">
        <h2 id="cases" className="h2" style={{ marginBottom: 12 }}>事例の型（匿名）</h2>
        <div className="grid">
          <div className="card">
            <div className="title">社内向けAI対話の整流</div>
            <p className="meta">構文設計／評価観点の定義／安全域の設計</p>
            <p>
              ナレッジ断片の取り回しを見直し、メタデータと対話遷移を最小化。
              「答える」のではなく「問いを整える」方針へ転換。
            </p>
          </div>
          <div className="card">
            <div className="title">登壇資料の二系統設計</div>
            <p className="meta">専門家版と一般版の差分運用</p>
            <p>
              論点マップを共通化し、深度と語彙だけを差分管理。公開時のノーリスク運用を設計。
            </p>
          </div>
          <div className="card">
            <div className="title">断片編集 → ZINE 下地</div>
            <p className="meta">対話ログ編集／小冊子の骨格づくり</p>
            <p>
              断片の編集ルールを定義し、反復で束ねる手順書を作成。小部数・PDF両対応。
            </p>
          </div>
        </div>
      </section>

      {/* 登壇・研究 */}
      <section className="section" aria-labelledby="speaking">
        <h2 id="speaking" className="h2" style={{ marginBottom: 12 }}>登壇・研究（Speaking / Research）</h2>
        <ul className="list-check">
          <li>専門家向け：構文設計・評価・運用の実装知見（個人史は最小限）</li>
          <li>一般向け：物語要素を加え、理解の起点をつくる（安全域優先）</li>
          <li>公開方針：登壇前後での発信は最小限。資料の公開は個別判断。</li>
        </ul>
        <p className="muted" style={{ marginTop: 8 }}>
          ご依頼はテーマ・目的・公開範囲（社内限定／一般公開）をご提示ください。
        </p>
      </section>

      {/* 基本方針 */}
      <section className="section" aria-labelledby="policy">
        <h2 id="policy" className="h2" style={{ marginBottom: 12 }}>基本方針（Policies）</h2>
        <ul className="list-dot">
          <li>技術は目的ではなく<strong>象徴的インフラ</strong>：関係・注意・編集を支える器として扱います。</li>
          <li>安全優先：個人情報・機微情報の扱いは最小限。公開は段階的に。</li>
          <li>小さく始める：短いループで観察し、必要なところだけ厚くします。</li>
          <li>透明性：できること／できないことを明確にし、無理はしません。</li>
        </ul>
        <div style={{ marginTop: 14 }}>
          <Link href="/contact" className="cta">Contact</Link>
        </div>
      </section>
    </div>
  );
}