# jsonstream {#library-jsonstream}

`jsonstream` 库提供流式 JSON 解析能力，边读边触发回调，适合处理超大 JSON、不完整/边到达的 JSON（如 AI 流式输出），而无需一次性载入全部内容。

典型使用场景：

- 流式提取：`jsonstream.Extract(input, opts...)` 解析输入，`jsonstream.ExtractFromReader` 从 reader 流式解析。
- 回调订阅：`jsonstream.onObject` / `jsonstream.onArray` / `jsonstream.onKeyValue` 处理对象/数组/键值，`jsonstream.onField` / `jsonstream.onFieldGlob` / `jsonstream.onFieldRegexp` 按字段名/通配/正则定向处理，`jsonstream.onError` / `jsonstream.onFinished` 处理错误与完成。

与相邻库的关系：`jsonstream` 与 `json`（完整解析）互补，专攻流式与大体量场景，常用于解析 `ai` 的流式响应或大型导出文件。

> 共 15 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [jsonstream.Extract](#extract) | `input any, opts ...jsonextractor.CallbackOption` | `error` | 以流式方式解析一段 JSON 内容（字符串或字节），并通过回调选项处理解析结果。 |
| [jsonstream.ExtractFromReader](#extractfromreader) | `reader io.Reader, opts ...jsonextractor.CallbackOption` | `error` | 从数据流（io.Reader）中以流式方式解析 JSON 内容，适合处理大文件、网络流或边生产边消费的场景。 |

## 可变参数函数详情

### Extract {#extract}

```go
Extract(input any, opts ...jsonextractor.CallbackOption) error
```

以流式方式解析一段 JSON 内容（字符串或字节），并通过回调选项处理解析结果。

它边解析边触发回调，并能容错处理非标准 JSON。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| input | `any` | 待解析的 JSON 内容(字符串或字节切片) |

**可选参数**

可作为可变参数 `opts ...jsonextractor.CallbackOption` 传入选项；共 13 个可用选项，详见 [CallbackOption 选项列表](#option-callbackoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 解析过程中产生的错误 |

**示例**

``````````````yak
jsonstream.Extract(`{"name": "Alice", "age": 30}`,

	jsonstream.onObject(func(data) {
	    println("object:", data["name"])
	}),

)
``````````````

---

### ExtractFromReader {#extractfromreader}

```go
ExtractFromReader(reader io.Reader, opts ...jsonextractor.CallbackOption) error
```

从数据流（io.Reader）中以流式方式解析 JSON 内容，适合处理大文件、网络流或边生产边消费的场景。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| reader | `io.Reader` | 提供 JSON 内容的数据流 |

**可选参数**

可作为可变参数 `opts ...jsonextractor.CallbackOption` 传入选项；共 13 个可用选项，详见 [CallbackOption 选项列表](#option-callbackoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 解析过程中产生的错误 |

**示例**

``````````````yak
r, w = io.Pipe()

	go func() {
	    w.WriteString(`{"name": "Alice"}`)
	    w.Close()
	}()

jsonstream.ExtractFromReader(r, jsonstream.onObject(func(data) {

	println("object:", data["name"])

}))
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：CallbackOption {#option-callbackoption}

涉及到的函数有：[jsonstream.Extract](#extract)、[jsonstream.ExtractFromReader](#extractfromreader)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `jsonstream.onArray` | `callback func(data []any)` | `jsonextractor.CallbackOption` | 注册数组回调，当一个完整的 JSON 数组解析完成时触发，回调参数为该数组（list）。 |
| `jsonstream.onConditionalObject` | `keys []string, callback func(data map[string]any)` | `jsonextractor.CallbackOption` | 注册条件对象回调，只有当对象同时包含 keys 中列出的所有键时才触发。 |
| `jsonstream.onError` | `callback func(err error)` | `jsonextractor.CallbackOption` | 注册解析错误回调，当解析过程中发生错误时触发，回调参数为错误对象。 |
| `jsonstream.onField` | `fieldName string, handler func(key string, reader io.Reader, parents []string)` | `jsonextractor.CallbackOption` | 为指定字段注册字符级流式处理器，解析过程中字段值逐字符写入 reader，无需等待字段完整。 |
| `jsonstream.onFieldGlob` | `pattern string, handler func(key string, reader io.Reader, parents []string)` | `jsonextractor.CallbackOption` | 使用 Glob 通配符匹配字段名，为匹配的字段注册字符级流式处理器。 |
| `jsonstream.onFieldRegexp` | `pattern string, handler func(key string, reader io.Reader, parents []string)` | `jsonextractor.CallbackOption` | 使用正则表达式匹配字段名，为匹配的字段注册字符级流式处理器。 |
| `jsonstream.onFields` | `fieldNames []string, handler func(key string, reader io.Reader, parents []string)` | `jsonextractor.CallbackOption` | 为多个字段注册统一的字符级流式处理器，任意一个字段名匹配即触发（包含匹配，大小写不敏感）。 |
| `jsonstream.onFinished` | `callback func()` | `jsonextractor.CallbackOption` | 注册解析完成回调，当数据流被完整解析且没有错误时触发。 |
| `jsonstream.onKeyValue` | `callback func(key string, data any)` | `jsonextractor.CallbackOption` | 注册键值对回调，解析对象时每遇到一个键值对就触发，回调参数为键名与对应值。 |
| `jsonstream.onKeyValueEx` | `callback func(key, data any, parents []string)` | `jsonextractor.CallbackOption` | 注册带父路径的键值对回调，回调参数为键、值以及该键所在的嵌套父路径（list）。 |
| `jsonstream.onObject` | `callback func(data map[string]any)` | `jsonextractor.CallbackOption` | 注册对象回调，当一个完整的 JSON 对象解析完成时触发，回调参数为该对象（map）。 |
| `jsonstream.onRawKeyValue` | `callback func(key, data any)` | `jsonextractor.CallbackOption` | 注册原始键值对回调，回调参数为未经处理的原始键与原始值。 |
| `jsonstream.onRootMap` | `callback func(data map[string]any)` | `jsonextractor.CallbackOption` | 注册根对象回调，仅当顶层 JSON 对象解析完成时触发。 |

