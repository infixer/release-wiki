---
title: Diff パネル
updated: 2026-10-07
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

`mods/diff` は、ビルトインの diff パネルと同じ見た目・挙動を目指す独立実装。最初の編集でパネルを自動的に開く条件（メインループでの編集かつファイルチェックポイントが有効なときのみ）、幅が確定しないうちにエンジンが開こうとした表示の扱い、ドッキング表示前にリポジトリを読んでおくことで「Loading diff…」を経由しない点、再開・継続したセッションでの表示や `/clear` の挙動、セッション開始時刻の基準など、細かな差分を随時ビルトインに合わせている。読み取り専用のシェルコマンド（`isReadOnly`）の後は diff を再取得しない。`git diff` に常に `--no-color` を付ける変更（[#96363](https://github.com/anthropics/claude-code/pull/96363)）は 2026-09-30 に revert され、以前の挙動に戻っている。hunk は表示するファイルをまとめて 1 回の `git diff --raw -z -p` で読み（失敗すると全ファイルが「Diff unavailable」になる）、`/diff` のダイアログでは表示中の行の分だけ読み足す。HEAD はパネルを開いた時点から監視し、別のターミナルで終えたマージや中止したリベースを数秒で検知する。リベース中かどうかは `REBASE_HEAD` と `rebase-merge` / `rebase-apply` フォルダの両方で判定する。フックのマッチャーはリテラルのコマンド名（`'diff'`）と、同梱ビルドでの登録名 `cc-plugin-diff` にも対応する。`/diff` による手動の開閉は影響を受けない。エンジンがドッキングしたペインの先頭行（閉じるマーク用）を確保するようになったのに合わせ、ドッキング表示の `/diff` はヘッダーの上に自前の空行を入れなくなった（`PANE_TOP_PAD_ROWS` を削除）。最終列の空白（`PANE_RIGHT_PAD_COLUMNS`）は残る。

## 主な API・オプション

- `/diff` — 手動でのパネル開閉（フルスクリーンでないレイアウトでは変更ファイル一覧のダイアログ）
- `$.session.usage()` の `startedAt` — セッション開始時刻の基準（返さないエンジンでは mod 自身の起動時刻を使用）
- `DIFF_LEADING_ARGS` — mod が起動するすべての `git diff` に共通の引数（`--no-color` は revert で外れた）
- `PLUGIN_NAMES = ['diff', 'cc-plugin-diff']` — `ui.focus` フックがマッチするプラグイン名
- `PANE_RIGHT_PAD_COLUMNS` — ドッキング表示で空けておく最終列（ヘッダー上の空行 `PANE_TOP_PAD_ROWS` は削除）

## 変更履歴

- 2026-10-07 — ドッキングしたパネルの上の自前の空行（`PANE_TOP_PAD_ROWS`）を削除し、エンジンが確保する先頭行の下にヘッダーから描くように（[#99206](https://github.com/anthropics/claude-code/pull/99206)）⏳ 未リリース · [[repos/anthropics-claude-code/changes/2026-10-07|変更]]
- 2026-10-01 — `/diff` のダイアログで一覧のどのファイルも開けるように（表示中の行の hunk を読む）、閉じても「Diff dialog dismissed」を出さないように（[#98555](https://github.com/anthropics/claude-code/pull/98555)）📦 v2.1.287 · [[repos/anthropics-claude-code/changes/2026-10-02|変更]]
- 2026-09-30 — パネルを開いた時点から HEAD を監視し、別ターミナルで終えたマージを自動で検知。珍しい名前のブランチで 2 秒ごとに git を起動しないように（[#98357](https://github.com/anthropics/claude-code/pull/98357)）📦 v2.1.287 · [[repos/anthropics-claude-code/changes/2026-10-02|変更]]
- 2026-09-30 — 全ファイルの hunk を 1 回の `git diff --raw -z -p` で読むように（最大 50 プロセス → 1 プロセス）（[#98445](https://github.com/anthropics/claude-code/pull/98445)）📦 v2.1.287 · [[repos/anthropics-claude-code/changes/2026-10-02|変更]]
- 2026-09-30 — 完了したリベースが残した `REBASE_HEAD` だけではリベース中とみなさず、「Diff unavailable」が続かないように（[#98374](https://github.com/anthropics/claude-code/pull/98374)）📦 v2.1.287 · [[repos/anthropics-claude-code/changes/2026-10-02|変更]]
- 2026-09-30 — `git diff` に `--no-color` を付ける変更（[#96363](https://github.com/anthropics/claude-code/pull/96363)）を revert し、以前の挙動に戻す（[#98018](https://github.com/anthropics/claude-code/pull/98018)）📦 v2.1.285 · [[repos/anthropics-claude-code/changes/2026-09-30|変更]]
- 2026-09-28 — `ui.focus` フックが `diff` と `cc-plugin-diff` のどちらの名前の要素にも反応するように（[#96953](https://github.com/anthropics/claude-code/pull/96953)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-28 — `git diff` に `--no-color` を付け、`color.ui=always` などの設定で diff 本文が空（`No diff content`）になる問題を修正（[#96363](https://github.com/anthropics/claude-code/pull/96363)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-28 — 読み取り専用のシェルコマンド（`isReadOnly`）の後は diff を再取得しないように（[#95423](https://github.com/anthropics/claude-code/pull/95423)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-28 — `command.run` フックのコマンド名をリテラル `'diff'` で書き、mod の読み込み中に起動直後の `/help` などが待たされないように（[#96570](https://github.com/anthropics/claude-code/pull/96570)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-24 — transcript に編集が含まれる再開・継続セッションは幅が確定し次第パネルを開き、`/clear` はパネルを開いたまま読み直し、セッション開始の境界はエンジンの `startedAt` に追従（[#95587](https://github.com/anthropics/claude-code/pull/95587)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — ドッキングされたパネルは開く前にリポジトリを読むようになり、「Loading diff…」の表示を経由しなくなった（[#95488](https://github.com/anthropics/claude-code/pull/95488)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — 最初の編集でパネルを自動的に開く条件を、メインループでの編集かつファイルチェックポイントが有効なときだけに限定。幅未確定のまま開こうとした表示はリサイズ待ちにせず取り下げる（[#95476](https://github.com/anthropics/claude-code/pull/95476)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]

## 関連

- [[repos/anthropics-claude-code/releases/v2.1.287|v2.1.287]]
- [[repos/anthropics-claude-code/releases/v2.1.285|v2.1.285]]
- [[repos/anthropics-claude-code/releases/v2.1.283|v2.1.283]]
- [[repos/anthropics-claude-code/releases/v2.1.281|v2.1.281]]
