---
title: pnpm/pnpm
updated: 2026-11-09
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.18.0](https://github.com/pnpm/pnpm/releases/tag/v12.18.0)（2026-11-05）→ [[repos/pnpm-pnpm/releases/v12.18.0|まとめ]]（前の [[repos/pnpm-pnpm/releases/v12.17.0|v12.17.0]] は 2026-10-30）
- 安定版（v11 系）: [v11.28.11](https://github.com/pnpm/pnpm/releases/tag/v11.28.11)（2026-11-05）→ [[repos/pnpm-pnpm/releases/v11.28.11|まとめ]]
- 安定版（v10 系）: [v10.34.9](https://github.com/pnpm/pnpm/releases/tag/v10.34.9)（2026-10-26）→ [[repos/pnpm-pnpm/releases/v10.34.9|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.18](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.18)（2026-11-05）

## 直近の注目変更

- loaded リンカーが承認済みのパッケージを一時ディレクトリでビルドしてストアから読み込み、ファイルシステムへのアクセスなどを検出したパッケージを自動で実体化（[#17318](https://github.com/pnpm/pnpm/pull/17318)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]]
- `pnpm store add` がローカルの tarball を並行で取り込み、ディレクトリも受け付ける（[#17880](https://github.com/pnpm/pnpm/pull/17880)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- pnpr: メタデータを PostgreSQL・MySQL に、`database.url` で認証と共通に選ぶ（`backend`・`metadata` は置き換え）、移行を `schema_migrations` に統一（[#17874](https://github.com/pnpm/pnpm/pull/17874), [#17881](https://github.com/pnpm/pnpm/pull/17881)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- NetBSD x64 のビルド済み CLI バイナリ（[#17830](https://github.com/pnpm/pnpm/pull/17830)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- optional の peer の候補が持ち込む必須の peer も確かめ、補わなかった peer を `dedupePeerDependents` が戻さない（[#17770](https://github.com/pnpm/pnpm/pull/17770), [#17788](https://github.com/pnpm/pnpm/pull/17788), [#17787](https://github.com/pnpm/pnpm/pull/17787)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- v12 がワークスペースの全プロジェクトの `engines`・プラットフォームを確認（[#17789](https://github.com/pnpm/pnpm/pull/17789)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- hoisted リンカーが依存を設定した `modulesDir` に入れる（[#17772](https://github.com/pnpm/pnpm/pull/17772)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]、[[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- `pnpm deploy` が `publishConfig.directory` のワークスペースのパッケージと相対の `workspace:` のパスに対応（[#17771](https://github.com/pnpm/pnpm/pull/17771), [#17807](https://github.com/pnpm/pnpm/pull/17807)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `pnpm fund` を追加（[#17755](https://github.com/pnpm/pnpm/pull/17755)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- optional の peer をプロジェクト自身のグラフだけから解決、`projectScopedOptionalPeers` を追加（[#17726](https://github.com/pnpm/pnpm/pull/17726)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（PostgreSQL・MySQL を含む SQL のデータベース、upstream のキャッシュと integrity、メトリクスの公開範囲、`<name>@<version>` の tarball の URL、libsql/Turso の認証のバックエンド、管理 API・OIDC・SCIM・Web UI、運用機能、エコシステムごとの接頭辞・ホスト型ストアのレイアウト（読みやすいパス・エコシステムごとの名前空間）・所有者モデル、SQL のメタデータ（SQLite・libSQL）と原子的な公開、マニフェストの照合、リリースノート・split packuments・リリースレコードの透明性ログ、プラットフォームのバリアントの受け入れと provenance の確認）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity`、`pnpm peers check --global` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開、繰り返しのインストールの近道、pnpmfile のカスタムフェッチャー、プラットフォームのバリアントと `supportedArchitectures`
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制（スキル単位も可）でエージェントのディレクトリにスキル自身の名前でリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune`（メタデータのキャッシュを含む）と dlx キャッシュ、`pnpm store add` でのダウンロード済み tarball の取り込み、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応、レジストリのメタデータの名前の照合・展開サイズの上限・tar の integrity、umask・埋め込みの Node.js の CA
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`、`include` による設定の分割、`--env-file`、`symlinkedLockfileTargetDirs`、v11 との設定の読み込みの違いの解消
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — `overrides` のセレクター・自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`・`pnpm add` のバージョンの固定
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新、pnpr へのリリースノートと一括公開、`publishConfig.variants` のプラットフォームのバリアントの公開
- [[repos/pnpm-pnpm/topics/パッチ|パッチ]] — `pnpm patch`・`patch-commit`・`patch-remove` とパッチの適用（名前の変更、ワークスペースでの扱い）
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・`pnpm setup --no-modify-path`・Docker イメージ・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install・絞り込んだインストールでの配置の変化のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-11-09|2026-11-09]]、[[repos/pnpm-pnpm/changes/2026-11-06|2026-11-06]]、[[repos/pnpm-pnpm/changes/2026-11-04|2026-11-04]]、[[repos/pnpm-pnpm/changes/2026-11-02|2026-11-02]]、[[repos/pnpm-pnpm/changes/2026-10-30|2026-10-30]]
