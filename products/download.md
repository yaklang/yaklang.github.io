---
sidebar_position: 3
---

# 下载 Yakit 安装包

一般来说，yaklang.io 会自动同步最新版本到 aliyun OSS

当然如果你愿意从 Github 下载，请浏览 [Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases)

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
