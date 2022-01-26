---
sidebar_position: 3
---

# 下载与安装指南

一般来说，yaklang.io 会自动同步最新版本到 aliyun OSS

下载 Yakit 的方式有两种

1. [【推荐】aliyun OSS 官方下载渠道](#download)
2. [【备用】Github 下载渠道](https://github.com/yaklang/yakit/releases)

## 下载 {#download}

import {YakitVersionTag, YakitVersionTags} from "../src/components/VersionTag.tsx"

<YakitVersionTag versionWithoutV="1.0.12-sp7"/>

## 安装 {#install}

Yakit 安装包在 Windows 下执行标准 NISI 安装程序，在 MacOS 下执行标准 DMG 安装程序

:::tip 

在 Windows 中和 Linux 安装过程中一般并不会遇到共性特殊问题，我们将不再赘述。

:::

### MacOS 安装问题 {#install-on-macos}

在 MacOS 下安装常见会遇到两个安装问题

1. 安装 "可信来源" 的问题。
2. 提示 "Yakit 已损坏"

#### 针对 "可信来源" 安装的解决办法

> Reference: https://zhuanlan.zhihu.com/p/51328476

Terminal / iTerm2 中执行 `sudo spctl --master-disable` 即可在 App Store 中可选 "任何来源"

:::info 针对 10.15 版本的 MacOS 可能提示 "损坏" 可参考下一节中的解决办法
:::

#### 针对 "已损坏" 的解决办法 {#install-on-macos-broken-yakit.app}

:::tip MacOS 提示 "已损坏" 的原因解释

苹果系统有一个 GateKeeper 保护机制。

从互联网上下载来的文件，会被自动打上 `com.apple.quarantine` 标志，我们可以理解为 "免疫隔离"。

系统根据这个附加属性对这个文件作出限制。

随着版本不同，MacOS 对 `com.apple.quarantine` 的限制越来越严格，在较新 的 MacOS 中，会直接提示 "映像损坏" 或 "应用损坏" 这类很激进的策略。

我们可以通过手动移除该选项来解决此问题。

`sudo xattr -r -d com.apple.quarantine /Applications/Yakit.app`

:::

如果在较新的 macOS 系统中，用户安装后提示

![](/img/products/yakit/yakit-app-broken-m1.png)

我们可以打开 Terminal 来执行如下命令，把 quarantine 标签移除

`sudo xattr -r -d com.apple.quarantine /Applications/Yakit.app`

### 下载核心引擎

:::info 为何安装了 Yakit 还需要安装引擎？引擎与端分离的解释

因为 Yakit 的核心并不在工具本身上，而是依托于 Yak gRPC 接口； 也就是说，我们可以仅仅只把 Yakit 当作一个 "视窗" 来操纵 Yak 引擎来完成我们想要实现的安全能力。

:::

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-install-engine.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

当我们安装完核心引擎之后，即可进入 Yakit 操作台开启一天的工作了。**Happy Game!**

![img.png](/img/products/yakit/yakit-operator-main.png)

## 历史版本

<YakitVersionTags tags={[
    "1.0.12-sp7",
    "1.0.12-sp6",
    "1.0.12-sp5",
    "1.0.12-sp4",
    "1.0.12-sp3",
    "1.0.12-sp2",
    "1.0.12-sp1",
]}/>