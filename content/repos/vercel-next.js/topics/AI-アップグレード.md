---
title: AIアップグレード
updated: 2026-10-09
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

AI コーディングエージェント（Codex・Claude など）を使って、Next.js アプリのアップグレードや改善を支援するための仕組み。`next upgrade --agent`（旧 `--ai` / `--experimental-ai`。用語は「Agent」に統一された）は、セキュリティ勧告がある場合に安全なバージョンへの移行をエージェントに任せられるコマンドで、移行に必要なコンテキストと引き継ぎプロンプトを用意する。渡すコンテキストは「異なるメジャー」「同じメジャー」「将来のデフォルト」に分かれ、該当するものだけが渡される。Git が無いアプリではその場で、Git があれば worktree・コミット・プルリクエストを使ってアップグレードし、worktree を使うかどうかはユーザーに確認する（未リリース）。アドバイザリは npm に対象バージョンだけを照会し、準備のできたアップグレード先があるときだけ通知する。実験的な `agentFeedback` は、`next dev` を使うエージェントセッション中に遭遇した Next.js の使いにくさを、作業を妨げずに収集する仕組みで（問題を解決した後も候補を報告まで保持し、レビュー URL は常に最終応答に含める）、`create-next-app` の推奨デフォルトにも含まれるようになった。エージェント向けのアップグレード通知は `experimental.agentUpgrade`（旧 `experimental.agenticAutoUpgrade`）として既定で有効（`'security'` ポリシー）になり、通知・引き継ぎ・完了は既存のテレメトリで計測される。コードモッドの実行時は `package.json#packageManager` で宣言されたパッケージマネージャーが優先される。エージェントで使うモデルと推論の強さは、ハードコードせずにエージェントの CLI から取得するようになり、プロンプトには選択肢が表示される。アップグレードを促すメニューの表示中も `next dev` / `next build` は子プロセスで動き続ける。create-next-app は `experimental.agentFeedback` を有効にしたとき、`AGENTS.md` に `nextjs-agent-feedback` ブロックも最初から書くようになった。

## 主な API・オプション

- `next upgrade --agent`（旧 `--ai` / `--experimental-ai`）— セキュリティ勧告があるバージョンからの安全なアップグレードをエージェントに委ねる。テレメトリのイベントは `NEXT_AGENT_UPGRADE_*`、設定の名前空間は `agent-upgrade.*`
- `experimental.agentUpgrade`（旧 `experimental.agenticAutoUpgrade`）— エージェント/人へのアップグレード通知のポリシー。既定は `'security'`、ほかに `'experimental-future'`（旧 `future`）や `false`
- `next internal report-ai-upgrade <run-id> success|failure` — エージェントが AI アップグレードの完了を報告するコマンド（テレメトリ用）。[#99545](https://github.com/vercel/next.js/pull/99545) で完了レポーターは「Agent」の用語に合わせて改名された
- `experimental.agentFeedback` / `experimental.agentRules` — `next dev` 実行中の困りごとを匿名化して収集する実験的ワークフロー
- `create-next-app --agent-feedback` / `--no-agent-feedback` — 新規アプリで `experimental.agentFeedback` を有効/無効にする（対話式の推奨デフォルトでは有効）

## 変更履歴

- 2026-10-09 — create-next-app が `AGENTS.md` にエージェントのフィードバック用ブロックも書くように（[#99813](https://github.com/vercel/next.js/pull/99813)）📦 v16.5.0-canary.5 · [[repos/vercel-next.js/changes/2026-10-09|変更]]
- 2026-10-07 — アップグレードのモデルと推論の強さをエージェントの CLI から取得（[#99736](https://github.com/vercel/next.js/pull/99736)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — エージェントのアップグレードのプロンプトで選択肢を表示（[#99727](https://github.com/vercel/next.js/pull/99727)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — アップグレードのプロンプト表示中も `next dev` / `next build` を止めない（[#99702](https://github.com/vercel/next.js/pull/99702)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-05 — アップグレード関連の用語を「Agent」に統一し、`--ai` を `--agent` に（[#99545](https://github.com/vercel/next.js/pull/99545)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — エージェントフィードバックの報告を確実に（候補の保持・レビュー URL の常時表示）（[#99591](https://github.com/vercel/next.js/pull/99591)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-02 — AI アップグレードの通知・引き継ぎ・完了をテレメトリで計測（[#99465](https://github.com/vercel/next.js/pull/99465)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — アップグレード時に宣言されたパッケージマネージャーを優先（[#99471](https://github.com/vercel/next.js/pull/99471)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — エージェントによるアップグレード通知を既定で有効に、`experimental.agentUpgrade` に改名（[#99311](https://github.com/vercel/next.js/pull/99311), [#99461](https://github.com/vercel/next.js/pull/99461)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-09-30 — create-next-app の推奨デフォルトにエージェントフィードバックを追加（[#99119](https://github.com/vercel/next.js/pull/99119)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-28 — アップグレードを別の worktree で行うかユーザーに確認するように（[#99232](https://github.com/vercel/next.js/pull/99232)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — npm のアドバイザリ照会を絞り込み、準備のできたアップグレードだけを通知（[#99222](https://github.com/vercel/next.js/pull/99222)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — Git の無いアプリでもエージェントによるアップグレードが可能に（[#99217](https://github.com/vercel/next.js/pull/99217)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — エージェントによるアップグレードに必要なコンテキストだけを渡すように（[#99189](https://github.com/vercel/next.js/pull/99189)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — AI アップグレードの引き継ぎに 1M コンテキストの Sonnet 5 を使用（[#99183](https://github.com/vercel/next.js/pull/99183)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-24 — 実験的な `agentFeedback` でコーディングエージェントの困りごとを収集（[#98582](https://github.com/vercel/next.js/pull/98582)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `next upgrade --ai` で AI エージェントによるセキュリティアップグレードが可能に（[#98562](https://github.com/vercel/next.js/pull/98562)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/vercel-next.js/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/vercel-next.js/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/vercel-next.js/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/vercel-next.js/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
