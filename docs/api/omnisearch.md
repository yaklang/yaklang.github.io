# omnisearch {#library-omnisearch}

`omnisearch` 库提供统一的搜索接口，对接多种搜索后端（搜索引擎/网络空间测绘/自定义源），用一套 API 完成跨源检索，常用于情报收集与资产发现。

典型使用场景：

- 统一检索：`omnisearch.Search(query, opts...)` 执行搜索并返回结果集。
- 后端与参数：`omnisearch.backendType` / `omnisearch.type` 选择后端，`omnisearch.apikey` / `omnisearch.baseurl` / `omnisearch.proxy` 配置访问，`omnisearch.page` / `omnisearch.pagesize` / `omnisearch.timeout` 控制分页与超时，`omnisearch.customSearcher` 注册自定义搜索源。

与相邻库的关系：`omnisearch` 是情报检索聚合层，常作为 AI 工具（`aiagent`/`aim` 的搜索能力）或资产发现流程的输入端，与 `spacengine`（网络空间测绘）思路相通。

> 共 10 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [omnisearch.Search](#search) | `query string, options ...ostype.SearchOption` | `[]*ostype.OmniSearchResult, error` | 使用聚合搜索引擎执行一次综合搜索（默认走 aibalance 聚合层） |

## 可变参数函数详情

### Search {#search}

```go
Search(query string, options ...ostype.SearchOption) ([]*ostype.OmniSearchResult, error)
```

使用聚合搜索引擎执行一次综合搜索（默认走 aibalance 聚合层）

依赖外部搜索服务与 API Key，需要网络环境

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| query | `string` | 搜索关键词 |

**可选参数**

可作为可变参数 `options ...ostype.SearchOption` 传入选项；共 9 个可用选项，详见 [SearchOption 选项列表](#option-searchoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ostype.OmniSearchResult` | 搜索结果列表，每个结果包含内容与来源 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要有效的 apikey 与网络
results = omnisearch.Search("yaklang", omnisearch.apikey("your-api-key"))~

	for r in results {
	    println(r.Content)
	}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：SearchOption {#option-searchoption}

涉及到的函数有：[omnisearch.Search](#search)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `omnisearch.apikey` | `keys ...string` | `ostype.SearchOption` | omnisearchAPIKey 为本次搜索设置一个或多个 API Key |
| `omnisearch.backendType` | `backendType string` | `ostype.SearchOption` | omnisearchBackendType 指定聚合层后端使用的实际搜索器类型 |
| `omnisearch.baseurl` | `baseURL string` | `SearchOption` | WithBaseURL 设置搜索服务的基础 URL |
| `omnisearch.customSearcher` | `name string, handle CustomSearcherHandle` | `ostype.SearchOption` | omnisearchCustomSearcher 注册一个自定义搜索器，使 omnisearch.Search 调用本地处理函数 |
| `omnisearch.page` | `page int` | `SearchOption` | WithPage 设置搜索结果页码 |
| `omnisearch.pagesize` | `pageSize int` | `SearchOption` | WithPageSize 设置每页结果数量 |
| `omnisearch.proxy` | `proxy string` | `SearchOption` | WithProxy 设置搜索请求代理 |
| `omnisearch.timeout` | `timeout time.Duration` | `SearchOption` | WithTimeout 设置搜索超时时间 |
| `omnisearch.type` | `name string` | `ostype.SearchOption` | omnisearchType 指定本次搜索使用的搜索器类型 |

