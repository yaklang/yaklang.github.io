# spacengine

|函数名|函数描述/介绍|
|:------|:--------|
| [spacengine.FofaQuery](#fofaquery) |FofaQuery 使用 FOFA(白帽汇) 引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.FofaQuery 调用，依赖有效的 FOFA 邮箱与 API Key 参数: - email: FOFA 账号邮箱 - key: FOFA API Key -...|
| [spacengine.HunterQuery](#hunterquery) |HunterQuery 使用 Hunter(奇安信) 引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.HunterQuery 调用，依赖有效的 Hunter 鉴权 参数: - name: 用户标识(部分场景使用) - key: Hunter API Ke...|
| [spacengine.QuakeQuery](#quakequery) |QuakeQuery 使用 Quake(360) 引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.QuakeQuery 调用，依赖有效的 Quake API Key 参数: - token: Quake API Key - filter: 查询语句 - ...|
| [spacengine.Query](#query) |Query 使用所选网络空间测绘引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.Query 调用，需通过 spacengine.engine 等选项指定引擎与鉴权 参数: - filter: 查询语句(语法依各引擎而定) - opts: 配置项，需含引擎...|
| [spacengine.ShodanQuery](#shodanquery) |ShodanQuery 使用 Shodan 引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.ShodanQuery 调用，依赖有效的 Shodan API Key 参数: - token: Shodan API Key - filter: 查询语句 - ...|
| [spacengine.ZoneQuery](#zonequery) |ZoneQuery 使用 0.zone 引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.ZoneQuery 调用，依赖有效的 0.zone API Key 参数: - key: 0.zone API Key - filter: 查询语句 - opts: ...|
| [spacengine.ZoomeyeQuery](#zoomeyequery) |ZoomeyeQuery 使用 ZoomEye(知道创宇) 引擎执行查询，以 channel 形式流式返回结果 在 yak 中通过 spacengine.ZoomeyeQuery 调用，依赖有效的 ZoomEye API Key 参数: - key: ZoomEye API Key - filter...|
| [spacengine.domain](#domain) |domain 设置测绘引擎的自定义 API 域名/Endpoint(适配私有化部署) 在 yak 中通过 spacengine.domain 调用 参数: - domain: 自定义 API 域名 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.engine](#engine) |engine 选择要使用的网络空间测绘引擎并设置鉴权信息，支持 zoomeye/shodan/quake/hunter/fofa/zone 及自定义 在 yak 中通过 spacengine.engine 调用，未显式传入鉴权时会尝试读取本地第三方应用配置 参数: - i: 引擎名称 - auth:...|
| [spacengine.fofa](#fofa) |fofa 选择使用 FOFA(白帽汇) 引擎并设置鉴权(邮箱与 API Key) 在 yak 中通过 spacengine.fofa 调用，未传入时尝试读取本地配置 参数: - auth: 可选鉴权参数，传两个时为 邮箱 与 API Key 返回值: - 一个 spacengine.Query 可接...|
| [spacengine.hunter](#hunter) |hunter 选择使用 Hunter(奇安信) 引擎并设置 API Key 在 yak 中通过 spacengine.hunter 调用，未传入时尝试读取本地配置 参数: - auth: 可选的 Hunter API Key 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.maxPage](#maxpage) |maxPage 设置本次查询最多翻页的页数 在 yak 中通过 spacengine.maxPage 调用 参数: - i: 最大页数 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.maxRecord](#maxrecord) |maxRecord 设置本次查询返回的最大记录数 在 yak 中通过 spacengine.maxRecord 调用 参数: - i: 最大记录数 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.pageSize](#pagesize) |pageSize 设置每页返回的记录数(各引擎有不同上限) 在 yak 中通过 spacengine.pageSize 调用 参数: - i: 每页记录数 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.quake](#quake) |quake 选择使用 Quake(360) 引擎并设置 API Key 在 yak 中通过 spacengine.quake 调用，未传入时尝试读取本地配置 参数: - api: 可选的 Quake API Key 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.randomDelay](#randomdelay) |randomDelay 设置每次翻页请求之间的随机延迟范围(秒)，用于规避频率限制 在 yak 中通过 spacengine.randomDelay 调用 参数: - delayRange: 随机延迟范围(秒)，0 表示无延迟 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.retryTimes](#retrytimes) |retryTimes 设置请求失败时的重试次数 在 yak 中通过 spacengine.retryTimes 调用 参数: - times: 重试次数，0 表示不重试 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.shodan](#shodan) |shodan 选择使用 Shodan 引擎并设置 API Key 在 yak 中通过 spacengine.shodan 调用，未传入时尝试读取本地配置 参数: - api: 可选的 Shodan API Key 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.zone](#zone) |zone 选择使用 0.zone 引擎并设置 API Key 在 yak 中通过 spacengine.zone 调用，未传入时尝试读取本地配置 参数: - api: 可选的 0.zone API Key 返回值: - 一个 spacengine.Query 可接收的配置选项|
| [spacengine.zoomeye](#zoomeye) |zoomeye 选择使用 ZoomEye 引擎并设置 API Key 在 yak 中通过 spacengine.zoomeye 调用，未传入时尝试读取本地配置 参数: - api: 可选的 ZoomEye API Key 返回值: - 一个 spacengine.Query 可接收的配置选项|


## 函数定义
### FofaQuery

#### 详细描述
FofaQuery 使用 FOFA(白帽汇) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.FofaQuery 调用，依赖有效的 FOFA 邮箱与 API Key

参数:

  - email: FOFA 账号邮箱

  - key: FOFA API Key

  - filter: 查询语句(FOFA 语法)

  - opts: 可选配置项，如 spacengine.maxRecord、spacengine.pageSize



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 FOFA 服务
res = spacengine.FofaQuery("user@example.com", "YOUR_API_KEY", "app=\"nginx\"", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`FofaQuery(email string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| email | `string` | FOFA 账号邮箱 |
| key | `string` | FOFA API Key |
| filter | `string` | 查询语句(FOFA 语法) |
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord、spacengine.pageSize |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |


### HunterQuery

#### 详细描述
HunterQuery 使用 Hunter(奇安信) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.HunterQuery 调用，依赖有效的 Hunter 鉴权

参数:

  - name: 用户标识(部分场景使用)

  - key: Hunter API Key

  - filter: 查询语句

  - opts: 可选配置项，如 spacengine.maxRecord



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 Hunter 服务
res = spacengine.HunterQuery("", "YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`HunterQuery(name string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 用户标识(部分场景使用) |
| key | `string` | Hunter API Key |
| filter | `string` | 查询语句 |
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |


### QuakeQuery

#### 详细描述
QuakeQuery 使用 Quake(360) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.QuakeQuery 调用，依赖有效的 Quake API Key

参数:

  - token: Quake API Key

  - filter: 查询语句

  - opts: 可选配置项，如 spacengine.maxRecord、spacengine.maxPage



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 Quake 服务
res = spacengine.QuakeQuery("YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`QuakeQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` | Quake API Key |
| filter | `string` | 查询语句 |
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord、spacengine.maxPage |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |


### Query

#### 详细描述
Query 使用所选网络空间测绘引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.Query 调用，需通过 spacengine.engine 等选项指定引擎与鉴权

参数:

  - filter: 查询语句(语法依各引擎而定)

  - opts: 配置项，需含引擎选择(如 spacengine.fofa)，以及 spacengine.maxRecord 等



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，引擎无效或查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部测绘服务与有效 API Key
res = spacengine.Query("app=\"nginx\"",

	spacengine.fofa("user@example.com", "YOUR_API_KEY"),
	spacengine.maxRecord(100),

)~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`Query(filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `string` | 查询语句(语法依各引擎而定) |
| opts | `..._spaceEngineConfigOpt` | 配置项，需含引擎选择(如 spacengine.fofa)，以及 spacengine.maxRecord 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，引擎无效或查询失败时非 nil |


### ShodanQuery

#### 详细描述
ShodanQuery 使用 Shodan 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.ShodanQuery 调用，依赖有效的 Shodan API Key

参数:

  - token: Shodan API Key

  - filter: 查询语句

  - opts: 可选配置项，如 spacengine.maxRecord、spacengine.maxPage



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 Shodan 服务
res = spacengine.ShodanQuery("YOUR_API_KEY", "apache", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`ShodanQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` | Shodan API Key |
| filter | `string` | 查询语句 |
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord、spacengine.maxPage |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |


### ZoneQuery

#### 详细描述
ZoneQuery 使用 0.zone 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.ZoneQuery 调用，依赖有效的 0.zone API Key

参数:

  - key: 0.zone API Key

  - filter: 查询语句

  - opts: 可选配置项，如 spacengine.maxRecord



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 0.zone 服务
res = spacengine.ZoneQuery("YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`ZoneQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 0.zone API Key |
| filter | `string` | 查询语句 |
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |


### ZoomeyeQuery

#### 详细描述
ZoomeyeQuery 使用 ZoomEye(知道创宇) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.ZoomeyeQuery 调用，依赖有效的 ZoomEye API Key

参数:

  - key: ZoomEye API Key

  - filter: 查询语句

  - opts: 可选配置项，如 spacengine.maxRecord



返回值:

  - 一个只读 channel，逐条产出测绘结果

  - 错误信息，查询失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 ZoomEye 服务
res = spacengine.ZoomeyeQuery("YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````


#### 定义

`ZoomeyeQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | ZoomEye API Key |
| filter | `string` | 查询语句 |
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |


### domain

#### 详细描述
domain 设置测绘引擎的自定义 API 域名/Endpoint(适配私有化部署)

在 yak 中通过 spacengine.domain 调用

参数:

  - domain: 自定义 API 域名



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定自定义 API 域名
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.domain("fofa.example.com"))~
``````````````


#### 定义

`domain(domain string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 自定义 API 域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### engine

#### 详细描述
engine 选择要使用的网络空间测绘引擎并设置鉴权信息，支持 zoomeye/shodan/quake/hunter/fofa/zone 及自定义

在 yak 中通过 spacengine.engine 调用，未显式传入鉴权时会尝试读取本地第三方应用配置

参数:

  - i: 引擎名称

  - auth: 可选鉴权参数(依引擎不同为 apiKey，或 user+apiKey，或 user+apiKey+domain)



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：选择 fofa 引擎并传入鉴权
res = spacengine.Query("app=\"nginx\"", spacengine.engine("fofa", "user@example.com", "APIKEY"))~
``````````````


#### 定义

`engine(i string, auth ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 引擎名称 |
| auth | `...string` | 可选鉴权参数(依引擎不同为 apiKey，或 user+apiKey，或 user+apiKey+domain) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### fofa

#### 详细描述
fofa 选择使用 FOFA(白帽汇) 引擎并设置鉴权(邮箱与 API Key)

在 yak 中通过 spacengine.fofa 调用，未传入时尝试读取本地配置

参数:

  - auth: 可选鉴权参数，传两个时为 邮箱 与 API Key



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 FOFA 引擎
res = spacengine.Query("app=\"nginx\"", spacengine.fofa("user@example.com", "YOUR_API_KEY"))~
``````````````


#### 定义

`fofa(auth ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| auth | `...string` | 可选鉴权参数，传两个时为 邮箱 与 API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### hunter

#### 详细描述
hunter 选择使用 Hunter(奇安信) 引擎并设置 API Key

在 yak 中通过 spacengine.hunter 调用，未传入时尝试读取本地配置

参数:

  - auth: 可选的 Hunter API Key



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 Hunter 引擎
res = spacengine.Query("nginx", spacengine.hunter("YOUR_API_KEY"))~
``````````````


#### 定义

`hunter(auth ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| auth | `...string` | 可选的 Hunter API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### maxPage

#### 详细描述
maxPage 设置本次查询最多翻页的页数

在 yak 中通过 spacengine.maxPage 调用

参数:

  - i: 最大页数



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：最多翻 5 页
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.maxPage(5))~
``````````````


#### 定义

`maxPage(i int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 最大页数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### maxRecord

#### 详细描述
maxRecord 设置本次查询返回的最大记录数

在 yak 中通过 spacengine.maxRecord 调用

参数:

  - i: 最大记录数



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：最多返回 100 条记录
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.maxRecord(100))~
``````````````


#### 定义

`maxRecord(i int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 最大记录数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### pageSize

#### 详细描述
pageSize 设置每页返回的记录数(各引擎有不同上限)

在 yak 中通过 spacengine.pageSize 调用

参数:

  - i: 每页记录数



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：每页 100 条
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.pageSize(100))~
``````````````


#### 定义

`pageSize(i int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 每页记录数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### quake

#### 详细描述
quake 选择使用 Quake(360) 引擎并设置 API Key

在 yak 中通过 spacengine.quake 调用，未传入时尝试读取本地配置

参数:

  - api: 可选的 Quake API Key



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 Quake 引擎
res = spacengine.Query("nginx", spacengine.quake("YOUR_API_KEY"))~
``````````````


#### 定义

`quake(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` | 可选的 Quake API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### randomDelay

#### 详细描述
randomDelay 设置每次翻页请求之间的随机延迟范围(秒)，用于规避频率限制

在 yak 中通过 spacengine.randomDelay 调用

参数:

  - delayRange: 随机延迟范围(秒)，0 表示无延迟



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：每页间随机延迟 0-3 秒
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.randomDelay(3))~
``````````````


#### 定义

`randomDelay(delayRange int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| delayRange | `int` | 随机延迟范围(秒)，0 表示无延迟 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### retryTimes

#### 详细描述
retryTimes 设置请求失败时的重试次数

在 yak 中通过 spacengine.retryTimes 调用

参数:

  - times: 重试次数，0 表示不重试



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：失败重试 3 次
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.retryTimes(3))~
``````````````


#### 定义

`retryTimes(times int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| times | `int` | 重试次数，0 表示不重试 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### shodan

#### 详细描述
shodan 选择使用 Shodan 引擎并设置 API Key

在 yak 中通过 spacengine.shodan 调用，未传入时尝试读取本地配置

参数:

  - api: 可选的 Shodan API Key



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 Shodan 引擎
res = spacengine.Query("apache", spacengine.shodan("YOUR_API_KEY"))~
``````````````


#### 定义

`shodan(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` | 可选的 Shodan API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### zone

#### 详细描述
zone 选择使用 0.zone 引擎并设置 API Key

在 yak 中通过 spacengine.zone 调用，未传入时尝试读取本地配置

参数:

  - api: 可选的 0.zone API Key



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 0.zone 引擎
res = spacengine.Query("nginx", spacengine.zone("YOUR_API_KEY"))~
``````````````


#### 定义

`zone(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` | 可选的 0.zone API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


### zoomeye

#### 详细描述
zoomeye 选择使用 ZoomEye 引擎并设置 API Key

在 yak 中通过 spacengine.zoomeye 调用，未传入时尝试读取本地配置

参数:

  - api: 可选的 ZoomEye API Key



返回值:

  - 一个 spacengine.Query 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 ZoomEye 引擎
res = spacengine.Query("nginx", spacengine.zoomeye("YOUR_API_KEY"))~
``````````````


#### 定义

`zoomeye(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` | 可选的 ZoomEye API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |


