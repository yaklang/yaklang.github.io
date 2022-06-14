import React from "react";
import { Card, Divider, Popover } from "antd";
import { GithubOutlined, HomeFilled } from "@ant-design/icons";
import { LocationSvgIcon } from "./icons";
import { TooltipPlacement } from "antd/lib/tooltip";

export interface TeamProps {}

interface OwnerInfoProps {
    img: string;
    name: string;
    links: { name: string; href?: string }[];
    tags: { name: string; color: string }[];
    description: string;
    address: string;
    github?: string;
}
interface OwnerInfoOptProps {
    x: string;
    y: string;
    width: string;
    height: string;
    placement: TooltipPlacement;
    info: OwnerInfoProps;
}
const OwnerInfoOpt: OwnerInfoOptProps[] = [
    {
        x: "25.3%",
        y: "28.8%",
        width: "6%",
        height: "12%",
        placement: "leftBottom",
        info: {
            img: "/img/team/v1ll4n.jpg",
            name: "v1ll4n",
            links: [{ name: "@Yak", href: "/" }],
            tags: [{ name: "项目作者", color: "orange" }],
            description: "安全研发从业人员、碰巧会写点代码",
            address: "四川 - 成都",
            github: "https://github.com/VillanCh",
        },
    },
    {
        x: "36.7%",
        y: "56.9%",
        width: "4.8%",
        height: "10.3%",
        placement: "left",
        info: {
            img: "/img/team/sucre.jpg",
            name: "sucre",
            links: [{ name: "@红日安全", href: "http://www.sec-redclub.com/" }],
            tags: [{ name: "能力研发", color: "green" }],
            description: "乙方红队负责人，现供职于四维创智",
            address: "北京",
            github: "https://github.com/linksucre",
        },
    },
    {
        x: "43.75%",
        y: "62.8%",
        width: "6%",
        height: "12%",
        placement: "bottom",
        info: {
            img: "/img/team/naiquan.jpeg",
            name: "奶权",
            links: [{ name: "@米斯特安全", href: "https://www.acmesec.cn/" }],
            tags: [
                { name: "yak . 随机端口反连触发 Owner", color: "purple" },
                { name: "yak . ICMP 长度触发器 Owner", color: "green" },
            ],
            description: "Web 安全 / 代码审计 爱好者",
            address: "深圳",
        },
    },
    {
        x: "45.6%",
        y: "25.5%",
        width: "6%",
        height: "5.2%",
        placement: "top",
        info: {
            img: "/img/team/f1ys0ar.jpeg",
            name: "f1ys0ar",
            links: [
                { name: "@中国科学院大学", href: "https://www.ucas.ac.cn/" },
            ],
            tags: [{ name: "Yak.pwn 模块 owner", color: "blue" }],
            description: "在读博士（中国科学院大学）",
            address: "北京",
            github: "https://github.com/flysoar",
        },
    },
    {
        x: "56.9%",
        y: "72.2%",
        width: "4.8%",
        height: "10.3%",
        placement: "rightTop",
        info: {
            img: "/img/team/yuqi.jpg",
            name: "yuqi",
            links: [{ name: "@yaklang.io", href: "/" }],
            tags: [{ name: "能力研发", color: "blue" }],
            description: "web安全 守门员",
            address: "四川 - 成都",
        },
    },
    {
        x: "66.5%",
        y: "53.8%",
        width: "4.3%",
        height: "10.3%",
        placement: "right",
        info: {
            img: "/img/team/small_j.jpg",
            name: "small_j",
            links: [{ name: "@yaklang.io", href: "/" }],
            tags: [{ name: "能力研发", color: "purple" }],
            description: "多学习，多喝水，早睡早起",
            address: "四川 - 成都",
        },
    },
    {
        x: "50.3%",
        y: "45%",
        width: "5.6%",
        height: "12.1%",
        placement: "topLeft",
        info: {
            img: "/img/team/z3r0ne.jpg",
            name: "z3r0ne",
            links: [{ name: "@yaklang.io", href: "/" }],
            tags: [{ name: "能力研发", color: "blue" }],
            description: "红队攻防爱好者/安全开发",
            address: "四川 - 成都",
            github: "https://github.com/OrangeWatermelon",
        },
    },
    {
        x: "26.8%",
        y: "70.9%",
        width: "4.8%",
        height: "10.3%",
        placement: "leftTop",
        info: {
            img: "/img/team/nonight.jpg",
            name: "nonight",
            links: [{ name: "@yaklang.io", href: "/" }],
            tags: [{ name: "前端负责人", color: "blue" }],
            description: "早睡早起身体好",
            address: "四川 - 成都",
        },
    },
];

interface ContributorsInfoProps {
    img: string;
    name: string;
    links: { name: string; href?: string }[];
    description: string;
    address: string;
    icon?: { icon?: React.ReactNode; href: string };
}
const ContributorsInfo: ContributorsInfoProps[] = [
    {
        img: "/img/team/timwhite.png",
        name: "TimWhite",
        links: [{ name: "@xrayteam", href: "https://xray.cool/team/" }],
        description: "红队攻防技术研究员、免杀/对抗 爱好者",
        address: "上海",
        icon: { href: "https://github.com/timwhitez" },
    },
    {
        img: "/img/team/ykc.jpg",
        name: "ykc",
        links: [
            { name: "@xray @rad", href: "https://xray.cool/" },
            { name: "@长亭科技", href: "https://www.chaitin.cn/zh/" },
        ],
        description: "现供职于长亭科技",
        address: "浙江 - 杭州",
        icon: { href: "https://github.com/chinaykc" },
    },
    {
        img: "/img/team/Alex-null.jpeg",
        name: "Alex-null",
        links: [{ name: "@青藤 云安全", href: "https://www.qingteng.cn/" }],
        description: "技术爱好者，供职于青藤云安全",
        address: "上海",
        icon: { href: "https://github.com/Alex-null" },
    },
    {
        img: "/img/team/国产大熊猫.jpeg",
        name: "国产大熊猫",
        links: [],
        description: "研发安全工程师",
        address: "浙江 - 杭州",
        icon: {
            icon: <img src="/img/team/oschina.png" className="link-img" />,
            href: "https://my.oschina.net/9199771",
        },
    },
    {
        img: "/img/team/jiansiting.jpeg",
        name: "剑思庭",
        links: [{ name: "@jiansiting" }],
        description: "工业安全红队IRTeam联合创始人，打造工业安全杀伤链建设。",
        address: "",
        icon: { href: "https://github.com/jiansiting" },
    },
    {
        img: "/img/team/HoAd.jpeg",
        name: "HoAd",
        links: [{ name: "@虚拟尽头" }],
        description: "红蓝攻防爱好者",
        address: "甘肃 - 庆阳",
    },
    {
        img: "/img/team/斑马.jpeg",
        name: "斑马",
        links: [],
        description: "Web狗，缝合怪",
        address: "上海",
        icon: { href: "https://github.com/givemefivw" },
    },
    {
        img: "/img/team/shangzeng.jpeg",
        name: "shangzeng",
        links: [{ name: "@shangzeng.club", href: "http://shangzeng.club/" }],
        description: "金融安全工作者",
        address: "长春",
        icon: { href: "https://github.com/shangzeng/" },
    },
    {
        img: "/img/team/Vanilla.jpeg",
        name: "Vanilla",
        links: [{ name: "@Xiecat团队", href: "http://www.xiecat.fun/" }],
        description: "甲方安全建设/应用安全",
        address: "",
        icon: {
            icon: <img src="/img/team/xiecat.png" className="link-img" />,
            href: "http://www.xiecat.fun/",
        },
    },
];

interface ConsultantInfoProps {
    img: string;
    name: string;
    links: { name: string; href?: string }[];
    description: string;
    address: string;
}
const ConsultantInfo: ConsultantInfoProps[] = [
    {
        img: "/img/team/cnrstar.jpg",
        name: "cnrstar",
        links: [{ name: "@4dogs.cn", href: "http://www.4dogs.cn/" }],
        description: "知识图谱的安全领域实践者",
        address: "北京",
    },
    {
        img: "/img/team/cuihuagege.jpg",
        name: "翠花哥哥",
        links: [{ name: "@青藤 云安全", href: "https://www.qingteng.cn/" }],
        description: "安全产品 / 安全架构专家",
        address: "北京",
    },
];

interface ThanksForInfoProps {
    img: string;
    name: string;
    tag: { name: string; color: string };
    description: string[];
    address: string;
    home?: string;
    github?: string;
}
const ThanksForInfo: ThanksForInfoProps[] = [
    // {
    //     img: "/img/team/4dogs.jpg",
    //     name: "四维创智",
    //     tag: { name: "特别赞助商", color: "red" },
    //     description: [
    //         "为推动 Yak 项目生态做出杰出贡献",
    //         "同时感谢对 Yak 的慷慨捐赠",
    //     ],
    //     address: "北京",
    //     home: "http://www.4dogs.cn/",
    // },
    {
        img: "/img/team/projectdiscovery.png",
        name: "ProjectDiscovery",
        tag: { name: "nuclei 集成", color: "purple" },
        description: ["无私的 MIT 开源精神", "为 Yak 提供 nuclei 漏洞检测能力"],
        address: "",
        home: "https://projectdiscovery.io/#/",
        github: "https://github.com/projectdiscovery/",
    },
    {
        img: "/img/team/vulhub.png",
        name: "vulhub",
        tag: { name: "漏洞靶场基础设施", color: "blue" },
        description: ["无私的漏洞靶场基础设施提供者"],
        address: "北京",
        home: "https://vulhub.org/",
        github: "https://github.com/vulhub/",
    },
    {
        img: "/img/team/cnss.png",
        name: "CNSS",
        tag: { name: "idea inspired", color: "orange" },
        description: ["优秀的 CTF 战队", "为 Yak 安全能力构建提供灵感"],
        address: "四川 - 成都",
        home: "https://cnss.io/",
        github: "https://github.com/cnss/",
    },
];

export const Team: React.FC<TeamProps> = (props) => {
    return (
        <div className="team-and-thank-container">
            <div className="owner-body">
                <div className="owner-header-title">Yaklang.io 团队</div>
                <div className="owner-member-introduce-body">
                    <div className="owner-member-introduce-img">
                        <div className="owner-member-introduce-img-body">
                            <img
                                src="/img/team/owner.png"
                                className="img-style"
                            ></img>
                            {OwnerInfoOpt.map((item) => {
                                const { x, y, width, height, placement, info } =
                                    item;
                                return (
                                    <div
                                        className="img-info-popover"
                                        style={{
                                            width: width,
                                            height: height,
                                            left: x,
                                            top: y,
                                        }}
                                        key={item.info.name}
                                    >
                                        <Popover
                                            content={<Owner info={info} />}
                                            placement={placement}
                                        >
                                            <div className="img-info-popover-div"></div>
                                        </Popover>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="owner-member-introduce-title">
                        做难且正确的事！
                    </div>
                </div>
            </div>

            <div className="contributors-body">
                <div className="contributors-header-title">
                    Yak 生态共建杰出贡献成员
                </div>
                <div className="contributors-member-wrapper">
                    <div className="contributors-member-grid-wrapper">
                        {ContributorsInfo.map((item) => {
                            return (
                                <Contributors
                                    className="grid-thumbnail"
                                    key={item.name}
                                    info={item}
                                    hoverable={false}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="consultant-body">
                <div className="consultant-header-title">特别顾问</div>

                <div className="consultant-member-wrapper">
                    <div className="consultant-member-grid-wrapper">
                        {ConsultantInfo.map((item) => {
                            return <Consultant key={item.name} info={item} />;
                        })}
                    </div>
                </div>

                <img
                    src="/img/team/topLeft.png"
                    style={{
                        position: "absolute",
                        width: "20%",
                        top: 0,
                        left: 0,
                    }}
                />
                <img
                    src="/img/team/rightBottom.png"
                    style={{
                        position: "absolute",
                        width: "20%",
                        bottom: 0,
                        right: 0,
                    }}
                />
            </div>

            <div className="thanksfor-body">
                <div className="thanksfor-header-title">特别致谢</div>

                <div className="thanksfor-member-wrapper">
                    <div className="thanksfor-member-grid-wrapper">
                        {ThanksForInfo.map((item) => {
                            return <ThanksFor key={item.name} info={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface OwnerProps {
    info: OwnerInfoProps;
}
const Owner: React.FC<OwnerProps> = React.memo((props) => {
    const { info } = props;
    return (
        <div className="owner-member-opt">
            <div className="owner-member-opt-author">
                <div className="author-info">
                    <div className="author-info-img">
                        <img src={info.img} className="img-style" />
                    </div>
                    <div className="author-info-body">
                        <div className="author-info-body-name-link">
                            <div className="name-style">{info.name}</div>
                            <div className="link-body">
                                {info.links.map((item, index) => {
                                    if (item.href) {
                                        return (
                                            <a
                                                className="link-jump"
                                                key={item.name}
                                                href={item.href}
                                                target={"_blank"}
                                            >
                                                {item.name}
                                            </a>
                                        );
                                    }
                                    return (
                                        <div
                                            className="link-no-jump"
                                            key={item.name}
                                        >
                                            {item.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="author-info-body-tag">
                            {info.tags.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className={`tag-div-style ${item.color}-tag-div`}
                                    >
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {info.github && (
                    <a
                        className="author-github"
                        href={info.github}
                        target={"_blank"}
                        title="点击跳转"
                    >
                        <div className="github-img">
                            <GithubOutlined className="github-icon" />
                        </div>
                    </a>
                )}
            </div>

            <div
                className="owner-member-opt-description"
                title={info.description}
            >
                {info.description}
            </div>

            <div className="owner-member-opt-address">
                {/* @ts-ignore */}
                <LocationSvgIcon className="address-icon" />
                <span className="address-style">{info.address || "- -"}</span>
            </div>
        </div>
    );
});

interface ContributorsProps {
    info: ContributorsInfoProps;
    hoverable?: boolean;
    className?: string;
}
const Contributors: React.FC<ContributorsProps> = React.memo((props) => {
    const { info, hoverable = true, className } = props;
    return (
        <Card
            className={`contributors-member-opt ${className || ""}`}
            bodyStyle={{ padding: "24px 16px 16px 24px" }}
            hoverable={hoverable}
        >
            <div className="member-info-body">
                <div className="member-author-link">
                    <div className="author-info">
                        <div className="author-info-img">
                            <img src={info.img} className="img-style" />
                        </div>
                        <div className="author-info-name-link">
                            <div className="name-style">{info.name}</div>
                            {!!info.links.length && (
                                <div className="link-out">
                                    {info.links.map((item, index) => {
                                        if (item.href) {
                                            return (
                                                <div
                                                    style={{
                                                        display: "inline-block",
                                                    }}
                                                    key={item.name}
                                                >
                                                    <a
                                                        className="link-jump"
                                                        href={item.href}
                                                        target={"_blank"}
                                                    >
                                                        {item.name}
                                                    </a>
                                                    {index !==
                                                        info.links.length -
                                                            1 && (
                                                        <Divider type="vertical" />
                                                    )}
                                                </div>
                                            );
                                        }
                                        return (
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                }}
                                                key={item.name}
                                            >
                                                <div className="link-no-jump">
                                                    {item.name}
                                                </div>
                                                {index !==
                                                    info.links.length - 1 && (
                                                    <Divider type="vertical" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {info.icon && (
                        <a
                            className="link-info"
                            href={info.icon.href}
                            target={"_blank"}
                            title="点击跳转"
                        >
                            {info.icon.icon ? (
                                info.icon.icon
                            ) : (
                                <div className="link-img">
                                    <GithubOutlined className="link-icon" />
                                </div>
                            )}
                        </a>
                    )}
                </div>

                <div className="member-description" title={info.description}>
                    {info.description}
                </div>

                <div className="member-address-body">
                    {/* @ts-ignore */}
                    <LocationSvgIcon className="address-icon" />
                    <span className="address-style">
                        {info.address || "- -"}
                    </span>
                </div>
            </div>
        </Card>
    );
});

interface ConsultantProps {
    info: ConsultantInfoProps;
}
const Consultant: React.FC<ConsultantProps> = React.memo((props) => {
    const { info } = props;
    return (
        <div className="consultant-member-opt">
            <div className="member-info-img">
                <div className="img-body">
                    <img src={info.img} className="img-style" />
                    <img src={info.img} className="img-mask" />
                </div>
            </div>

            <div className="member-author-info">
                <div className="member-author-info-title">{info.name}</div>
                <div className="member-author-info-link">
                    {info.links.map((item, index) => {
                        if (item.href) {
                            return (
                                <div
                                    style={{ display: "inline-block" }}
                                    key={item.name}
                                >
                                    <a
                                        className="link-jump"
                                        href={item.href}
                                        target={"_blank"}
                                    >
                                        {item.name}
                                    </a>
                                    {index !== info.links.length - 1 && (
                                        <Divider type="vertical" />
                                    )}
                                </div>
                            );
                        }
                        return (
                            <div
                                style={{ display: "inline-block" }}
                                key={item.name}
                            >
                                <div className="link-no-jump">{item.name}</div>
                                {index !== info.links.length - 1 && (
                                    <Divider type="vertical" />
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="member-author-info-description">
                    {info.description}
                </div>
                <div className="member-author-info-address">
                    {/* @ts-ignore */}
                    <LocationSvgIcon className="address-icon" />
                    <span className="address-style">
                        {info.address || "- -"}
                    </span>
                </div>
            </div>
        </div>
    );
});

interface ThanksForProps {
    info: ThanksForInfoProps;
}
const ThanksFor: React.FC<ThanksForProps> = React.memo((props) => {
    const { info } = props;
    return (
        <div className="thanksfor-member-opt">
            <div className="member-info">
                <div className="member-info-img">
                    <img src={info.img} className="img-style" />
                </div>
                <div className="member-info-name-tag">
                    <div className="name-style">{info.name}</div>
                    <div className={`tag-div-style ${info.tag.color}-tag-div`}>
                        <div className="tag-styl">{info.tag.name}</div>
                    </div>
                </div>
            </div>

            <div className="member-description">
                {info.description.map((item) => {
                    return (
                        <div key={item} className="description-style">
                            {item}
                        </div>
                    );
                })}
            </div>

            <div className="member-address-link">
                <div className="address-body">
                    {/* @ts-ignore */}
                    <LocationSvgIcon className="address-icon" />
                    <span className="address-style">
                        {info.address || "- -"}
                    </span>
                </div>
                <div className="link-body">
                    {!!info.home && (
                        <a
                            className="link-jump"
                            href={info.home}
                            target={"_blank"}
                        >
                            <HomeFilled className="icon-style icon-home-style" />
                        </a>
                    )}
                    {!!info.github && (
                        <a href={info.github} target={"_blank"}>
                            <GithubOutlined className="icon-style icon-github-style" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
});
