# cwe {#library-cwe}

`cwe` 库提供 CWE（通用弱点枚举）数据的查询与维护能力，用于把漏洞归类到标准弱点类型，提升报告的规范性与可读性。

典型使用场景：

- 查询：`cwe.Get` 按编号取单条，`cwe.ListAll` 流式遍历全部弱点。
- 维护：`cwe.Update` 更新本地数据（可配 `cwe.url` / `cwe.proxy`），`cwe.Import` / `cwe.Export` 导入导出，`cwe.AICompleteFields` 用 AI 补全描述。

与相邻库的关系：`cwe` 与 `cve`（具体漏洞）配套，前者是"弱点类型分类"，后者是"具体漏洞实例"，常一起用于漏洞报告（`report`/`risk`）中的标准化标注。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [cwe.Export](#export) | `filename string` | `error` | ExportCWE 将所有 CWE 条目导出为 JSONL 文件（导出名为 cwe.Export） |
| [cwe.Get](#get) | `i any` | `*cveresources.CWE` | getCWE 按 CWE 编号查询单条 CWE 记录（导出名为 cwe.Get，可省略 CWE- 前缀） |
| [cwe.Import](#import) | `filename string` | `error` | ImportCWE 从 JSONL 文件导入 CWE 条目（导出名为 cwe.Import） |
| [cwe.ListAll](#listall) | - | `chan *cveresources.CWE` | ListAllCWE 流式返回数据库中所有 CWE 条目（导出名为 cwe.ListAll） |
| [cwe.aiConcurrent](#aiconcurrent) | `n int` | `CWEAICompleteOption` | WithAIConcurrent 设置 AI 补全 CWE 字段时的并发数（导出名为 cwe.aiConcurrent） |
| [cwe.testLimit](#testlimit) | `n int` | `CWEAICompleteOption` | WithTestLimit 限制 AI 补全处理的 CWE 数量，常用于测试（导出名为 cwe.testLimit） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [cwe.AICompleteFields](#aicompletefields) | `opts ...any` | `error` | 使用 AI 补全 CWE 缺失字段（如中文翻译，导出名为 cwe.AICompleteFields） |
| [cwe.Update](#update) | `opts ...CWEUpdateOption` | `error` | 下载并更新本地 CWE 数据库（导出名为 cwe.Update） |

## 函数详情

### Export {#export}

```go
Export(filename string) error
```

ExportCWE 将所有 CWE 条目导出为 JSONL 文件（导出名为 cwe.Export）

每行是一个表示 CWE 条目的 JSON 对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 导出目标文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地 CWE 数据库
err = cwe.Export("/tmp/cwe.jsonl")
if err != nil { die(err) }
``````````````

---

### Get {#get}

```go
Get(i any) *cveresources.CWE
```

getCWE 按 CWE 编号查询单条 CWE 记录（导出名为 cwe.Get，可省略 CWE- 前缀）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | CWE 编号，如 &#34;CWE-79&#34; 或 &#34;79&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*cveresources.CWE` | 对应的 CWE 记录，未找到或出错时为 nil |

**示例**

``````````````yak
// 示意性示例，需要本地 CWE 数据库
c = cwe.Get("CWE-79")
if c != nil { println(c.NameZh) }
``````````````

---

### Import {#import}

```go
Import(filename string) error
```

ImportCWE 从 JSONL 文件导入 CWE 条目（导出名为 cwe.Import）

每行应为一个表示 CWE 条目的 JSON 对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 导入源文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地 CWE 数据库
err = cwe.Import("/tmp/cwe.jsonl")
if err != nil { die(err) }
``````````````

---

### ListAll {#listall}

```go
ListAll() chan *cveresources.CWE
```

ListAllCWE 流式返回数据库中所有 CWE 条目（导出名为 cwe.ListAll）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *cveresources.CWE` | CWE 条目的流式通道 |

**示例**

``````````````yak
// 示意性示例，需要本地 CWE 数据库

	for c in cwe.ListAll() {
	    println(c.CWEString())
	}
``````````````

---

### aiConcurrent {#aiconcurrent}

```go
aiConcurrent(n int) CWEAICompleteOption
```

WithAIConcurrent 设置 AI 补全 CWE 字段时的并发数（导出名为 cwe.aiConcurrent）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 并发工作协程数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `CWEAICompleteOption` | CWE AI 补全可选项 |

**示例**

``````````````yak
// 示意性示例，需要 AI 配置与 CWE 数据库
err = cwe.AICompleteFields(cwe.aiConcurrent(5))
``````````````

---

### testLimit {#testlimit}

```go
testLimit(n int) CWEAICompleteOption
```

WithTestLimit 限制 AI 补全处理的 CWE 数量，常用于测试（导出名为 cwe.testLimit）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 最大处理数量，0 表示不限制 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `CWEAICompleteOption` | CWE AI 补全可选项 |

**示例**

``````````````yak
// 示意性示例，需要 AI 配置与 CWE 数据库
err = cwe.AICompleteFields(cwe.testLimit(10))
``````````````

---

## 可变参数函数详情

### AICompleteFields {#aicompletefields}

```go
AICompleteFields(opts ...any) error
```

使用 AI 补全 CWE 缺失字段（如中文翻译，导出名为 cwe.AICompleteFields）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可选项，如 cwe.aiConcurrent、cwe.testLimit 或 ai.type 等 AI 配置 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要 AI 配置与 CWE 数据库
err = cwe.AICompleteFields(cwe.aiConcurrent(10), cwe.testLimit(5))
if err != nil { die(err) }
``````````````

---

### Update {#update}

```go
Update(opts ...CWEUpdateOption) error
```

下载并更新本地 CWE 数据库（导出名为 cwe.Update）

**可选参数**

可作为可变参数 `opts ...CWEUpdateOption` 传入选项；共 2 个可用选项，详见 [CWEUpdateOption 选项列表](#option-cweupdateoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要网络下载 CWE 数据
err = cwe.Update()
if err != nil { die(err) }
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：CWEUpdateOption {#option-cweupdateoption}

涉及到的函数有：[cwe.Update](#update)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `cwe.proxy` | `proxy string` | `CWEUpdateOption` | WithCWEProxy 设置下载 CWE 数据时使用的代理 |
| `cwe.url` | `url string` | `CWEUpdateOption` | WithCWEURL 设置 CWE 数据的下载地址 |

