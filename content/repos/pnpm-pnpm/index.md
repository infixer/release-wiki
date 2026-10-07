---
title: pnpm/pnpm
updated: 2026-10-07
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.10.1](https://github.com/pnpm/pnpm/releases/tag/v12.10.1)（2026-10-07）→ [[repos/pnpm-pnpm/releases/v12.10.1|まとめ]]（直前の [[repos/pnpm-pnpm/releases/v12.10.0|v12.10.0]] は 2026-10-06）
- 安定版（v11 系）: [v11.28.5](https://github.com/pnpm/pnpm/releases/tag/v11.28.5)（2026-10-06）→ [[repos/pnpm-pnpm/releases/v11.28.5|まとめ]]
- 安定版（v10 系）: [v10.34.6](https://github.com/pnpm/pnpm/releases/tag/v10.34.6)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v10.34.6|まとめ]]
- プレリリース: なし（安定版より新しいものは無い。直近は [pnpr@0.1.0-alpha.14](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.14)、2026-09-29）

## 直近の注目変更

- 実験的な `loaded` リンカーを追加（`nodeLinker: { type: loaded }`、Node.js 26.10.0 以上）（[#16482](https://github.com/pnpm/pnpm/pull/16482), [#16600](https://github.com/pnpm/pnpm/pull/16600)）⏳ 未リリース（v12.10.0 のリリースノートに記載）· トピック: [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]]
- `lockfile.includeResolutionSettings` で解決に関わる設定を lockfile に記録（[#16591](https://github.com/pnpm/pnpm/pull/16591)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- グローバル仮想ストアの外へ書き込めるパストラバーサルを修正（GHSA-jg5c-8mvg-5wph、v12）（[#16595](https://github.com/pnpm/pnpm/pull/16595)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- config 依存のレジストリとの照合、`pnpm audit signatures` と lockfile の integrity の結び付け、アーカイブのメタデータの上限など（[#16613](https://github.com/pnpm/pnpm/pull/16613), [#16611](https://github.com/pnpm/pnpm/pull/16611)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- git 依存の引数の注入・`#path:` のシンボリックリンク・bundled dependencies の外部ファイル混入を防ぐ（[#16607](https://github.com/pnpm/pnpm/pull/16607), [#16612](https://github.com/pnpm/pnpm/pull/16612), [#16619](https://github.com/pnpm/pnpm/pull/16619)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- `pnpm config get/list --global` がプロジェクトの設定を読まない（[#16601](https://github.com/pnpm/pnpm/pull/16601)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]
- `devEngines`・`packageManager` の警告を stderr に出し、npm ラッパーの bin をシバンなしに戻す（[#16587](https://github.com/pnpm/pnpm/pull/16587), [#16597](https://github.com/pnpm/pnpm/pull/16597)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- 未対応のプロトコル（Yarn の `patch:` など）を `ERR_PNPM_UNSUPPORTED_PROTOCOL` で報告、`--fix-lockfile` の修復を直す（[#16592](https://github.com/pnpm/pnpm/pull/16592), [#16621](https://github.com/pnpm/pnpm/pull/16621)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- 不正な依存の指定をインストール時に拒否（v12）（[#16416](https://github.com/pnpm/pnpm/pull/16416)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm run` の正規表現のセレクタで ECMAScript の構文を受け付ける（v12）（[#16606](https://github.com/pnpm/pnpm/pull/16606)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity の計算）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスとプロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方（`--global` の読む範囲など）
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy` とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-07|2026-10-07]]、[[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05]]、[[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02]]、[[repos/pnpm-pnpm/changes/2026-09-30|2026-09-30]]、[[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28]]
