---
title: 型認識Lint
updated: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

TSGolint をバックエンドにした oxlint の型認識（type-aware）lint。型解析は TSGolint 側で行う。`Pick<Data, never>` のように `{}` になる型操作を報告する `typescript/no-generated-empty-object-type` が追加された（対応するバックエンドが必要）。`--type-check-only` モードでは型認識ルールを実行せず、型エラーだけを報告するよう修正された。

## 主な API・オプション

- `--type-aware` — 型認識ルールを有効にして実行
- `--type-check-only` — 型チェックのみ（型認識ルールは実行しない）
- `typescript/no-generated-empty-object-type` — `{}` に解決される型操作を報告（suspicious、オプション・修正なし）

## 変更履歴

- 2026-09-28 — `--type-check-only` モードでは型認識ルールを実行しないように（[#27076](https://github.com/oxc-project/oxc/pull/27076)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 型認識ルール `typescript/no-generated-empty-object-type` を追加（[#26958](https://github.com/oxc-project/oxc/pull/26958)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|oxlint_v1.86.0]]
