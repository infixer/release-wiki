---
title: Oxfmt
updated: 2026-10-02
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

Oxfmt（フォーマッタ本体 `oxc_formatter`）の Prettier 互換性の向上が続いている。同梱の Prettier は 3.9.9 まで更新済み（oxfmt_v0.71.0 で公開）。コメントの扱いを重点的に直しており、JSDoc（`/***` も JSDoc として扱う）の行末ダブルスペース（ハードブレーク）の保持、通常のブロックコメントの行末スペースの保持、隣接ブロックコメントの揃え、代入演算子 `=` まわりのコメントを元の側・行に保つ方針、引数にコメントがあるテスト呼び出しのレイアウトなどを修正している。意図的な Prettier との差異は `DIVERGENCES.md` に記録される。呼び出し先と開きかっこの間のコメントも呼び出し先側に留めるようになった。埋め込みテンプレート（`` css`...` `` など）のレイアウトはソースの形ではなく AST から決めるようになり、`quoteProps: consistent` は分割代入パターンにも適用される。ignore は、親ディレクトリが除外されていれば否定パターンで再び含めない（Git・Prettier と同じ）挙動に明示パス・stdin・LSP でも揃った。CLI の Stdin モードではグローバルな ignore の先行確認とソース付き診断の表示、LSP では `.prettierignore` の変更の再読み込みに対応した。また、同じ Node.js プロセスで `runCli()` を繰り返し呼べるようになった（Vite+ からの直接呼び出し向け）。

## 変更履歴

- 2026-10-02 — JSDoc 内の埋め込み整形を css / less / scss / json / yaml / html に限定（[#27241](https://github.com/oxc-project/oxc/pull/27241)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — 除外ディレクトリの下のファイルを否定パターンで再び含めない（明示パス・stdin・LSP）（[#27237](https://github.com/oxc-project/oxc/pull/27237)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — 埋め込みテンプレートのレイアウトを AST から決める（冪等性の改善）（[#27218](https://github.com/oxc-project/oxc/pull/27218)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — `quoteProps: consistent` を分割代入パターンに適用し、計算キーを判断から除外（[#27216](https://github.com/oxc-project/oxc/pull/27216)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-09-30 — 呼び出し先と開きかっこ（`(`・`?.`・`<`）の間のコメントを呼び出し先側に保つ（[#27172](https://github.com/oxc-project/oxc/pull/27172)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — Stdin モードでもソース付きの診断を表示（[#27130](https://github.com/oxc-project/oxc/pull/27130)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — LSP が `.prettierignore` の変更を反映するように（[#27129](https://github.com/oxc-project/oxc/pull/27129)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — Stdin モードで入れ子設定を解決する前にグローバルな ignore を確認（[#27128](https://github.com/oxc-project/oxc/pull/27128)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-28 — 引数にコメントがあるときはテスト呼び出し用のレイアウトを使わない（[#27119](https://github.com/oxc-project/oxc/pull/27119)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 同じプロセスで `runCli()` を何度も呼べるように（スレッドプールを一度だけ初期化）（[#27051](https://github.com/oxc-project/oxc/pull/27051)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — `=` まわりのコメントを元の側・元の行に保つ（[#27041](https://github.com/oxc-project/oxc/pull/27041)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 代入演算子の前のコメントが消える・重複する問題（0.69.0 からの退行）を修正（[#26997](https://github.com/oxc-project/oxc/pull/26997)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — JSDoc の整形を元のプラグインにさらに合わせる（[#27039](https://github.com/oxc-project/oxc/pull/27039)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 通常のブロックコメントの行末スペースを保持（[#27037](https://github.com/oxc-project/oxc/pull/27037)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 隣接するブロックコメントの揃え方を Prettier に合わせる（[#27036](https://github.com/oxc-project/oxc/pull/27036)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — `/***` コメントも JSDoc として扱う（[#27035](https://github.com/oxc-project/oxc/pull/27035)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — JSDoc の行末のダブルスペース（ハードブレーク）を保持（[#26861](https://github.com/oxc-project/oxc/pull/26861)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-24 — 同梱 Prettier を 3.9.9 に更新（`oxc_markdown_parser` のバンプを伴う）（[#27002](https://github.com/oxc-project/oxc/pull/27002)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — 同梱 Prettier を 3.9.8 に更新（[#26999](https://github.com/oxc-project/oxc/pull/26999)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/oxfmt_v0.70.0|oxfmt_v0.70.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/oxfmt_v0.71.0|oxfmt_v0.71.0]]
- [[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]
