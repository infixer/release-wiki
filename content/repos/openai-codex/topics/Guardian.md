---
title: Guardian
updated: 2026-09-24
tags:
  - repo/openai-codex
  - topic
---

## 概要

Guardian は Codex のエージェント行動を自動でレビュー・承認する仕組み（同期/非同期レビュー、リスクスコアのキャッシュなど）。この期間は、レビューが参照する証跡やキャッシュの一貫性を高める修正が中心だった。委任先スレッドのレビューに委任元ユーザーの発言を証跡として含められるようになり、非同期のスコア公開はリスクスコア・認可・カバレッジをアトミックに公開するよう修正された。再利用可能な会話履歴プレフィックスは、レビュー・信頼済みツール・スキルの判断が変わっても壊れないよう構成順序が調整され、同期レビュアーは管理された要件下でも選択したリクエストレベルの推論エフォートをそのまま使えるようになった。

## 主な API・オプション

- スレッド所有の Guardian コンテキスト — 委任元ユーザーの直近最大 3 件のローカルメッセージを、権限を持たない参考証跡として同期/非同期レビュアーに提供
- `reasoning_effort_override`（managed requirements）— 同期 Guardian レビューでは無効化され、レビュアーが選択したエフォートがそのまま使われる

## 変更履歴

- 2026-09-24 — 同期 Guardian レビューで選択した推論エフォートが保持されるよう修正（[#46292](https://github.com/openai/codex/pull/46292)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — Guardian の再利用可能な履歴プレフィックスを承認リクエストをまたいで保持するよう修正（[#46279](https://github.com/openai/codex/pull/46279)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — Guardian のキャッシュ済みスコアとカバレッジをアトミックに公開するよう修正（[#46245](https://github.com/openai/codex/pull/46245)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — Guardian の委任レビューに、委任元ユーザーの発言を含めるように（[#46179](https://github.com/openai/codex/pull/46179)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]

## 関連

- [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]
- [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
