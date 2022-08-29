import React, { useEffect, useRef, useState } from "react";
import { Popover } from "antd";
import { PhoneSvgIcon, WechatSvgIcon } from "./icons";
import { QrcodeOutlined, DownloadOutlined } from "@ant-design/icons";
import { SelectedSvgIcon } from "./cooperateIcon";

export interface EnterpriseCollaborationPageProps {}

interface IntroduceKindProps {
    name: string;
    icon: string;
}

interface DeclareModuleProps {
    img: string;
    content: React.ReactNode;
    color: string;
    bgColor: string;
}
const DeclareModule: DeclareModuleProps[] = [
    {
        img: require("../../static/img/cooperation/declare-1.png").default,
        content: (
            <div className="module-opt-title">
                Yakit 社区版<span className="module-opt-theme-title">持续更新迭代</span>
            </div>
        ),
        color: "#FF7D23",
        bgColor: "#FFF8F4",
    },
    {
        img: require("../../static/img/cooperation/declare-2.png").default,
        content: (
            <div className="module-opt-title">
                针对个人用户<span className="module-opt-theme-title">永久免费</span>
            </div>
        ),
        color: "#669DF6",
        bgColor: "#F8F9FA",
    },
    {
        img: require("../../static/img/cooperation/declare-3.png").default,
        content: (
            <div className="module-opt-title">
                公共插件商店及配套社区<span className="module-opt-theme-title">永久免费</span>
            </div>
        ),
        color: "#36D3A6",
        bgColor: "#F7FAF8",
    },
];

interface SceneModuleProps {
    title: string;
    img: string;
    top: number;
    height: number;
    fontTop: number;
}
const SceneModuleFirst: SceneModuleProps[] = [
    {
        title: "日常安全检测",
        img: require("../../static/img/cooperation/scene-1.png").default,
        top: 36,
        height: 40,
        fontTop: 26,
    },
    {
        title: "安全开发检测",
        img: require("../../static/img/cooperation/scene-2.png").default,
        top: 40,
        height: 32,
        fontTop: 30,
    },
    {
        title: "重大任务工作协同",
        img: require("../../static/img/cooperation/scene-3.png").default,
        top: 35,
        height: 40,
        fontTop: 27,
    },
];
const SceneModuleSecond: SceneModuleProps[] = [
    {
        title: "安全外包服务管理",
        img: require("../../static/img/cooperation/scene-4.png").default,
        top: 32,
        height: 48,
        fontTop: 22,
    },
    {
        title: "团队成员培训",
        img: require("../../static/img/cooperation/scene-5.png").default,
        top: 38,
        height: 36,
        fontTop: 28,
    },
];

interface ContactModuleProps {
    addr: string;
    phone: string;
    isWechat: boolean;
}
const ContactModule: ContactModuleProps[] = [
    { addr: "北京", phone: "010-5945 0966", isWechat: false },
    { addr: "成都", phone: "028-8522 5545", isWechat: false },
    { addr: "微信", phone: "13371748722", isWechat: true },
];

export const EnterpriseCollaborationPage: React.FC<EnterpriseCollaborationPageProps> = (props) => {
    const [kind, setKind] = useState<IntroduceKindProps>({
        name: "高效",
        icon: require("../../static/img/home/second/efficent-head.png").default,
    });
    // 滚动区域变化标识
    const [isScrollUp, setIsScrollUp] = useState<boolean>(false);

    const [kindRate, setKindRate] = useState<number>(0);
    const [isKindRange, setIsKindRange] = useState<boolean>(false);

    const [functionKind, setFunctionKind] = useState<number>(0);
    const [functionRate, isFunctionRate] = useState<number>(0);
    const [isFunctionRange, setIsFunctionRange] = useState<boolean>(false);

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
            const second = (3143 / 16) * FontSize;
            // 第三区域paddingTop、block、gap
            const thirdPaddingTop = (249 / 16) * FontSize;
            const thirdBlock = (432 / 16) * FontSize;
            const thirdBlockGap = (90 / 16) * FontSize;
            // 第三区域总高度
            const third = (2769 / 16) * FontSize;
            //第二与第三区域可视点高度
            const secondToThird = (480 / 16) * FontSize;

            if (scrollTop <= first) {
                setIsKindRange(false);
                setIsFunctionRange(false);
            }
            if (scrollTop > first && scrollTop < first + second) {
                setIsFunctionRange(scrollTop >= first + second - secondToThird);

                const secondLevel = Math.trunc((scrollTop - first - secondPaddingTop) / secondBlock);
                if (secondLevel > 3 || secondLevel < 0) {
                    // 超出界限中断，不能使用return，因为后面的if可能会同时触发
                } else {
                    if (scrollTop > first + secondPaddingTop) {
                        setKindRate(((scrollTop - first - secondPaddingTop) % secondBlock) / secondBlock);
                        setIsKindRange(true);
                    }
                }
            }
            if (scrollTop >= first + second - secondToThird && scrollTop < first + second + third) {
                setIsKindRange(scrollTop < first + second);

                const thirdLevel = Math.trunc(
                    (scrollTop - first - second + secondToThird - thirdPaddingTop + thirdBlockGap) /
                        (thirdBlock + thirdBlockGap)
                );
                if (thirdLevel > 4 || thirdLevel < 0) {
                    // 超出界限中断，不能使用return，因为后面的if可能会同时触发
                } else {
                    if (scrollTop > first + second - secondToThird + thirdPaddingTop - thirdBlockGap) {
                        // 这里减法的情况是，总滚动长度减去(第一和第二区域高度、第三区域标题高度)加上(第二区域内第三区域可视高度、一个第三区域块高度里的marginTop)
                        isFunctionRate(
                            (((scrollTop - first - second + secondToThird - thirdPaddingTop + thirdBlockGap) %
                                (thirdBlock + thirdBlockGap)) -
                                thirdBlockGap) /
                                thirdBlock
                        );
                        setFunctionKind(thirdLevel);
                        setIsFunctionRange(true);
                    }
                }
            }
            if (scrollTop >= first + second + third) {
                setIsKindRange(false);
                setIsFunctionRange(false);
            }
        });
    }, []);

    return (
        <div className="enterprise-collaboration-wrapper">
            <div className="guide-body">
                <img
                    src={require("../../static/img/cooperation/cooperationBg.png").default}
                    className="guide-background-img"
                />
                <div className="guide-words-body">
                    <div className="guide-words-body-header">
                        Yakit<span className="text-style">企业版</span>
                    </div>
                    <div className="guide-words-body-description">让企业安全测试高效和可管理</div>
                    <div className="guide-words-body-btn">
                        <DownLoadBtn />
                    </div>
                </div>
            </div>

            <div className="declare-wrapper">
                <div className="declare-body">
                    <div className="declare-title">特别声明</div>

                    <div className="declare-introduction">
                        Yaklang.io 团队在综合考虑了企业级用户、社区用户的要求和建议下，决定正式推出 Yakit
                        商业版产品和服务，同时我们向社区用户做出郑重承诺：
                    </div>

                    <div className="declare-module-body">
                        {DeclareModule.map((item, index) => {
                            return (
                                <div
                                    key={`${item.color}-${index}`}
                                    style={{ background: item.bgColor }}
                                    className="module-opt"
                                >
                                    <div className={`module-opt-img-${index + 1}`}>
                                        <img src={item.img} className="img-style" />
                                    </div>
                                    {item.content}
                                    <div style={{ background: item.color }} className="module-opt-line"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="cooperation-wrapper">
                <div className="cooperation-body">
                    <div className="cooperation-title">
                        企业版合作<span className="theme-style">专享</span>
                    </div>

                    <div className="cooperation-module-a">
                        <div className="module-a-img">
                            <img
                                src={require("../../static/img/cooperation/cooperation-1.png").default}
                                className="img-style"
                            />
                        </div>
                        <div className="module-a-content">
                            <div className="content-title">实现企业安全工具的统一管理</div>
                            <div className="content-style">
                                构建企业渗透测试全流程工具并进行统一管理，工具原生协同，迅速拉平企业内部安全人员的
                                “硬件” 水平。
                            </div>
                            <div className="content-topic topic-first">全流程工具包括</div>
                            <div className="content-topic-title">
                                <div className="title-opt">
                                    <SelectedSvgIcon className="icon-style" />
                                    <div className="title-style">社区版中的通用工具</div>
                                </div>
                                <div className="title-opt">
                                    <SelectedSvgIcon className="icon-style" />
                                    <div className="title-style">为企业提供漏洞验证工具</div>
                                </div>
                                <div className="title-opt">
                                    <SelectedSvgIcon className="icon-style" />
                                    <div className="title-style">提供工具定制开发</div>
                                </div>
                            </div>
                            <div className="content-topic topic-second">专属插件仓库</div>
                            <div className="content-topic-title">
                                <div className="title-opt">
                                    <SelectedSvgIcon className="icon-style" />
                                    <div className="title-style">企业专属的插件云仓库</div>
                                </div>
                                <div className="title-opt">
                                    <SelectedSvgIcon className="icon-style" />
                                    <div className="title-style">为企业单独建设独享（离线）插件仓库</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cooperation-module-b"></div>

                    <div className="cooperation-module-c"></div>

                    <div className="cooperation-module-d"></div>

                    <div className="cooperation-module-e"></div>
                </div>
            </div>

            <div className="scene-wrapper">
                <div className="scene-body">
                    <div className="scene-title">企业版可以支持的使用场景</div>
                    <div className="scene-module-first">
                        {SceneModuleFirst.map((item) => {
                            return (
                                <div key={item.title} className="scene-module-opt">
                                    <div style={{ marginTop: item.top }} className="opt-img">
                                        <img src={item.img} style={{ height: item.height }} />
                                    </div>

                                    <div style={{ marginTop: item.fontTop }} className="opt-title">
                                        {item.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="scene-module-second">
                        {SceneModuleSecond.map((item) => {
                            return (
                                <div key={item.title} className="scene-module-opt">
                                    <div style={{ marginTop: item.top }} className="opt-img">
                                        <img src={item.img} style={{ height: item.height }} />
                                    </div>

                                    <div style={{ marginTop: item.fontTop }} className="opt-title">
                                        {item.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="scene-introduction">更多使用场景请查看白皮书</div>
                    <div className="scene-download">
                        <DownLoadBtn />
                    </div>
                </div>
            </div>

            <div className="contact-wrapper">
                <div className="contact-body">
                    <div className="contact-title">企业版专属客户服务通道</div>

                    <div className="contact-module-body">
                        {ContactModule.map((item) => {
                            return (
                                <div key={item.addr} className="module-opt">
                                    <div className="module-opt-addr">
                                        {item.isWechat ? (
                                            <WechatSvgIcon className="icon-style" />
                                        ) : (
                                            <PhoneSvgIcon className="icon-style" />
                                        )}
                                        {item.addr}
                                    </div>

                                    <div className="module-opt-phone">
                                        <div className="phone-style">{item.phone}</div>
                                        {item.isWechat && (
                                            <div className="qrcode-style">
                                                <Popover
                                                    overlayClassName="qrcode-code-popover"
                                                    content={
                                                        <div>
                                                            <img src="/img/wechat.jpg" className="qrcode-code-img" />
                                                            <div className="qrcode-code-title">扫一扫，咨询企业版</div>
                                                        </div>
                                                    }
                                                >
                                                    <QrcodeOutlined className="icon-style" />
                                                </Popover>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface DownLoadBtnProps {}
const DownLoadBtn = (props: DownLoadBtnProps) => {
    return (
        <a
            href="https://yaklang.oss-cn-beijing.aliyuncs.com/yakit-technical-white-paper.pdf"
            className="download-white-paper-btn"
            target="_blank"
        >
            <div className="btn-title">
                <DownloadOutlined className="icon-style" />
                <span className="title-style">下载白皮书</span>
            </div>
        </a>
    );
};
