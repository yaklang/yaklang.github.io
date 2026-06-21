# xml {#library-xml}

`xml` 库提供 XML 的序列化、反序列化、转义与美化能力，用于处理 XML 格式的配置、接口数据与协议报文。

典型使用场景：

- 解析与生成：`xml.loads(v)` 把 XML 解析为 map，`xml.dumps(v, opts...)` 把数据序列化为 XML（配 `xml.escape` 控制转义）。
- 处理：`xml.Escape` 转义特殊字符，`xml.Prettify` 美化排版 XML。

与相邻库的关系：`xml` 是数据处理库，与 `json` / `yaml`（其他结构化格式）并列，常用于 XML 接口测试（如 XXE 场景）与配置解析。

> 共 5 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [xml.Escape](#escape) | `s []byte` | `string` | 对输入进行 XML 转义，把 &lt; &gt; &amp; 等特殊字符替换为实体 |
| [xml.Prettify](#prettify) | `b []byte` | `string` | 将 XML 内容重新格式化为带缩进的可读形式 |
| [xml.loads](#loads) | `v any` | `map[string]any` | 将 XML 文本解析为嵌套的 map 结构 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [xml.dumps](#dumps) | `v any, opts ...XmlDumpOptions` | `[]byte` | 将一个对象(通常是 map)序列化为 XML 格式的字节切片 |

## 函数详情

### Escape {#escape}

```go
Escape(s []byte) string
```

对输入进行 XML 转义，把 &lt; &gt; &amp; 等特殊字符替换为实体

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | 待转义的内容(字符串或字节切片) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 转义后的字符串 |

**示例**

``````````````yak
// VARS: 转义尖括号
result = xml.Escape("<a>")
// STDOUT: 打印转义结果
println(result)   // OUT: &lt;a&gt;
// assert: 锁定结论
assert result == "&lt;a&gt;", "Escape should encode angle brackets"
``````````````

---

### Prettify {#prettify}

```go
Prettify(b []byte) string
```

将 XML 内容重新格式化为带缩进的可读形式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `[]byte` | 待格式化的 XML 内容(字符串或字节切片) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 带缩进换行的格式化 XML 字符串 |

**示例**

``````````````yak
// VARS: 美化压缩的 XML
result = xml.Prettify("<root><name>yak</name></root>")
// assert: 格式化后仍包含原有元素(多行输出用 Contains 判断)
assert str.Contains(result, "<name>yak</name>"), "prettify should keep the element"
``````````````

---

### loads {#loads}

```go
loads(v any) map[string]any
```

将 XML 文本解析为嵌套的 map 结构

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| v | `any` | 待解析的 XML 内容(字符串或字节切片) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` | 解析得到的 map，键为元素名，值为元素内容或子结构 |

**示例**

``````````````yak
// VARS: 解析单个元素
m = xml.loads("<name>yak</name>")
// STDOUT: 打印解析出的元素文本
println(m["name"])   // OUT: yak
// assert: 锁定结论
assert m["name"] == "yak", "loads should parse the element text"
``````````````

---

## 可变参数函数详情

### dumps {#dumps}

```go
dumps(v any, opts ...XmlDumpOptions) []byte
```

将一个对象(通常是 map)序列化为 XML 格式的字节切片

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| v | `any` | 待序列化的对象，可为 map 或有序映射 |

**可选参数**

可作为可变参数 `opts ...XmlDumpOptions` 传入选项；共 1 个可用选项，详见 [XmlDumpOptions 选项列表](#option-xmldumpoptions)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 序列化后的 XML 字节切片 |

**示例**

``````````````yak
// VARS: 把 map 序列化为 XML
out = xml.dumps({"name": "yak"})
text = string(out)
// assert: 输出包含对应元素
assert str.Contains(text, "<name>yak</name>"), "dumps should encode the map as xml element"
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：XmlDumpOptions {#option-xmldumpoptions}

涉及到的函数有：[xml.dumps](#dumps)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `xml.escape` | `escape bool` | `XmlDumpOptions` | 生成一个 dumps 配置项，控制序列化时是否对 HTML 特殊字符进行转义 |

