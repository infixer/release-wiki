---
title: mod API
updated: 2026-10-09
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

mod（プラグインの hooks モジュール）から使える `$` の API と UI 部品まわり（リリースノートに載った変更）。
`$.tool.register` は `isDeferred: false` でツールのスキーマを、ツール検索の裏ではなく最初からプロンプトに載せられる。
`$.ui.notify` で、ユーザー自身の通知設定を通してネイティブ通知を出せる（どのチャネルから送ったかも示す）。
UI の `Button` は子要素（文字列と `Text`）を持てるようになり、チップや薄い補足を含む一覧の 1 行を 1 つの押せる部品にできる。
`claude plugin test` は mod でも動く。

## 主な API・オプション

- `$.tool.register({ isDeferred })` — `false` でスキーマを最初からプロンプトに載せる
- `$.ui.notify` — ネイティブ通知を出す
- `Button` — 子要素に文字列と `Text` を取れる
- `claude plugin test` — mod のテスト

## 変更履歴

- 2026-10-08 — `$.ui.notify` を追加、`Button` が子要素（文字列と `Text`）を取れるように 📦 v2.1.295 · [[repos/anthropics-claude-code/releases/v2.1.295|リリース]]
- 2026-10-07 — `$.tool.register` に `isDeferred` を追加、`claude plugin test` が mod で失敗する問題を修正 📦 v2.1.293 · [[repos/anthropics-claude-code/releases/v2.1.293|リリース]]

## 関連

- [[repos/anthropics-claude-code/topics/フック|フック]]
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- [[repos/anthropics-claude-code/releases/v2.1.292|v2.1.292]]（`prompt.autocomplete`・`$.model.complete` のプロンプトキャッシュなど、mod 向けの追加を含む）
