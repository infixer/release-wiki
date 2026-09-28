---
title: React-Compiler
updated: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxc の React Compiler（`oxc_react_compiler`）と、それを使う `oxc-transform-react`。React 本家のコミットを移植する形で正しさの修正が進んでいる（暗黙の `arguments` を使うコードでのコンパイル中止、`**` / `**=` の意味、引数なしの `new Date` を不純として扱う、再帰する名前付き関数式への対応）。`oxc-transform-react` では、オプトインの `reactCompiler.reportDiagnostics` で回復可能な診断を `result.errors` に出せるようになった（既定では出さない）。

## 主な API・オプション

- `reactCompiler.reportDiagnostics` — `true` で回復可能な診断を重大度付きで `result.errors` に追加（既定は `false` 相当で出さない）
- `react/purity`（lint ルール）— 引数なしの `new Date()` を不純として報告

## 変更履歴

- 2026-09-28 — 再帰する名前付き関数式を内部エラーなくコンパイルできるように（[#26796](https://github.com/oxc-project/oxc/pull/26796)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 引数なしの `new Date` を不純として扱う（`react/purity` にも反映）（[#26894](https://github.com/oxc-project/oxc/pull/26894)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — べき乗演算 `**` / `**=` を JavaScript の意味に合わせる（[#26895](https://github.com/oxc-project/oxc/pull/26895)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — `oxc-transform-react` に `reportDiagnostics` オプションを追加（[#26624](https://github.com/oxc-project/oxc/pull/26624)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 暗黙の `arguments` オブジェクトを使う場合はコンパイルを中止（[#26896](https://github.com/oxc-project/oxc/pull/26896)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
