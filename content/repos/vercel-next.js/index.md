---
title: vercel/next.js
updated: 2026-10-30
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.2|v16.4.2]]、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.32](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.32)（2026-10-29）

## 直近の注目変更

- create-next-app が App Router の質問をやめ、常に App Router を使う（Pages Router は `--no-app`）（[#100850](https://github.com/vercel/next.js/pull/100850)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/create-next-app|create-next-app]]
- ルートハンドラー・キャッシュ済みレスポンス・重複排除された fetch で 204 が固まる・落ちる問題を修正（[#100159](https://github.com/vercel/next.js/pull/100159)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- adapter: 再検証のある `robots.ts` / `sitemap.ts` をプリレンダーとして出力（[#100861](https://github.com/vercel/next.js/pull/100861)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- エラーオーバーレイを HMR の `sync` を待たずに表示（[#100629](https://github.com/vercel/next.js/pull/100629)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- Turbopack: 末尾スラッシュ付きのパッケージルートの解決を修正（[#100726](https://github.com/vercel/next.js/pull/100726)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `experimental.hydrationChangeEvent` フラグを追加（`react@experimental` を使う）（[#99610](https://github.com/vercel/next.js/pull/99610)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- `export const foo = function bar(){}` の Server Actions の変換を修正（[#100830](https://github.com/vercel/next.js/pull/100830)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/Server-Actions|Server Actions]]
- Node.js 26 対応で `jsonwebtoken` を `fast-jwt` に置き換え（[#100818](https://github.com/vercel/next.js/pull/100818)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/Node.js-対応|Node.js 対応]]
- Turbopack: 「不明な値か既知のファイル」の読み込みでプロジェクト全体をトレースしない（[#100651](https://github.com/vercel/next.js/pull/100651)）📦 v16.5.0-canary.32 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Agent Feedback のレポートを渡す内部 CLI `next internal agent-feedback`（URL を必ず出力）（[#100739](https://github.com/vercel/next.js/pull/100739)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]

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
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-30|2026-10-30]]、[[repos/vercel-next.js/changes/2026-10-28|2026-10-28]]、[[repos/vercel-next.js/changes/2026-10-26|2026-10-26]]、[[repos/vercel-next.js/changes/2026-10-23|2026-10-23]]、[[repos/vercel-next.js/changes/2026-10-21|2026-10-21]]
