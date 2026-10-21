---
title: mod API
updated: 2026-10-21
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
v2.1.299〜v2.1.301 で UI 部品が増えた: `Text` の `size`・`weight`・`mono`・`tabular`・`dir`（右から左）、`Box` の名前付き間隔（`xs`〜`xl`）、`Input` の `rows`（複数行）、プロンプトの装飾の `virtualText`。`bold` は非推奨で `weight` に置き換え。
フックでは `prompt.change` が加わり、`agent.spawn` でワークフローのエージェントの `prompt`・`model` を書き換えられ、`skill.prompt` はスキルの frontmatter などを受け取り、`session.append` には `queue` がある。`$.ui.view({ agentId })` でエージェントの transcript をメインビューに出せる。
managed settings でインストールした mod は `$.prompt.media`（添付の画像・文書のバイト列）と `$.session.identity()` を使える。
v2.1.304 で `tool.check` の回答に `decider: "person"`（権限ダイアログかホストのコールバックだけが承認でき、尋ねる相手がいなければ拒否）が、イベントに `e.isReadOnly` が加わった。

## 主な API・オプション

- `$.tool.register({ isDeferred })` — `false` でスキーマを最初からプロンプトに載せる
- `$.ui.notify` — ネイティブ通知を出す
- `Button` — 子要素に文字列と `Text` を取れる
- `claude plugin test` — mod のテスト
- `Text` の `size` / `weight` / `mono` / `tabular` / `dir`、`Box` の `xs`〜`xl`、`Input` の `rows` — UI 部品の追加（`bold` は非推奨）
- プロンプトの装飾の `virtualText` — 下書き・送信に入らない表示用テキスト
- `$.ui.view({ agentId })` / `$.ui.view({})` — エージェントの transcript の表示と戻り
- `prompt.change` / `agent.spawn` / `skill.prompt` / `session.append`（`queue`）— mod のフック
- `$.prompt.media` / `$.session.identity()` — managed settings でインストールした mod 向け
- `tool.check` の `decider: "person"` / `e.isReadOnly` — 人だけが承認できる ask と、読み取り専用の呼び出しの判定（v2.1.304）

## 変更履歴

- 2026-10-19 — `tool.check` の回答に `decider: "person"`、イベントに `e.isReadOnly` を追加。先に動くプラグインが mod のフックを飛ばすと transcript に行を出すように。mod の再読み込み失敗で残る版のツール・コマンドが消える問題、同じラベルで `key` の無いボタンのクリックが失われる問題を修正 📦 v2.1.304 · [[repos/anthropics-claude-code/releases/v2.1.304|リリース]]
- 2026-10-15 — `Input` に `rows`（複数行のテキスト欄）を追加 📦 v2.1.301 · [[repos/anthropics-claude-code/releases/v2.1.301|リリース]]
- 2026-10-14 — `virtualText`、`$.ui.view({ agentId })`、`Text` の `dir`、`prompt.change` フックを追加、`agent.spawn` でワークフローのエージェントの `prompt`・`model` を書き換え可能に 📦 v2.1.300 · [[repos/anthropics-claude-code/releases/v2.1.300|リリース]]
- 2026-10-14 — `$.prompt.media`・`$.session.identity()`、`Text` の `size`・`weight`・`mono`・`tabular`、`Box` の間隔、`skill.prompt` の追加情報、`session.append` の `queue` を追加。`/plugin`・`claude plugin validate` で飛ばされるフックを注記 📦 v2.1.299 · [[repos/anthropics-claude-code/releases/v2.1.299|リリース]]
- 2026-10-09 — mod の `prompt.submit` フックの実行中の Esc・中断で、ヘッドレスセッションが終わる・入力が消える・チェック前のプロンプトが通る問題を修正 📦 v2.1.296 · [[repos/anthropics-claude-code/releases/v2.1.296|リリース]]
- 2026-10-08 — `$.ui.notify` を追加、`Button` が子要素（文字列と `Text`）を取れるように 📦 v2.1.295 · [[repos/anthropics-claude-code/releases/v2.1.295|リリース]]
- 2026-10-07 — `$.tool.register` に `isDeferred` を追加、`claude plugin test` が mod で失敗する問題を修正 📦 v2.1.293 · [[repos/anthropics-claude-code/releases/v2.1.293|リリース]]

## 関連

- [[repos/anthropics-claude-code/topics/フック|フック]]
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- [[repos/anthropics-claude-code/releases/v2.1.292|v2.1.292]]（`prompt.autocomplete`・`$.model.complete` のプロンプトキャッシュなど、mod 向けの追加を含む）
- [[repos/anthropics-claude-code/releases/v2.1.296|v2.1.296]]
- [[repos/anthropics-claude-code/releases/v2.1.299|v2.1.299]]
- [[repos/anthropics-claude-code/releases/v2.1.300|v2.1.300]]
- [[repos/anthropics-claude-code/releases/v2.1.301|v2.1.301]]
- [[repos/anthropics-claude-code/topics/エージェントビュー|エージェントビュー]]
- [[repos/anthropics-claude-code/releases/v2.1.304|v2.1.304]]
