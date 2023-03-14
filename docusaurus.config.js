/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN", "en"],
    },
    title: "Yak Program Language",
    tagline: "Yak 是一门 Web 安全研发领域垂直语言",
    url: "https://yaklang.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "yaklang", // Usually your GitHub org/user name.
    projectName: "yak-project-main-page", // Usually your repo name.
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

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: "🌙",

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: "2px",
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: "🌞",

                lightIconStyle: {
                    marginLeft: "1px",
                },
            },
        },

        navbar: {
            title: "",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    // dropdown类型现在只能跳转网站内的页面，不能跳转外链，需要跳转外链的请修改[src/theme/NavbarItem/DefaultNavbarItem.js]文件内的dropdown逻辑
                    type: "dropdown",
                    position: "left",
                    label: "官方文档",
                    items: [
                        {
                            // type: "doc",
                            // docId: "intro",
                            label: "Yak 语言",
                            href: "/docs/intro",
                        },
                        {
                            // {
                            //     type: "doc",
                            //     docId: "intro",
                            //     docsPluginId: "products",
                            label: "YAK IDE",
                            href: "/products/intro",
                        },
                    ],
                },
                {
                    position: "left",
                    to: "/team",
                    activeBasePath: "pages",
                    label: "关于我们",
                },
                // {
                //     position: "left",
                //     to: "/enterpriseCollaboration",
                //     activeBasePath: "pages",
                //     label: "企业合作",
                // },
                {
                    position: "left",
                    href: "https://chat.yaklang.com",
                    label: "Ya! 一刻",
                },
                {
                    position: "left",
                    to: "/cooperativePartner",
                    activeBasePath: "pages",
                    label: "合作伙伴",
                },
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
                    href: "https://yaklang.oss-cn-beijing.aliyuncs.com/yakit-technical-white-paper.pdf",
                    label: "下载白皮书",
                    position: "right",
                },
                {
                    href: "https://github.com/yaklang",
                    label: "Github",
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
            copyright: `<a class="footer-a" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">Copyright © ${new Date().getFullYear()} for Yak Project. 京ICP备17047700号-3</a>`,
        },
        algolia: {
            // The application ID provided by Algolia
            appId: "KU1F47O3Q6",

            // Public API key: it is safe to commit it
            apiKey: "84508cc662df9bef2f7e8bab1a3508bb",

            indexName: "yaklang",

            // Optional: see doc section below
            contextualSearch: false,

            // Optional: Algolia search parameters
            searchParameters: {
                facetFilters: ["language:zh-CN", ["filter1", "filter2"], "filter3"],
            },
        },
        prism: {
            theme: require("prism-react-renderer/themes/github"),
        },
    },
    plugins: [
        "docusaurus-plugin-sass",
        // [
        //     "@docusaurus/plugin-content-docs",
        //     {
        //         id: "team",
        //         path: "team",
        //         routeBasePath: "team",
        //         sidebarPath: require.resolve("./sidebarsTeam.js"),
        //         // ... other options
        //     },
        // ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "products",
                path: "products",
                routeBasePath: "products",
                sidebarPath: require.resolve("./sidebarsProducts.js"),
                // ... other options
            },
        ],
    ],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
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
