---
title: JSプラグイン
updated: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxlint の JS プラグイン（JavaScript で書いたルール）の実行基盤。コードパス解析（CFG ウォーカー）が `body` を持たない宣言（`declare module "*.css";` など）でクラッシュしないよう修正された。ルールごとの実行時間の計測には、セレクタのマッチにかかる時間も含まれるようになった。

## 主な API・オプション

- 特になし

## 変更履歴

- 2026-09-28 — ルールの計測にセレクタのマッチ時間を含める（[#27111](https://github.com/oxc-project/oxc/pull/27111)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — CFG ウォーカーが `undefined` の子要素をスキップしクラッシュしないように（[#27075](https://github.com/oxc-project/oxc/pull/27075)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
