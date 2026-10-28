---
title: vercel/next.js
updated: 2026-10-28
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.2|v16.4.2]]、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.29](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.29)（2026-10-27）

## 直近の注目変更

- Agent Feedback のレポートを渡す内部 CLI `next internal agent-feedback`（URL を必ず出力）（[#100739](https://github.com/vercel/next.js/pull/100739)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- Docker 環境でも暗号化キー・プレビューキー・DevTools のワークスペース ID を `.next/cache` に永続化（[#100790](https://github.com/vercel/next.js/pull/100790)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/Server-Actions|Server Actions]]
- Turbopack: pnpm 11 以降の GVS を自動検出して追加のルートを設定（フラグの裏側）（[#99758](https://github.com/vercel/next.js/pull/99758)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 完全に静的な PPR のページの RSC ペイロードを FileSystemCache に保存（再起動後も再利用）（[#100759](https://github.com/vercel/next.js/pull/100759)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- FileSystemCache の時刻をモノトニッククロックに（壁時計のずれで `revalidateTag` 後も古いページが返る問題を修正）（[#100357](https://github.com/vercel/next.js/pull/100357)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- turbo-tasks: ID 型を固定長でエンコード（キャッシュ −3.8%）（[#100764](https://github.com/vercel/next.js/pull/100764)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- MPA の Server Actions の後に完全な HTML ドキュメントを描画（Cache Components）（[#100740](https://github.com/vercel/next.js/pull/100740)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/Server-Actions|Server Actions]]
- Turbopack: `experimental.turbopackChunking` に `minServerChunkSize` / `maxMergeServerChunkSize` を追加（[#100712](https://github.com/vercel/next.js/pull/100712)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack の webpack ローダーで `fs.stat` が使えるように（[#100272](https://github.com/vercel/next.js/pull/100272)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 静的生成のバッチごとに自分の RDC のシードだけを送り、`RangeError: Invalid string length` を回避（[#100048](https://github.com/vercel/next.js/pull/100048)）📦 v16.5.0-canary.29 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform`）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テストモード|テストモード]] — 実験的なテストモード（同梱の `@mswjs/interceptors`・`experimental.testProxy`）
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・チャンク化の設定・バンドルアナライザー・トレースツール・turbo-tasks の GC
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み・`global-not-found` からの遷移
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-28|2026-10-28]]、[[repos/vercel-next.js/changes/2026-10-26|2026-10-26]]、[[repos/vercel-next.js/changes/2026-10-23|2026-10-23]]、[[repos/vercel-next.js/changes/2026-10-21|2026-10-21]]、[[repos/vercel-next.js/changes/2026-10-19|2026-10-19]]
