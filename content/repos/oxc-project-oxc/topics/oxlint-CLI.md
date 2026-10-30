---
title: oxlint-CLI
updated: 2026-10-30
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxlint の CLI と npm パッケージの実行時の挙動・性能。Linux では、import プラグイン用のモジュールグラフ（papaya のマップ `modules_by_path`）を作るときに papaya の `fast-barrier` 機能が `membarrier` を呼び、実行のたびに 20〜40 ms 待っていた（import プラグインを使わない既定の設定でも発生）。oxlint_v1.89.0 でこの機能を無効にして待ちを無くし、再び有効になれば `cargo deny` で検出するようにした。`--format=gitlab` の Code Quality レポートでは、フィンガープリントに列とルール ID を含め、同じ行の別々の診断が衝突しないようになった（未リリース）。

## 主な API・オプション

- 特になし

## 変更履歴

- 2026-10-30 — GitLab 形式のフィンガープリントを診断ごとに一意に（#28283）（[#28307](https://github.com/oxc-project/oxc/pull/28307)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-30|変更]]
- 2026-10-21 — Linux での起動時の `membarrier` 待ち（20〜40 ms）を解消（papaya の `fast-barrier` を無効化）（[#27954](https://github.com/oxc-project/oxc/pull/27954)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.89.0|oxlint_v1.89.0]]
- [[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30 の変更]]
