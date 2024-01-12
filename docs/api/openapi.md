# openapi

|成员函数|函数描述/介绍|
|:------|:--------|
| [openapi.Generate](#generate) |Generate means generate yakit.HTTPFlow via openapi2/3 scheme  use WithFlowHandler to recv and handle it  |
| [openapi.domain](#domain) |WithDomain means use this domain |
| [openapi.flowHandler](#flowhandler) |WithFlowHandler means use this handler |
| [openapi.https](#https) |WithHttps means use https |


## 函数定义
### Generate

#### 详细描述
Generate means generate yakit.HTTPFlow via openapi2/3 scheme

use WithFlowHandler to recv and handle it

Example:

	openapi.Generate(fileName, openapi.flowHandler(flow => {
		dump(flow.Url)
	}))


#### 定义

`Generate(doc string, opt ...Option) error`

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

`flowHandler(handler func(flow *yakit.HTTPFlow)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(flow *yakit.HTTPFlow)` |   |

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


