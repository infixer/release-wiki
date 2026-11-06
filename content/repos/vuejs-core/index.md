---
title: vuejs/core
updated: 2026-11-06
tags:
  - repo/vuejs-core
---

[GitHub](https://github.com/vuejs/core) · ブランチ: `main`

## 最新リリース

- 安定版: [v3.5.45](https://github.com/vuejs/core/releases/tag/v3.5.45)（2026-11-05）→ [[repos/vuejs-core/releases/v3.5.45|まとめ]]
- プレリリース: なし（v3.5.45 より新しいものは無い）

## 直近の注目変更

- Suspense: 境界をアンマウントしたら保留中の分岐のアンマウントフックを捨てる（[#16132](https://github.com/vuejs/core/pull/16132)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- Suspense: 保留中にルートを再び切り替えても `timeout` を数え続ける（[#16143](https://github.com/vuejs/core/pull/16143)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- 性能: SFC の型解決で tsconfig の `include` を列挙しない（作者の例で 1.9 秒 → 94ms）（[#15899](https://github.com/vuejs/core/pull/15899)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/コンパイラ|コンパイラ]]
- reactivity: 停止したスコープでも `onScopeDispose` を実行（[#16108](https://github.com/vuejs/core/pull/16108)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]]
- compiler-sfc: props の分割代入で `catch` / `switch` のスコープを尊重（[#16101](https://github.com/vuejs/core/pull/16101)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/コンパイラ|コンパイラ]]
- 性能: setup コンテキストの `attrs` をそのまま渡す場合のコピーを高速化（作者の計測で SSR -45%）（[#16129](https://github.com/vuejs/core/pull/16129)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]
- トランジション: key 付きの Suspense 境界をまたいでモードを切り替える（[#16124](https://github.com/vuejs/core/pull/16124)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/トランジション|トランジション]]、[[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- Suspense: 保留中の分岐に入れ子になったトランジションを表示時に enter させる（[#16121](https://github.com/vuejs/core/pull/16121)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/トランジション|トランジション]]、[[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- ディレクティブの `mounted` フックを最新のバインディングで呼ぶ（`v-model` の値の反映）（[#16120](https://github.com/vuejs/core/pull/16120)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]
- 性能: 内部の初期化処理を pure に（未使用ならバンドラーが除去）（[#16012](https://github.com/vuejs/core/pull/16012)）📦 v3.5.45 · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]

## トピック

- [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — サーバー描画（`renderToString` など）のエラー伝播・偽値の扱いと、`hydrateOnVisible()` などのハイドレーション
- [[repos/vuejs-core/topics/カスタム要素|カスタム要素]] — Vue のコンポーネントから作るカスタム要素（非同期の定義とマウントのタイミング）
- [[repos/vuejs-core/topics/コンパイラ|コンパイラ]] — テンプレート・SFC のコンパイラ（`defineModel()` のエラー、`v-html`・`v-memo`・Transition の変換）
- [[repos/vuejs-core/topics/トランジション|トランジション]] — `<Transition>`・`<TransitionGroup>` と `v-show`
- [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]] — `watch`（`once`・sync）・`shallowReactive` のコレクション・配列のイテレーター・`onScopeDispose`
- [[repos/vuejs-core/topics/レンダラー|レンダラー]] — runtime-core のレンダラー・スケジューラー・props の更新判定・`renderList`
- [[repos/vuejs-core/topics/互換ビルド|互換ビルド]] — Vue 2 からの移行用の compat ビルド（`_setupProxy`）
- [[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]] — runtime-dom の属性（`playsinline`・`disablepictureinpicture` など真偽値の属性）とスタイルのパッチ
- [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]] — `<Suspense>`・`<KeepAlive>`・`<Teleport>`

## 取り込み

- [[repos/vuejs-core/log|取り込み履歴]]
- 最近の変更: [[repos/vuejs-core/changes/2026-11-06|2026-11-06]]、[[repos/vuejs-core/changes/2026-11-04|2026-11-04]]、[[repos/vuejs-core/changes/2026-11-02|2026-11-02]]、[[repos/vuejs-core/changes/2026-10-30|2026-10-30]]、[[repos/vuejs-core/changes/2026-10-28|2026-10-28]]
