# servicescan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [servicescan.Scan](#servicescanscan) | 扫描服务指纹的核心函数 |
 | [servicescan.ScanFromPing](#servicescanscanfromping) | 从 Ping 中扫描 |
 | [servicescan.ScanFromSpaceEngine](#servicescanscanfromspaceengine) | 从网络空间搜索引擎的结果中扫描指纹信息 |
 | [servicescan.ScanFromSynResult](#servicescanscanfromsynresult) | 从 synscan 中返回的结果直接进入 servicescan 扫描的通道 |
 | [servicescan.ScanOne](#servicescanscanone) | 同步扫描单个目标 |
 | [servicescan.active](#servicescanactive) | 【参数】主动扫描模式 |
 | [servicescan.all](#servicescanall) | 【参数】扫描全部指纹 |
 | [servicescan.cache](#servicescancache) |  |
 | [servicescan.concurrent](#servicescanconcurrent) |  |
 | [servicescan.databaseCache](#servicescandatabasecache) | 设置缓存（数据库中缓存） |
 | [servicescan.excludeHosts](#servicescanexcludehosts) | 设置排除 hosts |
 | [servicescan.excludePorts](#servicescanexcludeports) | 设置排除端口 |
 | [servicescan.maxProbes](#servicescanmaxprobes) | 【参数】设置每个指纹扫描过程最多主动发送多少个数据包 |
 | [servicescan.maxProbesConcurrent](#servicescanmaxprobesconcurrent) | 【参数】每个指纹扫描目标允许的并发量 |
 | [servicescan.nmapRarityMax](#servicescannmapraritymax) | 【参数】设置nmap规则的最大稀有度 |
 | [servicescan.nmapRule](#servicescannmaprule) | 【参数】设置 nmap 规则文件（可以自己写） |
 | [servicescan.probeTimeout](#servicescanprobetimeout) |  |
 | [servicescan.proto](#servicescanproto) | 设置扫描的协议 |
 | [servicescan.proxy](#servicescanproxy) | 设置代理！ |
 | [servicescan.service](#servicescanservice) | 启动服务扫描（nmap 规则库） |
 | [servicescan.web](#servicescanweb) | 强制启用 web 扫描 |
 | [servicescan.webRule](#servicescanwebrule) | 启用用户自定义 web 规则 |




 



## 函数定义

### servicescan.Scan

扫描服务指纹的核心函数

#### 详细描述



#### 定义：

`func servicescan.Scan(hosts: string, ports: string, params ...opt) return (resultChannel: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |  想要扫描的主机，支持 `,` 分割的网段，IP地址，域名等 |
| ports | `string` |  想要扫描的端口 |
| params | `...opt` |  额外扫描参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChannel | `chan *fp.MatchResult` |  扫描结果的返回点 |
| r1 | `error` |   |


 
### servicescan.ScanFromPing

从 Ping 中扫描

#### 详细描述



#### 定义：

`func servicescan.ScanFromPing(v1: chan *pingutil.PingResult, v2: string, v3 ...fp.ConfigOption) return (r0: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `chan *pingutil.PingResult` |   |
| v2 | `string` |   |
| v3 | `...fp.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.ScanFromSpaceEngine

从网络空间搜索引擎的结果中扫描指纹信息

#### 详细描述



#### 定义：

`func servicescan.ScanFromSpaceEngine(chanFromSpacengine: any, params ...opt) return (resultChan: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| chanFromSpacengine | `any` |  从 spacengine 模块中返回的扫描结果 chan |
| params | `...opt` |  额外参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChan | `chan *fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.ScanFromSynResult

从 synscan 中返回的结果直接进入 servicescan 扫描的通道

#### 详细描述



#### 定义：

`func servicescan.ScanFromSynResult(chanForSynScan: any, params ...opt) return (resultChan: chan *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| chanForSynScan | `any` |   |
| params | `...opt` |  额外参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChan | `chan *fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.ScanOne

同步扫描单个目标

#### 详细描述



#### 定义：

`func servicescan.ScanOne(host: string, port: int, params ...opt) return (resultChan: *fp.MatchResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| params | `...opt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultChan | `*fp.MatchResult` |   |
| r1 | `error` |   |


 
### servicescan.active

【参数】主动扫描模式

#### 详细描述



#### 定义：

`func servicescan.active(isActive: bool) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isActive | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.all

【参数】扫描全部指纹

#### 详细描述



#### 定义：

`func servicescan.all() return (scanAll: func ConfigOption(v1: *fp.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| scanAll | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.cache



#### 详细描述



#### 定义：

`func servicescan.cache(v1: bool) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.concurrent



#### 详细描述



#### 定义：

`func servicescan.concurrent(concurrentSize: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrentSize | `int` |  【参数】设置扫描并发量 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.databaseCache

设置缓存（数据库中缓存）

#### 详细描述



#### 定义：

`func servicescan.databaseCache(v1: bool) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.excludeHosts

设置排除 hosts

#### 详细描述



#### 定义：

`func servicescan.excludeHosts(v1: string) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.excludePorts

设置排除端口

#### 详细描述



#### 定义：

`func servicescan.excludePorts(v1: string) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.maxProbes

【参数】设置每个指纹扫描过程最多主动发送多少个数据包

#### 详细描述



#### 定义：

`func servicescan.maxProbes(count: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.maxProbesConcurrent

【参数】每个指纹扫描目标允许的并发量

#### 详细描述



#### 定义：

`func servicescan.maxProbesConcurrent(size: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.nmapRarityMax

【参数】设置nmap规则的最大稀有度

#### 详细描述



#### 定义：

`func servicescan.nmapRarityMax(max: int) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.nmapRule

【参数】设置 nmap 规则文件（可以自己写）

#### 详细描述



#### 定义：

`func servicescan.nmapRule(v1: any) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.probeTimeout



#### 详细描述



#### 定义：

`func servicescan.probeTimeout(请求超时时间: float64) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| 请求超时时间 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.proto

设置扫描的协议

#### 详细描述



#### 定义：

`func servicescan.proto(protos ...any) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| protos | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.proxy

设置代理！

#### 详细描述



#### 定义：

`func servicescan.proxy(v1 ...string) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.service

启动服务扫描（nmap 规则库）

#### 详细描述



#### 定义：

`func servicescan.service() return (r0: func ConfigOption(v1: *fp.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.web

强制启用 web 扫描

#### 详细描述



#### 定义：

`func servicescan.web() return (r0: func ConfigOption(v1: *fp.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 
### servicescan.webRule

启用用户自定义 web 规则

#### 详细描述



#### 定义：

`func servicescan.webRule(v1: any) return (r0: func ConfigOption(v1: *fp.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *fp.Config) ` |   |


 


