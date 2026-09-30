---
title: AI-コンポーネント
updated: 2026-09-30
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

`@react-spectrum/ai` パッケージにある S2 の AI 向けコンポーネント群。プロンプト入力欄の `PromptField`（音声入力ボタン `PromptFieldVoiceButton` を含む）、チャット UI の `Chat` / `Thread`、`AttachmentList`・`AttachmentGrid`、`ResponseStatus`（`ExecutionTraceItems`）などがある。`PromptField` は応答の生成中でも欄にテキストがあれば送信ボタンを表示して追加の指示（steering）を送れ、`renderCompletions` の補完メニューは S2 の仮想化 Menu で描画される。`Chat` / `Thread` はデザイン仕様に合わせた余白とスクロールフェードを持ち、スタイルをコンポーネント側に取り込んで API が簡素化された（スタイルなし版は今後の予定）。S2 docs では AI コンポーネントのページ（`ai-components.mdx`）で解説されている。

## 主な API・オプション

- `PromptField` — プロンプト入力欄。音声入力（SpeechRecognition）、`renderCompletions`（仮想化メニュー）、生成中の送信ボタン表示に対応
- `Chat` / `Thread` / `ThreadItem` — チャットのスレッド表示。スクロールボタンは必須、`ThreadItem` は利用側で個別にラップする
- `ExecutionTraceItems` — `onExpandedChange` を追加
- `AttachmentList` — 既存のアタッチメント表示コンポーネント
- `AttachmentGrid` — 2026-09-28 に追加された新コンポーネント

## 変更履歴

- 2026-09-30 — `PromptField` のサイズ計算を layout effect で行うように（[#10668](https://github.com/adobe/react-spectrum/pull/10668)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]
- 2026-09-30 — `Chat` / `Thread` の余白調整・スクロールフェード追加と API の簡素化（[#10577](https://github.com/adobe/react-spectrum/pull/10577)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]
- 2026-09-30 — `PromptField` で生成中も送信ボタンを表示（steering）、補完メニューを仮想化、`ExecutionTraceItems` に `onExpandedChange` を追加（[#10614](https://github.com/adobe/react-spectrum/pull/10614)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]
- 2026-09-28 — `AttachmentGrid` コンポーネントを追加（[#10561](https://github.com/adobe/react-spectrum/pull/10561)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-28|変更]]
- 2026-09-28 — 音声入力中に送信すると PromptField の内容が元に戻り、文字起こしが残る問題を修正（[#10624](https://github.com/adobe/react-spectrum/pull/10624)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-28|変更]]

## 関連

- [[repos/adobe-react-spectrum/topics/Menu|Menu]]（仮想化 Menu）
- [[repos/adobe-react-spectrum/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-09-28|2026-09-28 の変更]]
