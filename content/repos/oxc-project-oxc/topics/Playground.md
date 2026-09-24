---
title: Playground
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxc の Playground（`napi/playground`）に、圧縮や識別子のマングリングとは独立した、オプトインのプロパティ名マングリング機能が追加された。

## 主な API・オプション

- `run.mangleProps` / `mangleProps` — プロパティ名マングリングの有効化。include/exclude の正規表現パターン、予約名、クォート済みプロパティ、デバッグ名を指定可能（不正なパターンは Playground の診断として表示される）

## 変更履歴

- 2026-09-24 — Playground でプロパティ名のマングリングを指定できるように（[#26408](https://github.com/oxc-project/oxc/pull/26408)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|oxlint_v1.85.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
