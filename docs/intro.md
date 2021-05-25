---
sidebar_position: 1
---

# Yak 项目简介

## 为什么要学习 Yak Language？

Yak 希望成为用户的第一门，也是最后一门安全测试专用语言。你可以用它来快速编写扫描器，进行安全扫描，集成调用任何第三方工具与接口。

> **大道至简**: 友善，简单的语法
>
> **站在巨人肩膀**: 封装集成优秀的安全工具，让安全工具成为语言的一部分
>
> **厚积薄发，长久积累**: 从一套企业级安全系统中发展独立而来
>
> **企业级解决方案**：具备久经沙场的分布式执行解决方案，大规模扫描变的可能

## 安装教程

### Windows 安装 Yak

### MacOs 安装 Yak

### Linux 安装 Yak


## 速览：像搭积木一样编写扫描工具

我们创建一个 `service_scan.yak` 内容如下

```go
// 极简获取参数，--target xxxx  --port 80
scanTarget, scanPorts = cli.String("target"), cli.String("port")

// 默认批量进行服务扫描
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)

// 取出扫描结果（异步扫描结果）
for result = range results {
    println(result.String())
}
```

于是我们执行 `yak service_scan.yak --target 192.168.1.1/24 --port 22,80` 之后，将会看到如下输出

```bash
tcp://192.168.1.32:22	 open	openssh[6.6.1]
tcp://192.168.1.21:22	 open	openssh[7.4]
tcp://192.168.1.40:22	 open	openssh[6.6.1]
tcp://192.168.1.43:22	 open	openssh[5.3]
tcp://192.168.1.44:22	 open	openssh[5.3]
tcp://192.168.1.46:22	 open	openssh[5.3]
tcp://192.168.1.60:22	 open	openssh[5.3]
tcp://192.168.1.48:22	 open	openssh[5.3]
tcp://192.168.1.66:22	 open	linux_kernel[*]/openssh[7.2p2]/ubuntu_linux[*]
tcp://192.168.1.80:22	 open	openssh[5.3]
...
...
...
...
...
tcp://192.168.1.83:80	 open	apache_tomcat[1.1]/coyote[1.1]/coyote_http_connector[1.1]/java[*]/jquery[*]/jquery[1.3.2]
tcp://192.168.1.99:80	 open
tcp://192.168.1.122:80	 open	nginx[*]
tcp://192.168.1.125:80	 open	linux_kernel[*]/nginx[1.10.3]/ubuntu[*]/ubuntu_linux[*]
tcp://192.168.1.126:80	 open	nginx[*]/php[5.4.45]
```

## 接下来：欢迎进入 Yak 的世界

