# omnisearch

|函数名|函数描述/介绍|
|:------|:--------|
| [omnisearch.Search](#search) |Search 使用聚合搜索引擎执行一次综合搜索（默认走 aibalance 聚合层） 依赖外部搜索服务与 API Key，需要网络环境 参数: - query: 搜索关键词 - options: 搜索可选项，如 omnisearch.apikey / omnisearch.type / omnise...|
| [omnisearch.apikey](#apikey) ||
| [omnisearch.backendType](#backendtype) ||
| [omnisearch.baseurl](#baseurl) |WithBaseURL 设置搜索服务的基础 URL（导出名为 omnisearch.baseurl） 参数: - baseURL: 搜索后端服务地址 返回值: - 搜索可选项|
| [omnisearch.customSearcher](#customsearcher) ||
| [omnisearch.page](#page) |WithPage 设置搜索结果页码（导出名为 omnisearch.page） 参数: - page: 页码，从 1 开始 返回值: - 搜索可选项|
| [omnisearch.pagesize](#pagesize) |WithPageSize 设置每页结果数量（导出名为 omnisearch.pagesize） 参数: - pageSize: 每页结果数量 返回值: - 搜索可选项|
| [omnisearch.proxy](#proxy) |WithProxy 设置搜索请求代理（导出名为 omnisearch.proxy） 参数: - proxy: 代理地址，如 http://127.0.0.1:7890 返回值: - 搜索可选项|
| [omnisearch.timeout](#timeout) |WithTimeout 设置搜索超时时间（导出名为 omnisearch.timeout） 参数: - timeout: 超时时间 返回值: - 搜索可选项|
| [omnisearch.type](#type) ||


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
暂无描述

#### 定义

`apikey(keys ...string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keys | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |  |


### backendType

#### 详细描述
暂无描述

#### 定义

`backendType(backendType string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| backendType | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |  |


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
暂无描述

#### 定义

`customSearcher(name string, handle CustomSearcherHandle) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |
| handle | `CustomSearcherHandle` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |  |


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
暂无描述

#### 定义

`type(name string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |  |


