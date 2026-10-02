---
title: TUI
updated: 2026-10-02
tags:
  - repo/openai-codex
  - topic
---

## 概要

ターミナル上で動く Codex のフルスクリーン UI（会話トランスクリプト、各種選択メニュー、数式・Markdown・Mermaid のレンダリングなど）。直近では、Mermaid フローチャートの記法（辺の種類・ラベル・`&` グループ）が拡充され、非対応の記法はソースのまま残して通知するようになった。数式表示は `$0$`・`\bigwedge`・`\bigl`/`\bigr` に対応。クリップボードへのコピー中も UI が応答するようになり、Ghostty・Kitty ではリンク上にハンドポインタが表示される。Windows ターミナルでの SGR マウスレポートの修正や、中断通知の文言の簡素化も入った。2026-09-30 の回では、フルスクリーンのステータス行に Plan mode の切り替えヒント（`shift+tab`）が出るようになり、応答中のフォローアップ指示（`:codex-followup[...]`）はラベルとして表示されるようになった。インラインコード内の選択はプレーンテキストでコピーされ、Pro プランの表示名は `Pro 100`・`Pro 200`・`Pro 500` に、起動時のプロモーションはプラットフォーム別のデスクトップアプリの tip に整理された。2026-10-02 の回では、コマンドセンターに会話のフォーク（`f`、`agents.fork`）が追加され、既定の検索ショートカットは `F3` と `/` に移った。権限の設定は接続先サーバーの定義に従うようになり、描画されたファイルパスの選択はプレーンテキストでコピーされる。

## 主な API・オプション

- Unicode 数式レンダリング — `\hat`・`\bar`・`\tilde`・`\vec`・`\dot`・`\ddot` などのアクセント、物理・関係・集合・論理・矢印・積分などの記号、`\left`/`\right` の名前付きデリミタ（`\left<`・`\right>` を含む）
- 選択メニュー（ピッカー）共通スタイル — 安定した列幅、狭い場合の説明非表示、キーバインドから生成するコンパクトなヒント
- Mermaid フローチャート — `-->`・`---`・`<-->`・`-.->`・`-.-`・`<-.->`、パイプラベル・中置ラベル、`&` グループ展開（辺は 24 本まで）。方向未指定は top-down
- `:codex-followup[label]{prompt="..."}` — 応答中のフォローアップ指示。TUI 表示と応答全体のコピーではラベルだけになる
- `agents.fork`（TUI のキーマップ）— コマンドセンターで選んだ会話をフォーク（既定 `f`）。検索の既定は `F3` と `/`
- 権限プロファイル — 接続先サーバーから取得し、`thread/settings/update` で適用（カスタムプロファイルを含む）

## 変更履歴

- 2026-10-02 — TUI のコマンドセンターに会話のフォーク操作を追加（[#49517](https://github.com/openai/codex/pull/49517)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]
- 2026-10-02 — TUI の権限設定を接続先サーバーの定義に従うように（[#49472](https://github.com/openai/codex/pull/49472)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]
- 2026-10-02 — 選択したファイルパスをプレーンテキストでコピー（[#49564](https://github.com/openai/codex/pull/49564)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]
- 2026-09-30 — 起動時のプロモーションをプラットフォーム別のデスクトップアプリの tip に整理（[#49093](https://github.com/openai/codex/pull/49093)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — フォローアップ指示をラベルとして表示（[#49089](https://github.com/openai/codex/pull/49089)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — Pro プランの表示名を `Pro 100`・`Pro 200`・`Pro 500` に（表示名の対応表を共通化）（[#49079](https://github.com/openai/codex/pull/49079)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — Pro プランの表示名を変更（`Pro Extra` など）（[#49043](https://github.com/openai/codex/pull/49043)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — インラインコード内の選択をプレーンテキストでコピー（[#49041](https://github.com/openai/codex/pull/49041)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-30 — フルスクリーンのステータス行に Plan mode の切り替えヒントを表示（[#49037](https://github.com/openai/codex/pull/49037)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-30|変更]]
- 2026-09-28 — Mermaid フローチャートの記法サポートを拡充（[#48895](https://github.com/openai/codex/pull/48895)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — TUI の中断通知を短く中立的な表現に（[#48830](https://github.com/openai/codex/pull/48830)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — Ghostty・Kitty でトランスクリプトのリンク上にハンドポインタを表示（[#48827](https://github.com/openai/codex/pull/48827)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — Windows のターミナルでの SGR マウスレポートを修正（[#48799](https://github.com/openai/codex/pull/48799)）⏳ 未リリース · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — TUI の数式表示で `$0$` と `\bigwedge` などを描画するように（[#48551](https://github.com/openai/codex/pull/48551)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — Mermaid の図形・関係・状態の説明の解析を修正（[#48489](https://github.com/openai/codex/pull/48489)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-28 — クリップボードへのコピー中も TUI が応答するように（[#47847](https://github.com/openai/codex/pull/47847)）📦 rust-v0.159.0-alpha.10 · [[repos/openai-codex/changes/2026-09-28|変更]]
- 2026-09-24 — 読み取り専用エージェントセッションでの `Esc` ナビゲーションを修正（[#47320](https://github.com/openai/codex/pull/47320)）📦 rust-v0.158.0-alpha.8 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — TUI のピッカー表示を統一し、折り返し時の表示崩れを修正（[#46691](https://github.com/openai/codex/pull/46691)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]
- 2026-09-24 — TUI の数式表示にアクセント・記号・名前付きデリミタを追加（[#46266](https://github.com/openai/codex/pull/46266)）📦 rust-v0.156.1 · [[repos/openai-codex/changes/2026-09-24|変更]]

## 関連

- [[repos/openai-codex/releases/rust-v0.158.0|rust-v0.158.0]]
- [[repos/openai-codex/releases/rust-v0.157.0|rust-v0.157.0]]
- [[repos/openai-codex/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]
- [[repos/openai-codex/releases/rust-v0.155.1|rust-v0.155.1]]
- [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/openai-codex/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/openai-codex/releases/rust-v0.159.0|rust-v0.159.0]]
- [[repos/openai-codex/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/openai-codex/releases/rust-v0.160.0|rust-v0.160.0]]
