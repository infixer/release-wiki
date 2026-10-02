---
title: pnpm/pnpm
updated: 2026-10-02
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.8.2](https://github.com/pnpm/pnpm/releases/tag/v12.8.2)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v12.8.2|まとめ]]
- 安定版（v11 系）: [v11.28.3](https://github.com/pnpm/pnpm/releases/tag/v11.28.3)（2026-10-01）→ [[repos/pnpm-pnpm/releases/v11.28.3|まとめ]]
- 安定版（v10 系）: [v10.34.6](https://github.com/pnpm/pnpm/releases/tag/v10.34.6)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v10.34.6|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.14](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.14)（2026-09-29）

## 直近の注目変更

- `registries` のエントリごとに `networkConcurrency` を設定可能に（[#16493](https://github.com/pnpm/pnpm/pull/16493)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- v12 もすべてのインストールをストアのプロジェクト一覧に登録（[#15862](https://github.com/pnpm/pnpm/pull/15862)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- `@pnpm/napi` の `readPackageHook` にチェックサムを渡して lockfile を再利用（[#16463](https://github.com/pnpm/pnpm/pull/16463)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- スクリプト名の後ろの `--filter` に置き場所のヒント、`pnpm -s <script>` に対応（[#15893](https://github.com/pnpm/pnpm/pull/15893), [#16459](https://github.com/pnpm/pnpm/pull/16459)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- frozen install でディレクトリごと無いワークスペースプロジェクトを再びスキップ（Docker ビルド向け）（[#16462](https://github.com/pnpm/pnpm/pull/16462)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- `autoDedupe` のダウングレード、任意の peer の古いロック済みバージョンなど重複排除の修正（[#16438](https://github.com/pnpm/pnpm/pull/16438), [#16445](https://github.com/pnpm/pnpm/pull/16445), [#16450](https://github.com/pnpm/pnpm/pull/16450)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- 読み取り専用のストア索引が並行書き込みと協調（`@pnpm/store.index` はメジャー）（[#16427](https://github.com/pnpm/pnpm/pull/16427)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- 範囲で固定した pnpm を記録するときも `minimumReleaseAge` を守る（[#16437](https://github.com/pnpm/pnpm/pull/16437)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- pnpr が upstream の欠けた tarball の integrity を計算（[#16358](https://github.com/pnpm/pnpm/pull/16358)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- 設定値の検証（`allowUnusedPatches`・`ignoredOptionalDependencies`・`requiredScripts`）と `--config.<setting>` の記録（[#16395](https://github.com/pnpm/pnpm/pull/16395), [#16394](https://github.com/pnpm/pnpm/pull/16394), [#16302](https://github.com/pnpm/pnpm/pull/16302)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]

## トピック

- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity の計算）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスとプロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、依存の脆弱性対応
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy` とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリ
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02]]、[[repos/pnpm-pnpm/changes/2026-09-30|2026-09-30]]、[[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28]]、[[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24]]
