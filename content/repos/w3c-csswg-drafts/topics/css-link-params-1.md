---
title: css-link-params-1
updated: 2026-11-04
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

link params（`param()` など）を定義する仕様。
2026-11-04 の取り込みで、WG の決議に沿って `param()` の名前と値の間に `:` を使うことになった（#14275）。また、`color` と `accent-color` を `env()` として渡し、ルート要素に UA のルールを置く形になった（`css-env-1` と合わせた変更、#14447）（未リリース）。

## 主な API・オプション

- `param()` — 名前と値の間を `:` で区切る（#14275）

## 変更履歴

- 2026-11-03 — `color` / `accent-color` を `env()` として渡し、ルートに UA ルールを置く（#14447）（[`f6a994b`](https://github.com/w3c/csswg-drafts/commit/f6a994be84d4df01b0c9cb77225ca11f1b131dde)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-11-03 — WG の決議に沿って `param()` の名前と値の間を `:` に（#14275）（[`636a76a`](https://github.com/w3c/csswg-drafts/commit/636a76a25e992170038bbdcc032cc8f24519e991)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]

## 関連

- [[repos/w3c-csswg-drafts/topics/css-env-1|css-env-1]]
- [[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04 の変更]]
