// @ts-ignore
import React, {useEffect} from "react";
import {Card, Col, Divider, Image, Layout, Row, Space, Tag, Typography} from "antd";
import ReactPlayer from "react-player";

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
                <Text mark={true} style={{fontSize: 16}} strong={true}>全球第一种</Text> 安全研发专用语言
                语言 <Text mark={true} strong={true} style={{fontSize: 20}}>内置</Text> 扫描模块 <br/> 无需依赖管理 <Text
                mark={true} style={{fontSize: 16}} strong={true}>All in ONE</Text>
                <br/>
                你想要的 <Text mark={true}>应有尽有</Text>：
            </Paragraph>
            <Tag style={{marginBottom: 3}} color={"geekblue"}>servicescan</Tag>
            <Tag style={{marginBottom: 3}} color={"blue"}>synscan</Tag>
            <Tag style={{marginBottom: 3}} color={"orange"}>subdomain</Tag>
            <Tag style={{marginBottom: 3}} color={"red"}>crawler</Tag>
            <Tag style={{marginBottom: 3}} color={"pink"}>mitm</Tag>
            <Tag style={{marginBottom: 3}} color={"purple"}>spacengine</Tag> <Text>...</Text>
        </>
    },
    {
        svg: "/img/main/global.svg", content: <>
            <Paragraph style={{marginBottom: 4}}>
                独一无二的 <br/>
                <Text style={{fontSize: 17}} strong={true} mark={true}>可编程 Web Fuzz</Text> 方案
                <br/>
                急剧降低
                <Tag style={{marginBottom: 4, marginLeft: 4}} color={"geekblue"}>漏洞检测算法</Tag>
                <Tag style={{marginBottom: 12,}} color={"green"}>PoC / EXP</Tag> 的门槛<br/>
                与此同时，<Text mark={true}>任何功能模块</Text> 都可以通过 Yak 进行 <Text style={{fontSize: 16}} strong={true}
                                                                        mark={true}>融合</Text>，释放编程人员的想象力
            </Paragraph>
        </>
    },
    {
        svg: "/img/main/hacker.svg", content: <>
            <Paragraph>
                极具教育意义：
                <Text mark={true} strong={true} style={{fontSize: 16}}>包含实战案例</Text>的
                <Text mark={true} strong={true} style={{fontSize: 16}}>安全研发教程</Text>
                <br/>
                助你快速掌握安全研发能力 <br/>
                <Tag style={{marginBottom: 4}} color={"geekblue"}>主动端口/爬虫扫描</Tag>
                <Tag style={{marginBottom: 4}} color={"cyan"}>被动扫描</Tag>
                <Tag style={{marginBottom: 4}} color={"red"}>中间人劫持</Tag>
                <Tag style={{marginBottom: 4}} color={"magenta"}>PoC 编写</Tag>
                <Tag style={{marginBottom: 4}} color={"gold"}>Web Fuzz 算法</Tag>
                <br/>
                <Text>...</Text><br/>
                成为安全研发新星
            </Paragraph>
        </>
    },
    {
        svg: "/img/main/hacker-spy.svg", content: <>
            <Paragraph>
                原生兼容 <Text
                mark={true}
                strong={true}
                style={{fontSize: 16}}
            >nuclei yaml poc/exp</Text>
                <br/>
                <Text mark={true}>
                    无需额外下载
                </Text> Nuclei 即可享受所有其所有漏洞检测能力。
                <br/>
                社区提供 <Text mark={true} strong={true} style={{fontSize: 16}}>上千种</Text> 漏洞检测 PoC
            </Paragraph>
        </>
    },
]

export const MainPageContent: React.FC<MainPageContentProp> = (props) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         try {
    //             (document.getElementById("video-for-yaklang") as any).play()
    //         } catch (e) {
    //
    //         }
    //     }, 1000)
    // }, [])

    return <div>
        <Layout style={{backgroundColor: "#fff", margin: 24, textAlign: "center", alignItems: "center"}}>
            <div style={{maxWidth: 1000}}>
                <Row gutter={24} style={{marginTop: 20, marginBottom: 40}}>
                    {(profiles || []).map(i => {
                        return <Col span={24} lg={12} style={{marginTop: 40}}>
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
            <Divider>
                Yak 全景 / Yak Panoramic View
            </Divider>
            <Image src={"/img/docs/yak_core/yak-modules.jpg"} preview={false}>

            </Image>
            <Divider/>
            <Typography.Title level={1}>代码样例：TALK IS CHEAP, SHOW ME THE <Text
                strong={true}
                mark={true}>CODE
            </Text></Typography.Title>
            <br/>
            <ReactPlayer
                url={[
                    "https://yaklang.oss-cn-beijing.aliyuncs.com/yak_quick_view_1.5.mp4"
                ]}
                loop={true}
                playsinline={true}
                controls={true}
                playing={true}
                width={"75%"}
                height={"75%"}
            />
            {/*<video*/}
            {/*    id={"video-for-yaklang"}*/}
            {/*    src="https://yaklang.oss-cn-beijing.aliyuncs.com/yak_quick_view.mov"*/}
            {/*    loop={true} playsInline={true} controls={true} autoPlay={true} */}
            {/*    width={1000}*/}
            {/*/>*/}
            <br/>
            <br/>
            {/*<Tabs centered={true} style={{marginBottom: 80}}>*/}
            {/*    {CodeDemos.map((i, index) => {*/}
            {/*        return <TabPane tab={i.title} key={index} style={{height: 550}}>*/}
            {/*            /!*<Row gutter={24}>*!/*/}
            {/*            /!*<Col md={24} sm={24} lg={8}>*!/*/}
            {/*            /!*    <Card*!/*/}
            {/*            /!*        bordered={false}*!/*/}
            {/*            /!*    >*!/*/}
            {/*            /!*        {i.desc}*!/*/}
            {/*            /!*    </Card>*!/*/}
            {/*            /!*</Col>*!/*/}
            {/*            /!*<Col md={24} lg={16}>*!/*/}
            {/*            <Image*/}
            {/*                style={{maxWidth: 1400}}*/}
            {/*                src={i.code}*/}
            {/*                preview={false}*/}
            {/*                // width={900}*/}
            {/*            />*/}
            {/*            /!*</Col>*!/*/}
            {/*            /!*</Row>*!/*/}
            {/*        </TabPane>*/}
            {/*    })}*/}
            {/*</Tabs>*/}
        </Layout>
    </div>
};