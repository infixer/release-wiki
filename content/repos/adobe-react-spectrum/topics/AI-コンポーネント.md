---
title: AI-コンポーネント
updated: 2026-09-28
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

`@react-spectrum/ai` パッケージにある S2 の AI 向けコンポーネント群。プロンプト入力欄の `PromptField`（音声入力ボタン `PromptFieldVoiceButton` を含む）や、`AttachmentList`・`AttachmentGrid` などがある。S2 docs では AI コンポーネントのページ（`ai-components.mdx`）で解説されている。

## 主な API・オプション

- `PromptField` — プロンプト入力欄。音声入力（SpeechRecognition）による文字起こしに対応
- `AttachmentList` — 既存のアタッチメント表示コンポーネント
- `AttachmentGrid` — 2026-09-28 に追加された新コンポーネント

## 変更履歴

- 2026-09-28 — `AttachmentGrid` コンポーネントを追加（[#10561](https://github.com/adobe/react-spectrum/pull/10561)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-28|変更]]
- 2026-09-28 — 音声入力中に送信すると PromptField の内容が元に戻り、文字起こしが残る問題を修正（[#10624](https://github.com/adobe/react-spectrum/pull/10624)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-28|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-28|2026-09-28 の変更]]
