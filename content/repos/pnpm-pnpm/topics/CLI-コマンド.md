---
title: CLI コマンド
updated: 2026-09-24
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

個別の CLI コマンド・オプションの追加や改善をまとめたトピック。`cache prune`、`package.yaml` への書き込み対応、`--tilde`、`--no-progress`、`--save-types`、`--publish-wait-timeout`、同期版ワークスペース検出 API のエクスポート、`package.json` の `workspaces` フィールドからの `pnpm-workspace.yaml` 自動生成、macOS の Time Machine 除外設定など、機能ごとには独立しているが単一コマンド・オプション追加という粒度の変更が中心。

## 主な API・オプション

- `pnpm cache prune` [`--dry-run`] — 読めなくなった古いレジストリメタデータキャッシュを削除
- `package.yaml` の書き込み — `add`/`update`/`remove`/`pkg`/`link`/`set-script`/`version` から更新可能（コメント・キー順を保持）
- `pnpm add --tilde` — `--save-prefix=~` の別名
- `progress` 設定 / `pnpm --no-progress` — 進捗表示のみを抑制
- `pnpm add --save-types` [`-D`] / `saveTypes: true` — `@types/*` パッケージの自動保存
- `pnpm publish --publish-wait-timeout <ms>` / `publishWaitTimeout` — 公開後の反映待ち
- `findWorkspaceDirSync` などの同期版ワークスペース検出 API
- `package.json` の `workspaces`（配列形式）から `pnpm-workspace.yaml` を自動生成（v12、`pnpm-workspace.yaml` が無い場合のみ）
- `macosBackup.excludeModulesDir` / `excludeStoreDir` — macOS の Time Machine から新規ディレクトリを除外

## 変更履歴

- 2026-09-24 — `package.json` の `workspaces` から `pnpm-workspace.yaml` を自動生成（[#15348](https://github.com/pnpm/pnpm/pull/15348)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — `pnpm publish --publish-wait-timeout` でレジストリの反映待ちに対応（[#15291](https://github.com/pnpm/pnpm/pull/15291)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — `pnpm add --save-types` で型定義パッケージも一緒に保存（[#15251](https://github.com/pnpm/pnpm/pull/15251)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — ワークスペース検出 API の同期版をエクスポート（[#15222](https://github.com/pnpm/pnpm/pull/15222)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — `package.yaml` への書き込みに対応（[#15153](https://github.com/pnpm/pnpm/pull/15153)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — `pnpm add --tilde` を `--save-prefix=~` の別名として追加（[#15200](https://github.com/pnpm/pnpm/pull/15200)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — `pnpm cache prune` を追加、`cache list-registries` の表示を修正（[#15048](https://github.com/pnpm/pnpm/pull/15048)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — macOS の Time Machine から新規ディレクトリを除外するオプションを追加（[#8522](https://github.com/pnpm/pnpm/pull/8522)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — `--no-progress` オプションと `progress` 設定を追加（[#14065](https://github.com/pnpm/pnpm/pull/14065)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]

## 関連

- [[repos/pnpm-pnpm/releases/v12.6.0|v12.6.0]]
- [[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24 の変更]]
