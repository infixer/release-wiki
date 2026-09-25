# サイトの画像

| ファイル | 使われる場所 | 元の HTML |
|---|---|---|
| `quartz/static/og-image.png`（1200×630） | SNS で共有したときの画像（OGP） | `og-image.html` |
| `quartz/static/icon.png`（200×200） | ブラウザのタブのアイコン | `icon.html` |

作り直すとき（追跡するリポジトリを増やして、下のチップを直したいときなど）:

```sh
cd design
npm i --no-save playwright @fontsource/noto-sans-jp @fontsource/schibsted-grotesk @fontsource/ibm-plex-mono
node render.mjs og-image.html ../quartz/static/og-image.png 1200 630
node render.mjs icon.html ../quartz/static/icon.png 200 200
```

Claude Code on the web などで Chromium が `/opt/pw-browsers/chromium` にある環境を前提にしています。
他の環境では `render.mjs` の `executablePath` を消してください。
