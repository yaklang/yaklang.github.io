---
sidebar_position: 3
---

# 下载 Yakit 安装包

一般来说，yaklang.io 会自动同步最新版本到 aliyun OSS

当然如果你愿意从 Github 下载，请浏览 [Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases)

## Yakit - v1.0.10-beta10

如果您之前是 Yakit 用户，可以直接在应用内升级

如果您从未使用过 Yakit，可以通过 Github 下载安装

从 [Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases) 中下载最新版本

BugFix:

1. mitm 修复若干劫持中编码不正确的问题
1. 从 Content-Type 识别并过滤 Response 中各种静态文件

Feature:

1. 交互布局重新设计，易用性得到了比较大的提升
1. 支持在劫持过程中一键劫持全部响应信息
1. 编辑器右键菜单中增加各种操作快捷方式
1. HTTP History 重新设计后，可以更好地实现与之前各种模块之间的联动

## Yakit - v1.0.10-beta6

从 [Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases) 中下载最新版本

### BugFix

1. 增加了全新 Apple macOS 12 系统缺失 Rosetta2 与 /usr/local/bin 导致安装失败的问题。
2. Yakit 安装页增加了 macOS 12 arm64 的安装与环境配置提示
3. 普通用户增加了更有好的启动失败原因的提示，如果未安装引擎，将会更直观地提示

## Yakit - v1.0.10-beta5

从 [Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases) 中下载最新版本 

### Features

#### 用户便捷

我们新增了用户可以在欢迎页面中查看最新的 Yak 与 Yakit 版本了，不再需要每次都在网站下载了。

:::info

对于 macOS 用户，最推荐用户通过 Yakit 欢迎页面的升级来安装，因为这样可以避免每一次安装都手动 "信任" 应用和开发者。

:::


#### 核心功能：MITM

1. 我们重做了 mitm HTTP History 的整体界面，增加了更智能的高亮，修改了暗色主题，并且为数据包增加了 hex editor。
    1. 在 History 中，我们可以右键发送到 Web Fuzzer 
1. 同时我们拥有了更简洁的 web fuzzer 界面，数据包增加了右键编辑器的更多操作，比如 "编码"，一键修改 Method，一键修改为 Chunked 编码。

#### 插件体系：

1. 我们实现了一套 MITM 的插件体系，意味着我们可以更随意地使用 yak 编写 MITM 插件了，甚至可以用 yak 很容易的编写一个 "被动扫描" 功能。

当然，这个功能使用门槛相对比较高，我们会通过其他的手段让他的使用成本降低，类似 `Cookie模糊测试`, `黑盒污点检测` 等插件后续将完善，官方提供一些经典案例，同时探究这些用法真正好用的 "编排"。

#### Yak 版本

1. 我们新增了 dns，ping 等新的 yak 内置包，在官网自动生成的文档中可以找到。
1. str, http 新增了各种新成员，大家可以在自动补全（Yakit编辑器）中自由探索。

## Yakit - v1.0.9-beta8-patch1

1. [Yakit-1.0.9-beta8-patch1_for_MacOS/darwin_amd64](https://yaklang.oss-cn-beijing.aliyuncs.com/yak/1.0.9-beta8-patch1/Yakit-1.0.9-beta8-patch1-darwin-amd64.dmg)
1. [Yakit-1.0.9-beta8-patch1 for Windows](https://yaklang.oss-cn-beijing.aliyuncs.com/yak/1.0.9-beta8-patch1/Yakit-1.0.9-beta8-patch1-windows-amd64.exe)

### Features

#### 用户便捷

1. 用户协议只需要同意一次，将会自动保存状态到 `~/yakit-projects/base/` 下
1. 用户可以在不需要命令行操作 yak 的情况下，启动管理员权限的 yakit 来执行高权限操作
1. yakit 可以作为 yak 引擎的安装器存在了，**非常用好**
1. 远程模式增加了保存登陆选项到本地的操作 `~/yakit-projects/auth/`
1. 用户左上角将会有当前核心引擎版本 + Yakit 平台版本，如果有新版本将会提示
1. 新增 Tab 页功能，绝大多数的操作页面点击左边菜单，将会新建 Tab 页用以保证任务在"后台"顺利运行

#### 核心功能：MITM

1. MITM 新增以 "网站树" 的视角查看 HTTP History 的内容
1. MITM 支持劫持到的请求一键发送到 Web Fuzzer 了（右键菜单）
1. Web Fuzzer 优化界面操作，新增一个高性能表格，以解决大量数据（成千上万个）展示卡顿的问题 @TimWhite
1. "一键更新 Yak 模块" 优化为 "更新 Yakit 插件商店"
    1. nuclei templates 的下载将会自动完成
    1. yakit-store resources 下载完成将会自动并入用户的数据库，可以使用到插件商店中最新的插件

#### 通用能力插件：基础爬虫

1. 在用户更新到最新版本，并且同步了最新的插件商店之后，将会在 "通用能力" 中解锁 "基础爬虫" 功能。

这个功能的所有源码，配置都会在当前界面开放。***Have Fun!*

### 插件商店 (github.com/yaklang/yakit-store)

> 基础爬虫功能就是完全的 "插件" 商店的产物

1. 全新的插件商店：现可以支持用户在 Yakit 上编写插件，导出等功能；
    1. 插件参数 UI 可图形化配置
    1. 插件核心功能只需要通过 yak 脚本即可完成
    1. 插件结果展示可以支持实时展示和绘图展示多种，**不需要用户编写 UI**

### BugFix

1. 修复了 yak 引擎 MITM 在不规则的 HTTP Header 时解析出错无法劫持的问题
1. 修复了 windows 情况下无法通过 Yakit 安装 yak 引擎的问题
1. 修复了 yakit 删除端口出问题的前端

## Yakit - v1.0.8

端口扫描 GUI && UI 小调整

1. [Yakit-1.0.8_for_MacOS/darwin_amd64](https://yaklang.oss-cn-beijing.aliyuncs.com/yak/1.0.8/Yakit-1.0.8-darwin-amd64.dmg)
1. [Yakit-1.0.8 for Windows](https://yaklang.oss-cn-beijing.aliyuncs.com/yak/1.0.8/Yakit-1.0.8-windows-amd64.exe)

## Yakit v1.0.8-beta3

#### MacOS 安装 Yakit(1.0.8-beta3)

在 macOS 上安装 Yakit 非常容易，我们一般使用 Electron 打包出一个标准的 DMG 安装包，用户下载安装即可。
1. [Yakit-1.0.8-beta3_for_MacOS/darwin_amd64](https://yaklang.oss-cn-beijing.aliyuncs.com/yak/1.0.8-beta3/Yakit-1.0.8-beta3-darwin-amd64.dmg)

#### Windows 安装 Yakit(1.0.8-beta3)

在 Windows 上安装 Yakit 非常容易，作为一个标准的 windows electron 安装包，双击安装自动解压即可。
1. [Yakit-1.0.8-beta3 for Windows](https://yaklang.oss-cn-beijing.aliyuncs.com/yak/1.0.8-beta3/Yakit-1.0.8-beta3-windows-amd64.exe)
