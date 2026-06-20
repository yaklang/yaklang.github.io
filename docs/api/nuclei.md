# nuclei

|函数名|函数描述/介绍|
|:------|:--------|
| [nuclei.AllPoC](#allpoc) |AllPoC 获取本地当前已加载的全部 nuclei 模板(PoC)描述信息 参数: - defaultDirs: 可选，指定模板所在目录，不传时使用默认模板目录 返回值: - []*templateDesc: 模板描述信息列表 - error: 读取失败时返回错误|
| [nuclei.GetPoCDir](#getpocdir) |GetPoCDir 获取本地 nuclei 模板(PoC)的默认存放目录 返回值: - string: 本地 nuclei 模板目录路径|
| [nuclei.PocVulToRisk](#pocvultorisk) |PocVulToRisk 将一个 PoC 漏洞结果(PocVul)转换为标准的 Risk 风险结构 参数: - p: PoC 漏洞结果对象 返回值: - *schema.Risk: 转换后的 Risk 风险对象|
| [nuclei.PullDatabase](#pulldatabase) |PullDatabase 从指定的 Git 仓库拉取 nuclei 模板到本地模板目录 参数: - giturl: nuclei 模板 Git 仓库地址 - proxy: 可选，拉取时使用的代理地址 返回值: - string: 拉取后本地模板目录路径 - error: 拉取失败时返回错误|
| [nuclei.RemoveDatabase](#removedatabase) |RemoveDatabase 从数据库中删除所有来自本地的 nuclei PoC 模板 返回值: - error: 删除失败时返回错误|
| [nuclei.Scan](#scan) |Scan 对目标执行 nuclei 模板扫描，以 channel 形式流式返回扫描发现的漏洞结果 参数: - target: 扫描目标，支持字符串、字节数组或目标集合 - opt: 零个或多个 nuclei 扫描配置选项 返回值: - chan *PocVul: 漏洞结果管道，可迭代获取每个命中漏洞...|
| [nuclei.ScanAuto](#scanauto) |ScanAuto 自动识别输入目标类型(原始请求、URL、主机等)并批量执行 nuclei 模板扫描 参数: - items: 扫描目标，支持字符串、字节数组或可遍历的目标集合 - opt: 零个或多个 nuclei 扫描配置选项|
| [nuclei.UpdateDatabase](#updatedatabase) |UpdateDatabase 将本地 nuclei 模板目录中的 yaml PoC 加载并更新到数据库 参数: - nucleiDir: 可选，模板目录，不传时使用默认模板目录 返回值: - error: 加载失败时返回错误|
| [nuclei.UpdatePoC](#updatepoc) |UpdatePoC 从默认的 nuclei 模板仓库拉取最新模板并更新到本地数据库 参数: - proxy: 可选，拉取时使用的代理地址|
| [nuclei.all](#all) |all 设置是否使用全部本地模板进行扫描 参数: - b: 是否使用全部模板 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.bulkSize](#bulksize) |bulkSize 设置同时执行的模板并发数 参数: - i: 同时执行的模板数量 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.context](#context) |context 设置 nuclei 扫描使用的 context，用于取消或超时控制 参数: - c: 上下文对象 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.customVulnFilter](#customvulnfilter) |customVulnFilter 设置一个自定义的漏洞去重过滤器，用于控制扫描结果的去重逻辑 参数: - f: 实现了 Filterable 接口的过滤器 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.debug](#debug) |debug 设置是否开启调试模式，开启后会同时打印请求与响应报文 参数: - b: 是否开启调试模式 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.debugRequest](#debugrequest) |debugRequest 设置是否打印调试请求报文 参数: - b: 是否打印请求报文 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.debugResponse](#debugresponse) |debugResponse 设置是否打印调试响应报文 参数: - b: 是否打印响应报文 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.dnsResolver](#dnsresolver) |dnsResolver 指定 nuclei 扫描时使用的自定义 DNS 服务器列表，用于解析目标域名 参数: - servers: DNS 服务器地址列表（如 [&#34;8.8.8.8&#34;, &#34;1.1.1.1&#34;]） 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.enableReverseConnection](#enablereverseconnection) |enableReverseConnection 设置是否启用反连(OOB)检测功能，用于检测无回显漏洞 参数: - b: 是否启用反连检测 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.exactTemplateIns](#exacttemplateins) |exactTemplateIns 设置使用一个精确的 YakScript 模板实例进行扫描 参数: - script: YakScript 模板实例 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.excludeTags](#excludetags) |excludeTags 兼容保留选项：按标签排除模板。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.excludeTemplates](#excludetemplates) |excludeTemplates 设置扫描时需要排除的模板名称，可传入一个或多个 参数: - s: 一个或多个需要排除的模板名称 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.fromPlugin](#fromplugin) |fromPlugin 标记本次 nuclei 扫描请求的来源插件名称，便于在结果中追踪请求出处 参数: - fromPlugin: 来源插件名称 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.fuzzQueryTemplate](#fuzzquerytemplate) |fuzzQueryTemplate 设置按关键词模糊查询并选择匹配的模板 参数: - s: 一个或多个用于模糊查询模板的关键词 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.headers](#headers) |headers 兼容保留选项：设置自定义请求头。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.headless](#headless) |headless 兼容保留选项：启用 headless 浏览器模板。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.http2](#http2) |http2 设置 nuclei 扫描是否启用 HTTP/2 协议发送请求 参数: - Http2: 为 true 时启用 HTTP/2 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.http3](#http3) |http3 设置 nuclei 扫描是否启用 HTTP/3 协议发送请求 参数: - http3: 为 true 时启用 HTTP/3 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.https](#https) |https 设置 nuclei 扫描是否使用 HTTPS 协议访问目标 参数: - https: 为 true 时使用 HTTPS 访问目标 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.interactshTimeout](#interactshtimeout) |interactshTimeout 设置反连(OOB)平台等待回连结果的超时时间 参数: - f: 超时时间，单位为秒 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.logFile](#logfile) |logFile 兼容保留选项：指定日志文件。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.metrics](#metrics) |metrics 兼容保留选项：开启运行指标。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.mockHTTPRequest](#mockhttprequest) |mockHTTPRequest 设置一个自定义的 HTTP 请求模拟函数，用于在不发起真实请求的情况下测试模板 参数: - f: 模拟请求处理函数，接收是否 HTTPS、URL、原始请求与设置响应的回调 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.mode](#mode) |mode 设置扫描模式，目前主要支持 nuclei 模式 参数: - s: 扫描模式字符串，例如 &#34;nuclei&#34; 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.newTemplates](#newtemplates) |newTemplates 兼容保留选项：仅运行新增模板。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.noColor](#nocolor) |noColor 兼容保留选项：禁用彩色输出。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.noInteractsh](#nointeractsh) |noInteractsh 设置是否禁用 interactsh 反连检测，传入 true 表示禁用 参数: - b: 是否禁用 interactsh 反连检测 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.noMeta](#nometa) |noMeta 兼容保留选项：不显示元数据。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.output](#output) |output 兼容保留选项：指定结果输出文件。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.pageTimeout](#pagetimeout) |timeout 设置 nuclei 扫描中单个请求的超时时间 参数: - i: 超时时间，单位为秒 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.proxy](#proxy) |proxy 设置 nuclei 扫描时使用的代理服务器，可传入多个代理（依次尝试） 参数: - proxy: 一个或多个代理地址（如 &#34;http://127.0.0.1:8080&#34;） 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.rateLimit](#ratelimit) |rateLimit 设置 nuclei 扫描的发包速率限制，控制每次请求之间的等待时间 参数: - i: 请求间等待时间，单位为秒 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.rawTemplate](#rawtemplate) |rawTemplate 设置直接使用传入的单个 nuclei 模板原始内容进行扫描 参数: - b: nuclei 模板的原始字符串内容 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.reportingConfig](#reportingconfig) |reportingConfig 兼容保留选项：指定报告配置文件。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.reportingDB](#reportingdb) |reportingDB 兼容保留选项：指定报告数据库。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.resultCallback](#resultcallback) |resultCallback 设置 HTTP 模板命中时的结果回调函数 参数: - handler: 回调函数，入参为包含 template、requests、responses、match 等键的结果字典 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.retry](#retry) |retry 设置 nuclei 扫描中单个请求失败后的最大重试次数 参数: - retryTimes: 最大重试次数 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.reverseUrl](#reverseurl) |reverseUrl 兼容保留选项：指定反连地址。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.runtimeId](#runtimeid) |runtimeId 设置本次 nuclei 扫描的运行时 ID，用于关联扫描任务与结果 参数: - id: 运行时 ID 字符串 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.severity](#severity) |severity 兼容保留选项：按严重级别过滤模板。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.showBrowser](#showbrowser) |showBrowser 兼容保留选项：headless 扫描时显示浏览器。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.silent](#silent) |silent 兼容保留选项：静默模式。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.stopAtFirstMatch](#stopatfirstmatch) |stopAtFirstMatch 兼容保留选项：命中首个匹配后停止。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.systemDnsResolver](#systemdnsresolver) |systemDnsResolver 兼容保留选项：使用系统 DNS 解析。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.tags](#tags) |tags 设置仅运行带有指定标签的模板，可传入一个或多个标签 参数: - f: 一个或多个模板标签，例如 cve、rce 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.targetConcurrent](#targetconcurrent) |targetConcurrent 设置同时扫描的目标并发数 参数: - i: 目标并发数 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.tcpResultCallback](#tcpresultcallback) |tcpResultCallback 设置 TCP 模板命中时的结果回调函数 参数: - handler: 回调函数，入参为包含 template、requests、responses、match 等键的结果字典 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.templateList](#templatelist) |templateList 兼容保留选项：列出模板。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.templates](#templates) |templates 设置按名称选择要运行的模板，可传入一个或多个模板名称 参数: - s: 一个或多个模板名称 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.templatesDir](#templatesdir) |templatesDir 兼容保留选项：指定模板目录。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.templatesThreads](#templatesthreads) |templatesThreads 设置单个模板内部的执行并发数 参数: - i: 单个模板内部的并发数 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.templatesVersion](#templatesversion) |templatesVersion 兼容保留选项：指定模板版本。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.timeout](#timeout) |timeout 设置 nuclei 扫描中单个请求的超时时间 参数: - i: 超时时间，单位为秒 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.updateTemplates](#updatetemplates) |updateTemplates 兼容保留选项：更新模板。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.vars](#vars) |vars 设置 nuclei 扫描时使用的自定义变量，会注入到模板渲染过程中 参数: - raw: 自定义变量，通常为 map 结构 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.verbose](#verbose) |verbose 设置是否开启详细日志输出，打印每个模板的执行过程 参数: - b: 是否开启详细日志 返回值: - 一个 nuclei.Scan 可接收的配置选项|
| [nuclei.version](#version) |version 兼容保留选项：打印版本信息。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|
| [nuclei.workflows](#workflows) |workflows 兼容保留选项：指定 nuclei 工作流。当前为无操作(no-op)，不影响扫描行为 参数: - i: 兼容保留参数，会被忽略 返回值: - 一个 nuclei.Scan 可接收的配置选项（空操作）|


## 函数定义
### AllPoC

#### 详细描述
AllPoC 获取本地当前已加载的全部 nuclei 模板(PoC)描述信息

参数:

  - defaultDirs: 可选，指定模板所在目录，不传时使用默认模板目录



返回值:

  - []*templateDesc: 模板描述信息列表

  - error: 读取失败时返回错误




Example:

``````````````yak
// 该示例为示意性用法：列出本地所有 nuclei 模板
pocs, err = nuclei.AllPoC()
die(err)
println(len(pocs))
``````````````


#### 定义

`AllPoC(defaultDirs ...string) ([]*templateDesc, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| defaultDirs | `...string` | 可选，指定模板所在目录，不传时使用默认模板目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*templateDesc` | []*templateDesc: 模板描述信息列表 |
| r2 | `error` | 读取失败时返回错误 |


### GetPoCDir

#### 详细描述
GetPoCDir 获取本地 nuclei 模板(PoC)的默认存放目录

返回值:

  - string: 本地 nuclei 模板目录路径




Example:

``````````````yak
// 该示例为示意性用法：获取本地模板目录
dir = nuclei.GetPoCDir()
println(dir)
``````````````


#### 定义

`GetPoCDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 本地 nuclei 模板目录路径 |


### PocVulToRisk

#### 详细描述
PocVulToRisk 将一个 PoC 漏洞结果(PocVul)转换为标准的 Risk 风险结构

参数:

  - p: PoC 漏洞结果对象



返回值:

  - *schema.Risk: 转换后的 Risk 风险对象




Example:

``````````````yak
// 该示例为示意性用法：将扫描结果转换为 Risk
res, err = nuclei.Scan("http://example.com", nuclei.all(true))
die(err)

	for vul = range res {
	    risk = nuclei.PocVulToRisk(vul)
	    println(risk.Title)
	}
``````````````


#### 定义

`PocVulToRisk(p *PocVul) *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `*PocVul` | PoC 漏洞结果对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` | *schema.Risk: 转换后的 Risk 风险对象 |


### PullDatabase

#### 详细描述
PullDatabase 从指定的 Git 仓库拉取 nuclei 模板到本地模板目录

参数:

  - giturl: nuclei 模板 Git 仓库地址

  - proxy: 可选，拉取时使用的代理地址



返回值:

  - string: 拉取后本地模板目录路径

  - error: 拉取失败时返回错误




Example:

``````````````yak
// 该示例为示意性用法：从 Git 仓库拉取模板
dir, err = nuclei.PullDatabase("https://github.com/projectdiscovery/nuclei-templates")
die(err)
println(dir)
``````````````


#### 定义

`PullDatabase(giturl string, proxy ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| giturl | `string` | nuclei 模板 Git 仓库地址 |
| proxy | `...string` | 可选，拉取时使用的代理地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 拉取后本地模板目录路径 |
| r2 | `error` | 拉取失败时返回错误 |


### RemoveDatabase

#### 详细描述
RemoveDatabase 从数据库中删除所有来自本地的 nuclei PoC 模板

返回值:

  - error: 删除失败时返回错误




Example:

``````````````yak
// 该示例为示意性用法：清空数据库中的本地 nuclei 模板
err = nuclei.RemoveDatabase()
die(err)
``````````````


#### 定义

`RemoveDatabase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 删除失败时返回错误 |


### Scan

#### 详细描述
Scan 对目标执行 nuclei 模板扫描，以 channel 形式流式返回扫描发现的漏洞结果

参数:

  - target: 扫描目标，支持字符串、字节数组或目标集合

  - opt: 零个或多个 nuclei 扫描配置选项



返回值:

  - chan *PocVul: 漏洞结果管道，可迭代获取每个命中漏洞

  - error: 启动失败时返回错误




Example:

``````````````yak
// 该示例为示意性用法：使用全部模板扫描目标
res, err = nuclei.Scan("http://example.com", nuclei.all(true))
die(err)

	for vul = range res {
	    println(vul.Target, vul.PocName)
	}
``````````````


#### 定义

`Scan(target any, opt ...any) (chan *tools.PocVul, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `any` | 扫描目标，支持字符串、字节数组或目标集合 |
| opt | `...any` | 零个或多个 nuclei 扫描配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *tools.PocVul` | chan *PocVul: 漏洞结果管道，可迭代获取每个命中漏洞 |
| r2 | `error` | 启动失败时返回错误 |


### ScanAuto

#### 详细描述
ScanAuto 自动识别输入目标类型(原始请求、URL、主机等)并批量执行 nuclei 模板扫描

参数:

  - items: 扫描目标，支持字符串、字节数组或可遍历的目标集合

  - opt: 零个或多个 nuclei 扫描配置选项




Example:

``````````````yak
// 该示例为示意性用法：自动批量扫描多个目标
nuclei.ScanAuto(["http://example.com", "http://test.com"], nuclei.all(true))
``````````````


#### 定义

`ScanAuto(items any, opt ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| items | `any` | 扫描目标，支持字符串、字节数组或可遍历的目标集合 |
| opt | `...any` | 零个或多个 nuclei 扫描配置选项 |


### UpdateDatabase

#### 详细描述
UpdateDatabase 将本地 nuclei 模板目录中的 yaml PoC 加载并更新到数据库

参数:

  - nucleiDir: 可选，模板目录，不传时使用默认模板目录



返回值:

  - error: 加载失败时返回错误




Example:

``````````````yak
// 该示例为示意性用法：将本地模板更新到数据库
err = nuclei.UpdateDatabase()
die(err)
``````````````


#### 定义

`UpdateDatabase(nucleiDir ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| nucleiDir | `...string` | 可选，模板目录，不传时使用默认模板目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 加载失败时返回错误 |


### UpdatePoC

#### 详细描述
UpdatePoC 从默认的 nuclei 模板仓库拉取最新模板并更新到本地数据库

参数:

  - proxy: 可选，拉取时使用的代理地址




Example:

``````````````yak
// 该示例为示意性用法：更新 nuclei 模板库
nuclei.UpdatePoC()
``````````````


#### 定义

`UpdatePoC(proxy ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `...string` | 可选，拉取时使用的代理地址 |


### all

#### 详细描述
all 设置是否使用全部本地模板进行扫描

参数:

  - b: 是否使用全部模板



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用全部模板扫描
res, err = nuclei.Scan("http://example.com", nuclei.all(true))
die(err)
``````````````


#### 定义

`all(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用全部模板 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### bulkSize

#### 详细描述
bulkSize 设置同时执行的模板并发数

参数:

  - i: 同时执行的模板数量



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置模板并发数
res, err = nuclei.Scan("http://example.com", nuclei.bulkSize(20))
die(err)
``````````````


#### 定义

`bulkSize(i int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 同时执行的模板数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### context

#### 详细描述
context 设置 nuclei 扫描使用的 context，用于取消或超时控制

参数:

  - c: 上下文对象



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用可取消的 context 控制扫描
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
res, err = nuclei.Scan("http://example.com", nuclei.context(ctx))
die(err)
``````````````


#### 定义

`context(c context.Context) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### customVulnFilter

#### 详细描述
customVulnFilter 设置一个自定义的漏洞去重过滤器，用于控制扫描结果的去重逻辑

参数:

  - f: 实现了 Filterable 接口的过滤器



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置自定义漏洞过滤器
res, err = nuclei.Scan("http://example.com", nuclei.customVulnFilter(filter.NewFilter()))
die(err)
``````````````


#### 定义

`customVulnFilter(f filter.Filterable) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `filter.Filterable` | 实现了 Filterable 接口的过滤器 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### debug

#### 详细描述
debug 设置是否开启调试模式，开启后会同时打印请求与响应报文

参数:

  - b: 是否开启调试模式



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启调试模式
res, err = nuclei.Scan("http://example.com", nuclei.debug(true))
die(err)
``````````````


#### 定义

`debug(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否开启调试模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### debugRequest

#### 详细描述
debugRequest 设置是否打印调试请求报文

参数:

  - b: 是否打印请求报文



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：打印请求报文
res, err = nuclei.Scan("http://example.com", nuclei.debugRequest(true))
die(err)
``````````````


#### 定义

`debugRequest(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否打印请求报文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### debugResponse

#### 详细描述
debugResponse 设置是否打印调试响应报文

参数:

  - b: 是否打印响应报文



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：打印响应报文
res, err = nuclei.Scan("http://example.com", nuclei.debugResponse(true))
die(err)
``````````````


#### 定义

`debugResponse(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否打印响应报文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### dnsResolver

#### 详细描述
dnsResolver 指定 nuclei 扫描时使用的自定义 DNS 服务器列表，用于解析目标域名



参数:

  - servers: DNS 服务器地址列表（如 [&#34;8.8.8.8&#34;, &#34;1.1.1.1&#34;]）



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用指定 DNS 服务器解析目标
res, err = nuclei.Scan("http://example.com", nuclei.dnsResolver(["8.8.8.8", "1.1.1.1"]))
die(err)
``````````````


#### 定义

`dnsResolver(servers []string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `[]string` | DNS 服务器地址列表（如 [&#34;8.8.8.8&#34;, &#34;1.1.1.1&#34;]） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### enableReverseConnection

#### 详细描述
enableReverseConnection 设置是否启用反连(OOB)检测功能，用于检测无回显漏洞

参数:

  - b: 是否启用反连检测



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启反连检测
res, err = nuclei.Scan("http://example.com", nuclei.enableReverseConnection(true))
die(err)
``````````````


#### 定义

`enableReverseConnection(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用反连检测 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### exactTemplateIns

#### 详细描述
exactTemplateIns 设置使用一个精确的 YakScript 模板实例进行扫描

参数:

  - script: YakScript 模板实例



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用精确模板实例
res, err = nuclei.Scan("http://example.com", nuclei.exactTemplateIns(scriptIns))
die(err)
``````````````


#### 定义

`exactTemplateIns(script *schema.YakScript) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| script | `*schema.YakScript` | YakScript 模板实例 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### excludeTags

#### 详细描述
excludeTags 兼容保留选项：按标签排除模板。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.excludeTags("dos"))
die(err)
``````````````


#### 定义

`excludeTags(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### excludeTemplates

#### 详细描述
excludeTemplates 设置扫描时需要排除的模板名称，可传入一个或多个

参数:

  - s: 一个或多个需要排除的模板名称



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：排除指定模板
res, err = nuclei.Scan("http://example.com", nuclei.all(true), nuclei.excludeTemplates("noisy-template"))
die(err)
``````````````


#### 定义

`excludeTemplates(s ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `...string` | 一个或多个需要排除的模板名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### fromPlugin

#### 详细描述
fromPlugin 标记本次 nuclei 扫描请求的来源插件名称，便于在结果中追踪请求出处



参数:

  - fromPlugin: 来源插件名称



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：标记扫描请求来源插件
res, err = nuclei.Scan("http://example.com", nuclei.fromPlugin("my-plugin"))
die(err)
``````````````


#### 定义

`fromPlugin(fromPlugin string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` | 来源插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### fuzzQueryTemplate

#### 详细描述
fuzzQueryTemplate 设置按关键词模糊查询并选择匹配的模板

参数:

  - s: 一个或多个用于模糊查询模板的关键词



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：按关键词模糊匹配模板
res, err = nuclei.Scan("http://example.com", nuclei.fuzzQueryTemplate("weblogic"))
die(err)
``````````````


#### 定义

`fuzzQueryTemplate(s ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `...string` | 一个或多个用于模糊查询模板的关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### headers

#### 详细描述
headers 兼容保留选项：设置自定义请求头。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.headers("X-Test: 1"))
die(err)
``````````````


#### 定义

`headers(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### headless

#### 详细描述
headless 兼容保留选项：启用 headless 浏览器模板。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.headless(true))
die(err)
``````````````


#### 定义

`headless(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### http2

#### 详细描述
http2 设置 nuclei 扫描是否启用 HTTP/2 协议发送请求



参数:

  - Http2: 为 true 时启用 HTTP/2



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 HTTP/2 扫描目标
res, err = nuclei.Scan("https://example.com", nuclei.http2(true))
die(err)
``````````````


#### 定义

`http2(Http2 bool) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| Http2 | `bool` | 为 true 时启用 HTTP/2 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### http3

#### 详细描述
http3 设置 nuclei 扫描是否启用 HTTP/3 协议发送请求



参数:

  - http3: 为 true 时启用 HTTP/3



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 HTTP/3 扫描目标
res, err = nuclei.Scan("https://example.com", nuclei.http3(true))
die(err)
``````````````


#### 定义

`http3(http3 bool) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| http3 | `bool` | 为 true 时启用 HTTP/3 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### https

#### 详细描述
https 设置 nuclei 扫描是否使用 HTTPS 协议访问目标



参数:

  - https: 为 true 时使用 HTTPS 访问目标



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：强制使用 HTTPS 扫描目标
res, err = nuclei.Scan("example.com", nuclei.https(true))
die(err)
``````````````


#### 定义

`https(https bool) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| https | `bool` | 为 true 时使用 HTTPS 访问目标 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### interactshTimeout

#### 详细描述
interactshTimeout 设置反连(OOB)平台等待回连结果的超时时间

参数:

  - f: 超时时间，单位为秒



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置反连等待超时
res, err = nuclei.Scan("http://example.com", nuclei.enableReverseConnection(true), nuclei.interactshTimeout(10))
die(err)
``````````````


#### 定义

`interactshTimeout(f float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### logFile

#### 详细描述
logFile 兼容保留选项：指定日志文件。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.logFile("/tmp/scan.log"))
die(err)
``````````````


#### 定义

`logFile(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### metrics

#### 详细描述
metrics 兼容保留选项：开启运行指标。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.metrics(true))
die(err)
``````````````


#### 定义

`metrics(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### mockHTTPRequest

#### 详细描述
mockHTTPRequest 设置一个自定义的 HTTP 请求模拟函数，用于在不发起真实请求的情况下测试模板

参数:

  - f: 模拟请求处理函数，接收是否 HTTPS、URL、原始请求与设置响应的回调



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用自定义请求模拟函数
res, err = nuclei.Scan("http://example.com", nuclei.mockHTTPRequest(func(isHttps, url, req, setRsp) { setRsp("HTTP/1.1 200 OK\r\n\r\n") }))
die(err)
``````````````


#### 定义

`mockHTTPRequest(f func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))` | 模拟请求处理函数，接收是否 HTTPS、URL、原始请求与设置响应的回调 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### mode

#### 详细描述
mode 设置扫描模式，目前主要支持 nuclei 模式

参数:

  - s: 扫描模式字符串，例如 &#34;nuclei&#34;



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置扫描模式
res, err = nuclei.Scan("http://example.com", nuclei.mode("nuclei"))
die(err)
``````````````


#### 定义

`mode(s string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 扫描模式字符串，例如 &#34;nuclei&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### newTemplates

#### 详细描述
newTemplates 兼容保留选项：仅运行新增模板。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.newTemplates(true))
die(err)
``````````````


#### 定义

`newTemplates(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### noColor

#### 详细描述
noColor 兼容保留选项：禁用彩色输出。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.noColor(true))
die(err)
``````````````


#### 定义

`noColor(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### noInteractsh

#### 详细描述
noInteractsh 设置是否禁用 interactsh 反连检测，传入 true 表示禁用

参数:

  - b: 是否禁用 interactsh 反连检测



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：禁用反连检测
res, err = nuclei.Scan("http://example.com", nuclei.noInteractsh(true))
die(err)
``````````````


#### 定义

`noInteractsh(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁用 interactsh 反连检测 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### noMeta

#### 详细描述
noMeta 兼容保留选项：不显示元数据。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.noMeta(true))
die(err)
``````````````


#### 定义

`noMeta(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### output

#### 详细描述
output 兼容保留选项：指定结果输出文件。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.output("/tmp/result.txt"))
die(err)
``````````````


#### 定义

`output(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### pageTimeout

#### 详细描述
timeout 设置 nuclei 扫描中单个请求的超时时间

参数:

  - i: 超时时间，单位为秒



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置请求超时
res, err = nuclei.Scan("http://example.com", nuclei.timeout(10))
die(err)
``````````````


#### 定义

`pageTimeout(i float64) lowhttp.LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowhttp.LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### proxy

#### 详细描述
proxy 设置 nuclei 扫描时使用的代理服务器，可传入多个代理（依次尝试）



参数:

  - proxy: 一个或多个代理地址（如 &#34;http://127.0.0.1:8080&#34;）



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：通过本地代理扫描目标
res, err = nuclei.Scan("http://example.com", nuclei.proxy("http://127.0.0.1:8080"))
die(err)
``````````````


#### 定义

`proxy(proxy ...string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `...string` | 一个或多个代理地址（如 &#34;http://127.0.0.1:8080&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### rateLimit

#### 详细描述
rateLimit 设置 nuclei 扫描的发包速率限制，控制每次请求之间的等待时间

参数:

  - i: 请求间等待时间，单位为秒



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：限制发包速率
res, err = nuclei.Scan("http://example.com", nuclei.rateLimit(0.5))
die(err)
``````````````


#### 定义

`rateLimit(i float64) lowhttp.LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 请求间等待时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowhttp.LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### rawTemplate

#### 详细描述
rawTemplate 设置直接使用传入的单个 nuclei 模板原始内容进行扫描

参数:

  - b: nuclei 模板的原始字符串内容



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用原始模板内容扫描
res, err = nuclei.Scan("http://example.com", nuclei.rawTemplate(templateContent))
die(err)
``````````````


#### 定义

`rawTemplate(b string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `string` | nuclei 模板的原始字符串内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### reportingConfig

#### 详细描述
reportingConfig 兼容保留选项：指定报告配置文件。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.reportingConfig("report.yaml"))
die(err)
``````````````


#### 定义

`reportingConfig(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### reportingDB

#### 详细描述
reportingDB 兼容保留选项：指定报告数据库。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.reportingDB("report.db"))
die(err)
``````````````


#### 定义

`reportingDB(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### resultCallback

#### 详细描述
resultCallback 设置 HTTP 模板命中时的结果回调函数

参数:

  - handler: 回调函数，入参为包含 template、requests、responses、match 等键的结果字典



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置结果回调
res, err = nuclei.Scan("http://example.com", nuclei.resultCallback(func(i) { println(i["match"]) }))
die(err)
``````````````


#### 定义

`resultCallback(handler func(i map[string]any)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(i map[string]any)` | 回调函数，入参为包含 template、requests、responses、match 等键的结果字典 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### retry

#### 详细描述
retry 设置 nuclei 扫描中单个请求失败后的最大重试次数



参数:

  - retryTimes: 最大重试次数



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：请求失败时最多重试 3 次
res, err = nuclei.Scan("http://example.com", nuclei.retry(3))
die(err)
``````````````


#### 定义

`retry(retryTimes int) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| retryTimes | `int` | 最大重试次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### reverseUrl

#### 详细描述
reverseUrl 兼容保留选项：指定反连地址。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.reverseUrl("http://oob.example.com"))
die(err)
``````````````


#### 定义

`reverseUrl(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### runtimeId

#### 详细描述
runtimeId 设置本次 nuclei 扫描的运行时 ID，用于关联扫描任务与结果

参数:

  - id: 运行时 ID 字符串



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置运行时 ID
res, err = nuclei.Scan("http://example.com", nuclei.runtimeId("task-001"))
die(err)
``````````````


#### 定义

`runtimeId(id string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | 运行时 ID 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### severity

#### 详细描述
severity 兼容保留选项：按严重级别过滤模板。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.severity("high"))
die(err)
``````````````


#### 定义

`severity(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### showBrowser

#### 详细描述
showBrowser 兼容保留选项：headless 扫描时显示浏览器。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.showBrowser(true))
die(err)
``````````````


#### 定义

`showBrowser(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### silent

#### 详细描述
silent 兼容保留选项：静默模式。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.silent(true))
die(err)
``````````````


#### 定义

`silent(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### stopAtFirstMatch

#### 详细描述
stopAtFirstMatch 兼容保留选项：命中首个匹配后停止。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.stopAtFirstMatch(true))
die(err)
``````````````


#### 定义

`stopAtFirstMatch(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### systemDnsResolver

#### 详细描述
systemDnsResolver 兼容保留选项：使用系统 DNS 解析。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.systemDnsResolver(true))
die(err)
``````````````


#### 定义

`systemDnsResolver(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### tags

#### 详细描述
tags 设置仅运行带有指定标签的模板，可传入一个或多个标签

参数:

  - f: 一个或多个模板标签，例如 cve、rce



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：按标签筛选模板
res, err = nuclei.Scan("http://example.com", nuclei.tags("cve", "rce"))
die(err)
``````````````


#### 定义

`tags(f ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `...string` | 一个或多个模板标签，例如 cve、rce |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### targetConcurrent

#### 详细描述
targetConcurrent 设置同时扫描的目标并发数

参数:

  - i: 目标并发数



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置目标并发
res, err = nuclei.Scan("http://example.com", nuclei.targetConcurrent(10))
die(err)
``````````````


#### 定义

`targetConcurrent(i int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 目标并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### tcpResultCallback

#### 详细描述
tcpResultCallback 设置 TCP 模板命中时的结果回调函数

参数:

  - handler: 回调函数，入参为包含 template、requests、responses、match 等键的结果字典



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 结果回调
res, err = nuclei.Scan("tcp://example.com:8080", nuclei.tcpResultCallback(func(i) { println(i["match"]) }))
die(err)
``````````````


#### 定义

`tcpResultCallback(handler func(i map[string]any)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(i map[string]any)` | 回调函数，入参为包含 template、requests、responses、match 等键的结果字典 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### templateList

#### 详细描述
templateList 兼容保留选项：列出模板。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.templateList(true))
die(err)
``````````````


#### 定义

`templateList(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### templates

#### 详细描述
templates 设置按名称选择要运行的模板，可传入一个或多个模板名称

参数:

  - s: 一个或多个模板名称



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：按名称选择模板
res, err = nuclei.Scan("http://example.com", nuclei.templates("template-name-1", "template-name-2"))
die(err)
``````````````


#### 定义

`templates(s ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `...string` | 一个或多个模板名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### templatesDir

#### 详细描述
templatesDir 兼容保留选项：指定模板目录。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.templatesDir("/tmp/templates"))
die(err)
``````````````


#### 定义

`templatesDir(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### templatesThreads

#### 详细描述
templatesThreads 设置单个模板内部的执行并发数

参数:

  - i: 单个模板内部的并发数



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置模板内部并发
res, err = nuclei.Scan("http://example.com", nuclei.templatesThreads(10))
die(err)
``````````````


#### 定义

`templatesThreads(i int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 单个模板内部的并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### templatesVersion

#### 详细描述
templatesVersion 兼容保留选项：指定模板版本。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.templatesVersion("v9"))
die(err)
``````````````


#### 定义

`templatesVersion(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### timeout

#### 详细描述
timeout 设置 nuclei 扫描中单个请求的超时时间

参数:

  - i: 超时时间，单位为秒



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置请求超时
res, err = nuclei.Scan("http://example.com", nuclei.timeout(10))
die(err)
``````````````


#### 定义

`timeout(i float64) lowhttp.LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowhttp.LowhttpOpt` | 一个 nuclei.Scan 可接收的配置选项 |


### updateTemplates

#### 详细描述
updateTemplates 兼容保留选项：更新模板。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.updateTemplates(true))
die(err)
``````````````


#### 定义

`updateTemplates(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### vars

#### 详细描述
vars 设置 nuclei 扫描时使用的自定义变量，会注入到模板渲染过程中

参数:

  - raw: 自定义变量，通常为 map 结构



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：注入自定义变量
res, err = nuclei.Scan("http://example.com", nuclei.vars({"username": "admin"}))
die(err)
``````````````


#### 定义

`vars(raw any) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 自定义变量，通常为 map 结构 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### verbose

#### 详细描述
verbose 设置是否开启详细日志输出，打印每个模板的执行过程

参数:

  - b: 是否开启详细日志



返回值:

  - 一个 nuclei.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启详细日志
res, err = nuclei.Scan("http://example.com", nuclei.verbose(true))
die(err)
``````````````


#### 定义

`verbose(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否开启详细日志 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 nuclei.Scan 可接收的配置选项 |


### version

#### 详细描述
version 兼容保留选项：打印版本信息。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.version(true))
die(err)
``````````````


#### 定义

`version(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


### workflows

#### 详细描述
workflows 兼容保留选项：指定 nuclei 工作流。当前为无操作(no-op)，不影响扫描行为



参数:

  - i: 兼容保留参数，会被忽略



返回值:

  - 一个 nuclei.Scan 可接收的配置选项（空操作）




Example:

``````````````yak
// 该选项当前为兼容保留的空操作，调用不会影响扫描行为，此处仅作示意
res, err = nuclei.Scan("http://example.com", nuclei.workflows("workflow.yaml"))
die(err)
``````````````


#### 定义

`workflows(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 兼容保留参数，会被忽略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 一个 nuclei.Scan 可接收的配置选项（空操作） |


