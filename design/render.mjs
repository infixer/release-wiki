import { chromium } from "playwright"
import path from "node:path"
const [, , html, out, w, h] = process.argv
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" })
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 })
await page.goto("file://" + path.resolve(html))
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(500)
// アイコンは背景を透明にする
await page.screenshot({ path: out, omitBackground: html.includes("icon") })
await browser.close()
