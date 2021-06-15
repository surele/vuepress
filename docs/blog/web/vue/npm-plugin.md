---
title: vue 组件开发以及 npm 发包
lang: zh-CN
# sidebar: "auto"
prev: true
next: true
tags:
    - vue
publish: true
---

# vue 组件开发以及 npm 发包

## 1、vue 组件开发

## 2、npm 发包

### 什么是 npm?

npm 其实是 Node.js 的包管理工具（package manager）。

为啥我们需要一个包管理工具呢？因为我们在 Node.js 上开发时，会用到很多别人写的 JavaScript 代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生：大家都把自己开发的模块打包后放到 npm 官网上，如果要使用，直接通过 npm 安装就可以直接用，不用管代码存在哪，应该从哪下载。

更重要的是，如果我们要使用模块 A，而模块 A 又依赖于模块 B，模块 B 又依赖于模块 X 和模块 Y，npm 可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。

讲了这么多，npm 究竟在哪？

其实 npm 已经在 Node.js 安装的时候顺带装好了。

### 准备工作：

注册 npm 账号：[官网地址](https://www.npmjs.com/)

在终端执行：

```
npm addUser
```

或者执行：

```
npm login
```

### npm init (生成 package.json 说明书文件)

cd 进项目所在的文件夹，执行

```
npm init
```

可以使用`npm init -y`跳过向导，快速生成

接下来就是一长串表单：

-   name：填写你这个包的名字，默认是你这个文件夹的名字。不过这里要着重说一下，最好先去 npm 上找一下有没有同名的包。最好的测试方式就是，在命令行里面输入`npm install 你要取的名字`，如果报错，那么很好，npm 上没有跟你同名的包，你可以放心大胆地把包发布出去。如果成功下载下来了。。。那么很不幸，改名字吧。。。

-   version：你这个包的版本，默认是 1.0.0

-   description：这个用一句话描述你的包是干嘛用的，比如我就直接：‘a plugin for express.register routes base on file path’

-   entry point：入口文件，默认是`index.js`，你也可以自己填写你自己的文件名

-   test command：测试命令，这个直接回车就好了，因为目前还不需要这个。

-   git repository：这个是 git 仓库地址，如果你的包是先放到 github 上或者其他 git 仓库里，这时候你的文件夹里面会存在一个隐藏的`.git`目录，npm 会读到这个目录作为这一项的默认值。如果没有的话，直接回车继续。

-   keyword：这个是一个重点，这个关系到有多少人会搜到你的 npm 包。尽量使用贴切的关键字作为这个包的索引。我这个包嘛，第一是在`express`下工作的，然后又是一个插件`plugin`，然后又是一个注册路由`route`用的，而这个路由又是基于文件目录`dir`，所以很好就得出我的包的索引关键字。

-   author：写你的账号或者你的 github 账号吧

-   license：这个直接回车，开源文件来着。。

**version 版本**

规则：对于`"version":"x.y.z"`

-   1:【major 主要更新】有很大的改动，无法向后兼容,增加 `x`
-   2.【minor 次要更新】增加了新特性，但仍能向后兼容，增加 `y`
-   3.【patch 补丁】修复 bug,小改动，增加 `z`
-   4.【prerelease 预览版】
    eg.

```
"2.3.4-alpha.3" =="major.minor.patch-prerelease"
```

在当前目录下使用`npm publish`

注意发布前确认是否已经登陆
可以用 `npm who am i`检查登陆状态

要是用淘宝镜像的，需要切换回来：
npm config set registry http://registry.npmjs.org

`npm install 你发布出去的包的名字` 尝试下载安装发布的包
一般发布成功后会受到发布成功的邮件提醒

问题场景：npm publish 发布一个 npm 包，发布的时候你希望只发布打包的文件，包的源码，单元测试等文件不希望发布；
.npmignore 中的文件不会被发布，默认情况下，npm publish 发布目录中的所有文件，除了

.\_.swp
.\_\_
.DS_Store
.git
.hg
.npmrc
.lock-wscript
.svn
.wafpickle-\*
config.gypi
CVS
npm-debug.log
所以不需要把这些文件加入到.npmignore 中也会忽略，如果没有.npmignore,有.gitignore，那么.gitignore 中的文件会从包中忽略，如果同时存在，那么.npmignore 的优先级更好

这些是默认发布的文件，加入.gitignore 和.npmignore 都是不会生效的：

package.json
README(and its variants)
CHANGELOG(and its variants)
LICENSE/LICENCE

注意的坑
无法发布到私有包

```
npm ERR! publish Failed PUT 402
npm ERR! code E402
npm ERR! You must sign up for private packages :
```

这个当你的包名为@your-name/your-package 时才会出现，原因是当包名以@your-name 开头时，npm publish 会默认发布为私有包，但是 npm 的私有包需要付费，所以需要添加如下参数进行发布:

```
npm publish --access public
```

# 参考文章

1. [手把手教你用 npm 发布一个包](https://www.jianshu.com/p/36d3e0e00157)
2. [看在上帝的份上，不要使用 .npmignore](https://blog.csdn.net/juzipidemimi/article/details/103198486)
3. [.npmignore、.gitignore 和 package.json 中的 files 字段](https://segmentfault.com/a/1190000020841543?utm_source=tag-newest)
4. [发布 npm 包时遇到的一些坑](https://blog.csdn.net/zhangjing1019/article/details/102896421)
5. [如何让你的npm项目自动更新版本号](https://www.jianshu.com/p/d616d3bf391f)