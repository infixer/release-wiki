# Release Wiki

気になる GitHub リポジトリのマージ済み PR と公式ブログを週 3 回（月・水・金）まとめ、Obsidian 形式の Wiki として GitHub Pages で公開しています。

**公開 URL: https://infixer.github.io/release-wiki/**

## 仕組み

データ集めとサイトの公開は GitHub Actions が行い、Claude は「要約と Wiki の更新」だけを担当します。

```
月・水・金 06:17 JST  GitHub Actions「collect」   ← トークン消費 0
   │  GitHub API: マージ済み PR・変更ファイル・Release・収録状況
   │  ブログ: RSS や一覧ページの新着記事（本文テキスト）
   │  新しいものがあれば digest/inbox/*.json に保存して commit
   ▼
月・水・金 08:00 JST  Claude ルーチン              ← トークンを使うのはここだけ
   │  inbox が空なら何もせず終了
   │  digest/INSTRUCTIONS.md に従い、inbox の JSON だけを読んで content/ の Wiki を更新
   │  処理済みの inbox を削除して commit & push
   ▼
push をきっかけに  GitHub Actions「deploy」    ← トークン消費 0
      Quartz で content/ をサイトにして GitHub Pages に公開
```

| パス | 役割 |
|---|---|
| `content/` | Wiki 本体（ここだけが公開される）。Obsidian でもそのまま開ける |
| `digest/config.yml` | 追跡するリポジトリとブログ（人が編集） |
| `digest/state.json` | どこまで集めたか（collect が更新。手で触らない） |
| `digest/inbox/` | 未処理のデータ（collect が追加し、ルーチンが削除） |
| `digest/INSTRUCTIONS.md` | ルーチン用の手順書（Wiki の書き方） |
| `scripts/collect.mjs` | データ収集スクリプト（Node 22） |
| `.github/workflows/collect.yml` | 月・水・金 06:17 JST と手動実行で collect を動かす |
| `.github/workflows/deploy.yml` | main への push で Quartz をビルドして Pages に公開 |
| `quartz/`, `quartz.config.ts`, `quartz.layout.ts` | [Quartz v4](https://quartz.jzhao.xyz/)（サイト生成） |

## リポジトリやブログを追加する

`digest/config.yml` に追記して main に push するだけです。追加した回は、リポジトリなら直近 7 日分、ブログなら直近 5 件を取り込みます。

```yaml
repos:
  - repo: owner/name
    branch: main            # 任意: 対象のブランチ（省略すると既定ブランチ。next.js なら canary）
    excludeLabels: [dependencies]  # 任意: このラベルの PR を除く
    maxPrs: 60              # 任意: 1 回で詳しく扱う PR の上限（既定 60。超えた分は collect が 1 行扱いにする）
    includeCommits: true    # 任意: PR を通さずに直接入ったコミットも集める（csswg-drafts など）
    classifyByFiles: false  # 任意: README などの変更だけでも「その他」扱いにしない（tc39/proposals など）
    patch: 3000             # 任意: 変更の差分を 1 件あたりこの字数まで持たせる
    includeBots: ["copyberry[bot]"]  # 任意: bot が PR を作る運用のリポジトリで、その bot の PR も集める

blogs:
  # RSS/Atom があるブログ
  - id: example             # content/blogs/<id>/ になる
    title: Example Blog
    feed: https://example.com/rss.xml   # RSS 2.0 / Atom
    relatedRepo: owner/name # 任意: 関連リポジトリ
    titleFilter: "^Example \\d"         # 任意: タイトルで絞る正規表現
    maxPosts: 10                        # 任意: 1 回に取り込む記事の上限（既定 10。初回は 5）

  # RSS が無いサイト（一覧ページから記事へのリンクを拾う）
  - id: firefox
    title: Firefox リリースノート
    page: https://www.firefox.com/en-US/releases/
    linkPattern: "/firefox/\\d+(\\.\\d+)+/releasenotes/?$"  # 任意: 記事として拾うリンク
    articleParams: { hl: ja }  # 任意: 記事 URL に付けるクエリ（例: 日本語版を取る）
    sortBy: version            # 任意: URL のバージョン番号の大きい順に扱う
    titleTemplate: "Firefox {version}"  # 任意: URL のバージョン番号からタイトルを作る（{title} で元のタイトル）

  # Apple のドキュメント（developer.apple.com/documentation/...）
  - id: safari
    title: Safari リリースノート
    docc: https://developer.apple.com/documentation/safari-release-notes
    maxText: 30000             # 任意: 本文の上限（既定 15000 字）
    dropSectionsWhenLong: "^(Resolved Issues|Known Issues)$"  # 任意: 上限を超えるときに省く節の見出し
```

- `page` のときは、一覧ページの本文の領域（`main` や `article` の中）にあるリンクを、上にあるものほど新しい記事とみなします。
  他のリンクの親にあたるパス（カテゴリのトップ）は除きます。`linkPattern` が無ければ同じサイトのリンクだけを拾います。
  記事ページからタイトル・本文・公開日を取り出します。リンクが 1 つも見つからなければ `errors` に記録されます。
- `docc` のときは、ページと同じ内容の JSON（`/tutorials/data/documentation/....json`）を読みます。
  「Released … — 27.2 beta (…)」の日付やビルド番号が変わったら、同じ URL でも取り直して `updated: true` を付けます（Beta のリリースノートの更新）。
- `repo` は転送元の名前（`facebook/react` など）でも動きますが、正式名（`react/react`）を書くのがおすすめです。
- bot が作った PR は自動で除かれます（`includeBots` に書いた bot は除かない）。除いた件数は inbox の `excluded` と Actions のログに出ます。

## 手動で実行する

- **collect**: GitHub の Actions → collect → Run workflow（main を選ぶ）。
  `digest/inbox/` に JSON ができたことを確認します。新着が無ければ何も commit しません。
- **Wiki の更新**: Claude のルーチンを「今すぐ実行」します。
- **サイトの公開**: `content/` に push すると自動で動きます。Actions → deploy → Run workflow でも実行できます。

## ローカルで動かす

```sh
# サイトのプレビュー（http://localhost:8080）
npm ci
npx quartz build --serve

# collect のテスト（ネットワークを使わない）
npm ci --prefix scripts
npm test --prefix scripts

# collect を実際に動かす（digest/ が更新されるので注意）
GITHUB_TOKEN=$(gh auth token) node scripts/collect.mjs
```

## 初期設定（最初に 1 回だけ）

1. Settings → Pages → Build and deployment → Source を **GitHub Actions** にする。
2. Settings → Actions → General → Workflow permissions を **Read and write permissions** にする。
3. Claude のルーチンを作る（下記）。

### Claude ルーチン

| 項目 | 値 |
|---|---|
| 名前 | Release Wiki |
| リポジトリ | `infixer/release-wiki` |
| スケジュール | 月曜・水曜・金曜 8:00 JST（UTC の cron なら `0 23 * * 0,2,4`） |
| モデル | Sonnet 系を推奨 |
| コネクタ | なし |

プロンプト:

```text
digest/inbox/ に JSON ファイルが無ければ、何も変更せずに「新着なし」とだけ報告して終了してください。

ある場合は digest/INSTRUCTIONS.md を読み、その手順どおりに inbox の内容を content/ の Wiki に反映してください。
処理した inbox ファイルを削除し、main に直接 commit・push してください（PR は作らない）。
GitHub API・Web 取得・リポジトリの clone は使わないでください。必要なデータはすべて inbox にあります。
```

## 補足

- Actions の定時実行は数十分遅れることがあります。遅れてもルーチンが空振りして、次の回に 2 回分まとめて処理されるだけで取りこぼしはありません（inbox は削除されるまで残ります）。
- 1 つのリポジトリやブログで取得に失敗しても他は続行し、エラーは inbox の JSON の `errors` に入ります。ルーチンはそれを `log.md` に記録します。
- Quartz は MIT ライセンスです（`LICENSE.txt`）。
