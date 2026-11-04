---
title: vuejs/core
updated: 2026-11-04
tags:
  - repo/vuejs-core
---

[GitHub](https://github.com/vuejs/core) · ブランチ: `main`

## 最新リリース

- 安定版: [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44|まとめ]]
- プレリリース: [v3.6.0-rc.14](https://github.com/vuejs/core/releases/tag/v3.6.0-rc.14)（2026-10-30）

## 直近の注目変更

- KeepAlive: 解決した Suspense の子をすぐにキャッシュ（戻ったときに setup を再実行しない）（[#16119](https://github.com/vuejs/core/pull/16119)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- Suspense: アンマウントした境界の `out-in` の `afterLeave` を飛ばす（[#16115](https://github.com/vuejs/core/pull/16115)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- 非同期 setup が reject したコンポーネントは何も描画しない（[#16111](https://github.com/vuejs/core/pull/16111)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]、[[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Suspense: 保持された内容の中の入れ子の境界の更新をパッチ（[#16109](https://github.com/vuejs/core/pull/16109)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- SSR: 静的な `style` 属性をコンパイル時に描画（作者の計測で -95〜98%）（[#16010](https://github.com/vuejs/core/pull/16010)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/コンパイラ|コンパイラ]]、[[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- 停止したエラー境界を非同期のエラーで飛ばす（[#16061](https://github.com/vuejs/core/pull/16061)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]
- HMR: 保留中の非同期ルートが解決した後にリロードをやり直す（[#16060](https://github.com/vuejs/core/pull/16060)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/レンダラー|レンダラー]]
- ハイドレーション: ホストのノードを置き換えるときだけコンポーネントの `el` を更新（[#16001](https://github.com/vuejs/core/pull/16001)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Suspense: 境界のアンマウント後に fallback をマウントしない（[#15939](https://github.com/vuejs/core/pull/15939)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]
- Suspense: suspensible な子の境界をアンマウントしたら親への依存を返す（親が fallback のまま戻らない問題）（[#15870](https://github.com/vuejs/core/pull/15870)）⏳ 未リリース · トピック: [[repos/vuejs-core/topics/組み込みコンポーネント|組み込みコンポーネント]]

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
- 最近の変更: [[repos/vuejs-core/changes/2026-11-04|2026-11-04]]、[[repos/vuejs-core/changes/2026-11-02|2026-11-02]]、[[repos/vuejs-core/changes/2026-10-30|2026-10-30]]、[[repos/vuejs-core/changes/2026-10-28|2026-10-28]]、[[repos/vuejs-core/changes/2026-10-26|2026-10-26]]
