---
title: pnpm/pnpm
updated: 2026-10-26
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.15.0](https://github.com/pnpm/pnpm/releases/tag/v12.15.0)（2026-10-21）→ [[repos/pnpm-pnpm/releases/v12.15.0|まとめ]]
- 安定版（v11 系）: [v11.28.8](https://github.com/pnpm/pnpm/releases/tag/v11.28.8)（2026-10-23）→ [[repos/pnpm-pnpm/releases/v11.28.8|まとめ]]
- 安定版（v10 系）: [v10.34.9](https://github.com/pnpm/pnpm/releases/tag/v10.34.9)（2026-10-26）→ [[repos/pnpm-pnpm/releases/v10.34.9|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.16](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.16)（2026-10-21）

## 直近の注目変更

- pnpr のメトリクスは `metrics.token` か `metrics.listen` を設定したときだけ配る（破壊的変更）（[#17305](https://github.com/pnpm/pnpm/pull/17305)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]、[[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- pnpr のストレージを読みやすいパス（`packages/@<scope>/<name>/`・`blobs/<version>.tgz`）とエコシステムごとの名前空間に（既存のストアは公開し直し）（[#17353](https://github.com/pnpm/pnpm/pull/17353), [#17355](https://github.com/pnpm/pnpm/pull/17355)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- pnpr の tarball の URL を `<name>@<version>`（パッチのリビジョンは `+r<revision>`）に、DELETE・`/-/user/{name}` の経路を簡素化、まとめての公開を `/-/pnpr/v0/publish` に一本化（[#17337](https://github.com/pnpm/pnpm/pull/17337), [#17340](https://github.com/pnpm/pnpm/pull/17340), [#17346](https://github.com/pnpm/pnpm/pull/17346), [#17351](https://github.com/pnpm/pnpm/pull/17351)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]、[[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `symlinkedLockfileTargetDirs` でシンボリックリンクの lockfile を指定したディレクトリの中なら書き込む（[#17233](https://github.com/pnpm/pnpm/pull/17233)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]
- `pnpm setup --no-modify-path` で PATH などを書き換えずにインストール（[#17317](https://github.com/pnpm/pnpm/pull/17317)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- `autoDedupe` がオフなら、各プロジェクトの依存をそのプロジェクトの範囲で解決（[#17244](https://github.com/pnpm/pnpm/pull/17244)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]、[[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- injected のワークスペースのパッケージで `workspace:` のパスと `catalog:` を正しく解決（[#17289](https://github.com/pnpm/pnpm/pull/17289), [#17297](https://github.com/pnpm/pnpm/pull/17297)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- v12 が `requiredScripts`・`tag`・`runtime`・`strictSsl`/`localAddress` の設定を v11 と同じく読む（[#17257](https://github.com/pnpm/pnpm/pull/17257), [#17260](https://github.com/pnpm/pnpm/pull/17260), [#17261](https://github.com/pnpm/pnpm/pull/17261), [#17255](https://github.com/pnpm/pnpm/pull/17255)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]、[[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- `pnpm store prune` がメタデータのキャッシュも消す（シンボリックリンクの差し替え対策つき）（[#17253](https://github.com/pnpm/pnpm/pull/17253), [#17272](https://github.com/pnpm/pnpm/pull/17272)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- undici を 7.30.1 に更新（GHSA-xjj6-f33q-929c ほか）（[#17307](https://github.com/pnpm/pnpm/pull/17307)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]

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
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-26|2026-10-26]]、[[repos/pnpm-pnpm/changes/2026-10-23|2026-10-23]]、[[repos/pnpm-pnpm/changes/2026-10-21|2026-10-21]]、[[repos/pnpm-pnpm/changes/2026-10-19|2026-10-19]]、[[repos/pnpm-pnpm/changes/2026-10-16|2026-10-16]]
