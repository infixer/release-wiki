---
title: CLI コマンド
updated: 2026-09-30
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

個別の CLI コマンド・オプションの追加や改善をまとめたトピック。`cache prune`、`package.yaml` への書き込み対応、`--tilde`、`--no-progress`、`--save-types`、`--publish-wait-timeout`、`package.json` の `workspaces` フィールドからの `pnpm-workspace.yaml` 自動生成、macOS の Time Machine 除外設定などに続き、`pnpm install --allow-build`、`pnpm init --bare`、`package.json` の空行保持が加わった。修正面では、ワークスペースのパッケージ内での `pnpm list` が現在のプロジェクトに限定される（v10 の挙動）ようになり、`pnpm peers check` がプロジェクトごとに見出しを付けて表示し、`pnpm setup` の「Text file busy」エラーが直った。v12.8.1 で `pnpm update -g --latest` がグローバルパッケージを保存済みの範囲を超えて更新するようになった。

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
- `pnpm install --allow-build <pkg>`（`!<pkg>` で拒否）— ライフサイクルスクリプトの許可を `allowBuilds` に記録
- `pnpm init --bare` — `devEngines`・`packageManager`・`type: "module"` だけの `package.json` を作成（Rust 版）
- `package.json` の空行保持 — `add`/`remove`/`update` で項目間の空行を維持（Rust 版 v12）
- `pnpm list`/`pnpm ll` — ワークスペースのパッケージ内では `-r`/`--filter` なしなら現在のプロジェクトのみ
- `pnpm update -g --latest` — レジストリのパッケージを `@latest` で解決（ダウングレードの固定は維持）

## 変更履歴

- 2026-09-30 — `pnpm update -g --latest` が保存済みの範囲を超えて更新（[#16325](https://github.com/pnpm/pnpm/pull/16325)）📦 v12.8.1 · [[repos/pnpm-pnpm/changes/2026-09-30|変更]]
- 2026-09-28 — `pnpm install --allow-build` を追加（[#15583](https://github.com/pnpm/pnpm/pull/15583)）📦 pnpr@0.1.0-alpha.13 · [[repos/pnpm-pnpm/changes/2026-09-28|変更]]
- 2026-09-28 — `pnpm init --bare` を追加（[#15541](https://github.com/pnpm/pnpm/pull/15541)）📦 pnpr@0.1.0-alpha.13 · [[repos/pnpm-pnpm/changes/2026-09-28|変更]]
- 2026-09-28 — `package.json` の項目間の空行を保持（[#15474](https://github.com/pnpm/pnpm/pull/15474)）📦 pnpr@0.1.0-alpha.13 · [[repos/pnpm-pnpm/changes/2026-09-28|変更]]
- 2026-09-28 — `pnpm peers check` の問題をプロジェクトごとに表示（[#15459](https://github.com/pnpm/pnpm/pull/15459)）📦 pnpr@0.1.0-alpha.13 · [[repos/pnpm-pnpm/changes/2026-09-28|変更]]
- 2026-09-28 — `pnpm setup` の「Text file busy」エラーを修正（[#15521](https://github.com/pnpm/pnpm/pull/15521)）📦 pnpr@0.1.0-alpha.13 · [[repos/pnpm-pnpm/changes/2026-09-28|変更]]
- 2026-09-28 — ワークスペースのパッケージ内での `pnpm list` を現在のプロジェクトに限定（[#15522](https://github.com/pnpm/pnpm/pull/15522)）📦 pnpr@0.1.0-alpha.13 · [[repos/pnpm-pnpm/changes/2026-09-28|変更]]
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

- [[repos/pnpm-pnpm/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/pnpm-pnpm/releases/v12.8.1|v12.8.1]]
- [[repos/pnpm-pnpm/releases/v12.7.0|v12.7.0]]
- [[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/pnpm-pnpm/releases/v12.6.0|v12.6.0]]
- [[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24 の変更]]
