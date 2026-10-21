---
title: Minifier
updated: 2026-10-21
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`oxc_minifier` と codegen。正しさの修正（ディレクティブを含む IIFE の保持、`arguments` コピーのループ書き換えで兄弟の宣言を残す、`BooleanLiteral` の否定処理、テンプレートリテラルの不要な `$` エスケープ削除など）と並行して、圧縮率を上げる最適化も追加されている。同じ内容の隣接する `if` 文の統合、抜ける `if` ブロックの後続文を else 側へまとめて条件式に畳み込む変換、3 項以上のシーケンスを含む条件式の畳み込み、ビット演算の二項式の簡約、同じモジュールからの import 文の統合や import + export の `export ... from` への統合など。条件式・論理式の中の入れ子のシーケンスの処理は `minimize_sequences.rs` にまとめられ、冪等になるよう修正された。crates_v0.152.0 では、式をその場で書き換えるなどアロケーションを減らす性能改善も多数入った。委譲しない `yield` の `undefined` 引数も畳み込む（グローバルなら `void 0`）。codegen では、`-` の後の負の `BigIntLiteral` が `--1n` と出力される問題（Minifier の出力でも発生）を Rust・JS の両方で直した（crates_v0.154.0 で公開）。定数の引数で呼ばれる未使用の IIFE（アロー関数と strict な通常関数）を除去する最適化と、空の `do…while` の本体の前に余分なインデントを出さない codegen の修正も入った（crates_v0.154.0 で公開）。`delete` 式の扱いも直り、NaN・Infinity への畳み込みで `delete` の結果が変わらないよう `delete 0` に変換し、さらに可能な場合は `delete` 式を `true` / `false` に畳み込むようになった（crates_v0.154.0 で公開）。codegen では `ArrayPattern` の先頭の `RestElement` の前の余分な空白を Rust・JS の両方で削除し、JS の codegen（`packages/codegen`）は `V8IntrinsicExpression` に対応したうえで megamorphic な `type` 読み取りの削減などで高速化した（crates_v0.154.0）。sloppy モードの `arguments` まわりでは、mapped arguments を通して見える引数への書き込みを保ち、semantic が通常の関数の暗黙の `arguments` を外側の宣言に解決しないよう直した（crates_v0.154.0）。`Math.cbrt` の負の数を `NaN` に畳み込む誤りも修正された（未リリース）。さらに未リリースの修正として、呼び出し先・タグへの畳み込みで `(0, x)` の間接アクセスを保つ、実行されない `for` ループの `let` / `const` の初期化子を保つ、定数評価で BigInt の `==`・`Number.isInteger` / `isSafeInteger`・`parseFloat` の誤った畳み込みを直す、といった変更が入った。void の文脈の論理式にド・モルガンの最適化も加わった（未リリース）。副作用の無い単純な値だけの配列の `join` も畳み込むようになった（未リリース）。2026-10-19 公開の crates_v0.155.0 で、ここまで未リリースだった定数評価の修正・ド・モルガンの最適化・`join` の畳み込みが公開され、文字列の添字も UTF-16 コード単位で畳み込むようになった（孤立サロゲートにも対応）。その後（未リリース）、文字列の定数評価が `JSStr` を使うようになり孤立サロゲートを含む文字列も畳み込め、`indexOf`・`lastIndexOf`・`substring`・`slice` が UTF-16 単位の 1 つの実装を共有する（誤った畳み込みも解消。`ConstantValue::String` などの API は破壊的変更）。`to_primitive` はシーケンス式の最後の式を見るようになり（crates_v0.155.0）、定数メンバーの `delete`（`delete "a"[0]` など）を値へ畳み込まないよう直した（未リリース）。

## 変更履歴

- 2026-10-21 — 定数メンバーの `delete` を値に畳み込まない（0.155.0 で生じた `delete "😀"[0]` → `!0` などを修正）（[#27990](https://github.com/oxc-project/oxc/pull/27990)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — 文字列の定数評価を `JSStr` に移行し、孤立サロゲートを含む文字列も畳み込む。`indexOf` などを UTF-16 単位の実装に統一（破壊的変更）（[#27098](https://github.com/oxc-project/oxc/pull/27098)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — 文字列の添字を UTF-16 コード単位で畳み込む（[#27096](https://github.com/oxc-project/oxc/pull/27096)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — `to_primitive` がシーケンス式の最後の式を見る（`true + (x, [])` の誤った畳み込みを修正）（[#27837](https://github.com/oxc-project/oxc/pull/27837)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-19 — 副作用の無い値だけの配列の `join` 呼び出しを畳み込む（[#27905](https://github.com/oxc-project/oxc/pull/27905)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-19|変更]]
- 2026-10-16 — void の文脈の論理式にド・モルガンの最適化を追加（[#27375](https://github.com/oxc-project/oxc/pull/27375)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-16 — 実行されない `for` ループのレキシカル宣言の初期化子を保つ（[#27676](https://github.com/oxc-project/oxc/pull/27676)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-16 — 定数評価: BigInt の `==`、ごく小さい非整数の `Number.isInteger` / `isSafeInteger`、`parseFloat` の畳み込みを修正（[#27656](https://github.com/oxc-project/oxc/pull/27656)、[#27622](https://github.com/oxc-project/oxc/pull/27622)、[#27695](https://github.com/oxc-project/oxc/pull/27695)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-16 — 呼び出し先・タグへの畳み込みで間接アクセス（`(0, x)`）を保つ（[#27082](https://github.com/oxc-project/oxc/pull/27082)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
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
- [[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.155.0|crates_v0.155.0]]
- [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
