# openapi

|函数名|函数描述/介绍|
|:------|:--------|
| [openapi.ConvertJsonToYaml](#convertjsontoyaml) |JSONToYAML 将 JSON 字节转换为 YAML 字节（导出名为 openapi.ConvertJsonToYaml） 转换过程会尽量保留数字类型（int/float），而非统一转为 float 参数: - j: JSON 内容（字符串或字节） 返回值: - 转换后的 YAML 内容 - 错...|
| [openapi.ConvertYamlToJson](#convertyamltojson) |YAMLToJSON 将 YAML 字节转换为 JSON 字节（导出名为 openapi.ConvertYamlToJson） 由于 JSON 是 YAML 的子集，对 JSON 输入做转换基本是无操作 参数: - y: YAML 内容（字符串或字节） 返回值: - 转换后的 JSON 内容 - 错...|
| [openapi.ExtractOpenAPI3Scheme](#extractopenapi3scheme) |ExtractOpenAPI3Scheme 从数据库中已记录的 HTTP 流量提取指定域名的 OpenAPI3 文档 依赖本地项目数据库中已抓取的流量数据 参数: - domain: 目标域名 返回值: - 提取出的 OpenAPI3 文档对象 - 错误信息|
| [openapi.GenerateHTTPFlows](#generatehttpflows) |GenerateHTTPFlows 根据 OpenAPI 2.0/3.0 文档生成对应的 HTTP 请求流 自动尝试按 OpenAPI 2 与 OpenAPI 3 解析，通过 openapi.flowHandler 接收每个生成的流 参数: - doc: OpenAPI 文档内容（JSON 或 YA...|
| [openapi.domain](#domain) |WithDomain 设置生成请求流时使用的目标域名（导出名为 openapi.domain） 参数: - domain: 目标域名 返回值: - OpenAPI 生成可选项|
| [openapi.flowHandler](#flowhandler) |WithFlowHandler 设置接收生成 HTTP 流的回调（导出名为 openapi.flowHandler） 参数: - handler: 处理每个生成 HTTP 流的回调函数 返回值: - OpenAPI 生成可选项|
| [openapi.https](#https) |WithHttps 设置生成的请求流是否使用 https（导出名为 openapi.https） 参数: - b: 为 true 时使用 https 返回值: - OpenAPI 生成可选项|


## 函数定义
### ConvertJsonToYaml

#### 详细描述
JSONToYAML 将 JSON 字节转换为 YAML 字节（导出名为 openapi.ConvertJsonToYaml）

转换过程会尽量保留数字类型（int/float），而非统一转为 float

参数:

  - j: JSON 内容（字符串或字节）



返回值:

  - 转换后的 YAML 内容

  - 错误信息




Example:

``````````````yak
y = openapi.ConvertJsonToYaml(`{"name":"yak","version":1}`)~
assert str.Contains(string(y), "name: yak"), "json should be converted to yaml"
``````````````


#### 定义

`ConvertJsonToYaml(j []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `[]byte` | JSON 内容（字符串或字节） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 转换后的 YAML 内容 |
| r2 | `error` | 错误信息 |


### ConvertYamlToJson

#### 详细描述
YAMLToJSON 将 YAML 字节转换为 JSON 字节（导出名为 openapi.ConvertYamlToJson）

由于 JSON 是 YAML 的子集，对 JSON 输入做转换基本是无操作

参数:

  - y: YAML 内容（字符串或字节）



返回值:

  - 转换后的 JSON 内容

  - 错误信息




Example:

``````````````yak
j = openapi.ConvertYamlToJson("name: yak\nversion: 1\n")~
assert str.Contains(string(j), "\"name\":\"yak\""), "yaml should be converted to json"
``````````````


#### 定义

`ConvertYamlToJson(y []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| y | `[]byte` | YAML 内容（字符串或字节） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 转换后的 JSON 内容 |
| r2 | `error` | 错误信息 |


### ExtractOpenAPI3Scheme

#### 详细描述
ExtractOpenAPI3Scheme 从数据库中已记录的 HTTP 流量提取指定域名的 OpenAPI3 文档

依赖本地项目数据库中已抓取的流量数据

参数:

  - domain: 目标域名



返回值:

  - 提取出的 OpenAPI3 文档对象

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地项目数据库中已有该域名的流量
scheme = openapi.ExtractOpenAPI3Scheme("example.com")~
schemeJSON = scheme.MarshalJSON()~
println(string(schemeJSON))
``````````````


#### 定义

`ExtractOpenAPI3Scheme(domain string) (*openapi3.T, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 目标域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*openapi3.T` | 提取出的 OpenAPI3 文档对象 |
| r2 | `error` | 错误信息 |


### GenerateHTTPFlows

#### 详细描述
GenerateHTTPFlows 根据 OpenAPI 2.0/3.0 文档生成对应的 HTTP 请求流

自动尝试按 OpenAPI 2 与 OpenAPI 3 解析，通过 openapi.flowHandler 接收每个生成的流

参数:

  - doc: OpenAPI 文档内容（JSON 或 YAML）

  - opt: 可选项，如 openapi.flowHandler / openapi.domain / openapi.https



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需提供真实 OpenAPI 文档
doc = file.ReadFile("openapi.yaml")~

	err = openapi.GenerateHTTPFlows(string(doc), openapi.flowHandler(func(flow) {
	    println(flow.Url)
	}))

if err != nil { die(err) }
``````````````


#### 定义

`GenerateHTTPFlows(doc string, opt ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| doc | `string` | OpenAPI 文档内容（JSON 或 YAML） |
| opt | `...Option` | 可选项，如 openapi.flowHandler / openapi.domain / openapi.https |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### domain

#### 详细描述
WithDomain 设置生成请求流时使用的目标域名（导出名为 openapi.domain）

参数:

  - domain: 目标域名



返回值:

  - OpenAPI 生成可选项




Example:

``````````````yak
// 示意性示例，需提供真实 OpenAPI 文档
err = openapi.GenerateHTTPFlows(doc, openapi.domain("example.com"))
``````````````


#### 定义

`domain(domain string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 目标域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | OpenAPI 生成可选项 |


### flowHandler

#### 详细描述
WithFlowHandler 设置接收生成 HTTP 流的回调（导出名为 openapi.flowHandler）

参数:

  - handler: 处理每个生成 HTTP 流的回调函数



返回值:

  - OpenAPI 生成可选项




Example:

``````````````yak
// 示意性示例，需提供真实 OpenAPI 文档

	err = openapi.GenerateHTTPFlows(doc, openapi.flowHandler(func(flow) {
	    println(flow.Url)
	}))
``````````````


#### 定义

`flowHandler(handler func(flow *schema.HTTPFlow)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(flow *schema.HTTPFlow)` | 处理每个生成 HTTP 流的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | OpenAPI 生成可选项 |


### https

#### 详细描述
WithHttps 设置生成的请求流是否使用 https（导出名为 openapi.https）

参数:

  - b: 为 true 时使用 https



返回值:

  - OpenAPI 生成可选项




Example:

``````````````yak
// 示意性示例，需提供真实 OpenAPI 文档
err = openapi.GenerateHTTPFlows(doc, openapi.https(true))
``````````````


#### 定义

`https(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时使用 https |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | OpenAPI 生成可选项 |


