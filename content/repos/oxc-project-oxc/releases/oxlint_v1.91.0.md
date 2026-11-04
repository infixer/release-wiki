---
title: oxc-project/oxc oxlint_v1.91.0
date: 2026-11-04
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.91.0) · 公開: 2026-11-03

## 要点

- linter ルールごとのメモリ割り当ての計測を追加（[#28470](https://github.com/oxc-project/oxc/pull/28470)）
- `react/capitalized-calls` に `allow` と `allowPattern` オプションを追加
- React Compiler 系ルール: トップレベルにコンポーネントかフックがあるファイルだけで実行、Reanimated の shared value を ref のように扱う。`react/purity` は async コンポーネントの不純な呼び出しを無視
- ルールの修正: `eslint/no-control-regex` が生の制御文字を検出（[#28548](https://github.com/oxc-project/oxc/pull/28548)）、`unicorn/prefer-global-this`（[#28549](https://github.com/oxc-project/oxc/pull/28549)）、`unicorn/no-invalid-fetch-options`（[#28547](https://github.com/oxc-project/oxc/pull/28547)）
- `unicorn/no-useless-error-capture-stack-trace`・`typescript/no-non-null-asserted-nullish-coalescing` を suspicious カテゴリへ移動（[#28545](https://github.com/oxc-project/oxc/pull/28545)、[#28546](https://github.com/oxc-project/oxc/pull/28546)）
- GitLab 形式のフィンガープリントを診断ごとに一意に（[#28307](https://github.com/oxc-project/oxc/pull/28307)）、TS の ESTree の `Program` の範囲にコメントを含める（[#28326](https://github.com/oxc-project/oxc/pull/28326)）
- 性能: `prefer-const`・`no-dupe-keys`・`react/rules-of-hooks` など多数のルールの割り当て削減（[#28471](https://github.com/oxc-project/oxc/pull/28471)〜[#28485](https://github.com/oxc-project/oxc/pull/28485)、[#28732](https://github.com/oxc-project/oxc/pull/28732)）、`import/no-cycle` の高速化

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]、[[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]]、[[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]、[[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
