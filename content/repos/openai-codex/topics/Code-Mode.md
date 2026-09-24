---
title: Code Mode
updated: 2026-09-24
tags:
  - repo/openai-codex
  - topic
---

## 概要

コードを介してツールを呼び出す Code Mode の実行・レスポンス処理。この期間、`exec`・`wait` のレスポンスにオプトインのオーバーヘッド計測が追加され、ホスト処理とハンドラー処理の内訳を確認できるようになった。

## 主な API・オプション

- `features.code_mode.experimental_show_cell_overhead`（既定: 無効）— `exec`・`wait` レスポンスヘッダーにハンドラー処理時間・ホスト処理時間・差分を表示

## 変更履歴

- 2026-09-24 — Code Mode のレスポンスにオプトインのオーバーヘッド計測を追加（[#46288](https://github.com/openai/codex/pull/46288)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]

## 関連

- [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]
- [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
