---
title: Claude apps gateway
updated: 2026-10-23
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

Claude apps gateway（Anthropic API・Amazon Bedrock・Vertex・Foundry などの upstream に推論を振り分けるゲートウェイ）まわり。
各 upstream には任意の `models` 一覧を設定でき、一覧のモデルだけがそこへ送られる（failover でも同じ。`*` 1 つでワイルドカード）。
クラウドの upstream でも `timeouts.upstream_ttfb_ms` が効き、ストリームの開始が遅いと failover するか 502 になる。
サポート用に、`inference` 監査イベントに upstream のリクエスト ID（`upstream_request_id`）が入り、成功した推論レスポンスには `request-id` ヘッダーが付く（Claude Code のテレメトリの `request_id` と監査ログが一致する）。
managed settings の無いマシンでも、ユーザー設定の `forceLoginMethod: "gateway"` と `forceLoginGatewayUrl` で `/login` を gateway に向けられる。
`managed.policies[]` には `code` キーがあり、`cli` と同じ設定を Claude Desktop の Code タブにも適用する（`desktop` と並べると Claude Desktop の gateway モードを有効にする）。
`allowedProviders` に `"gateway"` を返す gateway が、ユーザー設定でその gateway を指定したノート PC を締め出す問題と、managed settings が `forceLoginMethod: "gateway"` で `forceLoginGatewayUrl` を指定しないマシンで保存済みのサインインが無視される問題（2.1.295 での退行）は v2.1.296 で修正された。
v2.1.299 で、gateway の背後の Claude Code セッションの attribution ブロックにフィールドが加わり、`code` ポリシーの `env` に `CLAUDE_CODE_ATTRIBUTION_HEADER=0` を設定すると Claude Desktop の Code タブでも attribution ブロックを外せるようになった。
v2.1.307 で、gateway のセッションで `CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS` が無視される問題と、`OTEL_EXPORTER_OTLP_HEADERS` を設定すると gateway の背後の Claude Desktop セッションのテレメトリが拒否される問題が修正された。

## 主な API・オプション

- upstream の `models` — その upstream に送るモデルの一覧（`*` でワイルドカード）
- `timeouts.upstream_ttfb_ms` — ストリーム開始までの時間の上限
- `upstream_request_id` — `inference` 監査イベントの upstream のリクエスト ID
- `forceLoginMethod: "gateway"` / `forceLoginGatewayUrl` — `/login` で開く gateway
- `managed.policies[]` の `code` — Claude Desktop の Code タブにも `cli` と同じ設定を適用
- `code` ポリシーの `env` の `CLAUDE_CODE_ATTRIBUTION_HEADER=0` — attribution ブロックを外す

## 変更履歴

- 2026-10-21 — gateway のセッションで `CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS` が無視される問題、`OTEL_EXPORTER_OTLP_HEADERS` 設定時に Claude Desktop セッションのテレメトリが拒否される問題を修正 📦 v2.1.307 · [[repos/anthropics-claude-code/releases/v2.1.307|リリース]]
- 2026-10-14 — gateway の背後のセッションの attribution ブロックにフィールドを追加、`CLAUDE_CODE_ATTRIBUTION_HEADER=0` で Claude Desktop の Code タブでも外せるように 📦 v2.1.299 · [[repos/anthropics-claude-code/releases/v2.1.299|リリース]]
- 2026-10-09 — `managed.policies[]` に `code` キーを追加。`allowedProviders` の `"gateway"` によるロックアウトと、保存済みの gateway サインインが無視される退行を修正 📦 v2.1.296 · [[repos/anthropics-claude-code/releases/v2.1.296|リリース]]
- 2026-10-08 — upstream ごとの `models` 一覧、クラウド upstream での `timeouts.upstream_ttfb_ms`、`upstream_request_id`、`request-id` ヘッダー、ユーザー設定での `forceLoginMethod: "gateway"` を追加。gateway などが context-1m beta を拒否したときに `[1m]` モデルのリクエストがすべて失敗する問題を修正 📦 v2.1.295 · [[repos/anthropics-claude-code/releases/v2.1.295|リリース]]

## 関連

- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- [[repos/anthropics-claude-code/releases/v2.1.295|v2.1.295]]
- [[repos/anthropics-claude-code/releases/v2.1.296|v2.1.296]]
- [[repos/anthropics-claude-code/releases/v2.1.299|v2.1.299]]
- [[repos/anthropics-claude-code/releases/v2.1.307|v2.1.307]]
