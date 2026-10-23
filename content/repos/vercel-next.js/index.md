---
title: vercel/next.js
updated: 2026-10-23
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)（2026-10-15）→ [[repos/vercel-next.js/releases/v16.4.2|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]（セキュリティ修正）、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.24](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.24)（2026-10-22）

## 直近の注目変更

- ボットの User-Agent 判定を 1KB までに制限（超えたものはボットとして扱わない、DoS 対策）（[#100604](https://github.com/vercel/next.js/pull/100604)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- 開発時の遅延サーバー import をルートハンドラー・Pages の API ルート・Pages の SSR に拡大（[#99541](https://github.com/vercel/next.js/pull/99541)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 描画の検証を分離し、サーバーの起動時に単体の React を読み込まないように（[#100467](https://github.com/vercel/next.js/pull/100467)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- ストリーミング中に積まれたキャッシュの再検証をレスポンスのクローズ時に flush（[#100448](https://github.com/vercel/next.js/pull/100448)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- `experimental.turbopackLazyDynamicImports` で遅延 `import.meta.glob` のマッチも遅延コンパイル（[#100523](https://github.com/vercel/next.js/pull/100523)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: 遅延 `import.meta.glob` のマッチが実際にはコード分割されていなかった問題を修正（[#100522](https://github.com/vercel/next.js/pull/100522)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- OpenTelemetry: リクエストのスパンをルートモジュールの準備より前に開始（親の無い `prepare route module` のトレースを解消）（[#100349](https://github.com/vercel/next.js/pull/100349)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]]
- トレースのメモリサンプルにプロセスの RSS（`memory_footprint`）を記録（[#99527](https://github.com/vercel/next.js/pull/99527)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 最終のランタイムプリレンダーでキャッシュ済みの値を保持（バックグラウンドの再検証は RDC を書き換えない）（[#100447](https://github.com/vercel/next.js/pull/100447)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Pages Router: ISR のエントリのキャッシュ期間が再起動で 1 秒に戻る問題を修正（[#100495](https://github.com/vercel/next.js/pull/100495)）📦 v16.5.0-canary.24 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/ESLint|ESLint]] — `eslint-config-next` と ESLint の対応バージョン
- [[repos/vercel-next.js/topics/next-font|next/font]] — `next/font`（Google Fonts）の取得・最適化
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/OpenTelemetry|OpenTelemetry]] — `instrumentation.ts` による OTel のトレース（middleware・fetch のスパン）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー（`next/image-optimizer-transform`）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/テストモード|テストモード]] — 実験的なテストモード（同梱の `@mswjs/interceptors`）
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] — CLI の匿名テレメトリの送信処理
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI（`--custom-webpack` を含む）・バンドルアナライザー・トレースツール・turbo-tasks の GC
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-23|2026-10-23]]、[[repos/vercel-next.js/changes/2026-10-21|2026-10-21]]、[[repos/vercel-next.js/changes/2026-10-19|2026-10-19]]、[[repos/vercel-next.js/changes/2026-10-16|2026-10-16]]、[[repos/vercel-next.js/changes/2026-10-14|2026-10-14]]
