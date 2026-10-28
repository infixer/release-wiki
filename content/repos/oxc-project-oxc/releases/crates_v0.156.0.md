---
title: oxc-project/oxc crates_v0.156.0
date: 2026-10-28
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.156.0) · 公開: 2026-10-27

## 要点

- **破壊的変更**: 文字列の定数評価で `JSStr` を使い、孤立サロゲートを含む文字列も畳み込む（[#27098](https://github.com/oxc-project/oxc/pull/27098)）
- Minifier: 範囲外の文字列の添字（`"a"[1]` など）を `void 0` に畳み込む（[#28004](https://github.com/oxc-project/oxc/pull/28004)）
- Minifier の修正: 短縮形の代入先のデフォルト値を保つ（[#28183](https://github.com/oxc-project/oxc/pull/28183)）、負の数・有限でない数のキーの角かっこを保つ（[#27855](https://github.com/oxc-project/oxc/pull/27855)）、rest 引数の分割代入の副作用を保つ（[#27981](https://github.com/oxc-project/oxc/pull/27981)）、定数メンバーの `delete` と後の JSX のキーを保つ（[#27990](https://github.com/oxc-project/oxc/pull/27990)）、条件がシーケンス式の `if` の畳み込み（[#27939](https://github.com/oxc-project/oxc/pull/27939)）、先頭に `var` の代入がある引数の書き換え（[#28056](https://github.com/oxc-project/oxc/pull/28056)）
- 定数評価: `parseFloat`・`parseInt`・`trim` の畳み込みで ECMAScript の空白を使う（[#27719](https://github.com/oxc-project/oxc/pull/27719)）
- パーサー: sloppy モードの `let` の後置更新、初期化子の後のエスケープされたクラスフィールド名、`type` という名前の source import を解析（[#28060](https://github.com/oxc-project/oxc/pull/28060)、[#28061](https://github.com/oxc-project/oxc/pull/28061)、[#28062](https://github.com/oxc-project/oxc/pull/28062)）
- semantic: 巻き上げる `var` とブロックの型の束縛を分ける（[#27936](https://github.com/oxc-project/oxc/pull/27936)）、enum・lint での孤立サロゲートを含む名前の報告（[#27991](https://github.com/oxc-project/oxc/pull/27991)）
- React Compiler: 依存が守れない手動のメモ化を書いたまま残す（[#28101](https://github.com/oxc-project/oxc/pull/28101)）。transformer_plugins: 参照が残っていれば素の inject を残す（[#26965](https://github.com/oxc-project/oxc/pull/26965)）。ランタイム: async iterator の throw を Babel に合わせる（[#28059](https://github.com/oxc-project/oxc/pull/28059)）。codegen: default import の名前をソースマップに残す（[#28058](https://github.com/oxc-project/oxc/pull/28058)）
- 性能: 短い文字列を `memcpy` なしでコピー（[#27953](https://github.com/oxc-project/oxc/pull/27953)）、注釈コメントの処理をホットパスの外へ（[#28139](https://github.com/oxc-project/oxc/pull/28139)）ほか。セキュリティ: `.node-version` を 26.12.1 に（[#28090](https://github.com/oxc-project/oxc/pull/28090)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-26|2026-10-26 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]、[[repos/oxc-project-oxc/topics/パーサー|パーサー]]、[[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]、[[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]、[[repos/oxc-project-oxc/topics/ランタイムヘルパー|ランタイムヘルパー]]、[[repos/oxc-project-oxc/topics/oxc_str|oxc_str]]
