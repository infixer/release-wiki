---
title: TUI
updated: 2026-09-24
tags:
  - repo/openai-codex
  - topic
---

## 概要

ターミナル上で動く Codex のフルスクリーン UI（会話トランスクリプト、各種選択メニュー、数式・Markdown レンダリングなど）。この期間は、Unicode 数式レンダリングにアクセント記号・追加記号・名前付きデリミタが加わり、選択メニュー（ピッカー）の見た目が全体で統一されて折り返し時の表示崩れが修正された。また読み取り専用のエージェントセッションで `Esc` キーがエージェントコマンドセンターへ正しく戻れるように修正されている。

## 主な API・オプション

- Unicode 数式レンダリング — `\hat`・`\bar`・`\tilde`・`\vec`・`\dot`・`\ddot` などのアクセント、物理・関係・集合・論理・矢印・積分などの記号、`\left`/`\right` の名前付きデリミタ（`\left<`・`\right>` を含む）
- 選択メニュー（ピッカー）共通スタイル — 安定した列幅、狭い場合の説明非表示、キーバインドから生成するコンパクトなヒント

## 変更履歴

- 2026-09-24 — 読み取り専用エージェントセッションでの `Esc` ナビゲーションを修正（[#47320](https://github.com/openai/codex/pull/47320)）📦 rust-v0.158.0-alpha.8 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — TUI のピッカー表示を統一し、折り返し時の表示崩れを修正（[#46691](https://github.com/openai/codex/pull/46691)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — TUI の数式表示にアクセント・記号・名前付きデリミタを追加（[#46266](https://github.com/openai/codex/pull/46266)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]

## 関連

- [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]
- [[repos/openai-codex/releases/rust-v0.155.1|rust-v0.155.1]]
- [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
