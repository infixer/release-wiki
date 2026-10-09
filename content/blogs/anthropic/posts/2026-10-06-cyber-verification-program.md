---
title: Cyber Verification Program を拡大、3 段階のアクセス階層を導入
date: 2026-10-06
tags:
  - blog/anthropic
  - post
---

[元の記事](https://www.anthropic.com/news/cyber-verification-program) · 公開: 2026-10-06

## 要約

Anthropic は、資格のあるセキュリティ専門家に高度なサイバー能力と緩和されたブロック分類器を提供する「Cyber Verification Program（CVP）」の拡大版を開始した。これまでの Project Glasswing（重要ソフトウェアを守る組織に Claude Mythos を提供）と CVP（審査済みチームに Claude Opus・Sonnet の緩和された安全策を提供）を 1 つに統合し、Defense Access・Red Team Access・Specialized Access の 3 つのアクセス階層を設けた。各階層で Claude Opus 5.5・Claude Sonnet 5.5・Claude Mythos 5.1 と今後の新モデルが使える。

## 新機能・主な変更

> [!info] 背景
> サイバーセキュリティは本質的にデュアルユースであるため、一般提供モデル（Claude Opus 5.5・Claude Fable 5.1・Claude Sonnet 5.5 など）にはほとんどのサイバー作業をブロックする保守的な安全策がかかっている。一方で防御側には最も強力な能力が必要なため、過去 6 か月は Project Glasswing と CVP の 2 つのプログラムで信頼できるアクセスを提供してきた。

> [!tip] Defense Access
> SOC・インシデント対応、マルウェアのリバースエンジニアリング、脆弱性の分析・検証などの防御作業向け。
>
> - **対象の例**: 自ら所有・保守するシステムを守る企業・非営利団体・大学・政府機関のセキュリティチーム、規模を問わない重要インフラ事業者（地域病院や自治体の公益事業など）、小規模なセキュリティ企業、OSS メンテナー、脆弱性報告の実績がある個人研究者
> - **審査**: 防御作業を行う多くの組織が対象になる見込みで、数日以内の回答を目指す

> [!tip] Red Team Access
> Defense Access の用途に、許可されたペネトレーションテストとレッドチーミングを加えた階層。
>
> - **対象の例**: 社内レッドチーム、政府のレッドチーム、セキュリティ・ペネトレーションテスト企業。現時点では組織のみで、個人研究者は対象外
> - **制約**: テストを許可されたシステム（重要産業の IT システムを含む）に対してのみ攻撃的テストができる。ランサムウェアの展開、物理システムの損傷、高リスクの安全システムへのペンテストなど、物理的な被害や大規模な混乱につながる行為はリアルタイムでブロックされる
> - **審査**: 数週間かかる見込み。審査中は Defense Access に登録される

> [!tip] Specialized Access
> サイバー関連のブロックが最も少ない階層。航空機の運航システム、電力網、通信網、銀行間送金インフラ、政府の行政ネットワークなど、人命や市場に影響し得る安全システムのテストを許可された、限られた検証済み組織向け。
>
> - **審査**: 現在は米国政府と協力し、すべての組織を詳細に審査する
> - Project Glasswing の既存メンバーはこの階層に移行し、現行モデルについては再承認は不要

> [!info] 一般提供モデルでできること
> コードレビュー、既知の問題のパッチ適用、自ら所有するソースコードの脆弱性探索、セキュリティアラートのトリアージなどには、引き続き一般提供モデルを使える。

> [!info] データ保持と提供環境
> - 不正利用を監視するため、プログラム参加組織にはデータ保持が必要。今秋後半に Enterprise Frontier Safeguards（EFS）が利用可能になれば、対象組織は自ら管理するクラウドインフラにデータを保存できる
> - EFS が使えるようになるまでは、ゼロデータ保持で Claude Fable 5.1 または Claude Mythos 5.1 を利用している組織は、CVP もゼロデータ保持で使える
> - CVP は Claude Platform、Google Cloud の Vertex AI、Microsoft Foundry で利用可能。Amazon Bedrock では EFS の対象顧客のみ

> [!info] 階層の有効性の検証（CyScenarioBench）
> 現実的な制約のもとで多段階のサイバー作戦を計画・実行できるかを測る評価 CyScenarioBench で、Claude Opus 5.5 を各階層向けの安全策で試した（10 課題 × 5 回 = 50 試行）。
>
> - CVP なし: すべての課題が最初のプロンプトでブロック
> - Defense Access: 50 試行中 46 件が途中でブロックされ、残り 4 件は成功
> - Red Team Access: ブロックは発生せず、50 件中 34 件を完了。安全策なし（Specialized Access に相当）での成功率 67.6% と実質的に同等

> [!info] Project Glasswing の成果
> パートナーは 2026 年 4〜7 月に少なくとも 129,000 件の検証済み脆弱性を発見し、Anthropic 自身の OSS スキャンでも 2026 年 4〜10 月に 5,500 件を追加で発見した。うち 33,000 件以上が Critical・High と評価されている。33 件のパートナー報告などの部分的なデータに基づくため過小評価であり、実際の影響は少なくとも 5 倍と見込んでいる。

## 破壊的変更・移行手順

> [!warning] 既存の CVP メンバー
> 既存メンバーは以前のモデルについて現在の設定が維持され、更新後のプログラムで Claude Opus 5.5・Claude Sonnet 5.5・Claude Mythos 5.1 へのアクセスが自動的に審査される。管理者は、記事に示された手順で特定のワークスペースにアクセスを割り当てる必要がある。

## 関連

- [[blogs/anthropic/posts/2026-10-08-anthropic-cyber-mission|Anthropic Cyber Mission を開始、重要インフラと OSS の防御を支援]]
- [[blogs/anthropic/posts/2026-09-01-enterprise-frontier-safeguards|顧客と共に開発する Enterprise Frontier Safeguards]]
- [[blogs/anthropic/posts/2026-09-17-life-sciences-verification-program|Life Sciences Verification Program（LSVP）提供開始]]
- [[blogs/anthropic/posts/2026-08-31-improving-alignment-security-efforts|アライメントとセキュリティ対策の強化]]
