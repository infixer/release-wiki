---
title: pnpm/pnpm
updated: 2026-09-28
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.7.0](https://github.com/pnpm/pnpm/releases/tag/v12.7.0)（2026-09-25）→ [[repos/pnpm-pnpm/releases/v12.7.0|まとめ]]
- 安定版（v11 系）: [v11.28.0](https://github.com/pnpm/pnpm/releases/tag/v11.28.0)（2026-09-25）→ [[repos/pnpm-pnpm/releases/v11.28.0|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.13](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.13)（2026-09-25）

## 直近の注目変更

- http/https の tarball 依存で `Cache-Control` を尊重（[#15719](https://github.com/pnpm/pnpm/pull/15719)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm pack`/`publish` が `files` に無い `.env` ファイルを警告、`pnpm pack --silent` に対応（[#15681](https://github.com/pnpm/pnpm/pull/15681), [#15726](https://github.com/pnpm/pnpm/pull/15726)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `sharedWorkspaceLockfile: false` のインストールを高速化（[#16286](https://github.com/pnpm/pnpm/pull/16286)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- arm64 musl 向けの pnpm 11 実行ファイルの配布を停止（[#16307](https://github.com/pnpm/pnpm/pull/16307)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- `pnpm install --allow-build` を追加（[#15583](https://github.com/pnpm/pnpm/pull/15583)）📦 pnpr@0.1.0-alpha.13 · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- `pnpm init --bare`、`package.json` の空行保持（[#15541](https://github.com/pnpm/pnpm/pull/15541), [#15474](https://github.com/pnpm/pnpm/pull/15474)）📦 pnpr@0.1.0-alpha.13 · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- Nix で依存パッケージの bin がシムを乗っ取れないように（[#14903](https://github.com/pnpm/pnpm/pull/14903)）📦 pnpr@0.1.0-alpha.13 · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- isolated リンカーで bundled dependencies をパック可能に（[#15267](https://github.com/pnpm/pnpm/pull/15267)）📦 pnpr@0.1.0-alpha.13 · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `--filter "[<since>]"` をマージベースと比較（[#15442](https://github.com/pnpm/pnpm/pull/15442)）📦 pnpr@0.1.0-alpha.13 · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- ワークスペースのパッケージ内での `pnpm list` を現在のプロジェクトに限定（[#15522](https://github.com/pnpm/pnpm/pull/15522)）📦 pnpr@0.1.0-alpha.13 · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]

## トピック

- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・フック・ネットワーク・tarball のキャッシュ
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループとスクリプト実行
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy` とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28]]、[[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24]]
