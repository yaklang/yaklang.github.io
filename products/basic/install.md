---
sidebar_position: 1
---

# Yakit 下载与安装

Yakit 全线托管在 aliyun OSS 上。

## MacOS Yakit 通用下载地址（M1/Intel 均可用）

```
https://yaklang.oss-cn-beijing.aliyuncs.com/yak/{{ version }}/Yakit-{{ version }}-darwin-amd64.dmg
```

## Windows Yakit 通用下载地址

```
https://yaklang.oss-cn-beijing.aliyuncs.com/yak/{{ version }}/Yakit-{{ version }}-windows-amd64.exe
```

## Github 中下载 Yakit

在 Yakit Github Actions 迁移后，最新的版本可以在 Github 托管中下载，详情可参考

[Yakit 的 Github 托管](https://github.com/yaklang/yakit/releases)

## 如何启动？

由于 Yakit 本身不包含 Yak 引擎，所以如果想要使用 Yakit 的功能，需要您核心环境具备 Yak 引擎即可。

如果没有 Yak 引擎在环境变量中，直接安装 Yakit 之后将会看到如下内容

![](/img/products/yakit/yakit-miss-yak.jpg)

则说明 Yak 没有正常安装，用户进入 [安装Yak引擎的引导页](/docs/startup#安装最新的-yak-发行版)

或者按照 Yakit 错误提示的引导信息安装即可

### 进入 Yakit 操作台

Yak 引擎安装完成并在环境中配置好后，我们重启 Yakit 将会看到如下内容：

![img.png](/img/products/yakit/yakit-main-entry.png)

Yakit 页面出现本地随机端口上启动的 yak gRPC 服务器之后，说明本地 Yak 引擎环境已经成功。

点击 "Yakit 连接 Yak 核心引擎\[127.0.0.1:(random-local-port)\]" 即可进入主界面。

### 主界面简介

当我们进入 Yakit 引擎中，看到了类似如下的页面，我们的 Yakit 就安装完成了！

![img.png](/img/products/yakit/yakit-operator-main.png)

