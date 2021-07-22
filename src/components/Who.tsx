// @ts-ignore
import React from "react";
import {Layout, Card, Col, Row, Avatar, Button, Space} from "antd";
import {GithubOutlined} from "@ant-design/icons";

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
                    <a href="/">@Yak</a> 项目作者
                </div></Space>, avatar: "/img/who/v1ll4n.jpg", description: <div>
                    安全研发从业人员<br/>
                    现供职于 @蚂蚁集团 <br/>
                    成都，四川
                </div>,
                githubLink: "https://github.com/VillanCh",
                span: 24, border: false,
            }
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
                                        style={{paddingLeft: 0}}
                                        icon={<GithubOutlined/>}
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