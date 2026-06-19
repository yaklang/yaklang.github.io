# crawlerx

|实例名|实例描述|
|:------|:--------|
AllDomainScan|(crawlerx.scanRangeLevel) 0|
BoardDomain|(crawlerx.scanRangeLevel) 3|
ExtremeRepeatLevel|(crawlerx.repeatLevel) 4|
HighRepeatLevel|(crawlerx.repeatLevel) 3|
LowRepeatLevel|(crawlerx.repeatLevel) 1|
MediumRepeatLevel|(crawlerx.repeatLevel) 2|
SubMenuScan|(crawlerx.scanRangeLevel) 1|
UnLimitRepeat|(crawlerx.repeatLevel) 0|
UnlimitedDomainScan|(crawlerx.scanRangeLevel) 2|

|函数名|函数描述/介绍|
|:------|:--------|
| [crawlerx.OutputResult](#outputresult) |OutputResult 将channel中输出的爬虫结果保存在本地 第一个参数为需要存储的结果 第二个参数为保存的本地路径 请确保本地文件可以正常写入 Examples:|
| [crawlerx.PageScreenShot](#pagescreenshot) |PageScreenShot 使用浏览器访问目标页面并截图，返回截图结果(通常为 base64 编码字符串) 在 yak 中通过 crawlerx.PageScreenShot 调用，依赖本地 Chrome 浏览器环境 参数: - targetUrl: 需要截图的目标页面 URL - opts: 可...|
| [crawlerx.StartCrawler](#startcrawler) |StartCrawler 开启一个无头浏览器模拟点击爬虫任务 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爬虫结果 Examples:|
| [crawlerx.aiInputInfo](#aiinputinfo) |aiInputInfo 设置提供给 AI 进行表单填充的背景信息(如业务上下文) 在 yak 中通过 crawlerx.aiInputInfo 调用 参数: - info: 提供给 AI 的背景信息文本 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.aiInputUrl](#aiinputurl) |aiInputUrl 设置由 AI 辅助进行表单输入的目标页面 URL 在 yak 中通过 crawlerx.aiInputUrl 调用 参数: - url: 需要 AI 辅助输入的页面 URL 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.blacklist](#blacklist) |blacklist 是一个请求选项 用于设置不会被访问的url链接包含的关键词 Examples:|
| [crawlerx.browserInfo](#browserinfo) |browserInfo 是一个请求选项 用于配制浏览器参数 Examples:|
| [crawlerx.concurrent](#concurrent) |concurrent 是一个请求选项 用于设置浏览器同时打开的最大页面数量 Examples:|
| [crawlerx.cookies](#cookies) |cookies 是一个请求选项 用于设置爬虫发送请求时的cookie Examples:|
| [crawlerx.evalJs](#evaljs) |evalJs 设置在指定页面注入并执行的 JavaScript 代码 在 yak 中通过 crawlerx.evalJs 调用 参数: - target: 目标页面 URL - evalJs: 要在该页面执行的 JavaScript 代码 返回值: - 一个 crawlerx.StartCrawle...|
| [crawlerx.extraWaitLoadTime](#extrawaitloadtime) |extraWaitLoadTime 是一个请求选项 用于设置页面加载的额外页面等待时间 防止加载vue网站页面时页面状态为加载完成 实际仍在加载中的情况 Examples:|
| [crawlerx.fileInput](#fileinput) |fileInput 是一个请求选项 用于设置页面遇到input submit时默认上传文件 Examples:|
| [crawlerx.formFill](#formfill) |formFill 是一个请求选项 用于设置页面输入框填写内容 Examples:|
| [crawlerx.fromPlugin](#fromplugin) |fromPlugin 设置标记爬虫任务来源的插件名称 在 yak 中通过 crawlerx.fromPlugin 调用 参数: - fromPlugin: 来源插件名称 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.fullTimeout](#fulltimeout) |fullTimeout 是一个请求选项 用于设置爬虫任务总超时时间 Examples:|
| [crawlerx.headers](#headers) |headers 是一个请求选项 用于设置爬虫发送请求时的headers Examples:|
| [crawlerx.ignoreQueryName](#ignorequeryname) |ignoreQueryName 是一个请求选项 用于设置url中的query名称去重时忽略 Examples:|
| [crawlerx.invalidSuffix](#invalidsuffix) |invalidSuffix 设置爬虫需要忽略的 URL 后缀(如静态资源)，命中后缀的链接不会被访问 在 yak 中通过 crawlerx.invalidSuffix 调用 参数: - suffix: 需要忽略的后缀列表，如 [&#34;.png&#34;, &#34;.css&#34;] 返回值: - 一个 crawlerx.S...|
| [crawlerx.jsResultSend](#jsresultsend) |jsResultSend 设置接收注入 JS 执行结果的回调函数 在 yak 中通过 crawlerx.jsResultSend 调用 参数: - storage: 接收 JS 执行结果字符串的回调函数 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.leakless](#leakless) |leakless 设置 leakless 模式，控制浏览器进程在异常退出时的清理行为 在 yak 中通过 crawlerx.leakless 调用，取值可为 &#34;default&#34;、&#34;true&#34;、&#34;false&#34; 参数: - leakless: leakless 模式开关字符串 返回值: - 一个 cra...|
| [crawlerx.localStorage](#localstorage) |localStorage 设置爬虫启动时注入浏览器的 localStorage 键值对 在 yak 中通过 crawlerx.localStorage 调用 参数: - storage: 需要注入的 localStorage 键值映射 返回值: - 一个 crawlerx.StartCrawler ...|
| [crawlerx.loginPassword](#loginpassword) |loginPassword 设置自动登录时使用的密码(设置后会启用登录流程) 在 yak 中通过 crawlerx.loginPassword 调用 参数: - password: 登录密码 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.loginUsername](#loginusername) |loginUsername 设置自动登录时使用的用户名(设置后会启用登录流程) 在 yak 中通过 crawlerx.loginUsername 调用 参数: - username: 登录用户名 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.maxDepth](#maxdepth) |maxDepth 是一个请求选项 用于设置网站最大爬取深度 Examples:|
| [crawlerx.maxUrl](#maxurl) |maxUrl 是一个请求选项 用于设置最大爬取url数量 Examples:|
| [crawlerx.pageTimeout](#pagetimeout) |pageTimeout 是一个请求选项 用于设置单个页面超时时间 Examples:|
| [crawlerx.rawCookie](#rawcookie) |rawCookie 是一个请求选项 用于设置爬虫发送请求时的cookie Examples:|
| [crawlerx.rawHeaders](#rawheaders) |rawHeaders 是一个请求选项 用于设置爬虫发送请求时的headers Examples:|
| [crawlerx.response](#response) |response 为指定 URL 预设响应内容，命中该 URL 时直接使用预设响应而不发起真实请求 在 yak 中通过 crawlerx.response 调用 参数: - targetUrl: 目标 URL - response: 预设的响应内容 返回值: - 一个 crawlerx.StartC...|
| [crawlerx.runtimeID](#runtimeid) |runtimeId 设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联 在 yak 中通过 crawlerx.runtimeId 或 crawlerx.runtimeID 调用 参数: - id: 运行时 ID 字符串 返回值: - 一个 crawlerx.StartCrawler 可接收的配...|
| [crawlerx.runtimeId](#runtimeid) |runtimeId 设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联 在 yak 中通过 crawlerx.runtimeId 或 crawlerx.runtimeID 调用 参数: - id: 运行时 ID 字符串 返回值: - 一个 crawlerx.StartCrawler 可接收的配...|
| [crawlerx.saveToDB](#savetodb) |saveToDB 设置爬虫是否将抓取到的请求结果保存到数据库 在 yak 中通过 crawlerx.saveToDB 调用 参数: - b: 是否保存到数据库 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.scanRangeLevel](#scanrangelevel) |scanRangeLevel 是一个请求选项 用于设置爬虫扫描范围 Examples:|
| [crawlerx.scanRepeatLevel](#scanrepeatlevel) |scanRepeatLevel 是一个请求选项 用于设置爬虫去重强度 Examples:|
| [crawlerx.sensitiveWords](#sensitivewords) |sensitiveWords 是一个请求选项 用于设置页面按钮点击时的敏感词 Examples:|
| [crawlerx.sessionStorage](#sessionstorage) |sessionStorage 设置爬虫启动时注入浏览器的 sessionStorage 键值对 在 yak 中通过 crawlerx.sessionStorage 调用 参数: - storage: 需要注入的 sessionStorage 键值映射 返回值: - 一个 crawlerx.Start...|
| [crawlerx.sourceType](#sourcetype) |sourceType 设置爬虫的来源类型标记，用于区分结果数据的产生来源 在 yak 中通过 crawlerx.sourceType 调用 参数: - sourceType: 来源类型字符串 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.stealth](#stealth) |stealth 设置爬虫是否启用 stealth(隐身)模式，规避部分浏览器自动化检测 在 yak 中通过 crawlerx.stealth 调用 参数: - stealth: 是否启用隐身模式 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.urlCheck](#urlcheck) |urlCheck 是一个请求选项 用于设置是否在爬虫前进行url存活检测 Examples:|
| [crawlerx.vue](#vue) |vue 设置是否针对 Vue 等单页应用(SPA)启用专门的爬取策略 在 yak 中通过 crawlerx.vue 调用 参数: - vue: 是否启用 SPA 爬取策略 返回值: - 一个 crawlerx.StartCrawler 可接收的配置选项|
| [crawlerx.whitelist](#whitelist) |whitelist 是一个请求选项 用于设置只会被访问的url链接中包含的关键词 Examples:|


## 函数定义
### OutputResult

#### 详细描述
OutputResult 将channel中输出的爬虫结果保存在本地

第一个参数为需要存储的结果 第二个参数为保存的本地路径 请确保本地文件可以正常写入

Examples:

		```
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

		```


#### 定义

`OutputResult(data []any, outputFile string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]any` |  |
| outputFile | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### PageScreenShot

#### 详细描述
PageScreenShot 使用浏览器访问目标页面并截图，返回截图结果(通常为 base64 编码字符串)

在 yak 中通过 crawlerx.PageScreenShot 调用，依赖本地 Chrome 浏览器环境

参数:

  - targetUrl: 需要截图的目标页面 URL

  - opts: 可选配置项，如 crawlerx.browserInfo、crawlerx.stealth 等



返回值:

  - 截图结果字符串

  - 错误信息，失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：对目标页面截图
code = crawlerx.PageScreenShot("http://testphp.vulnweb.com/")~
println(len(code))
``````````````


#### 定义

`PageScreenShot(targetUrl string, opts ...ConfigOpt) (code string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` | 需要截图的目标页面 URL |
| opts | `...ConfigOpt` | 可选配置项，如 crawlerx.browserInfo、crawlerx.stealth 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| code | `string` | 截图结果字符串 |
| err | `error` | 错误信息，失败时非 nil |


### StartCrawler

#### 详细描述
StartCrawler 开启一个无头浏览器模拟点击爬虫任务 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爬虫结果

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30), crawlerx.concurrent(3))
	for item = range ch {
		yakit.Info(item.Method() + " " + item.Url())
	}

```


#### 定义

`StartCrawler(url string, opts ...ConfigOpt) (chan ReqInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |  |
| opts | `...ConfigOpt` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan ReqInfo` |  |
| r2 | `error` |  |


### aiInputInfo

#### 详细描述
aiInputInfo 设置提供给 AI 进行表单填充的背景信息(如业务上下文)

在 yak 中通过 crawlerx.aiInputInfo 调用

参数:

  - info: 提供给 AI 的背景信息文本



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：提供 AI 输入背景信息
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.aiInputInfo("use test account"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`aiInputInfo(info string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| info | `string` | 提供给 AI 的背景信息文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### aiInputUrl

#### 详细描述
aiInputUrl 设置由 AI 辅助进行表单输入的目标页面 URL

在 yak 中通过 crawlerx.aiInputUrl 调用

参数:

  - url: 需要 AI 辅助输入的页面 URL



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定 AI 辅助输入页面
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.aiInputUrl("http://testphp.vulnweb.com/login.php"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`aiInputUrl(url string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 需要 AI 辅助输入的页面 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### blacklist

#### 详细描述
blacklist 是一个请求选项 用于设置不会被访问的url链接包含的关键词

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.blacklist("logout", "exit", "delete")) // 设置遇到url中包含logout、exit和delete时不会访问
	...

```


#### 定义

`blacklist(keywords ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### browserInfo

#### 详细描述
browserInfo 是一个请求选项 用于配制浏览器参数

Examples:
```

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
	...

```


#### 定义

`browserInfo(data string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### concurrent

#### 详细描述
concurrent 是一个请求选项 用于设置浏览器同时打开的最大页面数量

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.concurrent(3)) // 设置浏览器同时打开的最大页面数量为3
	...

```


#### 定义

`concurrent(concurrent int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### cookies

#### 详细描述
cookies 是一个请求选项 用于设置爬虫发送请求时的cookie

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	cookieMap = make(map[string]string, 0)
	cookieMap["Apache"] = "5651982500959.057.1731310579958"
	cookieMap["ULV"] = "1731310579971:11:1:1:5651982500959.057.1731310579958:1727418057693"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.cookies("testphp.vulnweb.com", cookieMap)) // cookie字典形式输入
	...

```


#### 定义

`cookies(domain string, cookiesInfo map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |  |
| cookiesInfo | `map[string]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### evalJs

#### 详细描述
evalJs 设置在指定页面注入并执行的 JavaScript 代码

在 yak 中通过 crawlerx.evalJs 调用

参数:

  - target: 目标页面 URL

  - evalJs: 要在该页面执行的 JavaScript 代码



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：在指定页面执行 JS
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.evalJs("http://testphp.vulnweb.com/", "console.log(1)"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`evalJs(target string, evalJs string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 目标页面 URL |
| evalJs | `string` | 要在该页面执行的 JavaScript 代码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### extraWaitLoadTime

#### 详细描述
extraWaitLoadTime 是一个请求选项 用于设置页面加载的额外页面等待时间

防止加载vue网站页面时页面状态为加载完成 实际仍在加载中的情况

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.extraWaitLoadTime(1000)) // 设置页面加载的额外页面等待时间为1000毫秒
	...

```


#### 定义

`extraWaitLoadTime(extraWaitLoadTime int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraWaitLoadTime | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### fileInput

#### 详细描述
fileInput 是一个请求选项 用于设置页面遇到input submit时默认上传文件

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	fileMap = make(map[string]string, 0)
	fileMap["default"] = "/path/to/file/test.txt"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.fileInput(fileMap)) // 设置遇到输入框元素中存在对应关键词时输入对应内容 默认输入test
	...

```


#### 定义

`fileInput(fileInput map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileInput | `map[string]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### formFill

#### 详细描述
formFill 是一个请求选项 用于设置页面输入框填写内容

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	inputMap = make(map[string]string, 0)
	inputMap["username"] = "admin"
	inputMap["password"] = "123321"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.formFill(inputMap)) // 设置遇到输入框元素中存在对应关键词时输入对应内容 默认输入test
	...

```


#### 定义

`formFill(formFills map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| formFills | `map[string]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### fromPlugin

#### 详细描述
fromPlugin 设置标记爬虫任务来源的插件名称

在 yak 中通过 crawlerx.fromPlugin 调用

参数:

  - fromPlugin: 来源插件名称



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：标记来源插件
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.fromPlugin("my-plugin"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`fromPlugin(fromPlugin string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` | 来源插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### fullTimeout

#### 详细描述
fullTimeout 是一个请求选项 用于设置爬虫任务总超时时间

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.fullTimeout(1800)) // 设置爬虫任务总超时时间为1800秒
	...

```


#### 定义

`fullTimeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### headers

#### 详细描述
headers 是一个请求选项 用于设置爬虫发送请求时的headers

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	headerMap = make(map[string]string, 0)
	headerMap["Connection"] = "keep-alive"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.headers(headerMap)) // header以字典形式输入
	...

```


#### 定义

`headers(headersInfo map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headersInfo | `map[string]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### ignoreQueryName

#### 详细描述
ignoreQueryName 是一个请求选项 用于设置url中的query名称去重时忽略

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.ignoreQueryName("sid", "tid")) // 设置检测url是否重复时无视sid和tid这两个query
	...

```


#### 定义

`ignoreQueryName(names ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### invalidSuffix

#### 详细描述
invalidSuffix 设置爬虫需要忽略的 URL 后缀(如静态资源)，命中后缀的链接不会被访问

在 yak 中通过 crawlerx.invalidSuffix 调用

参数:

  - suffix: 需要忽略的后缀列表，如 [&#34;.png&#34;, &#34;.css&#34;]



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：忽略图片与样式表
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.invalidSuffix([".png", ".css"]))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`invalidSuffix(suffix []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| suffix | `[]string` | 需要忽略的后缀列表，如 [&#34;.png&#34;, &#34;.css&#34;] |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### jsResultSend

#### 详细描述
jsResultSend 设置接收注入 JS 执行结果的回调函数

在 yak 中通过 crawlerx.jsResultSend 调用

参数:

  - storage: 接收 JS 执行结果字符串的回调函数



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：接收 JS 执行结果
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.jsResultSend(func(s) { println(s) }))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`jsResultSend(storage func(s string)) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `func(s string)` | 接收 JS 执行结果字符串的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### leakless

#### 详细描述
leakless 设置 leakless 模式，控制浏览器进程在异常退出时的清理行为

在 yak 中通过 crawlerx.leakless 调用，取值可为 &#34;default&#34;、&#34;true&#34;、&#34;false&#34;

参数:

  - leakless: leakless 模式开关字符串



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 leakless 模式
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.leakless("default"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`leakless(leakless string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `string` | leakless 模式开关字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### localStorage

#### 详细描述
localStorage 设置爬虫启动时注入浏览器的 localStorage 键值对

在 yak 中通过 crawlerx.localStorage 调用

参数:

  - storage: 需要注入的 localStorage 键值映射



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：注入 localStorage
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.localStorage({"token": "abc"}))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`localStorage(storage map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `map[string]string` | 需要注入的 localStorage 键值映射 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### loginPassword

#### 详细描述
loginPassword 设置自动登录时使用的密码(设置后会启用登录流程)

在 yak 中通过 crawlerx.loginPassword 调用

参数:

  - password: 登录密码



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置自动登录密码
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.loginUsername("admin"), crawlerx.loginPassword("admin"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`loginPassword(password string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 登录密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### loginUsername

#### 详细描述
loginUsername 设置自动登录时使用的用户名(设置后会启用登录流程)

在 yak 中通过 crawlerx.loginUsername 调用

参数:

  - username: 登录用户名



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置自动登录用户名
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.loginUsername("admin"), crawlerx.loginPassword("admin"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`loginUsername(username string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` | 登录用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### maxDepth

#### 详细描述
maxDepth 是一个请求选项 用于设置网站最大爬取深度

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.maxDepth(3)) // 设置网站最大爬取深度为3
	...

```


#### 定义

`maxDepth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### maxUrl

#### 详细描述
maxUrl 是一个请求选项 用于设置最大爬取url数量

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.maxUrl(100)) // 设置最大爬取url数量为100
	...

```


#### 定义

`maxUrl(maxUrl int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxUrl | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### pageTimeout

#### 详细描述
pageTimeout 是一个请求选项 用于设置单个页面超时时间

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30)) // 设置单个页面超时时间为30秒
	...

```


#### 定义

`pageTimeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### rawCookie

#### 详细描述
rawCookie 是一个请求选项 用于设置爬虫发送请求时的cookie

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	cookie = `Apache=5651982500959.057.1731310579958; ULV=1731310579971:11:1:1:5651982500959.057.1731310579958:1727418057693; ALF=1735783078`
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.rawCookie("testphp.vulnweb.com", cookie)) // 原生cookie输入
	...

```


#### 定义

`rawCookie(domain string, cookieInfo string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |  |
| cookieInfo | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### rawHeaders

#### 详细描述
rawHeaders 是一个请求选项 用于设置爬虫发送请求时的headers

Examples:
```

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
	...

```


#### 定义

`rawHeaders(headerInfo string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headerInfo | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### response

#### 详细描述
response 为指定 URL 预设响应内容，命中该 URL 时直接使用预设响应而不发起真实请求

在 yak 中通过 crawlerx.response 调用

参数:

  - targetUrl: 目标 URL

  - response: 预设的响应内容



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：为指定 URL 预设响应
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.response("http://testphp.vulnweb.com/", "HTTP/1.1 200 OK\r\n\r\nhello"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`response(targetUrl string, response string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` | 目标 URL |
| response | `string` | 预设的响应内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### runtimeID

#### 详细描述
runtimeId 设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联

在 yak 中通过 crawlerx.runtimeId 或 crawlerx.runtimeID 调用

参数:

  - id: 运行时 ID 字符串



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定运行时 ID
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.runtimeId("task-001"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`runtimeID(id string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | 运行时 ID 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### runtimeId

#### 详细描述
runtimeId 设置本次爬虫任务的运行时 ID，便于将结果与特定任务关联

在 yak 中通过 crawlerx.runtimeId 或 crawlerx.runtimeID 调用

参数:

  - id: 运行时 ID 字符串



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定运行时 ID
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.runtimeId("task-001"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`runtimeId(id string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | 运行时 ID 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### saveToDB

#### 详细描述
saveToDB 设置爬虫是否将抓取到的请求结果保存到数据库

在 yak 中通过 crawlerx.saveToDB 调用

参数:

  - b: 是否保存到数据库



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：抓取结果保存到数据库
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.saveToDB(true))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`saveToDB(b bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否保存到数据库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### scanRangeLevel

#### 详细描述
scanRangeLevel 是一个请求选项 用于设置爬虫扫描范围

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	scanRangeOpt = crawlerx.scanRangeLevel(crawlerx.AllDomainScan)	// 主域名扫描
	// scanRangeOpt = crawlerx.scanRangeLevel(crawlerx.SubMenuScan)	// 子域名扫描
	// scanRangeOpt = crawlerx.scanRangeLevel(crawlerx.UnlimitedDomainScan)	// 无限制扫描
	ch, err = crawlerx.StartCrawler(targetUrl, scanRangeOpt)
	...

```


#### 定义

`scanRangeLevel(scanRange scanRangeLevel) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scanRange | `scanRangeLevel` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### scanRepeatLevel

#### 详细描述
scanRepeatLevel 是一个请求选项 用于设置爬虫去重强度

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.UnLimitRepeat)	// 对page，method，query-name，query-value和post-data敏感
	// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.LowRepeatLevel)	// 对page，method，query-name和query-value敏感（默认）
	// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.MediumRepeatLevel)	// 对page，method和query-name敏感
	// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.HighRepeatLevel)	// 对page和method敏感
	// scanRepeatOpt = crawlerx.scanRepeatLevel(crawlerx.ExtremeRepeatLevel)	// 对page敏感
	ch, err = crawlerx.StartCrawler(targetUrl, scanRepeatOpt)
	...

```


#### 定义

`scanRepeatLevel(scanRepeat repeatLevel) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scanRepeat | `repeatLevel` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### sensitiveWords

#### 详细描述
sensitiveWords 是一个请求选项 用于设置页面按钮点击时的敏感词

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	sensitiveWords = "logout,delete"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.sensitiveWords(sensitiveWords.Split(","))) // 当按钮所在元素中存在logout和delete关键词时不会点击
	...

```


#### 定义

`sensitiveWords(words []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| words | `[]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### sessionStorage

#### 详细描述
sessionStorage 设置爬虫启动时注入浏览器的 sessionStorage 键值对

在 yak 中通过 crawlerx.sessionStorage 调用

参数:

  - storage: 需要注入的 sessionStorage 键值映射



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：注入 sessionStorage
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.sessionStorage({"sid": "xyz"}))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`sessionStorage(storage map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `map[string]string` | 需要注入的 sessionStorage 键值映射 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### sourceType

#### 详细描述
sourceType 设置爬虫的来源类型标记，用于区分结果数据的产生来源

在 yak 中通过 crawlerx.sourceType 调用

参数:

  - sourceType: 来源类型字符串



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置来源类型
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.sourceType("scan"))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`sourceType(sourceType string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourceType | `string` | 来源类型字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### stealth

#### 详细描述
stealth 设置爬虫是否启用 stealth(隐身)模式，规避部分浏览器自动化检测

在 yak 中通过 crawlerx.stealth 调用

参数:

  - stealth: 是否启用隐身模式



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：启用隐身模式
ch = crawlerx.StartCrawler("http://testphp.vulnweb.com/", crawlerx.stealth(true))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`stealth(stealth bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| stealth | `bool` | 是否启用隐身模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### urlCheck

#### 详细描述
urlCheck 是一个请求选项 用于设置是否在爬虫前进行url存活检测

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.urlCheck(true))
	...

```


#### 定义

`urlCheck(check bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| check | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


### vue

#### 详细描述
vue 设置是否针对 Vue 等单页应用(SPA)启用专门的爬取策略

在 yak 中通过 crawlerx.vue 调用

参数:

  - vue: 是否启用 SPA 爬取策略



返回值:

  - 一个 crawlerx.StartCrawler 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：针对 Vue 单页应用爬取
ch = crawlerx.StartCrawler("http://spa.example.com/", crawlerx.vue(true))~

	for req = range ch {
	    println(req.UrlStr())
	}
``````````````


#### 定义

`vue(vue bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vue | `bool` | 是否启用 SPA 爬取策略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawlerx.StartCrawler 可接收的配置选项 |


### whitelist

#### 详细描述
whitelist 是一个请求选项 用于设置只会被访问的url链接中包含的关键词

Examples:
```

	targetUrl = "http://testphp.vulnweb.com/"
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.whitelist("test", "click")) // 设置只会访问url中包含test和click的链接
	...

```


#### 定义

`whitelist(keywords ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |  |


