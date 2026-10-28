---
title: openai/codex rust-v0.165.0
date: 2026-10-28
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.165.0) · 公開: 2026-10-27

## 要点

- 新機能: 組み込みの Google Cloud Vertex AI のプロバイダーを追加。`model_provider = "gcp"` で設定する（#56265）
- 新機能: モデルカタログに GPT-6.1 Terra を追加（#57337）
- 新機能: セッションのピッカーにリポジトリのフィルター、エージェントのコマンドセンターにディレクトリのグループ分けを追加し、リンクした worktree をまたいでセッションを探しやすくした（[#56308](https://github.com/openai/codex/pull/56308)）
- 新機能: app-server の API に実験的な、ソースに結び付けたスレッドの fork を追加（[#56351](https://github.com/openai/codex/pull/56351)）
- 新機能: 対応するモデルで、会話の途中で推論の強さを変える機能を既定で有効に（#56163）
- 新機能: 新しいプロファイルでメモリ v2 を既定で有効にし、外部エージェントのメモリを v2 に取り込めるように（#56211, [#56414](https://github.com/openai/codex/pull/56414)）
- 修正: 新しい TUI のセッションで、明示的な指定が無ければサーバーの既定の承認のレビュアーに従う（#56090）。実行の設定が不正でも TUI の設定を編集でき、すぐに反映する（#56091）
- 修正: ローカルの応答の future が破棄されたらリモートの MCP のツールのリクエストを取り消す（#56132）。中断や Plan モードへの切り替えの後に、キューのエージェントのメッセージが作業を再開しない（[#56330](https://github.com/openai/codex/pull/56330)）。プロバイダーがモデルが見つからないと返したら再試行せずにエラーのメッセージを保つ（[#56445](https://github.com/openai/codex/pull/56445)）
- 修正（セキュリティ）: マーケットプレイスの URL の検証で、許可のパターンと照合したホストとは別のホストに Git が接続しうる穴を塞いだ（#56263）

## 関連

- 取り込み済みの PR: この版の変更は [[repos/openai-codex/changes/2026-10-26|2026-10-26 の変更]]・[[repos/openai-codex/changes/2026-10-23|2026-10-23 の変更]] で取り込んだ PR を含む（[[repos/openai-codex/changes/2026-10-28|2026-10-28 の変更]] の PR は未リリース）
- トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]、[[repos/openai-codex/topics/メモリ|メモリ]]、[[repos/openai-codex/topics/MCP|MCP]]、[[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]、[[repos/openai-codex/topics/プラグイン|プラグイン]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.164.0|rust-v0.164.0]]
