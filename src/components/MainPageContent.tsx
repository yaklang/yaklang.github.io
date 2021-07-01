// @ts-ignore
import React from "react";
import {Col, Layout, Row, Image, Card, Space, Typography, Tag, Button} from "antd";

const {Text, Paragraph} = Typography;

export interface MainPageContentProp {

}

interface Profile {
    svg: string
    content?: any
}

const profiles: Profile[] = [
    {
        svg: "/img/main/scan.svg", content: <>
            <Paragraph style={{marginBottom: 4}}>
                <Text mark={true} style={{fontSize: 16}} strong={true}>全球第一种</Text> 安全领域的专用编程语言，<Text mark={true}>基于 Golang 高效精准</Text><br/>
                语言 <Text mark={true} strong={true} style={{fontSize: 20}}>内置</Text> 扫描模块 <br/>
                你想要的 <Text mark={true}>应有尽有</Text>：
            </Paragraph>
            <Tag style={{marginBottom: 3}} color={"geekblue"}>servicescan</Tag>
            <Tag style={{marginBottom: 3}} color={"blue"}>synscan</Tag>
            <Tag style={{marginBottom: 3}} color={"orange"}>subdomain</Tag>
            <Tag style={{marginBottom: 3}} color={"red"}>crawler</Tag>
            <Tag style={{marginBottom: 3}} color={"pink"}>mitm</Tag>
            <Tag style={{marginBottom: 3}} color={"purple"}>spacengine</Tag>
        </>
    },
    {
        svg: "/img/main/global.svg", content: <>
            <Button
                size={"small"} type={"link"} style={{marginBottom: 6}}

            >
                <Paragraph style={{marginBottom: 4}}>
                    独一无二的 <br/>
                    <Text style={{fontSize: 17}} strong={true} mark={true}>可编程 Web Fuzz</Text>
                </Paragraph>
            </Button>
            <br/>
            <br/>
            信息收集基础扫描与
            <Tag style={{marginBottom: 4}} color={"geekblue"}>漏洞检测算法</Tag>
            <Tag style={{marginBottom: 4}} color={"green"}>PoC / EXP</Tag>
            完美融合的神奇体验
        </>
    },
    {
        svg: "/img/main/hacker.svg", content: <>
            <Paragraph>
                <Text mark={true} strong={true} style={{fontSize: 16}}>包含实战</Text>案例的超强 <Text
                mark={true} strong={true} style={{fontSize: 16}}>安全研发教程</Text>，助你快速掌握安全研发能力 <br/>
                企业内部孵化，高效且稳定，是你可以信任的好伙伴<br/>
            </Paragraph>
        </>
    },
    {
        svg: "/img/main/networking.svg", content: <>
            语言研发团队汇集业内顶尖人才 <br/>
        </>
    },
]

export const MainPageContent: React.FC<MainPageContentProp> = (props) => {
    return <div>
        <Layout style={{backgroundColor: "#fff", margin: 24, textAlign: "center", alignItems: "center"}}>
            <div style={{maxWidth: 1000}}>
                <Row gutter={24}>
                    {(profiles || []).map(i => {
                        return <Col span={24} lg={12} style={{marginBottom: 16}}>
                            <Card
                                hoverable={false} bordered={false} style={{height: 240}}
                                bodyStyle={{
                                    textAlign: "left", alignItems: "center",
                                }}
                            >
                                <Space size={18}>
                                    <Image
                                        src={i.svg} preview={false}
                                        style={{maxHeight: 180, maxWidth: 180}}
                                    />
                                    <div style={{maxWidth: 200}}>
                                        {i.content}
                                    </div>
                                </Space>
                            </Card>
                        </Col>
                    })}
                </Row>
            </div>
        </Layout>
    </div>
};