#!/usr/bin/env sh

# 完美解决 fatal: unable to access ‘https://github.com/.../.git‘: Could not resolve host: github.com
# https://blog.csdn.net/weixin_42321517/article/details/114210822
# git config --global --unset http.proxy 
# git config --global --unset https.proxy
# 解决方案：cmd下命令执行 ipconfig/flushdns
# 清理dns缓存

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'xxx' > CNAME

git init
git remote add origin https://github.com/surele/surele.github.io.git
git add -A
git commit -m 'deploy'
git branch -M main
# 如果你想要部署到 https://<USERNAME>.github.io
git push -f https://github.com/surele/surele.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f  https://github.com/sjhleo/vitepress-blog.git master:gh-pages

cd -