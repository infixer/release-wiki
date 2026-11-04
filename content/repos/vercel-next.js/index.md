---
title: vercel/next.js
updated: 2026-11-04
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.5](https://github.com/vercel/next.js/releases/tag/v16.4.5)（2026-11-03、セキュリティ修正）→ [[repos/vercel-next.js/releases/v16.4.5|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.4|v16.4.4]]、v15 系: [[repos/vercel-next.js/releases/v15.5.29|v15.5.29]]）
- プレリリース: [v16.5.0-canary.40](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.40)（2026-11-03）

## 直近の注目変更

- `instrumentationInject` で、アダプターや設定ラッパーが instrumentation を差し込めるように（[#100658](https://github.com/vercel/next.js/pull/100658)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]]
- App Router の `route.go` ハンドラー（実験、`experimental.goRoutes`）（[#100130](https://github.com/vercel/next.js/pull/100130)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- 外側の `'use cache'` のエントリが root params の値をまたいで再利用される問題を修正（[#101103](https://github.com/vercel/next.js/pull/101103)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- `fetch` と `unstable_cache` のブロッキング再検証での 500 を修正（[#101077](https://github.com/vercel/next.js/pull/101077)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack: ローダールールの `as` で CSS Modules が壊れる問題を修正（[#101065](https://github.com/vercel/next.js/pull/101065)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: レイアウトの初期クライアントチャンクに無関係なページのコードが混ざる問題を修正（[#101040](https://github.com/vercel/next.js/pull/101040)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- create-next-app: Tailwind を 4.3.3 に固定（古い Node.js でのビルド失敗を回避）（[#101061](https://github.com/vercel/next.js/pull/101061)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/create-next-app|create-next-app]]
- `router.experimental_prepare()` を追加（[#101050](https://github.com/vercel/next.js/pull/101050)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- React の外部ブラウザーランタイムを使う `experimental.externalBrowserRuntime`（CSP の `unsafe-inline` 削減）（[#97570](https://github.com/vercel/next.js/pull/97570)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- Turbopack: `experimental.turbopackMinifyBeforeChunking` でモジュール単位の minify（[#98760](https://github.com/vercel/next.js/pull/98760)）📦 v16.5.0-canary.40 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/create-next-app|create-next-app]] — 新規アプリ作成 CLI の質問・既定値（常に App Router）
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-config|next.config]] — `next.config` の読み込み・正規化（`loadConfig`）
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Node.js-対応|Node.js 対応]] — Node.js のバージョンとの互換性（Node.js 26 など）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）・`instrumentationInject`
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform`）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テストモード|テストモード]] — 実験的なテストモード（同梱の `@mswjs/interceptors`・`experimental.testProxy`）
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・チャンク化の設定・バンドルアナライザー・トレースツール・turbo-tasks の GC
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み・`global-not-found` からの遷移・`router.experimental_prepare()`・`route.go`（実験）
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・experimental 版 React の選択・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-11-04|2026-11-04]]、[[repos/vercel-next.js/changes/2026-11-02|2026-11-02]]、[[repos/vercel-next.js/changes/2026-10-30|2026-10-30]]、[[repos/vercel-next.js/changes/2026-10-28|2026-10-28]]、[[repos/vercel-next.js/changes/2026-10-26|2026-10-26]]
