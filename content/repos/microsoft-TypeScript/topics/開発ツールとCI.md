---
title: 開発ツールとCI
updated: 2026-09-24
tags:
  - repo/microsoft-TypeScript
  - topic
---

## 概要

TypeScript 7（tsgo、Go へのネイティブ移植）の開発を支えるビルド・CI・コード生成・ローカライズまわりのインフラ整備。コード生成にインクリメンタルキャッシュのラッパーが全面的に導入され（`generate` サブタスクを最大 80% 短縮）、loc・vendoring タスクもその対象になった。テストは `gotestsum` を Go tool として組み込み、API ベンチマークは CI の専用サブタスクに分離された。ローカライズ（loc）まわりは、loc チームの期待する構成にファイルを作り直し、OneLoc パイプラインの不具合修正も含めて作業を再開できるようにした。Go 1.27 で ARM 上の挙動が変わりうる暗黙の FMA（積和演算）も修正されている。Go らしくない `case` ブロック（意味のない `break` だけの記述）を検出する custom lint ルールも追加された。

## 主な API・オプション

（社内ツール・CI パイプラインの変更が中心で、公開 API・オプションの追加はなし）

## 変更履歴

- 2026-09-24 — OneLoc パイプラインのサービス名の誤りを修正し、パッケージ名未設定時は残りの処理をスキップ（[#64414](https://github.com/microsoft/TypeScript/pull/64414)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — ローカライズファイルの構成を作り直し、ローカライズ作業を再開できるように（[#63987](https://github.com/microsoft/TypeScript/pull/63987)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — VS Code のローカライズツールの依存関係をピン留め（[#64403](https://github.com/microsoft/TypeScript/pull/64403)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — 診断メッセージの `keyToMessage` を遅延マップ化し、Go のビルド時間を短縮（[#64402](https://github.com/microsoft/TypeScript/pull/64402)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — コード生成のテストを修正し、コード生成キャッシュをリポジトリのルートごとに分離（[#64395](https://github.com/microsoft/TypeScript/pull/64395)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — enum ジェネレーターを `Herebyfile` から `scripts` に移動（[#64381](https://github.com/microsoft/TypeScript/pull/64381)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — 意味のない `break` だけの `case` ブロックとトップレベルの冗長な `break` を検出する lint ルールを追加（[#64153](https://github.com/microsoft/TypeScript/pull/64153)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — vendor コードの最新性チェックを `package.json` だけを見るシンプルな実装に簡略化（[#64393](https://github.com/microsoft/TypeScript/pull/64393)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — ローカライズ・vendoring タスクもコード生成キャッシュの対象に追加（[#64392](https://github.com/microsoft/TypeScript/pull/64392)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — Go 1.27 の暗黙 FMA によって挙動が変わりうる箇所を修正（[#64323](https://github.com/microsoft/TypeScript/pull/64323)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — リポジトリ内の全コード生成にインクリメンタルキャッシュを追加（[#64331](https://github.com/microsoft/TypeScript/pull/64331)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — API ベンチマークを CI の専用サブタスクに分離（[#64337](https://github.com/microsoft/TypeScript/pull/64337)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — TS7 のタグ付きリリース向けにビルド・公開パイプラインを更新（[#64286](https://github.com/microsoft/TypeScript/pull/64286)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — `gotestsum` を Go tool として組み込み（[#64211](https://github.com/microsoft/TypeScript/pull/64211)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]

## 関連

- リポジトリ: [[repos/microsoft-TypeScript/index|microsoft/TypeScript]]
