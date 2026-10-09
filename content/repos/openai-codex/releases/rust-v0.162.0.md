---
title: openai/codex rust-v0.162.0
date: 2026-10-09
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.162.0) · 公開: 2026-10-08

## 要点

- 新機能: worktrees 機能が有効な信頼済みのローカルプロジェクトで、管理された Git の worktree を作成・一覧するツール（#50148）
- 新機能: エージェントのコマンドセンターで `p` でタスクをピン留めし、サーバーが対応していれば共有の Pinned グループに保持（[#51500](https://github.com/openai/codex/pull/51500)）
- 新機能: `/copy` でトランスクリプトのブロックを移動・コピー、`Ctrl+Insert` で選択範囲をコピー、`tui.mouse_scroll_speed` でマウスホイールのスクロールを調整（#50434, #50215, #50209）
- 新機能: 承認のヘッダー・質問・MCP のプロンプト・警告・バナー・確認のプロンプトの URL を、行をまたいで折り返してもクリック可能に（[#51439](https://github.com/openai/codex/pull/51439), [#51449](https://github.com/openai/codex/pull/51449), [#51450](https://github.com/openai/codex/pull/51450), [#51451](https://github.com/openai/codex/pull/51451), [#51452](https://github.com/openai/codex/pull/51452), [#51458](https://github.com/openai/codex/pull/51458)）
- 新機能: カスタムの Responses 互換のモデルプロバイダで、ライブの Web アクセスとリモートのコンパクションの capability を設定できる（#50459）。Code Mode に Promise の結果を決着順にストリームする JavaScript のヘルパーと、オプトインのランク付きツール検索（[#51126](https://github.com/openai/codex/pull/51126), [#51209](https://github.com/openai/codex/pull/51209)）
- 修正: 新しい TUI のスレッドでサーバーのモデルと推論サマリーの既定値に従う（明示した起動時の上書きは維持）（#50013, #50811, #50913）。`apply_patch` の更新でオプトイン無しに既存の CRLF の改行を保持（[#51203](https://github.com/openai/codex/pull/51203)）
- 修正: Linux サンドボックスの拒否ファイルが複数のときの起動を修正し、サンドボックスの構築に使う書き込み可能な実行ファイルを拒否、ripgrep の設定が拒否 glob のマスクを弱めないように（#50059, [#51211](https://github.com/openai/codex/pull/51211), [#51407](https://github.com/openai/codex/pull/51407), [#51527](https://github.com/openai/codex/pull/51527)）。Windows 10 の通常のドライブレターのファイルアクセスを復旧し、Windows サンドボックスの一時ディレクトリの権限を子プロセスの環境に合わせる（[#51511](https://github.com/openai/codex/pull/51511), [#51512](https://github.com/openai/codex/pull/51512)）
- 修正: 再試行可能な Responses と WebSocket の失敗でサーバーの `Retry-After` に従う（#50418, [#51440](https://github.com/openai/codex/pull/51440)）。PowerShell 7 のモジュールパスがある Windows PowerShell でのインストール時のアーカイブのチェックサム検証を修正（[#51257](https://github.com/openai/codex/pull/51257)）
- その他: Windows のリリースに署名済みの PowerShell のインストーラを同梱し、古い安定版やプレリリースが新しい安定版のダウンロード先やインストーラのエイリアスを置き換えないように（[#51158](https://github.com/openai/codex/pull/51158), [#51186](https://github.com/openai/codex/pull/51186), [#51425](https://github.com/openai/codex/pull/51425)）

## 関連

- 取り込み済みの PR: この版の変更の多くは [[repos/openai-codex/changes/2026-10-07|2026-10-07 の変更]]・[[repos/openai-codex/changes/2026-10-05|2026-10-05 の変更]] で取り込んだ PR（rust-v0.162.0-alpha.17 までに収録）。[[repos/openai-codex/changes/2026-10-09|2026-10-09 の変更]] からは #51527 を収録
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/Code-Mode|Code Mode]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]、[[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]、[[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/インストール|インストール]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.161.0|rust-v0.161.0]]
