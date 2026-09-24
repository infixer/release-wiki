---
title: no-unused-vars
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

ESLint 由来の `no-unused-vars` ルール（linter/eslint）まわりの判定・自動修正の細かい不具合修正が継続している。private な namespace バインディングが誤って抑制される問題、`destructuredArrayIgnorePattern` / `ignoreRestSiblings` が配列 rest 引数の中で効かない問題、更新式（`a++` など）が実際に消費されるケースの誤検知、配列 rest バインディング削除・コメントを含むインポート削除で自動修正が不正な構文を生成する問題などを修正している。

## 主な API・オプション

- `destructuredArrayIgnorePattern` — 分割代入の配列パターンで無視する名前の正規表現
- `ignoreRestSiblings` — rest 要素と共存する兄弟要素を無視するか

## 変更履歴

- 2026-09-24 — 配列 rest バインディング内でも `destructuredArrayIgnorePattern` / `ignoreRestSiblings` が効くように修正（[#26923](https://github.com/oxc-project/oxc/pull/26923)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — コンストラクタ引数・算出プロパティアクセスなどでの更新式の消費を使用として認識するよう修正（[#26782](https://github.com/oxc-project/oxc/pull/26782)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — ルートエクスポートと同名の private な namespace バインディングが報告されない不具合を修正（[#26842](https://github.com/oxc-project/oxc/pull/26842)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — インポート削除時にコメントを跨ぐセパレータを正しく扱うよう修正（[#26781](https://github.com/oxc-project/oxc/pull/26781)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — 配列 rest バインディングの直前の未使用要素削除で不正な構文になる不具合を修正（[#26778](https://github.com/oxc-project/oxc/pull/26778)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|oxlint_v1.85.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
