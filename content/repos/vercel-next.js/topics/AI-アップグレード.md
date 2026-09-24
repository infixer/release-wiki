---
title: AIアップグレード
updated: 2026-09-24
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

AI コーディングエージェント（Codex・Claude など）を使って、Next.js アプリのアップグレードや改善を支援するための仕組み。`next upgrade --ai` は、セキュリティ勧告がある場合に安全なメジャーバージョンへの移行をエージェントに任せられるコマンドで、移行に必要なコンテキストと引き継ぎプロンプトを用意する。実験的な `agentFeedback` は、`next dev` を使うエージェントセッション中に遭遇した Next.js の使いにくさを、作業を妨げずに収集する仕組み。どちらも現時点では実験的機能。

## 主な API・オプション

- `next upgrade --ai`（`--experimental-ai="security"` のエイリアス）— セキュリティ勧告があるバージョンからの安全なアップグレードをエージェントに委ねる
- `experimental.agenticAutoUpgrade` — アップグレード成功後に設定される、今後のエージェント/人への通知用フラグ
- `experimental.agentFeedback` / `experimental.agentRules` — `next dev` 実行中の困りごとを匿名化して収集する実験的ワークフロー

## 変更履歴

- 2026-09-24 — 実験的な `agentFeedback` でコーディングエージェントの困りごとを収集（[#98582](https://github.com/vercel/next.js/pull/98582)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `next upgrade --ai` で AI エージェントによるセキュリティアップグレードが可能に（[#98562](https://github.com/vercel/next.js/pull/98562)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
