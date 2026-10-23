---
title: pnpm/pnpm
updated: 2026-10-23
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.15.0](https://github.com/pnpm/pnpm/releases/tag/v12.15.0)（2026-10-21）→ [[repos/pnpm-pnpm/releases/v12.15.0|まとめ]]
- 安定版（v11 系）: [v11.28.8](https://github.com/pnpm/pnpm/releases/tag/v11.28.8)（2026-10-23）→ [[repos/pnpm-pnpm/releases/v11.28.8|まとめ]]
- 安定版（v10 系）: [v10.34.7](https://github.com/pnpm/pnpm/releases/tag/v10.34.7)（2026-10-12）→ [[repos/pnpm-pnpm/releases/v10.34.7|まとめ]]
- プレリリース: [pnpr@0.1.0-alpha.16](https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.16)（2026-10-21）

## 直近の注目変更

- スタンドアロン版に Node.js 26.12.1 を埋め込み、信頼を外した中間 CA の証明書を受け付けない（[#17228](https://github.com/pnpm/pnpm/pull/17228)）⏳ 未リリース（v11.28.8 のリリースノートに記載）· トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- `pnpm add <pkg>@<tag>`・`@<range>` が選んだバージョンを lock する（[#17240](https://github.com/pnpm/pnpm/pull/17240)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- pnpr の Turso（libsql）の認証のバックエンドの修正: 一意制約の違反の認識・組み込みレプリカの sync プロトコル・接続のプールと期限（[#17223](https://github.com/pnpm/pnpm/pull/17223), [#17225](https://github.com/pnpm/pnpm/pull/17225), [#17232](https://github.com/pnpm/pnpm/pull/17232), [#17237](https://github.com/pnpm/pnpm/pull/17237), [#17252](https://github.com/pnpm/pnpm/pull/17252)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/pnpr|pnpr]]
- git 依存をリンクするすべての置き場所でビルド（[#17231](https://github.com/pnpm/pnpm/pull/17231)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- `pnpm dedupe --check` が deprecated の通知の違いだけで失敗せず、`pnpm dedupe` がメタデータを取り直す（[#17199](https://github.com/pnpm/pnpm/pull/17199), [#17215](https://github.com/pnpm/pnpm/pull/17215)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- `pnpm pack`・`pnpm publish` で config dependency の `pnpm.config` を残す（[#17213](https://github.com/pnpm/pnpm/pull/17213)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]]、[[repos/pnpm-pnpm/topics/設定|設定]]
- `--env-file` で dotenv 形式のファイルを読み込む（[#16570](https://github.com/pnpm/pnpm/pull/16570)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/設定|設定]]
- Linux で umask を書き換えずに読む（[#17219](https://github.com/pnpm/pnpm/pull/17219)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]]
- 明示した `packageImportMethod: copy` をビルドするパッケージでも保つ（Windows の ReFS・Dev Drive 対策）（[#17196](https://github.com/pnpm/pnpm/pull/17196)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]
- パッケージの bin とシバンのランタイムを前もって計算（pnpr の `dist.pnpr.bins`）（[#17186](https://github.com/pnpm/pnpm/pull/17186)）📦 v12.15.0 · トピック: [[repos/pnpm-pnpm/topics/インストール|インストール]]、[[repos/pnpm-pnpm/topics/pnpr|pnpr]]

## トピック

- [[repos/pnpm-pnpm/topics/loaded-リンカー|loaded リンカー]] — 実験的な `nodeLinker: { type: loaded }`（ストアから直接読み込むインストール方式）
- [[repos/pnpm-pnpm/topics/pnpr|pnpr]] — レジストリサーバー pnpr（upstream のキャッシュと integrity、libsql/Turso の認証のバックエンド、管理 API・OIDC・SCIM・Web UI、運用機能、エコシステムごとの接頭辞・ホスト型ストアのレイアウト・所有者モデル）
- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善（`pnpm token`・`pnpm profile`、`--depth Infinity` など）
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装（ビルドバックエンド・依存解決の高速化を含む）
- [[repos/pnpm-pnpm/topics/Rust-ツールチェーン|Rust ツールチェーン]] — `rust-toolchain.toml` のツールチェーンのインストール、`cargo`/`rustc` のシム、`pnpm add rust`、`pnx --package=rust@<channel>`
- [[repos/pnpm-pnpm/topics/WebContainers|WebContainers]] — StackBlitz WebContainers 向けの WebAssembly 版（`@pnpm/wasm`）
- [[repos/pnpm-pnpm/topics/インストール|インストール]] — `node_modules` の配置・ファイルモード・ネットワーク/CA 証明書・tarball のキャッシュと展開
- [[repos/pnpm-pnpm/topics/エージェントスキル|エージェントスキル]] — 依存パッケージの `SKILL.md` を承認制でエージェントのディレクトリにリンク
- [[repos/pnpm-pnpm/topics/ストア|ストア]] — `pnpm store prune` と dlx キャッシュ、ストア操作のロック、索引の並行アクセスと `storeIndexFormat: files`、プロジェクト登録
- [[repos/pnpm-pnpm/topics/セキュリティ|セキュリティ]] — bin シム・ランチャー・設定ファイルの悪用を防ぐ修正、グローバル仮想ストア・config 依存・git 依存・アーカイブの安全性、依存の脆弱性対応、レジストリのメタデータの名前の照合・展開サイズの上限・tar の integrity、umask・埋め込みの Node.js の CA
- [[repos/pnpm-pnpm/topics/設定|設定]] — 設定値の検証と `pnpm config` での見え方、レジストリの別名、読めない設定の扱い、`nodePackageMap`、`include` による設定の分割、`--env-file`
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・`pnpm dedupe` の収束・カタログ・lockfile の再利用・`minimumReleaseAge`・`pnpm add` のバージョンの固定
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — タスクの並行実行グループ、リモートキャッシュ、スクリプト実行と実行前の依存確認
- [[repos/pnpm-pnpm/topics/パック・公開|パック・公開]] — `pack`/`publish`/`deploy`/`dist-tag`・provenance・OIDC とバージョン更新
- [[repos/pnpm-pnpm/topics/パッチ|パッチ]] — `pnpm patch`・`patch-commit`・`patch-remove` とパッチの適用（名前の変更、ワークスペースでの扱い）
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合と Cargo 連携
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイム・pnpm 本体の切り替え、配布バイナリと `self-update`・Windows の `pnpm.cmd`
- [[repos/pnpm-pnpm/topics/ワークスペース|ワークスペース]] — `--filter`・injected 依存・lockfile 非共有モード・frozen install のワークスペース固有の挙動

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-10-23|2026-10-23]]、[[repos/pnpm-pnpm/changes/2026-10-21|2026-10-21]]、[[repos/pnpm-pnpm/changes/2026-10-19|2026-10-19]]、[[repos/pnpm-pnpm/changes/2026-10-16|2026-10-16]]、[[repos/pnpm-pnpm/changes/2026-10-14|2026-10-14]]
