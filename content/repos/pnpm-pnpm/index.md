---
title: pnpm/pnpm
updated: 2026-09-30
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.8.1](https://github.com/pnpm/pnpm/releases/tag/v12.8.1)（2026-09-29）→ [[repos/pnpm-pnpm/releases/v12.8.1|まとめ]]
- 安定版（v11 系）: [v11.28.2](https://github.com/pnpm/pnpm/releases/tag/v11.28.2)（2026-09-29）→ [[repos/pnpm-pnpm/releases/v11.28.2|まとめ]]
- 安定版（v10 系）: [v10.34.6](https://github.com/pnpm/pnpm/releases/tag/v10.34.6)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v10.34.6|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.14](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.14)（2026-09-29）

## 直近の注目変更

- `pnpm dedupe` の冪等性を修正（変種の統合後にキーを付け直す）（[#16359](https://github.com/pnpm/pnpm/pull/16359)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- `minimumReleaseAge` で `latest` が隠れたとき同じメジャーのプレリリースに戻る（[#16407](https://github.com/pnpm/pnpm/pull/16407)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- Unix でストアのロックを `XDG_RUNTIME_DIR` に置く、`pnpm store prune` が dlx キャッシュを先に削除（[#16406](https://github.com/pnpm/pnpm/pull/16406), [#16387](https://github.com/pnpm/pnpm/pull/16387)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- injected なワークスペース依存でも再インストールの高速経路を使う（[#16404](https://github.com/pnpm/pnpm/pull/16404)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- 入れ子の `pnpm run` が `SIGTERM` で終了しない問題、macOS・Linux で `Path` が `PATH` として渡る問題を修正（[#16372](https://github.com/pnpm/pnpm/pull/16372), [#16371](https://github.com/pnpm/pnpm/pull/16371)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- 不明なオプションを拒否する前に固定された pnpm へ引き渡す（[#16360](https://github.com/pnpm/pnpm/pull/16360)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- frozen install で古い `Cargo.lock` を拒否（[#16357](https://github.com/pnpm/pnpm/pull/16357)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]
- injected 依存の peer がワークスペースのリンクでも frozen install を通す（[#16346](https://github.com/pnpm/pnpm/pull/16346)）📦 v12.8.1 · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- `verifyDepsBeforeRun` の誤った再インストールと不要なインストールを解消（[#16324](https://github.com/pnpm/pnpm/pull/16324), [#16317](https://github.com/pnpm/pnpm/pull/16317)）📦 v12.8.1 · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- local ディレクトリ依存のファイルが実行ビットを失う 12.8.0 の後退を修正（[#16318](https://github.com/pnpm/pnpm/pull/16318)）📦 v12.8.1 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]

## トピック

- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、依存の脆弱性対応
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy` とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリ
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-09-30|2026-09-30]]、[[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28]]、[[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24]]
