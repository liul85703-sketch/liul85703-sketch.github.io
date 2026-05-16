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

### 推送失败：`Recv failure: Connection was reset` / 连接被重置

多为网络、公司防火墙或代理中断 HTTPS。可依次尝试：

1. **换网络**：手机热点、关闭/更换 VPN 后再执行 `git push`。
2. **使用 SSH**（推荐将 `origin` 设为 `git@github.com:liul85703-sketch/liul85703-sketch.github.io.git`）：在 GitHub 添加 [SSH 公钥](https://docs.github.com/authentication/connecting-to-github-with-ssh)，本机运行 `ssh -T git@github.com` 确认通过后再推送。若 22 端口受限，可在 `~/.ssh/config` 中改用 [SSH over HTTPS 端口 443](https://docs.github.com/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)（`ssh.github.com`）。
3. **继续用 HTTPS**：  
   `git remote set-url origin https://github.com/liul85703-sketch/liul85703-sketch.github.io.git`  
   并使用 [Personal Access Token](https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)；亦可尝试 `git -c http.version=HTTP/1.1 push`（避免部分环境下 HTTP/2 不稳定）。
