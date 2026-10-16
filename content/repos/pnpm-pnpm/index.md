---
title: pnpm/pnpm
updated: 2026-10-16
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

- `sideEffectsCache.exclude` で環境に左右されるパッケージのビルドを side-effects キャッシュから外す（[#15651](https://github.com/pnpm/pnpm/pull/15651)）⏳ 未リリース（v12.14.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- pnpr の運用機能: `SIGTERM` 停止と `/-/ready`、信頼するプロキシ、レート制限、Prometheus のメトリクス、キャッシュ削除、audit、トークン作成、provenance、監査ログ（[#16934](https://github.com/pnpm/pnpm/pull/16934), [#16939](https://github.com/pnpm/pnpm/pull/16939), [#16943](https://github.com/pnpm/pnpm/pull/16943), [#16944](https://github.com/pnpm/pnpm/pull/16944), [#16946](https://github.com/pnpm/pnpm/pull/16946), [#16950](https://github.com/pnpm/pnpm/pull/16950), [#16954](https://github.com/pnpm/pnpm/pull/16954), [#16956](https://github.com/pnpm/pnpm/pull/16956), [#16960](https://github.com/pnpm/pnpm/pull/16960)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- zstd で圧縮された応答を受け付け、pnpr からも配る（[#16585](https://github.com/pnpm/pnpm/pull/16585)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm login` の Web ログインで `npm-notice`（確認コード）を表示（[#16697](https://github.com/pnpm/pnpm/pull/16697)）⏳ 未リリース（v12.14.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- 依存が peer に変わる場合の lockfile の固定の解決し直しと、参照されないカタログでの lockfile の再利用（[#16912](https://github.com/pnpm/pnpm/pull/16912), [#16924](https://github.com/pnpm/pnpm/pull/16924)）⏳ 未リリース（v12.14.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- `--filter` 付きのインストールでディスクに無いプロジェクトの lockfile の記録を残す（[#16936](https://github.com/pnpm/pnpm/pull/16936)）⏳ 未リリース（v12.14.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]]
- `files` があるときのサブディレクトリの ignore と、`main`・`browser`・`bin` のディレクトリのパック（[#16920](https://github.com/pnpm/pnpm/pull/16920), [#16918](https://github.com/pnpm/pnpm/pull/16918)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `pnpm token`（トークンの一覧・作成・取り消し）と `pnpm profile`（プロフィールと 2FA）を実装（[#16827](https://github.com/pnpm/pnpm/pull/16827), [#16828](https://github.com/pnpm/pnpm/pull/16828)）⏳ 未リリース（v12.13.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- `storeIndexFormat: files` でネットワークファイルシステムの共有ストアの索引をパッケージごとのファイルに（[#16875](https://github.com/pnpm/pnpm/pull/16875), [#16879](https://github.com/pnpm/pnpm/pull/16879), [#16890](https://github.com/pnpm/pnpm/pull/16890)）⏳ 未リリース（v12.13.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- `nodePackageMap` 設定（`mode: write-only` で `.package-map.json` だけを書く）（[#15671](https://github.com/pnpm/pnpm/pull/15671)）⏳ 未リリース（v12.13.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/設定|設定]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、管理 API・OIDC・SCIM・Web UI、ヘルスチェック・メトリクス・レート制限・audit・provenance）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制でエージェントのディレクトリにリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-16|2026-10-16]]、[[repos/pnpm-pnpm/changes/2026-10-14|2026-10-14]]、[[repos/pnpm-pnpm/changes/2026-10-12|2026-10-12]]、[[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09]]、[[repos/pnpm-pnpm/changes/2026-10-07|2026-10-07]]
