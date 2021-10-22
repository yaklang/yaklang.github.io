// @ts-ignore
import React from "react";
import {Layout, Card, Col, Row, Avatar, Button, Space, Tag, Typography} from "antd";
import {GithubOutlined, EnvironmentOutlined, HomeOutlined} from "@ant-design/icons";

const {Text} = Typography;

export interface Person {
    name: string
    description: string
    githubLink: string
    mainPage?: string
    avatar?: string
    span?: number
    border?: boolean
}

export interface WhoProp {
    who: Person[];
}

const {Meta} = Card;

export const Owner = () => {
    return <Who
        who={[
            {
                name: <Space>v1ll4n <div style={{fontSize: 12}}>
                    <a href="/" target={"_blank"}>@Yak</a> 项目作者
                </div></Space>, avatar: "/img/who/v1ll4n.jpg", description: <div>
                    安全研发从业人员<br/>
                    碰巧会写点代码 <br/>
                    <EnvironmentOutlined/> 成都，四川
                </div>,
                githubLink: "https://github.com/VillanCh",
                span: 24, border: false,
            },
            {
                name: <Space>sucre <div style={{fontSize: 12}}>
                    <a href="http://www.sec-redclub.com/" target={"_blank"}>@红日安全</a>
                </div></Space>, avatar: "/img/who/sucre.jpg", description: <div>
                    乙方红队负责人<br/>
                    现供职于 <a href="" target={"_blank"}>@四维创智</a> <br/>
                    <EnvironmentOutlined/> 北京
                </div>,
                githubLink: "https://github.com/linksucre",
                span: 12, border: false,
            },
            {
                name: <Space>f1ys0ar <div style={{fontSize: 12}}>
                    <a href="/" target={"_blank"}>@Yak.pwn</a> 模块 owner
                </div></Space>, avatar: "/img/who/f1ys0ar.jpeg", description: <div>
                    在读博士 <a href="https://www.ucas.ac.cn/" target={"_blank"}>@中国科学院大学</a><br/>
                    <EnvironmentOutlined/> 北京
                </div>,
                githubLink: "https://github.com/flysoar",
                span: 12, border: false,
            },
            {
                name: <Space>yuqi <div style={{fontSize: 12}}>
                    <a href="/" target={"_blank"}>@yaklang.io</a>
                </div></Space>, avatar: "/img/who/yuqi.jpg", description: <div>
                    web安全 <Text mark={true}>守门员</Text>
                    <br/>
                    <EnvironmentOutlined/> 成都
                </div>,
                // githubLink: "https://github.com/flysoar",
                span: 12, border: false,
            },
            {
                name: <Space>small_j <div style={{fontSize: 12}}>
                    <a href="/" target={"_blank"}>@yaklang.io</a>
                </div></Space>, avatar: "/img/who/small_j.jpg", description: <div>
                    多学习，多喝水，早睡早起 <br/>
                    <EnvironmentOutlined/> 成都
                </div>,
                // githubLink: "https://github.com/flysoar",
                span: 12, border: false,
            },
        ]}
    />
}

export const Contributors = () => {
    return <Who
        who={[
            {
                name: <Space>TimWhite <div style={{fontSize: 12}}>
                    <a href="https://xray.cool/team/" target={"_blank"}>@xrayteam</a>
                </div></Space>, avatar: "/img/who/timwhite.png", description: <div>
                    红队攻防技术研究员 <br/>
                    免杀/对抗 爱好者 <br/>
                    <EnvironmentOutlined/> 上海
                </div>,
                githubLink: "https://github.com/timwhitez",
                span: 12, border: false,
            },
            {
                name: <Space>ykc <div style={{fontSize: 12}}>
                    <a href="https://xray.cool/" target={"_blank"}>@xray @rad</a> 团队
                </div></Space>, avatar: "/img/who/ykc.jpg", description: <div>
                    现供职于 <a href="https://www.chaitin.cn/zh/" target={"_blank"}>@长亭科技</a> <br/>
                    <EnvironmentOutlined/> 杭州，浙江
                </div>,
                githubLink: "https://github.com/chinaykc",
                span: 12, border: false,
            },
        ]}
    />
}

export const Consultant = () => {
    return <Who
        who={[
            {
                name: <Space>cnrstar <div style={{fontSize: 12}}>
                    <a href="http://www.4dogs.cn/" target={"_blank"}>@4dogs.cn</a>
                </div></Space>, avatar: "/img/who/rstar.jpg", description: <div>
                    知识图谱的安全领域实践者<br/>
                    <EnvironmentOutlined/> 北京
                </div>,
                span: 12, border: false,
            },
            {
                name: <Space>翠花哥哥 <div style={{fontSize: 12}}>
                    <a href="https://www.qingteng.cn/" target={"_blank"}>@青藤 云安全</a>
                </div></Space>, avatar: "/img/who/cuihuagege.jpg", description: <div>
                    安全产品 / 安全架构专家 <br/>
                    <EnvironmentOutlined/> 北京
                </div>,
                span: 12, border: false,
            },
        ]}
    />
}

export const ThanksFor = () => {
    return <Who
        who={[
            {
                name: <Space>四维创智 <div style={{fontSize: 12}}>
                    <Tag color={"red"}>特别赞助商</Tag>
                </div></Space>, avatar: "/img/who/4dogs.jpg", description: <div>
                    为推动 Yak 项目生态做出杰出贡献<br/>
                    同时感谢对 Yak 的慷慨捐赠<br/>
                    <EnvironmentOutlined/> 北京
                </div>,
                mainPage: "http://www.4dogs.cn/",
                span: 24, border: false,
            },
            {
                name: <Space>projectdiscovery.io
                    <div style={{fontSize: 12}}>
                        <Tag color={"geekblue"}>nuclei 集成</Tag>
                    </div>
                </Space>, avatar: "/img/who/projectdiscovery.png", description: <div>
                    无私的 MIT 开源精神 <br/>
                    为 Yak 提供 nuclei 漏洞检测能力 <br/>
                    <EnvironmentOutlined/>
                </div>,
                mainPage: "https://projectdiscovery.io/#/",
                githubLink: "https://github.com/projectdiscovery/",
                span: 12, border: false,
            },
            {
                name: <Space>vulhub
                    <div style={{fontSize: 12}}>
                        <Tag color={"geekblue"}>漏洞靶场基础设施</Tag>
                    </div>
                </Space>, avatar: "/img/who/vulhub.jpg", description: <div>
                    无私的漏洞靶场基础设施提供者 <br/>
                    <EnvironmentOutlined/> 北京
                </div>,
                mainPage: "https://vulhub.org/",
                githubLink: "https://github.com/vulhub/",
                span: 12, border: false,
            },
            {
                name: <Space>CNSS.io
                    <div style={{fontSize: 12}}>
                        <Tag color={"green"}>idea inspired</Tag>
                    </div>
                </Space>, avatar: "/img/who/cnss.png", description: <div>
                    优秀的 CTF 战队 <br/>
                    为 Yak 安全能力构建提供灵感 <br/>
                    <EnvironmentOutlined/> 成都，四川
                </div>,
                mainPage: "https://cnss.io/",
                githubLink: "https://github.com/cnss/",
                span: 12, border: false,
            },
        ]}
    />
}

export const Who: React.FC<WhoProp> = (props) => {
    return <Layout style={{backgroundColor: "#fff"}}>
        <Row gutter={14}>
            {props.who.map(i => {
                const actions: any[] = [];
                if (i.githubLink) {
                    actions.push(<Button
                        icon={<GithubOutlined/>}
                        target={"_blank"}
                        href={i.githubLink}
                        type={"link"}
                    />)
                }

                return <Col span={24} style={{marginBottom: 12}} lg={i.span || 12}>
                    <Card
                        bodyStyle={{width: "100%", height: 180}} bordered={i.border}
                        hoverable={!i.border}
                    >
                        <Meta
                            avatar={
                                i.avatar ? <Avatar
                                        size={60}
                                        src={i.avatar}
                                    /> :
                                    <Avatar size={60}>{i.name}</Avatar>
                            }
                            title={i.name}
                            description={<Space direction={"vertical"} size={8}>
                                {i.description}
                                <Space>
                                    {i.githubLink && <Button
                                        size={"small"}
                                        style={{paddingLeft: 0}}
                                        icon={<GithubOutlined/>}
                                        target={"_blank"} type={"link"}
                                        href={i.githubLink}
                                    />}
                                    {i.mainPage && <Button
                                        size={"small"}
                                        style={{paddingLeft: 0}}
                                        icon={<HomeOutlined/>}
                                        target={"_blank"} type={"link"}
                                        href={i.githubLink}
                                    />}
                                </Space>
                            </Space>}
                        />
                    </Card>
                </Col>
            })}
        </Row>
    </Layout>
};