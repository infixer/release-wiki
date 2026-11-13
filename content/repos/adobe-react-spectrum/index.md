---
title: adobe/react-spectrum
updated: 2026-11-13
tags:
  - repo/adobe-react-spectrum
---

[GitHub](https://github.com/adobe/react-spectrum) · ブランチ: `main`

## 最新リリース

- 安定版: [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|まとめ]]（`Sheet` の追加など）
- 安定版（S2）: [@react-spectrum/s2@1.8.0](https://github.com/adobe/react-spectrum/releases/tag/%40react-spectrum/s2%401.8.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|まとめ]]（`SideNavPanel`、Menu の非同期・仮想化など）
- プレリリース: なし

## 直近の注目変更

- NumberParser: アラビア数字を使うロケール（`sd` など）の区切り文字を保つ、ロケールの小数点ではない ASCII のピリオドを拒否（[#10939](https://github.com/adobe/react-spectrum/pull/10939)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/NumberField|NumberField]]
- useDateSegment: 午前・午後の表記が無い 12 時間制のロケール（`fr-CM`）で DateField・TimeField・DatePicker がクラッシュしない（[#10842](https://github.com/adobe/react-spectrum/pull/10842)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/DateField|DateField]]
- useTreeData: 0 や空文字のキーを持つ親の下の変更をツリーに反映（[#10908](https://github.com/adobe/react-spectrum/pull/10908)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Collections|Collections]]
- 公開パッケージに `@types/react` を任意の peer として宣言（pnpm のグローバル仮想ストアで型推論が失われる問題）（[#10953](https://github.com/adobe/react-spectrum/pull/10953)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/パッケージと型定義|パッケージと型定義]]
- ComboBox: 複数選択のメニューが開いていても Mod+A で入力欄の文字を選択（[#10868](https://github.com/adobe/react-spectrum/pull/10868)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]]
- useSliderState: 値が変わらないドラッグで `onChange` を繰り返し呼ばない（[#10952](https://github.com/adobe/react-spectrum/pull/10952)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Slider|Slider]]
- Sheet: Firefox で重ねた Sheet の背景がちらつかないように（[#10933](https://github.com/adobe/react-spectrum/pull/10933)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- Toolbar: クリックしたボタンにフォーカスを残す（[#10938](https://github.com/adobe/react-spectrum/pull/10938)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- RAC: Separator の既定の `<hr>` に冗長な `role="separator"` を付けない（[#10946](https://github.com/adobe/react-spectrum/pull/10946)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Separator|Separator]]
- CheckboxGroup の中の Checkbox がグループの `validationBehavior` を引き継ぐ（[#10860](https://github.com/adobe/react-spectrum/pull/10860)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]

## トピック

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]] — `@react-spectrum/ai` の PromptField・Chat/Thread・AttachmentList・AttachmentGrid・AttachmentBadge など
- [[repos/adobe-react-spectrum/topics/Breadcrumbs|Breadcrumbs]] — S2 の Breadcrumbs（項目のあふれと折りたたみ）
- [[repos/adobe-react-spectrum/topics/Collections|Collections]] — コレクションのキー管理（`Document`/`BaseCollection`）とキーボード・フォーカス、Tree の展開・説明テキスト、`GridListItem` と Table の `Row` のフォーカスイベント
- [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]] — 非同期アイテム読み込み時の開閉制御、VoiceOver での読み上げ、shadow DOM・`isReadOnly` での挙動、Escape の既定動作
- [[repos/adobe-react-spectrum/topics/DateField|DateField]] — 日付入力（`useDateSegment`・`DateField`）
- [[repos/adobe-react-spectrum/topics/Menu|Menu]] — S2 の Menu（セパレーター表示・仮想化）
- [[repos/adobe-react-spectrum/topics/NumberField|NumberField]] — 数値入力の `NumberField` と `@internationalized/number` の `NumberParser`（数字の体系）
- [[repos/adobe-react-spectrum/topics/Separator|Separator]] — RAC の `Separator`（`<hr>` の組み込みロールと `aria-orientation`）
- [[repos/adobe-react-spectrum/topics/SideNav|SideNav]] — S2 の SideNav と SideNavPanel（旧 SidePanel）内での折りたたみ
- [[repos/adobe-react-spectrum/topics/Slider|Slider]] — スライダーの状態（`useSliderState` の `onChange`）
- [[repos/adobe-react-spectrum/topics/Tabs|Tabs]] — RAC の Tabs（TabPanels のサイズのアニメーションと入れ子の Tabs）
- [[repos/adobe-react-spectrum/topics/Toast|Toast]] — S2 の Toast（展開したリストとボタンの間隔）
- [[repos/adobe-react-spectrum/topics/TokenField|TokenField]] — トークン入力欄（`useTokenField`）のキャレット位置・スクロール・選択の `onChange`
- [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]] — react-aria のインタラクション用フック（`useHover` のタッチ・マウス併用時のホバー状態、`usePress` の macOS での Enter・キーボードでの二重クリック）
- [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]] — Modal・Popover・Sheet の配置とスクリーンキーボードへの対応、Popover のラベル、`PreviewTrigger` の Escape
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]] — `useKeyboard`（コレクション・DatePicker・Toolbar のキーボード処理）とパッケージ import 時のグローバルイベント
- [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]] — S2 の `style` マクロ（ESM ビルド）とテーマで使えるプロパティ、`page.css` の型宣言
- [[repos/adobe-react-spectrum/topics/ドラッグアンドドロップ|ドラッグアンドドロップ]] — `useDrag`・`useDescription` と仮想化リスト（`ListLayout`）でのドロップ位置
- [[repos/adobe-react-spectrum/topics/パッケージと型定義|パッケージと型定義]] — 公開パッケージの peer dependencies（任意の `@types/react`）と型の解決
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]] — RAC の `Form`（入れ子）、Select・CheckboxGroup のフォームリセットと Select の props、`validationBehavior` の引き継ぎ
- [[repos/adobe-react-spectrum/topics/ユーティリティ|ユーティリティ]] — react-aria の utils（`runAfterTransition`・`useDescription`）
- [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]] — `@react-aria/optimize-locales-plugin`（Turbopack 対応と loader の型）

## 取り込み

- [[repos/adobe-react-spectrum/log|取り込み履歴]]
- リリース: [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]]、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]]
- 最近の変更: [[repos/adobe-react-spectrum/changes/2026-11-13|2026-11-13]]、[[repos/adobe-react-spectrum/changes/2026-11-11|2026-11-11]]、[[repos/adobe-react-spectrum/changes/2026-11-09|2026-11-09]]、[[repos/adobe-react-spectrum/changes/2026-11-06|2026-11-06]]、[[repos/adobe-react-spectrum/changes/2026-11-04|2026-11-04]]
