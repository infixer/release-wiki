---
title: AIアップグレード
updated: 2026-09-28
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

AI コーディングエージェント（Codex・Claude など）を使って、Next.js アプリのアップグレードや改善を支援するための仕組み。`next upgrade --ai` は、セキュリティ勧告がある場合に安全なバージョンへの移行をエージェントに任せられるコマンドで、移行に必要なコンテキストと引き継ぎプロンプトを用意する。渡すコンテキストは「異なるメジャー」「同じメジャー」「将来のデフォルト」に分かれ、該当するものだけが渡される。Git が無いアプリではその場で、Git があれば worktree・コミット・プルリクエストを使ってアップグレードし、worktree を使うかどうかはユーザーに確認する（未リリース）。アドバイザリは npm に対象バージョンだけを照会し、準備のできたアップグレード先があるときだけ通知する。実験的な `agentFeedback` は、`next dev` を使うエージェントセッション中に遭遇した Next.js の使いにくさを、作業を妨げずに収集する仕組み。

## 主な API・オプション

- `next upgrade --ai`（`--experimental-ai="security"` のエイリアス）— セキュリティ勧告があるバージョンからの安全なアップグレードをエージェントに委ねる
- `experimental.agenticAutoUpgrade` — アップグレード成功後に設定される、今後のエージェント/人への通知用フラグ
- `experimental.agentFeedback` / `experimental.agentRules` — `next dev` 実行中の困りごとを匿名化して収集する実験的ワークフロー

## 変更履歴

- 2026-09-28 — アップグレードを別の worktree で行うかユーザーに確認するように（[#99232](https://github.com/vercel/next.js/pull/99232)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — npm のアドバイザリ照会を絞り込み、準備のできたアップグレードだけを通知（[#99222](https://github.com/vercel/next.js/pull/99222)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — Git の無いアプリでもエージェントによるアップグレードが可能に（[#99217](https://github.com/vercel/next.js/pull/99217)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — エージェントによるアップグレードに必要なコンテキストだけを渡すように（[#99189](https://github.com/vercel/next.js/pull/99189)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — AI アップグレードの引き継ぎに 1M コンテキストの Sonnet 5 を使用（[#99183](https://github.com/vercel/next.js/pull/99183)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-24 — 実験的な `agentFeedback` でコーディングエージェントの困りごとを収集（[#98582](https://github.com/vercel/next.js/pull/98582)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `next upgrade --ai` で AI エージェントによるセキュリティアップグレードが可能に（[#98562](https://github.com/vercel/next.js/pull/98562)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
