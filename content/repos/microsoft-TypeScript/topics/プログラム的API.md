---
title: プログラム的API
updated: 2026-10-09
tags:
  - repo/microsoft-TypeScript
  - topic
---

## 概要

tsgo（Go で書かれたネイティブの TypeScript コンパイラ、TypeScript 7）向けに、プログラムから使う API（`packages/typescript/src/api`、Go 側の `tsc/internal/api`）が急速に整備されている。中心は「スナップショット」の概念で、`api.createSnapshot(changes?)`（常に使える）と `api.getCurrentLanguageServerSnapshot(changes?)`（LSP モード専用）でスナップショットを作り、`snapshot.update(changes)` で新しいスナップショットへ更新する。`changes` にはプログラムの作成（`createPrograms`）・再設定（`reconfigurePrograms`）・最新化（`ensurePrograms`）を渡せる。以前あった `api.updateSnapshot()` や `oldProgram` オプションは廃止された。プロジェクトには Configured・Inferred・Synthetic の種別ごとに専用の型付き ID が導入され、`createProgram` は `compilerOptions` を第2引数のトップレベルに取るようになった。ソースファイルの生成（`createSourceFile` 系）、プリンター（`printFile`）、子ノードの列挙（`childrenIter`）、モジュール解決のオーバーライド（`createModuleResolver`）なども順次移植・追加されている。typescript-eslint からの要望（tsconfig の `plugins` 解析、`MappedType` プロパティの公開）にも対応した。`createSourceFile` 系は parse キャッシュから取得して破棄可能な lease を返すようになり（戻り値の変更）、同じファイル・テキストなら同一のソースファイルになる。TS 6 より前の `SolutionBuilder` に相当する `createBuildOrchestrator`（`BuildOrchestrator`）や、api-extractor 向けの AST ヘルパーも追加された。コールバック式のファイルシステムは、`createVirtualFileSystem` が公開 API から外れ、すべての関数について実装（コールバックか、サーバー側の実装を表すシンボル）の指定が必須になった（破壊的変更）。バインダーが作った Symbol はクライアント側でも SourceFile のキャッシュに保存され、スナップショットをまたいで同一になった。`getJSDocCommentsAndTags` も 6.0 と同じ動作で復活した。Declaration ノードからバインダーが作った Symbol を取り出す `getSymbol(decl)`（TS 6 の `declaration.symbol` 相当）が追加され、型チェッカーなしで `createSourceFile` で作ったファイルの Symbol も取れるようになった。補完 API が返す Symbol は常に現在のスナップショットのものになった。型付きパスの導入（#64159）に向けたバグ修正も先行して入っている。`getSymbol(decl)` の follow-up として、マージされた Symbol を扱うチェッカーのメソッドも API に追加された。型付きパス（#64159）も本体がマージされ、`RootedPath`・`RootedFilePath`・`RootedDirectoryPath` と、旧 `Path` を改名した `PathKey` が導入された。非同期 API では、いくつかのオブジェクトが `[Symbol.dispose]()` を使って破棄の Promise を捨てていたのが `[Symbol.asyncDispose]()` に直された。`createPrograms` で作った設定ファイルの無いプログラムでプロジェクト参照の診断が出ると API サーバーごとクラッシュしていた問題が直り（TS6306 を報告）、静的な `moduleResolutions` や `resolveModuleName` コールバックによるカスタマイズしたモジュール解決では、ディスク上の配置に依存する import の診断（TS2876 など）を出さなくなった。ベータ版のリリースに向けて API が整理され、モジュールの export から `/unstable` の接頭辞が外れ、`"typescript/ast"` から `factory` を export、`api.internal` は `api.debug` に改名、`formatNodeForInsertion` は `languageService` に移り、`@deprecated` の関数は削除、`api.createBuildOrchestrator` は当面 `@internal` になった。VS Code 拡張は、LSP サーバーとバージョンが揃った API クライアントのモジュールを他の拡張に渡すようになった（型は `typescript/vscode` の `ExtensionAPI`）。いずれも未リリース。

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
- `new API({ fs })` — コールバック式ファイルシステム。すべての関数の実装指定が必須に（`createVirtualFileSystem` はテスト用ユーティリティへ移動）
- `getJSDocCommentsAndTags` — TS 6.0 と同じ動作で復活
- `api.getSymbol(decl)` / トップレベルの `getSymbol(decl)`（`typescript/async` など）— Declaration からマージ前のバインダー Symbol を取得
- パスの型 — `RootedPath`（絶対・スラッシュ正規化済み・末尾 `/` なし）/ `RootedFilePath` / `RootedDirectoryPath` / `PathKey`（旧 `Path`）
- `[Symbol.asyncDispose]()` — 非同期 API のオブジェクトの破棄（Promise を返す。`await using` で使う）

## 変更履歴

- 2026-10-09 — ベータ版リリースに向けた整理（`/unstable` の削除、`api.internal` → `api.debug` など）（[#64681](https://github.com/microsoft/TypeScript/pull/64681)） ⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-09|変更]]
- 2026-10-09 — VS Code 拡張が API クライアントのモジュールを公開（[#64647](https://github.com/microsoft/TypeScript/pull/64647)） ⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-09|変更]]
- 2026-10-07 — カスタマイズしたモジュール解決（`moduleResolutions`・`resolveModuleName`）では、ディスク上の配置に依存する import の診断（TS2846・TS5097・TS2876・TS2877・TS2878）を出さない（[#64638](https://github.com/microsoft/TypeScript/pull/64638)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-07|変更]]
- 2026-10-07 — 設定ファイルの無いプログラムでプロジェクト参照の診断を出すと API サーバーがクラッシュする問題を修正（#64629）（[#64637](https://github.com/microsoft/TypeScript/pull/64637)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-07|変更]]
- 2026-10-07 — 非同期 API で dispose の Promise を捨てないように（`[Symbol.asyncDispose]()`）、AsyncDisposable への `using` で `await using` を提案（[#64584](https://github.com/microsoft/TypeScript/pull/64584)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-07|変更]]
- 2026-10-05 — ファイルパスを強く型付け（`RootedPath`・`PathKey` など）（[#64159](https://github.com/microsoft/TypeScript/pull/64159)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-05|変更]]
- 2026-10-05 — マージ後の Symbol を扱うチェッカーのメソッドを追加（[#64598](https://github.com/microsoft/TypeScript/pull/64598)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-05|変更]]
- 2026-10-02 — 型付きパスの準備のためのバグ修正（#64159 から切り出し）（[#64544](https://github.com/microsoft/TypeScript/pull/64544)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-02|変更]]
- 2026-10-02 — `getSymbol(decl)` を追加（TS 6 の `declaration.symbol` 相当）（[#64571](https://github.com/microsoft/TypeScript/pull/64571)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-02|変更]]
- 2026-10-02 — API が返す補完の Symbol を常に現在のスナップショットのものに（[#64554](https://github.com/microsoft/TypeScript/pull/64554)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-10-02|変更]]
- 2026-09-30 — バインダーが作った Symbol をクライアント側の `SourceFileCache` に保存し、スナップショット間で参照を同一に（[#64518](https://github.com/microsoft/TypeScript/pull/64518)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-30|変更]]
- 2026-09-30 — type-only の import 句で `getTypeAtLocation` がクラッシュする不具合を修正（[#64468](https://github.com/microsoft/TypeScript/pull/64468)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-30|変更]]
- 2026-09-30 — コールバック式ファイルシステムで全関数の実装指定を必須にし、`createVirtualFileSystem` を公開 API から削除（破壊的変更）（[#64447](https://github.com/microsoft/TypeScript/pull/64447)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-30|変更]]
- 2026-09-30 — AST 生成のダイヤモンド継承と `DeclarationBase` の extends 漏れを修正（[#64503](https://github.com/microsoft/TypeScript/pull/64503)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-30|変更]]
- 2026-09-30 — `getJSDocCommentsAndTags` を TS 6.0 と同じ動作で復活（[#64455](https://github.com/microsoft/TypeScript/pull/64455)）⏳ 未リリース · [[repos/microsoft-TypeScript/changes/2026-09-30|変更]]
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
