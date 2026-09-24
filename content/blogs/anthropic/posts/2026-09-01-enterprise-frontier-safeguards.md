---
title: 顧客と共に開発する Enterprise Frontier Safeguards
date: 2026-09-01
tags:
  - blog/anthropic
  - post
---

[元の記事](https://www.anthropic.com/news/enterprise-frontier-safeguards) · 公開: 2026-09-01

## 要約

Anthropic は、ゼロデータ保持（ZDR）のプライバシーと、不正利用を検知する最新の安全策を両立する仕組み「Enterprise Frontier Safeguards（EFS）」を発表。データは Anthropic ではなく顧客が管理するクラウドインフラに保存される。金融・医療・製造・通信・法律・小売・公共部門など100社以上の顧客、および AWS・Google Cloud・Microsoft Azure と共同で開発した。今秋から段階的に提供を開始し、対象顧客には EFS が使えるようになるまでの間、Claude Fable 5・Fable 5.1 で ZDR を提供する。

## 新機能・主な変更

> [!tip] EFS の仕組み
> - 監視が不審なパターンを検知すると、そのシグナルは Anthropic ではなく直接顧客に送られ、顧客自身が確認・対応する（Anthropic 従業員によるレビューは不要)
> - 監視対象のアクティビティデータは、顧客自身のクラウドアカウント（Amazon S3・Azure Blob Storage・Google Cloud Storage など）に、顧客管理の暗号鍵・アクセスポリシー・監査ログのもとで保存できる
> - Customer-owned storage・Customer-Managed Encryption Keys・完全自動レビューはそれぞれオプトインで、必要なものだけ有効化できる。有効化してもモデルの挙動・API 料金・レート制限は変わらない
> - Anthropic は EFS 自体の利用料を課さない。顧客がクラウドにデータを保存する場合は、ストレージ・読み書き・データ転送の費用をクラウド事業者から請求される

> [!tip] 対応環境
> Claude Code・Claude Enterprise・Claude Platform・Amazon Bedrock・Claude Platform on AWS・Google の Agent Platform・Microsoft Foundry で利用可能。

> [!info] 背景
> Fable 5 から導入した30日間のデータ保持は、複数セッション・複数アカウントにまたがる巧妙な不正利用（認証情報の窃取など）を、都度即座に破棄する分析だけでは検知できないために必要だったが、規制業界の顧客にとっては利用しづらい面があった。EFS は「プライバシー」と「時系列・アカウント横断での安全監視」を両立する解決策として設計された。なお、Anthropic は顧客データを許可なく学習に使ったことはなく、今後もない。

## 破壊的変更・移行手順

なし（EFS が利用可能になるまでの移行措置として、対象顧客には Claude Fable 5・Fable 5.1 で ZDR が提供される）

## 関連

- [[blogs/anthropic/posts/2026-09-23-claude-discovers-novel-enzyme-system|Claude が CRISPR 様の新規酵素システムを発見]]
- [[blogs/anthropic/posts/2026-09-18-accenture-embedded-evaluation|アクセンチュアとの組み込み型評価パートナーシップ]]
- [[blogs/anthropic/posts/2026-09-17-life-sciences-verification-program|Life Sciences Verification Program（LSVP）提供開始]]
