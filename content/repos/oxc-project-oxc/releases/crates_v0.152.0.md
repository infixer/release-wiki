---
title: oxc-project/oxc crates_v0.152.0
date: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.152.0) · 公開: 2026-09-28

## 要点

- str: `JSStr`・`JSChar`・`JSStrBuilder` 型を追加（[#26435](https://github.com/oxc-project/oxc/pull/26435)）
- regular_expression: バッファ境界アサーションに対応（[#27048](https://github.com/oxc-project/oxc/pull/27048)）
- transform-react: 回復可能な React Compiler の診断を返す `reportDiagnostics` オプションを追加（[#26624](https://github.com/oxc-project/oxc/pull/26624)）
- napi: スレッドを使わない WASI ビルドを追加（[#26898](https://github.com/oxc-project/oxc/pull/26898)）
- parser: HTML コメントの値の扱いを修正、孤立サロゲートを含むモジュールのエクスポート名を拒否（[#22933](https://github.com/oxc-project/oxc/pull/22933)、[#26953](https://github.com/oxc-project/oxc/pull/26953)）
- minifier: ディレクティブを含む IIFE を保持（[#27060](https://github.com/oxc-project/oxc/pull/27060)）。論理式・真偽値文脈の式をその場で畳み込むなど、アロケーション削減・識別子ハッシュ利用による性能改善が多数
- codegen: 圧縮時のテンプレートリテラルの不要な `$` エスケープを削除（[#26924](https://github.com/oxc-project/oxc/pull/26924)）
- ast: 多数の AST ノードのドキュメント例を修正・追加

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]]、[[repos/oxc-project-oxc/topics/パーサー|パーサー]]、[[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]、[[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]]、[[repos/oxc-project-oxc/topics/Minifier|Minifier]]
