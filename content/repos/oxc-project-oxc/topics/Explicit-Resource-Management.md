---
title: Explicit-Resource-Management
updated: 2026-09-30
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`oxc_transformer` の ES2026 Explicit Resource Management（`using` / `await using` 宣言）の下位変換。`catch` / `finally` ブロック内の `using` と、通常の `for` 文の初期化子にある `using` も変換するようになった。`for` 文では、途中で抜けた場合や後ろの初期化子でエラーが起きた場合も含め、ループ全体を抜けるときにリソースを破棄する。ラベル付き `continue` がループを指し続けるよう、ラベルは破棄用ラッパーの内側に置かれる。

## 主な API・オプション

- 特になし（`crates/oxc_transformer/src/es2026/explicit_resource_management.rs`）

## 変更履歴

- 2026-09-30 — 通常の `for` 文の初期化子の `using` / `await using` を変換（[#27148](https://github.com/oxc-project/oxc/pull/27148)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `catch` / `finally` ブロック内の `using` / `await using` を変換（[#27142](https://github.com/oxc-project/oxc/pull/27142)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]

## 関連

- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]
- [[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
