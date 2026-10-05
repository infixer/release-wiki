---
title: vercel/next.js
updated: 2026-10-05
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.8](https://github.com/vercel/next.js/releases/tag/v16.3.8)（2026-10-01、セキュリティ修正）→ [[repos/vercel-next.js/releases/v16.3.8|まとめ]]（v15 系: [[repos/vercel-next.js/releases/v15.5.27|v15.5.27]]）
- プレリリース: [v16.4.0-canary.60](https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.60)（2026-10-05）

## 直近の注目変更

- アップグレード関連の用語を「Agent」に統一し、`--ai` を `--agent` に（[#99545](https://github.com/vercel/next.js/pull/99545)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- シャロー URL 更新でクライアントの `params` がサスペンドしないよう修正（[#99611](https://github.com/vercel/next.js/pull/99611)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- `cacheComponents` 有効時に `partialPrefetching` を指定していないと警告を表示（[#99452](https://github.com/vercel/next.js/pull/99452)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- バンドルアナライザーにルートのサマリー画面を追加（[#98787](https://github.com/vercel/next.js/pull/98787)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- facade を使ったエクスポート名マングリングをオプトインで有効にできるように（[#99309](https://github.com/vercel/next.js/pull/99309)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- turbo-tasks: 永続化データが空で上書きされる問題を修正（[#99581](https://github.com/vercel/next.js/pull/99581)）📦 v16.4.0-canary.60 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- パラメータのマッチング方針を指定する `unstable_paramMatching` / `unstable_generateParamMatching`（[#97393](https://github.com/vercel/next.js/pull/97393)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack のエクスポート名マングリングを本番ビルドで既定有効に（[#99362](https://github.com/vercel/next.js/pull/99362)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `ensureStatic` が安定 API に（`unstable_` 接頭辞を削除）（[#99513](https://github.com/vercel/next.js/pull/99513)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack の共有ランタイムを既定で有効に（[#99504](https://github.com/vercel/next.js/pull/99504)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]] — `next/image` と画像最適化サーバー
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI・バンドルアナライザー
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチングとクライアント側のルート予測
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路と開発オーバーレイ

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-05|2026-10-05]]、[[repos/vercel-next.js/changes/2026-10-02|2026-10-02]]、[[repos/vercel-next.js/changes/2026-09-30|2026-09-30]]、[[repos/vercel-next.js/changes/2026-09-28|2026-09-28]]、[[repos/vercel-next.js/changes/2026-09-24|2026-09-24]]
