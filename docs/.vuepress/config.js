module.exports = {
    title: "surelee",
    description: "stay hungry stay foolish",
    lang: "zh-cmn-Hans",
    head: [
        ["link", { rel: "icon", href: "/images/logo.jpg" }],
        ["link", { rel: "manifest", href: "/images/logo.jpg" }],
        ["link", { rel: "apple-touch-icon", href: "/images/logo.jpg" }]
    ],
    serviceWorker: true,
    base: "/",
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        logo: "/images/logo.jpg",
        search: true,
        nav: [
            { text: "首页", link: "/" },
            {
                text: "学习笔记",
                icon: "reco-blog",
                items: [
                    // 前端文档分组, 一般只链接到目录下的第一个md文件，其余md通过sidebar补充
                    {
                        text: "前端",
                        items: [
                            {
                                text: "vue",
                                link: "/blog/web/vue/communication.md"
                            },
                            {
                                text: "JS基础",
                                link: "/blog/web/js/js.md"
                            }
                        ]
                    },
                    // 工具类文档
                    {
                        text: "工具",
                        items: [
                            {
                                text: "npm",
                                link: "/blog/tools/npm"
                            }
                        ]
                    }
                ]
            },
            { text: "Github", link: "https://github.com/surele" }
        ],
        lastUpdated: "Last Updated", // string | boolean
        sidebar: {
            "/blog/web/vue/": [
                {
                    title: "6种通信方式",
                    path: "/blog/web/vue/communication.md"
                },
                {
                    title: "npm组件开发和发布",
                    path: "/blog/web/vue/npm-plugin.md"
                },
                {
                    title: "vue动态增加路由",
                    path: "/blog/web/vue/addRouters.md"
                }
            ],
            // "/blog/web/js": [
            //     {
            //         title: "主页",
            //         collapsable: true,
            //         // path: "/",
            //         children: ["/blog/web/vue", "vue"]
            //     }
            // ],
            "/": [
                {
                    title: "主页",
                    path: "/"
                }
            ]
        }
        // sidebarDepth: 3
    }
};
