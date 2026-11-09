---
title: adobe/react-spectrum
updated: 2026-11-09
tags:
  - repo/adobe-react-spectrum
---

[GitHub](https://github.com/adobe/react-spectrum) · ブランチ: `main`

## 最新リリース

- 安定版: [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|まとめ]]（`Sheet` の追加など）
- 安定版（S2）: [@react-spectrum/s2@1.8.0](https://github.com/adobe/react-spectrum/releases/tag/%40react-spectrum/s2%401.8.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|まとめ]]（`SideNavPanel`、Menu の非同期・仮想化など）
- プレリリース: なし

## 直近の注目変更

- CheckboxGroup の中の Checkbox がグループの `validationBehavior` を引き継ぐ（[#10860](https://github.com/adobe/react-spectrum/pull/10860)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
- PreviewTrigger: 閉じているときは Escape を止めない（親のダイアログが閉じない問題）（[#10921](https://github.com/adobe/react-spectrum/pull/10921)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]、[[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- 単独の `Popover` の `aria-label` をトリガーのラベルより優先（[#10789](https://github.com/adobe/react-spectrum/pull/10789)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- キーボードの Space / Enter でクリックが 2 回発火する問題を修正（`usePress`）（[#10840](https://github.com/adobe/react-spectrum/pull/10840)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]]
- NumberField: 区切り文字だけの入力で数字の体系を変えない（[#10876](https://github.com/adobe/react-spectrum/pull/10876)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/NumberField|NumberField]]
- S2 Breadcrumbs: フォントの読み込み後も収まる項目を折りたたまない（[#10828](https://github.com/adobe/react-spectrum/pull/10828)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Breadcrumbs|Breadcrumbs]]
- S2 DatePicker: `Form` の中でもポップアップの時刻欄がつぶれないように（[#10915](https://github.com/adobe/react-spectrum/pull/10915)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/DateField|DateField]]、[[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
- ComboBox: Popover を閉じる Escape では既定動作を止める（Safari のフルスクリーン）（[#10883](https://github.com/adobe/react-spectrum/pull/10883)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]]、[[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- ComboBox: `isReadOnly` のときは blur で値を確定しない（[#10869](https://github.com/adobe/react-spectrum/pull/10869)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]]
- ComboBox: 入力欄と Popover が別の shadow root にあってもキーボードで開けるように（[#10631](https://github.com/adobe/react-spectrum/pull/10631)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]]

## トピック

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]] — `@react-spectrum/ai` の PromptField・Chat/Thread・AttachmentList・AttachmentGrid・AttachmentBadge など
- [[repos/adobe-react-spectrum/topics/Breadcrumbs|Breadcrumbs]] — S2 の Breadcrumbs（項目のあふれと折りたたみ）
- [[repos/adobe-react-spectrum/topics/Collections|Collections]] — コレクションのキー管理（`Document`/`BaseCollection`）とキーボード・フォーカス、Tree の展開・説明テキスト、`GridListItem` と Table の `Row` のフォーカスイベント
- [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]] — 非同期アイテム読み込み時の開閉制御、VoiceOver での読み上げ、shadow DOM・`isReadOnly` での挙動、Escape の既定動作
- [[repos/adobe-react-spectrum/topics/DateField|DateField]] — 日付入力（`useDateSegment`・`DateField`）
- [[repos/adobe-react-spectrum/topics/Menu|Menu]] — S2 の Menu（セパレーター表示・仮想化）
- [[repos/adobe-react-spectrum/topics/NumberField|NumberField]] — 数値入力の `NumberField` と `@internationalized/number` の `NumberParser`（数字の体系）
- [[repos/adobe-react-spectrum/topics/SideNav|SideNav]] — S2 の SideNav と SideNavPanel（旧 SidePanel）内での折りたたみ
- [[repos/adobe-react-spectrum/topics/Tabs|Tabs]] — RAC の Tabs（TabPanels のサイズのアニメーションと入れ子の Tabs）
- [[repos/adobe-react-spectrum/topics/Toast|Toast]] — S2 の Toast（展開したリストとボタンの間隔）
- [[repos/adobe-react-spectrum/topics/TokenField|TokenField]] — トークン入力欄（`useTokenField`）のキャレット位置・スクロール・選択の `onChange`
- [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]] — react-aria のインタラクション用フック（`useHover` のタッチ・マウス併用時のホバー状態、`usePress` の macOS での Enter・キーボードでの二重クリック）
- [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]] — Modal・Popover・Sheet の配置とスクリーンキーボードへの対応、Popover のラベル、`PreviewTrigger` の Escape
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]] — `useKeyboard`（コレクション・DatePicker・Toolbar のキーボード処理）とパッケージ import 時のグローバルイベント
- [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]] — S2 の `style` マクロ（ESM ビルド）とテーマで使えるプロパティ、`page.css` の型宣言
- [[repos/adobe-react-spectrum/topics/ドラッグアンドドロップ|ドラッグアンドドロップ]] — `useDrag`・`useDescription` と仮想化リスト（`ListLayout`）でのドロップ位置
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]] — RAC の `Form`（入れ子）、Select・CheckboxGroup のフォームリセットと Select の props、`validationBehavior` の引き継ぎ
- [[repos/adobe-react-spectrum/topics/ユーティリティ|ユーティリティ]] — react-aria の utils（`runAfterTransition`・`useDescription`）
- [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]] — `@react-aria/optimize-locales-plugin`（Turbopack 対応と loader の型）

## 取り込み

- [[repos/adobe-react-spectrum/log|取り込み履歴]]
- リリース: [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]]、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]]
- 最近の変更: [[repos/adobe-react-spectrum/changes/2026-11-09|2026-11-09]]、[[repos/adobe-react-spectrum/changes/2026-11-06|2026-11-06]]、[[repos/adobe-react-spectrum/changes/2026-11-04|2026-11-04]]、[[repos/adobe-react-spectrum/changes/2026-10-30|2026-10-30]]、[[repos/adobe-react-spectrum/changes/2026-10-28|2026-10-28]]
