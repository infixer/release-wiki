---
title: Minifier
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`oxc_minifier` と codegen の正しさに関する細かい修正。`BooleanLiteral` を構築する際の否定処理で無駄なラップを経由していた問題や、圧縮時にタグなしテンプレートリテラル中の不要な `$` エスケープが残る問題を修正している。

## 変更履歴

- 2026-09-24 — 圧縮時にテンプレートリテラル中の不要な `$` エスケープを削除（[#26924](https://github.com/oxc-project/oxc/pull/26924)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — dce モードでの `BooleanLiteral` の否定処理の無駄なラップを解消（[#26847](https://github.com/oxc-project/oxc/pull/26847)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/crates_v0.151.0|crates_v0.151.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
