---
title: Diff パネル
updated: 2026-09-28
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

`mods/diff` は、ビルトインの diff パネルと同じ見た目・挙動を目指す独立実装。最初の編集でパネルを自動的に開く条件（メインループでの編集かつファイルチェックポイントが有効なときのみ）、幅が確定しないうちにエンジンが開こうとした表示の扱い、ドッキング表示前にリポジトリを読んでおくことで「Loading diff…」を経由しない点、再開・継続したセッションでの表示や `/clear` の挙動、セッション開始時刻の基準など、細かな差分を随時ビルトインに合わせている。読み取り専用のシェルコマンド（`isReadOnly`）の後は diff を再取得せず、`git diff` には常に `--no-color` を付けて git の色設定に左右されないようにしている。フックのマッチャーはリテラルのコマンド名（`'diff'`）と、同梱ビルドでの登録名 `cc-plugin-diff` にも対応する。`/diff` による手動の開閉は影響を受けない。

## 主な API・オプション

- `/diff` — 手動でのパネル開閉
- `$.session.usage()` の `startedAt` — セッション開始時刻の基準（返さないエンジンでは mod 自身の起動時刻を使用）
- `DIFF_LEADING_ARGS` — mod が起動するすべての `git diff` に共通の引数（`--no-color` を含む）
- `PLUGIN_NAMES = ['diff', 'cc-plugin-diff']` — `ui.focus` フックがマッチするプラグイン名

## 変更履歴

- 2026-09-28 — `ui.focus` フックが `diff` と `cc-plugin-diff` のどちらの名前の要素にも反応するように（[#96953](https://github.com/anthropics/claude-code/pull/96953)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-28 — `git diff` に `--no-color` を付け、`color.ui=always` などの設定で diff 本文が空（`No diff content`）になる問題を修正（[#96363](https://github.com/anthropics/claude-code/pull/96363)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-28 — 読み取り専用のシェルコマンド（`isReadOnly`）の後は diff を再取得しないように（[#95423](https://github.com/anthropics/claude-code/pull/95423)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-28 — `command.run` フックのコマンド名をリテラル `'diff'` で書き、mod の読み込み中に起動直後の `/help` などが待たされないように（[#96570](https://github.com/anthropics/claude-code/pull/96570)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-24 — transcript に編集が含まれる再開・継続セッションは幅が確定し次第パネルを開き、`/clear` はパネルを開いたまま読み直し、セッション開始の境界はエンジンの `startedAt` に追従（[#95587](https://github.com/anthropics/claude-code/pull/95587)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — ドッキングされたパネルは開く前にリポジトリを読むようになり、「Loading diff…」の表示を経由しなくなった（[#95488](https://github.com/anthropics/claude-code/pull/95488)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — 最初の編集でパネルを自動的に開く条件を、メインループでの編集かつファイルチェックポイントが有効なときだけに限定。幅未確定のまま開こうとした表示はリサイズ待ちにせず取り下げる（[#95476](https://github.com/anthropics/claude-code/pull/95476)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]

## 関連

- [[repos/anthropics-claude-code/releases/v2.1.283|v2.1.283]]
- [[repos/anthropics-claude-code/releases/v2.1.281|v2.1.281]]
