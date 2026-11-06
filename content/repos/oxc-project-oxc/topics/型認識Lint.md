---
title: 型認識Lint
updated: 2026-11-06
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

TSGolint をバックエンドにした oxlint の型認識（type-aware）lint。型解析は TSGolint 側で行う。`Pick<Data, never>` のように `{}` になる型操作を報告する `typescript/no-generated-empty-object-type` が追加された（対応するバックエンドが必要）。`--type-check-only` モードでは型認識ルールを実行せず、型エラーだけを報告するよう修正された。型認識の診断ごとにファイルのソース全文をコピーしていたのをやめ、ファイルごとに 1 つ共有するようにした。診断が多い大規模プロジェクトで oxlint プロセスのピーク RSS が大きく減る（VS Code の `src` で約 31 GiB → 0.7 GiB。未リリース）。2026-10-26 の回では、oxlint-tsgolint 7.0.2005 に合わせて `typescript/no-unsafe-enum-assignment` ルールと `typescript/await-thenable` の `allowMixedPromiseArrays` オプションが追加され、`oxlint` が要求する `oxlint-tsgolint` の最低バージョンが `>=7.0.2005` に上がった。`unicorn/prefer-string-starts-ends-with` のように他のプラグインに同名のルールがあっても、型認識の診断には型認識ルールの重大度を使うよう直った（いずれも未リリース）。2026-11-06 の回（未リリース）では、oxlint が新しい `tsrs-lint` ランチャー（oxc-project/tsrs#857）を `node_modules/.bin`・`PATH`・ディレクトリの上書き指定から探して優先的に使い、無ければ `tsgolint` にフォールバックするようになった。明示した実行ファイルのパスが優先され、Go のプロファイリングのオプションを使うときは `tsgolint` を選ぶ。

## 主な API・オプション

- `--type-aware` — 型認識ルールを有効にして実行
- `--type-check-only` — 型チェックのみ（型認識ルールは実行しない）
- `typescript/no-generated-empty-object-type` — `{}` に解決される型操作を報告（suspicious、オプション・修正なし）
- `typescript/no-unsafe-enum-assignment` — enum への安全でない代入・引数・戻り値などを報告（oxlint-tsgolint 7.0.2005 以上）
- `typescript/await-thenable` の `allowMixedPromiseArrays` — Promise をまとめる関数に同期の値と Promise ライクな値が混ざった入力を許す（既定 `false`）
- `oxlint-tsgolint` — `oxlint` の optional な peer dependency（`>=7.0.2005`）
- `tsrs-lint` — 型認識 lint のランチャー。見つかれば `tsgolint` より優先（未リリース）

## 変更履歴

- 2026-11-06 — 型認識 lint で `tsrs-lint` を探して優先的に使う（`tsgolint` にフォールバック）（[#28751](https://github.com/oxc-project/oxc/pull/28751)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-11-06|変更]]
- 2026-10-26 — `typescript/no-unsafe-enum-assignment` を追加（[#28117](https://github.com/oxc-project/oxc/pull/28117)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-26|変更]]
- 2026-10-26 — `typescript/await-thenable` に `allowMixedPromiseArrays` オプション（[#28116](https://github.com/oxc-project/oxc/pull/28116)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-26|変更]]
- 2026-10-26 — `oxlint-tsgolint` の最低バージョンを `>=7.0.2005` に（[#28118](https://github.com/oxc-project/oxc/pull/28118)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-26|変更]]
- 2026-10-26 — 同名のルールが他のプラグインにあっても型認識ルールの重大度を使う（#28136）（[#28138](https://github.com/oxc-project/oxc/pull/28138)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-26|変更]]
- 2026-10-09 — 型認識の診断でソースをファイルごとに共有し、メモリ使用量を削減（[#27462](https://github.com/oxc-project/oxc/pull/27462)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-09-28 — `--type-check-only` モードでは型認識ルールを実行しないように（[#27076](https://github.com/oxc-project/oxc/pull/27076)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]
- 2026-09-28 — 型認識ルール `typescript/no-generated-empty-object-type` を追加（[#26958](https://github.com/oxc-project/oxc/pull/26958)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-28|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|oxlint_v1.86.0]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.90.0|oxlint_v1.90.0]]
