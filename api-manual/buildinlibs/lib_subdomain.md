---
sidebar_position: 19
---

# [subdomain] 子域名收集

本身 YAK 支持子域名收集，本模块实现了如下功能：

1. 子域名收集，从第三方数据源，包含证书查询，常见数据源等
2. DNS 域传送漏洞检测和利用
3. 子域名爆破：
    1. 智能处理泛解析，防止误报
    2. 支持递归检测，可以支持递归深度，检测各种复杂多级子域名
    3. 合理的资源控制，并发限制
   
[详细使用文档](/api-manual/api/subdomain)
    
## 核心函数与基础使用

本模块核心函数为 `func subdomain.Start(targetDomain, params...) return (chan *subdomain.SubdomainResult, error)`

```go
res, err := subdomain.Scan("b******u.com" , subdomain.recursive(true ) )
die(err)

for result := range res {
    result.Show()
}
```

我们通过调用核心函数，输入扫描目标，将会得到扫描结果，得到的扫描结果是一个 `chan *palm/common/subdomain.(SubdomainResult)`

通过 `for range` 我们可以取出域名对应的结果，应该是 `*subdomain.SubdomainResult` 这个类型，类型可用操作如下

:::note

```go
type palm/common/subdomain.(SubdomainResult) struct {
  Fields(可用字段):
      // 原来的域名是谁？ 
      FromTarget: string
      
      // 来源于哪个 DNS 服务器的相应？  
      FromDNSServer: string  
      
      FromModeRaw: int // 略  
      
      // 这个域名对应的 IP 是多少
      IP: string  
      
      // 域名本身的信息
      Domain: string
      
      // 额外信息  
      Tags: []string  
  StructMethods(结构方法/函数): 
  PtrStructMethods(指针结构方法/函数): 
      func Hash() return(string)
      
      // 展示到 Stdout 
      func Show() 
      
      // 输出成字符串格式
      func ToString() return(string) 
}
```

:::

我们了解了结构的信息，发现可以调用 `result.Show()` 直接把信息展示到命令行。

结果简单展示如下：

```go
                                     m.b*******u.com IP:[   110********9] From:[]
                                   www.b*******u.com IP:[   110********3] From:[]
                          autodiscover.b*******u.com IP:[ 111.2********7] From:[]
                                       b*******u.com IP:[ 220.1********8] From:[]
                                  www2.b*******u.com IP:[  153.********8] From:[]
                                  imap.b*******u.com IP:[163.17********6] From:[]
                                  test.b*******u.com IP:[ 110.2********7] From:[]
                                    mx.b*******u.com IP:[  61.13*******1] From:[]
                                   bbs.b*******u.com IP:[ 112.80*******7] From:[]
                                   dev.b*******u.com IP:[ 163.17*******1] From:[]
                                   sip.b*******u.com IP:[ 111.20*******8] From:[]
                                   ns2.b*******u.com IP:[  220.1*******1] From:[]
                                                         ...
                                                         ...
                                                         ...
                                   app.b*******u.com IP:[ 112.80.2*****7] From:[]
                                   api.b*******u.com IP:[   157.0.*****9] From:[]
                                portal.b*******u.com IP:[    172.2*****2] From:[]
                          lyncdiscover.b*******u.com IP:[ 111.202.*****1] From:[]
                                   dns.b*******u.com IP:[ 110.242.*****4] From:[]
                                images.b*******u.com IP:[   182.61*****0] From:[]
                                       b*******u.com IP:[   39.15*****79] From:[]
                                  info.b*******u.com IP:[111.206.*****19] From:[]
                                test.m.b*******u.com IP:[ 123.125.*****0] From:[]
                                                         ...
                                                         ...
                                                         ...
                              passport.b*******u.com IP:[   180.*******9] From:[]
                              passport.b*******u.com IP:[ 153.37*******6] From:[]
                                   t.b.b*******u.com IP:[     10*******4] From:[]
                               service.b*******u.com IP:[  112.8*******3] From:[]
                              dianying.b*******u.com IP:[  111.2*******2] From:[https://crt.sh/?q=%25.b*******u.com]
                                     b.b*******u.com IP:[ 153.37*******3] From:*******
```

## 带其他参数的使用

`Scan` 的第二个参数为可变参数，具体如果想设置一些扫描的参数，可以通过 `subdomaqin.[your-option](paramValue)` 来设置，具体案例如下

```go
res, err := subdomain.Scan("y************i.com" , 
    subdomain.recursive(true), // 设置允许递归
    subdomain.maxDepth(5),     // 设置递归最大深度
    subdomain.workerConcurrent(100),  // 设置 DNS 并发请求量
)
die(err)

for result := range res {
    result.Show()
}
```

### 支持参数一览

1. `fn subdomain.dnsServer(var_1: []string): subdomain.ConfigOption` 设置 DNS 服务器
1. `fn subdomain.eachQueryTimeout(var_1: float64): subdomain.ConfigOption` 设置每个 DNS 查询的超时时间
1. `fn subdomain.eachSearchTimeout(var_1: float64): subdomain.ConfigOption` 设置每次 HTTP 搜索的超时时间
1. `fn subdomain.mainDict(var_1: interface {}): subdomain.ConfigOption` 设置主字典
1. `fn subdomain.maxDepth(var_1: int): subdomain.ConfigOption` 设置递归爆破的最大深度
1. `fn subdomain.recursive(var_1: bool): subdomain.ConfigOption` 设置开启递归
1. `fn subdomain.recursiveDict(var_1: interface {}): subdomain.ConfigOption` 设置递归字典
1. `fn subdomain.targetConcurrent(var_1: int): subdomain.ConfigOption` 设置目标（支持多个目标的）并发爆破
1. `fn subdomain.targetTimeout(var_1: float64): subdomain.ConfigOption` 设置每个目标超时时间
1. `fn subdomain.wildcardToStop(var_1: bool): subdomain.ConfigOption` 遇到泛解析立即停止爆破
1. `fn subdomain.workerConcurrent(var_1: int): subdomain.ConfigOption` DNS 请求最大并发

详细的参数以及使用文档见：[详细使用文档](/api-manual/api/subdomain)