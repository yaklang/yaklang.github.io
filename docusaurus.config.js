const remarkSanitizeAutolinks = require("./scripts/remark-sanitize-autolinks");
const { fetchBuildFacts } = require("./scripts/build-facts");

const siteUrl = "https://yaklang.com";
// 构建期一手事实（版本/stars/forks/安装包大小）：任一项失败为 null 时
// 所有消费方自动回退，不影响构建
const buildFacts = fetchBuildFacts();
const latestYakitVersion = buildFacts.yakitVersion;
const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "Yak Project",
            alternateName: ["Yaklang", "Yakit", "万径安全"],
            url: siteUrl,
            logo: `${siteUrl}/img/yaklogo.png`,
            // sameAs 必须指向该实体在「其它」平台上的权威表示，禁止自引用站点 URL。
            // 2026-08-31 审计修正：仓库 URL 不是「组织在其它平台的表示」（仓库是
            // Project/产品，属 SoftwareApplication.codeRepository），已移至下方
            // 两个 SoftwareApplication 节点；此处只保留组织级主页。
            // 待补充：建立 YouTube / LinkedIn / Wikidata / Wikipedia / X 官方
            // 阵地后追加其 URL —— 只写可核实存在的链接，不预填占位。
            sameAs: [
                "https://github.com/yaklang",
                // 官方 Bilibili 频道（与 HomeFooter 中的链接一致）
                "https://space.bilibili.com/437503777",
            ],
            description:
                "Yak Project is an open-source cybersecurity infrastructure ecosystem built around the Yaklang programming language. Powered by 万径安全 (Megavector) - A Beijing-based cybersecurity infrastructure provider.",
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: "Yak Project",
            url: siteUrl,
            inLanguage: ["zh-CN", "en"],
            description:
                "Official documentation, technical articles, downloads, and open-source project information for the Yaklang cybersecurity ecosystem.",
            publisher: { "@id": `${siteUrl}/#organization` },
        },
        // 旗舰产品实体：Yakit 是可下载的跨平台安全工作台。给 AI 搜索引擎一个
        // 明确的产品实体（applicationCategory/operatingSystem/offers），便于被引用。
        // 仅写入可核实字段；aggregateRating/version/screenshot 待有真实来源后再补。
        {
            "@type": "SoftwareApplication",
            "@id": `${siteUrl}/yakit#software`,
            name: "Yakit",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Windows, macOS, Linux",
            url: `${siteUrl}/products/intro/`,
            downloadUrl: "https://github.com/yaklang/yakit/releases",
            isAccessibleForFree: true,
            inLanguage: ["zh-CN", "en"],
            description:
                "Yakit is an integrated, cross-platform security workbench built on the Yaklang security DSL, combining MITM proxy, Web Fuzzer, codec, plugin store, and AI-agent orchestration for penetration testing and security engineering.",
            featureList: [
                "MITM Proxy",
                "Web Fuzzer",
                "Codec",
                "Plugin Store",
                "Hot Reload",
                "AI Agent Orchestration",
            ],
            author: { "@id": `${siteUrl}/#organization` },
            publisher: { "@id": `${siteUrl}/#organization` },
            // 仓库是产品实体属性而非组织社交档案（2026-08-31 审计 P0-2）
            codeRepository: "https://github.com/yaklang/yakit",
            // 一手版本事实：AI 引擎可直接从站内引用「截至构建时 Yakit 版本为 X」
            ...(latestYakitVersion
                ? {
                      softwareVersion: latestYakitVersion,
                      releaseNotes: "https://github.com/yaklang/yakit/releases",
                  }
                : {}),
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
            },
        },
        // 第二个产品实体：Yaklang 语言本身（2026-08-31 审计 P2-12）。
        // 与 Yakit 区分开，避免 AI 引擎把「语言」与「工作台」合并成单一实体。
        {
            "@type": "SoftwareApplication",
            "@id": `${siteUrl}/yaklang#software`,
            name: "Yaklang",
            alternateName: "YAK",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows, macOS, Linux",
            url: `${siteUrl}/docs/intro/`,
            downloadUrl: "https://github.com/yaklang/yaklang/releases",
            codeRepository: "https://github.com/yaklang/yaklang",
            isAccessibleForFree: true,
            inLanguage: ["zh-CN", "en"],
            description:
                "Yaklang (YAK) is a domain-specific programming language (CDSL-YAK) for cybersecurity engineering. It unifies scanning, proof-of-concept authoring, vulnerability validation, traffic analysis, and security automation in one Go-runtime-backed language.",
            featureList: [
                "MITM and traffic analysis",
                "Service scanning",
                "PoC authoring",
                "Fuzzing",
                "Goroutine-style concurrency",
            ],
            author: { "@id": `${siteUrl}/#organization` },
            publisher: { "@id": `${siteUrl}/#organization` },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
            },
        },
    ],
};

/** @type {import('@docusaurus/types').Config} */
module.exports = {
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN", "en"],
    },
    title: "Yak Project",
    tagline: "开源网络安全基础设施",
    url: siteUrl,
    baseUrl: "/",
    // 迁移期：将断链降级为 warn，避免历史内容阻塞构建；内容修复后可恢复为 throw
    onBrokenLinks: "warn",
    onBrokenAnchors: "warn",
    favicon: "img/favicon.ico",
    // 注意：本文件下方还有一个 headTags 键（JSON-LD 组织图谱）。JS 对象字面量
    // 的重复键后者覆盖前者，因此所有 headTags 条目必须集中在下方那一个键里
    // （历史上的 preconnect/dns-prefetch 块就是因为重复键而被静默丢弃的）。
    // 站点级 URL 统一带尾斜杠：与 nginx try_files 的目录规范化（301 到带斜杠）
    // 及 sitemap/canonical 保持一致，消除每轮抓取 700+ 次重定向。
    trailingSlash: true,
    customFields: {
        // 构建期拉取的 Yakit 最新版本，供首页下载区做 SSR 初始版本
        yakitLatestVersion: latestYakitVersion,
        // 构建期一手事实（stars/forks/安装包大小），供首页统计行、
        // 下载表格 SSR 直出与 llms.txt 事实段使用
        buildFacts,
    },
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
        image: "img/newHome/now.webp",
        metadata: [
            {
                name: "description",
                content:
                    "Yak Project 是以 Yaklang 为核心的开源网络安全基础设施，提供 Yakit、IRify、Memfit AI 与安全研发文档。",
            },
            {
                name: "keywords",
                content:
                    "Yak Project, Yaklang, Yakit, IRify, Memfit AI, 网络安全, 开源安全, 安全开发, cybersecurity, application security",
            },
            {
                name: "robots",
                content:
                    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
            },
            { property: "og:site_name", content: "Yak Project" },
            { property: "og:image", content: `${siteUrl}/img/newHome/now.webp` },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: `${siteUrl}/img/newHome/now.webp` },
            { name: "theme-color", content: "#f9f6ef" },
            // Bing Webmaster Tools 所有权验证：暂未启用，避免把占位符内容上线到生产。
            // 取得真实验证码后，在下方取消注释并填入即可：
            // { name: "msvalidate.01", content: "<REAL-BING-VERIFICATION-CODE>" },
        ],
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
            // 标记为滚动时隐藏：因 swizzle 后导航栏改用 HomeNavbar(sticky)，
            // useTOCHighlight 在 hideOnScroll=false 时会调用 getNavbarHeight()
            // 读取 .navbar 元素高度，但 HomeNavbar 不带 .navbar class 会报错。
            // 设 true 让 TOC 用 offset 0，跳过 getNavbarHeight 调用，避免崩溃。
            hideOnScroll: true,
            logo: {
                alt: "My Site Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    // 编程教程与内置库参考已合并为单一文档树，统一入口
                    label: "YAK 编程文档",
                    to: "/docs/intro",
                    position: "left",
                },
                {
                    label: "Yakit 使用手册",
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
                    to: "/blog",
                    label: "技术博客",
                    position: "left",
                },
                // {
                //     position: "left",
                //     to: "/enterpriseCollaboration",
                //     activeBasePath: "pages",
                //     label: "企业合作",
                // },
                {
                    // 自定义导航项：合并原"静态代码分析"与"实战手册"为"开源"，
                    // hover 展开开源项目卡片 mega-menu，点击进入 /opensource 总览页。
                    type: "custom-openSource",
                    position: "left",
                    label: "开源",
                    to: "/opensource",
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
                    to: "/download",
                    label: "下载资源",
                    position: "right",
                },
                {
                    type: "custom-searchButton",
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
                        {
                            label: "常见问题 FAQ",
                            href: "/faq",
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
                        {
                            label: "Editorial Policy / 编辑政策",
                            href: "/editorial-policy",
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
        require.resolve("./plugins/geo-metadata-plugin"),
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
                    // 自动生成的 API 文档含裸 URL, 会被 gfm autolink 误并入非法 URL 导致
                    // MDX 构建崩溃; 该插件把非法 link 节点降级为纯文本以保证构建稳定。
                    // 必须在 Docusaurus 默认 remark 插件(含会崩溃的 transformLinks)之前执行,
                    // 此时 gfm 已在解析阶段生成 link 节点, 可被安全降级。
                    beforeDefaultRemarkPlugins: [remarkSanitizeAutolinks],
                },
                blog: {
                    path: "blog",
                    routeBasePath: "/blog",
                    blogTitle: "技术博客",
                    blogDescription:
                        "Yak Project 公众号技术文章合集，覆盖代码审计、AI、流量分析、Java 安全等方向",
                    blogSidebarTitle: "近期文章",
                    blogSidebarCount: "ALL",
                    showReadingTime: true,
                    postsPerPage: 10,
                    feedOptions: {
                        type: ["rss", "atom"],
                        title: "技术博客",
                        copyright: `Copyright © ${new Date().getFullYear()} Yak Project.`,
                    },
                },
                sitemap: {
                    lastmod: "date",
                    // 不再整体排除 en 路由：已翻译为英文的 en 页应进入 sitemap，
                    // 未翻译（zh 回退、含 CJK）的 en 页由 geo-metadata-plugin
                    // 在 postBuild 标记 noindex 后从 sitemap 移除。
                    ignorePatterns: [],
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            },
        ],
    ],
    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://aliyun-oss.yaklang.com",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "dns-prefetch",
                href: "//aliyun-oss.yaklang.com",
            },
        },
        {
            tagName: "script",
            attributes: { type: "application/ld+json" },
            innerHTML: JSON.stringify(organizationSchema),
        },
        {
            tagName: "meta",
            attributes: {
                name: "baidu-site-verification",
                content: "codeva-uRwiBjCLC9",
            },
        },
    ],

};
