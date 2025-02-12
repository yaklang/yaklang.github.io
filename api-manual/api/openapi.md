# openapi

|函数名|函数描述/介绍|
|:------|:--------|
| [openapi.ConvertJsonToYaml](#convertjsontoyaml) |JSONToYAML converts JSON to YAML. |
| [openapi.ConvertYamlToJson](#convertyamltojson) |YAMLToJSON converts YAML to JSON. Since JSON is a subset of YAML, passing JSON through this method should be a no-op.  Things YAML can do that are not...|
| [openapi.ExtractOpenAPI3Scheme](#extractopenapi3scheme) |ExtractOpenAPI3Scheme fetch openapi3 scheme from yakit.HTTPFlows  |
| [openapi.GenerateHTTPFlows](#generatehttpflows) |GenerateHTTPFlows means generate yakit.HTTPFlow via openapi2/3 scheme  use WithFlowHandler to recv and handle it  |
| [openapi.domain](#domain) |WithDomain means use this domain |
| [openapi.flowHandler](#flowhandler) |WithFlowHandler means use this handler |
| [openapi.https](#https) |WithHttps means use https |


## 函数定义
### ConvertJsonToYaml

#### 详细描述
JSONToYAML converts JSON to YAML.


#### 定义

`ConvertJsonToYaml(j []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ConvertYamlToJson

#### 详细描述
YAMLToJSON converts YAML to JSON. Since JSON is a subset of YAML,
passing JSON through this method should be a no-op.

Things YAML can do that are not supported by JSON:
  - In YAML you can have binary and null keys in your maps. These are invalid
    in JSON. (int and float keys are converted to strings.)
  - Binary data in YAML with the !!binary tag is not supported. If you want to
    use binary data with this library, encode the data as base64 as usual but do
    not use the !!binary tag in your YAML. This will ensure the original base64
    encoded data makes it all the way through to the JSON.


#### 定义

`ConvertYamlToJson(y []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| y | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ExtractOpenAPI3Scheme

#### 详细描述
ExtractOpenAPI3Scheme fetch openapi3 scheme from yakit.HTTPFlows

Example:

scheme := openapi.ExtractOpenAPI3Scheme(domain)~
schemeJSON = scheme.MarshalJSON()~


#### 定义

`ExtractOpenAPI3Scheme(domain string) (*openapi3.T, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*openapi3.T` |   |
| r2 | `error` |   |


### GenerateHTTPFlows

#### 详细描述
GenerateHTTPFlows means generate yakit.HTTPFlow via openapi2/3 scheme

use WithFlowHandler to recv and handle it

Example:

	openapi.Generate(fileName, openapi.flowHandler(flow => {
		dump(flow.Url)
	}))


#### 定义

`GenerateHTTPFlows(doc string, opt ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| doc | `string` |   |
| opt | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### domain

#### 详细描述
WithDomain means use this domain


#### 定义

`domain(domain string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### flowHandler

#### 详细描述
WithFlowHandler means use this handler


#### 定义

`flowHandler(handler func(flow *schema.HTTPFlow)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(flow *schema.HTTPFlow)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### https

#### 详细描述
WithHttps means use https


#### 定义

`https(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


