---
title: vercel/next.js
updated: 2026-11-02
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.2|v16.4.2]]、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.36](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.36)（2026-10-31）

## 直近の注目変更

- `'use cache'` のエラーをページが catch してもプリレンダリングが失敗する問題を修正（[#100956](https://github.com/vercel/next.js/pull/100956)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- 複製したレスポンスの後片付けでの未処理の reject（プロセス終了の恐れ）を修正（[#100961](https://github.com/vercel/next.js/pull/100961)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Pages の i18n と併用したときの App Router のロケール付きパスのマッチの修正を再適用（[#98726](https://github.com/vercel/next.js/pull/98726)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- Turbopack: 遅延 dynamic import でのチャンクグループの panic を修正（[#100928](https://github.com/vercel/next.js/pull/100928)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: チャンクグループの不整合を panic ではなくエラーとして報告（[#100923](https://github.com/vercel/next.js/pull/100923)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: モジュールごとのデータをモジュールグラフの構築時に 1 回だけ取得（ビルドの高速化）（[#94842](https://github.com/vercel/next.js/pull/94842)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: App Router だけのビルドで Pages のクライアントエントリーを追加しない（[#100896](https://github.com/vercel/next.js/pull/100896)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- ソースマップが無効なときは error inspection を差し替えない（[#93364](https://github.com/vercel/next.js/pull/93364)）📦 v16.5.0-canary.36 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- create-next-app が App Router の質問をやめ、常に App Router を使う（Pages Router は `--no-app`）（[#100850](https://github.com/vercel/next.js/pull/100850)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/create-next-app|create-next-app]]
- ルートハンドラー・キャッシュ済みレスポンス・重複排除された fetch で 204 が固まる・落ちる問題を修正（[#100159](https://github.com/vercel/next.js/pull/100159)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/create-next-app|create-next-app]] — 新規アプリ作成 CLI の質問・既定値（常に App Router）
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Node.js-対応|Node.js 対応]] — Node.js のバージョンとの互換性（Node.js 26 など）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform`）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テストモード|テストモード]] — 実験的なテストモード（同梱の `@mswjs/interceptors`・`experimental.testProxy`）
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・チャンク化の設定・バンドルアナライザー・トレースツール・turbo-tasks の GC
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み・`global-not-found` からの遷移
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・experimental 版 React の選択・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-11-02|2026-11-02]]、[[repos/vercel-next.js/changes/2026-10-30|2026-10-30]]、[[repos/vercel-next.js/changes/2026-10-28|2026-10-28]]、[[repos/vercel-next.js/changes/2026-10-26|2026-10-26]]、[[repos/vercel-next.js/changes/2026-10-23|2026-10-23]]
