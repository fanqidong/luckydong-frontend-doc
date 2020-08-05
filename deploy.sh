#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
echo '执行命令：vuepress build .'
vuepress build .

# 进入生成的文件夹
echo '执行命令：cd .vuepress/dist'
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 初始化操作
echo '执行命令：git init\n'
git init

# 保存所有修改
echo '执行命令：git add -A'
git add -A

# 提交修改文件
echo '执行命令：git commit -m deploy'
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fanqidong/luckydong-frontend-doc.git master:gh-pages

#返回到上一次工作目录
echo '回到刚才的工作目录'
cd -
