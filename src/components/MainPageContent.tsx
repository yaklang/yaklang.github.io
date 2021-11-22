// @ts-ignore
import React, {useEffect} from "react";
import {Button, Card, Col, Divider, Image, Layout, Row, Space, Tabs, Tag, Typography} from "antd";
import ReactPlayer from "react-player";
import {GithubOutlined} from "@ant-design/icons";

const {Text, Paragraph} = Typography;

export interface MainPageContentProp {

}

interface Profile {
    svg: string
    content?: any
}

export interface ViewPlayerProp {
    url: string
}

export const ViewPlayer: React.FC<ViewPlayerProp> = (props) => {
    return <>
        <ReactPlayer
            url={[
                props.url,
            ]}
            loop={true}
            playsinline={true}
            controls={true}
            playing={true}
            width={"75%"}
            height={"75%"}
        />
    </>
};

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

const latestYakitVersion = "1.0.9-beta8-patch1"

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
            <div style={{maxWidth: 1000, width: "100%"}}>
                <Row style={{width: "100%"}}>
                    <Tabs style={{width: "100%"}} centered={true}>
                        {/*<Tabs.TabPane tab={"安装 Yak 最新版"} key={"yak"}>*/}
                        {/*    <Tabs tabPosition={"left"} style={{marginLeft: 50, marginRight: 50, textAlign: "left"}}*/}
                        {/*          centered={false}>*/}
                        {/*        <Tabs.TabPane key={"install-general"} tab={"在 MacOS 与 Linux 上安装 Yak"}>*/}
                        {/*            <div style={{marginTop: 30}}>*/}
                        {/*                MacOS/Linux: <Text*/}
                        {/*                code={true}*/}
                        {/*                copyable={true}>{`bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)`}</Text>*/}
                        {/*            </div>*/}
                        {/*        </Tabs.TabPane>*/}
                        {/*        <Tabs.TabPane key={"windows-install-yak"} tab={"Windows 上安装 Yak"}>*/}
                        {/*            <div style={{marginTop: 30}}>*/}
                        {/*                <Button type={"link"} target={"_blank"} href={"./docs/startup"}>在 Windows 上安装*/}
                        {/*                    Yak</Button>*/}
                        {/*            </div>*/}
                        {/*        </Tabs.TabPane>*/}
                        {/*    </Tabs>*/}
                        {/*</Tabs.TabPane>*/}
                        <Tabs.TabPane tab={"Yakit: 单兵平台与 Yak GUI"} key={"yakit"}>
                            <Space direction={"vertical"} style={{marginBottom: 15}}>
                                <>基于 Electron 打造的图形化操作界面的端口扫描，爬虫，漏洞扫描等能力的插件化平台</>
                                <Space>
                                    <Tag color={"green"}>完全开源</Tag>
                                    <Tag color={"geekblue"}>完全免费</Tag>
                                </Space>
                                <Space>
                                    <Button type={"primary"} href={"https://github.com/yaklang/yakit/releases"}
                                            target={"_blank"}>Yakit 全版本的 Github 托管</Button>
                                    <Button type={"link"} target={"_target"}
                                        // @ts-ignore
                                            icon={<GithubOutlined/>} href={"https://github.com/yaklang/yakit"}
                                    >
                                        Yakit 源码
                                    </Button>
                                </Space>
                            </Space>
                            <Tabs tabPosition={"left"} style={{marginLeft: 50, marginRight: 50, textAlign: "left"}}
                                  centered={false}>
                                {/*<Tabs.TabPane key={"windows-install-yak"} tab={"Aliyun OSS 下载最新 Yakit"}>*/}
                                {/*    <div style={{marginTop: 30}}>*/}
                                {/*        <Space>*/}
                                {/*            {[*/}
                                {/*                {*/}
                                {/*                    name: `MacOS Yakit-${latestYakitVersion}`,*/}
                                {/*                    url: `https://yaklang.oss-cn-beijing.aliyuncs.com/yak/${latestYakitVersion}/Yakit-${latestYakitVersion}-darwin-amd64.dmg`,*/}
                                {/*                },*/}
                                {/*                {*/}
                                {/*                    name: `Windows Yakit-${latestYakitVersion}`,*/}
                                {/*                    url: `https://yaklang.oss-cn-beijing.aliyuncs.com/yak/${latestYakitVersion}/Yakit-${latestYakitVersion}-windows-amd64.exe`,*/}
                                {/*                }*/}
                                {/*            ].map(i => {*/}
                                {/*                return <Button target={"_blank"} type={"primary"}*/}
                                {/*                               href={i.url}>{i.name}</Button>*/}
                                {/*            })}*/}
                                {/*        </Space>*/}
                                {/*    </div>*/}
                                {/*</Tabs.TabPane>*/}
                                {/*<Tabs.TabPane key={"install-yakit-from-aliyun"} tab={"Github 上下载最新的 Yakit"}>*/}
                                {/*    <div style={{marginTop: 30}}>*/}
                                {/*        <Space>*/}
                                {/*            <Button type={"primary"} href={"https://github.com/yaklang/yakit/releases"}*/}
                                {/*                    target={"_blank"}>Yakit 全版本的 Github 托管</Button>*/}
                                {/*            <Button type={"link"} target={"_target"}*/}
                                {/*                // @ts-ignore*/}
                                {/*                    icon={<GithubOutlined/>} href={"https://github.com/yaklang/yakit"}*/}
                                {/*            >*/}
                                {/*                Yakit 源码*/}
                                {/*            </Button>*/}
                                {/*        </Space>*/}
                                {/*    </div>*/}
                                {/*</Tabs.TabPane>*/}
                            </Tabs>
                        </Tabs.TabPane>
                    </Tabs>
                </Row>
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