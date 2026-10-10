# aihistory {#library-aihistory}

> 共 9 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aihistory.CurrentSession](#currentsession) | - | `string` |  |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aihistory.Query](#query) | `query string, opts ...Option` | `[]*Item, error` | searches all original item rows in one AI session. Current live items |

## 函数详情

### CurrentSession {#currentsession}

```go
CurrentSession() string
```

暂无描述

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` |  |

---

## 可变参数函数详情

### Query {#query}

```go
Query(query string, opts ...Option) ([]*Item, error)
```

searches all original item rows in one AI session. Current live items
are excluded before matching/pagination, using stable history identities.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| query | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*Item` |  |
| r2 | `error` |  |

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[aihistory.Query](#query)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `aihistory.aiSession` | `session string` | `Option` |  |
| `aihistory.contentLimit` | `limit int` | `Option` |  |
| `aihistory.contentOffset` | `offset int` | `Option` |  |
| `aihistory.itemID` | `id int64` | `Option` |  |
| `aihistory.limit` | `limit int` | `Option` |  |
| `aihistory.offset` | `offset int` | `Option` |  |
| `aihistory.searchMode` | `mode string` | `Option` |  |

