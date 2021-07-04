# httpool


|成员函数|函数描述/介绍|
|:------|:--------|
 | [httpool.Pool](#httpoolpool) | 批量执行 http 请求 |
 | [httpool.host](#httpoolhost) | 【参数】设置批量请求发送的真正 host（兼容 Host 头与设计发送请求不一致的情况） |
 | [httpool.https](#httpoolhttps) | 为请求设置 HTTPS |
 | [httpool.perRequestTimeout](#httpoolperrequesttimeout) | 【参数】为每个请求设置超时时间 |
 | [httpool.port](#httpoolport) | 【参数】设置请求发送到的真正 Port |
 | [httpool.proxy](#httpoolproxy) | 【参数】设置整个请求池的代理 |
 | [httpool.size](#httpoolsize) | 【参数】设置每个请求的 body 的最大大小 |




 



## 函数定义

### httpool.Pool

批量执行 http 请求

#### 详细描述



#### 定义：

`func httpool.Pool(requests: []*http.Request|FuzzHTTPRequest|FuzzHTTPRequestBatch|FuzzHTTPRequestIf|*http.Request, params ...opt) return (r0: chan *mutate._httpResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| requests | `[]*http.Request|FuzzHTTPRequest|FuzzHTTPRequestBatch|FuzzHTTPRequestIf|*http.Request` |  想要批量执行的请求 |
| params | `...opt` |  额外选项 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *mutate._httpResult` |   |
| r1 | `error` |   |


 
### httpool.host

【参数】设置批量请求发送的真正 host（兼容 Host 头与设计发送请求不一致的情况）

#### 详细描述



#### 定义：

`func httpool.host(host: string) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |  设置发送请求的真正 Host |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpool.https

为请求设置 HTTPS

#### 详细描述



#### 定义：

`func httpool.https(isHttps: bool) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpool.perRequestTimeout

【参数】为每个请求设置超时时间

#### 详细描述



#### 定义：

`func httpool.perRequestTimeout(seconds: float64) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpool.port

【参数】设置请求发送到的真正 Port

#### 详细描述



#### 定义：

`func httpool.port(port: int) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpool.proxy

【参数】设置整个请求池的代理

#### 详细描述



#### 定义：

`func httpool.proxy(proxyUrls ...string) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxyUrls | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpool.size

【参数】设置每个请求的 body 的最大大小

#### 详细描述



#### 定义：

`func httpool.size(bodySize: int) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bodySize | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 


