---
title: vercel/next.js
updated: 2026-10-07
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.8](https://github.com/vercel/next.js/releases/tag/v16.3.8)（2026-10-01、セキュリティ修正）→ [[repos/vercel-next.js/releases/v16.3.8|まとめ]]（v15 系: [[repos/vercel-next.js/releases/v15.5.27|v15.5.27]]）
- プレリリース: [v16.5.0-canary.1](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.1)（2026-10-07）

## 直近の注目変更

- `forbidden()` / `unauthorized()` の安定化と、その取り消し（[#99689](https://github.com/vercel/next.js/pull/99689)、[#99734](https://github.com/vercel/next.js/pull/99734)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- `prefetch()` / `navigation()` の Instant Insights を追加（[#97801](https://github.com/vercel/next.js/pull/97801)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- `next analyze --export-graph` でアナライザーのグラフを JSON Lines で出力（[#99387](https://github.com/vercel/next.js/pull/99387)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `eslint-config-next` が ESLint 10 に対応（[#99628](https://github.com/vercel/next.js/pull/99628)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/ESLint|ESLint]]
- `'use cache'` の root params の依存をビルド時に収集（`experimental.useCacheStaticRootParamTracking`）（[#99274](https://github.com/vercel/next.js/pull/99274)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- アップグレードのプロンプト表示中も `next dev` / `next build` を止めない（[#99702](https://github.com/vercel/next.js/pull/99702)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- ESM エクスポートのプロトコル変更（#98932）を revert（[#99704](https://github.com/vercel/next.js/pull/99704)）📦 v16.5.0-canary.1 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: `next/font/google` のフォントファイル取得の失敗をそのまま報告（[#99574](https://github.com/vercel/next.js/pull/99574)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/next-font|next/font]]
- アップグレード関連の用語を「Agent」に統一し、`--ai` を `--agent` に（[#99545](https://github.com/vercel/next.js/pull/99545)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- シャロー URL 更新でクライアントの `params` がサスペンドしないよう修正（[#99611](https://github.com/vercel/next.js/pull/99611)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI・バンドルアナライザー
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路・開発オーバーレイ・Instant Navigation のエラー案内

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-07|2026-10-07]]、[[repos/vercel-next.js/changes/2026-10-05|2026-10-05]]、[[repos/vercel-next.js/changes/2026-10-02|2026-10-02]]、[[repos/vercel-next.js/changes/2026-09-30|2026-09-30]]、[[repos/vercel-next.js/changes/2026-09-28|2026-09-28]]
