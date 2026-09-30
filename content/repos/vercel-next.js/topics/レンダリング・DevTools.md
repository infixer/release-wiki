---
title: レンダリング・DevTools
updated: 2026-09-30
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

メタデータのレンダリング経路、オンデマンド生成時のエラーハンドリング、開発オーバーレイ（dev overlay）の表示まわりの実装。ストリーミングとブロッキングでメタデータの扱いを揃える変更に続き、Edge SSR でも Node SSR と同じユーザーエージェントベースのメタデータ方針（HTML 制限ボットにはブロッキング）が使われるようになった。`error.tsx` が正しく使われるようにする修正、開発オーバーレイのハイドレーションエラー表示・レイアウトの改善も含まれる。クライアントコンポーネントの読み込み時間のテレメトリは、HTML を生成するレンダーごとに計測するようになった（非同期モジュールの評価時間も含む）。

## 変更履歴

- 2026-09-30 — クライアントコンポーネントの読み込み計測を HTML レンダーごとに（[#99322](https://github.com/vercel/next.js/pull/99322), [#99426](https://github.com/vercel/next.js/pull/99426), [#99427](https://github.com/vercel/next.js/pull/99427)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — 開発オーバーレイの Security Insight のアップグレード案内を見やすく（[#99354](https://github.com/vercel/next.js/pull/99354)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-28 — Edge SSR でメタデータのストリーミング方針が守られない不具合を修正（[#99128](https://github.com/vercel/next.js/pull/99128)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-24 — オンデマンド生成の失敗時に `error.tsx` が表示されない不具合を修正（[#99037](https://github.com/vercel/next.js/pull/99037)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 開発オーバーレイのヘッダーが狭い画面で崩れる不具合を修正（[#99049](https://github.com/vercel/next.js/pull/99049)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 開発オーバーレイのハイドレーションエラー表示を統一（[#99008](https://github.com/vercel/next.js/pull/99008)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — ストリーミングとブロッキングでメタデータのレンダリング経路を統一（[#97440](https://github.com/vercel/next.js/pull/97440)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
