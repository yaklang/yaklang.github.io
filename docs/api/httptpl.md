# httptpl {#library-httptpl}

`httptpl` 库提供基于 YAML 模板（Nuclei 风格）的 HTTP 匹配与提取能力，对给定请求/响应套用 matcher/extractor 规则，判断是否命中并抽取数据，是模板化漏洞检测的底层匹配引擎。

典型使用场景：

- 匹配提取：`httptpl.MatchOrExtractHTTPFlow(req, rsp, yamlString, opts...)` 用 YAML 模板对一次 HTTP 交互做匹配与字段提取。
- 选项：`httptpl.https` 指定 HTTPS，`httptpl.vars` 注入模板变量。

与相邻库的关系：`httptpl` 与 `nuclei`（完整 PoC 模板执行）、`fuzz`/`poc`（请求构造发送）配合，把"matcher/extractor 规则"应用到任意流量上。

> 共 3 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [httptpl.MatchOrExtractHTTPFlow](#matchorextracthttpflow) | `req any, rsp any, yamlString string, opts ...MatchOrExtractOption` | `*MatchOrExtractResult, error` | 针对单个 HTTP 请求/响应对，执行 yamlString 中定义的 nuclei 风格 matcher 与 extractor |

## 可变参数函数详情

### MatchOrExtractHTTPFlow {#matchorextracthttpflow}

```go
MatchOrExtractHTTPFlow(req any, rsp any, yamlString string, opts ...MatchOrExtractOption) (*MatchOrExtractResult, error)
```

针对单个 HTTP 请求/响应对，执行 yamlString 中定义的 nuclei 风格 matcher 与 extractor

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| req | `any` | 请求报文（字符串或字节数组），可为空（将尝试从响应推导） |
| rsp | `any` | 响应报文（字符串或字节数组） |
| yamlString | `string` | 定义 matchers/extractors 的 nuclei 风格 YAML 字符串 |

**可选参数**

可作为可变参数 `opts ...MatchOrExtractOption` 传入选项；共 2 个可用选项，详见 [MatchOrExtractOption 选项列表](#option-matchorextractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MatchOrExtractResult` | 匹配/提取结果，包含是否命中(IsMatched)与提取到的变量(Extracted) |
| r2 | `error` | 错误信息，规则为空或解析失败时返回非空 |

**示例**

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

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：MatchOrExtractOption {#option-matchorextractoption}

涉及到的函数有：[httptpl.MatchOrExtractHTTPFlow](#matchorextracthttpflow)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `httptpl.https` | `enable bool` | `MatchOrExtractOption` | MatchOrExtractHTTPS 是一个配置选项，用于在解析请求 URL 时声明是否按 HTTPS 处理 |
| `httptpl.vars` | `items map[string]any` | `MatchOrExtractOption` | MatchOrExtractVars 是一个配置选项，用于在匹配/提取执行期间注入自定义的 nuclei-dsl 变量 |

