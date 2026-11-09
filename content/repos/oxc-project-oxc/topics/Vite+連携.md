---
title: Vite+連携
updated: 2026-11-09
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

Vite+（voidzero-dev/vite-plus）向けに、oxlint・oxfmt の設定ファイル探索まわりを整理している。`vite.config.*` の全バリアントを CLI・LSP どちらでも検出できるようにし、入れ子設定（nested config）は v1 ではサポートしない方針が確定したため、各 IDE 拡張が個別に対応する必要が無いよう Oxapps（`oxc_config`）側で一元的に無効化するようにした。あわせて `configPath` の空文字列の扱いを「未設定」として統一するなど、細かい整合性の修正も行われている。Vite+ モードで `vite.config.*` を読み込むときは、`vite-plus` 1.5.0 の `resolveConfigFromFile()` で未設定・相対の `root` を設定ファイルのディレクトリから解決するようになった（以前は `process.cwd()` から解決し、マルチルートのワークスペースの LSP で別のプロジェクトを読んでいた。古い `vite-plus` では従来の挙動にフォールバック）。oxlint_v1.92.0・oxfmt_v0.77.0（2026-11-06）で公開された。

## 主な API・オプション

- `configPath` — 設定ファイルの明示指定（LSP）
- `-c` / `--disable-nested-config` — 設定ファイル指定・入れ子設定の無効化（CLI）

## 変更履歴

- 2026-11-09 — 設定の `root` を設定ファイルのディレクトリから解決（[#28801](https://github.com/oxc-project/oxc/pull/28801)） 📦 oxlint_v1.92.0 · [[repos/oxc-project-oxc/changes/2026-11-09|変更]]
- 2026-09-24 — Vite+ モードでは入れ子設定を探索しないよう `oxc_config` 側で一元的に無効化（[#26763](https://github.com/oxc-project/oxc/pull/26763)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — LSP の `configPath: ""` の扱いを CLI 側と揃えて「未設定」に統一（[#26762](https://github.com/oxc-project/oxc/pull/26762)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — LSP でも `vite.config.*` の全バリアントを検出できるように（[#26755](https://github.com/oxc-project/oxc/pull/26755)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|oxlint_v1.85.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]]
- [[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.92.0|oxlint_v1.92.0]]
- [[repos/oxc-project-oxc/releases/oxfmt_v0.77.0|oxfmt_v0.77.0]]
