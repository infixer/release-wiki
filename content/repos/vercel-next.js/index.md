---
title: vercel/next.js
updated: 2026-11-13
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.6](https://github.com/vercel/next.js/releases/tag/v16.4.6)（2026-11-10、バックポートの修正）→ [[repos/vercel-next.js/releases/v16.4.6|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.5|v16.4.5]]、v15 系: [[repos/vercel-next.js/releases/v15.5.29|v15.5.29]]）
- プレリリース: [v16.5.0-canary.49](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.49)（2026-11-13）

## 直近の注目変更

- turbo-tasks のタスク統計に実行回数 `executions` を追加（[#101025](https://github.com/vercel/next.js/pull/101025)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack のビルドキャッシュをプロジェクトの移動後も使えるように（移植性の e2e テストと場所に依存するタスクの修正）（[#100780](https://github.com/vercel/next.js/pull/100780)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack のスケーリング: Linux でディスクの書き込みの並列数を拡大、スタイルのグループの早期計算、ローダーツリーの O(N²) の解消、集約のグラフの組み直しの回避（[#101519](https://github.com/vercel/next.js/pull/101519)、[#101612](https://github.com/vercel/next.js/pull/101612)、[#101535](https://github.com/vercel/next.js/pull/101535)、[#101604](https://github.com/vercel/next.js/pull/101604)、[#101614](https://github.com/vercel/next.js/pull/101614)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack のメモリ削減（解析器の arena で約 -20%、終了直後のメモリの返却、アクティブ数のインライン化）（[#101480](https://github.com/vercel/next.js/pull/101480)、[#101529](https://github.com/vercel/next.js/pull/101529)、[#101486](https://github.com/vercel/next.js/pull/101486)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- immediate を await するルートハンドラーもプリレンダーされるように（[#101593](https://github.com/vercel/next.js/pull/101593)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- `--debug-prerender` での `ImageResponse` のプリレンダーを修正（[#101678](https://github.com/vercel/next.js/pull/101678)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/next-og|next/og]]
- `next dev` の終了後にテレメトリの送信プロセスが残る問題を修正（[#101588](https://github.com/vercel/next.js/pull/101588)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]]
- ESLint の `no-html-link-for-pages` が定数・`.map()` の href も報告（[#101641](https://github.com/vercel/next.js/pull/101641)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/ESLint|ESLint]]
- create-next-app が依存のインストールの失敗時に終了コード 1 で終わる（[#101624](https://github.com/vercel/next.js/pull/101624)）📦 v16.5.0-canary.49 · トピック: [[repos/vercel-next.js/topics/create-next-app|create-next-app]]
- `next build --experimental-cpu-prof` が静的ワーカーの CPU プロファイルも書き出す（[#100614](https://github.com/vercel/next.js/pull/100614)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/create-next-app|create-next-app]] — 新規アプリ作成 CLI の質問・既定値（常に App Router）
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint・TypeScript の対応バージョン、`no-html-link-for-pages` などのルール
- [[repos/vercel-next.js/topics/next-config|next.config]] — `next.config` の読み込み・正規化（`loadConfig`）
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Node.js-対応|Node.js 対応]] — Node.js のバージョンとの互換性（Node.js 26 など）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）・`instrumentationInject`
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform` の公開 API・リダイレクトの追跡）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テストモード|テストモード]] — 実験的なテストモード（同梱の `@mswjs/interceptors`・`experimental.testProxy`）
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理（切り離された送信プロセスを含む）
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・チャンク化の設定・バンドルアナライザー・トレースツール・CPU プロファイル・turbo-tasks の GC とメモリ・タスク統計・ビルドキャッシュの移植性
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み・`global-not-found` からの遷移・`router.experimental_prepare()`・`route.go`（実験）
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・experimental 版 React の選択・Instant Navigation のエラー案内・ターミナルのコードフレーム・Request Insights

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-11-13|2026-11-13]]、[[repos/vercel-next.js/changes/2026-11-11|2026-11-11]]、[[repos/vercel-next.js/changes/2026-11-09|2026-11-09]]、[[repos/vercel-next.js/changes/2026-11-06|2026-11-06]]、[[repos/vercel-next.js/changes/2026-11-04|2026-11-04]]
