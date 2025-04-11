# omnisearch

|函数名|函数描述/介绍|
|:------|:--------|
| [omnisearch.Search](#search) ||
| [omnisearch.apikey](#apikey) ||
| [omnisearch.baseurl](#baseurl) ||
| [omnisearch.customSearcher](#customsearcher) ||
| [omnisearch.page](#page) ||
| [omnisearch.pagesize](#pagesize) ||
| [omnisearch.proxy](#proxy) ||
| [omnisearch.timeout](#timeout) ||
| [omnisearch.type](#type) ||


## 函数定义
### Search

#### 详细描述


#### 定义

`Search(query string, options ...ostype.SearchOption) ([]*ostype.OmniSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |
| options | `...ostype.SearchOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ostype.OmniSearchResult` |   |
| r2 | `error` |   |


### apikey

#### 详细描述


#### 定义

`apikey(keys ...string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keys | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |   |


### baseurl

#### 详细描述


#### 定义

`baseurl(baseURL string) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseURL | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` |   |


### customSearcher

#### 详细描述


#### 定义

`customSearcher(name string, handle CustomSearcherHandle) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| handle | `CustomSearcherHandle` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |   |


### page

#### 详细描述


#### 定义

`page(page int) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| page | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` |   |


### pagesize

#### 详细描述


#### 定义

`pagesize(pageSize int) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pageSize | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxy string) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` |   |


### timeout

#### 详细描述


#### 定义

`timeout(timeout time.Duration) SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SearchOption` |   |


### type

#### 详细描述


#### 定义

`type(name string) ostype.SearchOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ostype.SearchOption` |   |


