---
title: Life Sciences Verification Program（LSVP）提供開始
date: 2026-09-17
tags:
  - blog/anthropic
  - post
---

[元の記事](https://www.anthropic.com/news/life-sciences-verification-program) · 公開: 2026-09-17

## 要約

Anthropic は、生命科学の専門家向けに Mythos・Opus・Sonnet モデルへ、生物学関連タスクに対してより許容度を高めた安全策でアクセスできる「Life Sciences Verification Program（LSVP）」の提供を開始した。既に早期アクセスで数十組織を受け入れ済みで、今回より広い生命科学コミュニティへの応募受付を開始する。まずはベータ版としてチーム・組織向けに提供し、個人の Pro・Max プランへの拡大は今後の予定。創薬・基礎生物学研究・臨床開発・製造など、現行の一般提供版 Fable モデルではブロックされる幅広い作業を可能にすることを目指す。

## 新機能・主な変更

> [!tip] 検証プロセスと2種類のグラント
> 応募者は研究実績・セキュリティ体制・倫理的な研究監督体制の審査を経て、Claude Science・Claude.ai・Claude Code・API のいずれでも使える2種類のグラントを申請できる。
> - **Standard Use**: 大半の生命科学系ワークフロー向け。チーム単位で付与され、年1回更新。Mythos 5.1・Opus 5・Sonnet 5（および今後のモデル）に、より許容度の高い分類器付きでアクセスできる。基礎科学・研究開発・サプライチェーン・製造・臨床開発・品質保証・規制対応・投資/デューデリジェンスなど幅広い活動を想定
> - **High-risk Use**: Standard Use ではブロックされる、より不正利用リスクの高い作業向けの追加グラント。生命科学系の安全策をすべて解除する。単一の研究プロジェクト単位で付与され、6か月ごとに更新が必要。現時点では Opus 5・Sonnet 5 で利用可能（Mythos は米国政府と協議のうえ、審査済みの少数の組織に限定）
>
> サイバー分類器などその他の安全策は、LSVP グラント下でも引き続き有効。

> [!tip] 監視の仕組み
> LSVP では、リアルタイムのブロック型安全策から、行動パターン全体を見るオフライン監視へと切り替えている。これにより正当な作業への割り込みは減るが、フラグが立った活動をレビューするため30日間のデータ保持が必要になる。このデータは厳格に区分管理され、モデル学習にも Anthropic の生命科学研究チームによるアクセスにも使われない。想定される脅威モデルは、アクセス侵害（マルウェア・アカウント乗っ取り）、インサイダー脅威（不正な従業員による悪用）、エージェントの誤用（群れでの長時間タスク中の意図しない危険な行動）の3種類。

> [!tip] 提供状況
> - 初週で数百組織の登録を見込み、今後数週間でさらに拡大予定
> - 現時点では first-party コンソールでの API 利用、Claude for Enterprise・Team プランで提供。個人プラン・サードパーティ基盤には未対応
> - ベータ版では BAA 対応組織は非対応（PHI データを扱う顧客は非 HIPAA の別組織を利用する必要がある）
> - API・Claude Science ではグラントをネイティブに切り替え可能。Claude.ai・Claude Code では現状、事前選択されたデフォルトグラントのみ適用される（Claude Code を API 認証で使う場合を除く）

## 破壊的変更・移行手順

なし

## 関連

- [[blogs/anthropic/posts/2026-09-23-claude-discovers-novel-enzyme-system|Claude が CRISPR 様の新規酵素システムを発見]]
- [[blogs/anthropic/posts/2026-09-18-accenture-embedded-evaluation|アクセンチュアとの組み込み型評価パートナーシップ]]
- [[blogs/anthropic/posts/2026-09-01-enterprise-frontier-safeguards|顧客と共に開発する Enterprise Frontier Safeguards]]
