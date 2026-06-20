# subdomain

|函数名|函数描述/介绍|
|:------|:--------|
| [subdomain.Scan](#scan) |Scan 对域名进行子域名扫描，它的第一个参数可以接收字符串或字符串数组，接下来可以接收零个到多个选项，用于对此次扫描进行配置，例如设置扫描超时时间，是否递归等，返回结果管道与错误 使用 请求(爆破)，查询，域传送技术进行子域名扫描 参数: - target: 扫描目标，支持字符串、字节数组或字符串...|
| [subdomain.dnsServer](#dnsserver) |dnsServer 是一个选项参数，设置用于解析域名的 DNS 服务器，默认为 114.114.114.114 和 8.8.8.8 参数: - servers: 用于解析域名的 DNS 服务器列表 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.eachQueryTimeout](#eachquerytimeout) |eachQueryTimeout 是一个选项参数，设置每个查询的超时时间，单位为秒，默认为 3s 参数: - i: 每个查询的超时时间，单位为秒 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.eachSearchTimeout](#eachsearchtimeout) |eachSearchTimeout 是一个选项参数，设置每个搜索的超时时间，单位为秒，默认为 10s 参数: - i: 每个搜索的超时时间，单位为秒 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.mainDict](#maindict) |mainDict 是一个选项参数，设置子域名爆破主字典，其第一个参数可以是文件名、字符串或字符串数组 参数: - i: 主字典，可以是文件名、字符串或字符串数组 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.maxDepth](#maxdepth) |maxDepth 是一个选项参数，设置子域名遍历的最大深度，默认为 5，通常与 recursive 一起使用 参数: - d: 子域名遍历的最大深度 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.recursive](#recursive) |recursive 是一个选项参数，设置是否递归扫描子域名，如果不递归扫描，那么只会扫描一层子域名，默认为false 参数: - b: 是否递归扫描子域名 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.recursiveDict](#recursivedict) |recursiveDict 是一个选项参数，设置子域名爆破递归字典，其第一个参数可以是文件名、字符串或字符串数组 参数: - i: 递归字典，可以是文件名、字符串或字符串数组 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.targetConcurrent](#targetconcurrent) |targetConcurrent 是一个选项参数，设置每个目标的最大线程数量，默认为 10 参数: - c: 每个目标的最大线程数量 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.targetTimeout](#targettimeout) |targetTimeout 是一个选项参数，设置每个目标的超时时间，单位为秒，默认为 300s 参数: - i: 每个目标的超时时间，单位为秒 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.wildcardToStop](#wildcardtostop) |wildcardToStop 是一个选项参数，遇到泛解析的情况，是否马上停止解析，默认为 false 参数: - t: 遇到泛解析时是否马上停止解析 返回值: - 一个 subdomain.Scan 可接收的配置选项|
| [subdomain.workerConcurrent](#workerconcurrent) |workerConcurrent 是一个选项参数，设置总的工作线程数量，默认为 50 参数: - c: 总的工作线程数量 返回值: - 一个 subdomain.Scan 可接收的配置选项|


## 函数定义
### Scan

#### 详细描述
Scan 对域名进行子域名扫描，它的第一个参数可以接收字符串或字符串数组，接下来可以接收零个到多个选项，用于对此次扫描进行配置，例如设置扫描超时时间，是否递归等，返回结果管道与错误

使用 请求(爆破)，查询，域传送技术进行子域名扫描

参数:

  - target: 扫描目标，支持字符串、字节数组或字符串数组

  - opts: 零个或多个子域名扫描配置选项



返回值:

  - chan *subdomain.SubdomainResult: 子域名扫描结果管道

  - error: 启动失败时返回错误




Example:

``````````````yak
for domain in subdomain.Scan("example.com")~ {
dump(domain)
}
``````````````


#### 定义

`Scan(target any, opts ...subdomain.ConfigOption) (chan *subdomain.SubdomainResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `any` | 扫描目标，支持字符串、字节数组或字符串数组 |
| opts | `...subdomain.ConfigOption` | 零个或多个子域名扫描配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *subdomain.SubdomainResult` | chan *subdomain.SubdomainResult: 子域名扫描结果管道 |
| r2 | `error` | 启动失败时返回错误 |


### dnsServer

#### 详细描述
dnsServer 是一个选项参数，设置用于解析域名的 DNS 服务器，默认为 114.114.114.114 和 8.8.8.8

参数:

  - servers: 用于解析域名的 DNS 服务器列表



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.dnsServer("1.1.1.1"))
``````````````


#### 定义

`dnsServer(servers []string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `[]string` | 用于解析域名的 DNS 服务器列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### eachQueryTimeout

#### 详细描述
eachQueryTimeout 是一个选项参数，设置每个查询的超时时间，单位为秒，默认为 3s

参数:

  - i: 每个查询的超时时间，单位为秒



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.eachQueryTimeout(5))
``````````````


#### 定义

`eachQueryTimeout(i float64) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 每个查询的超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### eachSearchTimeout

#### 详细描述
eachSearchTimeout 是一个选项参数，设置每个搜索的超时时间，单位为秒，默认为 10s

参数:

  - i: 每个搜索的超时时间，单位为秒



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.withEachSearchTimeout(5))
``````````````


#### 定义

`eachSearchTimeout(i float64) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 每个搜索的超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### mainDict

#### 详细描述
mainDict 是一个选项参数，设置子域名爆破主字典，其第一个参数可以是文件名、字符串或字符串数组

参数:

  - i: 主字典，可以是文件名、字符串或字符串数组



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
dict = "/tmp/dict.txt"
subdomain.Scan("example.com", subdomain.mainDict(dict))
``````````````


#### 定义

`mainDict(i any) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 主字典，可以是文件名、字符串或字符串数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### maxDepth

#### 详细描述
maxDepth 是一个选项参数，设置子域名遍历的最大深度，默认为 5，通常与 recursive 一起使用

参数:

  - d: 子域名遍历的最大深度



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.maxDepth(10), subdomain.recursive(true))
``````````````


#### 定义

`maxDepth(d int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `int` | 子域名遍历的最大深度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### recursive

#### 详细描述
recursive 是一个选项参数，设置是否递归扫描子域名，如果不递归扫描，那么只会扫描一层子域名，默认为false

参数:

  - b: 是否递归扫描子域名



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.recursive(true))
``````````````


#### 定义

`recursive(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否递归扫描子域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### recursiveDict

#### 详细描述
recursiveDict 是一个选项参数，设置子域名爆破递归字典，其第一个参数可以是文件名、字符串或字符串数组

参数:

  - i: 递归字典，可以是文件名、字符串或字符串数组



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
dict = "/tmp/sub-dict.txt"
subdomain.Scan("example.com", subdomain.recursive(true), subdomain.recursiveDict(dict))
``````````````


#### 定义

`recursiveDict(i any) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 递归字典，可以是文件名、字符串或字符串数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### targetConcurrent

#### 详细描述
targetConcurrent 是一个选项参数，设置每个目标的最大线程数量，默认为 10

参数:

  - c: 每个目标的最大线程数量



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.targetConcurrent(5))
``````````````


#### 定义

`targetConcurrent(c int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` | 每个目标的最大线程数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### targetTimeout

#### 详细描述
targetTimeout 是一个选项参数，设置每个目标的超时时间，单位为秒，默认为 300s

参数:

  - i: 每个目标的超时时间，单位为秒



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.targetTimeout(10))
``````````````


#### 定义

`targetTimeout(i float64) subdomain.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 每个目标的超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `subdomain.ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### wildcardToStop

#### 详细描述
wildcardToStop 是一个选项参数，遇到泛解析的情况，是否马上停止解析，默认为 false

参数:

  - t: 遇到泛解析时是否马上停止解析



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.wildcardToStop(true))
``````````````


#### 定义

`wildcardToStop(t bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` | 遇到泛解析时是否马上停止解析 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


### workerConcurrent

#### 详细描述
workerConcurrent 是一个选项参数，设置总的工作线程数量，默认为 50

参数:

  - c: 总的工作线程数量



返回值:

  - 一个 subdomain.Scan 可接收的配置选项




Example:

``````````````yak
subdomain.Scan("example.com", subdomain.workerConcurrent(10))
``````````````


#### 定义

`workerConcurrent(c int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` | 总的工作线程数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 subdomain.Scan 可接收的配置选项 |


