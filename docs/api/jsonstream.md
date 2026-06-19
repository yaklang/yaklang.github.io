# jsonstream

|函数名|函数描述/介绍|
|:------|:--------|
| [jsonstream.Extract](#extract) |Extract 以流式方式解析一段 JSON 内容（字符串或字节），并通过回调选项处理解析结果。 它边解析边触发回调，并能容错处理非标准 JSON。 参数: - input: 待解析的 JSON 内容(字符串或字节切片) - opts: 一个或多个回调选项，如 jsonstream.onObject...|
| [jsonstream.ExtractFromReader](#extractfromreader) |ExtractFromReader 从数据流（io.Reader）中以流式方式解析 JSON 内容，适合处理大文件、网络流或边生产边消费的场景。 参数: - reader: 提供 JSON 内容的数据流 - opts: 一个或多个回调选项，如 jsonstream.onObject(...) 返回值...|
| [jsonstream.onArray](#onarray) |onArray 注册数组回调，当一个完整的 JSON 数组解析完成时触发，回调参数为该数组（list）。 参数: - callback: 数组解析完成时调用的回调，参数为解析出的数组 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onConditionalObject](#onconditionalobject) |onConditionalObject 注册条件对象回调，只有当对象同时包含 keys 中列出的所有键时才触发。 参数: - keys: 触发回调所需同时包含的键名列表 - callback: 满足条件时调用的回调，参数为该对象 map 返回值: - 可传给 Extract/ExtractFromR...|
| [jsonstream.onError](#onerror) |onError 注册解析错误回调，当解析过程中发生错误时触发，回调参数为错误对象。 参数: - callback: 发生错误时调用的回调，参数为错误对象 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onField](#onfield) |onField 为指定字段注册字符级流式处理器，解析过程中字段值逐字符写入 reader，无需等待字段完整。 回调参数为字段名、数据流 reader（可用 io.ReadAll 消费）以及父路径。该回调在独立 goroutine 中执行。 参数: - fieldName: 要处理的字段名 - han...|
| [jsonstream.onFieldGlob](#onfieldglob) |onFieldGlob 使用 Glob 通配符匹配字段名，为匹配的字段注册字符级流式处理器。 参数: - pattern: 用于匹配字段名的 Glob 通配符 - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 返回值: - 可传给 Extract/Extract...|
| [jsonstream.onFieldRegexp](#onfieldregexp) |onFieldRegexp 使用正则表达式匹配字段名，为匹配的字段注册字符级流式处理器。 参数: - pattern: 用于匹配字段名的正则表达式 - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 返回值: - 可传给 Extract/ExtractFromRe...|
| [jsonstream.onFields](#onfields) |onFields 为多个字段注册统一的字符级流式处理器，任意一个字段名匹配即触发（包含匹配，大小写不敏感）。 参数: - fieldNames: 要处理的字段名列表 - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 返回值: - 可传给 Extract/Extr...|
| [jsonstream.onFinished](#onfinished) |onFinished 注册解析完成回调，当数据流被完整解析且没有错误时触发。 参数: - callback: 解析完成时调用的无参回调 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onKeyValue](#onkeyvalue) |onKeyValue 注册键值对回调，解析对象时每遇到一个键值对就触发，回调参数为键名与对应值。 参数: - callback: 每个键值对触发的回调，参数为键名与对应的值 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onKeyValueEx](#onkeyvalueex) |onKeyValueEx 注册带父路径的键值对回调，回调参数为键、值以及该键所在的嵌套父路径（list）。 参数: - callback: 每个键值对触发的回调，参数为键、值与父路径列表 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onObject](#onobject) |onObject 注册对象回调，当一个完整的 JSON 对象解析完成时触发，回调参数为该对象（map）。 参数: - callback: 对象解析完成时调用的回调，参数为解析出的对象 map 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onRawKeyValue](#onrawkeyvalue) |onRawKeyValue 注册原始键值对回调，回调参数为未经处理的原始键与原始值。 参数: - callback: 每个键值对触发的回调，参数为原始键与原始值 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|
| [jsonstream.onRootMap](#onrootmap) |onRootMap 注册根对象回调，仅当顶层 JSON 对象解析完成时触发。 参数: - callback: 顶层对象解析完成时调用的回调，参数为根对象 map 返回值: - 可传给 Extract/ExtractFromReader 的回调选项|


## 函数定义
### Extract

#### 详细描述
Extract 以流式方式解析一段 JSON 内容（字符串或字节），并通过回调选项处理解析结果。

它边解析边触发回调，并能容错处理非标准 JSON。

参数:

  - input: 待解析的 JSON 内容(字符串或字节切片)

  - opts: 一个或多个回调选项，如 jsonstream.onObject(...)



返回值:

  - 解析过程中产生的错误




Example:

``````````````yak
jsonstream.Extract(`{"name": "Alice", "age": 30}`,

	jsonstream.onObject(func(data) {
	    println("object:", data["name"])
	}),

)
``````````````


#### 定义

`Extract(input any, opts ...jsonextractor.CallbackOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `any` | 待解析的 JSON 内容(字符串或字节切片) |
| opts | `...jsonextractor.CallbackOption` | 一个或多个回调选项，如 jsonstream.onObject(...) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 解析过程中产生的错误 |


### ExtractFromReader

#### 详细描述
ExtractFromReader 从数据流（io.Reader）中以流式方式解析 JSON 内容，适合处理大文件、网络流或边生产边消费的场景。

参数:

  - reader: 提供 JSON 内容的数据流

  - opts: 一个或多个回调选项，如 jsonstream.onObject(...)



返回值:

  - 解析过程中产生的错误




Example:

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


#### 定义

`ExtractFromReader(reader io.Reader, opts ...jsonextractor.CallbackOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reader | `io.Reader` | 提供 JSON 内容的数据流 |
| opts | `...jsonextractor.CallbackOption` | 一个或多个回调选项，如 jsonstream.onObject(...) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 解析过程中产生的错误 |


### onArray

#### 详细描述
onArray 注册数组回调，当一个完整的 JSON 数组解析完成时触发，回调参数为该数组（list）。

参数:

  - callback: 数组解析完成时调用的回调，参数为解析出的数组



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`[1, 2, 3]`, jsonstream.onArray(func(data) {

	println(len(data))

}))
``````````````


#### 定义

`onArray(callback func(data []any)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(data []any)` | 数组解析完成时调用的回调，参数为解析出的数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onConditionalObject

#### 详细描述
onConditionalObject 注册条件对象回调，只有当对象同时包含 keys 中列出的所有键时才触发。

参数:

  - keys: 触发回调所需同时包含的键名列表

  - callback: 满足条件时调用的回调，参数为该对象 map



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"name": "Alice", "email": "a@b.com"}`,
    jsonstream.onConditionalObject(["name", "email"], func(data) {
        println("user:", data["name"], data["email"])
    }),
)
``````````````


#### 定义

`onConditionalObject(keys []string, callback func(data map[string]any)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keys | `[]string` | 触发回调所需同时包含的键名列表 |
| callback | `func(data map[string]any)` | 满足条件时调用的回调，参数为该对象 map |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onError

#### 详细描述
onError 注册解析错误回调，当解析过程中发生错误时触发，回调参数为错误对象。

参数:

  - callback: 发生错误时调用的回调，参数为错误对象



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.ExtractFromReader(reader, jsonstream.onError(func(err) {

	log.Errorf("stream error: %v", err)

}))
``````````````


#### 定义

`onError(callback func(err error)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(err error)` | 发生错误时调用的回调，参数为错误对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onField

#### 详细描述
onField 为指定字段注册字符级流式处理器，解析过程中字段值逐字符写入 reader，无需等待字段完整。

回调参数为字段名、数据流 reader（可用 io.ReadAll 消费）以及父路径。该回调在独立 goroutine 中执行。

参数:

  - fieldName: 要处理的字段名

  - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"content": "very long text..."}`,
    jsonstream.onField("content", func(key, reader, parents) {
        data = io.ReadAll(reader)~
        println(key, "size:", len(data))
    }),
)
``````````````


#### 定义

`onField(fieldName string, handler func(key string, reader io.Reader, parents []string)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fieldName | `string` | 要处理的字段名 |
| handler | `func(key string, reader io.Reader, parents []string)` | 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onFieldGlob

#### 详细描述
onFieldGlob 使用 Glob 通配符匹配字段名，为匹配的字段注册字符级流式处理器。

参数:

  - pattern: 用于匹配字段名的 Glob 通配符

  - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"config_host": "localhost", "config_port": 8080}`,
    jsonstream.onFieldGlob("config_*", func(key, reader, parents) {
        data = io.ReadAll(reader)~
        println(key, string(data))
    }),
)
``````````````


#### 定义

`onFieldGlob(pattern string, handler func(key string, reader io.Reader, parents []string)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于匹配字段名的 Glob 通配符 |
| handler | `func(key string, reader io.Reader, parents []string)` | 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onFieldRegexp

#### 详细描述
onFieldRegexp 使用正则表达式匹配字段名，为匹配的字段注册字符级流式处理器。

参数:

  - pattern: 用于匹配字段名的正则表达式

  - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"user_name": "alice", "user_age": 25}`,
    jsonstream.onFieldRegexp("^user_.*", func(key, reader, parents) {
        data = io.ReadAll(reader)~
        println(key, string(data))
    }),
)
``````````````


#### 定义

`onFieldRegexp(pattern string, handler func(key string, reader io.Reader, parents []string)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于匹配字段名的正则表达式 |
| handler | `func(key string, reader io.Reader, parents []string)` | 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onFields

#### 详细描述
onFields 为多个字段注册统一的字符级流式处理器，任意一个字段名匹配即触发（包含匹配，大小写不敏感）。

参数:

  - fieldNames: 要处理的字段名列表

  - handler: 字段流处理器，参数为键名、字段值的数据流 reader 与父路径



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"data1": "aaa", "data2": "bbb"}`,
    jsonstream.onFields(["data1", "data2"], func(key, reader, parents) {
        data = io.ReadAll(reader)~
        println(key, string(data))
    }),
)
``````````````


#### 定义

`onFields(fieldNames []string, handler func(key string, reader io.Reader, parents []string)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fieldNames | `[]string` | 要处理的字段名列表 |
| handler | `func(key string, reader io.Reader, parents []string)` | 字段流处理器，参数为键名、字段值的数据流 reader 与父路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onFinished

#### 详细描述
onFinished 注册解析完成回调，当数据流被完整解析且没有错误时触发。

参数:

  - callback: 解析完成时调用的无参回调



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"a": 1}`, jsonstream.onFinished(func() {

	println("stream finished")

}))
``````````````


#### 定义

`onFinished(callback func()) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func()` | 解析完成时调用的无参回调 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onKeyValue

#### 详细描述
onKeyValue 注册键值对回调，解析对象时每遇到一个键值对就触发，回调参数为键名与对应值。

参数:

  - callback: 每个键值对触发的回调，参数为键名与对应的值



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"name": "Alice", "age": 30}`, jsonstream.onKeyValue(func(key, value) {

	println(key, "=", value)

}))
``````````````


#### 定义

`onKeyValue(callback func(key string, data any)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(key string, data any)` | 每个键值对触发的回调，参数为键名与对应的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onKeyValueEx

#### 详细描述
onKeyValueEx 注册带父路径的键值对回调，回调参数为键、值以及该键所在的嵌套父路径（list）。

参数:

  - callback: 每个键值对触发的回调，参数为键、值与父路径列表



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"user": {"name": "Alice"}}`, jsonstream.onKeyValueEx(func(key, value, parents) {
    println(key, "=", value, "parents:", parents)
}))
``````````````


#### 定义

`onKeyValueEx(callback func(key, data any, parents []string)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(key, data any, parents []string)` | 每个键值对触发的回调，参数为键、值与父路径列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onObject

#### 详细描述
onObject 注册对象回调，当一个完整的 JSON 对象解析完成时触发，回调参数为该对象（map）。

参数:

  - callback: 对象解析完成时调用的回调，参数为解析出的对象 map



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"name": "Alice", "age": 30}`, jsonstream.onObject(func(data) {

	println(data["name"])

}))
``````````````


#### 定义

`onObject(callback func(data map[string]any)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(data map[string]any)` | 对象解析完成时调用的回调，参数为解析出的对象 map |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onRawKeyValue

#### 详细描述
onRawKeyValue 注册原始键值对回调，回调参数为未经处理的原始键与原始值。

参数:

  - callback: 每个键值对触发的回调，参数为原始键与原始值



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"name": "Alice"}`, jsonstream.onRawKeyValue(func(key, value) {

	println(key, value)

}))
``````````````


#### 定义

`onRawKeyValue(callback func(key, data any)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(key, data any)` | 每个键值对触发的回调，参数为原始键与原始值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


### onRootMap

#### 详细描述
onRootMap 注册根对象回调，仅当顶层 JSON 对象解析完成时触发。

参数:

  - callback: 顶层对象解析完成时调用的回调，参数为根对象 map



返回值:

  - 可传给 Extract/ExtractFromReader 的回调选项




Example:

``````````````yak
jsonstream.Extract(`{"name": "Alice"}`, jsonstream.onRootMap(func(data) {

	println(data["name"])

}))
``````````````


#### 定义

`onRootMap(callback func(data map[string]any)) jsonextractor.CallbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(data map[string]any)` | 顶层对象解析完成时调用的回调，参数为根对象 map |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsonextractor.CallbackOption` | 可传给 Extract/ExtractFromReader 的回调选项 |


