---
title: Proofreader API
date: 2025-09-12
tags:
  - blog/chrome
  - post
---

[元の記事](https://developer.chrome.com/docs/ai/proofreader-api?hl=ja) · 公開: 2025-09-12

## 要約

Chrome の組み込み AI API の一つ「Proofreader API」。文法・スペル・句読点の誤りを検出して修正する校正機能を、オンデバイスでウェブアプリや拡張機能に組み込める。Chrome 141〜145 でオリジントライアルを実施中。

## 新機能・主な変更

> [!tip] Proofreader API
> `Proofreader.create()` でセッションを作成し、`proofread()` に文字列を渡すと、修正済みテキスト（`correctedInput`）と個々の修正内容（`corrections` 配列。位置・種類・説明つき）を取得できる。
>
> - **使い方**: `chrome://flags/#proofreader-api` を有効化するとローカルで検証可能。本番利用にはオリジントライアルへの登録が必要
> - **動作要件**: Windows 10/11・macOS 13 以降・Linux・ChromeOS（Chromebook Plus、プラットフォーム 16389.0.0 以降）。空き容量 22GB 以上、GPU 利用時は VRAM 4GB 超、CPU のみの場合は RAM 16GB 以上かつ 4 コア以上
> - **利用範囲**: 既定ではトップレベルウィンドウと同一オリジンの iframe のみで利用可能。`allow="proofreader"` でクロスオリジン iframe にも権限を委任できる。Web Worker では利用不可

## 破壊的変更・移行手順

なし

## 関連

なし
