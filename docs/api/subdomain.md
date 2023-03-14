# subdomain


|成员函数|函数描述/介绍|
|:------|:--------|
 | [subdomain.Scan](#subdomainscan) | 扫描子域名的核心函数，通过和这个函数，输入想要扫描的子域名和相关参数 |
 | [subdomain.dnsServer](#subdomaindnsserver) | 为扫描过程设置自定义 dnsServer |
 | [subdomain.eachQueryTimeout](#subdomaineachquerytimeout) | 每一次 DNS 请求发送的超时时间 |
 | [subdomain.eachSearchTimeout](#subdomaineachsearchtimeout) | 每次调用第三方接口进行子域名搜索的时候，HTTP 请求的超时时间 |
 | [subdomain.mainDict](#subdomainmaindict) | 子域名爆破使用的主字典（字典名/字典内容[]string/bytes/reader）均支持 |
 | [subdomain.maxDepth](#subdomainmaxdepth) | 设置递归爆破的最大深度 |
 | [subdomain.recursive](#subdomainrecursive) | 是否开启递归爆破 |
 | [subdomain.recursiveDict](#subdomainrecursivedict) | 如果开启了递归，则可以设置递归字典（默认自带一个小字典） |
 | [subdomain.targetConcurrent](#subdomaintargetconcurrent) | 针对多个目标进行并发爆破的时候，通过这个选项设置并发 |
 | [subdomain.targetTimeout](#subdomaintargettimeout) | 每一个目标应该最多爆破多久？单个目标的超时时间 |
 | [subdomain.wildcardToStop](#subdomainwildcardtostop) | 遇到泛解析就停止 |
 | [subdomain.workerConcurrent](#subdomainworkerconcurrent) | 发送 DNS 请求的最大并发（同时允许多少个 DNS 请求同时发出？）主要用于控制速率 |




 



## 函数定义

### subdomain.Scan

扫描子域名的核心函数，通过和这个函数，输入想要扫描的子域名和相关参数

#### 详细描述



#### 定义：

`func subdomain.Scan(domains: []string|string|bytes, params subdomain.param) return (resultsChannel: chan *subdomain.SubdomainResult, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domains | `[]string|string|bytes` |  想要扫描的子域名，支持 []string，也支持 string/bytes，可以支持逗号分隔 |
| params | `subdomain.param` |  可变参数，扫描时需要增加的参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| resultsChannel | `chan *subdomain.SubdomainResult` |  扫描的结果将会放入返回的这个 channel 中 |
| err | `error` |   |


 
### subdomain.dnsServer

为扫描过程设置自定义 dnsServer

#### 详细描述



#### 定义：

`func subdomain.dnsServer(servers: []string) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.eachQueryTimeout

每一次 DNS 请求发送的超时时间

#### 详细描述



#### 定义：

`func subdomain.eachQueryTimeout(seconds: float64) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.eachSearchTimeout

每次调用第三方接口进行子域名搜索的时候，HTTP 请求的超时时间

#### 详细描述



#### 定义：

`func subdomain.eachSearchTimeout(seconds: float64) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.mainDict

子域名爆破使用的主字典（字典名/字典内容[]string/bytes/reader）均支持

#### 详细描述



#### 定义：

`func subdomain.mainDict(dict: string|[]string|fileName|bytes|reader) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dict | `string|[]string|fileName|bytes|reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.maxDepth

设置递归爆破的最大深度

#### 详细描述



#### 定义：

`func subdomain.maxDepth(depth: int) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.recursive

是否开启递归爆破

#### 详细描述



#### 定义：

`func subdomain.recursive(v1: bool) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.recursiveDict

如果开启了递归，则可以设置递归字典（默认自带一个小字典）

#### 详细描述



#### 定义：

`func subdomain.recursiveDict(dict: string|fileName|[]string|bytes|reader) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dict | `string|fileName|[]string|bytes|reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.targetConcurrent

针对多个目标进行并发爆破的时候，通过这个选项设置并发

#### 详细描述



#### 定义：

`func subdomain.targetConcurrent(concurrent: int) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.targetTimeout

每一个目标应该最多爆破多久？单个目标的超时时间

#### 详细描述



#### 定义：

`func subdomain.targetTimeout(seconds: float64) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.wildcardToStop

遇到泛解析就停止

#### 详细描述



#### 定义：

`func subdomain.wildcardToStop(v1: bool) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 
### subdomain.workerConcurrent

发送 DNS 请求的最大并发（同时允许多少个 DNS 请求同时发出？）主要用于控制速率

#### 详细描述



#### 定义：

`func subdomain.workerConcurrent(concurrent: int) return (r0: subdomain.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `subdomain.param` |   |


 


