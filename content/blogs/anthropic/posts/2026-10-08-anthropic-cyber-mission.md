---
title: Anthropic Cyber Mission を開始、重要インフラと OSS の防御を支援
date: 2026-10-08
tags:
  - blog/anthropic
  - post
---

[元の記事](https://www.anthropic.com/news/anthropic-cyber-mission) · 公開: 2026-10-08

## 要約

Anthropic は、誰もが依存するシステムを守るための長期的な取り組み「Anthropic Cyber Mission」を開始した。防御側にツール・研究・リソースを提供するもので、まず「重要インフラ」と「オープンソースソフトウェア」の 2 領域から始める。重要インフラ向けには、運用技術（OT）の防御者にフロンティアモデル・常駐エンジニア・脅威研究を届ける Critical Infrastructure Defense Program（CIDP）を、OSS 向けには最も高性能なモデルによる定期的なセキュリティスキャンを無料で提供する OSS Scanner を開始した。Project Glasswing の教訓に基づく取り組みで、Glasswing は今週はじめに拡大版の Cyber Verification Program に統合されている。

## 新機能・主な変更

> [!info] 背景
> 脆弱性を見つけることはかつてなく容易になったが、検証・優先順位付け・修正は依然として難しい。Project Glasswing ではパートナーが多くの脆弱性を発見したものの、サイバーリスクは十分に下がっていない。重要インフラの防御者や OSS コミュニティは深刻なリソース不足に直面している。

> [!tip] Critical Infrastructure Defense Program（CIDP）
> 電力網・水道・工場・交通網などを動かす運用技術（OT）は、停止してパッチを当てられないことが多く、既知の脆弱性が何年も残ることがある。CIDP は、事業者が頼る信頼できるプロバイダーに、フロンティア Claude モデル・現地のエンジニア・脅威研究を提供する。
>
> - **創設パートナー**: Accenture、Booz Allen、CrowdStrike、Deloitte、Dragos、Hitachi、Insane Cyber、Nozomi Networks、Palo Alto Networks、PwC、Rockwell Automation
> - **進め方**: まず少数のプロバイダーと協力し、どの戦略が効果的で実用的かを学ぶ。今後数か月でパートナーと対象分野を広げる
> - **参加**: 重要インフラ向けのセキュリティ製品・サービスを作る企業（セキュリティベンダー、システムインテグレーター、機器メーカー）は関心を登録できる

> [!tip] OSS Scanner
> Google の OSS-Fuzz に着想を得た、オプトイン型のサービス。登録したプロジェクトは、最も高性能なモデルによる定期スキャンを無料で受けられる。
>
> - **レポートの中身**: バグがどう悪用され得るかの概念実証（PoC）、説明、可能な場合は修正案
> - **注意点**: レポートはモデルが生成し、人間のレビューなしで送られる。そのぶん早く届くが、深刻度の評価違いなどの不正確さを含むことがある。真陽性率は 90% 超を見込む
> - **対象**: 指摘に対応できる体制のあるプロジェクト向け。それ以外のプロジェクトには、引き続き CVD ポリシーに沿って人間が検証した開示を行う
> - **今後**: より多くのプロジェクトへの展開、トリアージとパッチ適用の自動化、コードの堅牢化や書き直しのための新しい安全なアーキテクチャ・コーディング手法の研究と共有

> [!info] これまでの支援
> - 6 月に州・地方・部族・準州政府向けのサイバー防御プログラムを開始し、米国の州の半数以上と国内最大級の公的重要インフラ事業者にフロンティア Claude モデルと技術支援を提供してきた
> - Python Software Foundation、Linux Foundation を通じた Alpha-Omega と OpenSSF、Apache Software Foundation などに資金を提供し、脆弱性報告を集約・調整する Akrites と Gold Eagle も支援している
> - 8 月に開始した Defender Advantage Fund（0xDAF）がこれらの領域のパイロットを支え、OSS Scanner の無料提供を支える
> - メンテナーは Claude for Open Source（Claude Max の無料提供）や Cyber Verification Program にも申し込める

> [!info] 見通し
> 2 年後には AI は防御側に有利になる（出荷前にバグを見つけやすくなり、安全なソフトウェアを一から書け、モデルでシステムを能動的に守れる）と予測する一方、短期的にはそうならない可能性がある。Glasswing では脆弱性の発見から修正まで数か月かかることが多く、OT では稼働中の機械に安全に適用できるまで修正を待つ必要があり、まれに数十年かかることもある。

## 破壊的変更・移行手順

なし

## 関連

- [[blogs/anthropic/posts/2026-10-06-cyber-verification-program|Cyber Verification Program を拡大、3 段階のアクセス階層を導入]]
- [[blogs/anthropic/posts/2026-10-08-2026-usage-policy-update|2026 年版 Usage Policy の更新]]
- [[blogs/anthropic/posts/2026-10-08-genesis-mission-commitment|Genesis Mission に 3 年で 1.5 億ドルを拠出]]
