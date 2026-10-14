---
title: vercel/next.js
updated: 2026-10-14
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.0](https://github.com/vercel/next.js/releases/tag/v16.4.0)（2026-10-07）→ [[repos/vercel-next.js/releases/v16.4.0|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.3.8|v16.3.8]]、v15 系: [[repos/vercel-next.js/releases/v15.5.27|v15.5.27]]）
- プレリリース: [v16.5.0-canary.10](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.10)（2026-10-13）

## 直近の注目変更

- アップグレードのリマインダーを `experimental.agentUpgrade` で制御する `AGENTS.md` の専用ブロック `nextjs-agent-upgrade` に、`agentFeedback` の管理ブロックの文言も修正（[#99990](https://github.com/vercel/next.js/pull/99990)、[#100020](https://github.com/vercel/next.js/pull/100020)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- `generateStaticParams` から呼ぶ `"use cache"` 関数を `durableUseCacheEntries` で再利用可能に、Durable use cache の `codeHash` のずれを修正（[#99881](https://github.com/vercel/next.js/pull/99881)、[#100128](https://github.com/vercel/next.js/pull/100128)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack: `cacheHandlers` 設定時の Edge のルートハンドラーのビルド失敗、`_app` の `next/dynamic` のプリロード、遅延 dynamic import のチャンク衝突を修正（[#100046](https://github.com/vercel/next.js/pull/100046)、[#100091](https://github.com/vercel/next.js/pull/100091)、[#99940](https://github.com/vercel/next.js/pull/99940)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `next.config.ts` の相対 import を設定ファイルのディレクトリ基準で解決（[#99743](https://github.com/vercel/next.js/pull/99743)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `next/image` の非推奨の props（`priority` など）をエディターで非推奨として表示（[#98597](https://github.com/vercel/next.js/pull/98597)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]
- `next dev` / `next build` の `--custom-webpack` を再投入（アプリにインストールした webpack を使う）（[#99234](https://github.com/vercel/next.js/pull/99234)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 画像最適化の変換処理を `next/image-optimizer-transform` として公開（[#99312](https://github.com/vercel/next.js/pull/99312)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]
- canary で Turbopack の GC を既定で有効に、GC と永続キャッシュ併用時の panic を修正（[#99596](https://github.com/vercel/next.js/pull/99596)、[#99902](https://github.com/vercel/next.js/pull/99902)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Node.js の子プロセスが接続できないときに対処の分かるエラーを表示（[#99887](https://github.com/vercel/next.js/pull/99887)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- サーバーのエラー表示で偽のスタックフレームが出る問題を修正（[#99888](https://github.com/vercel/next.js/pull/99888)）📦 v16.5.0-canary.8 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]

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
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路・開発オーバーレイ・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-14|2026-10-14]]、[[repos/vercel-next.js/changes/2026-10-12|2026-10-12]]、[[repos/vercel-next.js/changes/2026-10-09|2026-10-09]]、[[repos/vercel-next.js/changes/2026-10-07|2026-10-07]]、[[repos/vercel-next.js/changes/2026-10-05|2026-10-05]]
