---
title: vercel/next.js
updated: 2026-10-16
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)（2026-10-15）→ [[repos/vercel-next.js/releases/v16.4.2|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]（セキュリティ修正）、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: なし（最新の安定版より新しいものは無い。直近の canary は [v16.5.0-canary.14](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.14)（2026-10-15））

## 直近の注目変更

- セキュリティ修正 v16.4.1 / v15.5.28: 画像最適化 API の SVG での RCE・`use cache` 関数が型付き配列を返す場合の RCE（Critical）、Server Actions の DoS（High）→ [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]、[[repos/vercel-next.js/releases/v15.5.28|v15.5.28]] · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]、[[repos/vercel-next.js/topics/Server-Actions|Server Actions]]
- middleware を通るリクエストを 1 つの OpenTelemetry トレースに、fetch のスパンで HTTP の失敗をエラーに（[#100136](https://github.com/vercel/next.js/pull/100136)、[#99877](https://github.com/vercel/next.js/pull/99877)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]]
- Cache Components + 共有ランタイムで nonce ベースの CSP でもハイドレーションするように（[#100102](https://github.com/vercel/next.js/pull/100102)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack: チャンクのタグ探索を `<head>` だけの文字列比較にしてハイドレーションのコストを削減、起動直後の CSS 更新の取りこぼしをフルリロードで回復（[#100047](https://github.com/vercel/next.js/pull/100047)、[#100175](https://github.com/vercel/next.js/pull/100175)、[#99963](https://github.com/vercel/next.js/pull/99963)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- バンドルアナライザーのルート一覧を `route-summaries.json` に一本化（メタデータルートでの `next analyze export` の ENOENT を修正）（[#100081](https://github.com/vercel/next.js/pull/100081)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 拡張子の無い Google Fonts の URL を webpack・Turbopack で扱えるように（[#100158](https://github.com/vercel/next.js/pull/100158)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/next-font|next/font]]
- アップグレードのリマインダーを `experimental.agentUpgrade` で制御する `AGENTS.md` の専用ブロック `nextjs-agent-upgrade` に、`agentFeedback` の管理ブロックの文言も修正（[#99990](https://github.com/vercel/next.js/pull/99990)、[#100020](https://github.com/vercel/next.js/pull/100020)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- `generateStaticParams` から呼ぶ `"use cache"` 関数を `durableUseCacheEntries` で再利用可能に、Durable use cache の `codeHash` のずれを修正（[#99881](https://github.com/vercel/next.js/pull/99881)、[#100128](https://github.com/vercel/next.js/pull/100128)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack: `cacheHandlers` 設定時の Edge のルートハンドラーのビルド失敗、`_app` の `next/dynamic` のプリロード、遅延 dynamic import のチャンク衝突を修正（[#100046](https://github.com/vercel/next.js/pull/100046)、[#100091](https://github.com/vercel/next.js/pull/100091)、[#99940](https://github.com/vercel/next.js/pull/99940)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `next.config.ts` の相対 import を設定ファイルのディレクトリ基準で解決（[#99743](https://github.com/vercel/next.js/pull/99743)）📦 v16.5.0-canary.10 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）
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
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-16|2026-10-16]]、[[repos/vercel-next.js/changes/2026-10-14|2026-10-14]]、[[repos/vercel-next.js/changes/2026-10-12|2026-10-12]]、[[repos/vercel-next.js/changes/2026-10-09|2026-10-09]]、[[repos/vercel-next.js/changes/2026-10-07|2026-10-07]]
