# ping


|成员函数|函数描述/介绍|
|:------|:--------|
 | [ping.Ping](#pingping) | 原生 ICMP ping |
 | [ping.Scan](#pingscan) | ping 扫描 |
 | [ping.concurrent](#pingconcurrent) | 设置 Ping 扫的并发 |
 | [ping.dnsServers](#pingdnsservers) | 设置 DNS 服务器 |
 | [ping.dnsTimeout](#pingdnstimeout) | 设置 DNS 超时时间 |
 | [ping.excludeHosts](#pingexcludehosts) |  |
 | [ping.onResult](#pingonresult) |  |
 | [ping.proxy](#pingproxy) | 为 TCP Ping 增加代理 |
 | [ping.scanCClass](#pingscancclass) | 直接 ping 整个 C 段 |
 | [ping.skip](#pingskip) | 跳过存活检查，默认均为存活 |
 | [ping.tcpPingPorts](#pingtcppingports) |  |
 | [ping.timeout](#pingtimeout) | 设置 ping 超时 |




 



## 函数定义

### ping.Ping

原生 ICMP ping

#### 详细描述



#### 定义：

`Ping(target string, opts ..._pingConfigOpt) *pingutil.PingResult`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yaklib._pingConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*pingutil.PingResult` |   |


 
### ping.Scan

ping 扫描

#### 详细描述



#### 定义：

`Scan(target string, opts ..._pingConfigOpt) chan *pingutil.PingResult`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib._pingConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *pingutil.PingResult` |   |


 
### ping.concurrent

设置 Ping 扫的并发

#### 详细描述



#### 定义：

`concurrent(int) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.dnsServers

设置 DNS 服务器

#### 详细描述



#### 定义：

`dnsServers(...string) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.dnsTimeout

设置 DNS 超时时间

#### 详细描述



#### 定义：

`dnsTimeout(float64) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.excludeHosts



#### 详细描述



#### 定义：

`excludeHosts(string) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.onResult



#### 详细描述



#### 定义：

`onResult(func(*pingutil.PingResult)) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *pingutil.PingResult) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.proxy

为 TCP Ping 增加代理

#### 详细描述



#### 定义：

`proxy(...string) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.scanCClass

直接 ping 整个 C 段

#### 详细描述



#### 定义：

`scanCClass(bool) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.skip

跳过存活检查，默认均为存活

#### 详细描述



#### 定义：

`skip(bool) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.tcpPingPorts



#### 详细描述



#### 定义：

`tcpPingPorts(string) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 
### ping.timeout

设置 ping 超时

#### 详细描述



#### 定义：

`timeout(float64) yaklib._pingConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _pingConfigOpt(v1: *yaklib._pingConfig) ` |   |


 


