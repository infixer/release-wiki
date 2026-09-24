---
title: リリース・CD
updated: 2026-09-24
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

next.js リポジトリ自身のリリース・CI/CD パイプラインまわりの実装。バージョン判定や、リリースブランチのゲート・publish 設定など、リポジトリの運用に関わる修正が中心。

## 変更履歴

- 2026-09-24 — リリースブランチのゲートを修正し、不要になった lerna publish 設定を削除（[#99039](https://github.com/vercel/next.js/pull/99039)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — isStableBuild() がコミットプレビュー版を安定版と誤判定する不具合を修正（[#98811](https://github.com/vercel/next.js/pull/98811)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
