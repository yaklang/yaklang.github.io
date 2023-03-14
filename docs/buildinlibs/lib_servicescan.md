---
sidebar_position: 13
---

# [servicescan] 服务指纹扫描

:::danger 实战案例的具体 IP 地址将会被隐藏

本文会出现很多实际互联网扫描公开资产的案例，但是关键的 IP 将会被打码。

:::

相比 [synscan](./lib_synscan)，`servicescan` 更像是一个精准扫描的手术刀，主要启动一个连接，对连接目标进行精准的扫描，获取精确指纹信息。

值得一提的是，`servicescan` 的指纹匹配机制并没有过分全部重复 `造轮子`，用户也并不需要担心增加额外多的学习成本，作为一个站在巨人肩膀上的扫描库，`servicescan` 支持了

1. `nmap` 原生指纹库和扫描格式
1. `wappalyzer` 针对 Web 应用的扫描指纹库也被支持了

甚至如果用户自己想要编写 `nmap` 的指纹库，放在 `servicescan` 中使用，yak 也是非常支持并欢迎的。

甚至于，我们在进行指纹扫描结果的时候，也并没有贸然使用不规范/不统一的格式，我们鼓励输出结果中使用 `CPE` 来表示扫描结果。

## 理论扫描效果对比

1. 单独比较：`yak servicescan > nmap > wapplayzer`
1. 综合 `yak servicescan` 约等于 `nmap + wapplayzer`


## 友好且简单的 API

### 常用核心扫描函数

1. `fn servicescan.Scan(var_1: string, var_2: string, vars: ...fp.ConfigOption): (chan *fp.MatchResult, error)`
   主扫描函数，用于批量扫描特定目标
1. `fn servicescan.ScanOne(var_1: string, var_2: int, vars: ...fp.ConfigOption): (*fp.MatchResult, error)`
   单体扫描，同步扫描一个目标，主机+端口
1. `fn servicescan.ScanFromSynScan(var_1: []*tools.SynScanResult|chan *SynScanResult|interface{}, vars: ...fp.ConfigOption): (chan *fp.MatchResult, error)`
   与 `synscan` 联动的函数，用于接收一组 `*tools.SynScanResult` 进行扫描

### 扫描参数「常用」

1. `fn servicescan.proto(vars: ...interface {}): fp.ConfigOption` 【参数】：使用什么协议进行扫描，填 `TCP` 或者 `UDP`
   ，或者 `servicescan.proto("TCP", "UDP")` 都启用。
1. `fn servicescan.concurrent(var_1: int): fp.ConfigOption` 【参数】：设置扫描并发
1. `fn servicescan.active(var_1: bool): fp.ConfigOption` 【参数】：是否开启主动扫描模式（主动发包模式）
1. `fn servicescan.all(): fp.ConfigOption` 【参数】：启用全部指纹匹配（有可能会没那么快）
1. `fn servicescan.web(): fp.ConfigOption`【参数】：强制启用 HTTP 服务扫描优化（针对 Web 网站扫描更精准快速）

### 扫描参数「不常用」

1. `fn servicescan.maxProbes(var_1: int): fp.ConfigOption` 【参数】：每个目标最多发送多少个指纹探测请求？
1. `fn servicescan.maxProbesConcurrent(var_1: int): fp.ConfigOption`【参数】：每个目标采用多大并发？
1. `fn servicescan.nmapRarityMax(var_1: int): fp.ConfigOption` 【参数】：使用 nmap 规则的稀有度最大值
1. `fn servicescan.nmapRule(var_1: interface {}): fp.ConfigOption` 【参数】：使用特定 nmap 规则进行扫描
1. `fn servicescan.service(): fp.ConfigOption` 【参数】强制启用服务扫描
1. `fn servicescan.webRule(var_1: interface {}): fp.ConfigOption` 【参数】使用 Web 扫描规则（文档待补充）

### 扫描结果 `fp.MatchResult / FingerprintInfo` 详解

我们在处理：`fp.MatchResult` 的时候，会发现，这个结构其实挺复杂的，甚至，主要包含两个主要结构，分别为

1. `fp.MatchResult`
1. `fp.FingerprintInfo`

我们下面对这两个结构进行详细解读

#### `fp.MatchResult`

```go
type palm/common/fp.(MatchResult) struct {
  Fields(可用字段):
      Target: string
      Port: int
      State: fp.PortState
      Reason: string
      Fingerprint: *fp.FingerprintInfo
  StructMethods(结构方法/函数):
  PtrStructMethods(指针结构方法/函数):
      func GetBanner() return(string)
      func GetCPEs() return([]string)
      func GetDomains() return([]string)
      func GetProto() return(fp.TransportProto)
      func GetServiceName() return(string)
      func IsOpen() return(bool)
      func String() return(string)
}
```

#### `fp.Fingerprint`

```go
type palm/common/fp.(FingerprintInfo) struct {
  Fields(可用字段):
      IP: string
      Port: int
      Proto: fp.TransportProto
      ServiceName: string
      ProductVerbose: string
      Info: string
      Version: string
      Hostname: string
      OperationVerbose: string
      DeviceType: string
      CPEs: []string
      Raw: string
      Banner: string
      CPEFromUrls: map[string][]*webfingerprint.CPE
      HttpFlows: []*fp.HTTPFlow
}
```

## 如何使用？

### 最基础的使用方法：`servicescan.Scan` 与 `servicescan.ScanOne`

#### `servicescan.Scan` 基础使用: 扫描一批主机与一批端口

```go
res, err := servicescan.Scan("47.**.***.105/24", "22")
die(err)

// 返回值是一个 chan *fp.MatchResult
for result := range res {
    if !result.IsOpen() {
        continue
    }
    println(result.String())
}
```

当我们执行上述代码的时候，我们的结果如下

```go
tcp://47.**.***.32:22	 open	openssh[6.6.1]
tcp://47.**.***.21:22	 open	openssh[7.4]
tcp://47.**.***.40:22	 open	openssh[6.6.1]
tcp://47.**.***.43:22	 open	openssh[5.3]
tcp://47.**.***.44:22	 open	openssh[5.3]
...
...
...
tcp://47.**.***.220:22	 open	openssh[5.3]
tcp://47.**.***.219:22	 open	openssh[7.4]
tcp://47.**.***.227:22	 open	linux_kernel[*]/openssh[7.2p2]/ubuntu_linux[*]
tcp://47.**.***.248:22	 open	openssh[7.4]
tcp://47.**.***.243:22	 open	openssh[5.3]
tcp://47.**.***.249:22	 open	linux_kernel[*]/openssh[7.2p2]/ubuntu_linux[*]
```

#### `servicescan.ScanOne`：扫描单个主机

与上面 `servicescan.Scan` 不同的是，`ScanOne` 只能扫描单台主机，并且扫描结果被同步返回：

我们看如下例子：

```go
resultMatch, err := servicescan.ScanOne("47.**.**.248", 22)
die(err)

println(resultMatch)
```

输出的结果为

```go
tcp://47.**.**.248:22	 open	openssh[7.4]
```

### 指纹扫描细节参数

#### 可以火力全开的指纹扫描

涉及到指纹扫描的常用参数如下：

1. `servicescan.active(isActive: bool)` 主动指纹扫描模式：主动发送 HTTP 请求探测指纹，通常用于特定
1. `servicescan.all()` 启动全部指纹规则
1. `servicescan.concurrent(concurrent: int)` 设置并发，并发越大扫描越快，但是苏果并发速度过大将可能触发操作系统的 TCP 最大连接数限制，如果需要，请手动解除。
1. `servicescan.web()` 前置开启 Web 指纹扫描优化
1. `servicescan.service()` 只开启服务扫描，不启用 Web 扫描
1. `servicescan.proto(protos: ... "TCP"|"UDP")` 设置扫描的协议

使用方法如下：

当我们尝试使用上述参数，直接在输入端口后，输入具体的参数选项，即可让参数生效，样例如下：

```go
res, err := servicescan.Scan(
    "47.**.***.105/24", "80,8080",
    servicescan.active(true), servicescan.all(),
    servicescan.web())
die(err)

for result := range res {
    if !result.IsOpen() {
        continue
    }
    println(result.String())
    printf("    %v\n", result.GetCPEs())
}
```

上述代码进行扫描之后，会把结果进行返回，我们屏蔽掉没有开放的端口，只展示开放端口和他们的 CPE 指纹信息，我们尝试扫描了一个网段，如下是结果

```go
tcp://47.**.***.7:80	 open	apache[*]
    [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.30:80	 open	apache[*]
    [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.35:80	 open	iis[7.0]/iis[7.5]
    [cpe:/a:*:iis:7.0:*:*:* cpe:/a:*:iis:7.5:*:*:*]
tcp://47.**.***.38:80	 open	iis[7.0]/microsoft_asp.net[*]
    [cpe:/a:*:iis:7.0:*:*:* cpe:/a:*:microsoft_asp.net:*:*:*:*]
...
...
tcp://47.**.***.44:80	 open
    []
tcp://47.**.***.46:80	 open	apache[*]
    [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.43:80	 open	bootstrap[*]/jquery[*]/nginx[1.8.0]/play[*]
    [cpe:/a:*:play:*:*:*:* cpe:/a:*:nginx:1.8.0:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:*:bootstrap:*:*:*:*]
tcp://47.**.***.32:80	 open	apache[*]/font_awesome[*]/jquery[1.12.4]/jquery_migrate[*]/wordpress[*]/wordpress[5.4.6]
    [cpe:/a:*:jquery_migrate:*:*:*:* cpe:/a:*:jquery:1.12.4:*:*:* cpe:/a:*:apache:*:*:*:* cpe:/a:*:wordpress:5.4.6:*:*:* cpe:/a:*:wordpress:*:*:*:* cpe:/a:wordpress:wordpress:5.4.6:*:*:* cpe:/a:jquery:jquery:1.12.4:*:*:* cpe:/a:*:font_awesome:*:*:*:*]
tcp://47.**.***.48:80	 open
    []
tcp://47.**.***.21:80	 open	gitlab[*]/nginx[*]
    [cpe:/a:*:gitlab:*:*:*:* cpe:/a:*:nginx:*:*:*:*]
...
tcp://47.**.***.85:80	 open	nginx[1.16.1]
    [cpe:/a:*:nginx:1.16.1:*:*:*]
tcp://47.**.***.84:80	 open	openresty[*]
    [cpe:/a:*:openresty:*:*:*:*]
tcp://47.**.***.79:80	 open	iis[8.5]/microsoft_asp.net[*]
    [cpe:/a:*:microsoft_asp.net:*:*:*:* cpe:/a:*:iis:8.5:*:*:*]
tcp://47.**.***.91:80	 open	nginx[1.16.1]
    [cpe:/a:*:nginx:1.16.1:*:*:*]
tcp://47.**.***.80:80	 open	apache[*]/jquery[*]/jquery[1.8.3]/jquery_ui[*]/jquery_ui[1.9.2]/moment.js[*]/php[*]
    [cpe:/a:*:jquery_ui:*:*:*:* cpe:/a:jquery:jquery:1.8.3:*:*:* cpe:/a:*:jquery:1.8.3:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:*:apache:*:*:*:* cpe:/a:*:moment.js:*:*:*:* cpe:/a:*:php:*:*:*:* cpe:/a:*:jquery_ui:1.9.2:*:*:*]
tcp://47.**.***.83:80	 open	apache_tomcat[1.1]/coyote[1.1]/java[*]/jquery[*]/jquery[1.3.2]
    [cpe:/a:*:java:*:*:*:* cpe:/a:*:apache_tomcat:1.1:*:*:* cpe:/a:*:jquery:1.3.2:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:1.3.2:*:*:* cpe:/a:*:coyote:1.1:*:*:*]
...
...
...
tcp://47.**.***.239:80	 open	nginx[1.18.0]
    [cpe:/a:*:nginx:1.18.0:*:*:*]
tcp://47.**.***.243:80	 open	nginx[1.12.2]/requirejs[*]/zepto[*]
    [cpe:/a:*:requirejs:*:*:*:* cpe:/a:*:nginx:1.12.2:*:*:* cpe:/a:*:zepto:*:*:*:*]
tcp://47.**.***.25:8080	 open	express[*]
    [cpe:/a:*:express:*:*:*:*]
tcp://47.**.***.191:8080	 open
    []
tcp://47.**.***.218:8080	 open	jquery[*]/jquery[2.1.4]
    [cpe:/a:*:jquery:2.1.4:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:2.1.4:*:*:*]
...
...
```

### 与 `synscan` 是好搭档：`servicescan.ScanFromSynResult`

在很多案例中，大家经常会使用 `masscan + nmap` 的大规模端口扫描的组合，在 yak 中，当然你可以使用命令行调用 `masscan` 来进行扫描任务，当然也可以直接使用 yak 提供的 `synscan`
来完成端口开放扫描。我们在本节中，将会介绍这种模式：

我们实际在使用过程中，`synscan` 扫描一个网段的一些端口，因为是 SYN 扫描，扫描这个网段速度将会特别快，所以我们获取到所有开放结果之后，才进行端口指纹扫描：扫描效果如下

:::danger 我们隐去了扫描 IP 的具体信息 我们隐藏了扫描的具体 IP，同时对大量结果进行了删减和省略，具体怎么使用，需要读者自行尝试
:::

```go
res, err := synscan.Scan("47.**.***.105/24", "80,888,443,8080-8085,9000")
die(err)

openResults = []
for result := range res {
    openResults = append(openResults, result)
    result.Show()
}

println("Open Ports: ", len(openResults))

res, err := servicescan.ScanFromSynResult(openResults, servicescan.active(true), servicescan.web())
die(err)

for result := range res {
    println(result.String())
    println("    ", result.GetCPEs())
}
```

```go
OPEN: 47.**.***.35:443     from synscan
OPEN: 47.**.***.191:80     from synscan
OPEN: 47.**.***.200:443    from synscan
...
...
OPEN: 47.**.***.211:443    from synscan
OPEN: 47.**.***.173:443    from synscan
...
...
...
OPEN: 47.**.***.38:80      from synscan
OPEN: 47.**.***.142:80     from synscan
OPEN: 47.**.***.173:80     from synscan
OPEN: 47.**.***.83:888     from synscan
Open Ports:  99
tcp://47.**.***.133:80	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.122:888	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.191:80	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.22:80	 open	nginx[*]/php[*]
     [cpe:/a:*:nginx:*:*:*:* cpe:/a:*:php:*:*:*:*]
tcp://47.**.***.228:80	 open	apache[*]/php[5.2.17]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.2.17:*:*:*]
tcp://47.**.***.38:8082	 open	httpapi[2.0]/microsoft_httpapi[2.0]
     [cpe:/a:*:microsoft_httpapi:2.0:*:*:* cpe:/a:*:httpapi:2.0:*:*:*]
tcp://47.**.***.7:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.181:80	 open	httpapi[2.0]/microsoft_httpapi[2.0]
     [cpe:/a:*:microsoft_httpapi:2.0:*:*:* cpe:/a:*:httpapi:2.0:*:*:*]
tcp://47.**.***.91:80	 open	nginx[1.16.1]
     [cpe:/a:*:nginx:1.16.1:*:*:*]
tcp://47.**.***.30:443	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.74:443	closed
     []
tcp://47.**.***.87:443	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.40:443	 open	clipboard.js[*]/jquery[*]/jquery[1.8.3]/jquery[1.9.0]/nginx[*]
     [cpe:/a:*:jquery:*:*:*:* cpe:/a:*:clipboard.js:*:*:*:* cpe:/a:jquery:jquery:1.9.0:*:*:* cpe:/a:*:nginx:*:*:*:* cpe:/a:*:jquery:1.8.3:*:*:*]
tcp://47.**.***.80:80	 open	apache[*]/jquery[*]/jquery[1.8.3]/jquery_ui[*]/jquery_ui[1.9.2]/moment.js[*]/php[*]
     [cpe:/a:*:jquery_ui:1.9.2:*:*:* cpe:/a:*:jquery_ui:*:*:*:* cpe:/a:jquery:jquery:1.8.3:*:*:* cpe:/a:*:jquery:1.8.3:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:*:apache:*:*:*:* cpe:/a:*:moment.js:*:*:*:* cpe:/a:*:php:*:*:*:*]
tcp://47.**.***.148:443	 open	nginx[*]/php[*]/php[7.2.11]
     [cpe:/a:*:php:7.2.11:*:*:* cpe:/a:*:nginx:*:*:*:* cpe:/a:*:php:*:*:*:*]
tcp://47.**.***.39:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.128:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.34:80	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.204:443	 open	nginx[1.10.2]/php[*]/php[5.4.16]
     [cpe:/a:*:nginx:1.10.2:*:*:* cpe:/a:*:php:*:*:*:* cpe:/a:*:php:5.4.16:*:*:*]
tcp://47.**.***.200:443	 open	apache[*]/php[5.2.17]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.2.17:*:*:*]
tcp://47.**.***.85:80	 open	nginx[1.16.1]
     [cpe:/a:*:nginx:1.16.1:*:*:*]
tcp://47.**.***.83:8085	 open	apache_tomcat[1.1]/coyote[1.1]/java[*]
     [cpe:/a:*:java:*:*:*:* cpe:/a:*:apache_tomcat:1.1:*:*:* cpe:/a:*:coyote:1.1:*:*:*]
tcp://47.**.***.173:888	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.148:80	 open	nginx[1.8.0]
     [cpe:/a:*:nginx:1.8.0:*:*:*]
tcp://47.**.***.84:80	 open	openresty[*]
     [cpe:/a:*:openresty:*:*:*:*]
tcp://47.**.***.43:80	 open	bootstrap[*]/jquery[*]/nginx[1.8.0]/play[*]
     [cpe:/a:*:bootstrap:*:*:*:* cpe:/a:*:play:*:*:*:* cpe:/a:*:nginx:1.8.0:*:*:* cpe:/a:*:jquery:*:*:*:*]
tcp://47.**.***.228:443	 open	apache[*]/php[5.2.17]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.2.17:*:*:*]
tcp://47.**.***.83:80	 open	apache_tomcat[1.1]/java[*]/jquery[*]/jquery[1.3.2]/nginx[1.18.0]
     [cpe:/a:*:java:*:*:*:* cpe:/a:*:apache_tomcat:1.1:*:*:* cpe:/a:*:jquery:1.3.2:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:1.3.2:*:*:* cpe:/a:*:nginx:1.18.0:*:*:*]
...
...
...
tcp://47.**.***.232:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.218:8080	 open	jquery[*]/jquery[2.1.4]
     [cpe:/a:*:jquery:2.1.4:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:2.1.4:*:*:*]
tcp://47.**.***.30:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.220:80	 open	nginx[1.9.2]
     [cpe:/a:*:nginx:1.9.2:*:*:*]
tcp://47.**.***.25:443	 open
     []
tcp://47.**.***.32:80	 open	apache[*]/font_awesome[*]/jquery[*]/jquery[1.12.4]/jquery_migrate[*]/wordpress[*]/wordpress[5.4.6]
     [cpe:/a:*:font_awesome:*:*:*:* cpe:/a:*:jquery_migrate:*:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:*:apache:*:*:*:* cpe:/a:*:wordpress:5.4.6:*:*:* cpe:/a:*:wordpress:*:*:*:* cpe:/a:wordpress:wordpress:5.4.6:*:*:* cpe:/a:jquery:jquery:1.12.4:*:*:*]
tcp://47.**.***.155:80	 open	java[*]/jquery[*]/jquery[1.11.3]
     [cpe:/a:*:java:*:*:*:* cpe:/a:*:jquery:1.11.3:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:1.11.3:*:*:*]
tcp://47.**.***.104:443	 open	nginx[1.10.3]/ubuntu[*]
     [cpe:/a:*:nginx:1.10.3:*:*:* cpe:/a:*:ubuntu:*:*:*:*]
tcp://47.**.***.191:8080	 open
     []
tcp://47.**.***.200:80	 open	apache[*]/php[5.2.17]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.2.17:*:*:*]
tcp://47.**.***.219:80	 open	discuz!_x[3.2]/nginx[*]/php[5.6.36]
     [cpe:/a:*:nginx:*:*:*:* cpe:/a:*:discuz!_x:3.2:*:*:* cpe:/a:*:php:5.6.36:*:*:*]
...
...
...
tcp://47.**.***.195:80	 open	apache[*]/php[5.2.17]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.2.17:*:*:*]
tcp://47.**.***.80:443	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.210:443	 open	bootstrap[*]/jquery[*]/nginx[*]
     [cpe:/a:*:nginx:*:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:*:bootstrap:*:*:*:*]
tcp://47.**.***.85:443	 open	nginx[1.16.1]
     [cpe:/a:*:nginx:1.16.1:*:*:*]
tcp://47.**.***.7:443	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.129:80	 open	openresty[*]
     [cpe:/a:*:openresty:*:*:*:*]
tcp://47.**.***.104:80	 open	nginx[1.10.3]/ubuntu[*]
     [cpe:/a:*:nginx:1.10.3:*:*:* cpe:/a:*:ubuntu:*:*:*:*]
tcp://47.**.***.84:443	 open	openresty[*]
     [cpe:/a:*:openresty:*:*:*:*]
tcp://47.**.***.218:80	 open	nginx[1.8.1]
     [cpe:/a:*:nginx:1.8.1:*:*:*]
tcp://47.**.***.195:443	 open	apache[*]/php[5.2.17]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.2.17:*:*:*]
tcp://47.**.***.125:80	 open	nginx[1.10.3]/ubuntu[*]
     [cpe:/a:*:nginx:1.10.3:*:*:* cpe:/a:*:ubuntu:*:*:*:*]
tcp://47.**.***.122:80	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.38:8083	 open	httpapi[2.0]/microsoft_httpapi[2.0]
     [cpe:/a:*:microsoft_httpapi:2.0:*:*:* cpe:/a:*:httpapi:2.0:*:*:*]
tcp://47.**.***.72:80	 open	nginx[1.6.3]
     [cpe:/a:*:nginx:1.6.3:*:*:*]
tcp://47.**.***.210:888	 open	nginx[*]
     [cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.34:443	 open
     []
tcp://47.**.***.46:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.182:80	 open	express[*]
     [cpe:/a:*:express:*:*:*:*]
...
...
...
tcp://47.**.***.173:80	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.38:80	 open	iis[7.0]/microsoft_asp.net[*]
     [cpe:/a:*:iis:7.0:*:*:* cpe:/a:*:microsoft_asp.net:*:*:*:*]
tcp://47.**.***.128:443	 open	apache[*]
     [cpe:/a:*:apache:*:*:*:*]
tcp://47.**.***.175:443	 open	google_font_api[*]/jquery[*]/nginx[1.16.1]
     [cpe:/a:*:nginx:1.16.1:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:*:google_font_api:*:*:*:*]
tcp://47.**.***.142:80	 open	tomcat[9.0.2]
     [cpe:/a:apache:tomcat:9.0.2:*:*:*]
tcp://47.**.***.83:443	 open	apache_tomcat[1.1]/coyote[1.1]/java[*]/jquery[*]/jquery[1.3.2]
     [cpe:/a:*:coyote:1.1:*:*:* cpe:/a:*:java:*:*:*:* cpe:/a:*:apache_tomcat:1.1:*:*:* cpe:/a:*:jquery:1.3.2:*:*:* cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:1.3.2:*:*:*]
tcp://47.**.***.74:8081	 open	flask[0.14.1]/python[3.6.6]/werkzeug[0.14.1]
     [cpe:/a:*:werkzeug:0.14.1:*:*:* cpe:/a:*:python:3.6.6:*:*:* cpe:/a:*:flask:0.14.1:*:*:*]
tcp://47.**.***.173:443	 open	apache[*]/php[5.4.45]
     [cpe:/a:*:apache:*:*:*:* cpe:/a:*:php:5.4.45:*:*:*]
tcp://47.**.***.21:80	 open	gitlab[*]/nginx[*]
     [cpe:/a:*:gitlab:*:*:*:* cpe:/a:*:nginx:*:*:*:*]
tcp://47.**.***.83:888	 open	apache_tomcat[1.1]/coyote[1.1]/java[*]/jquery[*]/jquery[1.3.2]
     [cpe:/a:*:jquery:*:*:*:* cpe:/a:jquery:jquery:1.3.2:*:*:* cpe:/a:*:coyote:1.1:*:*:* cpe:/a:*:java:*:*:*:* cpe:/a:*:apache_tomcat:1.1:*:*:* cpe:/a:*:jquery:1.3.2:*:*:*]
tcp://47.**.***.122:443	 open	jquery[1.12.4]/jquery_migrate[*]/nginx[*]/php[7.1.5]/wordpress[*]
     [cpe:/a:*:jquery_migrate:*:*:*:* cpe:/a:*:nginx:*:*:*:* cpe:/a:*:jquery:1.12.4:*:*:* cpe:/a:*:wordpress:*:*:*:* cpe:/a:jquery:jquery:1.12.4:*:*:* cpe:/a:*:php:7.1.5:*:*:*]
tcp://47.**.***.79:80	 open	iis[8.5]/microsoft_asp.net[*]
     [cpe:/a:*:microsoft_asp.net:*:*:*:* cpe:/a:*:iis:8.5:*:*:*]
tcp://47.**.***.25:80	closed
     []
tcp://47.**.***.99:80	closed
     []
tcp://47.**.***.72:8084	 open	iis[8.5]/microsoft_httpapi[2.0]
     [cpe:/a:*:microsoft_httpapi:2.0:*:*:* cpe:/a:*:iis:8.5:*:*:*]
```