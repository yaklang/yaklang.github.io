# 网络端口扫描与指纹识别

本节开始介绍网络安全中比较常用的功能，端口扫描和指纹识别，在Yak 中对应的两个库为 `synsscan`和`servicescan`，在开始具体的库讲解前，先来了解什么是**端口扫描**与**指纹**

## 8.4.1 基础概念：端口扫描与指纹识别

### 端口扫描

端口扫描是网络安全中的一种技术，用于发现主机上开放的端口及其对应的服务。端口是网络上的虚拟数据通道，不同的端口号通常对应不同的服务。

端口扫描通常包括以下几个基本概念：

1. 端口状态:
   1. 开放(Open): 端口正在监听并接受连接。
   2. 关闭(Closed): 端口不接受连接，但会响应拒绝信息。
   3. 过滤(Filtered): 端口不响应，可能是防火墙或网络过滤器阻止了探测。
   4. 未过滤(Unfiltered): 端口被探测到，但无法确定是否开放。
2. 扫描类型:
   1. SYN扫描 (又称半开放扫描): 发送一个TCP的SYN包，如果收到SYN-ACK，则表明端口开放。
   2. ACK扫描: 发送一个ACK包，用于判断端口的过滤状态。
   3. UDP扫描: 对于UDP协议的端口，发送UDP包，根据响应判断端口状态。
   4. 全连接扫描: 完成TCP三次握手过程，如果连接建立，则端口开放。
   5. 隐蔽扫描: 如Xmas, FIN, NULL扫描等，试图绕过防火墙或IDS的检测。

通过识别哪些端口是开放的，攻击者可以得知哪些服务正在运行，并尝试利用这些服务的已知漏洞进行攻击。

### 指纹识别

在网络安全领域，"指纹"一词通常指的是系统、服务或设备的独特特征或模式，可用于识别和区分它们。这些特征可能包括软件版本、操作系统类型、协议特定行为等。指纹技术通常用于安全分析、侵入检测、网络监控等领域。例如：

1. 操作系统指纹（OS Fingerprinting）: 通过分析来自目标系统的网络响应（如TCP/IP堆栈的特定行为），确定目标系统运行的操作系统类型。这有助于安全研究人员评估潜在的安全漏洞。
2. 服务指纹（Service Fingerprinting）: 识别网络上运行的服务及其版本，通常通过分析响应的特定特征或错误消息来实现。
3. 设备指纹（Device Fingerprinting）: 识别和跟踪设备，即使在设备使用动态IP地址的情况下，通过收集设备的硬件和软件特征。

通过对网络设备进行指纹识别，可以快速识别和分类网络中的设备，从而对它们的操作系统、运行的服务、开放的端口甚至配置进行深入的了解。它能够帮助安全团队识别潜在的漏洞、错误配置和未授权的设备，这些都是网络攻击者可能利用的弱点。

指纹识别还可以帮助确定网络中的资产，这对于维护资产清单和进行风险评估非常重要。通过识别每个设备的详细信息，安全团队可以针对特定的系统或应用程序实施定制化的安全策略。

### CPE

在网络安全领域中，CPE（Common Platform Enumeration）是一种标准化方法，用于描述和识别应用程序、操作系统和硬件设备。CPE 由美国国家标准与技术研究院（NIST）维护，并作为公共安全数据源的一部分，它为世界各地的软件、硬件和操作系统提供了一个唯一、统一和可理解的标识符。

CPE 旨在提供一种方法来准确地识别、跟踪和匹配安全漏洞和配置问题中涉及的特定产品。它通常以URI的形式出现，这些URI包括一系列的标识符，用于指明产品的供应商、产品名、版本、更新、修订、语言和其他适用的架构属性。

在进行网络设备的指纹扫描时，使用CPE来表示扫描结果可以带来以下几个好处：

1. 标准化： CPE提供了一种标准的方式来描述设备和应用，有助于避免歧义和误解。
2. 兼容性： 许多安全数据库和工具都支持CPE，使用CPE可以确保扫描结果与这些资源兼容。
3. 准确性： CPE能够精确描述设备的具体信息，包括版本和配置，有助于精确匹配安全漏洞。
4. 通用性： 因为CPE是广泛接受的国际标准，它有助于跨组织、跨工具共享和理解扫描结果。

因此，在进行指纹扫描的结果输出时，Yak鼓励使用CPE来表示扫描结果，这不仅有助于标准化和规范化输出格式，也有助于后续的数据分析、风险评估和漏洞管理。

## 8.4.2 synscan 库介绍

在 8.4.1 小节的扫描类型中，介绍了 SYN 扫描的概念，这里笔者进一步介绍什么是 SYN 端口扫描？

SYN扫描，通常又叫“半开放”扫描。因为它不必打开一个完整的TCP连接，只发送一个SYN包，就能做到打开连接的效果，然后等待对端的反应。如果对端返回SYN/ACK报文，则表示该端口处于监听状态，此时，扫描端则必须再返回一个RST报文来关闭此连接；如果对端返回RST报文，则表示该端口没有开放。

SYN 扫描相较于全连接扫描(完整三次握手)要更快速，资源的消耗也更低；但弊端是，会损失一定的准确率，特别是在在网络环境差的情况下。

在 Yak 的 synscan 库中，现原理基本同 `masscan`：短时间内把 `SYN` 数据包都发送出去，检查若干秒内的返回记录。实现的关键步骤如下：

1. 自己维护一套网络栈，拆解 TCP 三次握手
2. 只进行第一次握手，如果收到了扫描目标的 `SYN-ACK` 则判定为端口开放
3. 发送 `RST` 强行中断握手

![img](/yak-basic/cap8-3-1.png)

### synscan库 API 介绍

#### 核心函数

Yak 库 api 始终遵循简单易用的理念，在 synscan 库中只有两个个核心扫描函数

```
synscan.Scan(hosts:string,ports:string,opts ...synscan.scanOpt) (chan *synscan.SynScanResult, error)
synscan.ScanFromPing(hosts:string,ports:string,opts ...synscan.scanOpt) (chan *synscan.SynScanResult, error)
```

参数 `hosts` 可以支持 IP/IP+掩盖码，域名等；`ports` 支持端口组，例如 `22.443.80,8080-8084`，或者 `1-65535`，以及剩余的用来控制 synscan 扫描行为的额外参数。

#### 额外参数

| 额外参数           | 解释                                                         |
| ------------------ | ------------------------------------------------------------ |
| callback           | 设置一个回调函数，可以自由处理结果，设置扫描结果的回调synscan.callback(func(i){    db.SavePortFromResult(i) }) |
| submitTaskCallback | 设置一个回调函数，每提交一个数据包的时候，这个回调会执行一次synscan.submitTaskCallback(func(i){    println(i)}) |
| excludePorts       | 本次扫描排除的端口，synscan.excludePorts("22")               |
| excludeHosts       | 本次扫描排除的 host，synscan.excludeHosts("192.168.1.1")     |
| wait               | synscan 发出 SYN 包后等待的秒数，synscan.wait(5)             |
| outputFile         | 将探测的开放端口的结果保存到文件，synscan.outputFile("test.txt") |
| outputPrefix       | 设置本次扫描结果保存到文件时添加自定义前缀，比如 tcp:// https:// http:// 等，需要配合 outputFile 使用synscan.outputPrefix("http://") |
| initHostFilter     | 初始化一个host过滤器，多个 host 可以使用逗号分割，synscan.initHostFilter("192.168.1.1,192.168.1.1") |
| initPortFilter     | 初始化一个端口过滤器，多个 host 可以使用逗号分割，synscan.initPortFilter("22,23") |
| rateLimit          | 设置扫描的速率限制 , synscan.rateLimit(10,1000) //每次扫描之间的延迟时间为 10 毫秒，连续扫描之间的时间间隔为 1000 个单位 |
| concurrent         | 设置 SYN 扫描的并发 ，synscan.concurrent(2000)               |

#### 扫描结果：`SynScanResult`结构

```Go
type synscan.(SynScanResult) struct {
  Fields(可用字段):      
      // 扫描到的 IP
      Host: string
      // 这个 IP 开放的端口
      Port: int
  PtrStructMethods(指针结构方法/函数):
        // 展示 SynScanResult  demo: `OPEN: 127.0.0.1:3306       from synscan`
        func Show()
}
```

从上面的返回结果结构中可以很清晰获取到，IP 对应的开放端口。

### 扫描案例：最简单的扫描使用

当直接进行扫描时，会使用默认的配置参数进行扫描

```Go
res, err := synscan.Scan("127.0.0.1", "1-65535")
die(err)
for result := range res {    
    result.Show()
}
// 结果如下
OPEN: 127.0.0.1:49671      from synscan
OPEN: 127.0.0.1:63344      from synscan
OPEN: 127.0.0.1:63343      from synscan
OPEN: 127.0.0.1:3389       from synscan
OPEN: 127.0.0.1:2080       from synscan
OPEN: 127.0.0.1:44280      from synscan
OPEN: 127.0.0.1:63342      from synscan
OPEN: 127.0.0.1:135        from synscan
OPEN: 127.0.0.1:49669      from synscan
OPEN: 127.0.0.1:57115      from synscan
OPEN: 127.0.0.1:57116      from synscan
```

## 8.4.3 servicescan 库介绍

在前一节中，介绍了synscan库，可能大家会有一个疑问，使用 synscan 扫描目标开放的端口后，怎么进行指纹的判断呢？读完本节的 servicescan库，相信大家的疑问可以得到解决。

在 8.4.1 小节的**端口****扫描**类型中，提到了多种扫描方式，它们优缺点各异，`servicescan`库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息，并且提供了多个函数，用于处理需要进一步获取指纹的需求。

值得一提的是，`servicescan` 的指纹匹配机制并没有过分全部重复**造轮子**，用户也并不需要担心增加额外多的学习成本，作为一个站在巨人肩膀上的扫描库，`servicescan` 支持了

1. 针对协议识别的 `nmap` 原生指纹库和扫描格式
2. 针对 Web 应用扫描指纹的 `wappalyzer`
3. 允许用户按照现有的格式自定义添加 `namp`或者 Web 应用指纹
4. 规范化的使用了 CPE 来作为扫描结果

![img](/yak-basic/cap8-3-2.png)

### servicescan 库API介绍

#### 核心函数

Yak 库 api 始终遵循简单易用的理念，在 synscan 库中只有两个个核心扫描函数

`fn servicescan.Scan(target: string, ports: string, opts: ...servicescan.ConfigOption): (chan *fp.MatchResult, error)` 主扫描函数，用于批量扫描特定目标

`fn servicescan.ScanOne(target: string, ports: int, opts: ...servicescan.ConfigOption): (*fp.MatchResult, error)` 单体扫描，同步扫描一个目标，主机+端口

`fn servicescan.ScanFromSynScan(result: []*synscan.SynScanResult|chan *SynScanResult|interface{}, opts: ...servicescan.ConfigOption): (chan *fp.MatchResult, error)` 与 `synscan` 联动的函数，用于接收一组 `*tools.SynScanResult` 进行扫描

#### 额外参数

| proto               | 使用什么协议进行扫描，`servicescan.proto("TCP")` 只启用TCP或 `servicescan.proto("TCP", "UDP")` 都启用 |
| ------------------- | ------------------------------------------------------------ |
| concurrent          | 设置扫描并发数为20 `servicescan.concurrent(20)`              |
| active              | 开启主动扫描模式（主动发包模式）`servicescan.active(true)`   |
| all                 | 启用全部指纹匹配(web指纹和nmap协议指纹) `servicescan.all(true)` |
| web                 | 启用 HTTP 服务扫描优化                                       |
| excludePorts        | 排除的端口(不希望扫描的端口) servicescan.excludePorts("80,443") |
| excludeHosts        | 排除的host(不希望扫描的host) servicescan.excludeHosts("1.1.1.1") |
| probeTimeout        | 设置单个请求探测超时时间为10秒 servicescan.probeTimeout(10)  |
| proxy               | 设置代理 servicescan.proxy("http://127.0.0.1:8083")          |
| cache               | 设置启用缓存 servicescan.cache(true)                         |
| databaseCache       | 设置启用数据库缓存 servicescan.databaseCache(true)           |
| webRule             | 设置启用用户自定义 web 规则                                  |
| nmapRule            | 设置 nmap 规则文件                                           |
| nmapRarityMax       | nmap 规则筛选，通过稀有度 servicescan.nmapRarityMax(10)      |
| maxProbes           | 设置每个服务最多主动发送的包数 servicescan.maxProbes(10)     |
| maxProbesConcurrent | 设置主动发包模式下的并发量 servicescan.maxProbesConcurrent(10) |
| service             | 设置开启 nmap 规则库 servicescan.service(true)               |

#### 扫描结果：`MatchResult`结构

```Go
type MatchResult struct {
  Fields(可用字段):
      Target: string
      Port: int
      State: fp.PortState
      Reason: string
      Fingerprint: *fp.FingerprintInfo
  PtrStructMethods(指针结构方法/函数):
      func GetBanner() return(string)
      func GetCPEs() return([]string)
      func GetDomains() return([]string)
      func GetProto() return(fp.TransportProto)
      func GetServiceName() return(string)
      func IsOpen() return(bool)
      func String() return(string)
}

type FingerprintInfo struct {
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

#### 扫描案例1：最简单的扫描使用

```Go
host = "nmap.scanme.org" // 指定主机
port = "22-80,443,3389" // 指定端口
ch, err = servicescan.Scan(host, port)  // 开始扫描，函数会立即返回一个错误和结果管道
die(err) // 如果错误非空则报错
for result := range ch { // 通过遍历管道的形式获取管道中的结果
    if result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开
        println(result.String()) // 输出结果，调用String方法获取可读字符串
        println(result.GetCPEs()) // 查看 CPE 结果
    }
}
```

扫描结果如下

```Plain
tcp://45.33.32.156:22    open   linux_kernel/openssh[6.6.1p1]/ssh/ubuntu_linux
([]string) (len=3 cap=4) {
 (string) (len=30) "cpe:/a:openbsd:openssh:6.6.1p1",
 (string) (len=29) "cpe:/o:canonical:ubuntu_linux",
 (string) (len=25) "cpe:/o:linux:linux_kernel"
}
tcp://nmap.scanme.org:80         open   apache/apache_http_server[2.4.7]/http/http_server[2.4.7]/ubuntu/ubuntu_linux
([]string) (len=7 cap=7) {
 (string) (len=28) "cpe:/a:apache:apache:2.4.7:*",
 (string) (len=33) "cpe:/a:canonical:ubuntu_linux:*:*",
 (string) (len=27) "cpe:/a:*:apache:2.4.7:*:*:*",
 (string) (len=37) "cpe:/a:apache:http_server:2.4.7:*:*:*",
 (string) (len=23) "cpe:/a:*:apache:*:*:*:*",
 (string) (len=23) "cpe:/a:*:ubuntu:*:*:*:*",
 (string) (len=39) "cpe:/a:*:apache_http_server:2.4.7:*:*:*"
}
tcp://nmap.scanme.org:25         open   smtp
([]string) <nil>    // 没有发现版本，因此没有 CPE 信息
```

可以发现，和 `synscan`相比，除了会打印开放的端口外，还有该端口对应的指纹，同时，会对匹配到的指纹进行 CPE 规范化处理。

#### 扫描案例2：联动 synscan，进行指纹识别

当想使用 synscan 进行端口快速扫描时，还希望对扫描的端口，进行指纹识别时，可以借助`servicescan.ScanFromSynResult` 这个函数

```Go
host = "nmap.scanme.org" // 指定主机
port = "22-80,443,3389" // 指定端口
ch, err = synscan.Scan(host, port)  // 开始扫描，函数会立即返回一个错误和结果管道
die(err) // 如果错误非空则报错
fpResults, err := servicescan.ScanFromSynResult(ch) // 将synscan中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码
    println(result.String()) // 输出结果，调用String方法获取可读字符串
}
```

结果如下

```Plain
tcp://45.33.32.156:22    open   linux_kernel/openssh[6.6.1p1]/ssh/ubuntu_linux
tcp://45.33.32.156:80    open   apache/apache_http_server[2.4.7]/http/http_server[2.4.7]/ubuntu/ubuntu_linux
```

可以发现，使用 synscan 探测的端口，被识别出了对应的指纹。

