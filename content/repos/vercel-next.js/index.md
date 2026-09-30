---
title: vercel/next.js
updated: 2026-09-30
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.7](https://github.com/vercel/next.js/releases/tag/v16.3.7)（2026-09-29）→ [[repos/vercel-next.js/releases/v16.3.7|まとめ]]
- プレリリース: [v16.4.0-canary.53](https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.53)（2026-09-30）

## 直近の注目変更

- create-next-app で Cache Components を既定で有効に（[#99436](https://github.com/vercel/next.js/pull/99436)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- プリレンダー時に HTTP ステータスコードを保持するように（[#99078](https://github.com/vercel/next.js/pull/99078)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- `additionalRoots` の監視で macOS のコンパイラーが固まる問題を修正（[#99396](https://github.com/vercel/next.js/pull/99396)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- カスタムキャッシュハンドラーが最初のリクエストで使われない不具合を修正（[#99372](https://github.com/vercel/next.js/pull/99372)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- `navigation()` / `prefetch()` から `unstable_` 接頭辞を削除（[#99241](https://github.com/vercel/next.js/pull/99241)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- SSR でも遅延 dynamic import を使えるように（[#98836](https://github.com/vercel/next.js/pull/98836)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `ensureStatic = "navigation"` の初期実装（[#99171](https://github.com/vercel/next.js/pull/99171)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- create-next-app の推奨デフォルトにエージェントフィードバックを追加（[#99119](https://github.com/vercel/next.js/pull/99119)）📦 v16.4.0-canary.53 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- アップグレードを別の worktree で行うかユーザーに確認するように（[#99232](https://github.com/vercel/next.js/pull/99232)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- エクスポート名マングリングのためだけのファサード分割をやめ、シングルトンの二重化を修正（[#99285](https://github.com/vercel/next.js/pull/99285)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/Server-Actions|Server Actions]] — Server Actions の呼び出し・転送処理
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI・バンドルアナライザー
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチングとクライアント側のルート予測
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路と開発オーバーレイ

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-09-30|2026-09-30]]、[[repos/vercel-next.js/changes/2026-09-28|2026-09-28]]、[[repos/vercel-next.js/changes/2026-09-24|2026-09-24]]
