---
sidebar_position: 1
---

# Yak：致力于安全能力融合的语言

## 我们要解决什么问题？

当我们提到黑客编程，可能大家想起得最多是 Python。凭借简单的语法和丰富的安全工具生态基础，Python 被安全从业人员视为必学必会的技能。

随着大家技术的深入，我们不再满足于 Python 编写脚本来服务于自己，大量工具/平台/安全产品的出现，规模化的需求已经被提上了日程， Golang
慢慢进入了大家的视野。作为一门效率更高，更适合产品分发，工程研发和平台搭建的语言，很快各种安全组织和白帽子们发挥自己的研发能力实现了很多工具和系统的研发。

在这个阶段中，我们开始关注更加专业的 "安全研发"。

与此同时，"安全研发不光包含安全平台的研发，也包含安全能力的研发"，这个理念慢慢被大家所接受。 我们常用合适的语言编写平台去处理业务需求，但是安全能力的研发往往更加复杂，一般来说不同的安全工具安全能力会采用"最合适"的语言来完成，
这就造成了安全平台与安全能力模块的割裂。为什么安全能力要放在不同项目中呢？不能使用同一个平台吗？

:::tip 关于 "最合适" 的说明

很大一部分原因是 "历史原因"，和没有专人去做新的场景适配，导致 "老代码" 越来越多。

:::

为了搞定这个问题，我们从事了很多工作在 Yak 中，我们希望他能承担 "安全能力融合" 的职责，你的 PoC，你的扫描器，你的扫描模块，漏洞扫描算法都可以用它来解决。

我们想提供 "一站式" 的安全能力基座。

[Yak 发展史](/docs/history)

## 核心理念：安全基础能力融合

1. 完善的内容生态
    1. 提供入门/保姆级别的安全研发教程
    1. 长期支持，具有成功的企业实践经验
    1. 高级功能自由度极高，独一无二的 Fuzz 体验
1. 底层融合多种安全能力/工具，打破次元壁
1. 集成 MIT 协议的高质量工具
1. 提升行业整体安全水平

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

### 语言基础架构

![](/img/docs/yak_core/yak-modules.jpg)
