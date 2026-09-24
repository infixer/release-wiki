---
title: pnpm/pnpm
updated: 2026-09-24
tags:
  - repo/pnpm-pnpm
---

[GitHub](https://github.com/pnpm/pnpm) · ブランチ: `main`

## 最新リリース

- 安定版: [v12.6.0](https://github.com/pnpm/pnpm/releases/tag/v12.6.0)（2026-09-22）→ [[repos/pnpm-pnpm/releases/v12.6.0|まとめ]]
- プレリリース: なし

## 直近の注目変更

- 依存関係の自動重複排除 `autoDedupe` を追加（[#15218](https://github.com/pnpm/pnpm/pull/15218)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- 移動した node_modules を再インストールなしで再利用（[#15112](https://github.com/pnpm/pnpm/pull/15112), [#15041](https://github.com/pnpm/pnpm/pull/15041)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]]
- `package.yaml` への書き込みに対応（[#15153](https://github.com/pnpm/pnpm/pull/15153)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- `pnpm add --save-types` で型定義パッケージも一緒に保存（[#15251](https://github.com/pnpm/pnpm/pull/15251)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- カタログのエントリで `file:`/`link:` プロトコルを使えるように（[#15108](https://github.com/pnpm/pnpm/pull/15108)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]]
- タスクに「並行実行グループ」を追加、待機順序を到着順に改善（[#15010](https://github.com/pnpm/pnpm/pull/15010), [#15208](https://github.com/pnpm/pnpm/pull/15208)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]]
- `pnpm cache prune` を追加（[#15048](https://github.com/pnpm/pnpm/pull/15048)）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]]
- `pnpm add` が Package URL（purl）に対応、`registries`/`overrides`/`supportedArchitectures` のエコシステム統合が進行中（[#14949](https://github.com/pnpm/pnpm/pull/14949) ほか）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]
- Python 環境をワークスペースで共有、ストアへの配置、sdist からのインストールに対応（[#15019](https://github.com/pnpm/pnpm/pull/15019), [#15026](https://github.com/pnpm/pnpm/pull/15026), [#15009](https://github.com/pnpm/pnpm/pull/15009) ほか）📦 v12.6.0 · トピック: [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]]
- グローバル Node シムが `.nvmrc`/`.node-version` を読むように（[#15247](https://github.com/pnpm/pnpm/pull/15247), [#15398](https://github.com/pnpm/pnpm/pull/15398)）⏳ 未リリース · トピック: [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]

## トピック

- [[repos/pnpm-pnpm/topics/CLI-コマンド|CLI コマンド]] — 個別の CLI コマンド・オプションの追加や改善
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]] — Python（PyPI）を一級のエコシステムとして扱うための実装
- [[repos/pnpm-pnpm/topics/依存関係解決|依存関係解決]] — 自動重複排除・カタログ・peerDependencies の更新
- [[repos/pnpm-pnpm/topics/タスク実行・並行処理|タスク実行・並行処理]] — `pnpm-workspace.yaml` タスクの並行実行グループ
- [[repos/pnpm-pnpm/topics/プロジェクト移動|プロジェクト移動]] — 移動・コピーしたプロジェクトでの node_modules/bin シムの再利用
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]] — npm/Cargo/PyPI にまたがる設定スキーマの統合
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]] — グローバル Node シムのバージョン解決、エンジン/ランタイムのインストール

## 取り込み

- [[repos/pnpm-pnpm/log|取り込み履歴]]
- 最近の変更: [[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24]]
