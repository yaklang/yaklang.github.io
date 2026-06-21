# nuclei {#library-nuclei}

`nuclei` 库是 Nuclei 兼容的模板化漏洞扫描引擎，加载 YAML PoC 模板对目标批量检测，支持按 tag/severity 筛选、反连（interactsh）、并发与代理控制，是大规模已知漏洞扫描的主力。

典型使用场景：

- 扫描：`nuclei.Scan(target, opts...)` 对目标执行模板扫描，返回 `*PocVul` channel；`nuclei.ScanAuto` 自动处理批量目标。
- 模板与库：`nuclei.AllPoC` 列出模板，`nuclei.UpdateDatabase` / `nuclei.PullDatabase` / `nuclei.UpdatePoC` 维护模板库，`nuclei.templates` / `nuclei.tags` / `nuclei.severity` / `nuclei.excludeTags` 选择模板。
- 控制：`nuclei.targetConcurrent` / `nuclei.templatesThreads` / `nuclei.rateLimit` 控速，`nuclei.proxy` / `nuclei.timeout` / `nuclei.https` 控制传输，`nuclei.enableReverseConnection` 启用反连验证；`nuclei.PocVulToRisk` 把结果转为风险对象。

与相邻库的关系：`nuclei` 与 `httptpl`（模板匹配引擎）、`nasl`（NASL 引擎）同属模板化扫描；发现结果常经 `risk` 记录、`report` 汇总、`bot` 告警。

> 共 67 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [nuclei.GetPoCDir](#getpocdir) | - | `string` | 获取本地 nuclei 模板(PoC)的默认存放目录 |
| [nuclei.PocVulToRisk](#pocvultorisk) | `p *PocVul` | `*schema.Risk` | 将一个 PoC 漏洞结果(PocVul)转换为标准的 Risk 风险结构 |
| [nuclei.RemoveDatabase](#removedatabase) | - | `error` | 从数据库中删除所有来自本地的 nuclei PoC 模板 |
| [nuclei.all](#all) | `b bool` | `ConfigOption` | 设置是否使用全部本地模板进行扫描 |
| [nuclei.bulkSize](#bulksize) | `i int` | `ConfigOption` | 设置同时执行的模板并发数 |
| [nuclei.context](#context) | `c context.Context` | `ConfigOption` | 设置 nuclei 扫描使用的 context，用于取消或超时控制 |
| [nuclei.customVulnFilter](#customvulnfilter) | `f filter.Filterable` | `ConfigOption` | 设置一个自定义的漏洞去重过滤器，用于控制扫描结果的去重逻辑 |
| [nuclei.debug](#debug) | `b bool` | `ConfigOption` | 设置是否开启调试模式，开启后会同时打印请求与响应报文 |
| [nuclei.debugRequest](#debugrequest) | `b bool` | `ConfigOption` | 设置是否打印调试请求报文 |
| [nuclei.debugResponse](#debugresponse) | `b bool` | `ConfigOption` | 设置是否打印调试响应报文 |
| [nuclei.dnsResolver](#dnsresolver) | `servers []string` | `LowhttpOpt` | 指定 nuclei 扫描时使用的自定义 DNS 服务器列表，用于解析目标域名 |
| [nuclei.enableReverseConnection](#enablereverseconnection) | `b bool` | `ConfigOption` | 设置是否启用反连(OOB)检测功能，用于检测无回显漏洞 |
| [nuclei.exactTemplateIns](#exacttemplateins) | `script *schema.YakScript` | `ConfigOption` | 设置使用一个精确的 YakScript 模板实例进行扫描 |
| [nuclei.fromPlugin](#fromplugin) | `fromPlugin string` | `LowhttpOpt` | 标记本次 nuclei 扫描请求的来源插件名称，便于在结果中追踪请求出处 |
| [nuclei.http2](#http2) | `Http2 bool` | `LowhttpOpt` | 设置 nuclei 扫描是否启用 HTTP/2 协议发送请求 |
| [nuclei.http3](#http3) | `http3 bool` | `LowhttpOpt` | 设置 nuclei 扫描是否启用 HTTP/3 协议发送请求 |
| [nuclei.https](#https) | `https bool` | `LowhttpOpt` | 设置 nuclei 扫描是否使用 HTTPS 协议访问目标 |
| [nuclei.interactshTimeout](#interactshtimeout) | `f float64` | `ConfigOption` | 设置反连(OOB)平台等待回连结果的超时时间 |
| [nuclei.mockHTTPRequest](#mockhttprequest) | `f func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))` | `ConfigOption` | 设置一个自定义的 HTTP 请求模拟函数，用于在不发起真实请求的情况下测试模板 |
| [nuclei.mode](#mode) | `s string` | `ConfigOption` | 设置扫描模式，目前主要支持 nuclei 模式 |
| [nuclei.noInteractsh](#nointeractsh) | `b bool` | `ConfigOption` | 设置是否禁用 interactsh 反连检测，传入 true 表示禁用 |
| [nuclei.pageTimeout](#pagetimeout) | `i float64` | `lowhttp.LowhttpOpt` | timeout 设置 nuclei 扫描中单个请求的超时时间 |
| [nuclei.rateLimit](#ratelimit) | `i float64` | `lowhttp.LowhttpOpt` | 设置 nuclei 扫描的发包速率限制，控制每次请求之间的等待时间 |
| [nuclei.rawTemplate](#rawtemplate) | `b string` | `ConfigOption` | 设置直接使用传入的单个 nuclei 模板原始内容进行扫描 |
| [nuclei.resultCallback](#resultcallback) | `handler func(i map[string]any)` | `ConfigOption` | 设置 HTTP 模板命中时的结果回调函数 |
| [nuclei.retry](#retry) | `retryTimes int` | `LowhttpOpt` | 设置 nuclei 扫描中单个请求失败后的最大重试次数 |
| [nuclei.runtimeId](#runtimeid) | `id string` | `ConfigOption` | 设置本次 nuclei 扫描的运行时 ID，用于关联扫描任务与结果 |
| [nuclei.targetConcurrent](#targetconcurrent) | `i int` | `ConfigOption` | 设置同时扫描的目标并发数 |
| [nuclei.tcpResultCallback](#tcpresultcallback) | `handler func(i map[string]any)` | `ConfigOption` | 设置 TCP 模板命中时的结果回调函数 |
| [nuclei.templatesThreads](#templatesthreads) | `i int` | `ConfigOption` | 设置单个模板内部的执行并发数 |
| [nuclei.timeout](#timeout) | `i float64` | `lowhttp.LowhttpOpt` | 设置 nuclei 扫描中单个请求的超时时间 |
| [nuclei.vars](#vars) | `raw any` | `ConfigOption` | 设置 nuclei 扫描时使用的自定义变量，会注入到模板渲染过程中 |
| [nuclei.verbose](#verbose) | `b bool` | `ConfigOption` | 设置是否开启详细日志输出，打印每个模板的执行过程 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [nuclei.AllPoC](#allpoc) | `defaultDirs ...string` | `[]*templateDesc, error` | 获取本地当前已加载的全部 nuclei 模板(PoC)描述信息 |
| [nuclei.PullDatabase](#pulldatabase) | `giturl string, proxy ...string` | `string, error` | 从指定的 Git 仓库拉取 nuclei 模板到本地模板目录 |
| [nuclei.Scan](#scan) | `target any, opt ...any` | `chan *tools.PocVul, error` | 对目标执行 nuclei 模板扫描，以 channel 形式流式返回扫描发现的漏洞结果 |
| [nuclei.ScanAuto](#scanauto) | `items any, opt ...any` | - | 自动识别输入目标类型(原始请求、URL、主机等)并批量执行 nuclei 模板扫描 |
| [nuclei.UpdateDatabase](#updatedatabase) | `nucleiDir ...string` | `error` | 将本地 nuclei 模板目录中的 yaml PoC 加载并更新到数据库 |
| [nuclei.UpdatePoC](#updatepoc) | `proxy ...string` | - | 从默认的 nuclei 模板仓库拉取最新模板并更新到本地数据库 |
| [nuclei.excludeTags](#excludetags) | `i ...any` | `any` | 兼容保留选项：按标签排除模板。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.excludeTemplates](#excludetemplates) | `s ...string` | `ConfigOption` | 设置扫描时需要排除的模板名称，可传入一个或多个 |
| [nuclei.fuzzQueryTemplate](#fuzzquerytemplate) | `s ...string` | `ConfigOption` | 设置按关键词模糊查询并选择匹配的模板 |
| [nuclei.headers](#headers) | `i ...any` | `any` | 兼容保留选项：设置自定义请求头。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.headless](#headless) | `i ...any` | `any` | 兼容保留选项：启用 headless 浏览器模板。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.logFile](#logfile) | `i ...any` | `any` | 兼容保留选项：指定日志文件。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.metrics](#metrics) | `i ...any` | `any` | 兼容保留选项：开启运行指标。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.newTemplates](#newtemplates) | `i ...any` | `any` | 兼容保留选项：仅运行新增模板。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.noColor](#nocolor) | `i ...any` | `any` | 兼容保留选项：禁用彩色输出。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.noMeta](#nometa) | `i ...any` | `any` | 兼容保留选项：不显示元数据。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.output](#output) | `i ...any` | `any` | 兼容保留选项：指定结果输出文件。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.proxy](#proxy) | `proxy ...string` | `LowhttpOpt` | 设置 nuclei 扫描时使用的代理服务器，可传入多个代理（依次尝试） |
| [nuclei.reportingConfig](#reportingconfig) | `i ...any` | `any` | 兼容保留选项：指定报告配置文件。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.reportingDB](#reportingdb) | `i ...any` | `any` | 兼容保留选项：指定报告数据库。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.reverseUrl](#reverseurl) | `i ...any` | `any` | 兼容保留选项：指定反连地址。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.severity](#severity) | `i ...any` | `any` | 兼容保留选项：按严重级别过滤模板。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.showBrowser](#showbrowser) | `i ...any` | `any` | 兼容保留选项：headless 扫描时显示浏览器。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.silent](#silent) | `i ...any` | `any` | 兼容保留选项：静默模式。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.stopAtFirstMatch](#stopatfirstmatch) | `i ...any` | `any` | 兼容保留选项：命中首个匹配后停止。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.systemDnsResolver](#systemdnsresolver) | `i ...any` | `any` | 兼容保留选项：使用系统 DNS 解析。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.tags](#tags) | `f ...string` | `ConfigOption` | 设置仅运行带有指定标签的模板，可传入一个或多个标签 |
| [nuclei.templateList](#templatelist) | `i ...any` | `any` | 兼容保留选项：列出模板。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.templates](#templates) | `s ...string` | `ConfigOption` | 设置按名称选择要运行的模板，可传入一个或多个模板名称 |
| [nuclei.templatesDir](#templatesdir) | `i ...any` | `any` | 兼容保留选项：指定模板目录。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.templatesVersion](#templatesversion) | `i ...any` | `any` | 兼容保留选项：指定模板版本。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.updateTemplates](#updatetemplates) | `i ...any` | `any` | 兼容保留选项：更新模板。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.version](#version) | `i ...any` | `any` | 兼容保留选项：打印版本信息。当前为无操作(no-op)，不影响扫描行为 |
| [nuclei.workflows](#workflows) | `i ...any` | `any` | 兼容保留选项：指定 nuclei 工作流。当前为无操作(no-op)，不影响扫描行为 |

## 函数详情

### GetPoCDir {#getpocdir}

```go
GetPoCDir() string
```

获取本地 nuclei 模板(PoC)的默认存放目录

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 本地 nuclei 模板目录路径 |

**示例**

``````````````yak
// 该示例为示意性用法：获取本地模板目录
dir = nuclei.GetPoCDir()
println(dir)
``````````````

---

### PocVulToRisk {#pocvultorisk}

```go
PocVulToRisk(p *PocVul) *schema.Risk
```

将一个 PoC 漏洞结果(PocVul)转换为标准的 Risk 风险结构

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `*PocVul` | PoC 漏洞结果对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.Risk` | *schema.Risk: 转换后的 Risk 风险对象 |

**示例**

``````````````yak
// 该示例为示意性用法：将扫描结果转换为 Risk
res, err = nuclei.Scan("http://example.com", nuclei.all(true))
die(err)

	for vul = range res {
	    risk = nuclei.PocVulToRisk(vul)
	    println(risk.Title)
	}
``````````````

---

### RemoveDatabase {#removedatabase}

```go
RemoveDatabase() error
```

从数据库中删除所有来自本地的 nuclei PoC 模板

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 删除失败时返回错误 |

**示例**

``````````````yak
// 该示例为示意性用法：清空数据库中的本地 nuclei 模板
err = nuclei.RemoveDatabase()
die(err)
``````````````

---

### all {#all}

```go
all(b bool) ConfigOption
```

设置是否使用全部本地模板进行扫描

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否使用全部模板 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用全部模板扫描
res, err = nuclei.Scan("http://example.com", nuclei.all(true))
die(err)
``````````````

---

### bulkSize {#bulksize}

```go
bulkSize(i int) ConfigOption
```

设置同时执行的模板并发数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 同时执行的模板数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置模板并发数
res, err = nuclei.Scan("http://example.com", nuclei.bulkSize(20))
die(err)
``````````````

---

### context {#context}

```go
context(c context.Context) ConfigOption
```

设置 nuclei 扫描使用的 context，用于取消或超时控制

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| c | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用可取消的 context 控制扫描
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
res, err = nuclei.Scan("http://example.com", nuclei.context(ctx))
die(err)
``````````````

---

### customVulnFilter {#customvulnfilter}

```go
customVulnFilter(f filter.Filterable) ConfigOption
```

设置一个自定义的漏洞去重过滤器，用于控制扫描结果的去重逻辑

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `filter.Filterable` | 实现了 Filterable 接口的过滤器 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置自定义漏洞过滤器
res, err = nuclei.Scan("http://example.com", nuclei.customVulnFilter(filter.NewFilter()))
die(err)
``````````````

---

### debug {#debug}

```go
debug(b bool) ConfigOption
```

设置是否开启调试模式，开启后会同时打印请求与响应报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否开启调试模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：开启调试模式
res, err = nuclei.Scan("http://example.com", nuclei.debug(true))
die(err)
``````````````

---

### debugRequest {#debugrequest}

```go
debugRequest(b bool) ConfigOption
```

设置是否打印调试请求报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否打印请求报文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：打印请求报文
res, err = nuclei.Scan("http://example.com", nuclei.debugRequest(true))
die(err)
``````````````

---

### debugResponse {#debugresponse}

```go
debugResponse(b bool) ConfigOption
```

设置是否打印调试响应报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否打印响应报文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：打印响应报文
res, err = nuclei.Scan("http://example.com", nuclei.debugResponse(true))
die(err)
``````````````

---

### dnsResolver {#dnsresolver}

```go
dnsResolver(servers []string) LowhttpOpt
```

指定 nuclei 扫描时使用的自定义 DNS 服务器列表，用于解析目标域名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| servers | `[]string` | DNS 服务器地址列表（如 [&#34;8.8.8.8&#34;, &#34;1.1.1.1&#34;]） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用指定 DNS 服务器解析目标
res, err = nuclei.Scan("http://example.com", nuclei.dnsResolver(["8.8.8.8", "1.1.1.1"]))
die(err)
``````````````

---

### enableReverseConnection {#enablereverseconnection}

```go
enableReverseConnection(b bool) ConfigOption
```

设置是否启用反连(OOB)检测功能，用于检测无回显漏洞

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否启用反连检测 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：开启反连检测
res, err = nuclei.Scan("http://example.com", nuclei.enableReverseConnection(true))
die(err)
``````````````

---

### exactTemplateIns {#exacttemplateins}

```go
exactTemplateIns(script *schema.YakScript) ConfigOption
```

设置使用一个精确的 YakScript 模板实例进行扫描

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| script | `*schema.YakScript` | YakScript 模板实例 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用精确模板实例
res, err = nuclei.Scan("http://example.com", nuclei.exactTemplateIns(scriptIns))
die(err)
``````````````

---

### fromPlugin {#fromplugin}

```go
fromPlugin(fromPlugin string) LowhttpOpt
```

标记本次 nuclei 扫描请求的来源插件名称，便于在结果中追踪请求出处

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| fromPlugin | `string` | 来源插件名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：标记扫描请求来源插件
res, err = nuclei.Scan("http://example.com", nuclei.fromPlugin("my-plugin"))
die(err)
``````````````

---

### http2 {#http2}

```go
http2(Http2 bool) LowhttpOpt
```

设置 nuclei 扫描是否启用 HTTP/2 协议发送请求

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| Http2 | `bool` | 为 true 时启用 HTTP/2 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 HTTP/2 扫描目标
res, err = nuclei.Scan("https://example.com", nuclei.http2(true))
die(err)
``````````````

---

### http3 {#http3}

```go
http3(http3 bool) LowhttpOpt
```

设置 nuclei 扫描是否启用 HTTP/3 协议发送请求

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| http3 | `bool` | 为 true 时启用 HTTP/3 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用 HTTP/3 扫描目标
res, err = nuclei.Scan("https://example.com", nuclei.http3(true))
die(err)
``````````````

---

### https {#https}

```go
https(https bool) LowhttpOpt
```

设置 nuclei 扫描是否使用 HTTPS 协议访问目标

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| https | `bool` | 为 true 时使用 HTTPS 访问目标 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：强制使用 HTTPS 扫描目标
res, err = nuclei.Scan("example.com", nuclei.https(true))
die(err)
``````````````

---

### interactshTimeout {#interactshtimeout}

```go
interactshTimeout(f float64) ConfigOption
```

设置反连(OOB)平台等待回连结果的超时时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置反连等待超时
res, err = nuclei.Scan("http://example.com", nuclei.enableReverseConnection(true), nuclei.interactshTimeout(10))
die(err)
``````````````

---

### mockHTTPRequest {#mockhttprequest}

```go
mockHTTPRequest(f func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))) ConfigOption
```

设置一个自定义的 HTTP 请求模拟函数，用于在不发起真实请求的情况下测试模板

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))` | 模拟请求处理函数，接收是否 HTTPS、URL、原始请求与设置响应的回调 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用自定义请求模拟函数
res, err = nuclei.Scan("http://example.com", nuclei.mockHTTPRequest(func(isHttps, url, req, setRsp) { setRsp("HTTP/1.1 200 OK\r\n\r\n") }))
die(err)
``````````````

---

### mode {#mode}

```go
mode(s string) ConfigOption
```

设置扫描模式，目前主要支持 nuclei 模式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 扫描模式字符串，例如 &#34;nuclei&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置扫描模式
res, err = nuclei.Scan("http://example.com", nuclei.mode("nuclei"))
die(err)
``````````````

---

### noInteractsh {#nointeractsh}

```go
noInteractsh(b bool) ConfigOption
```

设置是否禁用 interactsh 反连检测，传入 true 表示禁用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否禁用 interactsh 反连检测 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：禁用反连检测
res, err = nuclei.Scan("http://example.com", nuclei.noInteractsh(true))
die(err)
``````````````

---

### pageTimeout {#pagetimeout}

```go
pageTimeout(i float64) lowhttp.LowhttpOpt
```

timeout 设置 nuclei 扫描中单个请求的超时时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `lowhttp.LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置请求超时
res, err = nuclei.Scan("http://example.com", nuclei.timeout(10))
die(err)
``````````````

---

### rateLimit {#ratelimit}

```go
rateLimit(i float64) lowhttp.LowhttpOpt
```

设置 nuclei 扫描的发包速率限制，控制每次请求之间的等待时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 请求间等待时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `lowhttp.LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：限制发包速率
res, err = nuclei.Scan("http://example.com", nuclei.rateLimit(0.5))
die(err)
``````````````

---

### rawTemplate {#rawtemplate}

```go
rawTemplate(b string) ConfigOption
```

设置直接使用传入的单个 nuclei 模板原始内容进行扫描

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `string` | nuclei 模板的原始字符串内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用原始模板内容扫描
res, err = nuclei.Scan("http://example.com", nuclei.rawTemplate(templateContent))
die(err)
``````````````

---

### resultCallback {#resultcallback}

```go
resultCallback(handler func(i map[string]any)) ConfigOption
```

设置 HTTP 模板命中时的结果回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(i map[string]any)` | 回调函数，入参为包含 template、requests、responses、match 等键的结果字典 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置结果回调
res, err = nuclei.Scan("http://example.com", nuclei.resultCallback(func(i) { println(i["match"]) }))
die(err)
``````````````

---

### retry {#retry}

```go
retry(retryTimes int) LowhttpOpt
```

设置 nuclei 扫描中单个请求失败后的最大重试次数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| retryTimes | `int` | 最大重试次数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：请求失败时最多重试 3 次
res, err = nuclei.Scan("http://example.com", nuclei.retry(3))
die(err)
``````````````

---

### runtimeId {#runtimeid}

```go
runtimeId(id string) ConfigOption
```

设置本次 nuclei 扫描的运行时 ID，用于关联扫描任务与结果

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` | 运行时 ID 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置运行时 ID
res, err = nuclei.Scan("http://example.com", nuclei.runtimeId("task-001"))
die(err)
``````````````

---

### targetConcurrent {#targetconcurrent}

```go
targetConcurrent(i int) ConfigOption
```

设置同时扫描的目标并发数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 目标并发数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置目标并发
res, err = nuclei.Scan("http://example.com", nuclei.targetConcurrent(10))
die(err)
``````````````

---

### tcpResultCallback {#tcpresultcallback}

```go
tcpResultCallback(handler func(i map[string]any)) ConfigOption
```

设置 TCP 模板命中时的结果回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(i map[string]any)` | 回调函数，入参为包含 template、requests、responses、match 等键的结果字典 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 结果回调
res, err = nuclei.Scan("tcp://example.com:8080", nuclei.tcpResultCallback(func(i) { println(i["match"]) }))
die(err)
``````````````

---

### templatesThreads {#templatesthreads}

```go
templatesThreads(i int) ConfigOption
```

设置单个模板内部的执行并发数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 单个模板内部的并发数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置模板内部并发
res, err = nuclei.Scan("http://example.com", nuclei.templatesThreads(10))
die(err)
``````````````

---

### timeout {#timeout}

```go
timeout(i float64) lowhttp.LowhttpOpt
```

设置 nuclei 扫描中单个请求的超时时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `lowhttp.LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置请求超时
res, err = nuclei.Scan("http://example.com", nuclei.timeout(10))
die(err)
``````````````

---

### vars {#vars}

```go
vars(raw any) ConfigOption
```

设置 nuclei 扫描时使用的自定义变量，会注入到模板渲染过程中

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 自定义变量，通常为 map 结构 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：注入自定义变量
res, err = nuclei.Scan("http://example.com", nuclei.vars({"username": "admin"}))
die(err)
``````````````

---

### verbose {#verbose}

```go
verbose(b bool) ConfigOption
```

设置是否开启详细日志输出，打印每个模板的执行过程

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否开启详细日志 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：开启详细日志
res, err = nuclei.Scan("http://example.com", nuclei.verbose(true))
die(err)
``````````````

---

## 可变参数函数详情

### AllPoC {#allpoc}

```go
AllPoC(defaultDirs ...string) ([]*templateDesc, error)
```

获取本地当前已加载的全部 nuclei 模板(PoC)描述信息

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| defaultDirs | `...string` | 可选，指定模板所在目录，不传时使用默认模板目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*templateDesc` | []*templateDesc: 模板描述信息列表 |
| r2 | `error` | 读取失败时返回错误 |

**示例**

``````````````yak
// 该示例为示意性用法：列出本地所有 nuclei 模板
pocs, err = nuclei.AllPoC()
die(err)
println(len(pocs))
``````````````

---

### PullDatabase {#pulldatabase}

```go
PullDatabase(giturl string, proxy ...string) (string, error)
```

从指定的 Git 仓库拉取 nuclei 模板到本地模板目录

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| giturl | `string` | nuclei 模板 Git 仓库地址 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `...string` | 可选，拉取时使用的代理地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 拉取后本地模板目录路径 |
| r2 | `error` | 拉取失败时返回错误 |

**示例**

``````````````yak
// 该示例为示意性用法：从 Git 仓库拉取模板
dir, err = nuclei.PullDatabase("https://github.com/projectdiscovery/nuclei-templates")
die(err)
println(dir)
``````````````

---

### Scan {#scan}

```go
Scan(target any, opt ...any) (chan *tools.PocVul, error)
```

对目标执行 nuclei 模板扫描，以 channel 形式流式返回扫描发现的漏洞结果

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `any` | 扫描目标，支持字符串、字节数组或目标集合 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...any` | 零个或多个 nuclei 扫描配置选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *tools.PocVul` | chan *PocVul: 漏洞结果管道，可迭代获取每个命中漏洞 |
| r2 | `error` | 启动失败时返回错误 |

**示例**

``````````````yak
// 该示例为示意性用法：使用全部模板扫描目标
res, err = nuclei.Scan("http://example.com", nuclei.all(true))
die(err)

	for vul = range res {
	    println(vul.Target, vul.PocName)
	}
``````````````

---

### ScanAuto {#scanauto}

```go
ScanAuto(items any, opt ...any)
```

自动识别输入目标类型(原始请求、URL、主机等)并批量执行 nuclei 模板扫描

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| items | `any` | 扫描目标，支持字符串、字节数组或可遍历的目标集合 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...any` | 零个或多个 nuclei 扫描配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：自动批量扫描多个目标
nuclei.ScanAuto(["http://example.com", "http://test.com"], nuclei.all(true))
``````````````

---

### UpdateDatabase {#updatedatabase}

```go
UpdateDatabase(nucleiDir ...string) error
```

将本地 nuclei 模板目录中的 yaml PoC 加载并更新到数据库

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| nucleiDir | `...string` | 可选，模板目录，不传时使用默认模板目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 加载失败时返回错误 |

**示例**

``````````````yak
// 该示例为示意性用法：将本地模板更新到数据库
err = nuclei.UpdateDatabase()
die(err)
``````````````

---

### UpdatePoC {#updatepoc}

```go
UpdatePoC(proxy ...string)
```

从默认的 nuclei 模板仓库拉取最新模板并更新到本地数据库

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `...string` | 可选，拉取时使用的代理地址 |

**示例**

``````````````yak
// 该示例为示意性用法：更新 nuclei 模板库
nuclei.UpdatePoC()
``````````````

---

### excludeTags {#excludetags}

```go
excludeTags(i ...any) any
```

兼容保留选项：按标签排除模板。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.excludeTags("dos"))
die(err)
``````````````

---

### excludeTemplates {#excludetemplates}

```go
excludeTemplates(s ...string) ConfigOption
```

设置扫描时需要排除的模板名称，可传入一个或多个

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `...string` | 一个或多个需要排除的模板名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：排除指定模板
res, err = nuclei.Scan("http://example.com", nuclei.all(true), nuclei.excludeTemplates("noisy-template"))
die(err)
``````````````

---

### fuzzQueryTemplate {#fuzzquerytemplate}

```go
fuzzQueryTemplate(s ...string) ConfigOption
```

设置按关键词模糊查询并选择匹配的模板

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `...string` | 一个或多个用于模糊查询模板的关键词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：按关键词模糊匹配模板
res, err = nuclei.Scan("http://example.com", nuclei.fuzzQueryTemplate("weblogic"))
die(err)
``````````````

---

### headers {#headers}

```go
headers(i ...any) any
```

兼容保留选项：设置自定义请求头。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.headers("X-Test: 1"))
die(err)
``````````````

---

### headless {#headless}

```go
headless(i ...any) any
```

兼容保留选项：启用 headless 浏览器模板。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.headless(true))
die(err)
``````````````

---

### logFile {#logfile}

```go
logFile(i ...any) any
```

兼容保留选项：指定日志文件。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.logFile("/tmp/scan.log"))
die(err)
``````````````

---

### metrics {#metrics}

```go
metrics(i ...any) any
```

兼容保留选项：开启运行指标。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.metrics(true))
die(err)
``````````````

---

### newTemplates {#newtemplates}

```go
newTemplates(i ...any) any
```

兼容保留选项：仅运行新增模板。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.newTemplates(true))
die(err)
``````````````

---

### noColor {#nocolor}

```go
noColor(i ...any) any
```

兼容保留选项：禁用彩色输出。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.noColor(true))
die(err)
``````````````

---

### noMeta {#nometa}

```go
noMeta(i ...any) any
```

兼容保留选项：不显示元数据。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.noMeta(true))
die(err)
``````````````

---

### output {#output}

```go
output(i ...any) any
```

兼容保留选项：指定结果输出文件。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.output("/tmp/result.txt"))
die(err)
``````````````

---

### proxy {#proxy}

```go
proxy(proxy ...string) LowhttpOpt
```

设置 nuclei 扫描时使用的代理服务器，可传入多个代理（依次尝试）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `...string` | 一个或多个代理地址（如 &#34;http&#58;//127.0.0.1:8080&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：通过本地代理扫描目标
res, err = nuclei.Scan("http://example.com", nuclei.proxy("http://127.0.0.1:8080"))
die(err)
``````````````

---

### reportingConfig {#reportingconfig}

```go
reportingConfig(i ...any) any
```

兼容保留选项：指定报告配置文件。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.reportingConfig("report.yaml"))
die(err)
``````````````

---

### reportingDB {#reportingdb}

```go
reportingDB(i ...any) any
```

兼容保留选项：指定报告数据库。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.reportingDB("report.db"))
die(err)
``````````````

---

### reverseUrl {#reverseurl}

```go
reverseUrl(i ...any) any
```

兼容保留选项：指定反连地址。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.reverseUrl("http://oob.example.com"))
die(err)
``````````````

---

### severity {#severity}

```go
severity(i ...any) any
```

兼容保留选项：按严重级别过滤模板。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.severity("high"))
die(err)
``````````````

---

### showBrowser {#showbrowser}

```go
showBrowser(i ...any) any
```

兼容保留选项：headless 扫描时显示浏览器。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.showBrowser(true))
die(err)
``````````````

---

### silent {#silent}

```go
silent(i ...any) any
```

兼容保留选项：静默模式。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.silent(true))
die(err)
``````````````

---

### stopAtFirstMatch {#stopatfirstmatch}

```go
stopAtFirstMatch(i ...any) any
```

兼容保留选项：命中首个匹配后停止。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.stopAtFirstMatch(true))
die(err)
``````````````

---

### systemDnsResolver {#systemdnsresolver}

```go
systemDnsResolver(i ...any) any
```

兼容保留选项：使用系统 DNS 解析。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.systemDnsResolver(true))
die(err)
``````````````

---

### tags {#tags}

```go
tags(f ...string) ConfigOption
```

设置仅运行带有指定标签的模板，可传入一个或多个标签

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `...string` | 一个或多个模板标签，例如 cve、rce |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：按标签筛选模板
res, err = nuclei.Scan("http://example.com", nuclei.tags("cve", "rce"))
die(err)
``````````````

---

### templateList {#templatelist}

```go
templateList(i ...any) any
```

兼容保留选项：列出模板。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.templateList(true))
die(err)
``````````````

---

### templates {#templates}

```go
templates(s ...string) ConfigOption
```

设置按名称选择要运行的模板，可传入一个或多个模板名称

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `...string` | 一个或多个模板名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：按名称选择模板
res, err = nuclei.Scan("http://example.com", nuclei.templates("template-name-1", "template-name-2"))
die(err)
``````````````

---

### templatesDir {#templatesdir}

```go
templatesDir(i ...any) any
```

兼容保留选项：指定模板目录。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.templatesDir("/tmp/templates"))
die(err)
``````````````

---

### templatesVersion {#templatesversion}

```go
templatesVersion(i ...any) any
```

兼容保留选项：指定模板版本。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.templatesVersion("v9"))
die(err)
``````````````

---

### updateTemplates {#updatetemplates}

```go
updateTemplates(i ...any) any
```

兼容保留选项：更新模板。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.updateTemplates(true))
die(err)
``````````````

---

### version {#version}

```go
version(i ...any) any
```

兼容保留选项：打印版本信息。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.version(true))
die(err)
``````````````

---

### workflows {#workflows}

```go
workflows(i ...any) any
```

兼容保留选项：指定 nuclei 工作流。当前为无操作(no-op)，不影响扫描行为

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 兼容保留参数，会被忽略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |

**示例**

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.workflows("workflow.yaml"))
die(err)
``````````````

---

