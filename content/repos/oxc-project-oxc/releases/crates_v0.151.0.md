---
title: oxc-project/oxc crates_v0.151.0
date: 2026-09-21
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.151.0) · 公開: 2026-09-21

## 要点

- coverage: TypeScript の新しいフィクスチャレイアウトに対応（[#26226](https://github.com/oxc-project/oxc/pull/26226)）
- minifier: `BooleanLiteral` の否定処理で不要な二重反転が起きる不具合を修正（[#26847](https://github.com/oxc-project/oxc/pull/26847)）
- transformer: 文字列初期化子を持つ enum メンバーの逆マッピングを tsc と同じ構文的判定で無効化するよう修正（[#26724](https://github.com/oxc-project/oxc/pull/26724)）
- parser: reparse された `await` トークンの保持、`using` ループパターンの復旧処理、import エイリアスへの不正な修飾子の拒否など、パーサーの細かい修正（[#26619](https://github.com/oxc-project/oxc/pull/26619)、[#26722](https://github.com/oxc-project/oxc/pull/26722)、[#26721](https://github.com/oxc-project/oxc/pull/26721)、[#26622](https://github.com/oxc-project/oxc/pull/26622)）
- minifier / semantic: stmts vec の事前確保、識別子ハッシュの再利用、`if` 文処理時のアロケーション削減などパフォーマンス改善（[#26856](https://github.com/oxc-project/oxc/pull/26856)、[#26773](https://github.com/oxc-project/oxc/pull/26773)、[#26666](https://github.com/oxc-project/oxc/pull/26666)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]、[[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]、[[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]]
