---
title: SideNav
updated: 2026-09-30
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

S2（`@react-spectrum/s2`）のサイドナビゲーション `SideNav`。SidePanel の中に置いたときの折りたたみ動作の実装が始まっており、折りたたみ時は子を持たないトップレベルのリンクはすぐに遷移し、子を持つ項目は SidePanel を開いて下の階層へ進む。項目が展開するのか遷移するのか分かりにくい点はデザインと検討が続いている。React 18（`ViewTransition` が無い環境）でもビルドできるよう、React のデフォルトエクスポート経由で参照している。

## 主な API・オプション

- `SideNav` — `@react-spectrum/s2` の exports（`exports/SideNav.ts`）から公開

## 変更履歴

- 2026-09-30 — React 18 で `ViewTransition` が見つからずビルドエラーになる問題を修正（[#10675](https://github.com/adobe/react-spectrum/pull/10675)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]
- 2026-09-30 — SidePanel 内での折りたたみ動作を追加（[#10421](https://github.com/adobe/react-spectrum/pull/10421)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-30|2026-09-30 の変更]]
