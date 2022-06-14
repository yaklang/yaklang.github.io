/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN", "en"],
    },
    title: "Yak Official Website",
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
            title: "Yak",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
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
                            label: "Yakit 平台",
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
                src: "img/footerLogo.svg",
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
                            label: "研发团队",
                            href: "/team",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} for Yak Project. Own by v1ll4n. Powered by Docusaurus`,
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
                themeConfig: {
                    prism: {
                        theme: require("prism-react-renderer/themes/dracula"),
                    },
                },
            },
        ],
    ],
};
