---
title: oxc_str
updated: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

文字列まわりのクレート `oxc_str`。#26242 の一部として、JavaScript の文字列を扱う `JSStr`・`JSChar`・`JSStrBuilder` 型と多数のメソッドが追加された（後続 PR で利用予定）。

## 主な API・オプション

- `JSStr` / `JSChar` / `JSStrBuilder` — JavaScript 文字列用の型
- `JSChar::is_lead_surrogate` / `is_trail_surrogate`

## 変更履歴

- 2026-09-28 — `JSStr`・`JSChar`・`JSStrBuilder` 型を追加（[#26435](https://github.com/oxc-project/oxc/pull/26435)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
