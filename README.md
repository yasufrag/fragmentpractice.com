Fragment Practice 企業サイト（リポジトリ用 README）

このリポジトリは Fragment Practice 合同会社 の公式サイトのソースコードを管理するためのものです。
通常の閲覧は 公開サイト をご利用ください。本READMEは主に GitHubでの開発・運用管理用 です。

⸻

プロジェクト情報
	•	フレームワーク: Next.js (App Router)
	•	言語: TypeScript
	•	デプロイ: Vercel
	•	フォント: next/font (Geist)

⸻

開発環境

要件
	•	Node.js 20+
	•	パッケージマネージャー（npm / yarn / pnpm / bun）

セットアップ

npm install
npm run dev
# http://localhost:3000 で起動

本番ビルド

npm run build
npm run start


⸻

ディレクトリ構成（例）

app/
  layout.tsx
  page.tsx           # トップページ
  company/page.tsx   # 会社概要
  works/page.tsx     # プロジェクト・ZINE
  talks/page.tsx     # 登壇・イベント
  contact/page.tsx   # お問い合わせ
components/
lib/
public/
styles/


⸻

運用メモ
	•	デプロイは Vercel で自動（main ブランチをProduction）
	•	プレビューURLは PR ごとに発行
	•	コンテンツ更新は PRベースで進める
	•	依存関係のセキュリティ更新は月1回を目安

⸻

会社情報（参考）
	•	社名: Fragment Practice合同会社
	•	法人番号: 7470003002956
	•	所在地: 〒760-0018 香川県高松市天神前10-5 高松セントラルスカイビルディング 3F south
	•	代表: 新庄 泰大 (Yasuhiro Shinsho)
	•	連絡先: yasuhiro@fragmentpractice.com

⸻

ライセンス

Copyright © Fragment Practice 合同会社. All rights reserved.