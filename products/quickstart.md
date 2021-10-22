---
sidebar_position: 2
---

# Yakit 从 0 快速开始

Author: `small_j`

## Yakit第一篇Yak环境安装

对于小白用户来讲 yak 安装可以直接参考官网：[Yakit教程与文档](http://www.yaklang.io/docs/startup) 这里笔者同学因为条件有限，给大家演示windows和Linux安装YaK环境

### 1）windows安装

**直接可以已管理员权限启动CMD 拉取官网上方的二进制文件**

```
powershell (new-object System.Net.WebClient).DownloadFile('https://yaklang.oss-cn-beijing.aliyuncs.com/yak/latest/yak_windows_amd64.exe','yak_windows_amd64.exe') && yak_windows_amd64.exe install && del /f yak_windows_amd64.exe
```

上述代码其实只有三个步骤（管理员权限下）:
1. 下载最新版本的 windows x64 的 yak 发行版
2. 以管理员执行 yak_windows_amd64.exe install 安装 yak 到本地可执行目录下
3. 删除刚刚下载的文件

![](/img/quickstart/1.png)

![](/img/quickstart/2.png)

但是由于 SYN 扫描功能的需要，Windows 版本需要安装依赖。如果用户之前有安装过 Nmap，那么一般不需要额外处理。如果出现了依赖缺失：可以安装 [npcap for Common Windows Version](https://nmap.org/npcap/dist/npcap-1.50.exe)

`yak version` 或 `yak -h` 检验yak环境

![](/img/quickstart/3.png)

### 2）Linux安装

**大多数用户可以直接一条命令 Linux x64 版本的 Yak 发行版**

```
bash <(curl -s http://oss.yaklang.io/install-latest-yak.sh)

```

这是一个 Ubuntu 20.4 X64的系统

![](/img/quickstart/5.png)

**可能的依赖问题**：

Linux 平台的 Yak 是通过静态编译的，一般来说是不需要额外安装 `libpcap`

但是如果静态编译版本出现了问题，导致 Yak 引擎不可用，可下载"非静态编译"版本使用。

"非静态编译" 版本需要通过安装 `apt install libpcap` 来解决 `libpcap.so` 缺失的问题。

`yak version` 或 `yak h` 检验yak环境

![](/img/quickstart/6.png)

### 3）注意踩坑

#### Q1

Yak内核引擎目前更新到v1.0.8 以后更新可以直接使用命令`yak upgrade ` 前提是管理员权限   如果内核引擎在v1.0.8之前的版本没有`yak upgrade `命令 可以从新去拉二进制文件进行更新

更新这里有个踩坑点就是 如果你启动了Yakit 更新 Yak内核 进程占用 更新二进制 yak.exe无法删除 

此处解决办法 进程中找到yak.exe删除进程，或者直接一点的就是重启电脑/服务器。

![](/img/quickstart/4.png)

更多Yak环境详情 查询官网[Yakit教程与文档](http://www.yaklang.io/docs/startup)

## Yakit第二篇Yakit安装即使用

可以进入官网下载页 [下载 Yakit](/products/download)

Yakit全线托管在aliyun OSS上

**MacOS Yakit 通用下载地址（M1/Intel 均可用）**

```
https://yaklang.oss-cn-beijing.aliyuncs.com/yak/{{ version }}/Yakit-{{ version }}-darwin-amd64.dmg
```

**Windows Yakit 通用下载地址**

```
https://yaklang.oss-cn-beijing.aliyuncs.com/yak/{{ version }}/Yakit-{{ version }}-windows-amd64.exe
```

**Github 中下载 Yakit**

在 Yakit Github Actions 迁移后，最新的版本可以在 Github 托管中下载，详情可参考

[Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases)

### 1）Yakit安装GUI

1. 下载![](/img/quickstart/7.png)
2. 直接双击exe程序自动安装  安装成功桌面会自动创建快捷属性 点击打开即可 就是GUI界面![](/img/quickstart/8.png)

**同理MacOS安装Yakit的GUI也是如此，Linux系统无需安装Yakit的GUI，只需要有Yak环境就可以启动服务，Windows就可以直接远程连接。**

### 2）启动Yakit

**由于 Yakit 本身不包含 Yak 引擎，所以如果想要使用 Yakit 的功能，需要您核心环境具备 Yak 引擎即可。**

由于 Yak 核心引擎与 Yakit 的分离式安装，Yakit 仅仅作为一个客户端而存在，Yakit 的使用理所当然就应该存在两种模式

1. 本地模式：默认启动一个随机端口的 `yak grpc` 服务器
1. 远程模式：`yak grpc` 可以启动在任何平台 / 任何网络位置，包括
   1. 远端托管主机 ECS/VPS
   1. 本地个人 PC
   1. 内网环境

#### Windows启动服务本地模式

**直接点击Yakit连接Yak核心引擎 系统会启动Yak.exe服务 默认的是随机端口 连接进入Yakit的GUI主页面**

![](/img/quickstart/10.png)

![](/img/quickstart/11.png)

如果遇到电脑问题或者BUG之类Yakit启动进去不了  可以用CMD命令 启动Yak服务

`yak grpc -h`	帮助模式

`yak grpc`	启动Yak服务

![](/img/quickstart/12.png)

启动server成功 然后在点击Yakit 直接会自动连接本地服务，进入yakit的GUI界面

![](/img/quickstart/13.png)

#### Linux启动服务远程模式

Windows系统我们介绍了命令行启动yakit服务，Linux同理也可以启动服务，本机可以直接远程连接

`yak grpc -h`	帮助模式

```
NAME:
   yak grpc - 启动 GRPC 服务器

USAGE:
   yak grpc [command options] [arguments...]

OPTIONS:
   --host value         启动 GRPC 服务器的本地地址 (default: "localhost")
   --port value         启动 GRPC 的端口 (default: 8087)
   --secret value       启动 GRPC 的认证口令
   --tls
   --gen-tls-crt value  (default: "build/")
```

命令直接启动：`yak grpc --host 0.0.0.0 --port 8087 --secret youR-aw0some-PA5s --tls`

```
--host 解释：启动GRPC服务器本地地址 VPS服务器可以直接写0.0.0.0
--port 解释：启动GRPC端口 阿里云/腾讯云VPS 切记开放安全组端口
--secret 解释： gRPC 服务器增加一个简单的密码认证
--tls 解释：保障通信不被窃听，可以显著降低通信劫持的风险
```

![](/img/quickstart/14.png)

PS：

open ca-cert和open ca-key此处两行报错可以不用管 目前版本小bug 后续更新就没有了

**Linux启动服务，本地可以直接连接，此处需要注意PEM证书一定要全部复制进去**

![](/img/quickstart/15.png)

![](/img/quickstart/16.png)

### 3）注意踩坑

#### Q1

**1.如果没有 Yak 引擎在环境变量中，直接安装 Yakit 之后将会看到如下异常内容**

![](/img/quickstart/9.png)



则说明 Yak 没有正常安装，用户进入 [安装Yak引擎的引导页](http://www.yaklang.io/docs/startup#安装最新的-yak-发行版)或者按照 Yakit 错误提示的引导信息正确安装Yak环境

#### Q2

**1.远程模式启动，注意一定放行GRPC监听端口，如图阿里云设置安全组**

![](/img/quickstart/17.png)

**2.注意PEM证书格式，带上头部和尾部全部复制**

![](/img/quickstart/18.png)
