---
title: React-Compiler
updated: 2026-10-30
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxc の React Compiler（`oxc_react_compiler`）と、それを使う `oxc-transform-react`。React 本家のコミットを移植する形で正しさの修正が進んでいる（暗黙の `arguments` を使うコードでのコンパイル中止、`**` / `**=` の意味、引数なしの `new Date` を不純として扱う、再帰する名前付き関数式への対応）。`oxc-transform-react` では、オプトインの `reactCompiler.reportDiagnostics` で回復可能な診断を `result.errors` に出せるようになった（既定では出さない）。JSX の文字参照は JSX 変換と共通の Babel 準拠のデコーダーで扱い、孤立サロゲートを保つようになった（`&#X41;` は文字のまま。oxlint_v1.89.0）。`try` の中の三項演算子・`if`・`switch` で props に応じて選ばれる値を定数として扱い、マウントごとに 1 回だけキャッシュしていた不具合も直った（未リリース）。さらに、`try` の中で throw しうる呼び出しもリアクティブさを決める分岐として扱い、`catch` に到達しない `try` でアサーション失敗により panic していた（`catch` が複数ブロックなら後続のコードが消えていた）問題も直った（いずれも未リリース）。`try` まわりの 2 つの修正は oxlint_v1.90.0・crates_v0.156.0（2026-10-27）で公開された。同じ時期に、上流と同じくメモ化の依存の網羅性の検証が既定で有効になり、手動の `useMemo` / `useCallback` の依存が足りない・余分なときはそのコンポーネント・フックをコンパイルせず手動のメモ化を残すようになった（推論した依存で置き換えていた不具合の修正。#27113）。非 null アサーション越しのオプショナルチェーン（`users?.find(...)!.name`）で `?.` が消える不具合、オプショナルチェーンが短絡した結果のキャッシュで本来の `TypeError` が隠れる不具合（上流にもある）、`enableJsxOutlining` でハイフンを含む属性名（`data-testid`）から不正な束縛名を出す不具合も直った。その後（2026-10-30 の回）、開いたままだった React Compiler の修正 PR 11 件と多数の issue をまとめた [#28195](https://github.com/oxc-project/oxc/pull/28195) がマージされ、28 件の issue が閉じられた（`react/capitalized_calls`・`react/purity` ルールなど linter 側にも変更あり。未リリース）。

## 主な API・オプション

- `reactCompiler.reportDiagnostics` — `true` で回復可能な診断を重大度付きで `result.errors` に追加（既定は `false` 相当で出さない）
- `react/purity`（lint ルール）— 引数なしの `new Date()` を不純として報告

## 変更履歴

- 2026-10-30 — React Compiler の未マージの修正 11 件をまとめて取り込み、28 件の issue を解決（[#28195](https://github.com/oxc-project/oxc/pull/28195)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-30|変更]]
- 2026-10-28 — JSX のアウトライン化でハイフンを含む props に有効な束縛名（`data-testid` → `dataTestid`）を使う（#26288）（[#28111](https://github.com/oxc-project/oxc/pull/28111)） 📦 oxlint_v1.90.0 · [[repos/oxc-project-oxc/changes/2026-10-28|変更]]
- 2026-10-28 — 依存が守れない手動のメモ化を書いたまま残す（網羅性の検証を既定で有効に。#27113）（[#28101](https://github.com/oxc-project/oxc/pull/28101)） 📦 oxlint_v1.90.0 · [[repos/oxc-project-oxc/changes/2026-10-28|変更]]
- 2026-10-28 — オプショナルチェーンのキャッシュのガードを保ち、短絡後の再描画で `TypeError` が隠れないように（[#28165](https://github.com/oxc-project/oxc/pull/28165)） 📦 oxlint_v1.90.0 · [[repos/oxc-project-oxc/changes/2026-10-28|変更]]
- 2026-10-28 — 非 null アサーションを通してもオプショナルチェーンを保つ（#28142）（[#28144](https://github.com/oxc-project/oxc/pull/28144)） 📦 oxlint_v1.90.0 · [[repos/oxc-project-oxc/changes/2026-10-28|変更]]
- 2026-10-23 — `try` の中で throw しうる呼び出しで `catch` の代入値をリアクティブに扱う（#27809）（[#28005](https://github.com/oxc-project/oxc/pull/28005)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-23 — `catch` に到達しない `try` で panic せずにコンパイルし、アサーションを Invariant の診断に（#27404）（[#28066](https://github.com/oxc-project/oxc/pull/28066)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-21 — `try` の中の分岐で選ばれる値をリアクティブに扱う（[#27817](https://github.com/oxc-project/oxc/pull/27817)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — JSX の文字参照を孤立サロゲートとしてデコード（`&#X41;` は文字のまま）（[#26712](https://github.com/oxc-project/oxc/pull/26712)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-09-28 — 再帰する名前付き関数式を内部エラーなくコンパイルできるように（[#26796](https://github.com/oxc-project/oxc/pull/26796)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 引数なしの `new Date` を不純として扱う（`react/purity` にも反映）（[#26894](https://github.com/oxc-project/oxc/pull/26894)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — べき乗演算 `**` / `**=` を JavaScript の意味に合わせる（[#26895](https://github.com/oxc-project/oxc/pull/26895)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — `oxc-transform-react` に `reportDiagnostics` オプションを追加（[#26624](https://github.com/oxc-project/oxc/pull/26624)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 暗黙の `arguments` オブジェクトを使う場合はコンパイルを中止（[#26896](https://github.com/oxc-project/oxc/pull/26896)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|oxlint_v1.86.0]]
- [[repos/oxc-project-oxc/releases/crates_v0.152.0|crates_v0.152.0]]
- [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.90.0|oxlint_v1.90.0]]
- [[repos/oxc-project-oxc/releases/crates_v0.156.0|crates_v0.156.0]]
- [[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30 の変更]]
