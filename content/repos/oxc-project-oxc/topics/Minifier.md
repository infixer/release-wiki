---
title: Minifier
updated: 2026-10-02
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`oxc_minifier` と codegen。正しさの修正（ディレクティブを含む IIFE の保持、`arguments` コピーのループ書き換えで兄弟の宣言を残す、`BooleanLiteral` の否定処理、テンプレートリテラルの不要な `$` エスケープ削除など）と並行して、圧縮率を上げる最適化も追加されている。同じ内容の隣接する `if` 文の統合、抜ける `if` ブロックの後続文を else 側へまとめて条件式に畳み込む変換、3 項以上のシーケンスを含む条件式の畳み込み、ビット演算の二項式の簡約、同じモジュールからの import 文の統合や import + export の `export ... from` への統合など。crates_v0.152.0 では、式をその場で書き換えるなどアロケーションを減らす性能改善も多数入った。

## 変更履歴

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
