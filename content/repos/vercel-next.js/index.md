---
title: vercel/next.js
updated: 2026-10-12
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.0](https://github.com/vercel/next.js/releases/tag/v16.4.0)（2026-10-07）→ [[repos/vercel-next.js/releases/v16.4.0|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.3.8|v16.3.8]]、v15 系: [[repos/vercel-next.js/releases/v15.5.27|v15.5.27]]）
- プレリリース: [v16.5.0-canary.8](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.8)（2026-10-10）

## 直近の注目変更

- `next dev` / `next build` の `--custom-webpack` を再投入（アプリにインストールした webpack を使う）（[#99234](https://github.com/vercel/next.js/pull/99234)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 画像最適化の変換処理を `next/image-optimizer-transform` として公開（[#99312](https://github.com/vercel/next.js/pull/99312)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]
- canary で Turbopack の GC を既定で有効に、GC と永続キャッシュ併用時の panic を修正（[#99596](https://github.com/vercel/next.js/pull/99596)、[#99902](https://github.com/vercel/next.js/pull/99902)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Node.js の子プロセスが接続できないときに対処の分かるエラーを表示（[#99887](https://github.com/vercel/next.js/pull/99887)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- サーバーのエラー表示で偽のスタックフレームが出る問題を修正（[#99888](https://github.com/vercel/next.js/pull/99888)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- 安定版 v16.4.0 を公開（[Release](https://github.com/vercel/next.js/releases/tag/v16.4.0)）· [[repos/vercel-next.js/releases/v16.4.0|まとめ]]
- Node.js 24 でテレメトリが送信されない問題を修正（[#99842](https://github.com/vercel/next.js/pull/99842)）📦 v16.5.0-canary.5 · トピック: [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]]
- create-next-app が `AGENTS.md` にエージェントのフィードバック用ブロックも書くように（[#99813](https://github.com/vercel/next.js/pull/99813)）📦 v16.5.0-canary.5 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- create-next-app の新規プロジェクトで ESLint 10 を使うように（[#99814](https://github.com/vercel/next.js/pull/99814)）📦 v16.5.0-canary.5 · トピック: [[repos/vercel-next.js/topics/ESLint|ESLint]]
- トレースのサイズを調べる `turbo-trace-size` CLI を追加、圧縮トレースの読み込みを高速化（[#99765](https://github.com/vercel/next.js/pull/99765)、[#99775](https://github.com/vercel/next.js/pull/99775)）📦 v16.5.0-canary.5 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform`）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・バンドルアナライザー・トレースツール・turbo-tasks の GC
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路・開発オーバーレイ・Instant Navigation のエラー案内

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-12|2026-10-12]]、[[repos/vercel-next.js/changes/2026-10-09|2026-10-09]]、[[repos/vercel-next.js/changes/2026-10-07|2026-10-07]]、[[repos/vercel-next.js/changes/2026-10-05|2026-10-05]]、[[repos/vercel-next.js/changes/2026-10-02|2026-10-02]]
