# spacengine {#library-spacengine}

`spacengine` 库对接主流网络空间测绘引擎（FOFA、Hunter、Quake、Shodan、ZoomEye、Zone 等），用统一接口按语法查询全网资产，常作为外部资产发现与情报收集的入口。使用前需要相应平台的 API Key/凭据。

典型使用场景：

- 统一查询：`spacengine.Query(filter, opts...)` 用 `spacengine.engine` 指定引擎与认证后统一查询；也可直接用 `spacengine.FofaQuery` / `spacengine.HunterQuery` / `spacengine.QuakeQuery` / `spacengine.ShodanQuery` / `spacengine.ZoomeyeQuery` / `spacengine.ZoneQuery`。
- 控制：`spacengine.maxPage` / `spacengine.maxRecord` / `spacengine.pageSize` 控制结果量，`spacengine.retryTimes` / `spacengine.randomDelay` 控制请求节奏。

与相邻库的关系：`spacengine` 查到的资产可交给 `servicescan`（`ScanFromSpaceEngine`）做指纹核验、`poc`/`fuzz` 做漏洞测试；与 `omnisearch`（聚合搜索）思路相通。

> 共 20 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [spacengine.domain](#domain) | `domain string` | `_spaceEngineConfigOpt` | 设置测绘引擎的自定义 API 域名/Endpoint(适配私有化部署) |
| [spacengine.maxPage](#maxpage) | `i int` | `_spaceEngineConfigOpt` | 设置本次查询最多翻页的页数 |
| [spacengine.maxRecord](#maxrecord) | `i int` | `_spaceEngineConfigOpt` | 设置本次查询返回的最大记录数 |
| [spacengine.pageSize](#pagesize) | `i int` | `_spaceEngineConfigOpt` | 设置每页返回的记录数(各引擎有不同上限) |
| [spacengine.randomDelay](#randomdelay) | `delayRange int` | `_spaceEngineConfigOpt` | 设置每次翻页请求之间的随机延迟范围(秒)，用于规避频率限制 |
| [spacengine.retryTimes](#retrytimes) | `times int` | `_spaceEngineConfigOpt` | 设置请求失败时的重试次数 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [spacengine.FofaQuery](#fofaquery) | `email string, key string, filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用 FOFA(白帽汇) 引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.HunterQuery](#hunterquery) | `name string, key string, filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用 Hunter(奇安信) 引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.QuakeQuery](#quakequery) | `token string, filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用 Quake(360) 引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.Query](#query) | `filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用所选网络空间测绘引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.ShodanQuery](#shodanquery) | `token string, filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用 Shodan 引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.ZoneQuery](#zonequery) | `key string, filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用 0.zone 引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.ZoomeyeQuery](#zoomeyequery) | `key string, filter string, opts ..._spaceEngineConfigOpt` | `chan *base.NetSpaceEngineResult, error` | 使用 ZoomEye(知道创宇) 引擎执行查询，以 channel 形式流式返回结果 |
| [spacengine.engine](#engine) | `i string, auth ...string` | `_spaceEngineConfigOpt` | 选择要使用的网络空间测绘引擎并设置鉴权信息，支持 zoomeye/shodan/quake/hunter/fofa/zone 及自定义 |
| [spacengine.fofa](#fofa) | `auth ...string` | `_spaceEngineConfigOpt` | 选择使用 FOFA(白帽汇) 引擎并设置鉴权(邮箱与 API Key) |
| [spacengine.hunter](#hunter) | `auth ...string` | `_spaceEngineConfigOpt` | 选择使用 Hunter(奇安信) 引擎并设置 API Key |
| [spacengine.quake](#quake) | `api ...string` | `_spaceEngineConfigOpt` | 选择使用 Quake(360) 引擎并设置 API Key |
| [spacengine.shodan](#shodan) | `api ...string` | `_spaceEngineConfigOpt` | 选择使用 Shodan 引擎并设置 API Key |
| [spacengine.zone](#zone) | `api ...string` | `_spaceEngineConfigOpt` | 选择使用 0.zone 引擎并设置 API Key |
| [spacengine.zoomeye](#zoomeye) | `api ...string` | `_spaceEngineConfigOpt` | 选择使用 ZoomEye 引擎并设置 API Key |

## 函数详情

### domain {#domain}

```go
domain(domain string) _spaceEngineConfigOpt
```

设置测绘引擎的自定义 API 域名/Endpoint(适配私有化部署)

在 yak 中通过 spacengine.domain 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | 自定义 API 域名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定自定义 API 域名
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.domain("fofa.example.com"))~
``````````````

---

### maxPage {#maxpage}

```go
maxPage(i int) _spaceEngineConfigOpt
```

设置本次查询最多翻页的页数

在 yak 中通过 spacengine.maxPage 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 最大页数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：最多翻 5 页
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.maxPage(5))~
``````````````

---

### maxRecord {#maxrecord}

```go
maxRecord(i int) _spaceEngineConfigOpt
```

设置本次查询返回的最大记录数

在 yak 中通过 spacengine.maxRecord 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 最大记录数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：最多返回 100 条记录
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.maxRecord(100))~
``````````````

---

### pageSize {#pagesize}

```go
pageSize(i int) _spaceEngineConfigOpt
```

设置每页返回的记录数(各引擎有不同上限)

在 yak 中通过 spacengine.pageSize 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 每页记录数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：每页 100 条
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.pageSize(100))~
``````````````

---

### randomDelay {#randomdelay}

```go
randomDelay(delayRange int) _spaceEngineConfigOpt
```

设置每次翻页请求之间的随机延迟范围(秒)，用于规避频率限制

在 yak 中通过 spacengine.randomDelay 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| delayRange | `int` | 随机延迟范围(秒)，0 表示无延迟 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：每页间随机延迟 0-3 秒
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.randomDelay(3))~
``````````````

---

### retryTimes {#retrytimes}

```go
retryTimes(times int) _spaceEngineConfigOpt
```

设置请求失败时的重试次数

在 yak 中通过 spacengine.retryTimes 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| times | `int` | 重试次数，0 表示不重试 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：失败重试 3 次
res = spacengine.Query("nginx", spacengine.fofa("u", "k"), spacengine.retryTimes(3))~
``````````````

---

## 可变参数函数详情

### FofaQuery {#fofaquery}

```go
FofaQuery(email string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用 FOFA(白帽汇) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.FofaQuery 调用，依赖有效的 FOFA 邮箱与 API Key

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| email | `string` | FOFA 账号邮箱 |
| key | `string` | FOFA API Key |
| filter | `string` | 查询语句(FOFA 语法) |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord、spacengine.pageSize |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 FOFA 服务
res = spacengine.FofaQuery("user@example.com", "YOUR_API_KEY", "app=\"nginx\"", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````

---

### HunterQuery {#hunterquery}

```go
HunterQuery(name string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用 Hunter(奇安信) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.HunterQuery 调用，依赖有效的 Hunter 鉴权

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 用户标识(部分场景使用) |
| key | `string` | Hunter API Key |
| filter | `string` | 查询语句 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 Hunter 服务
res = spacengine.HunterQuery("", "YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````

---

### QuakeQuery {#quakequery}

```go
QuakeQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用 Quake(360) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.QuakeQuery 调用，依赖有效的 Quake API Key

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | Quake API Key |
| filter | `string` | 查询语句 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord、spacengine.maxPage |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 Quake 服务
res = spacengine.QuakeQuery("YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````

---

### Query {#query}

```go
Query(filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用所选网络空间测绘引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.Query 调用，需通过 spacengine.engine 等选项指定引擎与鉴权

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| filter | `string` | 查询语句(语法依各引擎而定) |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 配置项，需含引擎选择(如 spacengine.fofa)，以及 spacengine.maxRecord 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，引擎无效或查询失败时非 nil |

**示例**

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

---

### ShodanQuery {#shodanquery}

```go
ShodanQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用 Shodan 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.ShodanQuery 调用，依赖有效的 Shodan API Key

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | Shodan API Key |
| filter | `string` | 查询语句 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord、spacengine.maxPage |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 Shodan 服务
res = spacengine.ShodanQuery("YOUR_API_KEY", "apache", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````

---

### ZoneQuery {#zonequery}

```go
ZoneQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用 0.zone 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.ZoneQuery 调用，依赖有效的 0.zone API Key

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 0.zone API Key |
| filter | `string` | 查询语句 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 0.zone 服务
res = spacengine.ZoneQuery("YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````

---

### ZoomeyeQuery {#zoomeyequery}

```go
ZoomeyeQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)
```

使用 ZoomEye(知道创宇) 引擎执行查询，以 channel 形式流式返回结果

在 yak 中通过 spacengine.ZoomeyeQuery 调用，依赖有效的 ZoomEye API Key

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | ZoomEye API Key |
| filter | `string` | 查询语句 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._spaceEngineConfigOpt` | 可选配置项，如 spacengine.maxRecord |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *base.NetSpaceEngineResult` | 一个只读 channel，逐条产出测绘结果 |
| r2 | `error` | 错误信息，查询失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 ZoomEye 服务
res = spacengine.ZoomeyeQuery("YOUR_API_KEY", "nginx", spacengine.maxRecord(50))~

	for result = range res {
	    println(result.Addr)
	}
``````````````

---

### engine {#engine}

```go
engine(i string, auth ...string) _spaceEngineConfigOpt
```

选择要使用的网络空间测绘引擎并设置鉴权信息，支持 zoomeye/shodan/quake/hunter/fofa/zone 及自定义

在 yak 中通过 spacengine.engine 调用，未显式传入鉴权时会尝试读取本地第三方应用配置

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 引擎名称 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| auth | `...string` | 可选鉴权参数(依引擎不同为 apiKey，或 user+apiKey，或 user+apiKey+domain) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：选择 fofa 引擎并传入鉴权
res = spacengine.Query("app=\"nginx\"", spacengine.engine("fofa", "user@example.com", "APIKEY"))~
``````````````

---

### fofa {#fofa}

```go
fofa(auth ...string) _spaceEngineConfigOpt
```

选择使用 FOFA(白帽汇) 引擎并设置鉴权(邮箱与 API Key)

在 yak 中通过 spacengine.fofa 调用，未传入时尝试读取本地配置

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| auth | `...string` | 可选鉴权参数，传两个时为 邮箱 与 API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 FOFA 引擎
res = spacengine.Query("app=\"nginx\"", spacengine.fofa("user@example.com", "YOUR_API_KEY"))~
``````````````

---

### hunter {#hunter}

```go
hunter(auth ...string) _spaceEngineConfigOpt
```

选择使用 Hunter(奇安信) 引擎并设置 API Key

在 yak 中通过 spacengine.hunter 调用，未传入时尝试读取本地配置

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| auth | `...string` | 可选的 Hunter API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 Hunter 引擎
res = spacengine.Query("nginx", spacengine.hunter("YOUR_API_KEY"))~
``````````````

---

### quake {#quake}

```go
quake(api ...string) _spaceEngineConfigOpt
```

选择使用 Quake(360) 引擎并设置 API Key

在 yak 中通过 spacengine.quake 调用，未传入时尝试读取本地配置

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| api | `...string` | 可选的 Quake API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 Quake 引擎
res = spacengine.Query("nginx", spacengine.quake("YOUR_API_KEY"))~
``````````````

---

### shodan {#shodan}

```go
shodan(api ...string) _spaceEngineConfigOpt
```

选择使用 Shodan 引擎并设置 API Key

在 yak 中通过 spacengine.shodan 调用，未传入时尝试读取本地配置

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| api | `...string` | 可选的 Shodan API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 Shodan 引擎
res = spacengine.Query("apache", spacengine.shodan("YOUR_API_KEY"))~
``````````````

---

### zone {#zone}

```go
zone(api ...string) _spaceEngineConfigOpt
```

选择使用 0.zone 引擎并设置 API Key

在 yak 中通过 spacengine.zone 调用，未传入时尝试读取本地配置

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| api | `...string` | 可选的 0.zone API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 0.zone 引擎
res = spacengine.Query("nginx", spacengine.zone("YOUR_API_KEY"))~
``````````````

---

### zoomeye {#zoomeye}

```go
zoomeye(api ...string) _spaceEngineConfigOpt
```

选择使用 ZoomEye 引擎并设置 API Key

在 yak 中通过 spacengine.zoomeye 调用，未传入时尝试读取本地配置

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| api | `...string` | 可选的 ZoomEye API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_spaceEngineConfigOpt` | 一个 spacengine.Query 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 ZoomEye 引擎
res = spacengine.Query("nginx", spacengine.zoomeye("YOUR_API_KEY"))~
``````````````

---

