---
title: レンダリング・DevTools
updated: 2026-09-24
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

メタデータのレンダリング経路、オンデマンド生成時のエラーハンドリング、開発オーバーレイ（dev overlay）の表示まわりの実装。ストリーミングとブロッキングでメタデータの扱いを揃える変更、`error.tsx` が正しく使われるようにする修正、開発オーバーレイのハイドレーションエラー表示・レイアウトの改善が含まれる。

## 変更履歴

- 2026-09-24 — オンデマンド生成の失敗時に `error.tsx` が表示されない不具合を修正（[#99037](https://github.com/vercel/next.js/pull/99037)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 開発オーバーレイのヘッダーが狭い画面で崩れる不具合を修正（[#99049](https://github.com/vercel/next.js/pull/99049)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 開発オーバーレイのハイドレーションエラー表示を統一（[#99008](https://github.com/vercel/next.js/pull/99008)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — ストリーミングとブロッキングでメタデータのレンダリング経路を統一（[#97440](https://github.com/vercel/next.js/pull/97440)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
