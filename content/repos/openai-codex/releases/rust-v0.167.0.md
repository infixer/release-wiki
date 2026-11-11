---
title: openai/codex rust-v0.167.0
date: 2026-11-11
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.167.0) · 公開: 2026-11-06

## 要点

- 新機能: `codex agents --no-daemon` でエージェントのコマンドセンターを開ける。コマンドセンターとセッションのピッカーで未読の結果を表示（[#58238](https://github.com/openai/codex/pull/58238)、[#58239](https://github.com/openai/codex/pull/58239)、[#58263](https://github.com/openai/codex/pull/58263)、[#58264](https://github.com/openai/codex/pull/58264)）
- 新機能: ターミナルのセッションのピッカーから接続済みのバックエンドを切り替え、切り替えても下書きを保つ（[#58280](https://github.com/openai/codex/pull/58280)、[#58457](https://github.com/openai/codex/pull/58457)）
- 新機能: 対応する端末で、入力中にローカルの画像の添付をプレビューし、トランスクリプトのクリックできるパスから表示したローカルの画像を開ける（[#58261](https://github.com/openai/codex/pull/58261)、[#58446](https://github.com/openai/codex/pull/58446)）
- 新機能: API キーとクラウドのプロバイダーの選択肢を「Sign in another way」の下に。`gcp_setup_wizard` を有効にすると、アプリケーションのデフォルトの資格情報または資格情報ファイルで Google Cloud Vertex AI を設定できる（[#57857](https://github.com/openai/codex/pull/57857)、[#58427](https://github.com/openai/codex/pull/58427)）
- 新機能: `/experimental` から macOS・Windows のシステムのプロキシの設定を使うようにできる（[#58157](https://github.com/openai/codex/pull/58157)）。承認のプロンプトを開いたままトランスクリプトでパッチの詳細を展開できる（[#58281](https://github.com/openai/codex/pull/58281)）
- 修正: モデルのプロバイダーを切り替えても保存したチャットが見えたまま。再開できないチャットはトランスクリプトを読み、新しいチャットで続ける編集可能なプロンプトを用意できる（[#58202](https://github.com/openai/codex/pull/58202)）
- 修正: `Ctrl+L` は以前のメッセージを `Ctrl+T` で見られるまま画面を消去（[#58266](https://github.com/openai/codex/pull/58266)）。先頭の `!` が現れる削除でもチャットモードの通常の下書きのまま（[#58412](https://github.com/openai/codex/pull/58412)）。ネットワークの承認のプロンプトはリクエストの終了で閉じ、同じエンドポイントへの同時のリクエストは 1 つずつ確認（[#58350](https://github.com/openai/codex/pull/58350)、[#58351](https://github.com/openai/codex/pull/58351)）
- 修正: 長いリアルタイム V3 の会話で、完了した発話をトランスクリプトの増加に合わせてチャットの履歴に保存（[#58221](https://github.com/openai/codex/pull/58221)）。自動のコンテキストのコンパクションが、失敗した応答やトークンの使用量の無い応答の残った出力も数える（[#58404](https://github.com/openai/codex/pull/58404)）
- その他: DotSlash のマニフェストがリリースに同梱の Cargo のパッケージを参照（[#58717](https://github.com/openai/codex/pull/58717)、[#58757](https://github.com/openai/codex/pull/58757)）。Linux の musl のビルドでアロケーターのアリーナを減らし、会話のアンロード後のアイドル時のメモリを削減（[#58399](https://github.com/openai/codex/pull/58399)）

## 関連

- 取り込み済みの PR: この版の変更は [[repos/openai-codex/changes/2026-10-30|2026-10-30 の変更]] と [[repos/openai-codex/changes/2026-11-02|2026-11-02 の変更]] で取り込んだ PR を含む（Release の取得に失敗していたため、[[repos/openai-codex/changes/2026-11-11|2026-11-11 の回]] でページを作成）
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/デーモン|デーモン]]、[[repos/openai-codex/topics/認証|認証]]、[[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]、[[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]、[[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.166.0|rust-v0.166.0]]
