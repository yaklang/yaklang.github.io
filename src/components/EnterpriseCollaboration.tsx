import React from "react";
import { Popover } from "antd";
import { PhoneSvgIcon, WechatSvgIcon } from "./icons";
import { QrcodeOutlined, DownloadOutlined } from "@ant-design/icons";
import { CriticalBugSvgIcon, HighBugSvgIcon, LowBugSvgIcon, SelectedSvgIcon } from "./cooperateIcon";

export interface EnterpriseCollaborationPageProps {}

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
    { addr: "微信", phone: "yakit-ee", isWechat: true },
];

export const EnterpriseCollaborationPage: React.FC<EnterpriseCollaborationPageProps> = (props) => {
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
                    <div className="guide-words-body-description">让企业安全测试高效可控</div>
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

                    <div className="cooperation-module-a cooperation-module-layout">
                        <div className="module-a-img">
                            <img
                                src={require("../../static/img/cooperation/cooperation-1.png").default}
                                className="img-style"
                            />
                        </div>
                        <div className="module-a-content module-content-style">
                            <div className="content-title">实现企业安全工具的统一管理</div>
                            <div className="a-style content-style">
                                构建企业渗透测试全流程工具并进行统一管理，工具原生协同，迅速拉平企业内部安全人员的
                                “硬件” 水平。
                            </div>
                            <div className="content-topic a-topic-first">全流程工具包括</div>
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
                            <div className="content-topic a-topic-second">专属插件仓库</div>
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

                    <div className="cooperation-module-b cooperation-module-layout-reverse">
                        <div className="module-b-content module-content-style">
                            <div className="content-title">企业安全团队管理与任务协作</div>
                            <div className="b-style content-style">
                                对安全团队成员进行管理，实现团队紧密协作，高效工作。
                            </div>
                            <div className="content-topic b-topic-first">成员管理</div>
                            <div className="content-topic-title b-topic-title">
                                基于认证的访问控制,基于角色的授权管理
                            </div>
                            <div className="content-topic b-topic-second">任务协同</div>
                            <div className="content-topic-title b-topic-title">
                                可以组建任务组,实现安全测试任务的协作或者接力执行
                            </div>
                            <div className="content-topic b-topic-third">安全数据共享</div>
                            <div className="content-topic-title b-topic-title">
                                参与任务的成员可以查看所有任务相关数据
                            </div>
                        </div>

                        <div className="module-b-img">
                            <img
                                src={require("../../static/img/cooperation/cooperation-2.png").default}
                                className="img-style"
                            />
                        </div>
                    </div>

                    <div className="cooperation-module-c cooperation-module-layout">
                        <div className="module-c-img">
                            <img
                                src={require("../../static/img/cooperation/cooperation-3.png").default}
                                className="img-style"
                            />
                        </div>

                        <div className="module-c-content module-content-style">
                            <div className="content-title">针对新漏洞的快速响应</div>
                            <div className="c-style content-style">
                                针对网络空间新发现的漏洞，快速提供针对性的检测插件，按照影响程度进行分级响应。
                            </div>
                            <div className="bug-title bug-first">
                                <LowBugSvgIcon className="icon-style" />
                                <div className="title-style">
                                    一般漏洞 - <span className="theme-style">48</span> 小时内
                                </div>
                            </div>
                            <div className="bug-title bug-second">
                                <HighBugSvgIcon className="icon-style" />
                                <div className="title-style">
                                    大型影响漏洞 - <span className="theme-style">24</span> 小时内
                                </div>
                            </div>
                            <div className="bug-title bug-third">
                                <CriticalBugSvgIcon className="icon-style" />
                                <div className="title-style">
                                    重大影响漏洞 - <span className="theme-style">12</span> 小时内
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cooperation-module-d cooperation-module-layout-reverse">
                        <div className="module-d-content module-content-style">
                            <div className="content-title">Yakit 产品部署方案</div>
                            <div className="d-style content-style">
                                基于 Yaklang 的低代码平台，融合“图灵完备”低代码 +
                                安全体系，针对企业部署需求提供不同的产品部署解决方案，极致降低安全运营成本。
                            </div>
                            <div className="content-topic d-topic-first">分布式引擎 SaaS 化部署</div>
                            <div className="content-topic-title d-topic-title-first">
                                ▫ 针对公网业务系统可以直接注册账号使用，用户无需购买，安装或维护任何软、硬件
                            </div>
                            <div className="content-topic-title d-topic-title-second">
                                ▫ 分布式调度 Yaklang 引擎，快速实现组织内任务的分发和管理
                            </div>
                            <div className="content-topic d-topic-second">私有化部署</div>
                            <div className="content-topic-title d-topic-title-first">
                                ▫ 针对内网业务系统可以在内网直接部署 Yakit 服务器，配置安装后即可上线使用
                            </div>
                            <div className="content-topic-title d-topic-title-second">
                                ▫ 持续“快速灵活低成本”挂载更多低代码服务和应用
                            </div>
                        </div>

                        <div className="module-d-img">
                            <img
                                src={require("../../static/img/cooperation/cooperation-4.png").default}
                                className="img-style"
                            />
                        </div>
                    </div>

                    <div className="cooperation-module-e cooperation-module-layout">
                        <div className="module-e-img">
                            <img
                                src={require("../../static/img/cooperation/cooperation-5.png").default}
                                className="img-style"
                            />
                        </div>

                        <div className="module-e-content module-content-style">
                            <div className="content-title">企业专属定制化服务和合作</div>
                            <div className="e-style content-style">
                                针对企业级用户的个性化定制需求，打造贴合企业业务真实场景的服务方案。
                            </div>
                            <div className="content-topic e-topic-first">定制化服务</div>
                            <div className="content-topic-title e-topic-title">
                                如果您的安全团队在日常检测工作中有其他难题或者需求，我们可以提供定制服务
                            </div>
                            <div className="content-topic e-topic-second">企业合作</div>
                            <div className="content-topic-title e-topic-title">
                                如果您的团队有基于 Yak 的课题工程转化或者科研课题探讨的想法，欢迎
                                <span
                                    className="theme-style"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.scrollTo(0, document.body.scrollHeight);
                                    }}
                                >
                                    联系我们
                                </span>
                            </div>
                        </div>
                    </div>
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
                                                            <img src="/img/cooperation/qrcode.png" className="qrcode-code-img" />
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
                <div className="title-style">下载白皮书</div>
            </div>
        </a>
    );
};
