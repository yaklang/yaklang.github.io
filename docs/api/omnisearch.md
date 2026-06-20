# omnisearch

|函数名|函数描述/介绍|
|:------|:--------|
| [omnisearch.Search](#search) |Search 使用聚合搜索引擎执行一次综合搜索（默认走 aibalance 聚合层） 依赖外部搜索服务与 API Key，需要网络环境 参数: - query: 搜索关键词 - options: 搜索可选项，如 omnisearch.apikey / omnisearch.type / omnise...|
| [omnisearch.apikey](#apikey) |omnisearchAPIKey 为本次搜索设置一个或多个 API Key（导出名为 omnisearch.apikey） 作为 omnisearch.Search 的可选项；真实联网搜索时用于鉴权，可一次传入多个 key 做轮询 参数: - keys: 一个或多个 API Key 返回值: - 可...|
| [omnisearch.backendType](#backendtype) |omnisearchBackendType 指定聚合层后端使用的实际搜索器类型（导出名为 omnisearch.backendType） 作为 omnisearch.Search 的可选项，用于让 aibalance 等聚合后端选择具体的下游搜索引擎 参数: - backendType: 后端搜索器...|
| [omnisearch.baseurl](#baseurl) |WithBaseURL 设置搜索服务的基础 URL（导出名为 omnisearch.baseurl） 参数: - baseURL: 搜索后端服务地址 返回值: - 搜索可选项|
| [omnisearch.customSearcher](#customsearcher) |omnisearchCustomSearcher 注册一个自定义搜索器，使 omnisearch.Search 调用本地处理函数（导出名为 omnisearch.customSearcher） 配合 omnisearch.type(同名) 使用，可在不依赖外部搜索服务的情况下完成搜索 参数: - n...|
| [omnisearch.page](#page) |WithPage 设置搜索结果页码（导出名为 omnisearch.page） 参数: - page: 页码，从 1 开始 返回值: - 搜索可选项|
| [omnisearch.pagesize](#pagesize) |WithPageSize 设置每页结果数量（导出名为 omnisearch.pagesize） 参数: - pageSize: 每页结果数量 返回值: - 搜索可选项|
| [omnisearch.proxy](#proxy) |WithProxy 设置搜索请求代理（导出名为 omnisearch.proxy） 参数: - proxy: 代理地址，如 http://127.0.0.1:7890 返回值: - 搜索可选项|
| [omnisearch.timeout](#timeout) |WithTimeout 设置搜索超时时间（导出名为 omnisearch.timeout） 参数: - timeout: 超时时间 返回值: - 搜索可选项|
| [omnisearch.type](#type) |omnisearchType 指定本次搜索使用的搜索器类型（导出名为 omnisearch.type） 作为 omnisearch.Search 的可选项使用；配合 omnisearch.customSearcher 可将搜索路由到自定义搜索器 参数: - name: 搜索器类型名称 返回值: - ...|


## 函数定义
### Search

#### 详细描述
Search 使用聚合搜索引擎执行一次综合搜索（默认走 aibalance 聚合层）

依赖外部搜索服务与 API Key，需要网络环境

参数:

  - query: 搜索关键词

  - options: 搜索可选项，如 omnisearch.apikey / omnisearch.type / omnisearch.page 等



返回值:

  - 搜索结果列表，每个结果包含内容与来源

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要有效的 apikey 与网络
results = omnisearch.Search("yaklang", omnisearch.apikey("your-api-key"))~

	for r in results {
	    println(r.Content)
	}
``````````````


#### 定义

`Search(query string, options ...ostype.SearchOption) ([]*ostype.OmniSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` | 搜索关键词 |
| options | `...ostype.SearchOption` | 搜索可选项，如 omnisearch.apikey / omnisearch.type / omnisearch.page 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ostype.OmniSearchResult` | 搜索结果列表，每个结果包含内容与来源 |
| r2 | `error` | 错误信息 |


### apikey

#### 详细描述
omnisearchAPIKey 为本次搜索设置一个或多个 API Key（导出名为 omnisearch.apikey）

作为 omnisearch.Search 的可选项；真实联网搜索时用于鉴权，可一次传入多个 key 做轮询



参数:

  - keys: 一个或多个 API Key



返回值:

  - 可传入 omnisearch.Search 的搜索选项




Example:

``````````````yak
// 此处用自定义搜索器离线演示 apikey 选项被正确接收并传入 Search
results = omnisearch.Search(
    "yaklang",
    omnisearch.type("mylocal"),
    omnisearch.apikey("demo-key-1", "demo-key-2"),
    omnisearch.customSearcher("mylocal", (query, cfg) => { return ["ok"], nil }),
)~
println(len(results))   // OUT: 1
assert len(results) == 1, "apikey option should be accepted by Search"
``````````````


#### 定义

`apikey(keys ...string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keys | `...string` | 一个或多个 API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` | 可传入 omnisearch.Search 的搜索选项 |


### backendType

#### 详细描述
omnisearchBackendType 指定聚合层后端使用的实际搜索器类型（导出名为 omnisearch.backendType）

作为 omnisearch.Search 的可选项，用于让 aibalance 等聚合后端选择具体的下游搜索引擎



参数:

  - backendType: 后端搜索器类型名称



返回值:

  - 可传入 omnisearch.Search 的搜索选项




Example:

``````````````yak
// 此处用自定义搜索器离线演示 backendType 选项被正确接收并传入 Search
results = omnisearch.Search(
    "yaklang",
    omnisearch.type("mylocal"),
    omnisearch.backendType("custom"),
    omnisearch.customSearcher("mylocal", (query, cfg) => { return ["ok"], nil }),
)~
println(len(results))   // OUT: 1
assert len(results) == 1, "backendType option should be accepted by Search"
``````````````


#### 定义

`backendType(backendType string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| backendType | `string` | 后端搜索器类型名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` | 可传入 omnisearch.Search 的搜索选项 |


### baseurl

#### 详细描述
WithBaseURL 设置搜索服务的基础 URL（导出名为 omnisearch.baseurl）

参数:

  - baseURL: 搜索后端服务地址



返回值:

  - 搜索可选项




Example:

``````````````yak
// 示意性示例，需要有效的搜索后端
results = omnisearch.Search("yaklang", omnisearch.baseurl("https://api.example.com"))~
``````````````


#### 定义

`baseurl(baseURL string) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseURL | `string` | 搜索后端服务地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` | 搜索可选项 |


### customSearcher

#### 详细描述
omnisearchCustomSearcher 注册一个自定义搜索器，使 omnisearch.Search 调用本地处理函数（导出名为 omnisearch.customSearcher）

配合 omnisearch.type(同名) 使用，可在不依赖外部搜索服务的情况下完成搜索



参数:

  - name: 自定义搜索器名称，需与 omnisearch.type 指定的类型名一致

  - handle: 处理函数，接收查询串与搜索配置，返回结果与错误



返回值:

  - 可传入 omnisearch.Search 的搜索选项




Example:

``````````````yak
results = omnisearch.Search(
    "yaklang",
    omnisearch.type("mylocal"),
    omnisearch.customSearcher("mylocal", (query, cfg) => { return [f"hit-for-${query}"], nil }),
)~
println(results[0].Source)   // OUT: mylocal
assert results[0].Source == "mylocal", "customSearcher should produce results tagged with its name"
``````````````


#### 定义

`customSearcher(name string, handle CustomSearcherHandle) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 自定义搜索器名称，需与 omnisearch.type 指定的类型名一致 |
| handle | `CustomSearcherHandle` | 处理函数，接收查询串与搜索配置，返回结果与错误 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` | 可传入 omnisearch.Search 的搜索选项 |


### page

#### 详细描述
WithPage 设置搜索结果页码（导出名为 omnisearch.page）

参数:

  - page: 页码，从 1 开始



返回值:

  - 搜索可选项




Example:

``````````````yak
// 示意性示例，需要有效的 apikey 与网络
results = omnisearch.Search("yaklang", omnisearch.page(2))~
``````````````


#### 定义

`page(page int) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| page | `int` | 页码，从 1 开始 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` | 搜索可选项 |


### pagesize

#### 详细描述
WithPageSize 设置每页结果数量（导出名为 omnisearch.pagesize）

参数:

  - pageSize: 每页结果数量



返回值:

  - 搜索可选项




Example:

``````````````yak
// 示意性示例，需要有效的 apikey 与网络
results = omnisearch.Search("yaklang", omnisearch.pagesize(20))~
``````````````


#### 定义

`pagesize(pageSize int) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pageSize | `int` | 每页结果数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` | 搜索可选项 |


### proxy

#### 详细描述
WithProxy 设置搜索请求代理（导出名为 omnisearch.proxy）

参数:

  - proxy: 代理地址，如 http://127.0.0.1:7890



返回值:

  - 搜索可选项




Example:

``````````````yak
// 示意性示例，需要有效的 apikey 与网络
results = omnisearch.Search("yaklang", omnisearch.proxy("http://127.0.0.1:7890"))~
``````````````


#### 定义

`proxy(proxy string) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` | 代理地址，如 http://127.0.0.1:7890 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` | 搜索可选项 |


### timeout

#### 详细描述
WithTimeout 设置搜索超时时间（导出名为 omnisearch.timeout）

参数:

  - timeout: 超时时间



返回值:

  - 搜索可选项




Example:

``````````````yak
// 示意性示例，需要有效的 apikey 与网络
results = omnisearch.Search("yaklang", omnisearch.timeout(10))~
``````````````


#### 定义

`timeout(timeout time.Duration) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `time.Duration` | 超时时间 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` | 搜索可选项 |


### type

#### 详细描述
omnisearchType 指定本次搜索使用的搜索器类型（导出名为 omnisearch.type）

作为 omnisearch.Search 的可选项使用；配合 omnisearch.customSearcher 可将搜索路由到自定义搜索器



参数:

  - name: 搜索器类型名称



返回值:

  - 可传入 omnisearch.Search 的搜索选项




Example:

``````````````yak
results = omnisearch.Search(
    "yaklang",
    omnisearch.type("mylocal"),
    omnisearch.customSearcher("mylocal", (query, cfg) => { return [f"hit-for-${query}"], nil }),
)~
println(len(results))   // OUT: 1
assert results[0].Content == "hit-for-yaklang", "type option should route to the local searcher"
``````````````


#### 定义

`type(name string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 搜索器类型名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` | 可传入 omnisearch.Search 的搜索选项 |


