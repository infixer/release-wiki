---
title: Diff パネル
updated: 2026-09-24
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

`mods/diff` は、ビルトインの diff パネルと同じ見た目・挙動を目指す独立実装。最初の編集でパネルを自動的に開く条件（メインループでの編集かつファイルチェックポイントが有効なときのみ）、幅が確定しないうちにエンジンが開こうとした表示の扱い、ドッキング表示前にリポジトリを読んでおくことで「Loading diff…」を経由しない点、再開・継続したセッションでの表示や `/clear` の挙動、セッション開始時刻の基準など、細かな差分を随時ビルトインに合わせている。`/diff` による手動の開閉は影響を受けない。

## 主な API・オプション

- `/diff` — 手動でのパネル開閉
- `$.session.usage()` の `startedAt` — セッション開始時刻の基準（返さないエンジンでは mod 自身の起動時刻を使用）

## 変更履歴

- 2026-09-24 — transcript に編集が含まれる再開・継続セッションは幅が確定し次第パネルを開き、`/clear` はパネルを開いたまま読み直し、セッション開始の境界はエンジンの `startedAt` に追従（[#95587](https://github.com/anthropics/claude-code/pull/95587)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — ドッキングされたパネルは開く前にリポジトリを読むようになり、「Loading diff…」の表示を経由しなくなった（[#95488](https://github.com/anthropics/claude-code/pull/95488)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — 最初の編集でパネルを自動的に開く条件を、メインループでの編集かつファイルチェックポイントが有効なときだけに限定。幅未確定のまま開こうとした表示はリサイズ待ちにせず取り下げる（[#95476](https://github.com/anthropics/claude-code/pull/95476)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]

## 関連

- [[repos/anthropics-claude-code/releases/v2.1.281|v2.1.281]]
