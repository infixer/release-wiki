---
title: Chrome ウェブストアの違反に関するトラブルシューティング
date: 2026-09-24
tags:
  - blog/chrome
  - post
---

[元の記事](https://developer.chrome.com/docs/webstore/troubleshooting?hl=ja) · 公開日不明（一覧ページのため取り込み日を記載）

## 要約

Chrome ウェブストアで拡張機能が却下・削除される理由を、違反カテゴリごとに整理したトラブルシューティングガイド。各カテゴリには「色 + 元素名」の通知 ID（例: Yellow Magnesium＝機能不全）が割り当てられており、よくある違反理由と修正方法がまとめられている。

## 新機能・主な変更

> [!tip] 主な違反カテゴリと通知 ID
> - **Blue Argon**: Manifest V3 でリモートホストされたコードを実行している（`eval()` やリモート文字列の実行など）
> - **Yellow Magnesium**: パッケージのファイル欠落やサーバー側の問題で、掲載されている機能が動作しない
> - **Purple Potassium**: `activeTab` / `tabs` / `cookies` / `storage` などの権限を機能に対して過剰にリクエストしている
> - **Yellow Zinc**: アイコン・タイトル・スクリーンショット・説明が不足、または実態と食い違っている
> - **Red Nickel / Red Potassium / Red Silicon**: メタデータと異なる動作、他エンティティへのなりすまし、他拡張機能のコピーなどの虚偽の振る舞い
> - **Purple Lithium / Purple Nickel / Purple Copper / Purple Magnesium**: プライバシーポリシーの不備、データ収集の開示不足、非 HTTPS でのデータ送信、不要な閲覧履歴の収集
> - **Red Magnesium / Red Copper / Red Lithium**: 無関係な機能を 1 つの拡張機能に詰め込む単一目的違反
> - **Grey Zinc / Copper / Lithium / Nickel / Magnesium / Potassium / Silicon**: 違法行為・オンラインギャンブル・ポルノ・ヘイト・暴力的コンテンツ・成人向け未表示・暗号通貨マイニング
> - **Blue Zinc / Blue Copper / Blue Lithium / Blue Magnesium**: ペイウォールや著作権保護コンテンツへの不正アクセス提供
> - **Yellow Argon / Yellow Lithium / Yellow Nickel**: キーワードの乱用・別サイトへのリダイレクトのみの拡張機能・スパム的な重複送信

## 破壊的変更・移行手順

なし

## 関連

なし
