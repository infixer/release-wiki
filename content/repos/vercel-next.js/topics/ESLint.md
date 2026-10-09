---
title: ESLint
updated: 2026-10-09
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

Next.js の ESLint 設定パッケージ `eslint-config-next` まわり。`eslint-config-next` は ESLint 9 と 10 の両方で動くようになった。Next.js の Node.js の最小要件（`>=20.9.0`）は変えず、ESLint 10 が要求する Node.js（`^20.19.0 || ^22.13.0 || >=24`）より古い Node.js 20 では ESLint 9 を使い続ける。ESLint 10 に対応したリリースが無い依存（`next` に同梱の Babel パーサーなど）は、`eslint-config-next` 側のパッチで補っている（ESLint 9 では何もしない）。create-next-app で作る新規プロジェクトは ESLint `^10` を使うようになった（ESLint 9 までしか peer 依存を宣言していないプラグインでは警告が出ることがある）。

## 主な API・オプション

- `eslint-config-next` — ESLint 9 / 10 に対応。依存は `typescript-eslint` `^8.56.0`、`eslint-plugin-react-hooks` `^7.1.0`（推奨設定から `react-hooks/component-hook-factories` が外れた）
- `eslint-config-next/parser` — Babel パーサーに `scopeManager.addGlobals()` が無い場合に追加する
- create-next-app — 新規プロジェクトの `eslint` は `^10`

## 変更履歴

- 2026-10-09 — create-next-app の新規プロジェクトで ESLint 10 を使うように（[#99814](https://github.com/vercel/next.js/pull/99814)）📦 v16.5.0-canary.5 · [[repos/vercel-next.js/changes/2026-10-09|変更]]
- 2026-10-07 — `eslint-config-next` が ESLint 10 に対応（[#99628](https://github.com/vercel/next.js/pull/99628)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/vercel-next.js/changes/2026-10-07|2026-10-07 の変更]]
