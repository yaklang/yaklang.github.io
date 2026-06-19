# httptpl

|函数名|函数描述/介绍|
|:------|:--------|
| [httptpl.MatchOrExtractHTTPFlow](#matchorextracthttpflow) |MatchOrExtractHTTPFlow 针对单个 HTTP 请求/响应对，执行 yamlString 中定义的 nuclei 风格 matcher 与 extractor 参数: - req: 请求报文（字符串或字节数组），可为空（将尝试从响应推导） - rsp: 响应报文（字符串或字节数组）...|
| [httptpl.https](#https) |MatchOrExtractHTTPS 是一个配置选项，用于在解析请求 URL 时声明是否按 HTTPS 处理 参数: - enable: 是否按 HTTPS 处理 返回值: - 一个配置选项，作为可变参数传入 httptpl.MatchOrExtractHTTPFlow|
| [httptpl.vars](#vars) |MatchOrExtractVars 是一个配置选项，用于在匹配/提取执行期间注入自定义的 nuclei-dsl 变量 参数: - items: 要注入的变量键值对 返回值: - 一个配置选项，作为可变参数传入 httptpl.MatchOrExtractHTTPFlow|


## 函数定义
### MatchOrExtractHTTPFlow

#### 详细描述
MatchOrExtractHTTPFlow 针对单个 HTTP 请求/响应对，执行 yamlString 中定义的 nuclei 风格 matcher 与 extractor

参数:

  - req: 请求报文（字符串或字节数组），可为空（将尝试从响应推导）

  - rsp: 响应报文（字符串或字节数组）

  - yamlString: 定义 matchers/extractors 的 nuclei 风格 YAML 字符串

  - opts: 可选配置，例如 httptpl.https、httptpl.vars



返回值:

  - 匹配/提取结果，包含是否命中(IsMatched)与提取到的变量(Extracted)

  - 错误信息，规则为空或解析失败时返回非空




Example:

``````````````yak
rsp = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<title>Example Domain</title>"
rule = `matchers:
  - type: word
    part: body
    words:
      - "Example Domain"`
result = httptpl.MatchOrExtractHTTPFlow("", rsp, rule)~
println(result.IsMatched)   // OUT: true
assert result.IsMatched == true, "word matcher should match the response body"
``````````````


#### 定义

`MatchOrExtractHTTPFlow(req any, rsp any, yamlString string, opts ...MatchOrExtractOption) (*MatchOrExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `any` | 请求报文（字符串或字节数组），可为空（将尝试从响应推导） |
| rsp | `any` | 响应报文（字符串或字节数组） |
| yamlString | `string` | 定义 matchers/extractors 的 nuclei 风格 YAML 字符串 |
| opts | `...MatchOrExtractOption` | 可选配置，例如 httptpl.https、httptpl.vars |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MatchOrExtractResult` | 匹配/提取结果，包含是否命中(IsMatched)与提取到的变量(Extracted) |
| r2 | `error` | 错误信息，规则为空或解析失败时返回非空 |


### https

#### 详细描述
MatchOrExtractHTTPS 是一个配置选项，用于在解析请求 URL 时声明是否按 HTTPS 处理

参数:

  - enable: 是否按 HTTPS 处理



返回值:

  - 一个配置选项，作为可变参数传入 httptpl.MatchOrExtractHTTPFlow




Example:

``````````````yak
// 声明按 HTTPS 处理后再执行匹配
result = httptpl.MatchOrExtractHTTPFlow(req, rsp, yamlRule, httptpl.https(true))~
println(result.IsMatched)
``````````````


#### 定义

`https(enable bool) MatchOrExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否按 HTTPS 处理 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MatchOrExtractOption` | 一个配置选项，作为可变参数传入 httptpl.MatchOrExtractHTTPFlow |


### vars

#### 详细描述
MatchOrExtractVars 是一个配置选项，用于在匹配/提取执行期间注入自定义的 nuclei-dsl 变量

参数:

  - items: 要注入的变量键值对



返回值:

  - 一个配置选项，作为可变参数传入 httptpl.MatchOrExtractHTTPFlow




Example:

``````````````yak
// 注入自定义变量供 matcher/extractor 使用
result = httptpl.MatchOrExtractHTTPFlow(req, rsp, yamlRule, httptpl.vars({"flag": "abc"}))~
println(result.IsMatched)
``````````````


#### 定义

`vars(items map[string]any) MatchOrExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| items | `map[string]any` | 要注入的变量键值对 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MatchOrExtractOption` | 一个配置选项，作为可变参数传入 httptpl.MatchOrExtractHTTPFlow |


