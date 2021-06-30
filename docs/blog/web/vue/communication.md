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

# 6 种常见通信方式
![通信方式](/images/communication.webp)

-   父子通信

父向子传递数据是通过 props，子向父是通过 events（`$emit`）；通过父链 / 子链也可以通信（`$parent` / `$children`）；ref 也可以访问组件实例；provide / inject API；`$attrs`/`$listeners`

-   兄弟通信
    Bus([中央事件总线（事件中心）]`$emit`/`$on`)；Vuex

-   跨级通信
    Bus；Vuex；provide / inject API、`$attrs`/`$listeners`

1. [Vue 组件间通信六种方式](https://juejin.cn/post/6844903845642911752#heading-4)
