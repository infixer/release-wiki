---
title: create-next-app
updated: 2026-10-30
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

新しい Next.js アプリを作る CLI `create-next-app` の対話形式の質問・既定値・テンプレート。v16.5.0-canary.32 で「Would you like to use App Router? (recommended)」の質問が無くなり、`--no-app` か `--api` を渡さない限り常に App Router のプロジェクトが作られるようになった。前回の実行で保存された `app` の設定は無視され、「推奨の既定値」「前回の設定を再利用」の要約にも App Router / Pages Router は表示されない。Pages のテンプレート自体は `--no-app` で引き続き使える。

## 主な API・オプション

- `--no-app` — Pages Router のプロジェクトを作る（明示的なオプトアウト）
- `--api` — API 用のテンプレート（App Router の既定は適用されない）
- `--agent-feedback` / `--no-agent-feedback` — `experimental.agentFeedback` の有効/無効（[[repos/vercel-next.js/topics/AI-アップグレード|AIアップグレード]]）

## 変更履歴

- 2026-10-29 — App Router の質問を削除し、常に App Router を使う（保存済みの `app` の設定は無視）（[#100850](https://github.com/vercel/next.js/pull/100850)）📦 v16.5.0-canary.32 · [[repos/vercel-next.js/changes/2026-10-30|変更]]

## 関連

- [[repos/vercel-next.js/topics/ルーティング|ルーティング]]
