---
title: vercel/next.js
updated: 2026-09-28
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.6](https://github.com/vercel/next.js/releases/tag/v16.3.6)（2026-09-22）→ [[repos/vercel-next.js/releases/v16.3.6|まとめ]]
- プレリリース: [v16.4.0-canary.51](https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.51)（2026-09-27）

## 直近の注目変更

- アップグレードを別の worktree で行うかユーザーに確認するように（[#99232](https://github.com/vercel/next.js/pull/99232)）⏳ 未リリース · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- エクスポート名マングリングのためだけのファサード分割をやめ、シングルトンの二重化を修正（[#99285](https://github.com/vercel/next.js/pull/99285)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Git の無いアプリでもエージェントによるアップグレードが可能に（[#99217](https://github.com/vercel/next.js/pull/99217)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- PPR ページへ遷移した後に Server Action がハングする不具合を修正（[#99252](https://github.com/vercel/next.js/pull/99252)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/Server-Actions|Server Actions]]
- バンドルアナライザーのスナップショット名オプションを `--snapshot-name` に改名（[#99251](https://github.com/vercel/next.js/pull/99251)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- Edge SSR でメタデータのストリーミング方針が守られない不具合を修正（[#99128](https://github.com/vercel/next.js/pull/99128)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- 実験的な `customWebpack` サポートを revert（[#99227](https://github.com/vercel/next.js/pull/99227)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `%` を含む URL がプリレンダー済みルートで 500 になる不具合を修正（[#99121](https://github.com/vercel/next.js/pull/99121)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- Turbopack の `additionalRoots` がデプロイアダプターでも使えるように（[#99015](https://github.com/vercel/next.js/pull/99015)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- 本番ビルドで各レイアウトセグメントを 1 回だけチャンク化するように（[#99100](https://github.com/vercel/next.js/pull/99100)）📦 v16.4.0-canary.51 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

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
- 最近の変更: [[repos/vercel-next.js/changes/2026-09-28|2026-09-28]]、[[repos/vercel-next.js/changes/2026-09-24|2026-09-24]]
