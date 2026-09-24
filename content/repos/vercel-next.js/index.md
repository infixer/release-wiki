---
title: vercel/next.js
updated: 2026-09-24
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.6](https://github.com/vercel/next.js/releases/tag/v16.3.6)（2026-09-22）→ [[repos/vercel-next.js/releases/v16.3.6|まとめ]]
- プレリリース: [v16.4.0-canary.42](https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.42)（2026-09-24）

## 直近の注目変更

- next/og の SVG シリアライズをセキュリティ強化（RCE 脆弱性の修正）（[#99061](https://github.com/vercel/next.js/pull/99061)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/next-og|next/og]]
- `next upgrade --ai` で AI エージェントによるセキュリティアップグレードが可能に（[#98562](https://github.com/vercel/next.js/pull/98562)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- 実験的な `agentFeedback` でコーディングエージェントの困りごとを収集（[#98582](https://github.com/vercel/next.js/pull/98582)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]
- 厳格なルートマッチングが既定で有効に（[#97397](https://github.com/vercel/next.js/pull/97397)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
- next analyze コマンドが正式機能に（[#99074](https://github.com/vercel/next.js/pull/99074)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- webpack モードでプロジェクト側の webpack を使える `customWebpack` オプションを追加（実験的）（[#98862](https://github.com/vercel/next.js/pull/98862)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- `unstable_ensureStatic` セグメント設定を追加（実験的）（[#98190](https://github.com/vercel/next.js/pull/98190)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- カスタム `distDir` に関する安全確認を追加（[#98997](https://github.com/vercel/next.js/pull/98997)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]
- オンデマンド生成の失敗時に `error.tsx` が表示されない不具合を修正（[#99037](https://github.com/vercel/next.js/pull/99037)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]
- CSS のチャンク分割で循環参照を解消する処理を高速化（約 131 倍）（[#98860](https://github.com/vercel/next.js/pull/98860)）📦 v16.4.0-canary.42 · トピック: [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]]

## トピック

- [[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]] — AI エージェントによるアップグレード・フィードバック収集
- [[repos/vercel-next.js/topics/next-og|next/og]] — 動的 OG 画像生成（`ImageResponse`）
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]] — Cache Components・ISR・Partial Prerendering
- [[repos/vercel-next.js/topics/ビルド・Turbopack|ビルド・Turbopack]] — Turbopack・webpack のビルド/開発サーバーと関連 CLI
- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]] — リポジトリ自身のリリース・CI/CD パイプライン
- [[repos/vercel-next.js/topics/ルーティング|ルーティング]] — App Router のルートマッチングとクライアント側のルート予測
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]] — メタデータのレンダリング経路と開発オーバーレイ

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-09-24|2026-09-24]]
