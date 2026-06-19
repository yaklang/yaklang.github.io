# xml

|函数名|函数描述/介绍|
|:------|:--------|
| [xml.Escape](#escape) |Escape 对输入进行 XML 转义，把 &lt; &gt; &amp; 等特殊字符替换为实体 参数: - s: 待转义的内容(字符串或字节切片) 返回值: - 转义后的字符串|
| [xml.Prettify](#prettify) |Prettify 将 XML 内容重新格式化为带缩进的可读形式 参数: - b: 待格式化的 XML 内容(字符串或字节切片) 返回值: - 带缩进换行的格式化 XML 字符串|
| [xml.dumps](#dumps) |dumps 将一个对象(通常是 map)序列化为 XML 格式的字节切片 参数: - v: 待序列化的对象，可为 map 或有序映射 - opts: 可选配置项，如 xml.escape(false) 关闭 HTML 转义 返回值: - 序列化后的 XML 字节切片|
| [xml.escape](#escape) |escape 生成一个 dumps 配置项，控制序列化时是否对 HTML 特殊字符进行转义 参数: - escape: true 表示转义 HTML 特殊字符，false 表示保持原样 返回值: - 可传给 xml.dumps 的配置项|
| [xml.loads](#loads) |loads 将 XML 文本解析为嵌套的 map 结构 参数: - v: 待解析的 XML 内容(字符串或字节切片) 返回值: - 解析得到的 map，键为元素名，值为元素内容或子结构|


## 函数定义
### Escape

#### 详细描述
Escape 对输入进行 XML 转义，把 &lt; &gt; &amp; 等特殊字符替换为实体

参数:

  - s: 待转义的内容(字符串或字节切片)



返回值:

  - 转义后的字符串




Example:

``````````````yak
// VARS: 转义尖括号
result = xml.Escape("<a>")
// STDOUT: 打印转义结果
println(result)   // OUT: &lt;a&gt;
// assert: 锁定结论
assert result == "&lt;a&gt;", "Escape should encode angle brackets"
``````````````


#### 定义

`Escape(s []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | 待转义的内容(字符串或字节切片) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转义后的字符串 |


### Prettify

#### 详细描述
Prettify 将 XML 内容重新格式化为带缩进的可读形式

参数:

  - b: 待格式化的 XML 内容(字符串或字节切片)



返回值:

  - 带缩进换行的格式化 XML 字符串




Example:

``````````````yak
// VARS: 美化压缩的 XML
result = xml.Prettify("<root><name>yak</name></root>")
// assert: 格式化后仍包含原有元素(多行输出用 Contains 判断)
assert str.Contains(result, "<name>yak</name>"), "prettify should keep the element"
``````````````


#### 定义

`Prettify(b []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `[]byte` | 待格式化的 XML 内容(字符串或字节切片) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 带缩进换行的格式化 XML 字符串 |


### dumps

#### 详细描述
dumps 将一个对象(通常是 map)序列化为 XML 格式的字节切片

参数:

  - v: 待序列化的对象，可为 map 或有序映射

  - opts: 可选配置项，如 xml.escape(false) 关闭 HTML 转义



返回值:

  - 序列化后的 XML 字节切片




Example:

``````````````yak
// VARS: 把 map 序列化为 XML
out = xml.dumps({"name": "yak"})
text = string(out)
// assert: 输出包含对应元素
assert str.Contains(text, "<name>yak</name>"), "dumps should encode the map as xml element"
``````````````


#### 定义

`dumps(v any, opts ...XmlDumpOptions) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` | 待序列化的对象，可为 map 或有序映射 |
| opts | `...XmlDumpOptions` | 可选配置项，如 xml.escape(false) 关闭 HTML 转义 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 序列化后的 XML 字节切片 |


### escape

#### 详细描述
escape 生成一个 dumps 配置项，控制序列化时是否对 HTML 特殊字符进行转义

参数:

  - escape: true 表示转义 HTML 特殊字符，false 表示保持原样



返回值:

  - 可传给 xml.dumps 的配置项




Example:

``````````````yak
// 关闭 HTML 转义后序列化(结果为 XML 文本，作示意)
data = xml.dumps({"a": "<b>"}, xml.escape(false))
println(string(data))
``````````````


#### 定义

`escape(escape bool) XmlDumpOptions`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| escape | `bool` | true 表示转义 HTML 特殊字符，false 表示保持原样 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `XmlDumpOptions` | 可传给 xml.dumps 的配置项 |


### loads

#### 详细描述
loads 将 XML 文本解析为嵌套的 map 结构

参数:

  - v: 待解析的 XML 内容(字符串或字节切片)



返回值:

  - 解析得到的 map，键为元素名，值为元素内容或子结构




Example:

``````````````yak
// VARS: 解析单个元素
m = xml.loads("<name>yak</name>")
// STDOUT: 打印解析出的元素文本
println(m["name"])   // OUT: yak
// assert: 锁定结论
assert m["name"] == "yak", "loads should parse the element text"
``````````````


#### 定义

`loads(v any) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` | 待解析的 XML 内容(字符串或字节切片) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` | 解析得到的 map，键为元素名，值为元素内容或子结构 |


