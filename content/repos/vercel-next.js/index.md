---
title: vercel/next.js
updated: 2026-10-21
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)（2026-10-15）→ [[repos/vercel-next.js/releases/v16.4.2|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]（セキュリティ修正）、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.21](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.21)（2026-10-20）

## 直近の注目変更

- App Router の HMR: ルーターの初期化前に届いた更新を保留してマウント後に実行（[#100113](https://github.com/vercel/next.js/pull/100113)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- turbo-persistence: コンパクションの入力を `pread` で読み、最大 RSS を大幅に削減（[#100336](https://github.com/vercel/next.js/pull/100336)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `proxy.ts` で app-page のランタイムと React を読み込まないように（コールドパス −27%）（[#100384](https://github.com/vercel/next.js/pull/100384)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- プリレンダーの `Static` ステージを削除（[#100388](https://github.com/vercel/next.js/pull/100388)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack のローダー変更の検知（#95732）を一部取り消し（ワーカープールの大量生成のため）（[#100414](https://github.com/vercel/next.js/pull/100414)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- CPU 数の取得を `os.availableParallelism()` に（ビルドワーカー数の既定値など）（[#100258](https://github.com/vercel/next.js/pull/100258)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: 直接の `eval` を含むモジュールをスコープホイスティングしないように（[#100308](https://github.com/vercel/next.js/pull/100308)）📦 v16.5.0-canary.21 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 「middleware を通るリクエストを 1 つの OpenTelemetry トレースに」（#100136）を取り消し（[#100302](https://github.com/vercel/next.js/pull/100302)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]]
- `next upgrade --agent` がパッケージマネージャーの最小リリース経過期間を守って canary を選ぶように（[#100256](https://github.com/vercel/next.js/pull/100256)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- turbo-persistence: 複数ページにまたがる SST のブロックを `MADV_WILLNEED` で先読み（[#100283](https://github.com/vercel/next.js/pull/100283)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

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
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路・開発オーバーレイ・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-21|2026-10-21]]、[[repos/vercel-next.js/changes/2026-10-19|2026-10-19]]、[[repos/vercel-next.js/changes/2026-10-16|2026-10-16]]、[[repos/vercel-next.js/changes/2026-10-14|2026-10-14]]、[[repos/vercel-next.js/changes/2026-10-12|2026-10-12]]
