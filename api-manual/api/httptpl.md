# httptpl

|函数名|函数描述/介绍|
|:------|:--------|
| [httptpl.MatchOrExtractHTTPFlow](#matchorextracthttpflow) |MatchOrExtractHTTPFlow evaluates matchers and extractors (defined in yamlString) against a single HTTP request/response pair. |
| [httptpl.https](#https) |MatchOrExtractHTTPS toggles HTTPS awareness when parsing request URLs. |
| [httptpl.vars](#vars) |MatchOrExtractVars injects custom nuclei-dsl variables during matcher execution. |


## 函数定义
### MatchOrExtractHTTPFlow

#### 详细描述
MatchOrExtractHTTPFlow evaluates matchers and extractors (defined in yamlString)
against a single HTTP request/response pair.


#### 定义

`MatchOrExtractHTTPFlow(req any, rsp any, yamlString string, opts ...MatchOrExtractOption) (*MatchOrExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `any` |   |
| rsp | `any` |   |
| yamlString | `string` |   |
| opts | `...MatchOrExtractOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MatchOrExtractResult` |   |
| r2 | `error` |   |


### https

#### 详细描述
MatchOrExtractHTTPS toggles HTTPS awareness when parsing request URLs.


#### 定义

`https(enable bool) MatchOrExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MatchOrExtractOption` |   |


### vars

#### 详细描述
MatchOrExtractVars injects custom nuclei-dsl variables during matcher execution.


#### 定义

`vars(items map[string]any) MatchOrExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| items | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MatchOrExtractOption` |   |


