# liul85703-sketch.github.io

个人作品集站点（React + Vite + TypeScript + Tailwind）。

## 本地开发

```bash
npm install
npm run dev
```

## 构建并发布到 GitHub Pages（`/docs`）

生产构建输出到 **`docs/`**。`npm run build:gh-pages` 会运行 TypeScript 检查、Vite 打出静态文件，并写入 **`404.html`**、**`.nojekyll`**（便于 React Router 在 Pages 上刷新子路径）。

```bash
npm run build:gh-pages
```

然后提交并推送 `docs/`（以及本次改动的源码）。

## GitHub 仓库设置（官方行为摘要）

用户站点仓库名须为 **`用户名.github.io`**（本仓库即为 [`liul85703-sketch.github.io`](https://github.com/liul85703-sketch/liul85703-sketch.github.io)）。在 **[Settings → Pages](https://github.com/liul85703-sketch/liul85703-sketch.github.io/settings/pages)**：

- **Build and deployment** → **Deploy from a branch**
- Branch：**`main`**，Folder：**`/docs`** → Save

发布后的站点根路径为：**https://liul85703-sketch.github.io/**（与 `docs/` 子目录名无关；GitHub 会把 `docs` 里的文件当成站点根目录发布）。

若推送被拒绝且远程仅有初始化提交，可：`git pull origin main --allow-unrelated-histories`，解决冲突后再推送（勿随意 `force push`，除非你确认要覆盖远程历史）。
