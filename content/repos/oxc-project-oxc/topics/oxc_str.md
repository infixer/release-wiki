---
title: oxc_str
updated: 2026-10-23
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

文字列まわりのクレート `oxc_str`。#26242 の一部として、JavaScript の文字列を扱う `JSStr`・`JSChar`・`JSStrBuilder` 型と多数のメソッドが追加された（後続 PR で利用予定）。AST の文字列リテラルとテンプレートは `JSStr` に移行し（[#26548](https://github.com/oxc-project/oxc/pull/26548)）、静的なメンバー名・プロパティ名のヘルパーも `JSStr` を返すようになった。診断用の `JSStr::display()`（孤立サロゲートを `\uXXXX` と出力）も加わった（未リリース）。crates_v0.155.0・oxlint_v1.89.0（2026-10-19）で、AST の静的な名前の `JSStr` 化が公開された。あわせて、JSX の文字参照を孤立サロゲートとしてデコード（`decode_entities` は `JSStrBuilder` に書き込み、`decode_entity` は `JSChar` を返す）、`JSStr` に WTF-8 のまま検索する `contains`・`starts_with`・`ends_with`・`find`・`rfind` を追加して lint ルールが孤立サロゲートを含む値もチェック、`StaticPropertyName` は `Display` の代わりに `display()` を持つ（出力は単射でないので比較・キーには使わない）、といった変更が入った。その後（未リリース）、定数評価の `ConstantValue::String` も `JSStr` になった。孤立サロゲートを含む名前を飛ばしていた enum の重複チェックと一部の lint ルールも、名前を比較して報告するようになった（診断では `\ud800` とエスケープ。未リリース）。

## 主な API・オプション

- `JSStr` / `JSChar` / `JSStrBuilder` — JavaScript 文字列用の型
- `JSChar::is_lead_surrogate` / `is_trail_surrogate`

## 変更履歴

- 2026-10-23 — 孤立サロゲートを含む名前も enum の重複チェック・lint ルールで報告（[#27991](https://github.com/oxc-project/oxc/pull/27991)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-21 — 定数評価の `ConstantValue::String` を `JSStr` に（[#27098](https://github.com/oxc-project/oxc/pull/27098)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — `StaticPropertyName` の `Display` を `display()` に置き換え（破壊的変更）（[#27950](https://github.com/oxc-project/oxc/pull/27950)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — `JSStr` に `contains`・`starts_with`・`ends_with`・`find`・`rfind` を追加し、lint ルールで使う（[#26716](https://github.com/oxc-project/oxc/pull/26716)、[#26717](https://github.com/oxc-project/oxc/pull/26717)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — JSX の文字参照を孤立サロゲートとしてデコード（破壊的変更）（[#26712](https://github.com/oxc-project/oxc/pull/26712)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-16 — AST の文字列リテラル・テンプレートを `JSStr` に移行し、静的なメンバー名・プロパティ名でも `JSStr` を使う。`JSStr::display()` を追加（[#26548](https://github.com/oxc-project/oxc/pull/26548)、[#26677](https://github.com/oxc-project/oxc/pull/26677)、[#27095](https://github.com/oxc-project/oxc/pull/27095)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-09-28 — `JSStr`・`JSChar`・`JSStrBuilder` 型を追加（[#26435](https://github.com/oxc-project/oxc/pull/26435)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.152.0|crates_v0.152.0]]
- [[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/oxc-project-oxc/releases/crates_v0.155.0|crates_v0.155.0]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.89.0|oxlint_v1.89.0]]
- [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23 の変更]]
