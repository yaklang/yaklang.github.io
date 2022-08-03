---
sidebar_position: 3
---

# 场景探索：使用远程模式劫持、扫描或手动渗透！

## 背景：

Yakit 的独特架构决定了整个系统的使用其实并不是那么局限，很多时候，我们经常会使用到 “远程模式” 的场景：引擎安装在服务器，而用户使用自己的 PC 去完成日常工作。在 Yakit 中，通过 gRPC 接口与 Yak 核心引擎进行沟通，类似 C/S 的架构，实际上并不一定需要依赖本地 Yak 核心引擎。

![](/img/products/yakit/scene-exploration-backgroud.png)

## 准备条件：

1. Linux 服务器：推荐 Ubuntu / Debian 系
2. 防火墙（安全策略组）
3. 个人 PC 安装 Yakit 客户端

## 如何在服务器安装 Yak 核心引擎？

在了解整个 Yakit 的架构后，我们明确提出可以使用远程模式连接部署在自己服务器上的 Yak 核心引擎。

> 一般来说，Yakit 无法运行在没有桌面环境的操作系统中，因此如果我们要安装在 Linux 服务器中，通常情况下，Yakit 并不能运行。

### 有外网：一条命令安装核心引擎

```Bash
bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)
```

### 无外网：下载与独立上传

当在生产网或者无外网容器内，需要安装核心引擎应该如何操作？    
我们可以从 yaklang 的 OSS 托管中下载引擎

```Bash
# 下载最新可用版本
https://yaklang.oss-cn-beijing.aliyuncs.com/yak/latest/yak_linux_amd64

# 带版本号下载
https://yaklang.oss-cn-beijing.aliyuncs.com/yak/{{version}}/yak_linux_amd64
```

在下载到引擎后，我们通过 SCP 或 FTP 把核心引擎的文件传输入到服务器中

```Bash
scp ./yak_linux_amd64 root@[your-server]:~
```

在上传之后 `chmod +x` 赋予引擎可执行权限，或者添加到系统环境变量或者 `/usr/local/bin/yak` 即可方便使用。

### 验证安装成功

当我们执行 `yak version` 或者 `./yak_linux_amd64 version` 时，将会在页面打印出当前版本的信息

```c
root@server:~# yak version
Yak Language Build Info:
    Version: v1.0.16-sp16-e9eeef4e1951f2106c216df29c111a325edf7079
    GoVersion: go version go1.17.12 linux/amd64
    GitHash: e9eeef4e1951f2106c216df29c111a325edf7079
    BuildTime: Wed Jul 27 11:46:29 2022 +0800
```

如果大家看到上面类似的版本信息，说明此刻已经安装成功

## 启动远程引擎 gRPC 服务器

### 临时使用：

如果仅仅是临时使用 Yak 引擎，其实直接使用 `yak grpc` 命令即可    
在防火墙打开的情况下，执行这个命令即可在本地启动一个带 TLS + 密码认证的 gRPC 服务器

```plain text
yak grpc --host 0.0.0.0 --tls --secret [your-gre4t-passw0rd]
```

当我们启动后将看到如下输入

```plain text
[INFO] 2022-07-28 09:31:04 +0800 [default:log.go:178] start to create grpc schema...
[INFO] 2022-07-28 09:31:04 +0800 [default:log.go:178] load gorm database connection
[INFO] 2022-07-28 09:31:04 +0800 [default:log.go:178] database dir[/root/yakit-projects] mode: drwxr-xr-x
[INFO] 2022-07-28 09:31:04 +0800 [default:log.go:178] start to listen on: 0.0.0.0:8087
[WARN] 2022-07-28 09:31:04 +0800 [default:log.go:168] open ca-cert failed: open build/yakit-grpc-cert.pem: no such file or directory
[WARN] 2022-07-28 09:31:04 +0800 [default:log.go:168] open ca-key failed: open build/yakit-grpc-key.pem: no such file or directory
[INFO] 2022-07-28 09:31:04 +0800 [default:log.go:178] serve reverse(facade) server...
[INFO] 2022-07-28 09:31:05 +0800 [default:log.go:178] use current Root CA to login (For Yakit)

-----BEGIN CERTIFICATE-----
MIIDDjCCAfagAwIBAgIQcoEeBasnXCB46OPDLIgOxzANBgkqhkiG9w0BAQsFADAg
MR4wHAYDVQQDExVZYWtpdCBUZWFtU2VydmVyIFJvb3QwIBcNOTkxMjMxMTYwMDAw
WhgPMjEyMTA3MDQwMTMxMDVaMCAxHjAcBgNVBAMTFVlha2l0IFRlYW1TZXJ2ZXIg
J+jfSX3Qtnf...............................gsdewfakueZIBdZKK5prYQ
GFXdd6RK5tGNgaZr3RyiZ1mF9hZ0kpQzQewNw5sLZ4XHU4V9xH0LjUJAdZYLFwjO
9RBWUjNymnwgrsmzKKAsxBcnNMWG3ZwZsPJrpjMawd7Zl5KGK9HrmxSwrh5IdbAI
SrG75FlBk70lPIpSnQ6VYteA
-----END CERTIFICATE-----



[INFO] 2022-07-28 09:31:05 +0800 [default:log.go:178] start to startup grpc server...

```

当我们启动成功后，就可以马上使用 Yakit 的远程模式连接了！

![](/img/products/yakit/scene-exploration-long-range.png)

### 生产环境部署：

当然，用户可能会随时有需求说要在任何情况都能使用自己部署在公网的 `yak grpc` 服务器，或者说有需求要把 Yak 核心引擎部署进自己产品中，那这应该怎么办呢？

使用 `nohup` 命令是一种简易的方案，但并不是完全推荐这样做，最推荐同时也是最贴近实际环境的方式是，使用 `docker` 技术来完成部署。

#### docker 命令部署 yak grpc 临时服务器

当我们假定用户的 yak 引擎被正确安装在了 `/usr/local/bin/yak` 目录下，我们可以通过这样的方式临时启动一个 docker 执行环境

```plain text
docker run --rm -it -v /usr/local/bin/yak:/usr/local/bin/yak -p 8087:8087  ubuntu yak grpc --host 0.0.0.0 --tls --secret 123
```

#### docker-compose 部署生产环境私人服务器

当本机下载 yak 引擎并安装到系统环境变量中，可以通过 docker-compose 来构建环境，使用 docker-compose 来启动执行环境，设置密码，并且控制输出的路径

```YAML
version: "2"

services:
  bridge:
    image: ubuntu:latest
    restart: always
    volumes:
      - ./yakgrpc-tls-config:/tls-config/
      - ./yakit-projects:/root/yakit-projects/
      - /usr/local/bin/yak:/usr/local/bin/yak
    ports:
      - 8087:8087
    command: yak grpc --host 0.0.0.0 --tls --gen-tls-crt /tls-config --secret [your-great-password]

```

在设置好 docker-compose 文档之后，可以通过 `docker-compose up -d` 来部署一个后台容器运行 Yak 核心引擎。

## 问题排查：

如果部署好服务器之后，Yakit 仍然不可以连接，我们可以从以下几个方面来调试这个功能

1. 确认端口是否可以访问？
   1. 从客户端使用 `nc -nv [your-server-ip] [port]` 命令来判断端口是否开放
   2. Socat 类似的工具也都可以完成这个事情
   3. <span style={{background:"#fff67acc"}}>如果端口访问不通，需要排查服务器的安全策略组配置，或防火墙配置</span>
2. 端口通了，但是仍然无法连接：
   1. 可以先卸掉所有认证机制，观察无认证是否可连通，再加上 TLS 与密码配置
3. 版本问题：如果服务端和客户端版本相差特别大，将会出现协议不匹配的问题

## 升级引擎：

推荐引擎升级方式使用 “重装” 的方式升级，将自动更新系统环境变量中的引擎主程序，重启 docker-compose 生产环境部署即可；

```YAML
bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)
```

## 关于加密：

1. 生产环境下使用引擎服务器<span style={{background:"#fff67acc"}}>务必开启 TLS：可有效保护与服务器之间的通信不被窃听</span>
2. 在开启了 TLS 之后，<span style={{background:"#fff67acc"}}>务必设置密码认证：以保护你的 Yak 引擎不被别人链接</span>
