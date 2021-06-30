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
# 背景
在业务系统做鉴权时，不同权限的用户登录后显示不同的菜单。借助动态加载路由的方法，可以先将路由配置进行权限过滤，把过滤后的路由信息添加到当前路由实例上。

# vue 动态添加路由

动态添加路由用到了`Router`实例的`AddRouter`方法，函数签名如下：

## router.addRoute

```typescript
addRoute(route: RouteConfig): () => void
addRoute(parentName: string, route: RouteConfig): () => void
```

使用该方法可以添加一条新路由规则。若传入`parentName`，则会添加一条新的路由规则记录作为现有路由的子路由。
如果该路由规则有 `name`，并且已经存在一个与之相同的名字，则会覆盖它。

其中参数`routes: Array<RouteConfig>`是路由必须符合路由选项要求，`RouteConfig` 的类型定义如下：

<!-- ::: tip
router.addRoutes
::: -->

```typescript
interface RouteConfig = {
  path: string,
  component?: Component,
  name?: string, // 命名路由
  components?: { [name: string]: Component }, // 命名视图组件
  redirect?: string | Location | Function,
  props?: boolean | Object | Function,
  alias?: string | Array<string>,
  children?: Array<RouteConfig>, // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void,
  meta?: any,

  // 2.6.0+
  caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object // 编译正则的选项
}
```

## 动态增加路由

以动态添加一个名为`demo`的路由为例，代码如下:

```typescript
let dyOption = {
    name: "demo",
    path: "/demo",
    component: DemoView
};
router.addRoute(dyOption);
```

如果直接使用上面的代码会遇到两个问题：

1. 使用`addRoute`方法添加的路由在页面刷新后会失效；
2. 使用`router.push()`方法进入新增的路由页面可能会 404 报错；

对于问题 1，我们可以在前置守卫`router.beforeEach`中进行判断，在进入新增加的页面之前需要确保路由信息存在。

对于问题 2，是 vue-router 已知的 bug（参考[issues/2280](https://github.com/vuejs/vue-router/issues/2280)）,需要手动更新路由对象；
完整的代码如下所示：

```typescript
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(Router);

let routerOptions: Array<RouteConfig> = require("@/router.ts"); // 加载路由配置
let router = new Router(routerOptions);
router.beforeEach(async (to: any, from: any, next: Function) => {
    if (
        router
            .getRoutes()
            .map(v => v.name)
            .includes("demo")
    ) {
        next();
        return;
    }

    let dyOption = {
        name: "demo",
        path: "/demo",
        component: DemoView
    };
    router.addRoute(dyOption);

    // 更新路由
    let options = context.routerOptions.$clone() as any;
    options.routes?.unshift(dyOption);
    let nRouter = new Router(options);
    router.options = nRouter.options;
    (router as any).matcher.match = (nRouter as any).matcher.match;
    next({ name: "demo" });
});
```
