---
title: openai/codex rust-v0.163.0
date: 2026-10-16
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.163.0) · 公開: 2026-10-15

## 要点

- 新機能: `/config` で全カテゴリの設定を検索し、対応する設定はすぐ変更でき、再起動が必要な変更を表示（#52990, [#53429](https://github.com/openai/codex/pull/53429)）
- 新機能: Codex の応答中にフォローアップを送るとすぐに方向修正（steer）できる。ターンを中断すると実行中の Code Mode のセルと入れ子のツール呼び出しも止まる（#51812, #51835）
- 新機能: `/keymap` でリーダーキーを設定できる（既定は `Ctrl+X`。ショートカットのヒントは選ぶか取り消すまで開いたまま）。音声のミュートは `F9` に移動（#52273）
- 新機能: `/daemon` から管理されたバックグラウンドのサーバーを再起動できる（中断されうる作業を警告し、自動で再接続）（#53173）。独立した読み取り専用のツール（スキル・メモリ・会話履歴の参照など）を並列に実行（#52245）
- 新機能: Daybreak を対象のアカウントで既定で有効に。`codex exec` もサーバーがアクセスを提供していれば OpenAI の API キーで選べる（[#53701](https://github.com/openai/codex/pull/53701), [#53717](https://github.com/openai/codex/pull/53717)）
- 修正: 保存したスレッドの再開で権限とネットワークの承認を復元（明示的な上書きと現在の managed のポリシーは尊重）（#53150, [#53419](https://github.com/openai/codex/pull/53419), [#53424](https://github.com/openai/codex/pull/53424)）。スレッドを切り替えた後も `/side` で既存のサイドの会話に戻れる（#52184, #53436）
- 修正: ネットワークプロキシが DNS の名前解決の前に権限を確認し、重複した `Host` ヘッダーを拒否し、資格情報の別名で検査のフックを回避できないように（#51650, #52661, [#53506](https://github.com/openai/codex/pull/53506)）
- 修正: Windows の `Ctrl+V`・`Shift+Insert` で画像に加えてテキストも貼り付け、WSL ではクリップボードの読み取りを再利用しコピーの試行はタイムアウト（#53224, #52967, [#53453](https://github.com/openai/codex/pull/53453)）。子が出力のパイプを開いたままでもローカルのコマンドが終わり、リモートのコマンドは遅れた出力を最後のポーリングまで保つ（[#52652](https://github.com/openai/codex/pull/52652), #53331, [#53622](https://github.com/openai/codex/pull/53622)）。`codex exec` が関係ないコマンドの後に同じ差分を再表示しない（[#53444](https://github.com/openai/codex/pull/53444)）
- その他: 標準のシェルの executor を使い、パッチを当てた `zsh` の同梱をやめた（廃止したシェルのフラグを使う設定には移行の通知）（#52160, #52213）。Linux・macOS のリリースのパッケージでバイナリのシンボルを除いてサイズを縮小（#52178）。同梱の OpenAI Docs のガイダンスを GPT-6 ファミリーへの移行向けに更新、Linux サンドボックスの bubblewrap と seccomp の使い方を明確化（#51768, #52610）

## 関連

- 取り込み済みの PR: この版の変更は [[repos/openai-codex/changes/2026-10-14|2026-10-14 の変更]]・[[repos/openai-codex/changes/2026-10-12|2026-10-12 の変更]]・[[repos/openai-codex/changes/2026-10-09|2026-10-09 の変更]] で取り込んだ PR を含む（[[repos/openai-codex/changes/2026-10-16|2026-10-16 の変更]] の PR は collect の時点で未リリース）
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/Code-Mode|Code Mode]]、[[repos/openai-codex/topics/デーモン|デーモン]]、[[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]、[[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]]、[[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]、[[repos/openai-codex/topics/メモリ|メモリ]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.162.1|rust-v0.162.1]]
