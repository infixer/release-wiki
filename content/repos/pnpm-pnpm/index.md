---
title: pnpm/pnpm
updated: 2026-10-28
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.16.1](https://github.com/pnpm/pnpm/releases/tag/v12.16.1)（2026-10-28）→ [[repos/pnpm-pnpm/releases/v12.16.1|まとめ]]（前の [[repos/pnpm-pnpm/releases/v12.16.0|v12.16.0]] は 2026-10-27）
- 安定版（v11 系）: [v11.28.9](https://github.com/pnpm/pnpm/releases/tag/v11.28.9)（2026-10-27）→ [[repos/pnpm-pnpm/releases/v11.28.9|まとめ]]
- 安定版（v10 系）: [v10.34.9](https://github.com/pnpm/pnpm/releases/tag/v10.34.9)（2026-10-26）→ [[repos/pnpm-pnpm/releases/v10.34.9|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.17](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.17)（2026-10-27）

## 直近の注目変更

- 絞り込んだインストールで配置の設定が変わっていたら `node_modules` を作り直さずに失敗（v11 は `nodeLinker` が違えば `add`/`remove`/`update` も失敗）（[#17380](https://github.com/pnpm/pnpm/pull/17380), [#17364](https://github.com/pnpm/pnpm/pull/17364)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]、[[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- 繰り返しのインストールの近道が `virtualStoreDirMaxLength`・`dangerouslyAllowAllBuilds`・`trustLockfile`・`globalVirtualStoreDir` の変更に応じる（[#17391](https://github.com/pnpm/pnpm/pull/17391)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm store prune` がプロジェクトで使っているパッケージ（コピー・clone・パッチ・ビルド）を消さない（[#17327](https://github.com/pnpm/pnpm/pull/17327), [#17379](https://github.com/pnpm/pnpm/pull/17379)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- pnpm 本体の bootstrap と Corepack のダウンロードがグローバルの `config.yaml`・環境変数の TLS・プロキシの設定を読む（[#17368](https://github.com/pnpm/pnpm/pull/17368), [#17378](https://github.com/pnpm/pnpm/pull/17378), [#17389](https://github.com/pnpm/pnpm/pull/17389), [#17363](https://github.com/pnpm/pnpm/pull/17363)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]、[[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- スコープを別のレジストリに向けたら、レジストリを持たない lockfile のキーを解決し直す（[#17373](https://github.com/pnpm/pnpm/pull/17373)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- コンテナの cgroup の CPU の上限でワーカーの数と既定の `workspaceConcurrency` を決める（v11）（[#17385](https://github.com/pnpm/pnpm/pull/17385)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]、[[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- ワークスペースの `bin` の変更で古い `.bin` のシムを消し、lockfile を分けていても名前を変えたコマンドをリンクし直す（[#17371](https://github.com/pnpm/pnpm/pull/17371), [#17407](https://github.com/pnpm/pnpm/pull/17407)）📦 pnpr@0.1.0-alpha.17 / ⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- zstd の圧縮の依存を更新（脆弱性の修正）、ストアの索引の初期化の競合を修正（[#17388](https://github.com/pnpm/pnpm/pull/17388)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]、[[repos/pnpm-pnpm/topics/ストア|ストア]]
- pnpr のストレージのレコードのキー・tombstone・upstream のキャッシュのキーを正規化（[#17357](https://github.com/pnpm/pnpm/pull/17357)）📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- パッケージのファイルの選び方を 1 つにまとめ npm-packlist と照らして検証、v11 はシンボリックリンクの `publishConfig.directory` を pack に含める（[#17415](https://github.com/pnpm/pnpm/pull/17415), [#17393](https://github.com/pnpm/pnpm/pull/17393)）⏳ 未リリース / 📦 pnpr@0.1.0-alpha.17 · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、メトリクスの公開範囲、`<name>@<version>` の tarball の URL、libsql/Turso の認証のバックエンド、管理 API・OIDC・SCIM・Web UI、運用機能、エコシステムごとの接頭辞・ホスト型ストアのレイアウト（読みやすいパス・エコシステムごとの名前空間）・所有者モデル）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制でエージェントのディレクトリにリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune`（メタデータのキャッシュを含む）と dlx キャッシュ、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応、レジストリのメタデータの名前の照合・展開サイズの上限・tar の integrity、umask・埋め込みの Node.js の CA
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`、`include` による設定の分割、`--env-file`、`symlinkedLockfileTargetDirs`、v11 との設定の読み込みの違いの解消
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`・`pnpm add` のバージョンの固定
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新
- [[repos/pnpm-pnpm/topics/パッチ|パッチ]] — `pnpm patch`・`patch-commit`・`patch-remove` とパッチの適用（名前の変更、ワークスペースでの扱い）
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・`pnpm setup --no-modify-path`・Docker イメージ・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install・絞り込んだインストールでの配置の変化のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-28|2026-10-28]]、[[repos/pnpm-pnpm/changes/2026-10-26|2026-10-26]]、[[repos/pnpm-pnpm/changes/2026-10-23|2026-10-23]]、[[repos/pnpm-pnpm/changes/2026-10-21|2026-10-21]]、[[repos/pnpm-pnpm/changes/2026-10-19|2026-10-19]]
