---
title: Code Mode
updated: 2026-10-09
tags:
  - repo/openai-codex
  - topic
---

## 概要

コードを介してツールを呼び出す Code Mode の実行・レスポンス処理。この期間、`exec`・`wait` のレスポンスにオプトインのオーバーヘッド計測が追加され、ホスト処理とハンドラー処理の内訳を確認できるようになった。2026-10-07 の回では、Promise の決着順に結果を受け取る `as_settled`・`stream_settled` が追加され、既定で無効の `code_mode_tool_search` を有効にすると `tools.tool_search` で BM25 のランク付きのツール検索ができるようになった。gRPC のセッションの受け付けでは、一時的な失敗を最大 3 回再試行する。2026-10-09 の回では、ツールの説明を名前空間の説明より先に置く開発中の機能 `code_mode_tool_description_first` が追加され、ターンの中断やセルの終了で取り消された動的ツールの呼び出しも失敗のアイテムとして完了するようになった。

## 主な API・オプション

- `features.code_mode.experimental_show_cell_overhead`（既定: 無効）— `exec`・`wait` レスポンスヘッダーにハンドラー処理時間・ホスト処理時間・差分を表示
- `as_settled(promises)` / `stream_settled(promises, emit)` — 決着順に `index`・`status`・`value`/`reason` のレコードを返す（非同期イテレータ／コールバック）
- `tools.tool_search({query, limit})` — `code_mode_tool_search`（既定は無効）で有効。モデルがツール検索に対応している場合に、BM25 でランク付けした遅延ツールを返す
- gRPC のセッション受け付け — `OpenSession` と最初のリースを `Unavailable`・`ResourceExhausted` のとき最大 3 回再試行
- `code_mode_tool_description_first`（開発中、既定は無効）— 入れ子のツール定義とツール検索で、各ツールの説明を名前空間の説明より前に置く

## 変更履歴

- 2026-10-09 — 取り消し時に動的ツールのライフサイクルを完了させる（[#51556](https://github.com/openai/codex/pull/51556)）📦 rust-v0.163.0-alpha.1 · [[repos/openai-codex/changes/2026-10-09|変更]]
- 2026-10-09 — ツールの説明を先に置く機能フラグ `code_mode_tool_description_first`（[#51690](https://github.com/openai/codex/pull/51690)、[#51704](https://github.com/openai/codex/pull/51704)）📦 rust-v0.163.0-alpha.1 · [[repos/openai-codex/changes/2026-10-09|変更]]
- 2026-10-07 — gRPC の Code Mode のセッション受け付けの一時的な失敗を再試行（[#51185](https://github.com/openai/codex/pull/51185)）📦 rust-v0.162.0-alpha.17 · [[repos/openai-codex/changes/2026-10-07|変更]]
- 2026-10-07 — ランク付きのツール検索 `tools.tool_search`（`code_mode_tool_search`、既定は無効）（[#51209](https://github.com/openai/codex/pull/51209)）📦 rust-v0.162.0-alpha.17 · [[repos/openai-codex/changes/2026-10-07|変更]]
- 2026-10-07 — Promise の決着順に結果を受け取る `as_settled`・`stream_settled`（[#51126](https://github.com/openai/codex/pull/51126)）📦 rust-v0.162.0-alpha.17 · [[repos/openai-codex/changes/2026-10-07|変更]]
- 2026-09-24 — Code Mode のレスポンスにオプトインのオーバーヘッド計測を追加（[#46288](https://github.com/openai/codex/pull/46288)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]

## 関連

- [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]
- [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/openai-codex/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/openai-codex/releases/rust-v0.162.0|rust-v0.162.0]]
- [[repos/openai-codex/changes/2026-10-09|2026-10-09 の変更]]
