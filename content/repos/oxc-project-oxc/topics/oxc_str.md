---
title: oxc_str
updated: 2026-10-16
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

文字列まわりのクレート `oxc_str`。#26242 の一部として、JavaScript の文字列を扱う `JSStr`・`JSChar`・`JSStrBuilder` 型と多数のメソッドが追加された（後続 PR で利用予定）。AST の文字列リテラルとテンプレートは `JSStr` に移行し（[#26548](https://github.com/oxc-project/oxc/pull/26548)）、静的なメンバー名・プロパティ名のヘルパーも `JSStr` を返すようになった。診断用の `JSStr::display()`（孤立サロゲートを `\uXXXX` と出力）も加わった（未リリース）。

## 主な API・オプション

- `JSStr` / `JSChar` / `JSStrBuilder` — JavaScript 文字列用の型
- `JSChar::is_lead_surrogate` / `is_trail_surrogate`

## 変更履歴

- 2026-10-16 — AST の文字列リテラル・テンプレートを `JSStr` に移行し、静的なメンバー名・プロパティ名でも `JSStr` を使う。`JSStr::display()` を追加（[#26548](https://github.com/oxc-project/oxc/pull/26548)、[#26677](https://github.com/oxc-project/oxc/pull/26677)、[#27095](https://github.com/oxc-project/oxc/pull/27095)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-09-28 — `JSStr`・`JSChar`・`JSStrBuilder` 型を追加（[#26435](https://github.com/oxc-project/oxc/pull/26435)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.152.0|crates_v0.152.0]]
- [[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]
