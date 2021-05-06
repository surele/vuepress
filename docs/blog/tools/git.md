命令行指令

## 1.Git 全局设置

git config --global user.name ""
git config --global user.email ""

创建新版本库
git clone https://.git
cd test
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

已存在的文件夹或 Git 仓库

```cd existing_folder
git init
git remote add origin https://.> git
git add .
git commit
git push -u origin master
```

## 2. 查看本地分支

`git branch`

创建分支
`git checkout -b dev`

切换分支
`git checkout master`

查看当前分支是基于哪个分支创建
`git reflog --date=local | grep release-5.1.1`

## 3.git 撤销当前 commit

撤销到 commit 之前，本地修改也放弃
`git reset --hard ,`

撤销到 commit 之前,且保留本地修改
`git reset --mixed HEAD^`
