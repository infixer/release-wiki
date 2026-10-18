---
title: vercel/next.js
updated: 2026-10-19
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)（2026-10-15）→ [[repos/vercel-next.js/releases/v16.4.2|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]（セキュリティ修正）、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.17](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.17)（2026-10-17）

## 直近の注目変更

- 「middleware を通るリクエストを 1 つの OpenTelemetry トレースに」（#100136）を取り消し（[#100302](https://github.com/vercel/next.js/pull/100302)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]]
- `next upgrade --agent` がパッケージマネージャーの最小リリース経過期間を守って canary を選ぶように（[#100256](https://github.com/vercel/next.js/pull/100256)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- turbo-persistence: 複数ページにまたがる SST のブロックを `MADV_WILLNEED` で先読み（[#100283](https://github.com/vercel/next.js/pull/100283)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- プリフェッチの `FetchStrategy` を `AppStage` と `Completeness` に分割（[#99706](https://github.com/vercel/next.js/pull/99706)）📦 v16.5.0-canary.17 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- fetch のスパンで HTTP の失敗（400 以上）をエラーとして記録（[#99877](https://github.com/vercel/next.js/pull/99877)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]]
- セキュリティ修正 v16.4.1 / v15.5.28: 画像最適化 API の SVG での RCE・`use cache` 関数が型付き配列を返す場合の RCE（Critical）、Server Actions の DoS（High）→ [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]、[[repos/vercel-next.js/releases/v15.5.28|v15.5.28]] · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]、[[repos/vercel-next.js/topics/Server-Actions|Server Actions]]
- Cache Components + 共有ランタイムで nonce ベースの CSP でもハイドレーションするように（[#100102](https://github.com/vercel/next.js/pull/100102)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack: チャンクのタグ探索を `<head>` だけの文字列比較にしてハイドレーションのコストを削減、起動直後の CSS 更新の取りこぼしをフルリロードで回復（[#100047](https://github.com/vercel/next.js/pull/100047)、[#100175](https://github.com/vercel/next.js/pull/100175)、[#99963](https://github.com/vercel/next.js/pull/99963)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- バンドルアナライザーのルート一覧を `route-summaries.json` に一本化（メタデータルートでの `next analyze export` の ENOENT を修正）（[#100081](https://github.com/vercel/next.js/pull/100081)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 拡張子の無い Google Fonts の URL を webpack・Turbopack で扱えるように（[#100158](https://github.com/vercel/next.js/pull/100158)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/next-font|next/font]]

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
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-19|2026-10-19]]、[[repos/vercel-next.js/changes/2026-10-16|2026-10-16]]、[[repos/vercel-next.js/changes/2026-10-14|2026-10-14]]、[[repos/vercel-next.js/changes/2026-10-12|2026-10-12]]、[[repos/vercel-next.js/changes/2026-10-09|2026-10-09]]
