module.exports = {
    title: "surelee",
    description: "stay hungry stay foolish",
    lang: "zh-CN",
    dest: public,
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
                // link: "/markdown/",
                items: [
                    {
                        text: "工具",
                        items: [
                            {
                                text: "npm发包",
                                link: "/blog/tools/npm"
                            }
                        ]
                    },
                    {
                        text: "知识库",
                        items: [
                            {
                                text: "web前端",
                                link: "/blog/web/vue"
                            }
                        ]
                    }
                ]
            },
            { text: "Github", link: "https://github.com/surele" }
        ],
        sidebar: {
            "blog/tools/": [
                {
                    title: "工具",
                    children: ["babel", "git", "learna", "npm"]
                }
            ],
            "blog/web/": [
                {
                    title: "web基础",
                    children: ["js", "vue"]
                }
            ]
        },
        lastUpdated: "Last Updated" // string | boolean
    }
};
