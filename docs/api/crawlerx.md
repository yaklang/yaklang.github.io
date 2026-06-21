# crawlerx {#library-crawlerx}

`crawlerx` 库是基于真实浏览器（CDP）的动态爬虫，能渲染 JS、自动填表、模拟登录、点击交互，适合 SPA/Vue 等强 JS 站点的深度爬取与攻击面发现。相比 HTTP 层的 `crawler`，它更贴近真实用户行为但更重。

典型使用场景：

- 启动爬取：`crawlerx.StartCrawler(url, opts...)` 返回 `ReqInfo` 的 channel；`crawlerx.PageScreenShot` 对页面截图；`crawlerx.OutputResult` 导出结果。
- 登录与会话：`crawlerx.loginUsername` / `crawlerx.loginPassword`、`crawlerx.cookies` / `crawlerx.rawCookie`、`crawlerx.localStorage` / `crawlerx.sessionStorage` 维持登录态，`crawlerx.formFill` / `crawlerx.fileInput` 自动填表单。
- 范围与隐蔽：`crawlerx.whitelist` / `crawlerx.blacklist`、`crawlerx.maxDepth` / `crawlerx.maxUrl`、`crawlerx.scanRangeLevel` / `crawlerx.scanRepeatLevel` 控制范围，`crawlerx.stealth` 反检测，`crawlerx.evalJs` 注入脚本。

与相邻库的关系：`crawlerx` 依赖 `browser` 提供的浏览器实例，与 HTTP 层 `crawler` 互为补充；产出的请求可入库（`db`）或交给 `poc`/`fuzz` 做后续测试。

> 共 41 个函数、9 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| AllDomainScan | `crawlerx.scanRangeLevel` | 0 |
| BoardDomain | `crawlerx.scanRangeLevel` | 3 |
| ExtremeRepeatLevel | `crawlerx.repeatLevel` | 4 |
| HighRepeatLevel | `crawlerx.repeatLevel` | 3 |
| LowRepeatLevel | `crawlerx.repeatLevel` | 1 |
| MediumRepeatLevel | `crawlerx.repeatLevel` | 2 |
| SubMenuScan | `crawlerx.scanRangeLevel` | 1 |
| UnLimitRepeat | `crawlerx.repeatLevel` | 0 |
| UnlimitedDomainScan | `crawlerx.scanRangeLevel` | 2 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [crawlerx.OutputResult](#outputresult) | `data []any, outputFile string` | `error` | 将channel中输出的爬虫结果保存在本地 |
| [crawlerx.aiInputInfo](#aiinputinfo) | `info string` | `ConfigOpt` | 设置提供给 AI 进行表单填充的背景信息(如业务上下文) |
| [crawlerx.aiInputUrl](#aiinputurl) | `url string` | `ConfigOpt` | 设置由 AI 辅助进行表单输入的目标页面 URL |
| [crawlerx.browserInfo](#browserinfo) | `data string` | `ConfigOpt` | 是一个请求选项 用于配制浏览器参数 |
| [crawlerx.concurrent](#concurrent) | `concurrent int` | `ConfigOpt` | 是一个请求选项 用于设置浏览器同时打开的最大页面数量 |
| [crawlerx.cookies](#cookies) | `domain string, cookiesInfo map[string]string` | `ConfigOpt` | 是一个请求选项 用于设置爬虫发送请求时的cookie |
| [crawlerx.evalJs](#evaljs) | `target string, evalJs string` | `ConfigOpt` | 设置在指定页面注入并执行的 JavaScript 代码 |
| [crawlerx.extraWaitLoadTime](#extrawaitloadtime) | `extraWaitLoadTime int` | `ConfigOpt` | 是一个请求选项 用于设置页面加载的额外页面等待时间 |
| [crawlerx.fileInput](#fileinput) | `fileInput map[string]string` | `ConfigOpt` | 是一个请求选项 用于设置页面遇到input submit时默认上传文件 |
| [crawlerx.formFill](#formfill) | `formFills map[string]string` | `ConfigOpt` | 是一个请求选项 用于设置页面输入框填写内容 |
| [crawlerx.fromPlugin](#fromplugin) | `fromPlugin string` | `ConfigOpt` | 设置标记爬虫任务来源的插件名称 |
| [crawlerx.fullTimeout](#fulltimeout) | `timeout int` | `ConfigOpt` | 是一个请求选项 用于设置爬虫任务总超时时间 |
| [crawlerx.headers](#headers) | `headersInfo map[string]string` | `ConfigOpt` | 是一个请求选项 用于设置爬虫发送请求时的headers |
| [crawlerx.invalidSuffix](#invalidsuffix) | `suffix []string` | `ConfigOpt` | 设置爬虫需要忽略的 URL 后缀(如静态资源)，命中后缀的链接不会被访问 |
| [crawlerx.jsResultSend](#jsresultsend) | `storage func(s string)` | `ConfigOpt` | 设置接收注入 JS 执行结果的回调函数 |
| [crawlerx.leakless](#leakless) | `leakless string` | `ConfigOpt` | 设置 leakless 模式，控制浏览器进程在异常退出时的清理行为 |
| [crawlerx.localStorage](#localstorage) | `storage map[string]string` | `ConfigOpt` | 设置爬虫启动时注入浏览器的 localStorage 键值对 |
| [crawlerx.loginPassword](#loginpassword) | `password string` | `ConfigOpt` | 设置自动登录时使用的密码(设置后会启用登录流程) |
| [crawlerx.loginUsername](#loginusername) | `username string` | `ConfigOpt` | 设置自动登录时使用的用户名(设置后会启用登录流程) |
| [crawlerx.maxDepth](#maxdepth) | `depth int` | `ConfigOpt` | 是一个请求选项 用于设置网站最大爬取深度 |
| [crawlerx.maxUrl](#maxurl) | `maxUrl int` | `ConfigOpt` | 是一个请求选项 用于设置最大爬取url数量 |
| [crawlerx.pageTimeout](#pagetimeout) | `timeout int` | `ConfigOpt` | 是一个请求选项 用于设置单个页面超时时间 |
| [crawlerx.rawCookie](#rawcookie) | `domain string, cookieInfo string` | `ConfigOpt` | 是一个请求选项 用于设置爬虫发送请求时的cookie |
| [crawlerx.rawHeaders](#rawheaders) | `headerInfo string` | `ConfigOpt` | 是一个请求选项 用于设置爬虫发送请求时的headers |
| [crawlerx.response](#response) | `targetUrl string, response string` | `ConfigOpt` | 为指定 URL 预设响应内容，命中该 URL 时直接使用预设响应而不发起真实请求 |
| [crawlerx.runtimeID](#runtimeid) | `id string` | `ConfigOpt` | 设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联 |
| [crawlerx.runtimeId](#runtimeid-2) | `id string` | `ConfigOpt` | 设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联 |
| [crawlerx.saveToDB](#savetodb) | `b bool` | `ConfigOpt` | 设置爬虫是否将抓取到的请求结果保存到数据库 |
| [crawlerx.scanRangeLevel](#scanrangelevel) | `scanRange scanRangeLevel` | `ConfigOpt` | 是一个请求选项 用于设置爬虫扫描范围 |
| [crawlerx.scanRepeatLevel](#scanrepeatlevel) | `scanRepeat repeatLevel` | `ConfigOpt` | 是一个请求选项 用于设置爬虫去重强度 |
| [crawlerx.sensitiveWords](#sensitivewords) | `words []string` | `ConfigOpt` | 是一个请求选项 用于设置页面按钮点击时的敏感词 |
| [crawlerx.sessionStorage](#sessionstorage) | `storage map[string]string` | `ConfigOpt` | 设置爬虫启动时注入浏览器的 sessionStorage 键值对 |
| [crawlerx.sourceType](#sourcetype) | `sourceType string` | `ConfigOpt` | 设置爬虫的来源类型标记，用于区分结果数据的产生来源 |
| [crawlerx.stealth](#stealth) | `stealth bool` | `ConfigOpt` | 设置爬虫是否启用 stealth(隐身)模式，规避部分浏览器自动化检测 |
| [crawlerx.urlCheck](#urlcheck) | `check bool` | `ConfigOpt` | 是一个请求选项 用于设置是否在爬虫前进行url存活检测 |
| [crawlerx.vue](#vue) | `vue bool` | `ConfigOpt` | 设置是否针对 Vue 等单页应用(SPA)启用专门的爬取策略 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [crawlerx.PageScreenShot](#pagescreenshot) | `targetUrl string, opts ...ConfigOpt` | `string, error` | 使用浏览器访问目标页面并截图，返回截图结果(通常为 base64 编码字符串) |
| [crawlerx.StartCrawler](#startcrawler) | `url string, opts ...ConfigOpt` | `chan ReqInfo, error` | 开启一个无头浏览器模拟点击爬虫任务 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爬虫结果 |
| [crawlerx.blacklist](#blacklist) | `keywords ...string` | `ConfigOpt` | 是一个请求选项 用于设置不会被访问的url链接包含的关键词 |
| [crawlerx.ignoreQueryName](#ignorequeryname) | `names ...string` | `ConfigOpt` | 是一个请求选项 用于设置url中的query名称去重时忽略 |
| [crawlerx.whitelist](#whitelist) | `keywords ...string` | `ConfigOpt` | 是一个请求选项 用于设置只会被访问的url链接中包含的关键词 |

## 函数详情

### OutputResult {#outputresult}

```go
OutputResult(data []any, outputFile string) error
```

将channel中输出的爬虫结果保存在本地

第一个参数为需要存储的结果 第二个参数为保存的本地路径 请确保本地文件可以正常写入

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `[]any` | 需要存储的爬虫结果列表 |
| outputFile | `string` | 保存的本地文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 写入失败时返回错误 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30), crawlerx.concurrent(3))
resultList = []
for item = range ch {
	yakit.Info(item.Method() + " " + item.Url())
	resultList = append(resultList, item)
}
err = crawlerx.OutputResult(resultList, "test.txt")
if err != nil {
          println(err)
}
``````````````

---

### aiInputInfo {#aiinputinfo}

```go
aiInputInfo(info string) ConfigOpt
```

设置提供给 AI 进行表单填充的背景信息(如业务上下文)

在 yak 中通过 crawlerx.aiInputInfo 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| info | `string` | 提供给 AI 的背景信息文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：提供 AI 输入背景信息
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.aiInputInfo("use test account"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### aiInputUrl {#aiinputurl}

```go
aiInputUrl(url string) ConfigOpt
```

设置由 AI 辅助进行表单输入的目标页面 URL

在 yak 中通过 crawlerx.aiInputUrl 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 需要 AI 辅助输入的页面 URL |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定 AI 辅助输入页面
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.aiInputUrl("http://testphp.vulnweb.com/login.php"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### browserInfo {#browserinfo}

```go
browserInfo(data string) ConfigOpt
```

是一个请求选项 用于配制浏览器参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `string` | 浏览器配置 JSON 字符串，包含 ws_address、exe_path、proxy_address 等字段 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
browserInfo = {
   "ws_address":"",		// 浏览器websocket url
   "exe_path":"",		// 浏览器可执行路径
   "proxy_address":"",	// 代理地址
   "proxy_username":"",	// 代理用户名
   "proxy_password":"",	// 代理密码
}
browserInfoOpt = crawlerx.browserInfo(json.dumps(browserInfo))
ch, err = crawlerx.StartCrawler(targetUrl, browserInfoOpt)
``````````````

---

### concurrent {#concurrent}

```go
concurrent(concurrent int) ConfigOpt
```

是一个请求选项 用于设置浏览器同时打开的最大页面数量

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| concurrent | `int` | 浏览器同时打开的最大页面数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.concurrent(3)) // 设置浏览器同时打开的最大页面数量为3
``````````````

---

### cookies {#cookies}

```go
cookies(domain string, cookiesInfo map[string]string) ConfigOpt
```

是一个请求选项 用于设置爬虫发送请求时的cookie

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | cookie 所属域名 |
| cookiesInfo | `map[string]string` | cookie 名称到值的映射 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
cookieMap = make(map[string]string, 0)
cookieMap["Apache"] = "5651982500959.057.1731310579958"
cookieMap["ULV"] = "1731310579971:11:1:1:5651982500959.057.1731310579958:1727418057693"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.cookies("testphp.vulnweb.com", cookieMap)) // cookie字典形式输入
``````````````

---

### evalJs {#evaljs}

```go
evalJs(target string, evalJs string) ConfigOpt
```

设置在指定页面注入并执行的 JavaScript 代码

在 yak 中通过 crawlerx.evalJs 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 目标页面 URL |
| evalJs | `string` | 要在该页面执行的 JavaScript 代码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：在指定页面执行 JS
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.evalJs("http://testphp.vulnweb.com/", "console.log(1)"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### extraWaitLoadTime {#extrawaitloadtime}

```go
extraWaitLoadTime(extraWaitLoadTime int) ConfigOpt
```

是一个请求选项 用于设置页面加载的额外页面等待时间

防止加载vue网站页面时页面状态为加载完成 实际仍在加载中的情况

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| extraWaitLoadTime | `int` | 页面加载的额外等待时间，单位为毫秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.extraWaitLoadTime(1000)) // 设置页面加载的额外页面等待时间为1000毫秒
``````````````

---

### fileInput {#fileinput}

```go
fileInput(fileInput map[string]string) ConfigOpt
```

是一个请求选项 用于设置页面遇到input submit时默认上传文件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| fileInput | `map[string]string` | 关键词到文件路径的映射，default 键表示默认上传文件 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
fileMap = make(map[string]string, 0)
fileMap["default"] = "/path/to/file/test.txt"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.fileInput(fileMap)) // 设置遇到输入框元素中存在对应关键词时输入对应内容 默认输入test
``````````````

---

### formFill {#formfill}

```go
formFill(formFills map[string]string) ConfigOpt
```

是一个请求选项 用于设置页面输入框填写内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| formFills | `map[string]string` | 关键词到填写内容的映射，输入框匹配关键词时填写对应内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
inputMap = make(map[string]string, 0)
inputMap["username"] = "admin"
inputMap["password"] = "123321"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.formFill(inputMap)) // 设置遇到输入框元素中存在对应关键词时输入对应内容 默认输入test
``````````````

---

### fromPlugin {#fromplugin}

```go
fromPlugin(fromPlugin string) ConfigOpt
```

设置标记爬虫任务来源的插件名称

在 yak 中通过 crawlerx.fromPlugin 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| fromPlugin | `string` | 来源插件名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：标记来源插件
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.fromPlugin("my-plugin"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### fullTimeout {#fulltimeout}

```go
fullTimeout(timeout int) ConfigOpt
```

是一个请求选项 用于设置爬虫任务总超时时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| timeout | `int` | 爬虫任务总超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.fullTimeout(1800)) // 设置爬虫任务总超时时间为1800秒
``````````````

---

### headers {#headers}

```go
headers(headersInfo map[string]string) ConfigOpt
```

是一个请求选项 用于设置爬虫发送请求时的headers

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| headersInfo | `map[string]string` | header 名称到值的映射 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
headerMap = make(map[string]string, 0)
headerMap["Connection"] = "keep-alive"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.headers(headerMap)) // header以字典形式输入
``````````````

---

### invalidSuffix {#invalidsuffix}

```go
invalidSuffix(suffix []string) ConfigOpt
```

设置爬虫需要忽略的 URL 后缀(如静态资源)，命中后缀的链接不会被访问

在 yak 中通过 crawlerx.invalidSuffix 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| suffix | `[]string` | 需要忽略的后缀列表，如 [&#34;.png&#34;, &#34;.css&#34;] |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：忽略图片与样式表
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.invalidSuffix([".png", ".css"]))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### jsResultSend {#jsresultsend}

```go
jsResultSend(storage func(s string)) ConfigOpt
```

设置接收注入 JS 执行结果的回调函数

在 yak 中通过 crawlerx.jsResultSend 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| storage | `func(s string)` | 接收 JS 执行结果字符串的回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：接收 JS 执行结果
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.jsResultSend(func(s) { println(s) }))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### leakless {#leakless}

```go
leakless(leakless string) ConfigOpt
```

设置 leakless 模式，控制浏览器进程在异常退出时的清理行为

在 yak 中通过 crawlerx.leakless 调用，取值可为 &#34;default&#34;、&#34;true&#34;、&#34;false&#34;

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| leakless | `string` | leakless 模式开关字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 leakless 模式
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.leakless("default"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### localStorage {#localstorage}

```go
localStorage(storage map[string]string) ConfigOpt
```

设置爬虫启动时注入浏览器的 localStorage 键值对

在 yak 中通过 crawlerx.localStorage 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| storage | `map[string]string` | 需要注入的 localStorage 键值映射 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：注入 localStorage
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.localStorage({"token": "abc"}))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### loginPassword {#loginpassword}

```go
loginPassword(password string) ConfigOpt
```

设置自动登录时使用的密码(设置后会启用登录流程)

在 yak 中通过 crawlerx.loginPassword 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| password | `string` | 登录密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置自动登录密码
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.loginUsername("admin"), crawlerx.loginPassword("admin"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### loginUsername {#loginusername}

```go
loginUsername(username string) ConfigOpt
```

设置自动登录时使用的用户名(设置后会启用登录流程)

在 yak 中通过 crawlerx.loginUsername 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| username | `string` | 登录用户名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置自动登录用户名
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.loginUsername("admin"), crawlerx.loginPassword("admin"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### maxDepth {#maxdepth}

```go
maxDepth(depth int) ConfigOpt
```

是一个请求选项 用于设置网站最大爬取深度

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| depth | `int` | 网站最大爬取深度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.maxDepth(3)) // 设置网站最大爬取深度为3
``````````````

---

### maxUrl {#maxurl}

```go
maxUrl(maxUrl int) ConfigOpt
```

是一个请求选项 用于设置最大爬取url数量

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| maxUrl | `int` | 最大爬取 URL 数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.maxUrl(100)) // 设置最大爬取url数量为100
``````````````

---

### pageTimeout {#pagetimeout}

```go
pageTimeout(timeout int) ConfigOpt
```

是一个请求选项 用于设置单个页面超时时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| timeout | `int` | 单个页面超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30)) // 设置单个页面超时时间为30秒
``````````````

---

### rawCookie {#rawcookie}

```go
rawCookie(domain string, cookieInfo string) ConfigOpt
```

是一个请求选项 用于设置爬虫发送请求时的cookie

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | cookie 所属域名 |
| cookieInfo | `string` | 原生 cookie 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
cookie = `Apache=5651982500959.057.1731310579958; ULV=1731310579971:11:1:1:5651982500959.057.1731310579958:1727418057693; ALF=1735783078`
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.rawCookie("testphp.vulnweb.com", cookie)) // 原生cookie输入
``````````````

---

### rawHeaders {#rawheaders}

```go
rawHeaders(headerInfo string) ConfigOpt
```

是一个请求选项 用于设置爬虫发送请求时的headers

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| headerInfo | `string` | 原生 headers 字符串，每行一个 header |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
headers = `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-TW;q=0.6
Cache-Control: max-age=0
Connection: keep-alive
Host: testphp.vulnweb.com
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 `

ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.rawHeaders(headers)) // 原生headers输入
``````````````

---

### response {#response}

```go
response(targetUrl string, response string) ConfigOpt
```

为指定 URL 预设响应内容，命中该 URL 时直接使用预设响应而不发起真实请求

在 yak 中通过 crawlerx.response 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| targetUrl | `string` | 目标 URL |
| response | `string` | 预设的响应内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：为指定 URL 预设响应
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.response("http://testphp.vulnweb.com/", "HTTP/1.1 200 OK\r\n\r\nhello"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### runtimeID {#runtimeid}

```go
runtimeID(id string) ConfigOpt
```

设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联

在 yak 中通过 crawlerx.runtimeId 或 crawlerx.runtimeID 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` | 运行时 ID 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定运行时 ID
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.runtimeId("task-001"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### runtimeId {#runtimeid-2}

```go
runtimeId(id string) ConfigOpt
```

设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联

在 yak 中通过 crawlerx.runtimeId 或 crawlerx.runtimeID 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` | 运行时 ID 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定运行时 ID
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.runtimeId("task-001"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### saveToDB {#savetodb}

```go
saveToDB(b bool) ConfigOpt
```

设置爬虫是否将抓取到的请求结果保存到数据库

在 yak 中通过 crawlerx.saveToDB 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否保存到数据库 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：抓取结果保存到数据库
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.saveToDB(true))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### scanRangeLevel {#scanrangelevel}

```go
scanRangeLevel(scanRange scanRangeLevel) ConfigOpt
```

是一个请求选项 用于设置爬虫扫描范围

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| scanRange | `scanRangeLevel` | 扫描范围级别，可选 crawlerx.AllDomainScan、crawlerx.SubMenuScan、crawlerx.UnlimitedDomainScan |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
scanRangeOpt = crawlerx.scanRangeLevel(crawlerx.AllDomainScan)	// 主域名扫描
// scanRangeOpt = crawlerx.scanRangeLevel(crawlerx.SubMenuScan)	// 子域名扫描
// scanRangeOpt = crawlerx.scanRangeLevel(crawlerx.UnlimitedDomainScan)	// 无限制扫描
ch, err = crawlerx.StartCrawler(targetUrl, scanRangeOpt)
``````````````

---

### scanRepeatLevel {#scanrepeatlevel}

```go
scanRepeatLevel(scanRepeat repeatLevel) ConfigOpt
```

是一个请求选项 用于设置爬虫去重强度

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| scanRepeat | `repeatLevel` | 去重强度级别，可选 crawlerx.UnLimitRepeat、LowRepeatLevel、MediumRepeatLevel、HighRepeatLevel、ExtremeRepeatLevel |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.UnLimitRepeat)	// 对page，method，query-name，query-value和post-data敏感
// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.LowRepeatLevel)	// 对page，method，query-name和query-value敏感（默认）
// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.MediumRepeatLevel)	// 对page，method和query-name敏感
// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.HighRepeatLevel)	// 对page和method敏感
// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.ExtremeRepeatLevel)	// 对page敏感
ch, err = crawlerx.StartCrawler(targetUrl, scanRepeatOpt)
``````````````

---

### sensitiveWords {#sensitivewords}

```go
sensitiveWords(words []string) ConfigOpt
```

是一个请求选项 用于设置页面按钮点击时的敏感词

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| words | `[]string` | 敏感词列表，按钮所在元素包含这些关键词时不会被点击 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
sensitiveWords = "logout,delete"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.sensitiveWords(sensitiveWords.Split(","))) // 当按钮所在元素中存在logout和delete关键词时不会点击
``````````````

---

### sessionStorage {#sessionstorage}

```go
sessionStorage(storage map[string]string) ConfigOpt
```

设置爬虫启动时注入浏览器的 sessionStorage 键值对

在 yak 中通过 crawlerx.sessionStorage 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| storage | `map[string]string` | 需要注入的 sessionStorage 键值映射 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：注入 sessionStorage
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.sessionStorage({"sid": "xyz"}))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### sourceType {#sourcetype}

```go
sourceType(sourceType string) ConfigOpt
```

设置爬虫的来源类型标记，用于区分结果数据的产生来源

在 yak 中通过 crawlerx.sourceType 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sourceType | `string` | 来源类型字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置来源类型
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.sourceType("scan"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### stealth {#stealth}

```go
stealth(stealth bool) ConfigOpt
```

设置爬虫是否启用 stealth(隐身)模式，规避部分浏览器自动化检测

在 yak 中通过 crawlerx.stealth 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| stealth | `bool` | 是否启用隐身模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：启用隐身模式
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.stealth(true))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

### urlCheck {#urlcheck}

```go
urlCheck(check bool) ConfigOpt
```

是一个请求选项 用于设置是否在爬虫前进行url存活检测

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| check | `bool` | 是否在爬虫前进行 URL 存活检测 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.urlCheck(true))
``````````````

---

### vue {#vue}

```go
vue(vue bool) ConfigOpt
```

设置是否针对 Vue 等单页应用(SPA)启用专门的爬取策略

在 yak 中通过 crawlerx.vue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| vue | `bool` | 是否启用 SPA 爬取策略 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：针对 Vue 单页应用爬取
ch = crawlerx.StartCrawler("http://spa.example.com/", crawlerx.vue(true))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````

---

## 可变参数函数详情

### PageScreenShot {#pagescreenshot}

```go
PageScreenShot(targetUrl string, opts ...ConfigOpt) (code string, err error)
```

使用浏览器访问目标页面并截图，返回截图结果(通常为 base64 编码字符串)

在 yak 中通过 crawlerx.PageScreenShot 调用，依赖本地 Chrome 浏览器环境

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| targetUrl | `string` | 需要截图的目标页面 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...ConfigOpt` | 可选配置项，如 crawlerx.browserInfo、crawlerx.stealth 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| code | `string` | 截图结果字符串 |
| err | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：对目标页面截图
code = crawlerx.PageScreenShot("http://testphp.vulnweb.com/")~
println(len(code))
``````````````

---

### StartCrawler {#startcrawler}

```go
StartCrawler(url string, opts ...ConfigOpt) (chan ReqInfo, error)
```

开启一个无头浏览器模拟点击爬虫任务 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爬虫结果

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 目标爬取的 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...ConfigOpt` | 零个或多个爬虫请求配置选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan ReqInfo` | chan ReqInfo: 爬虫结果管道，可迭代获取每个请求信息 |
| r2 | `error` | 启动失败时返回错误 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30), crawlerx.concurrent(3))
for item = range ch {
	yakit.Info(item.Method() + " " + item.Url())
}
``````````````

---

### blacklist {#blacklist}

```go
blacklist(keywords ...string) ConfigOpt
```

是一个请求选项 用于设置不会被访问的url链接包含的关键词

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| keywords | `...string` | 一个或多个黑名单关键词，URL 中包含这些关键词时不会被访问 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.blacklist("logout", "exit", "delete")) // 设置遇到url中包含logout、exit和delete时不会访问
``````````````

---

### ignoreQueryName {#ignorequeryname}

```go
ignoreQueryName(names ...string) ConfigOpt
```

是一个请求选项 用于设置url中的query名称去重时忽略

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| names | `...string` | 一个或多个去重时需要忽略的 query 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.ignoreQueryName("sid", "tid")) // 设置检测url是否重复时无视sid和tid这两个query
``````````````

---

### whitelist {#whitelist}

```go
whitelist(keywords ...string) ConfigOpt
```

是一个请求选项 用于设置只会被访问的url链接中包含的关键词

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| keywords | `...string` | 一个或多个白名单关键词，只有 URL 中包含这些关键词时才会被访问 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |

**示例**

``````````````yak
targetUrl = "http://testphp.vulnweb.com/"
ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.whitelist("test", "click")) // 设置只会访问url中包含test和click的链接
``````````````

---

