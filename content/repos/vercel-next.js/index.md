---
title: vercel/next.js
updated: 2026-10-02
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.8](https://github.com/vercel/next.js/releases/tag/v16.3.8)（2026-10-01、セキュリティ修正）→ [[repos/vercel-next.js/releases/v16.3.8|まとめ]]（v15 系: [[repos/vercel-next.js/releases/v15.5.27|v15.5.27]]）
- プレリリース: [v16.4.0-canary.56](https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.56)（2026-10-02）

## 直近の注目変更

- パラメータのマッチング方針を指定する `unstable_paramMatching` / `unstable_generateParamMatching`（[#97393](https://github.com/vercel/next.js/pull/97393)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack のエクスポート名マングリングを本番ビルドで既定有効に（[#99362](https://github.com/vercel/next.js/pull/99362)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `ensureStatic` が安定 API に（`unstable_` 接頭辞を削除）（[#99513](https://github.com/vercel/next.js/pull/99513)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack の共有ランタイムを既定で有効に（[#99504](https://github.com/vercel/next.js/pull/99504)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- レスポンスキャッシュのキーを元のルートごとに分離（[#99482](https://github.com/vercel/next.js/pull/99482)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- 外部画像の取得で DNS 解決を固定（[#99477](https://github.com/vercel/next.js/pull/99477)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/画像最適化|画像最適化]]
- Turbopack の永続キャッシュのコンパクションを刷新し、ディスク使用量を削減（[#99268](https://github.com/vercel/next.js/pull/99268)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- ISR エントリのキャッシュ期間をインスタンス間・再起動後も保持（[#99289](https://github.com/vercel/next.js/pull/99289)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- プロファイルが異なると `revalidateTag` がカスタムキャッシュハンドラーに届かない不具合を修正（[#99359](https://github.com/vercel/next.js/pull/99359)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- エージェントによるアップグレード通知を既定で有効に、`experimental.agentUpgrade` に改名（[#99311](https://github.com/vercel/next.js/pull/99311), [#99461](https://github.com/vercel/next.js/pull/99461)）📦 v16.4.0-canary.56 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]

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
- 最近の変更: [[repos/vercel-next.js/changes/2026-10-02|2026-10-02]]、[[repos/vercel-next.js/changes/2026-09-30|2026-09-30]]、[[repos/vercel-next.js/changes/2026-09-28|2026-09-28]]、[[repos/vercel-next.js/changes/2026-09-24|2026-09-24]]
