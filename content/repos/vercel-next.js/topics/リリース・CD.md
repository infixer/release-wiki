---
title: リリース・CD
updated: 2026-10-09
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

next.js リポジトリ自身のリリース・CI/CD パイプラインまわりの実装。バージョン判定や、リリースブランチのゲート・publish 設定など、リポジトリの運用に関わる修正が中心。バージョン管理は lerna から pnpm に移り、内部依存は `workspace:*`、バージョン更新は `scripts/version-bump.js`、バージョンの基準は `packages/next/package.json`、リリースブランチのゲートは `scripts/release-branches.json` になった。

## 変更履歴

- 2026-10-09 — バージョン管理を lerna から pnpm に移行し、`lerna.json` を削除（[#99041](https://github.com/vercel/next.js/pull/99041)）📦 v16.5.0-canary.5 · [[repos/vercel-next.js/changes/2026-10-09|変更]]
- 2026-09-24 — リリースブランチのゲートを修正し、不要になった lerna publish 設定を削除（[#99039](https://github.com/vercel/next.js/pull/99039)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — isStableBuild() がコミットプレビュー版を安定版と誤判定する不具合を修正（[#98811](https://github.com/vercel/next.js/pull/98811)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
