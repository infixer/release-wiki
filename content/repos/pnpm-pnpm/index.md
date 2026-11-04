---
title: pnpm/pnpm
updated: 2026-11-04
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

- `verifyDepsBeforeRun` の確認が変わっていない `package.json` を読まない（[#17647](https://github.com/pnpm/pnpm/pull/17647)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- 繰り返しの `pnpm install` がワークスペースの状態に記録したマニフェストの stat と値で判定し、変わっていない `package.json` を読まない（[#17625](https://github.com/pnpm/pnpm/pull/17625), [#17637](https://github.com/pnpm/pnpm/pull/17637)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm publish -r --batch` が pnpr にアーカイブを integrity で先に上げてからコミット（[#17608](https://github.com/pnpm/pnpm/pull/17608), [#17610](https://github.com/pnpm/pnpm/pull/17610), [#17611](https://github.com/pnpm/pnpm/pull/17611)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]、[[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- `pnpm store add` でダウンロード済みの tarball からストアを温め、`pnpm install --offline --frozen-lockfile` で入れる（[#17409](https://github.com/pnpm/pnpm/pull/17409)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ストア|ストア]]
- pnpr: バージョンをリリースレコードと一緒に受け入れ、C2SP のタイル化した透明性ログで配る（[#17554](https://github.com/pnpm/pnpm/pull/17554), [#17555](https://github.com/pnpm/pnpm/pull/17555), [#17601](https://github.com/pnpm/pnpm/pull/17601), [#17602](https://github.com/pnpm/pnpm/pull/17602), [#17603](https://github.com/pnpm/pnpm/pull/17603), [#17604](https://github.com/pnpm/pnpm/pull/17604)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]、[[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- エージェントスキルの一部だけの承認（`permissions.<pkg>.skills`）、カテゴリのディレクトリ、衝突時の代わりの名前（[#17533](https://github.com/pnpm/pnpm/pull/17533)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]]
- pnpr 独自のパッケージ文書（split packuments）とプラットフォーム別バリアント（[#17556](https://github.com/pnpm/pnpm/pull/17556), [#17559](https://github.com/pnpm/pnpm/pull/17559)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]、[[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- `pnpm publish --release-notes` と pnpr でのリリースノートの保存・配信（[#17557](https://github.com/pnpm/pnpm/pull/17557), [#17558](https://github.com/pnpm/pnpm/pull/17558)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]、[[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- pnpr: 公開したマニフェストをアーカイブの `package.json` と照合（[#17552](https://github.com/pnpm/pnpm/pull/17552)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]、[[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- pnpr: ホスト型パッケージのメタデータを SQL に保存（SQLite が既定、libSQL にも対応）し、公開を原子的・冪等にコミット（[#17551](https://github.com/pnpm/pnpm/pull/17551), [#17553](https://github.com/pnpm/pnpm/pull/17553), [#17578](https://github.com/pnpm/pnpm/pull/17578), [#17583](https://github.com/pnpm/pnpm/pull/17583)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、メトリクスの公開範囲、`<name>@<version>` の tarball の URL、libsql/Turso の認証のバックエンド、管理 API・OIDC・SCIM・Web UI、運用機能、エコシステムごとの接頭辞・ホスト型ストアのレイアウト（読みやすいパス・エコシステムごとの名前空間）・所有者モデル、SQL のメタデータ（SQLite・libSQL）と原子的な公開、マニフェストの照合、リリースノート・split packuments・リリースレコードの透明性ログ）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity`、`pnpm peers check --global` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開、繰り返しのインストールの近道、pnpmfile のカスタムフェッチャー
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制（スキル単位も可）でエージェントのディレクトリにスキル自身の名前でリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune`（メタデータのキャッシュを含む）と dlx キャッシュ、`pnpm store add` でのダウンロード済み tarball の取り込み、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応、レジストリのメタデータの名前の照合・展開サイズの上限・tar の integrity、umask・埋め込みの Node.js の CA
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`、`include` による設定の分割、`--env-file`、`symlinkedLockfileTargetDirs`、v11 との設定の読み込みの違いの解消
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — `overrides` のセレクター・自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`・`pnpm add` のバージョンの固定
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新、pnpr へのリリースノートと一括公開
- [[repos/pnpm-pnpm/topics/パッチ|パッチ]] — `pnpm patch`・`patch-commit`・`patch-remove` とパッチの適用（名前の変更、ワークスペースでの扱い）
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・`pnpm setup --no-modify-path`・Docker イメージ・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install・絞り込んだインストールでの配置の変化のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-11-04|2026-11-04]]、[[repos/pnpm-pnpm/changes/2026-11-02|2026-11-02]]、[[repos/pnpm-pnpm/changes/2026-10-30|2026-10-30]]、[[repos/pnpm-pnpm/changes/2026-10-28|2026-10-28]]、[[repos/pnpm-pnpm/changes/2026-10-26|2026-10-26]]
