---
title: adobe/react-spectrum
updated: 2026-10-19
tags:
  - repo/adobe-react-spectrum
---

[GitHub](https://github.com/adobe/react-spectrum) · ブランチ: `main`

## 最新リリース

- 安定版: [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|まとめ]]（`Sheet` の追加など）
- 安定版（S2）: [@react-spectrum/s2@1.8.0](https://github.com/adobe/react-spectrum/releases/tag/%40react-spectrum/s2%401.8.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|まとめ]]（`SideNavPanel`、Menu の非同期・仮想化など）
- プレリリース: なし

## 直近の注目変更

- Select の props から効果のない `excludeFromTabOrder` を削除（型のみ）（[#10790](https://github.com/adobe/react-spectrum/pull/10790)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
- ESM ビルドのスタイルマクロが `$kLxT8$propertiesmjs1 is not defined` で失敗する問題を修正（[#10785](https://github.com/adobe/react-spectrum/pull/10785)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]]
- TokenField でユーザーのキャレット移動を毎回 `onChange` で通知（[#10766](https://github.com/adobe/react-spectrum/pull/10766)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/TokenField|TokenField]]
- `window.screen` が無い環境（React Native の Jest・Deno）で import 時に例外を投げないように（[#10774](https://github.com/adobe/react-spectrum/pull/10774)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- ユーザーのキーボードハンドラーを `useKeyboard` 経由にする変更（useMenu・useDateField・useDatePicker・useDateRangePicker）を再適用（[#10745](https://github.com/adobe/react-spectrum/pull/10745)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- コレクションの選択＋Home/End・PageUp/PageDown のハンドラー（`useSelectableCollection`）と DatePicker の `preventDefault` 漏れを修正（[#10728](https://github.com/adobe/react-spectrum/pull/10728)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]、[[repos/adobe-react-spectrum/topics/Collections|Collections]]
- `useDescription` のマウント時の余分なレンダーをなくし、ドラッグ可能な行を持つ仮想化リストでの "Maximum update depth exceeded" を回避（[#10754](https://github.com/adobe/react-spectrum/pull/10754)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ドラッグアンドドロップ|ドラッグアンドドロップ]]
- `getTargetRect` が返す独自の矩形を固定配置の計算で書き換えないように（[#10716](https://github.com/adobe/react-spectrum/pull/10716)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- 入れ子の `Form` が親の `Form` の props（`onSubmit`・`validationErrors` など）を引き継がないように（[#10746](https://github.com/adobe/react-spectrum/pull/10746)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
- 複数のトランジションがキャンセルされると `runAfterTransition` が要素を保持し続ける問題（メモリリーク）を修正（[#10730](https://github.com/adobe/react-spectrum/pull/10730)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ユーティリティ|ユーティリティ]]

## トピック

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]] — `@react-spectrum/ai` の PromptField・Chat/Thread・AttachmentList・AttachmentGrid・AttachmentBadge など
- [[repos/adobe-react-spectrum/topics/Collections|Collections]] — コレクションのキー管理（`Document`/`BaseCollection`）とキーボード・フォーカスの扱い
- [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]] — 非同期アイテム読み込み時の開閉制御と VoiceOver での読み上げ
- [[repos/adobe-react-spectrum/topics/DateField|DateField]] — 日付入力（`useDateSegment`・`DateField`）
- [[repos/adobe-react-spectrum/topics/Menu|Menu]] — S2 の Menu（セパレーター表示・仮想化）
- [[repos/adobe-react-spectrum/topics/SideNav|SideNav]] — S2 の SideNav と SideNavPanel（旧 SidePanel）内での折りたたみ
- [[repos/adobe-react-spectrum/topics/Toast|Toast]] — S2 の Toast（展開したリストとボタンの間隔）
- [[repos/adobe-react-spectrum/topics/TokenField|TokenField]] — トークン入力欄（`useTokenField`）のキャレット位置・スクロール・選択の `onChange`
- [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]] — Modal・Popover・Sheet の配置とスクリーンキーボードへの対応
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]] — `useKeyboard`（コレクション・DatePicker・Toolbar のキーボード処理）とパッケージ import 時のグローバルイベント
- [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]] — S2 の `style` マクロ（ESM ビルド）とテーマで使えるプロパティ
- [[repos/adobe-react-spectrum/topics/ドラッグアンドドロップ|ドラッグアンドドロップ]] — `useDrag`・`useDescription` と仮想化リスト（`ListLayout`）でのドロップ位置
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]] — RAC の `Form`（入れ子）、Select・CheckboxGroup のフォームリセットと Select の props
- [[repos/adobe-react-spectrum/topics/ユーティリティ|ユーティリティ]] — react-aria の utils（`runAfterTransition`・`useDescription`）
- [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]] — `@react-aria/optimize-locales-plugin`（Turbopack 対応）

## 取り込み

- [[repos/adobe-react-spectrum/log|取り込み履歴]]
- リリース: [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]]、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]]
- 最近の変更: [[repos/adobe-react-spectrum/changes/2026-10-19|2026-10-19]]、[[repos/adobe-react-spectrum/changes/2026-10-16|2026-10-16]]、[[repos/adobe-react-spectrum/changes/2026-10-14|2026-10-14]]、[[repos/adobe-react-spectrum/changes/2026-10-12|2026-10-12]]、[[repos/adobe-react-spectrum/changes/2026-10-09|2026-10-09]]
