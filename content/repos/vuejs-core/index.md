---
title: vuejs/core
updated: 2026-11-13
tags:
  - repo/vuejs-core
---

[GitHub](https://github.com/vuejs/core) · ブランチ: `main`

## 最新リリース

- 安定版: [v3.5.45](https://github.com/vuejs/core/releases/tag/v3.5.45)（2026-11-05）→ [[repos/vuejs-core/releases/v3.5.45|まとめ]]
- プレリリース: [v3.6.0-rc.15](https://github.com/vuejs/core/releases/tag/v3.6.0-rc.15)（2026-11-12）

## 直近の注目変更

- compiler-sfc: ユーザーの `onWarn` を尊重し、インラインテンプレートの警告を本番ビルドでも返す（[#16152](https://github.com/vuejs/core/pull/16152)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/コンパイラ|コンパイラ]]
- compiler-ssr: KeepAlive・Teleport の中身に CSS 変数を注入する（[#16245](https://github.com/vuejs/core/pull/16245)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]、[[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- shared: プロトタイプの無いオブジェクトを `style` に渡しても `looseEqual` で throw しない（[#16251](https://github.com/vuejs/core/pull/16251)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]]
- SSR: ルートのループ・フラグメントにも CSS 変数を注入する（[#16244](https://github.com/vuejs/core/pull/16244)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Teleport を patch せずに中身が入れ替わっても CSS 変数を適用する（[#16239](https://github.com/vuejs/core/pull/16239)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]、[[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]]
- SSR: オブジェクトから継承したプロパティ名の属性を正しく描画する（[#16225](https://github.com/vuejs/core/pull/16225)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]、[[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]]
- Suspense: 境界をアンマウントしたら保留中の分岐のアンマウントフックを捨てる（[#16132](https://github.com/vuejs/core/pull/16132)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- Suspense: 保留中にルートを再び切り替えても `timeout` を数え続ける（[#16143](https://github.com/vuejs/core/pull/16143)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- 性能: SFC の型解決で tsconfig の `include` を列挙しない（作者の例で 1.9 秒 → 94ms）（[#15899](https://github.com/vuejs/core/pull/15899)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/コンパイラ|コンパイラ]]
- reactivity: 停止したスコープでも `onScopeDispose` を実行（[#16108](https://github.com/vuejs/core/pull/16108)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]]

## トピック

- [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — サーバー描画（`renderToString` など）のエラー伝播・偽値の扱い・CSS 変数の注入と、`hydrateOnVisible()` などのハイドレーション
- [[repos/vuejs-core/topics/カスタム要素|カスタム要素]] — Vue のコンポーネントから作るカスタム要素（非同期の定義とマウントのタイミング）
- [[repos/vuejs-core/topics/コンパイラ|コンパイラ]] — テンプレート・SFC のコンパイラ（`defineModel()` のエラー、`v-html`・`v-memo`・Transition の変換、`onWarn` / `onError`）
- [[repos/vuejs-core/topics/トランジション|トランジション]] — `<Transition>`・`<TransitionGroup>` と `v-show`
- [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]] — `watch`（`once`・sync）・`shallowReactive` のコレクション・配列のイテレーター・`onScopeDispose`
- [[repos/vuejs-core/topics/レンダラー|レンダラー]] — runtime-core のレンダラー・スケジューラー・props の更新判定・`renderList`
- [[repos/vuejs-core/topics/互換ビルド|互換ビルド]] — Vue 2 からの移行用の compat ビルド（`_setupProxy`）
- [[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]] — runtime-dom の属性（`playsinline`・`disablepictureinpicture` など真偽値の属性）とスタイルのパッチ、`useCssVars` の CSS 変数
- [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]] — `<Suspense>`・`<KeepAlive>`・`<Teleport>`

## 取り込み

- [[repos/vuejs-core/log|取り込み履歴]]
- 最近の変更: [[repos/vuejs-core/changes/2026-11-13|2026-11-13]]、[[repos/vuejs-core/changes/2026-11-06|2026-11-06]]、[[repos/vuejs-core/changes/2026-11-04|2026-11-04]]、[[repos/vuejs-core/changes/2026-11-02|2026-11-02]]、[[repos/vuejs-core/changes/2026-10-30|2026-10-30]]
