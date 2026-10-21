---
title: vuejs/core
updated: 2026-10-21
tags:
  - repo/vuejs-core
---

[GitHub](https://github.com/vuejs/core) · ブランチ: `main`

## 最新リリース

- 安定版: [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44|まとめ]]
- プレリリース: [v3.6.0-rc.12](https://github.com/vuejs/core/releases/tag/v3.6.0-rc.12)（2026-10-16）

## 直近の注目変更

- `disablepictureinpicture`・`disableremoteplayback` を真偽値の属性として扱う（[#15952](https://github.com/vuejs/core/pull/15952)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]]
- SSR: 非同期 setup のエラーを呼び出し元に伝える（[#15857](https://github.com/vuejs/core/pull/15857)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Transition: コメントで包まれたコンポーネントのルートの切り替え（`out-in` / `in-out`・KeepAlive）を修正（[#15853](https://github.com/vuejs/core/pull/15853)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/トランジション|トランジション]]
- TransitionGroup: 入れ子のグループの移動アニメーションを修正（[#15848](https://github.com/vuejs/core/pull/15848)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/トランジション|トランジション]]
- Teleport: `to` を変えたときの `targetStart` と子の順序を修正（[#15818](https://github.com/vuejs/core/pull/15818)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- `Map` / `Set` の `shallowReactive()` / `shallowReadonly()` で `isShallow()` が `true` を返すように（[#15793](https://github.com/vuejs/core/pull/15793)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]]
- 本番ビルドでも `v-show` の子に Transition の `persisted` を注入（#4845 の再発を修正）（[#15783](https://github.com/vuejs/core/pull/15783)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/コンパイラ|コンパイラ]]、[[repos/vuejs-core/topics/トランジション|トランジション]]
- sync / immediate のウォッチャーのコールバックで外側の effect に依存を追跡させない（[#15782](https://github.com/vuejs/core/pull/15782)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]]
- `hydrateOnVisible()` で `display: contents` のルートの子を監視（[#15773](https://github.com/vuejs/core/pull/15773)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- ルートの `mount()` は自分が積んだジョブだけを flush（他のアプリのウォッチャーを同期実行しない）（[#15757](https://github.com/vuejs/core/pull/15757)）📦 v3.5.44 · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]

## トピック

- [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — サーバー描画（`renderToString` など）のエラー伝播・偽値の扱いと、`hydrateOnVisible()` などのハイドレーション
- [[repos/vuejs-core/topics/カスタム要素|カスタム要素]] — Vue のコンポーネントから作るカスタム要素（非同期の定義とマウントのタイミング）
- [[repos/vuejs-core/topics/コンパイラ|コンパイラ]] — テンプレート・SFC のコンパイラ（`defineModel()` のエラー、`v-html`・`v-memo`・Transition の変換）
- [[repos/vuejs-core/topics/トランジション|トランジション]] — `<Transition>`・`<TransitionGroup>` と `v-show`
- [[repos/vuejs-core/topics/リアクティビティ|リアクティビティ]] — `watch`（`once`・sync）・`shallowReactive` のコレクション・配列のイテレーター
- [[repos/vuejs-core/topics/レンダラー|レンダラー]] — runtime-core のレンダラー・スケジューラー・props の更新判定・`renderList`
- [[repos/vuejs-core/topics/互換ビルド|互換ビルド]] — Vue 2 からの移行用の compat ビルド（`_setupProxy`）
- [[repos/vuejs-core/topics/属性とスタイル|属性とスタイル]] — runtime-dom の属性（`playsinline`・`disablepictureinpicture` など真偽値の属性）とスタイルのパッチ
- [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]] — `<Suspense>`・`<KeepAlive>`・`<Teleport>`

## 取り込み

- [[repos/vuejs-core/log|取り込み履歴]]
- 最近の変更: [[repos/vuejs-core/changes/2026-10-21|2026-10-21]]、[[repos/vuejs-core/changes/2026-10-14|2026-10-14]]、[[repos/vuejs-core/changes/2026-09-24|2026-09-24]]
