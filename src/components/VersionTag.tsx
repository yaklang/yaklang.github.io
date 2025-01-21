// @ts-ignore
import React from "react";
import {Button, Card, List, Space, Tag, Typography} from "antd";

export interface VersionTagProp {
    versionWithoutV: string
}

const {Text} = Typography;

export const YakitVersionTag: React.FC<VersionTagProp> = (props) => {
    const version = props.versionWithoutV;
    return <Card hoverable={false} style={{marginBottom: 24}} title={`Yakit-v${version}`} size={"small"}>
        <Space direction={"vertical"}>
            <Space>
                <Button
                    type={"link"}
                    href={`https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-darwin-x64.dmg`}>
                    下载 MacOS(intel) 版本的 Yakit 安装包 （v{version}）
                </Button>
            </Space>
            <Space>
                <Button
                    type={"link"}
                    href={`https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-darwin-arm64.dmg`}>
                    下载 MacOS(Silicon-Chip m1/pro/max) 版本的 Yakit 安装包 （v{version}）
                </Button>
            </Space>
            <Space>
                <Button
                    type={"link"}
                    href={`https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-windows-amd64.exe`}>
                    下载 Windows 版本的 Yakit 安装包 （v{version}）
                </Button>
            </Space>
            <Space>
                <Button
                    type={"link"}
                    href={`https://oss-qn.yaklang.com/yak/${version}/Yakit-${version}-linux-amd64.AppImage`}>
                    下载 Linux 版本的 Yakit 安装包 （v{version}）
                </Button>
            </Space>
        </Space>
    </Card>
};

interface VersionTagsProp {
    tags: string[]
}

export const YakitVersionTags: React.FC<VersionTagsProp> = props => {
    return <List<{ key: any, version: string }> dataSource={props.tags.map((i, index) => {
        return {version: i, key: index}
    })} renderItem={i => {
        return <List.Item key={`${i.key}`}>
            <YakitVersionTag versionWithoutV={i.version}/>
        </List.Item>
    }}>

    </List>
}
