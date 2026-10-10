# aimemory {#library-aimemory}

> 共 7 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aimemory.CurrentNamespace](#currentnamespace) | - | `string` |  |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aimemory.Amend](#amend) | `operator string, memoryID string, content string, tags []string, opts ...Option` | `*Item, error` | manages one exact memory ID in a namespace. Change deletes the old |
| [aimemory.Search](#search) | `query string, opts ...Option` | `[]*Item, error` | reads an existing memory set. It does not initialize triage, |

## 函数详情

### CurrentNamespace {#currentnamespace}

```go
CurrentNamespace() string
```

暂无描述

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` |  |

---

## 可变参数函数详情

### Amend {#amend}

```go
Amend(operator string, memoryID string, content string, tags []string, opts ...Option) (*Item, error)
```

manages one exact memory ID in a namespace. Change deletes the old
memory and its indexes, then writes a replacement with a new ID.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| operator | `string` |  |
| memoryID | `string` |  |
| content | `string` |  |
| tags | `[]string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 4 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Item` |  |
| r2 | `error` |  |

---

### Search {#search}

```go
Search(query string, opts ...Option) ([]*Item, error)
```

reads an existing memory set. It does not initialize triage,
create collections or update injection. Returned items expose raw readable Dump text.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| query | `string` |  |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 4 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*Item` |  |
| r2 | `error` |  |

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[aimemory.Amend](#amend)、[aimemory.Search](#search)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `aimemory.memoryLimit` | `n int` | `Option` |  |
| `aimemory.memoryNamespace` | `id string` | `Option` |  |
| `aimemory.memorySearchMode` | `mode string` | `Option` |  |
| `aimemory.memoryTokenLimit` | `n int` | `Option` |  |

