---
title: JSプラグイン
updated: 2026-10-30
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxlint の JS プラグイン（JavaScript で書いたルール）の実行基盤。コードパス解析（CFG ウォーカー）が `body` を持たない宣言（`declare module "*.css";` など）でクラッシュしないよう修正された。ルールごとの実行時間の計測には、セレクタのマッチにかかる時間も含まれるようになった。raw transfer のデシリアライザーは AST ノードを `__proto__` 付きのオブジェクトリテラルではなく `Object.create(NodeProto)` で作るようになり、V8 の遅い経路を避ける（未リリース）。TS の `Program` の範囲は先頭・末尾のコメントを含むようになった（未リリース）。

## 主な API・オプション

- 特になし

## 変更履歴

- 2026-10-30 — AST ノードを `Object.create(NodeProto)` で生成して高速化（[#27816](https://github.com/oxc-project/oxc/pull/27816)）、TS の `Program` の範囲にコメントを含める（[#28326](https://github.com/oxc-project/oxc/pull/28326)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-30|変更]]
- 2026-09-28 — ルールの計測にセレクタのマッチ時間を含める（[#27111](https://github.com/oxc-project/oxc/pull/27111)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — CFG ウォーカーが `undefined` の子要素をスキップしクラッシュしないように（[#27075](https://github.com/oxc-project/oxc/pull/27075)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|oxlint_v1.86.0]]
- [[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30 の変更]]
