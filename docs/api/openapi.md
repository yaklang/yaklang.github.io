# openapi {#library-openapi}

`openapi` 库用于处理 OpenAPI/Swagger 文档：在 JSON/YAML 间转换、从站点提取 OpenAPI 描述、并据此生成可发送的 HTTP 请求流，常用于 API 测试用例的自动生成与接口资产梳理。

典型使用场景：

- 格式转换：`openapi.ConvertJsonToYaml` / `openapi.ConvertYamlToJson` 互转文档格式。
- 提取与生成：`openapi.ExtractOpenAPI3Scheme(domain)` 从目标提取 OpenAPI 3 描述，`openapi.GenerateHTTPFlows(doc, opts...)` 据文档生成 HTTP 请求（配 `openapi.domain` / `openapi.https` / `openapi.flowHandler` 处理每条请求）。

与相邻库的关系：`openapi` 生成的请求常交给 `fuzz`/`poc` 做接口测试，是"从 API 文档到测试请求"的桥梁。

> 共 7 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [openapi.ConvertJsonToYaml](#convertjsontoyaml) | `j []byte` | `[]byte, error` | JSONToYAML 将 JSON 字节转换为 YAML 字节（导出名为 openapi.ConvertJsonToYaml） |
| [openapi.ConvertYamlToJson](#convertyamltojson) | `y []byte` | `[]byte, error` | YAMLToJSON 将 YAML 字节转换为 JSON 字节（导出名为 openapi.ConvertYamlToJson） |
| [openapi.ExtractOpenAPI3Scheme](#extractopenapi3scheme) | `domain string` | `*openapi3.T, error` | 从数据库中已记录的 HTTP 流量提取指定域名的 OpenAPI3 文档 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [openapi.GenerateHTTPFlows](#generatehttpflows) | `doc string, opt ...Option` | `error` | 根据 OpenAPI 2.0/3.0 文档生成对应的 HTTP 请求流 |

## 函数详情

### ConvertJsonToYaml {#convertjsontoyaml}

```go
ConvertJsonToYaml(j []byte) ([]byte, error)
```

JSONToYAML 将 JSON 字节转换为 YAML 字节（导出名为 openapi.ConvertJsonToYaml）

转换过程会尽量保留数字类型（int/float），而非统一转为 float

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| j | `[]byte` | JSON 内容（字符串或字节） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 转换后的 YAML 内容 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
y = openapi.ConvertJsonToYaml(`{"name":"yak","version":1}`)~
assert str.Contains(string(y), "name: yak"), "json should be converted to yaml"
``````````````

---

### ConvertYamlToJson {#convertyamltojson}

```go
ConvertYamlToJson(y []byte) ([]byte, error)
```

YAMLToJSON 将 YAML 字节转换为 JSON 字节（导出名为 openapi.ConvertYamlToJson）

由于 JSON 是 YAML 的子集，对 JSON 输入做转换基本是无操作

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| y | `[]byte` | YAML 内容（字符串或字节） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 转换后的 JSON 内容 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
j = openapi.ConvertYamlToJson("name: yak\nversion: 1\n")~
assert str.Contains(string(j), "\"name\":\"yak\""), "yaml should be converted to json"
``````````````

---

### ExtractOpenAPI3Scheme {#extractopenapi3scheme}

```go
ExtractOpenAPI3Scheme(domain string) (*openapi3.T, error)
```

从数据库中已记录的 HTTP 流量提取指定域名的 OpenAPI3 文档

依赖本地项目数据库中已抓取的流量数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | 目标域名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*openapi3.T` | 提取出的 OpenAPI3 文档对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地项目数据库中已有该域名的流量
scheme = openapi.ExtractOpenAPI3Scheme("example.com")~
schemeJSON = scheme.MarshalJSON()~
println(string(schemeJSON))
``````````````

---

## 可变参数函数详情

### GenerateHTTPFlows {#generatehttpflows}

```go
GenerateHTTPFlows(doc string, opt ...Option) error
```

根据 OpenAPI 2.0/3.0 文档生成对应的 HTTP 请求流

自动尝试按 OpenAPI 2 与 OpenAPI 3 解析，通过 openapi.flowHandler 接收每个生成的流

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| doc | `string` | OpenAPI 文档内容（JSON 或 YAML） |

**可选参数**

可作为可变参数 `opt ...Option` 传入选项；共 3 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需提供真实 OpenAPI 文档
doc = file.ReadFile("openapi.yaml")~

	err = openapi.GenerateHTTPFlows(string(doc), openapi.flowHandler(func(flow) {
	    println(flow.Url)
	}))

if err != nil { die(err) }
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[openapi.GenerateHTTPFlows](#generatehttpflows)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `openapi.domain` | `domain string` | `Option` | WithDomain 设置生成请求流时使用的目标域名 |
| `openapi.flowHandler` | `handler func(flow *schema.HTTPFlow)` | `Option` | WithFlowHandler 设置接收生成 HTTP 流的回调 |
| `openapi.https` | `b bool` | `Option` | WithHttps 设置生成的请求流是否使用 https |

