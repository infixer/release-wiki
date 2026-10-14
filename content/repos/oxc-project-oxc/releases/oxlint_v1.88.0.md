---
title: oxc-project/oxc oxlint_v1.88.0
date: 2026-10-14
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.88.0) · 公開: 2026-10-13

## 要点

- **破壊的変更**: AST のコメントの付属先（attachment）の保持を追加・リファクタ（[#27393](https://github.com/oxc-project/oxc/pull/27393)、[#27512](https://github.com/oxc-project/oxc/pull/27512)）
- LSP: oxlint の設定のエラーをクライアントに表示（[#25486](https://github.com/oxc-project/oxc/pull/25486)）
- `unicorn/prefer-query-selector` に `allowWithVariables` オプションを追加（[#27346](https://github.com/oxc-project/oxc/pull/27346)）
- `sort-keys`: `natural` の比較を ESLint と同じに（[#27579](https://github.com/oxc-project/oxc/pull/27579)）
- `unicorn/prefer-bigint-literals`: 冗長なコンストラクター呼び出しを外し、精度が落ちる場合は自動修正しない（[#25690](https://github.com/oxc-project/oxc/pull/25690)）。型 import の自動修正の衝突を防止（[#27409](https://github.com/oxc-project/oxc/pull/27409)）
- 設定探索でシンボリックリンクの設定ファイルをたどる、stderr をブロッキングに（oxfmt と共通）（[#27389](https://github.com/oxc-project/oxc/pull/27389)、[#27363](https://github.com/oxc-project/oxc/pull/27363)）
- 性能改善: `oxc/bad-array-method-on-arguments` が `arguments` の参照を 1 回だけ調べる（[#26930](https://github.com/oxc-project/oxc/pull/26930)）、型認識の診断でソースをファイルごとに共有（[#27462](https://github.com/oxc-project/oxc/pull/27462)）、JS プラグインの細かな最適化（[#27539](https://github.com/oxc-project/oxc/pull/27539)、[#27536](https://github.com/oxc-project/oxc/pull/27536)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-12|2026-10-12 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/LSP|LSP]]、[[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]、[[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]]
