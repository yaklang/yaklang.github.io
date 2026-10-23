# aiknowledge {#library-aiknowledge}

> 共 49 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aiknowledge.ErrorResult](#errorresult) | `err error` | `map[string]any` | serializes a business failure for AI tools without raising a |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aiknowledge.Add](#add) | `name string, opts ...Option` | `map[string]any, error` | creates a new exact name. Metadata and index settings are optional; |
| [aiknowledge.AddEntry](#addentry) | `name string, title string, content string, opts ...Option` | `map[string]any, error` | adds and, by default, indexes one complete entry. |
| [aiknowledge.Build](#build) | `name string, content string, opts ...Option` | `map[string]any, error` | appends knowledge built from content to an existing exact base. |
| [aiknowledge.BuildFromFile](#buildfromfile) | `name string, path string, opts ...Option` | `map[string]any, error` | builds from an engine-local regular file and waits for writes. |
| [aiknowledge.Delete](#delete) | `name string, opts ...Option` | `map[string]any, error` | removes a named base and its associated entries, vectors and entities. |
| [aiknowledge.DeleteEntry](#deleteentry) | `name string, id string, opts ...Option` | `map[string]any, error` |  |
| [aiknowledge.Get](#get) | `name string, opts ...Option` | `map[string]any, error` | returns metadata, entry count and stored index configuration for one base. |
| [aiknowledge.List](#list) | `opts ...Option` | `map[string]any, error` | returns a bounded page of metadata and live entry counts, without reading content. |
| [aiknowledge.Query](#query) | `scope any, query string, tokenLimit int, opts ...Option` | `*QueryResult, error` | reads one exact name (string), multiple exact names ([]string), or nil |
| [aiknowledge.RebuildIndex](#rebuildindex) | `name string, opts ...Option` | `map[string]any, error` |  |
| [aiknowledge.Update](#update) | `name string, opts ...Option` | `map[string]any, error` | applies only supplied metadata options, including empty values/false. |
| [aiknowledge.UpdateEntry](#updateentry) | `name string, id string, title string, content string, opts ...Option` | `map[string]any, error` | replaces the exact entry in this base, preserving its stable ID. |

## 函数详情

### ErrorResult {#errorresult}

```go
ErrorResult(err error) map[string]any
```

serializes a business failure for AI tools without raising a
YakVM panic. A completed tool invocation can still report success=false here.
Native Go/Yak callers retain the usual result/error return values.

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| err | `error` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |

---

## 可变参数函数详情

### Add {#add}

```go
Add(name string, opts ...Option) (map[string]any, error)
```

creates a new exact name. Metadata and index settings are optional;
creating an existing name fails and does not contact the embedding provider.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### AddEntry {#addentry}

```go
AddEntry(name string, title string, content string, opts ...Option) (map[string]any, error)
```

adds and, by default, indexes one complete entry.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |
| title | `string` |  |
| content | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### Build {#build}

```go
Build(name string, content string, opts ...Option) (map[string]any, error)
```

appends knowledge built from content to an existing exact base.
buildMode(&#34;question_index&#34;) uses AI; buildMode(&#34;chunks&#34;) splits directly.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |
| content | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### BuildFromFile {#buildfromfile}

```go
BuildFromFile(name string, path string, opts ...Option) (map[string]any, error)
```

builds from an engine-local regular file and waits for writes.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |
| path | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### Delete {#delete}

```go
Delete(name string, opts ...Option) (map[string]any, error)
```

removes a named base and its associated entries, vectors and entities.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### DeleteEntry {#deleteentry}

```go
DeleteEntry(name string, id string, opts ...Option) (map[string]any, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |
| id | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### Get {#get}

```go
Get(name string, opts ...Option) (map[string]any, error)
```

returns metadata, entry count and stored index configuration for one base.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### List {#list}

```go
List(opts ...Option) (map[string]any, error)
```

returns a bounded page of metadata and live entry counts, without reading content.

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### Query {#query}

```go
Query(scope any, query string, tokenLimit int, opts ...Option) (*QueryResult, error)
```

reads one exact name (string), multiple exact names ([]string), or nil
with the explicit all(true) option. query and tokenLimit are positional; an
empty query is allowed for keyword browsing or mode=get. Missing scope fails.

Example (Yak):
aiknowledge.Query(&#34;docs&#34;, &#34;startup&#34;, 1024, aiknowledge.limit(3))~
aiknowledge.Query([&#34;docs&#34;,&#34;api&#34;], &#34;startup&#34;, 1024, aiknowledge.mode(&#34;semantic&#34;))~
aiknowledge.Query(nil, &#34;startup&#34;, 1024, aiknowledge.all(true))~

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| scope | `any` |  |
| query | `string` |  |
| tokenLimit | `int` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*QueryResult` |  |
| r2 | `error` |  |

---

### RebuildIndex {#rebuildindex}

```go
RebuildIndex(name string, opts ...Option) (map[string]any, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### Update {#update}

```go
Update(name string, opts ...Option) (map[string]any, error)
```

applies only supplied metadata options, including empty values/false.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

### UpdateEntry {#updateentry}

```go
UpdateEntry(name string, id string, title string, content string, opts ...Option) (map[string]any, error)
```

replaces the exact entry in this base, preserving its stable ID.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` |  |
| id | `string` |  |
| title | `string` |  |
| content | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 36 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` |  |
| r2 | `error` |  |

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[aiknowledge.Add](#add)、[aiknowledge.AddEntry](#addentry)、[aiknowledge.Build](#build)、[aiknowledge.BuildFromFile](#buildfromfile)、[aiknowledge.Delete](#delete)、[aiknowledge.DeleteEntry](#deleteentry)、[aiknowledge.Get](#get)、[aiknowledge.List](#list)、[aiknowledge.Query](#query)、[aiknowledge.RebuildIndex](#rebuildindex)、[aiknowledge.Update](#update)、[aiknowledge.UpdateEntry](#updateentry)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `aiknowledge.aiService` | `ai aicommon.AICallbackType` | `Option` |  |
| `aiknowledge.all` | `all bool` | `Option` |  |
| `aiknowledge.buildMode` | `mode string` | `Option` |  |
| `aiknowledge.chunkSize` | `size int` | `Option` |  |
| `aiknowledge.concurrency` | `concurrency int` | `Option` |  |
| `aiknowledge.contentOffset` | `offset int` | `Option` |  |
| `aiknowledge.context` | `ctx context.Context` | `Option` |  |
| `aiknowledge.db` | `db *gorm.DB` | `Option` |  |
| `aiknowledge.description` | `description string` | `Option` |  |
| `aiknowledge.dimension` | `dimension int` | `Option` |  |
| `aiknowledge.embeddingModel` | `model string` | `Option` |  |
| `aiknowledge.entryID` | `id string` | `Option` |  |
| `aiknowledge.entryKeywords` | `words ...string` | `Option` |  |
| `aiknowledge.entrySummary` | `summary string` | `Option` |  |
| `aiknowledge.entryType` | `kind string` | `Option` |  |
| `aiknowledge.extraPrompt` | `prompt string` | `Option` |  |
| `aiknowledge.hnswEFConstruct` | `value int` | `Option` |  |
| `aiknowledge.hnswEFSearch` | `value int` | `Option` |  |
| `aiknowledge.hnswM` | `m int` | `Option` |  |
| `aiknowledge.hnswML` | `ml float64` | `Option` |  |
| `aiknowledge.index` | `index bool` | `Option` |  |
| `aiknowledge.isDefault` | `value bool` | `Option` |  |
| `aiknowledge.keyword` | `keyword string` | `Option` |  |
| `aiknowledge.limit` | `limit int` | `Option` |  |
| `aiknowledge.minScore` | `score float64` | `Option` |  |
| `aiknowledge.mode` | `mode string` | `Option` |  |
| `aiknowledge.offset` | `offset int` | `Option` |  |
| `aiknowledge.omniMode` | `mode string` | `Option` |  |
| `aiknowledge.omniModel` | `model string` | `Option` |  |
| `aiknowledge.omniPayloadBytes` | `size int64` | `Option` |  |
| `aiknowledge.omniSegmentSeconds` | `seconds float64` | `Option` |  |
| `aiknowledge.onProgress` | `handler func(string)` | `Option` | WithProgress receives stage changes and a heartbeat every five seconds during |
| `aiknowledge.perEntryTokenLimit` | `limit int` | `Option` |  |
| `aiknowledge.potentialQuestions` | `questions ...string` | `Option` |  |
| `aiknowledge.tags` | `tags ...string` | `Option` |  |
| `aiknowledge.type` | `kind string` | `Option` |  |

