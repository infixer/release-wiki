---
title: プログラム的API
updated: 2026-09-28
tags:
  - repo/microsoft-TypeScript
  - topic
---

## 概要

tsgo（Go で書かれたネイティブの TypeScript コンパイラ、TypeScript 7）向けに、プログラムから使う API（`packages/typescript/src/api`、Go 側の `tsc/internal/api`）が急速に整備されている。中心は「スナップショット」の概念で、`api.createSnapshot(changes?)`（常に使える）と `api.getCurrentLanguageServerSnapshot(changes?)`（LSP モード専用）でスナップショットを作り、`snapshot.update(changes)` で新しいスナップショットへ更新する。`changes` にはプログラムの作成（`createPrograms`）・再設定（`reconfigurePrograms`）・最新化（`ensurePrograms`）を渡せる。以前あった `api.updateSnapshot()` や `oldProgram` オプションは廃止された。プロジェクトには Configured・Inferred・Synthetic の種別ごとに専用の型付き ID が導入され、`createProgram` は `compilerOptions` を第2引数のトップレベルに取るようになった。ソースファイルの生成（`createSourceFile` 系）、プリンター（`printFile`）、子ノードの列挙（`childrenIter`）、モジュール解決のオーバーライド（`createModuleResolver`）なども順次移植・追加されている。typescript-eslint からの要望（tsconfig の `plugins` 解析、`MappedType` プロパティの公開）にも対応した。`createSourceFile` 系は parse キャッシュから取得して破棄可能な lease を返すようになり（戻り値の変更）、同じファイル・テキストなら同一のソースファイルになる。TS 6 より前の `SolutionBuilder` に相当する `createBuildOrchestrator`（`BuildOrchestrator`）や、api-extractor 向けの AST ヘルパーも追加された。

## 主な API・オプション

- `api.createSnapshot(changes?)` / `api.getCurrentLanguageServerSnapshot(changes?)` — スナップショットの作成・更新（`api.updateSnapshot()` の後継）
- `snapshot.update(changes)` — `createPrograms` / `reconfigurePrograms` / `ensurePrograms` を指定してスナップショットを更新
- `api.createProgram(rootFiles, compilerOptions, options?)` — `compilerOptions` は第2引数のトップレベル（`options.references` などは第3引数）
- `api.createSourceFile(fileName, sourceText, options?)` / `api.createSourceFileFromFile(file, options?)` — ソースファイルの生成。グローバルな parse キャッシュから取得し、破棄可能な lease（`lease.sourceFile`）を返す
- `node.childrenIter()` — 子ノードをジェネレーターで列挙（`forEachChild` の代替）
- `api.printFile(...)` — プリンターがトップレベル API に移動
- `api.createModuleResolver(compilerOptions, overrides?)` / `resolver.resolveModuleName(name, containingDirectory, moduleKind, { snapshot? })` — モジュール解決のオーバーライド
- `api.createBuildOrchestrator(rootFiles, options)` — `build` / `buildReferences` / `clean` / `cleanReferences`。オプションは `cwd`・`dry`・`force`・`verbose`・`stopBuildOnErrors`・`overrideCompilerOptions`
- `isExternalModule(sourceFile)` / `getCombinedModifierFlags(declaration)` / `getNameOfDeclaration(declaration)` — api-extractor 向けの AST ヘルパー

## 変更履歴

- 2026-09-28 — ビルドオーケストレーター API（`createBuildOrchestrator`、旧 `SolutionBuilder` 相当）を追加（[#64158](https://github.com/microsoft/TypeScript/pull/64158)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-28|変更]]
- 2026-09-28 — api-extractor が使う AST ヘルパー（`isExternalModule`・`getCombinedModifierFlags`・`getNameOfDeclaration`）を追加（[#64439](https://github.com/microsoft/TypeScript/pull/64439)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-28|変更]]
- 2026-09-28 — `createSourceFile` / `createSourceFileFromFile` が parse キャッシュから取得し、破棄可能な lease を返すように（戻り値の変更）（[#64434](https://github.com/microsoft/TypeScript/pull/64434)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-28|変更]]
- 2026-09-24 — 型キャッシュに関する不具合を2件修正（[#64408](https://github.com/microsoft/TypeScript/pull/64408)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — モジュール解決をオーバーライドする `api.createModuleResolver` を追加（[#64299](https://github.com/microsoft/TypeScript/pull/64299)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — tsconfig の `plugins` 解析と `MappedType` プロパティの公開に対応（[#64397](https://github.com/microsoft/TypeScript/pull/64397)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — API 境界でのドライブレターの大文字小文字保持と、大文字小文字を区別しないファイルシステムでのディレクトリ推測の重複問題を修正（[#64391](https://github.com/microsoft/TypeScript/pull/64391)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — プロジェクト参照の省略可能なプロパティを正しく省略可能に修正（[#64326](https://github.com/microsoft/TypeScript/pull/64326)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — no-op な `snapshot.update()` でスナップショットの identity を保持するよう修正（[#64373](https://github.com/microsoft/TypeScript/pull/64373)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — `createProgram` の `compilerOptions` を第2引数のトップレベルに変更（破壊的変更）（[#64324](https://github.com/microsoft/TypeScript/pull/64324)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — Configured・Inferred・Synthetic の各プロジェクトに専用の型付き ID を導入（[#64319](https://github.com/microsoft/TypeScript/pull/64319)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — API ノードにジェネレーターベースの `childrenIter()` を追加（[#64302](https://github.com/microsoft/TypeScript/pull/64302)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — プリンターをトップレベル API に移動し `printFile` を追加（[#64320](https://github.com/microsoft/TypeScript/pull/64320)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — `createSourceFile` / `createSourceFileFromFile` を tsgo に移植（[#64216](https://github.com/microsoft/TypeScript/pull/64216)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]
- 2026-09-24 — `api.updateSnapshot()` を `createSnapshot` / `snapshot.update` に置き換え（[#64204](https://github.com/microsoft/TypeScript/pull/64204)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-24|変更]]

## 関連

- リポジトリ: [[repos/microsoft-TypeScript/index|microsoft/TypeScript]]
