---
title: pnpm/pnpm
updated: 2026-11-02
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.17.0](https://github.com/pnpm/pnpm/releases/tag/v12.17.0)（2026-10-30）→ [[repos/pnpm-pnpm/releases/v12.17.0|まとめ]]（前の [[repos/pnpm-pnpm/releases/v12.16.1|v12.16.1]] は 2026-10-28）
- 安定版（v11 系）: [v11.28.10](https://github.com/pnpm/pnpm/releases/tag/v11.28.10)（2026-10-31）→ [[repos/pnpm-pnpm/releases/v11.28.10|まとめ]]
- 安定版（v10 系）: [v10.34.9](https://github.com/pnpm/pnpm/releases/tag/v10.34.9)（2026-10-26）→ [[repos/pnpm-pnpm/releases/v10.34.9|まとめ]]
- プレリリース: v12.17.0 より新しいものはなし（pnpr の直近は [pnpr@0.1.0-alpha.17](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.17)（2026-10-27））

## 直近の注目変更

- `pnpm peers check --global`（`-g`）でグローバルのパッケージの peer 依存を調べる（[#17508](https://github.com/pnpm/pnpm/pull/17508)）⏳ 未リリース（v12.17.0 のリリースノートに記載）· トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- グローバルのコマンドのシムにグループの hoist したモジュールを `NODE_PATH` で渡す（[#17509](https://github.com/pnpm/pnpm/pull/17509)）⏳ 未リリース（v12.17.0・v11.28.10 のリリースノートに記載）· トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- エージェントスキルをスキル自身の名前でリンク（`pnpm-<package>-<skill>` から変更）（[#17520](https://github.com/pnpm/pnpm/pull/17520)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]]
- `--no-runtime` のインストールでランタイムのリンクを外し、その後の普通のインストールで再びリンク（[#17545](https://github.com/pnpm/pnpm/pull/17545), [#17548](https://github.com/pnpm/pnpm/pull/17548)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- Node.js の範囲指定を安定版優先で解決、`node` のシムがグローバルの pnpmfile でループしない（[#17518](https://github.com/pnpm/pnpm/pull/17518), [#17534](https://github.com/pnpm/pnpm/pull/17534)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- `pnpm update` の Cargo の依存: 複数行のインライン表に対応、有効な feature の無いバージョンへ上げない（[#17519](https://github.com/pnpm/pnpm/pull/17519), [#17525](https://github.com/pnpm/pnpm/pull/17525)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]
- POSIX のシムに埋め込むパスをシングルクォートで囲む（[#17515](https://github.com/pnpm/pnpm/pull/17515)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- `dlx`・`pnx`・`create` が `--dir`・`--workspace-root` に従う、`pnpm link` が不正なパッケージ名を拒否（[#17479](https://github.com/pnpm/pnpm/pull/17479), [#17535](https://github.com/pnpm/pnpm/pull/17535)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- `overrides` に依存の種類の擬似セレクター（`:prod`・`:optional`・`:peer`）と `*` のワイルドカード（[#17457](https://github.com/pnpm/pnpm/pull/17457)）⏳ 未リリース（v12.17.0 のリリースノートに記載）· トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- `pnpm outdated`/`pnpm update` がランタイム・パッケージマネージャー・Cargo・Python の依存を扱う（[#17449](https://github.com/pnpm/pnpm/pull/17449)）⏳ 未リリース（v12.17.0 のリリースノートに記載）· トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]、[[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、メトリクスの公開範囲、`<name>@<version>` の tarball の URL、libsql/Turso の認証のバックエンド、管理 API・OIDC・SCIM・Web UI、運用機能、エコシステムごとの接頭辞・ホスト型ストアのレイアウト（読みやすいパス・エコシステムごとの名前空間）・所有者モデル）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity`、`pnpm peers check --global` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制でエージェントのディレクトリにスキル自身の名前でリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune`（メタデータのキャッシュを含む）と dlx キャッシュ、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応、レジストリのメタデータの名前の照合・展開サイズの上限・tar の integrity、umask・埋め込みの Node.js の CA
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`、`include` による設定の分割、`--env-file`、`symlinkedLockfileTargetDirs`、v11 との設定の読み込みの違いの解消
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — `overrides` のセレクター・自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`・`pnpm add` のバージョンの固定
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新
- [[repos/pnpm-pnpm/topics/パッチ|パッチ]] — `pnpm patch`・`patch-commit`・`patch-remove` とパッチの適用（名前の変更、ワークスペースでの扱い）
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・`pnpm setup --no-modify-path`・Docker イメージ・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install・絞り込んだインストールでの配置の変化のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-11-02|2026-11-02]]、[[repos/pnpm-pnpm/changes/2026-10-30|2026-10-30]]、[[repos/pnpm-pnpm/changes/2026-10-28|2026-10-28]]、[[repos/pnpm-pnpm/changes/2026-10-26|2026-10-26]]、[[repos/pnpm-pnpm/changes/2026-10-23|2026-10-23]]
