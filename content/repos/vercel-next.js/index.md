---
title: vercel/next.js
updated: 2026-11-11
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.6](https://github.com/vercel/next.js/releases/tag/v16.4.6)（2026-11-10、バックポートの修正）→ [[repos/vercel-next.js/releases/v16.4.6|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.5|v16.4.5]]、v15 系: [[repos/vercel-next.js/releases/v15.5.29|v15.5.29]]）
- プレリリース: [v16.5.0-canary.47](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.47)（2026-11-11）

## 直近の注目変更

- `next build --experimental-cpu-prof` が静的ワーカーの CPU プロファイルも書き出す（[#100614](https://github.com/vercel/next.js/pull/100614)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 静的から partial に再生成されたルートで、デプロイ先の RSC の応答が空になる問題を修正（[#101454](https://github.com/vercel/next.js/pull/101454)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- バックグラウンドのプリレンダーが表の応答のステータスを変えないように（[#101295](https://github.com/vercel/next.js/pull/101295)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- ルートの予測で並列ルートの params を URL から解決（[#101477](https://github.com/vercel/next.js/pull/101477)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- Turbopack: `CellKey` の小型化でタスクのストレージを削減、ID・ハッシュを固定長でエンコード（[#101393](https://github.com/vercel/next.js/pull/101393)、[#101419](https://github.com/vercel/next.js/pull/101419)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `next/image` の歪みの警告を画像本来の縦横比で判定（[#101349](https://github.com/vercel/next.js/pull/101349)）📦 v16.5.0-canary.47 · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]
- Turbopack: `new URL()` で `turbopackIgnore` に対応（実行時に解決する URL を指定できる）（[#99965](https://github.com/vercel/next.js/pull/99965)）📦 v16.5.0-canary.45 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack のメモリ削減（`AstPathTrie` の小型化で 701 MiB → 269 MiB、タスクのストレージの容量の解放）（[#101370](https://github.com/vercel/next.js/pull/101370)、[#101344](https://github.com/vercel/next.js/pull/101344)）📦 v16.5.0-canary.45 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Cache Components で、プリレンダーした `Link` ヘッダーが再検証のたびに増える問題を修正（[#100960](https://github.com/vercel/next.js/pull/100960)）📦 v16.5.0-canary.45 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack: Pages Router でページの re-export の編集が HMR に反映されない問題を修正（[#101152](https://github.com/vercel/next.js/pull/101152)）📦 v16.5.0-canary.45 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/create-next-app|create-next-app]] — 新規アプリ作成 CLI の質問・既定値（常に App Router）
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint・TypeScript の対応バージョン
- [[repos/vercel-next.js/topics/next-config|next.config]] — `next.config` の読み込み・正規化（`loadConfig`）
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Node.js-対応|Node.js 対応]] — Node.js のバージョンとの互換性（Node.js 26 など）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）・`instrumentationInject`
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform` の公開 API・リダイレクトの追跡）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テストモード|テストモード]] — 実験的なテストモード（同梱の `@mswjs/interceptors`・`experimental.testProxy`）
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・チャンク化の設定・バンドルアナライザー・トレースツール・CPU プロファイル・turbo-tasks の GC とメモリ
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み・`global-not-found` からの遷移・`router.experimental_prepare()`・`route.go`（実験）
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・experimental 版 React の選択・Instant Navigation のエラー案内・ターミナルのコードフレーム・Request Insights

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-11-11|2026-11-11]]、[[repos/vercel-next.js/changes/2026-11-09|2026-11-09]]、[[repos/vercel-next.js/changes/2026-11-06|2026-11-06]]、[[repos/vercel-next.js/changes/2026-11-04|2026-11-04]]、[[repos/vercel-next.js/changes/2026-11-02|2026-11-02]]
