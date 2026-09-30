---
title: Guardian
updated: 2026-09-30
tags:
  - repo/openai-codex
  - topic
---

## 概要

Guardian は Codex のエージェント行動を自動でレビュー・承認する仕組み（同期/非同期レビュー、リスクスコアのキャッシュなど）。直近では、レビューが参照する認可の証跡を正確に保つ変更が続いている。ユーザーによる目標（goal）の更新や人間による上書き指示が証跡として保持され、変わらない heartbeat 指示はまとめられるようになった。レビュー中に新しいユーザー入力が来た場合は中止せず最新の証跡で再レビューし、非同期スコアは対象環境の権限（読み取り拒否など）に紐づけてキャッシュされる。端末入力の承認（`write_stdin_approval`）は既定で有効になり、判定結果を OTLP ログへ出力するオプション `otel.log_guardian_assessments` も追加された。2026-09-30 の回では、オプトインの機能として、レビュアーが会話履歴を検索・参照できる `guardian_conversation_history_tools` と、ハンドオフを手がかりにワーカーごとの root 証跡を選ぶ `guardian_root_handoff_context` が追加された。暗号化されたエージェントメッセージもレビューに保持されるようになり、diff 表示の準備でリモートの Git 探索を待たなくなった。

## 主な API・オプション

- スレッド所有の Guardian コンテキスト — 委任元ユーザーの直近最大 3 件のローカルメッセージを、権限を持たない参考証跡として同期/非同期レビュアーに提供
- `reasoning_effort_override`（managed requirements）— 同期 Guardian レビューでは無効化され、レビュアーが選択したエフォートがそのまま使われる
- `write_stdin_approval` — 実行中コマンドへの端末入力を承認の対象にする機能。stable に昇格し既定で有効
- `otel.log_guardian_assessments` — 同期レビューの判定を `codex.guardian_assessment` として OTLP ログに出力（既定は無効）
- `UserGoalUpdate` — ユーザーの目標更新（objective・status・clear）を認可の証跡として記録
- `guardian_conversation_history_tools`（既定は無効）— Apps 経由で `user_message.search_messages` / `user_message.read_messages` をレビュアーに公開。`auto_review.experimental_conversation_history_prompt` で指示を上書き、`auto_review.conversation_history_max_output_tokens`（既定は推定 4,000 トークン）で応答量を制限
- `guardian_root_handoff_context`（既定は無効）— `spawn_agent`・`send_message`・`followup_task` のハンドオフごとに直前の root メッセージ 3 件と最新 3 件を証跡に選ぶ

## 変更履歴

- 2026-09-30 — Guardian の diff 表示でリモートの Git 探索をしないように（[#49082](https://github.com/openai/codex/pull/49082)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — ハンドオフを考慮した root コンテキストを追加（`guardian_root_handoff_context`、オプトイン）（[#49057](https://github.com/openai/codex/pull/49057)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — 暗号化されたエージェントメッセージをレビューに保持（[#49038](https://github.com/openai/codex/pull/49038)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — 会話履歴の検索・参照ツールを追加（`guardian_conversation_history_tools`、オプトイン）（[#49036](https://github.com/openai/codex/pull/49036)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-28 — Guardian の保持コンテキストの空行と空のアシスタントメッセージの扱いを修正（[#48158](https://github.com/openai/codex/pull/48158)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — Guardian の判定結果を OTLP ログに出力するオプションを追加（[#47870](https://github.com/openai/codex/pull/47870)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — 繰り返される heartbeat 指示で人間による上書きが失われないように（[#47851](https://github.com/openai/codex/pull/47851)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — Guardian の非同期スコアを対象環境の権限に紐づけ（[#47830](https://github.com/openai/codex/pull/47830)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — レビュー中に新しいユーザー入力が来ても Guardian レビューをやり直すように（[#47819](https://github.com/openai/codex/pull/47819)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — Guardian の認可判断にユーザーによる目標の更新を反映（[#47811](https://github.com/openai/codex/pull/47811)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — 端末入力の承認（`write_stdin_approval`）が既定で有効に（[#47799](https://github.com/openai/codex/pull/47799)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-24 — 同期 Guardian レビューで選択した推論エフォートが保持されるよう修正（[#46292](https://github.com/openai/codex/pull/46292)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — Guardian の再利用可能な履歴プレフィックスを承認リクエストをまたいで保持するよう修正（[#46279](https://github.com/openai/codex/pull/46279)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — Guardian のキャッシュ済みスコアとカバレッジをアトミックに公開するよう修正（[#46245](https://github.com/openai/codex/pull/46245)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — Guardian の委任レビューに、委任元ユーザーの発言を含めるように（[#46179](https://github.com/openai/codex/pull/46179)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]

## 関連

- [[repos/openai-codex/releases/rust-v0.158.0|rust-v0.158.0]]
- [[repos/openai-codex/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]
- [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/openai-codex/changes/2026-09-30|2026-09-30 の変更]]
