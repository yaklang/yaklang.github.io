// @ts-ignore
import React from "react";
import {Layout, Card, Col, Row, Avatar, Button, Space, Tag} from "antd";
import {GithubOutlined, EnvironmentOutlined, HomeOutlined} from "@ant-design/icons";

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
                    碰巧会写点代码
                    <EnvironmentOutlined/> 成都，四川
                </div>,
                githubLink: "https://github.com/VillanCh",
                span: 24, border: false,
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
        ]}
    />
}

export const Contributors = () => {
    return <Who
        who={[
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