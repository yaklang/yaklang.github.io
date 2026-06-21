# yaml {#library-yaml}

`yaml` 库提供 YAML 的序列化与反序列化能力，用于读写 YAML 格式的配置、PoC 模板与数据。

典型使用场景：

- 解析：`yaml.Unmarshal(b)` 把 YAML 解析为对象，`yaml.UnmarshalStrict` 严格模式解析（未知字段报错）。
- 生成：`yaml.Marshal(in)` 把对象序列化为 YAML。

与相邻库的关系：`yaml` 是数据处理库，与 `json` / `xml` 并列，常用于解析 Nuclei/httptpl 的 YAML PoC 模板与各类配置文件。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [yaml.Marshal](#marshal) | `in any` | `[]byte, error` | 将一个对象序列化为 YAML 格式的字节切片 |
| [yaml.Unmarshal](#unmarshal) | `b []byte` | `any, error` | 将 YAML 格式的字节切片反序列化为对应的对象 |
| [yaml.UnmarshalStrict](#unmarshalstrict) | `b []byte` | `any, error` | 严格模式反序列化 YAML，遇到未知字段或重复键会报错 |

## 函数详情

### Marshal {#marshal}

```go
Marshal(in any) ([]byte, error)
```

将一个对象序列化为 YAML 格式的字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 待序列化的对象，可以是 map、切片或结构体 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 序列化后的 YAML 字节切片 |
| r2 | `error` | 序列化失败时返回的错误 |

**示例**

``````````````yak
// VARS: 把 map 序列化为 YAML
out = yaml.Marshal({"name": "yak"})~
text = string(out)
// assert: 输出包含对应键值(YAML 多行输出顺序可能变化，用 Contains 判断)
assert str.Contains(text, "name: yak"), "marshal output should contain the key-value"
``````````````

---

### Unmarshal {#unmarshal}

```go
Unmarshal(b []byte) (any, error)
```

将 YAML 格式的字节切片反序列化为对应的对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `[]byte` | 待解析的 YAML 字节切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 解析得到的对象(通常是 map 或切片) |
| r2 | `error` | 解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 把 YAML 文本解析为 map
m = yaml.Unmarshal([]byte("name: yak\nport: 80\n"))~
// STDOUT: 打印 name 字段
println(m["name"])   // OUT: yak
// assert: 数值字段被解析为整数
assert m["port"] == 80, "unmarshal should parse port as 80"
``````````````

---

### UnmarshalStrict {#unmarshalstrict}

```go
UnmarshalStrict(b []byte) (any, error)
```

严格模式反序列化 YAML，遇到未知字段或重复键会报错

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `[]byte` | 待解析的 YAML 字节切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 解析得到的对象(通常是 map 或切片) |
| r2 | `error` | 解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 严格模式解析 YAML 文本
m = yaml.UnmarshalStrict([]byte("name: yak\nport: 80\n"))~
// STDOUT: 打印 name 字段
println(m["name"])   // OUT: yak
// assert: 数值字段被解析为整数
assert m["port"] == 80, "strict unmarshal should parse port as 80"
``````````````

---

