---
title: Minifier
updated: 2026-10-14
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`oxc_minifier` と codegen。正しさの修正（ディレクティブを含む IIFE の保持、`arguments` コピーのループ書き換えで兄弟の宣言を残す、`BooleanLiteral` の否定処理、テンプレートリテラルの不要な `$` エスケープ削除など）と並行して、圧縮率を上げる最適化も追加されている。同じ内容の隣接する `if` 文の統合、抜ける `if` ブロックの後続文を else 側へまとめて条件式に畳み込む変換、3 項以上のシーケンスを含む条件式の畳み込み、ビット演算の二項式の簡約、同じモジュールからの import 文の統合や import + export の `export ... from` への統合など。条件式・論理式の中の入れ子のシーケンスの処理は `minimize_sequences.rs` にまとめられ、冪等になるよう修正された。crates_v0.152.0 では、式をその場で書き換えるなどアロケーションを減らす性能改善も多数入った。委譲しない `yield` の `undefined` 引数も畳み込む（グローバルなら `void 0`）。codegen では、`-` の後の負の `BigIntLiteral` が `--1n` と出力される問題（Minifier の出力でも発生）を Rust・JS の両方で直した（crates_v0.154.0 で公開）。定数の引数で呼ばれる未使用の IIFE（アロー関数と strict な通常関数）を除去する最適化と、空の `do…while` の本体の前に余分なインデントを出さない codegen の修正も入った（crates_v0.154.0 で公開）。`delete` 式の扱いも直り、NaN・Infinity への畳み込みで `delete` の結果が変わらないよう `delete 0` に変換し、さらに可能な場合は `delete` 式を `true` / `false` に畳み込むようになった（crates_v0.154.0 で公開）。codegen では `ArrayPattern` の先頭の `RestElement` の前の余分な空白を Rust・JS の両方で削除し、JS の codegen（`packages/codegen`）は `V8IntrinsicExpression` に対応したうえで megamorphic な `type` 読み取りの削減などで高速化した（crates_v0.154.0）。sloppy モードの `arguments` まわりでは、mapped arguments を通して見える引数への書き込みを保ち、semantic が通常の関数の暗黙の `arguments` を外側の宣言に解決しないよう直した（crates_v0.154.0）。`Math.cbrt` の負の数を `NaN` に畳み込む誤りも修正された（未リリース）。

## 変更履歴

- 2026-10-14 — `Math.cbrt` の負の数を `NaN` に畳み込まない（[#27621](https://github.com/oxc-project/oxc/pull/27621)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-14 — JS の codegen（`packages/codegen`）の高速化（megamorphic な `type` 読み取りの削減など）（[#27586](https://github.com/oxc-project/oxc/pull/27586)、[#27599](https://github.com/oxc-project/oxc/pull/27599) ほか） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-14 — codegen: `ArrayPattern` の先頭の `RestElement` の前の余分な空白を削除（Rust・JS）（[#27613](https://github.com/oxc-project/oxc/pull/27613)） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-14 — JS の codegen が `V8IntrinsicExpression` に対応（[#27597](https://github.com/oxc-project/oxc/pull/27597)） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-14 — mapped arguments を通して見える引数への書き込みを保つ（[#27494](https://github.com/oxc-project/oxc/pull/27494)） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-14 — 外側で `arguments` が宣言されていても通常の関数の暗黙の `arguments` を外側に解決しない（semantic の修正）（[#26929](https://github.com/oxc-project/oxc/pull/26929)） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-12 — `delete` 式を `true` / `false` に畳み込む（[#27522](https://github.com/oxc-project/oxc/pull/27522)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-12|変更]]
- 2026-10-12 — `export` の直後の `/*@__NO_SIDE_EFFECTS__*/` が効くように（パーサー側の修正）（[#27504](https://github.com/oxc-project/oxc/pull/27504)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-12|変更]]
- 2026-10-12 — 非有限数への畳み込みで `delete` の結果を保つ（[#27466](https://github.com/oxc-project/oxc/pull/27466)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-12|変更]]
- 2026-10-09 — 定数の引数で呼ばれる未使用の IIFE を除去（[#27434](https://github.com/oxc-project/oxc/pull/27434)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-10-09 — codegen: 空の `do…while` の本体の前の余分なインデントを削除（Rust・JS）（[#27407](https://github.com/oxc-project/oxc/pull/27407)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-10-07 — `-` の後の負の `BigIntLiteral` の出力を修正（Rust・JS の codegen）（[#27378](https://github.com/oxc-project/oxc/pull/27378)、[#27377](https://github.com/oxc-project/oxc/pull/27377)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-07|変更]]
- 2026-10-07 — JS codegen: `TSJSDocNonNullableType` の出力時のデバッグアサーション失敗を修正（[#27373](https://github.com/oxc-project/oxc/pull/27373)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-07|変更]]
- 2026-10-07 — 委譲しない `yield` の `undefined` 引数を畳み込む（[#27324](https://github.com/oxc-project/oxc/pull/27324)） 📦 oxlint_v1.87.0 · [[repos/oxc-project-oxc/changes/2026-10-07|変更]]
- 2026-10-05 — 入れ子のシーケンスを処理するときの冪等性を修正（条件式・論理代入への変換）（[#27273](https://github.com/oxc-project/oxc/pull/27273)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-05|変更]]
- 2026-10-02 — 同じモジュールからの import 文をまとめる（[#25534](https://github.com/oxc-project/oxc/pull/25534)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — 同じモジュールから import して export する文を `export ... from` にまとめる（[#25533](https://github.com/oxc-project/oxc/pull/25533)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — ビット演算の二項式を簡約（`(a OP b) | 0` → `a OP b`、`a & 0xffffffff` → `a | 0`）（[#27107](https://github.com/oxc-project/oxc/pull/27107)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-09-30 — 3 項以上のシーケンスを含む条件式も畳み込む（[#27083](https://github.com/oxc-project/oxc/pull/27083)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — 抜ける `if` ブロックの後ろの文を else 側へまとめる（[#26667](https://github.com/oxc-project/oxc/pull/26667)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — 同じ内容の隣接する `if` 文をまとめる（[#26445](https://github.com/oxc-project/oxc/pull/26445)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `arguments` コピーのループ書き換えで兄弟の宣言を残す（[#27140](https://github.com/oxc-project/oxc/pull/27140)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — ディレクティブを含む IIFE を畳み込まない（[#27060](https://github.com/oxc-project/oxc/pull/27060)）📦 oxlint_v1.86.0 · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-24 — 圧縮時にテンプレートリテラル中の不要な `$` エスケープを削除（[#26924](https://github.com/oxc-project/oxc/pull/26924)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — dce モードでの `BooleanLiteral` の否定処理の無駄なラップを解消（[#26847](https://github.com/oxc-project/oxc/pull/26847)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/crates_v0.151.0|crates_v0.151.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.152.0|crates_v0.152.0]]
- [[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.153.0|crates_v0.153.0]]
- [[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.154.0|crates_v0.154.0]]
- [[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]
