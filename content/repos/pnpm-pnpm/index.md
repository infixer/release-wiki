---
title: pnpm/pnpm
updated: 2026-10-19
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.14.0](https://github.com/pnpm/pnpm/releases/tag/v12.14.0)（2026-10-15）→ [[repos/pnpm-pnpm/releases/v12.14.0|まとめ]]
- 安定版（v11 系）: [v11.28.6](https://github.com/pnpm/pnpm/releases/tag/v11.28.6)（2026-10-15）→ [[repos/pnpm-pnpm/releases/v11.28.6|まとめ]]
- 安定版（v10 系）: [v10.34.7](https://github.com/pnpm/pnpm/releases/tag/v10.34.7)（2026-10-12）→ [[repos/pnpm-pnpm/releases/v10.34.7|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.15](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.15)（2026-10-10）

## 直近の注目変更

- pnpr がすべてのエコシステムを接頭辞（npm は常に `/npm/`）で配り、ホスト型ストアは衝突しないレイアウトに（破壊的変更）（[#17087](https://github.com/pnpm/pnpm/pull/17087), [#17100](https://github.com/pnpm/pnpm/pull/17100)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- `lockfile.integrityTarget: tar` で展開前の tar のハッシュを lockfile に固定し、リビジョンを tar のダイジェストで指す（[#17092](https://github.com/pnpm/pnpm/pull/17092)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- zstd の content coding で tar を配るレジストリからインストール、`maxTarballUnpackedSize` を v11 と zip にも適用（[#17054](https://github.com/pnpm/pnpm/pull/17054), [#17014](https://github.com/pnpm/pnpm/pull/17014)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm-workspace.yaml` の `include` で設定を別ファイル・config 依存に分ける（[#16967](https://github.com/pnpm/pnpm/pull/16967)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]
- pnpr の Web ログインでの SSO、保守用のサブコマンド、パッケージの所有者・メンテナーと tombstone、予約ユーザー名の保護（[#16969](https://github.com/pnpm/pnpm/pull/16969), [#17002](https://github.com/pnpm/pnpm/pull/17002), [#17060](https://github.com/pnpm/pnpm/pull/17060), [#17046](https://github.com/pnpm/pnpm/pull/17046)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- 公式 Docker イメージに Alpine 版（`ghcr.io/pnpm/pnpm:12-alpine` など）（[#17069](https://github.com/pnpm/pnpm/pull/17069)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- 別のパッケージを名乗るレジストリのメタデータを `ERR_PNPM_REGISTRY_NAME_MISMATCH` で拒否（[#16968](https://github.com/pnpm/pnpm/pull/16968)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- フィルター付きのインストールの後も選んだプロジェクトを wanted lockfile と照らし、`verifyDepsBeforeRun` がパッチの中身で判断（[#17019](https://github.com/pnpm/pnpm/pull/17019), [#16992](https://github.com/pnpm/pnpm/pull/16992)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]、[[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- `pnpm pack`・`publish` が npm-packlist の既定の除外パターンを除き、`pnpm deploy` が lockfile の外の `file:` 依存を配置（[#16971](https://github.com/pnpm/pnpm/pull/16971), [#16998](https://github.com/pnpm/pnpm/pull/16998)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `sideEffectsCache.exclude` で環境に左右されるパッケージのビルドを side-effects キャッシュから外す（[#15651](https://github.com/pnpm/pnpm/pull/15651)）⏳ 未リリース（v12.14.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、管理 API・OIDC・SCIM・Web UI、運用機能、エコシステムごとの接頭辞・ホスト型ストアのレイアウト・所有者モデル）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制でエージェントのディレクトリにリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応、レジストリのメタデータの名前の照合・展開サイズの上限・tar の integrity
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`、`include` による設定の分割
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-19|2026-10-19]]、[[repos/pnpm-pnpm/changes/2026-10-16|2026-10-16]]、[[repos/pnpm-pnpm/changes/2026-10-14|2026-10-14]]、[[repos/pnpm-pnpm/changes/2026-10-12|2026-10-12]]、[[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09]]
