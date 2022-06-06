import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dropdown, Menu, Popover } from "antd";
import {
    DownloadOutlined,
    DownOutlined,
    EyeOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "animate.css";

export interface HomeProps {}

interface FunctionListInfoProps {
    name: string;
    link: string;
}
interface FunctionDataProps {
    title: string;
    img: string[];
    list: FunctionListInfoProps[];
}
const FunctionData: FunctionDataProps[] = [
    {
        title: "常见安全工具的最佳实践 GUI",
        img: [
            "../../static/img/home/third/mitm-1.png",
            "../../static/img/home/third/mitm-2.png",
            "../../static/img/home/third/mitm-3.png",
        ],
        list: [
            { name: "难以复制的 MITM 被动扫描 GUI", link: "/" },
            { name: "可视化可选择插件执行端口扫描", link: "/" },
            { name: "常见安全工具右键联动", link: "/" },
        ],
    },
    {
        title: "可嵌入式执行并随时热加载",
        img: ["../../static/img/home/third/hot-loading.png"],
        list: [
            {
                name: "通过嵌入 Yaklang 脚本来实现 MITM 动态调试流量，随时动态执行代码",
                link: "/",
            },
        ],
    },
    {
        title: "复刻 BurpS**te 操作流",
        img: [
            "../../static/img/home/third/permeate-1.png",
            "../../static/img/home/third/permeate-2.png",
        ],
        list: [
            { name: "劫持 => History => Repeater / Intruder", link: "/" },
            { name: "经典渗透测试操作流", link: "/" },
        ],
    },
    {
        title: "独一无二的 Web Fuzzer 与 Fuzz 语法",
        img: ["../../static/img/home/third/fuzzer.png"],
        list: [
            {
                name: "使用 fuzz 语法可整合并同时代替 Repeater 与 Intruder ",
                link: "/",
            },
        ],
    },
    {
        title: "基于社区的高度插件化 ",
        img: [
            "../../static/img/home/third/plugin-1.png",
            "../../static/img/home/third/plugin-2.png",
        ],
        list: [
            {
                name: "用户可以在任何适合渗透测试最需要的步骤内执行自定义的 Yaklang 脚本或插件",
                link: "/",
            },
            { name: "插件仓库与插件商店机制为 “社区化” 助力", link: "/" },
        ],
    },
];

interface IntroduceKindProps {
    name: string;
    icon: string;
}
const IntroduceKinds: IntroduceKindProps[] = [
    { name: "高效", icon: "../../static/img/home/second/efficent-head.png" },
    {
        name: "函数级调用",
        icon: "../../static/img/home/second/function-head.png",
    },
    { name: "自动补全", icon: "../../static/img/home/second/doc-head.png" },
    { name: "高阶工具", icon: "../../static/img/home/second/tool-head.png" },
];

export const Home: React.FC<HomeProps> = (props) => {
    const [kind, setKind] = useState<IntroduceKindProps>({
        name: "高效",
        icon: "../../static/img/home/second/efficent-head.png",
    });
    // 滚动区域变化标识
    const [kindRate, setKindRate] = useState<number>(0);
    const [isRange, setIsRange] = useState<boolean>(false);
    const [isScrollUp, setIsScrollUp] = useState<boolean>(false);

    const oldScrollTop = useRef<number>(0);

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            if (!e.target) return;
            const target = e.target as Document;
            if (!target.scrollingElement) return;

            const html = target.scrollingElement as HTMLHtmlElement;
            const FontSize = +html.style.fontSize.split("px")[0];
            const scrollTop = html.scrollTop;

            // 判断滚动方向
            setIsScrollUp(oldScrollTop.current >= scrollTop);
            oldScrollTop.current = scrollTop;

            // 第一区域的高度+第二区域的padding-top高度(设计稿高度 )
            const first = (762 / 16) * FontSize;
            // 第二区域paddigTop、paddingBottom、每块区域高度
            const secondPaddingTop = (54 / 16) * FontSize;
            const secondBlock = ((950 - 54 - 200) / 16) * FontSize;
            // 第二区域总高度
            const second = (3734 / 16) * FontSize;

            const secondLevel = Math.trunc(
                (scrollTop - first - secondPaddingTop) / secondBlock
            );

            if (scrollTop <= first) {
                setIsRange(false);
            }
            if (scrollTop >= first + second) {
                setIsRange(false);
            }
            if (secondLevel > 3) return;
            if (scrollTop > first + secondPaddingTop) {
                setKindRate(
                    ((scrollTop - first - secondPaddingTop) % secondBlock) /
                        secondBlock
                );
                setKind(IntroduceKinds[secondLevel]);
                setIsRange(true);
            }
        });
    }, []);

    return (
        <div className="home-container">
            <div className="guide-body">
                <img
                    src="../../static/img/home/homeHeadBg.png"
                    className="guide-background-img"
                />
                <div className="guide-words-body">
                    <div className="guide-words-body-header">
                        网络安全领域的 DSL 最佳实践
                        <img
                            src="../../static/img/home/homeHeadCircular.png"
                            className="header-circle"
                        />
                        <img
                            src="../../static/img/home/homeHeadTitle.png"
                            className="header-title"
                        />
                    </div>
                    <div className="guide-words-body-description">
                        不管你是企业用户，还是白帽子，还是普通的安全从业人员，我们希望，Yak
                        会是你工作的好伙伴
                    </div>
                    <div className="guide-words-body-btn">
                        <DownLoadBtn />
                        <CourseDocBtn />
                    </div>
                </div>
            </div>

            <div className="introduce-body">
                <div className="sticky-content">
                    <div className="introduce-body-header">
                        <span className="introduce-body-header-orange">
                            北半球
                        </span>
                        <span className="introduce-body-header-line">
                            最强{" "}
                        </span>
                        Web 安全研发脚本语言
                    </div>

                    <div className="introduce-body-kinds">
                        {IntroduceKinds.map((item, index) => {
                            return (
                                <div
                                    key={item.name}
                                    className={`${
                                        kind.name === item.name
                                            ? "introduce-body-kinds-opt-selected"
                                            : ""
                                    } introduce-body-kinds-opt`}
                                    onClick={() => {
                                        setKind(item);
                                        const FontSize: number =
                                            +document.documentElement.style.fontSize.split(
                                                "px"
                                            )[0];
                                        window.scrollTo(
                                            0,
                                            ((762 + 54 + 696 * index + 140) /
                                                16) *
                                                FontSize
                                        );
                                    }}
                                >
                                    <img
                                        src={item.icon}
                                        className="kinds-opt-icon"
                                    />
                                    <div className="kinds-opt-name">
                                        {item.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="introduce-body-imgs">
                        <KindModules
                            name={kind.name}
                            rate={kindRate}
                            isRange={isRange}
                            isScrollUp={isScrollUp}
                        />
                        <img
                            src="../../static/img/home/second/kind-icon.png"
                            className="imgs-icon"
                        />
                    </div>
                </div>
            </div>

            <div className="function-body">
                <div className="function-body-header">
                    基于安全领域
                    <span className="function-body-header-line">最</span>
                    先进的
                    <span className="function-body-header-orange"> DSL</span>
                </div>

                <div className="function-body-description">
                    <div className="function-body-description-body">
                        专注于安全领域，使用 DSL(Domain-Specific Language)
                        模式提供安全领域能力基座和技术解决方案：漏洞扫描，反连检测，劫持手动测试，特殊协议支持...
                        一应俱全
                    </div>
                </div>

                <div className="function-body-module">
                    {FunctionData.map((item, index) => {
                        return (
                            <FunctionModule
                                key={item.title}
                                info={item}
                                isReversal={!!(index % 2)}
                            />
                        );
                    })}
                    <img
                        src="../../static/img/home/third/bg-console.png"
                        className="function-body-module-console"
                    />
                    <img
                        src="../../static/img/home/third/bg-setting.png"
                        className="function-body-module-setting"
                    />
                </div>
            </div>

            <div className="appraise-body">
                <div className="appraise-body-header">
                    立即开始
                    <span className="appraise-body-header-orange">
                        免费使用
                    </span>
                </div>

                <div className="appraise-body-description">
                    不管你是企业用户，还是白帽子，还是普通的安全从业人员，我们希望，Yak
                    会是你工作的好伙伴
                </div>

                <div className="appraise-body-btn">
                    <DownLoadBtn />
                    <CourseDocBtn />
                </div>

                <div style={{ marginTop: 64 }}>
                    <AppraiseInfoBody />
                </div>
            </div>
        </div>
    );
};

interface downloadInfoProps {
    name: string;
    link: string;
}
const DownLoadBtn = React.memo((props) => {
    const [varsion, setVersion] = useState<string>("");

    const downloadList: downloadInfoProps[] = [
        {
            name: "macOS",
            link: "darwin-x64.dmg",
        },
        {
            name: "macOS(M1)",
            link: "darwin-arm64.dmg",
        },
        {
            name: "Linux",
            link: "linux-amd64.AppImage",
        },
        {
            name: "Windows",
            link: "windows-amd64.exe",
        },
    ];

    const menu = (
        <Menu>
            {downloadList.map((item) => {
                return (
                    <Menu.Item key={item.name}>
                        <a
                            target="_blank"
                            href={`https://yaklang.oss-cn-beijing.aliyuncs.com/yak/${varsion}/Yakit-${varsion}-${item.link}`}
                        >
                            {item.name}
                        </a>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={["click"]}>
            <div className="download-yakit-btn">
                <div className="btn-title">
                    <DownloadOutlined className="icon-style" />
                    <span className="title-style">下载桌面端</span>
                </div>
                <div className="btn-cion">
                    <DownOutlined className="icon-style" />
                </div>
            </div>
        </Dropdown>
    );
});
const CourseDocBtn = React.memo((props) => {
    return (
        <a className="course-doc-btn" href="/docs/intro">
            <EyeOutlined className="icon-style" />
            <span className="title-style">查看基础教程</span>
        </a>
    );
});

interface KindModulesProps {
    name: string;
    rate: number;
    isRange: boolean;
    isScrollUp: boolean;
}
const KindModules = (props: KindModulesProps) => {
    const { name, rate, isRange, isScrollUp } = props;

    const efficent_count = useRef<number>(0);
    const efficent_1 = useRef(null);
    const efficent_2 = useRef(null);
    const efficent_3 = useRef(null);
    const efficent_4 = useRef(null);

    const function_count = useRef<number>(0);
    const function_img = useRef(null);
    const function_blue = useRef(null);
    const function_green = useRef(null);
    const function_yellow = useRef(null);
    const function_icon = useRef(null);
    const function_path = useRef(null);

    const doc_count = useRef<number>(0);
    const doc_img = useRef(null);
    const doc_blue = useRef(null);
    const doc_green = useRef(null);
    const doc_yellow = useRef(null);
    const doc_path = useRef(null);

    const tool_count = useRef<number>(0);
    const tool_img = useRef(null);
    const tool_green = useRef(null);

    const showAnimation = (
        div: HTMLDivElement,
        className: string,
        animation: string
    ) => {
        if (div.className.indexOf(`animate__animated ${animation}`) > -1)
            return;
        div.className = `${className} opacity-1 animate__animated ${animation}`;
    };

    const hideAnimation = (div: HTMLDivElement, className: string) => {
        if (div.className.indexOf(`animate__animated animate__fadeOut`) > -1)
            return;
        div.className =
            className + " opacity-0 animate__animated animate__fadeOut";
    };

    const efficentShow = () => {
        setTimeout(() => {
            if (!efficent_1 || !efficent_1.current) return;
            const div = efficent_1.current as unknown as HTMLDivElement;
            showAnimation(div, "efficent-img-1", "animate__backInLeft");
        }, 0);
        setTimeout(() => {
            if (!efficent_2 || !efficent_2.current) return;
            const div = efficent_2.current as unknown as HTMLDivElement;
            showAnimation(div, "efficent-img-2", "animate__backInDown");
        }, 100);

        setTimeout(() => {
            if (!efficent_3 || !efficent_3.current) return;
            const div = efficent_3.current as unknown as HTMLDivElement;
            showAnimation(div, "efficent-img-3", "animate__backInUp");
        }, 200);
        setTimeout(() => {
            if (!efficent_4 || !efficent_4.current) return;
            const div = efficent_4.current as unknown as HTMLDivElement;
            showAnimation(div, "efficent-img-4", "animate__backInRight");
        }, 300);
    };
    const efficentHide = () => {
        if (!efficent_1 || !efficent_1.current) return;
        const div_1 = efficent_1.current as unknown as HTMLDivElement;
        hideAnimation(div_1, "efficent-img-1");

        if (!efficent_2 || !efficent_2.current) return;
        const div_2 = efficent_2.current as unknown as HTMLDivElement;
        hideAnimation(div_2, "efficent-img-2");

        if (!efficent_3 || !efficent_3.current) return;
        const div_3 = efficent_3.current as unknown as HTMLDivElement;
        hideAnimation(div_3, "efficent-img-3");

        if (!efficent_4 || !efficent_4.current) return;
        const div_4 = efficent_4.current as unknown as HTMLDivElement;
        hideAnimation(div_4, "efficent-img-4");
    };
    const functionShow = () => {
        setTimeout(() => {
            if (!function_img || !function_img.current) return;
            const div = function_img.current as unknown as HTMLDivElement;
            showAnimation(div, "function-img-function", "animate__zoomIn");
        }, 0);
        setTimeout(() => {
            if (!function_blue || !function_blue.current) return;
            const div = function_blue.current as unknown as HTMLDivElement;
            showAnimation(div, "function-img-blue", "animate__zoomIn");
        }, 200);
        setTimeout(() => {
            if (!function_green || !function_green.current) return;
            const div = function_green.current as unknown as HTMLDivElement;
            showAnimation(div, "function-img-green", "animate__zoomIn");
        }, 300);
        setTimeout(() => {
            if (!function_yellow || !function_yellow.current) return;
            const div = function_yellow.current as unknown as HTMLDivElement;
            showAnimation(div, "function-img-yellow", "animate__zoomIn");
        }, 400);
        setTimeout(() => {
            if (!function_icon || !function_icon.current) return;
            const div = function_icon.current as unknown as HTMLDivElement;
            showAnimation(div, "function-img-icon", "animate__zoomIn");
        }, 500);
        setTimeout(() => {
            if (!function_path || !function_path.current) return;
            const div = function_path.current as unknown as HTMLDivElement;
            showAnimation(div, "function-img-path", "animate__zoomIn");
        }, 700);
    };
    const functionHide = () => {
        if (!function_img || !function_img.current) return;
        const div_img = function_img.current as unknown as HTMLDivElement;
        hideAnimation(div_img, "function-img-function");

        if (!function_blue || !function_blue.current) return;
        const div_blue = function_blue.current as unknown as HTMLDivElement;
        hideAnimation(div_blue, "function-img-blue");

        if (!function_green || !function_green.current) return;
        const div_green = function_green.current as unknown as HTMLDivElement;
        hideAnimation(div_green, "function-img-green");

        if (!function_yellow || !function_yellow.current) return;
        const div_yellow = function_yellow.current as unknown as HTMLDivElement;
        hideAnimation(div_yellow, "function-img-yellow");

        if (!function_icon || !function_icon.current) return;
        const div_icon = function_icon.current as unknown as HTMLDivElement;
        hideAnimation(div_icon, "function-img-icon");

        if (!function_path || !function_path.current) return;
        const div_path = function_path.current as unknown as HTMLDivElement;
        hideAnimation(div_path, "function-img-path");
    };
    const docShow = () => {
        setTimeout(() => {
            if (!doc_img || !doc_img.current) return;
            const div = doc_img.current as unknown as HTMLDivElement;
            showAnimation(div, "doc-img-doc", "animate__zoomIn");
        }, 0);
        setTimeout(() => {
            if (!doc_blue || !doc_blue.current) return;
            const div = doc_blue.current as unknown as HTMLDivElement;
            showAnimation(div, "doc-img-blue", "animate__zoomIn");
        }, 200);
        setTimeout(() => {
            if (!doc_green || !doc_green.current) return;
            const div = doc_green.current as unknown as HTMLDivElement;
            showAnimation(div, "doc-img-green", "animate__zoomIn");
        }, 350);
        setTimeout(() => {
            if (!doc_yellow || !doc_yellow.current) return;
            const div = doc_yellow.current as unknown as HTMLDivElement;
            showAnimation(div, "doc-img-yellow", "animate__zoomIn");
        }, 500);
        setTimeout(() => {
            if (!doc_path || !doc_path.current) return;
            const div = doc_path.current as unknown as HTMLDivElement;
            showAnimation(div, "doc-img-path", "animate__zoomIn");
        }, 700);
    };
    const docHide = () => {
        if (!doc_img || !doc_img.current) return;
        const div_img = doc_img.current as unknown as HTMLDivElement;
        hideAnimation(div_img, "doc-img-doc");

        if (!doc_blue || !doc_blue.current) return;
        const div_blue = doc_blue.current as unknown as HTMLDivElement;
        hideAnimation(div_blue, "doc-img-blue");

        if (!doc_green || !doc_green.current) return;
        const div_green = doc_green.current as unknown as HTMLDivElement;
        hideAnimation(div_green, "doc-img-green ");

        if (!doc_yellow || !doc_yellow.current) return;
        const div_yellow = doc_yellow.current as unknown as HTMLDivElement;
        hideAnimation(div_yellow, "doc-img-yellow");

        if (!doc_path || !doc_path.current) return;
        const div_path = doc_path.current as unknown as HTMLDivElement;
        hideAnimation(div_path, "doc-img-path");
    };
    const toolShow = () => {
        setTimeout(() => {
            if (!tool_img || !tool_img.current) return;
            const div = tool_img.current as unknown as HTMLDivElement;
            showAnimation(div, "tool-img-tool", "animate__zoomIn");
        }, 0);
        setTimeout(() => {
            if (!tool_green || !tool_green.current) return;
            const div = tool_green.current as unknown as HTMLDivElement;
            showAnimation(div, "tool-img-green", "animate__zoomIn");
        }, 200);
    };
    const toolHide = () => {
        if (!tool_img || !tool_img.current) return;
        const div_img = tool_img.current as unknown as HTMLDivElement;
        hideAnimation(div_img, "tool-img-tool");

        if (!tool_green || !tool_green.current) return;
        const div_green = tool_green.current as unknown as HTMLDivElement;
        hideAnimation(div_green, "tool-img-green");
    };

    useEffect(() => {
        if (name === "高效") {
            if (isScrollUp) {
                if (
                    rate <= 0.8 &&
                    rate > 0.05 &&
                    isRange &&
                    efficent_count.current === 0
                ) {
                    efficent_count.current = 1;
                    efficentShow();
                }
                if (rate <= 0.05 || !isRange) {
                    efficent_count.current = 0;
                    efficentHide();
                }
            } else {
                if (
                    rate >= 0.2 &&
                    rate < 0.85 &&
                    isRange &&
                    efficent_count.current === 0
                ) {
                    efficent_count.current = 1;
                    efficentShow();
                }
                if (rate >= 0.85 && isRange) {
                    efficent_count.current = 0;
                    efficentHide();
                }
            }
        }
        if (name === "函数级调用") {
            if (isScrollUp) {
                if (
                    rate <= 0.8 &&
                    rate > 0.05 &&
                    isRange &&
                    function_count.current === 0
                ) {
                    function_count.current = 1;
                    functionShow();
                }
                if (rate <= 0.05 && isRange) {
                    function_count.current = 0;
                    functionHide();
                }
            } else {
                if (
                    rate >= 0.2 &&
                    rate < 0.85 &&
                    isRange &&
                    function_count.current === 0
                ) {
                    function_count.current = 1;
                    functionShow();
                }
                if (rate >= 0.85 && isRange) {
                    function_count.current = 0;
                    functionHide();
                }
            }
        }
        if (name === "自动补全") {
            if (isScrollUp) {
                if (
                    rate <= 0.8 &&
                    rate > 0.05 &&
                    isRange &&
                    doc_count.current === 0
                ) {
                    doc_count.current = 1;
                    docShow();
                }
                if (rate <= 0.05 && isRange) {
                    doc_count.current = 0;
                    docHide();
                }
            } else {
                if (
                    rate >= 0.2 &&
                    rate < 0.85 &&
                    isRange &&
                    doc_count.current === 0
                ) {
                    doc_count.current = 1;
                    docShow();
                }
                if (rate >= 0.85 && isRange) {
                    doc_count.current = 0;
                    docHide();
                }
            }
        }
        if (name === "高阶工具") {
            if (isScrollUp) {
                if (
                    rate <= 0.8 &&
                    rate > 0.05 &&
                    isRange &&
                    tool_count.current === 0
                ) {
                    tool_count.current = 1;
                    toolShow();
                }
                if (rate <= 0.05 && isRange) {
                    tool_count.current = 0;
                    toolHide();
                }
            } else {
                if (
                    rate >= 0.1 &&
                    rate < 0.85 &&
                    isRange &&
                    tool_count.current === 0
                ) {
                    tool_count.current = 1;
                    toolShow();
                }
                if (rate >= 0.85 || !isRange) {
                    tool_count.current = 0;
                    toolHide();
                }
            }
        }
    }, [name, rate, isRange, isScrollUp]);

    if (name === "高效") {
        return (
            <div className="kind-opt-body">
                <div className="efficent-img">
                    <div ref={efficent_1} className="efficent-img-1 opacity-0">
                        <div className="efficent-img-content">
                            <div className="efficent-img-content-title">
                                Golang
                            </div>
                            <div className="efficent-img-content-text">
                                Go 是谷歌支持的开源编程语言
                            </div>
                        </div>
                    </div>
                    <div ref={efficent_2} className="efficent-img-2 opacity-0">
                        <div className="efficent-img-content">
                            <div className="efficent-img-content-title">
                                Yaklang
                            </div>
                            <div className="efficent-img-content-text">
                                可能是安全领域最先进的 DSL (Domain-Specific
                                Language)
                            </div>
                            <img
                                src="../../static/img/home/second/efficent-1-2.png"
                                className="efficent-1-2"
                            />
                        </div>
                    </div>
                    <div ref={efficent_3} className="efficent-img-3 opacity-0">
                        <div className="efficent-img-content">
                            <div className="efficent-img-content-title">
                                JVM Based Lang
                            </div>
                            <div className="efficent-img-content-text">
                                可能是安全领域最先进的 DSL (Domain-Specific
                                Language)
                            </div>
                            <img
                                src="../../static/img/home/second/efficent-2-3.png"
                                className="efficent-2-3"
                            />
                        </div>
                    </div>
                    <div ref={efficent_4} className="efficent-img-4 opacity-0">
                        <div className="efficent-img-content">
                            <div className="efficent-img-content-title">
                                Python
                            </div>
                            <div className="efficent-img-content-text">
                                Life is short, use Python.
                            </div>
                            <img
                                src="../../static/img/home/second/efficent-3-4.png"
                                className="efficent-3-4"
                            />
                        </div>
                    </div>
                    <div className="img-body-filter-bg-blue"></div>
                    <div className="img-body-filter-bg-green"></div>
                </div>

                <div className="kind-opt-body-title">
                    <div className="kind-opt-body-title-content">
                        <span>运行时效率极高</span>
                        <br />
                        <span className="content-orange">Runtime Efficent</span>
                    </div>
                    <div className="kind-opt-body-title-subtitle">{`Golang ≈ Yaklang ≥ JVM Based Lang >> Python`}</div>
                </div>
            </div>
        );
    }

    if (name === "函数级调用") {
        return (
            <div className="kind-opt-body">
                <div className="function-img">
                    <img
                        ref={function_img}
                        src="../../static/img/home/second/function.png"
                        className="function-img-function opacity-0"
                    />
                    <img
                        ref={function_blue}
                        src="../../static/img/home/second/function-blue.png"
                        className="function-img-blue opacity-0"
                    />
                    <img
                        ref={function_green}
                        src="../../static/img/home/second/function-green.png"
                        className="function-img-green opacity-0"
                    />
                    <img
                        ref={function_yellow}
                        src="../../static/img/home/second/function-yellow.png"
                        className="function-img-yellow opacity-0"
                    />
                    <img
                        ref={function_icon}
                        src="../../static/img/home/second/function-icon.png"
                        className="function-img-icon opacity-0"
                    />
                    <img
                        ref={function_path}
                        src="../../static/img/home/second/function-path.png"
                        className="function-img-path opacity-0"
                    />
                    <div className="img-body-filter-bg-blue"></div>
                    <div className="img-body-filter-bg-green"></div>
                </div>

                <div className="kind-opt-body-title">
                    <div className="kind-opt-body-title-content">
                        <span>安全工具的语言级集成与</span>
                        <span className="content-orange">函数级调用</span>
                    </div>
                    <div className="kind-opt-body-title-subtitle">{`请补充`}</div>
                </div>
            </div>
        );
    }

    if (name === "自动补全") {
        return (
            <div className="kind-opt-body">
                <div className="doc-img">
                    <img
                        ref={doc_img}
                        src="../../static/img/home/second/doc.png"
                        className="doc-img-doc opacity-0"
                    />
                    <img
                        ref={doc_blue}
                        src="../../static/img/home/second/doc-blue.png"
                        className="doc-img-blue opacity-0"
                    />
                    <img
                        ref={doc_green}
                        src="../../static/img/home/second/doc-green.png"
                        className="doc-img-green opacity-0"
                    />
                    <img
                        ref={doc_yellow}
                        src="../../static/img/home/second/doc-yellow.png"
                        className="doc-img-yellow opacity-0"
                    />
                    <img
                        ref={doc_path}
                        src="../../static/img/home/second/doc-path.png"
                        className="doc-img-path opacity-0"
                    />
                    <div className="img-body-filter-bg-blue"></div>
                    <div className="img-body-filter-bg-green"></div>
                </div>

                <div className="kind-opt-body-title">
                    <div className="kind-opt-body-title-content">
                        <span className="content-orange">自动补全</span>
                        与完善的官方文档为编写助力
                    </div>
                    <div className="kind-opt-body-title-subtitle">
                        <span>
                            <span className="subtitle-doc">/</span> 与 vscode
                            兼容的自动补全插件辅助用户快速上手
                        </span>
                        <br />
                        <span>
                            <span className="subtitle-doc">/</span>{" "}
                            完善的官网文档提供对所有“可用武器”的指导
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    if (name === "高阶工具") {
        return (
            <div className="kind-opt-body">
                <div className="tool-img">
                    <img
                        ref={tool_img}
                        src="../../static/img/home/second/tool.png"
                        className="tool-img-tool opacity-0"
                    />
                    <img
                        ref={tool_green}
                        src="../../static/img/home/second/tool-green.png"
                        className="tool-img-green opacity-0"
                    />
                    <div className="img-body-filter-bg-blue"></div>
                    <div className="img-body-filter-bg-green"></div>
                </div>

                <div className="kind-opt-body-title">
                    <div className="kind-opt-body-title-content">
                        <span>函数级</span>
                        <br />
                        <span className="content-orange">高阶安全工具</span>集成
                    </div>
                    <div className="kind-opt-body-title-subtitle">
                        <span>
                            <span className="subtitle-doc">/ </span>
                            多种协议反连平台集成：
                        </span>
                        <br />
                        <span className="subtitle-tool">
                            &nbsp;&nbsp;HTTP / RMI / LDAP 多协议复用
                        </span>
                        <br />
                        <span className="subtitle-tool">
                            &nbsp;&nbsp;TCP 随机端口(专利技术) / ICMP 反连 /
                            内置 DNSLog API
                        </span>
                        <br />
                        <span>
                            <span className="subtitle-doc">/ </span>
                            MITM 劫持平台集成与热加载结合(专利技术)
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return <div></div>;
};

interface functionModuleProps {
    info: FunctionDataProps;
    isReversal: boolean;
}
const FunctionModule = React.memo((props: functionModuleProps) => {
    const {
        info: { title, img, list },
        isReversal,
    } = props;

    const [index, setIndex] = useState<number>(0);

    return (
        <div className="function-module-body">
            {!isReversal ? (
                <div className="module-img">
                    <img src={img[index]} className="module-img-style" />
                </div>
            ) : (
                <div className="module-list">
                    <div className="module-list-header">{title}</div>

                    <div className="module-list-body">
                        {list.map((item, i) => {
                            if (i === index) {
                                return (
                                    <div
                                        key={i}
                                        className="module-list-body-opt-selected"
                                    >
                                        <div className="selected-title">
                                            {item.name}
                                        </div>
                                        <a
                                            className="selected-doc-icon"
                                            href={item.link}
                                        >
                                            <ArrowRightOutlined className="icon-style" />
                                            <div className="icon-title">
                                                查看文档
                                            </div>
                                        </a>
                                    </div>
                                );
                            }
                            return (
                                <div
                                    key={i}
                                    className="module-list-body-opt"
                                    onMouseEnter={() => setIndex(i)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {isReversal ? (
                <div className="module-img">
                    <img src={img[index]} className="module-img-style" />
                </div>
            ) : (
                <div className="module-list">
                    <div className="module-list-header">{title}</div>

                    <div className="module-list-body">
                        {list.map((item, i) => {
                            if (i === index) {
                                return (
                                    <div
                                        key={i}
                                        className="module-list-body-opt-selected"
                                    >
                                        <div className="selected-title">
                                            {item.name}
                                        </div>
                                        <a
                                            className="selected-doc-icon"
                                            href={item.link}
                                        >
                                            <ArrowRightOutlined className="icon-style" />
                                            <div className="icon-title">
                                                查看文档
                                            </div>
                                        </a>
                                    </div>
                                );
                            }
                            return (
                                <div
                                    key={i}
                                    className="module-list-body-opt"
                                    onMouseEnter={() => setIndex(i)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
});

interface AppraiseInfoProps {
    name: string;
    img: string;
    appraise: React.ReactNode;
}
const AppraiseInfoList: AppraiseInfoProps[] = [
    {
        name: "ykc",
        img: "../../static/img/team/ykc.jpg",
        appraise: (
            <>
                安全问题没有绝对的解决范式，但
                <span className="appraise-content-key-point">
                    Yak创造了足够的可能性
                </span>
                ，让我们可以
                <span className="appraise-content-key-point">
                    在巨人的肩膀上发挥想象力
                </span>
                。其构思的视野和高度值得我们学习与思考。
            </>
        ),
    },
    {
        name: "kio",
        img: "../../static/img/home/kio.jpeg",
        appraise: (
            <>
                Yakit在我心中是一款能够自己改造的安全测试框架，非常适合有一定动手能力的安全从业者利用它去
                <span className="appraise-content-key-point">
                    打造属于自己的利刃
                </span>
                。
            </>
        ),
    },
    {
        name: "和你",
        img: "../../static/img/home/和你.jpeg",
        appraise: (
            <>
                Yak这个构思能大量
                <span className="appraise-content-key-point">
                    减轻安全从业者的环境配置的负担
                </span>
                ，而且各种插件对于渗透测试工作能够做到很大的优化。祝Yak在国产化安全软件中越做越好。
            </>
        ),
    },
    {
        name: "P0m32Kun",
        img: "../../static/img/home/P0m32Kun.jpeg",
        appraise: (
            <>
                初次接触Yak是在2021年低，那时群里还没有多少人，伴随着开发者们的努力，不断的收集、整理、添加、修改用户提出的各种问题与需求，官网中各种文档逐步完善，Yakit用起来也越来越顺手，渐渐感受到了这是个
                <span className="appraise-content-key-point">有温度的团队</span>
                。<br />
                我开始认为Yakit出现的部分原因是摆脱安全人员使用国外破解软件，但给我印象最深的还是在今年一些紧张的国际形势中。那么多公司带着他们的产品纷纷站队，如果不未雨绸缪，未来的某一天我们会面临相同的境遇。最后
                <span className="appraise-content-key-point">
                    希望Yak一如既往的茁壮成长
                </span>
                ，也希望更多的安全从业者
                <span className="appraise-content-key-point">
                    加入国产化的建设中
                </span>
                。
            </>
        ),
    },
    {
        name: "18 Xtreme",
        img: "../../static/img/home/18Xtreme.jpeg",
        appraise: (
            <>
                首先不得不提一句，Yakit的作者们是
                <span className="appraise-content-key-point">
                    真的热情又尽责
                </span>
                ，有啥问题都能得到解答，特别是V神，与他沟通中学到了很多的东西，其次Yakit的模式真的很不错，服务端和控制台分开让小组渗透更方便，最后
                <span className="appraise-content-key-point">
                    祝Yakit越来越好
                </span>
                ，成为全球最强工具 ！
            </>
        ),
    },
    {
        name: "国产大熊猫",
        img: "../../static/img/team/国产大熊猫.jpeg",
        appraise: (
            <>
                Yakit是一款优秀的
                <span className="appraise-content-key-point">
                    国产web渗透工具
                </span>
                ，从设计之初就让人爱不释手。作为一名发烧使用者，我可以在每一个使用细节充分的感受到：开发团队对于打造一款贴近渗透人员使用舒适度的匠人精神。从web渗透的前期探测、fuzz参数、poc验证等等，yakit就
                <span className="appraise-content-key-point">
                    像一位战友陪伴在身边
                </span>
                。
                <br />
                Yakit社区活跃，开发团队充分听取各方面建议，不断的迭代产品，我相信会成为web渗透领域人手一份的攻击利器！
            </>
        ),
    },
    {
        name: "CF_HB",
        img: "../../static/img/home/CF_HB.jpeg",
        appraise: (
            <>
                2022了给大家强烈安利一个
                <span className="appraise-content-key-point">
                    令我爱不释手的挖洞神器
                </span>
                ——Yakit。维护的师傅们人又好，技术又强，孜孜不倦地打造新的功能。
                <br />
                Yakit绝对是一个只有你想不到，没有它实现不了的神器。希望Yakit早日替代Burp，这一回我
                <span className="appraise-content-key-point">支持国产神器</span>
                ~Yakit
            </>
        ),
    },
    {
        name: "wooluo",
        img: "../../static/img/home/wooluo.jpeg",
        appraise: (
            <>
                产品设计初衷非常好，作为
                <span className="appraise-content-key-point">
                    国产渗透中单兵作业工具
                </span>
                ，把一些实用的插件加到平台中，并且对使用者开放接口，随时可以增加自己所需的插件或规则，同时贴心的兼容了nuclei的规则，是个不可多得的好工具，
                <span className="appraise-content-key-point">
                    代替BurpSuite的不二首选
                </span>
                ，推荐使用！
            </>
        ),
    },
    {
        name: "Vanilla",
        img: "../../static/img/team/Vanilla.jpeg",
        appraise: (
            <>
                和V1ll4n表哥相识是因为他早期开发的SIEM，将各种安全能力进行融合，作为一名甲方安全从业者，但是对于他提出的高位安全和低位安全的概念很赞同，后来Yakit横空出世，让我看到了之前SIEM概念的延伸，看到了
                <span className="appraise-content-key-point">更多的可能性</span>
                。通过Yak语言完备的生态和兼容性来解决安全能力建设的问题。随着Yakit安全社区的壮大和更多的同行者参与进来，使得Yakit的功能越来越完善，在我看来
                <span className="appraise-content-key-point">
                    Yakit是一个没有上限的安全工具
                </span>
                ，他提供了一个基座，给了安全从业人员
                <span className="appraise-content-key-point">
                    自由发挥的空间
                </span>
                。最后的最后，V1ll4n这人改Bug贼快，能处。
            </>
        ),
    },
    {
        name: "ttStorm",
        img: "../../static/img/home/ttStorm.jpeg",
        appraise: (
            <>
                选择Yakit的3个理由
                <br />
                1.Yakit颜值超高，简洁的logo，
                <span className="appraise-content-key-point">简洁的界面</span>
                ，完美本身就是强大的证明
                <br />
                2.劳模V神还有一众Yakit大佬还有社区大表哥们，
                <span className="appraise-content-key-point">高强度更新</span>
                ，1天更新18个版本，任何人手里都没有最新版本，Yakit短时间就从烟花成长为一个丰富完善致命的核武器
                <br />
                3.Yak团队是一个友善、富有活力、
                <span className="appraise-content-key-point">
                    具有高度执行力
                </span>
                的团队，你可以一直相信Yak
                <br />
            </>
        ),
    },
    {
        name: "酒零",
        img: "../../static/img/home/酒零.jpeg",
        appraise: (
            <>
                渗透工具的底层数据融合是安全工具发展的必然趋势，测试工具
                <span className="appraise-content-key-point">
                    可定制化和扩展性
                </span>
                是每一个高级渗透工程师的基本需求，优秀的界面交互让一个工具能够快速广泛运用的催化剂。对于实现一个
                <span className="appraise-content-key-point">
                    覆盖渗透测试全流程工具
                </span>
                ，需要全面了解分析渗透测试过程中的各个阶段。
                然而，这是一个及其庞大且长期的项目，它们需要：
                <br />
                1、熟悉渗透测试流程和交互设计的coder
                <br />
                2、能无条件支持这个项目的company，
                <br />
                3、时刻响应用户需求和建议的Operation
                <br />
                Yaikit项目正是基于这个目的而萌发的，并且拥有着实现这个长期项目的条件，希望大家能够使用它并提出自己的修复和优化建议，
                <span className="appraise-content-key-point">
                    让这个项目更完善更优秀
                </span>
                。
            </>
        ),
    },
    {
        name: "key@OverSpace",
        img: "../../static/img/home/key@OverSpace.jpeg",
        appraise: (
            <>
                对于我来说，Yak是一门优秀的融合型语言，它具备极强的安全开发属性，你可以使用它进行高效的安全类脚本、平台、工具的开发；Yak项目方不仅开发了Yak这一门优秀的语言，还很贴心的基于Yak开发了Yakit单兵作战平台提供给安全从业人员使用；Yakit的诞生实际上是
                <span className="appraise-content-key-point">
                    完成了某种意义上的“大一统”
                </span>
                ，将诸多能力集于一身，避免了在不同的工具间来回的切换以及相互间的兼容和适配，虽然它并不是BurpSuite的竞品，但它与BurpSuite有着诸多类似功能，却比BurpSuite更加实用，例如Web
                Fuzz功能就做了很好的创新，将真正的Fuzz思想带到了Web安全中，也从某一程度来说减少了很多不必要的字典收集工作。
                <br />
                Yak项目方做了一个很大胆的尝试，这是很多人不敢做的，并且会花费大量的人力投入，这让我十分倾佩，同时也给予我很大的鼓舞。相信Yak、Yakit
                <span className="appraise-content-key-point">
                    在未来可以走出属于自己的道路
                </span>
                ，加油，未来可期！
            </>
        ),
    },
    {
        name: "奶权",
        img: "../../static/img/team/naiquan.jpeg",
        appraise: (
            <>
                Yakit是一款非常好用的网络单兵作战工具，其包含了burpsuite使用最频繁的功能，并在此之上做了自己的创新。其中Web
                Fuzzer标签功能
                <span className="appraise-content-key-point">
                    极大提高了渗透测试人员的上限
                </span>
                ，使得在渗透测试过程中有更多可能也更加方便。得益于Yakit的基座yaklang的强大实力与和golang相似的语法，用户可以用更简单的代码对mitm进行hook，
                <span className="appraise-content-key-point">
                    实现多种多样的插件功能
                </span>
                。
            </>
        ),
    },
    {
        name: "sharecast",
        img: "../../static/img/home/sharecast.jpeg",
        appraise: (
            <>
                Yakit是一款年轻的综合的且具有
                <span className="appraise-content-key-point">
                    一线攻防实践经验的平台
                </span>
                ，将出色的攻击实践经验工程化，为一线的攻防人员提供了很大便利，但UI和细节打磨仍需不断提升，希望Yakit越来越好！
            </>
        ),
    },
    {
        name: "影舞者",
        img: "../../static/img/home/影舞者.jpeg",
        appraise: (
            <>
                扫描接口很
                <span className="appraise-content-key-point">便捷</span>，内置的
                <span className="appraise-content-key-point">
                    动态解析Yak脚本
                </span>
                也很高级，大哥真猛
            </>
        ),
    },
    {
        name: "TimWhite",
        img: "../../static/img/team/timwhite.png",
        appraise: (
            <>
                对于Yakit/Yak这个项目，早期我更多的是好奇Yak这个安全脚本语言的具体实现方式，
                <br />
                但是在使用过程中发现，
                <span className="appraise-content-key-point">
                    插件化的设计，Yak内置的安全相关函数配合上Yakit的gui
                </span>
                ，三者相结合是这个项目的亮点。
                <br />
                由于项目发展时间较短，难免存在设计上的bug，但是作者V1ll4n的更新频率高的可怕。
            </>
        ),
    },
    {
        name: "Alex-null",
        img: "../../static/img/team/Alex-null.jpeg",
        appraise: (
            <>
                Yak是目前看到的
                <span className="appraise-content-key-point">
                    国内最优秀的安全能力底座
                </span>
                ，花了很多心思在
                <span className="appraise-content-key-point">
                    多源数据异构化
                </span>
                上，让安全从业人员能真正专注于解决安全问题上。
            </>
        ),
    },
    {
        name: "六月初七",
        img: "../../static/img/home/六月初七.jpeg",
        appraise: (
            <>
                总体来说，很喜欢这款工具，可扫描端口，可探测漏洞，还能爆破口令，
                <span className="appraise-content-key-point">
                    集成了多种功能
                </span>
                ，使用方便，大大提高了工作效率。Yakit不对标burp，但是具备了burp的好多功能，
                <span className="appraise-content-key-point">
                    将常用的渗透测试的功能
                </span>
                集合到一起，一站购齐。师傅们也可以利用Yakit的部分自定义功能打造自己专属的渗透利器。
                <br />
                Yakit做了好多人不敢做的事，也
                <span className="appraise-content-key-point">
                    希望Yakit能做到别人做不到事
                </span>
                。
            </>
        ),
    },
    {
        name: "小米粥",
        img: "../../static/img/home/小米粥.jpeg",
        appraise: (
            <>
                在我眼里Yak的意义是远远大于Yakit的，Yakit只不过是Yak对于
                <span className="appraise-content-key-point">
                    安全所需场景的功能实现合集
                </span>
                而已，从Yakit的开源一直到现在不断的实现更多的安全需求场景的覆盖，能让我清楚地感觉到Yak确实像当初介绍文档中所说的一直再向安全人员们证明
                <span className="appraise-content-key-point">
                    Yak确实是安全领域内最适用的语言
                </span>
                ，也一直让人们期待他真的是可以
                <span className="appraise-content-key-point">
                    成为安全的"基座"
                </span>
                ，Yakit目前对我来说最惊艳的其实是反连平台的场景扩展，期间也一直在和v神聊关于oast检测模型更多的扩展面，自己当前也有实现并尝试去做一款类似功能产品。在自己项目实现过程当中也会感觉Yakit关于反连这部分的发展方向与自己所做的是在不断地相互验证，也能体会到做一款让自己和别人都满意的产品是一件多么困难的事情，总的来说，我很
                <span className="appraise-content-key-point">
                    期待也很希望Yak未来在安全领域能有更多的安全需求场景的覆盖的实现
                </span>
                。
            </>
        ),
    },
    {
        name: "李大壮'",
        img: "../../static/img/home/李大壮.jpeg",
        appraise: (
            <>
                初次接触Yak就被Yak团队的愿景打动了。作为一门安全领域的脚本语言。Yak
                <span className="appraise-content-key-point">
                    集成了常见的安全能力
                </span>
                ，前段时间测试了一个测试流程，稍加学习，便按照自己的想法快速设计出一套检测流程。作为官方实现的
                Yakit
                提供了很多实用的工具如mitm,codec专项漏洞检测。Yakit目前还处于快速开发状态，微信社区相当活跃
                <span className="appraise-content-key-point">
                    许多有趣的技术和想法也在落地
                </span>
                ，官方对于bug修复和功能迭代特别快特别快。由衷祝愿 Yak
                生态和社区越来越强大，
                <span className="appraise-content-key-point">
                    成为安全领域的matlab
                </span>
                。
            </>
        ),
    },
];

interface AppraiseCardProps {
    info: AppraiseInfoProps;
    isSelected: boolean;
}
const AppraiseCard = React.memo((props: AppraiseCardProps) => {
    const {
        info: { name, img },
        isSelected,
    } = props;

    return (
        <div
            className={`appraise-card ${
                isSelected ? "appraise-card-selected" : ""
            }`}
        >
            <img src={img} className="appraise-card-img" />
            <div className="appraise-card-name">{name}</div>
        </div>
    );
});

const AppraiseInfoBody = React.memo(() => {
    const [info, setInfo] = useState<AppraiseInfoProps>({
        name: "ykc",
        img: "../../static/img/team/ykc.jpg",
        appraise:
            "安全问题没有绝对的解决范式，但yak创造了足够的可能性，让我们可以在巨人的肩膀上发挥想象力。其构思的视野和高度值得我们学习与思考。",
    });

    const [swiper, setSwiper] = useState<any>(null);
    const isContent = useRef<boolean>(false);

    // 判断展示评语高度是否溢出
    const [flag, setFlag] = useState<boolean>(false);
    const divRef = useRef(null);

    const jump = useCallback(
        (index: number) => {
            swiper.slideToLoop(index === 0 ? 20 - 1 : index - 1, 1000);
        },
        [swiper]
    );

    return (
        <div className="appraise-info-body">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={"auto"}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: false,
                }}
                onSlideChange={(swiper) => {
                    setSwiper(swiper);
                    if (info.name === AppraiseInfoList[swiper.realIndex].name)
                        return;
                    setInfo(AppraiseInfoList[swiper.realIndex]);
                    setTimeout(() => {
                        if (!divRef || !divRef.current) return;
                        const div = divRef.current as unknown as HTMLDivElement;
                        setFlag(div.offsetHeight < div.scrollHeight);
                    }, 100);
                }}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {AppraiseInfoList.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={item.name}
                            onClick={() => jump(index)}
                        >
                            <AppraiseCard
                                info={item}
                                isSelected={info.name === item.name}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="appraise-content">
                <div
                    className="appraise-content-body"
                    onMouseEnter={() => {
                        isContent.current = true;
                        swiper.autoplay.stop();
                    }}
                    onMouseLeave={() => {
                        isContent.current = false;
                        swiper.autoplay.start();
                    }}
                >
                    <div className="appraise-content-body-header">
                        {info.name}
                    </div>
                    <div className="appraise-content-body-comments">
                        <div className="comments-div-style">
                            <div ref={divRef} className="comments-style">
                                {info.appraise}
                            </div>
                            {flag && (
                                <Popover
                                    overlayClassName="popover-appraise-comments"
                                    placement="top"
                                    content={
                                        <div className="appraise-comments">
                                            {info.appraise}
                                        </div>
                                    }
                                >
                                    <div className="comments-ellipsis">...</div>
                                </Popover>
                            )}
                        </div>
                        <img
                            src="../../static/img/home/comma-1.png"
                            className="comments-up-style"
                        />
                        <img
                            src="../../static/img/home/comma-2.png"
                            className="comments-down-style"
                        />
                    </div>
                </div>
            </div>

            <div className="propagate-video">
                {/* @ts-ignore */}
                <ReactPlayer
                    url={[
                        "https://yaklang.oss-cn-beijing.aliyuncs.com/yak_quick_view_1.5.mp4",
                    ]}
                    loop={true}
                    playsinline={true}
                    controls={false}
                    playing={true}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
        </div>
    );
});
