/** @type {import('@docusaurus/types').Config} */
module.exports = {
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN", "en"],
    },
    title: "Yak Program Language",
    tagline: "Yak 是一门 Web 安全研发领域垂直语言",
    url: "https://yaklang.com",
    baseUrl: "/",
    // 迁移期：将断链降级为 warn，避免历史内容阻塞构建；内容修复后可恢复为 throw
    onBrokenLinks: "warn",
    onBrokenAnchors: "warn",
    favicon: "img/favicon.ico",
    organizationName: "yaklang", // Usually your GitHub org/user name.
    projectName: "yak-project-main-page", // Usually your repo name.
    markdown: {
        // detect: .md 按宽松的 CommonMark 解析，.mdx 才按严格 MDX 解析
        // 历史 .md 内容含大量 {、<、原始 URL，CommonMark 可避免误判为 JSX 表达式
        format: "detect",
        hooks: {
            onBrokenMarkdownLinks: "warn",
        },
    },
    themeConfig: {
        colorMode: {
            // "light" | "dark"
            defaultMode: "light",

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,
        },

        navbar: {
            title: "",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    label: "Yak 语言文档",
                    href: "/docs/intro",
                    sidebarCollapsed: false,
                },
                {
                    label: "API 手册",
                    href: "/api-manual/intro",
                    sidebarCollapsed: false,
                },
                {
                    label: "Yakit 手册",
                    href: "/products/intro",
                    sidebarCollapsed: false,
                },
                // {
                //     // dropdown类型现在只能跳转网站内的页面，不能跳转外链，需要跳转外链的请修改[src/theme/NavbarItem/DefaultNavbarItem.js]文件内的dropdown逻辑
                //     type: "dropdown",
                //     position: "left",
                //     label: "官方文档",
                //     items: [
                //         {
                //             // type: "doc",
                //             // docId: "intro",
                //             label: "Yak 语言文档",
                //             href: "/docs/intro",
                //             sidebarCollapsed: false,
                //         },
                //         {
                //             // {
                //             //     type: "doc",
                //             //     docId: "intro",
                //             //     docsPluginId: "products",
                //             label: "Yakit(YAK IDE) 文档与手册 ",
                //             href: "/products/intro",
                //             sidebarCollapsed: false,
                //         },
                //     ],
                // },
		        {
                    href: "/articles/intro",
                    label: "技术博客",
                    position: "left",
                    sidebarCollapsed: false,
                },
                // {
                //     position: "left",
                //     to: "/enterpriseCollaboration",
                //     activeBasePath: "pages",
                //     label: "企业合作",
                // },
                {
                    position: "left",
                    href: "/irify",
                    label: "静态代码分析",
                },
		        {
                    href: "/Yaklab/yaklab",
                    label: "YakLab 手册",
                    position: "left",
                },
                {
                    type: "dropdown",
                    position: "left",
                    label: "关于我们",
                    items: [
                        {
                            to: "/team",
                            activeBasePath: "pages",
                            label: "关于我们",
                        },
                        {
                            to: "/cooperativePartner",
                            activeBasePath: "pages",
                            label: "合作伙伴",
                        },
                    ],
                },
                // {
                //     position: "left",
                //     to: "/team",
                //     activeBasePath: "pages",
                //     label: "关于我们",
                // },
                // {
                //     position: "left",
                //     to: "/cooperativePartner",
                //     activeBasePath: "pages",
                //     label: "合作伙伴",
                // },
                // {
                //     position: "left",
                //     to: "/team",
                //     activeBasePath: "pages",
                //     label: "Yak 社区",
                // },
                // {
                //     position: "left",
                //     type: "doc",
                //     docId: "intro",
                //     docsPluginId: "team",
                //     label: "社区与团队",
                // },
                // {to: 'blog', label: 'Blog', position: 'left'},
                // {
                //     type: "docsVersionDropdown",
                //     position: "right",
                // },
                {
                    href: "https://oss-qn.yaklang.com/yakit-technical-white-paper.pdf",
                    label: "下载白皮书",
                    position: "right",
                },
                {
                    href: "https://github.com/yaklang",
                    label: "Github",
                    position: "right",
                },
                {
                    type: "custom-languageSwitcher",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "light",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.png",
                href: "/",
            },
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "官方文档",
                            href: "/docs/intro",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "关于我们",
                            href: "/team",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} for Yak Project. <a class="footer-a" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备17047700号-3</a>&nbsp;<a class="footer-a" href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802048712" rel="noreferrer" target="_blank">京公网安备11010802048712号</a>`,
        },
        prism: {
            theme: require("prism-react-renderer").themes.github,
        },
    },
    plugins: [
        "docusaurus-plugin-sass",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "api-manual",
                path: "api-manual",
                routeBasePath: "api-manual",
                sidebarPath: require.resolve("./sidebarsAPIManual.js"),
                sidebarCollapsed: false,
                // ... other options
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "products",
                path: "products",
                routeBasePath: "products",
                sidebarPath: require.resolve("./sidebarsProducts.js"),
                sidebarCollapsed: false,
                // ... other options
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "Yaklab",
                path: "Yaklab",
                routeBasePath: "Yaklab",
                sidebarPath: require.resolve("./sidebarsProducts.js"),
                sidebarCollapsed: false,
                // ... other options
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "articles",
                path: "articles",
                routeBasePath: "articles",
                sidebarPath: require.resolve("./sidebarsProducts.js"),
                sidebarCollapsed: false,
                // ... other options
            },
        ],
        function ProxyPlugin() {
            return {
                name: 'proxy-plugin',
                configureWebpack() {
                return {
                    devServer: {
                        // webpack-dev-server v5（Docusaurus 3）要求 proxy 为数组格式
                        proxy: [
                            {
                                context: ['/api', '/fastgocaptcha'],
                                target: 'http://192.168.3.100:8080/',
                                changeOrigin: true,
                            },
                        ],
                        client: {
                            overlay: false, 
                        },
                        setupMiddlewares: (middlewares, devServer) => {
                            if (!devServer) {
                                throw new Error('webpack-dev-server is not defined');
                            }
                            return middlewares;
                        },
                    },
                };
                },
            };
        },
    ],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    sidebarCollapsed: false,
                    // Please change this to your repo.
                    editUrl: "https://github.com/yaklang/",
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl:
                //         'https://github.com/yaklang/',
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            },
        ],
    ],

};
