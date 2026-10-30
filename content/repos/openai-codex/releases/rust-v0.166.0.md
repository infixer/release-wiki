---
title: openai/codex rust-v0.166.0
date: 2026-10-30
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.166.0) · 公開: 2026-10-29

## 要点

- 新機能: キーボードによるトランスクリプトの選択（単語・行・ページ単位の移動、検索との統合、ショートカットの設定）（[#57221](https://github.com/openai/codex/pull/57221)、[#57222](https://github.com/openai/codex/pull/57222)、[#57223](https://github.com/openai/codex/pull/57223)、[#57224](https://github.com/openai/codex/pull/57224)）
- 新機能: 非同期の質問・選択肢・回答とトランスクリプトの返信で Markdown を一貫して描画（[#57259](https://github.com/openai/codex/pull/57259)、[#57292](https://github.com/openai/codex/pull/57292)）
- 新機能: GPT-6.1 Terra を組み込み・Vertex AI・Amazon Bedrock のモデルカタログに追加（[#57293](https://github.com/openai/codex/pull/57293)）
- 新機能: `codex queue --resume` でメッセージをキューに入れた後、読み込まれていないスレッドを再開（[#57232](https://github.com/openai/codex/pull/57232)）
- 新機能: TUI で安全のブロックの説明を分かりやすくし、より安全な続きのプロンプトを選べるように（[#57363](https://github.com/openai/codex/pull/57363)、[#57365](https://github.com/openai/codex/pull/57365)）
- 新機能: 設定・接続・WebSocket に絞った診断の `codex doctor --network-only`（[#57606](https://github.com/openai/codex/pull/57606)）
- 修正: 再開・fork で承認済みの承認と権限の設定を保つ（[#57227](https://github.com/openai/codex/pull/57227)）。取り消したコンポーザーのテキストの復元でローカルの画像の添付を保つ（[#57502](https://github.com/openai/codex/pull/57502)）。再開・fork で推論トークンの集計を保ち、早すぎるコンパクションを避ける（[#57839](https://github.com/openai/codex/pull/57839)）
- 修正: 親のアーカイブを戻すと起動した子孫のスレッドも戻す（[#57635](https://github.com/openai/codex/pull/57635)）。app-server のスレッドの起動・終了の競合を直し、完了したランタイムをすぐ解放（[#57787](https://github.com/openai/codex/pull/57787)、[#57788](https://github.com/openai/codex/pull/57788)）。TUI の再接続の復旧とオフラインでの `/quit`・`/exit`（[#57820](https://github.com/openai/codex/pull/57820)）
- 修正: macOS で使用中のインストールや ASCII でないパスでもスタンドアロンのリリースの片付けを行う（[#57503](https://github.com/openai/codex/pull/57503)）
- その他: Bazel でソースからビルドした V8 に切り替え、単体の executor を正規の CLI・app-server のリリースのパッケージに同梱、Node.js 24.22.1・Rust 1.95.0 に統一（[#57837](https://github.com/openai/codex/pull/57837) など）

## 関連

- 取り込み済みの PR: この版の変更は [[repos/openai-codex/changes/2026-10-28|2026-10-28 の変更]] と [[repos/openai-codex/changes/2026-10-30|2026-10-30 の変更]] で取り込んだ PR を含む（2026-10-30 の回の 52 件が収録）
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]、[[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]]、[[repos/openai-codex/topics/管理要件|管理要件]]、[[repos/openai-codex/topics/Guardian|Guardian]]、[[repos/openai-codex/topics/インストール|インストール]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.165.0|rust-v0.165.0]]
