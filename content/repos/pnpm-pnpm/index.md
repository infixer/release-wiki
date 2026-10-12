---
title: pnpm/pnpm
updated: 2026-10-12
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.12.1](https://github.com/pnpm/pnpm/releases/tag/v12.12.1)（2026-10-11）→ [[repos/pnpm-pnpm/releases/v12.12.1|まとめ]]（同じ回に [[repos/pnpm-pnpm/releases/v12.11.0|v12.11.0]]・[[repos/pnpm-pnpm/releases/v12.11.1|v12.11.1]]・[[repos/pnpm-pnpm/releases/v12.11.2|v12.11.2]]（2026-10-09）、[[repos/pnpm-pnpm/releases/v12.12.0|v12.12.0]]（2026-10-10））
- 安定版（v11 系）: [v11.28.5](https://github.com/pnpm/pnpm/releases/tag/v11.28.5)（2026-10-06）→ [[repos/pnpm-pnpm/releases/v11.28.5|まとめ]]
- 安定版（v10 系）: [v10.34.6](https://github.com/pnpm/pnpm/releases/tag/v10.34.6)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v10.34.6|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.15](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.15)（2026-10-10）

## 直近の注目変更

- `tool:` プロトコル（`pnpm add bun@tool:1.3.0`・`pnx node@tool:22`、`runtime:` は別名）（[#16838](https://github.com/pnpm/pnpm/pull/16838)）⏳ 未リリース（v12.12.1 に記載）· トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- `pnpm dist-tag` の OIDC 認証、`NPM_ID_TOKEN` の `aud` の照合（[#16840](https://github.com/pnpm/pnpm/pull/16840)）⏳ 未リリース（v12.12.1 に記載）· トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `remoteCache` で `pnpm pipeline` のタスク結果と依存のビルドを pnpr・Turborepo Remote Cache で共有（[#16812](https://github.com/pnpm/pnpm/pull/16812)）⏳ 未リリース（v12.12.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- `addMissingPeerTypes` 設定（peer の `@types` を任意の peer に）と config 依存の `pnpm add --config`・`pnpm update`（[#16810](https://github.com/pnpm/pnpm/pull/16810), [#16822](https://github.com/pnpm/pnpm/pull/16822), [#16816](https://github.com/pnpm/pnpm/pull/16816)）⏳ 未リリース（v12.12.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- `allowBuilds` の拒否が `dangerouslyAllowAllBuilds` より優先（挙動の変更）（[#16813](https://github.com/pnpm/pnpm/pull/16813)）⏳ 未リリース（v12.12.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- 読めない設定があっても固定した pnpm に切り替える（v11・v12）（[#16826](https://github.com/pnpm/pnpm/pull/16826)）⏳ 未リリース（v12.12.0 に記載）· トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- `pnpm deploy` の peer の結び付けと `--legacy` の `workspace:` peer の修正（[#16809](https://github.com/pnpm/pnpm/pull/16809), [#16808](https://github.com/pnpm/pnpm/pull/16808)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]
- `pnx --package=rust@<channel>` で特定の Rust リリースのツールを実行（[#16784](https://github.com/pnpm/pnpm/pull/16784)）📦 v12.11.2 · トピック: [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]]
- `enableModulesDir: false` で再びストアに取得、共有チェックアウトのシムの chmod の失敗を修正（[#16783](https://github.com/pnpm/pnpm/pull/16783), [#16797](https://github.com/pnpm/pnpm/pull/16797), [#16711](https://github.com/pnpm/pnpm/pull/16711)）📦 v12.11.2 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- Rust ツールチェーンの管理・エージェントスキルと `permissions` が v12.11.0 でリリース（[#16741](https://github.com/pnpm/pnpm/pull/16741), [#16744](https://github.com/pnpm/pnpm/pull/16744) ほか）→ [[repos/pnpm-pnpm/releases/v12.11.0|v12.11.0]] · トピック: [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]]、[[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、管理 API・OIDC・SCIM・Web UI）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`--depth Infinity` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制でエージェントのディレクトリにリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスとプロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-12|2026-10-12]]、[[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09]]、[[repos/pnpm-pnpm/changes/2026-10-07|2026-10-07]]、[[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05]]、[[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02]]
