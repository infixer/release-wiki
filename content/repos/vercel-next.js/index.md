---
title: vercel/next.js
updated: 2026-10-26
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3|まとめ]]（前の安定版: [[repos/vercel-next.js/releases/v16.4.2|v16.4.2]]、v15 系: [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]）
- プレリリース: [v16.5.0-canary.27](https://github.com/vercel/next.js/releases/tag/v16.5.0-canary.27)（2026-10-25）

## 直近の注目変更

- Turbopack: クライアント参照とサーバーユーティリティのチャンク化に、グラフが導いたマージ済みチャンクグループを使う（[#98734](https://github.com/vercel/next.js/pull/98734)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- turbo-tasks-backend: スナップショットの操作数をスレッドごとのストライプで数える（192 CPU で `run-turbopack` が 4.7〜6.5 秒短縮）（[#100280](https://github.com/vercel/next.js/pull/100280)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- インラインの Flight スクリプト（`__next_f`）を React の文字列から直接組み立てる（Buffer への再エンコードをやめる）（[#100142](https://github.com/vercel/next.js/pull/100142)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- NFS など、ロックファイルの実装が無い・限られたファイルシステムでの dist ディレクトリのロックの失敗を修正（[#100684](https://github.com/vercel/next.js/pull/100684)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- turbo-persistence: 最初の bottom マージまでシャード数を減らさない（初回の圧縮ジョブを小さく）（[#100424](https://github.com/vercel/next.js/pull/100424)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Turbopack: トレースファイルのタイムスタンプを差分で記録（[#99809](https://github.com/vercel/next.js/pull/99809)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `global-not-found` から App のルートへの遷移で 404 から抜けられない問題を修正（ページ全体のナビゲーションに）（[#100592](https://github.com/vercel/next.js/pull/100592)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- `partialPrefetching` で、束縛引数付きのインライン Server Function を描画するページのレスポンスが終わらない問題を修正（[#100622](https://github.com/vercel/next.js/pull/100622)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Revert: webpack ローダーのビルド依存の追跡の拡張（#99549）をリグレッションのため取り消し（[#100634](https://github.com/vercel/next.js/pull/100634)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- バンドル分析を出力ファイルごとにキャッシュ（`next build --analyze` の分析の CPU 時間 150 秒 → 124 秒）（[#100475](https://github.com/vercel/next.js/pull/100475)）📦 v16.5.0-canary.27 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

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
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチング・クライアント側のルート予測・`forbidden()` / `unauthorized()`・`proxy.ts` の読み込み・`global-not-found` からの遷移
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路（ボット判定を含む）・開発オーバーレイ・Instant Navigation のエラー案内・ターミナルのコードフレーム

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-26|2026-10-26]]、[[repos/vercel-next.js/changes/2026-10-23|2026-10-23]]、[[repos/vercel-next.js/changes/2026-10-21|2026-10-21]]、[[repos/vercel-next.js/changes/2026-10-19|2026-10-19]]、[[repos/vercel-next.js/changes/2026-10-16|2026-10-16]]
