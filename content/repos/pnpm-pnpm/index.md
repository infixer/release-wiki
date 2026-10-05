---
title: pnpm/pnpm
updated: 2026-10-05
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.9.1](https://github.com/pnpm/pnpm/releases/tag/v12.9.1)（2026-10-04）→ [[repos/pnpm-pnpm/releases/v12.9.1|まとめ]]（直前の [[repos/pnpm-pnpm/releases/v12.9.0|v12.9.0]] は 2026-10-03）
- 安定版（v11 系）: [v11.28.4](https://github.com/pnpm/pnpm/releases/tag/v11.28.4)（2026-10-04）→ [[repos/pnpm-pnpm/releases/v11.28.4|まとめ]]
- 安定版（v10 系）: [v10.34.6](https://github.com/pnpm/pnpm/releases/tag/v10.34.6)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v10.34.6|まとめ]]
- プレリリース: なし（安定版より新しいものは無い。直近は [pnpr@0.1.0-alpha.14](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.14)、2026-09-29）

## 直近の注目変更

- `failIfNoMatch` を `pnpm-workspace.yaml` と環境変数から読む（v12）（[#16578](https://github.com/pnpm/pnpm/pull/16578)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]
- `verifyDepsBeforeRun` の子インストールに `--config.*` を引き継ぎ、Ctrl+C で止めたスクリプトに `[ELIFECYCLE]` を出さない（[#16558](https://github.com/pnpm/pnpm/pull/16558), [#16582](https://github.com/pnpm/pnpm/pull/16582)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- WebContainer 版を別パッケージ `@pnpm/wasm` に分け、`pnpm` パッケージは約 4 MB に戻る（[#16544](https://github.com/pnpm/pnpm/pull/16544)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]]
- StackBlitz WebContainers で pnpm が動くように（[#16499](https://github.com/pnpm/pnpm/pull/16499)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]]
- Homebrew で入れた pnpm の `pnpm self-update` を拒否し、Windows の `pnpm.cmd` がバッチの文脈を終えてから実行（[#16564](https://github.com/pnpm/pnpm/pull/16564), [#16509](https://github.com/pnpm/pnpm/pull/16509)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- 任意の依存の下で解決できない依存があれば、その任意の依存ごと除外（v12）（[#16527](https://github.com/pnpm/pnpm/pull/16527)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- キャッシュ不可のレジストリメタデータを再取得せず再検証（12.8.0 以降の性能低下を修正）（[#16533](https://github.com/pnpm/pnpm/pull/16533)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- 取得できなかった任意の依存を警告、`optimisticRepeatInstall: false` でライフサイクルスクリプトを実行（[#16522](https://github.com/pnpm/pnpm/pull/16522), [#16566](https://github.com/pnpm/pnpm/pull/16566)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `[<since>]` セレクタが git 2.24〜2.27・非 ASCII のファイル名で動くように（[#16562](https://github.com/pnpm/pnpm/pull/16562), [#16471](https://github.com/pnpm/pnpm/pull/16471)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- GitLab CI からの provenance 付き `pnpm publish` が 422 で拒否される問題を修正（[#16552](https://github.com/pnpm/pnpm/pull/16552)）📦 v12.9.1 · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]

## トピック

- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity の計算）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスとプロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、依存の脆弱性対応
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy` とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05]]、[[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02]]、[[repos/pnpm-pnpm/changes/2026-09-30|2026-09-30]]、[[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28]]、[[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24]]
