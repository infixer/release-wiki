---
title: Claude apps gateway
updated: 2026-11-04
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
v2.1.312 で `oidc.user_id_claim` が加わり、`sub` 以外の id_token のクレーム（Microsoft Entra ID の `oid` など）で利用者を識別できるようになった。
v2.1.314 で upstream に任意の `groups` 一覧が加わり、一覧の IdP グループの開発者だけをその upstream に送れるようになった（failover でも同じ）。Bedrock の upstream には `guardrail_trace` が加わり、どの Bedrock guardrail のフィルターが反応したかを一致したテキスト抜きでログに残せる。tool search の `tool_reference` ブロックを受け付けない gateway の背後では、tool search 無しで 1 回送り直すようになった。
v2.1.316 で、グループのメンバーで共有する月間予算（`pooled_budget`）、一致したポリシーをすべて重ねて適用する `managed.policy_mode: layered`、Bedrock guardrail の prompt attacks フィルター用に入力タグでプロンプトを囲む `guardrail.input_tagging` が加わった。リクエストで指定されたすべてのモデルを `availableModels`・`deniedModels`・`models` で確認するようになり、ブロックされたモデルは該当フィールドを示す 400 になる。
v2.1.317 で、管理 API にコストレポート `GET /v1/organizations/analytics/cost`（期間内の過去の支出を合計・開発者ごと・日ごと・IdP グループごとに取得）が加わった。`admin:` を設定した gateway は各開発者の IdP グループを毎日記録し、`admin.identity_retention_days` の間保持する（コストレポートのグループ分けに使う）。
v2.1.318 で、`mantle` upstream に `assume_role` が加わり、別の AWS アカウントのロールを使ったり、開発者ごとに AWS のコストを割り当てたりできる。

## 主な API・オプション

- upstream の `models` — その upstream に送るモデルの一覧（`*` でワイルドカード）
- `timeouts.upstream_ttfb_ms` — ストリーム開始までの時間の上限
- `upstream_request_id` — `inference` 監査イベントの upstream のリクエスト ID
- `forceLoginMethod: "gateway"` / `forceLoginGatewayUrl` — `/login` で開く gateway
- `managed.policies[]` の `code` — Claude Desktop の Code タブにも `cli` と同じ設定を適用
- `code` ポリシーの `env` の `CLAUDE_CODE_ATTRIBUTION_HEADER=0` — attribution ブロックを外す
- `oidc.user_id_claim` — 利用者の識別に使う id_token のクレーム（既定は `sub`。v2.1.312）
- upstream の `groups` — その upstream に送る開発者の IdP グループ（v2.1.314）
- Bedrock upstream の `guardrail_trace` — 反応した Bedrock guardrail のフィルターをログに残す（v2.1.314）
- spend limits の管理 API の `pooled_budget` — グループで共有する月間予算（各メンバーの上限に加えて適用。v2.1.316）
- `managed.policy_mode: layered` — 一致したポリシーをすべて重ねて適用（v2.1.316）
- Bedrock upstream の `guardrail.input_tagging` — 入力タグでプロンプトを囲む（`all_messages_and_system` でシステムプロンプトも。v2.1.316）
- 管理 API の `GET /v1/organizations/analytics/cost` — 過去の支出のコストレポート（合計・開発者・日・IdP グループごと。v2.1.317）
- `admin.identity_retention_days` — 開発者の IdP グループの日次記録の保持期間（v2.1.317）
- `mantle` upstream の `assume_role` — 別の AWS アカウントのロール・開発者ごとの AWS のコスト割り当て（v2.1.318）

## 変更履歴

- 2026-11-04 — `mantle` upstream に `assume_role` を追加 📦 v2.1.318 · [[repos/anthropics-claude-code/releases/v2.1.318|リリース]]
- 2026-11-03 — 管理 API にコストレポート `GET /v1/organizations/analytics/cost`、IdP グループの日次記録（`admin.identity_retention_days`）を追加。base URL の LLM gateway が安全チェックに 403・422 を返すと auto mode が毎ターン失敗する問題を修正 📦 v2.1.317 · [[repos/anthropics-claude-code/releases/v2.1.317|リリース]]
- 2026-10-31 — `pooled_budget`・`managed.policy_mode: layered`・`guardrail.input_tagging` を追加。リクエストのすべてのモデルを `availableModels`・`deniedModels`・`models` で確認するよう修正 📦 v2.1.316 · [[repos/anthropics-claude-code/releases/v2.1.316|リリース]]
- 2026-10-30 — upstream に `groups`、Bedrock upstream に `guardrail_trace` を追加。`tool_reference` を受け付けない gateway の背後で拒否が続く問題を修正 📦 v2.1.314 · [[repos/anthropics-claude-code/releases/v2.1.314|リリース]]
- 2026-10-28 — `oidc.user_id_claim` を追加（Entra ID の `oid` などで利用者を識別）📦 v2.1.312 · [[repos/anthropics-claude-code/releases/v2.1.312|リリース]]
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
- [[repos/anthropics-claude-code/releases/v2.1.312|v2.1.312]]
- [[repos/anthropics-claude-code/releases/v2.1.314|v2.1.314]]
- [[repos/anthropics-claude-code/releases/v2.1.316|v2.1.316]]
- [[repos/anthropics-claude-code/releases/v2.1.317|v2.1.317]]
- [[repos/anthropics-claude-code/releases/v2.1.318|v2.1.318]]
