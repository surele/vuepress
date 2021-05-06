-   [ ] 2021/2/7 npm 常用命令

| 命令                        | 说明                                                                 | 简写          |
| :-------------------------- | :------------------------------------------------------------------- | ------------- |
| `npm init`                  | 生成 package.json 说明书文件,使用`npm init -y`可以跳过向导，快速生成 |               |
| `npm install`               | 一次性把 dependencies 选项中的依赖项全安装                           | `npm i`       |
| `npm install 包名`          | 下载指定包                                                           |
| `npm install 包名@version`  | 下载指定版本指定包                                                   |
| `npm i 包名`                |
| `npm install --save 包名`   | 下载并且保存依赖项(`package.json`文件中的`dependencies`选项)         | `npm i 包名`  |
| `npm uninstall 包名`        | 删除指定包，如果有依赖项会依然保存                                   | `npm un 包名` |
| `npm uninstall --save 包名` | 删除的同时也会把依赖信息全部删除,                                    | `npm un 包名` |
| `npm help`                  | 查看使用帮助                                                         |
| `npm 命令 --help`           | 查看具体命令的使用帮助,例如: `npm uninstall --help`                  |
| `npm cache clean -f`        | npm 清除缓存：                                                       |

`npm cache clean -f`: npm 清除缓存：

npm 依赖包版本`^`、`~`、`*`的区别
`~`会匹配最近的小版本依赖包，比如~1.2.3 会匹配所有 1.2.x 版本，但是不包括 1.3.0
`^`会匹配最新的大版本依赖包，比如^1.2.3 会匹配所有 1.x.x 的包，包括 1.3.0，但是不包括 2.0.0
`*`会安装最新版本的依赖包
