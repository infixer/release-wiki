---
title: openai/codex rust-v0.164.0
date: 2026-10-26
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.164.0) · 公開: 2026-10-23

## 要点

- 新機能: よく使うプロンプトやスラッシュコマンドを `/presets` の番号付きの 10 個の枠に保存し、キーボードのメニューから呼び出せる（#54380, #54381）
- 新機能: `/model`・`/permissions` に引数を付けて、モデル・推論の強さ・速さ・権限のプロファイルを直接設定できる（#54378, #54383）
- 新機能: Kitty か Sixel のグラフィックスに対応したターミナルで、見た画像・生成した画像をフルスクリーンのトランスクリプトでプレビュー（#54216）
- 新機能: エンタープライズの MCP の接続を、対象の Codex のアカウントの付与か専用のサインイン（シークレットが必要な OAuth クライアントを含む）で認証（#55334, [#55859](https://github.com/openai/codex/pull/55859), [#56001](https://github.com/openai/codex/pull/56001)）
- 新機能: 対応するリモートの Bash のコマンドと Zsh のスナップショットのセッションで資格情報をマスク（独自のプロバイダーの資格情報を含む）（#54309, #54432, [#56049](https://github.com/openai/codex/pull/56049)）。Amazon Bedrock のセットアップのウィザードを既定で有効にし、資格情報を検出したときは API キーの入力を他の AWS のサインインと同じグループに（[#56033](https://github.com/openai/codex/pull/56033), [#56023](https://github.com/openai/codex/pull/56023)）
- 修正: 失敗したコンパクションが会話の履歴に途中の要約を残さず、バックグラウンドのコンパクションの失敗でも panic せずにフォールバック（#53932, #55581）。セッションの再開で圧縮した履歴を見つけ、保存したスレッドの設定をグローバルの既定値で置き換えずに復元（#54008, [#55923](https://github.com/openai/codex/pull/55923)）
- 修正: Windows の HTTPS・WebSocket の接続で、プロキシの認証のチャレンジにサインイン中のユーザーの Negotiate・NTLM の資格情報で応える（[#55994](https://github.com/openai/codex/pull/55994), [#56000](https://github.com/openai/codex/pull/56000)）。`-c`・`--config` が複数のサブコマンドの階層にあっても CLI の設定の上書きを保つ（[#56022](https://github.com/openai/codex/pull/56022)）。キューのプロンプトは保留中の権限の選択が決まるまで待つ（[#55682](https://github.com/openai/codex/pull/55682)）。macOS の大文字小文字違いのメタデータのパスと、実行ファイルの検索に使う置き換え可能なシンボリックリンクのサンドボックスの確認を強化（#54273, #55384）
- その他: 使っていないインストールの削除、放置されたマーケットプレイスのチェックアウトの片付け、デーモンのログの上限でディスクの使用量を削減（#53827, #55149, #55689, #55690, [#55856](https://github.com/openai/codex/pull/55856)）。組み込みの JavaScript のランタイムを最適化した `Array.sort` の安全確認付きのものに更新（#54519）

## 関連

- 取り込み済みの PR: この版の変更は [[repos/openai-codex/changes/2026-10-23|2026-10-23 の変更]]・[[repos/openai-codex/changes/2026-10-21|2026-10-21 の変更]]・[[repos/openai-codex/changes/2026-10-19|2026-10-19 の変更]]・[[repos/openai-codex/changes/2026-10-16|2026-10-16 の変更]] で取り込んだ PR を含む（[[repos/openai-codex/changes/2026-10-26|2026-10-26 の変更]] の PR は rust-v0.165.0-alpha.1 以降に収録）
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/MCP|MCP]]、[[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]]、[[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]、[[repos/openai-codex/topics/デーモン|デーモン]]、[[repos/openai-codex/topics/インストール|インストール]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.163.0|rust-v0.163.0]]
