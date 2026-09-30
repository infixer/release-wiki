---
title: oxc-project/oxc oxfmt_v0.71.0
date: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.71.0) · 公開: 2026-09-28

## 要点

- 同梱の Prettier を 3.9.8 → 3.9.9 に更新（[#26999](https://github.com/oxc-project/oxc/pull/26999)、[#27002](https://github.com/oxc-project/oxc/pull/27002)）
- 同じプロセスで CLI を繰り返し呼べるように（[#27051](https://github.com/oxc-project/oxc/pull/27051)）
- コメントの扱いを多数修正: `=` まわりのコメントを元の側・行に保つ、代入演算子の前のコメントの保持、隣接ブロックコメントの揃え、通常のブロックコメントの行末スペース保持（[#27041](https://github.com/oxc-project/oxc/pull/27041)、[#26997](https://github.com/oxc-project/oxc/pull/26997)、[#27036](https://github.com/oxc-project/oxc/pull/27036)、[#27037](https://github.com/oxc-project/oxc/pull/27037)）
- JSDoc: `/***` を JSDoc として扱う、行末のダブルスペースを保持、元のプラグインへの追従（[#27035](https://github.com/oxc-project/oxc/pull/27035)、[#26861](https://github.com/oxc-project/oxc/pull/26861)、[#27039](https://github.com/oxc-project/oxc/pull/27039)）
- 引数にコメントがあるときはテスト呼び出し用のレイアウトを使わない（[#27119](https://github.com/oxc-project/oxc/pull/27119)）
- Markdown フォーマッタ: HTML と入れ子リストの間の空行の保持や ecosystem-ci で見つかった不一致など、多数の修正（[#27112](https://github.com/oxc-project/oxc/pull/27112)、[#27003](https://github.com/oxc-project/oxc/pull/27003) ほか）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
