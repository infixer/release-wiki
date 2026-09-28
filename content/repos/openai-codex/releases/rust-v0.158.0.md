---
title: openai/codex rust-v0.158.0
date: 2026-09-28
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.158.0) · 公開: 2026-09-28

## 要点

- フルスクリーン TUI で copy-on-select と右クリック貼り付けを設定可能に。トランスクリプトの選択をコピーすると Markdown の書式が保たれる（#47639, #47896, #48118）
- 事前登録の OAuth クライアントシークレットが必要な MCP サーバーに接続可能に（`codex mcp add --oauth-client-secret`）（#47891）
- exec-server への直接の WebSocket 接続を bearer トークンで保護（app-server 経由で設定した接続も含む）（#47601, #47648）
- 画像の生成・編集で透明背景を明示的に指定可能に。編集ではファイルとして扱われる会話中の画像も受け付ける（#47484, #47956）
- 昇格した権限で動くコマンドへの端末入力の承認が既定で有効に。実行時のみの許可では不要なレビューを行わない（#47799, #48073）
- 主な修正: Windows サンドボックスの失敗（通常の Windows 10 のパス、拒否された保存済み資格情報、大きな権限ポリシー）（#47672, #47695, #47919）、Linux のネストした書き込み可能ルートでのサンドボックス起動と、Linux・macOS での Git メタデータ保護の維持（#47623, #47974）、macOS のパッチ操作でシステムのパスエイリアスを認識（#47879）、新しいユーザー入力が来たときに承認レビューをリトライ（#47819）、Mermaid フローチャートの引用符付きラベルと `&` の描画、非対応の図がソース表示になる理由の説明（#47572, #47678）、コマンド完了イベントに早期出力を含め、プロセス起動の失敗をクライアントに報告（#47529, #47665）

## 関連

- 取り込み済みの PR: [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]、[[repos/openai-codex/changes/2026-09-28|2026-09-28 の変更]]
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/Guardian|Guardian]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]
