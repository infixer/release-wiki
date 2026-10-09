---
title: Claude apps gateway
updated: 2026-10-09
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

## 主な API・オプション

- upstream の `models` — その upstream に送るモデルの一覧（`*` でワイルドカード）
- `timeouts.upstream_ttfb_ms` — ストリーム開始までの時間の上限
- `upstream_request_id` — `inference` 監査イベントの upstream のリクエスト ID
- `forceLoginMethod: "gateway"` / `forceLoginGatewayUrl` — `/login` で開く gateway

## 変更履歴

- 2026-10-08 — upstream ごとの `models` 一覧、クラウド upstream での `timeouts.upstream_ttfb_ms`、`upstream_request_id`、`request-id` ヘッダー、ユーザー設定での `forceLoginMethod: "gateway"` を追加。gateway などが context-1m beta を拒否したときに `[1m]` モデルのリクエストがすべて失敗する問題を修正 📦 v2.1.295 · [[repos/anthropics-claude-code/releases/v2.1.295|リリース]]

## 関連

- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- [[repos/anthropics-claude-code/releases/v2.1.295|v2.1.295]]
