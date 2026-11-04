---
title: css-env-1
updated: 2026-11-04
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

`env()` と環境変数（カスタム env など）を定義する仕様。
2026-11-04 の取り込みで、`color` と `accent-color` を `env()` として渡し、ルート要素に UA のルールを置く形になった（`css-link-params-1` と合わせた変更、#14447）。カスタム env の節は移動され、link params にも言及するようになった。`env()` のタイミングは十分に定義され定着しているとして、古くなった issue が削除された（未リリース）。

## 主な API・オプション

- `env()` — 環境変数を参照する関数。`color` / `accent-color` を `env()` として渡す（#14447）

## 変更履歴

- 2026-11-03 — `env()` のタイミングについての古い issue を削除（[`d96f446`](https://github.com/w3c/csswg-drafts/commit/d96f446537800c33777eac39a983b280600eec66)、[`855da9c`](https://github.com/w3c/csswg-drafts/commit/855da9c71987cc35cad81398a86066d2b5c63982)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-11-03 — `color` / `accent-color` を `env()` として渡し、ルートに UA ルールを置く（#14447）（[`f6a994b`](https://github.com/w3c/csswg-drafts/commit/f6a994be84d4df01b0c9cb77225ca11f1b131dde)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]

## 関連

- [[repos/w3c-csswg-drafts/topics/css-link-params-1|css-link-params-1]]
- [[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04 の変更]]
