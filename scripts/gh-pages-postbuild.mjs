/**
 * GitHub Pages（/docs 部署）在静态托管下无法为单页应用做服务端回退。
 * 将 index.html 复制为 404.html 后，子路径刷新时仍由 React Router 接管。
 * .nojekyll 禁用 Jekyll，避免资源路径被错误处理。
 */
import fs from 'node:fs'
import path from 'node:path'

const docs = path.resolve(process.cwd(), 'docs')
const indexHtml = path.join(docs, 'index.html')

if (!fs.existsSync(indexHtml)) {
  console.error('未找到 docs/index.html，请先执行: npm run build:gh-pages')
  process.exit(1)
}

fs.copyFileSync(indexHtml, path.join(docs, '404.html'))
fs.writeFileSync(path.join(docs, '.nojekyll'), '')
console.log('已写入 docs/404.html 与 docs/.nojekyll')
