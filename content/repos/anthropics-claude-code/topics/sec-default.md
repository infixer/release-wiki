---
title: sec-default
updated: 2026-09-30
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

`mods/sec-default`（`cc-plugin-sec-default@builtin`）は、組織が managed settings で seat するセキュリティの既定を担う mod。CLI が各プラグインに付ける tier（組織・個人など）を使い、個人（user tier）のプラグインがセキュリティ上重要な判断を変えられないようにする。`prompt.section`・`prompt.context`・`prompt.compose` など、モデルに伝える内容を形作るイベントは user tier を飛ばして続き、`tool.check` では個人のプラグインが settings の deny ルールを allow / ask で上書きできない。さらに managed option `allowManagedModsOnly` で、個人がインストールした mod の読み込み自体を拒否できる。オプションはすべて policy ソース（managed settings）からだけ読まれる。sec-default が seated されていない環境では挙動は変わらない。

## 主な API・オプション

- `pluginConfigs["cc-plugin-sec-default@builtin"].options.allowManagedModsOnly` — 個人がインストールした hooks モジュールを `plugin.register` で拒否
- `pluginConfigs["cc-plugin-sec-default@builtin"].options.allowModsToOverrideDenyRules: true` — 個人のプラグインによる deny ルールの上書きを許す（オプトアウト）
- `prompt.compose` — システムプロンプトをセクション一覧として構成するイベント（user tier を飛ばす）

## 変更履歴

- 2026-09-30 — `prompt.compose` も user tier を飛ばし、個人のプラグインがシステムプロンプトのセクションを変えられないように（[#97241](https://github.com/anthropics/claude-code/pull/97241)）⏳ 未リリース · [[repos/anthropics-claude-code/changes/2026-09-30|変更]]
- 2026-09-30 — settings の deny ルールが、個人のプラグインの allow / ask より優先されるように（`allowModsToOverrideDenyRules` でオプトアウト可）（[#98080](https://github.com/anthropics/claude-code/pull/98080)）📦 v2.1.285 · [[repos/anthropics-claude-code/changes/2026-09-30|変更]]
- 2026-09-30 — managed option `allowManagedModsOnly` を追加（[#98083](https://github.com/anthropics/claude-code/pull/98083)）📦 v2.1.285 · [[repos/anthropics-claude-code/changes/2026-09-30|変更]]

## 関連

- [[repos/anthropics-claude-code/releases/v2.1.285|v2.1.285]]
- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]
