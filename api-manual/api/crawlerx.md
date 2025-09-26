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
| [crawlerx.OutputResult](#outputresult) |OutputResult 将channel中输出的爬虫结果保存在本地  第一个参数为需要存储的结果 第二个参数为保存的本地路径 请确保本地文件可以正常写入  Examples:  		``` 			targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	...|
| [crawlerx.PageScreenShot](#pagescreenshot) ||
| [crawlerx.StartCrawler](#startcrawler) |StartCrawler 开启一个无头浏览器模拟点击爬虫任务 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爬虫结果  Examples: ```  	targetUrl = &amp;#34;http://testph...|
| [crawlerx.aiInputInfo](#aiinputinfo) ||
| [crawlerx.aiInputUrl](#aiinputurl) ||
| [crawlerx.blacklist](#blacklist) |blacklist 是一个请求选项 用于设置不会被访问的url链接包含的关键词  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl,...|
| [crawlerx.browserInfo](#browserinfo) |browserInfo 是一个请求选项 用于配制浏览器参数  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	browserInfo = { 	   &amp;#34;ws_address&amp;#34;:&amp;#34;&amp;#34;,...|
| [crawlerx.concurrent](#concurrent) |concurrent 是一个请求选项 用于设置浏览器同时打开的最大页面数量  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl, c...|
| [crawlerx.cookies](#cookies) |cookies 是一个请求选项 用于设置爬虫发送请求时的cookie  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	cookieMap = make(map[string]string, 0) 	cookieM...|
| [crawlerx.evalJs](#evaljs) ||
| [crawlerx.extraWaitLoadTime](#extrawaitloadtime) |extraWaitLoadTime 是一个请求选项 用于设置页面加载的额外页面等待时间  防止加载vue网站页面时页面状态为加载完成 实际仍在加载中的情况  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, ...|
| [crawlerx.fileInput](#fileinput) |fileInput 是一个请求选项 用于设置页面遇到input submit时默认上传文件  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	fileMap = make(map[string]string, 0)...|
| [crawlerx.formFill](#formfill) |formFill 是一个请求选项 用于设置页面输入框填写内容  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	inputMap = make(map[string]string, 0) 	inputMap[&amp;#3...|
| [crawlerx.fromPlugin](#fromplugin) ||
| [crawlerx.fullTimeout](#fulltimeout) |fullTimeout 是一个请求选项 用于设置爬虫任务总超时时间  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl, crawl...|
| [crawlerx.headers](#headers) |headers 是一个请求选项 用于设置爬虫发送请求时的headers  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	headerMap = make(map[string]string, 0) 	header...|
| [crawlerx.ignoreQueryName](#ignorequeryname) |ignoreQueryName 是一个请求选项 用于设置url中的query名称去重时忽略  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targ...|
| [crawlerx.invalidSuffix](#invalidsuffix) ||
| [crawlerx.jsResultSend](#jsresultsend) ||
| [crawlerx.leakless](#leakless) ||
| [crawlerx.localStorage](#localstorage) ||
| [crawlerx.loginPassword](#loginpassword) ||
| [crawlerx.loginUsername](#loginusername) ||
| [crawlerx.maxDepth](#maxdepth) |maxDepth 是一个请求选项 用于设置网站最大爬取深度  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx....|
| [crawlerx.maxUrl](#maxurl) |maxUrl 是一个请求选项 用于设置最大爬取url数量  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.m...|
| [crawlerx.pageTimeout](#pagetimeout) |pageTimeout 是一个请求选项 用于设置单个页面超时时间  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl, crawle...|
| [crawlerx.rawCookie](#rawcookie) |rawCookie 是一个请求选项 用于设置爬虫发送请求时的cookie  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	cookie = `Apache=5651982500959.057.1731310579...|
| [crawlerx.rawHeaders](#rawheaders) |rawHeaders 是一个请求选项 用于设置爬虫发送请求时的headers  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	headers = `Accept: text/html,application/xh...|
| [crawlerx.response](#response) ||
| [crawlerx.runtimeID](#runtimeid) ||
| [crawlerx.runtimeId](#runtimeid) ||
| [crawlerx.saveToDB](#savetodb) ||
| [crawlerx.scanRangeLevel](#scanrangelevel) |scanRangeLevel 是一个请求选项 用于设置爬虫扫描范围  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	scanRangeOpt = crawlerx.scanRangeLevel(crawlerx....|
| [crawlerx.scanRepeatLevel](#scanrepeatlevel) |scanRepeatLevel 是一个请求选项 用于设置爬虫去重强度  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	scanRepeatOpt = crawlerx.scanRepeatLevel(crawle...|
| [crawlerx.sensitiveWords](#sensitivewords) |sensitiveWords 是一个请求选项 用于设置页面按钮点击时的敏感词  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	sensitiveWords = &amp;#34;logout,delete&amp;#34; 	c...|
| [crawlerx.sessionStorage](#sessionstorage) ||
| [crawlerx.sourceType](#sourcetype) ||
| [crawlerx.stealth](#stealth) ||
| [crawlerx.urlCheck](#urlcheck) |urlCheck 是一个请求选项 用于设置是否在爬虫前进行url存活检测  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl, cr...|
| [crawlerx.vue](#vue) ||
| [crawlerx.whitelist](#whitelist) |whitelist 是一个请求选项 用于设置只会被访问的url链接中包含的关键词  Examples: ```  	targetUrl = &amp;#34;http://testphp.vulnweb.com/&amp;#34; 	ch, err = crawlerx.StartCrawler(targetUrl...|


## 函数定义
### OutputResult

#### 详细描述
OutputResult 将channel中输出的爬虫结果保存在本地

第一个参数为需要存储的结果 第二个参数为保存的本地路径 请确保本地文件可以正常写入

Examples:

		```
			targetUrl = &#34;http://testphp.vulnweb.com/&#34;
			ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30), crawlerx.concurrent(3))
			resultList = []
			for item = range ch {
				yakit.Info(item.Method() + &#34; &#34; + item.Url())
				resultList = append(resultList, item)
			}
			err = crawlerx.OutputResult(resultList, &#34;test.txt&#34;)
			if err != nil {
	            println(err)
			}

		```


#### 定义

`OutputResult(data []any, outputFile string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]any` |   |
| outputFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### PageScreenShot

#### 详细描述


#### 定义

`PageScreenShot(targetUrl string, opts ...ConfigOpt) (code string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` |   |
| opts | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |
| err | `error` |   |


### StartCrawler

#### 详细描述
StartCrawler 开启一个无头浏览器模拟点击爬虫任务 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爬虫结果

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30), crawlerx.concurrent(3))
	for item = range ch {
		yakit.Info(item.Method() + &#34; &#34; + item.Url())
	}

```


#### 定义

`StartCrawler(url string, opts ...ConfigOpt) (chan ReqInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opts | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan ReqInfo` |   |
| r2 | `error` |   |


### aiInputInfo

#### 详细描述


#### 定义

`aiInputInfo(info string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| info | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### aiInputUrl

#### 详细描述


#### 定义

`aiInputUrl(url string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### blacklist

#### 详细描述
blacklist 是一个请求选项 用于设置不会被访问的url链接包含的关键词

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.blacklist(&#34;logout&#34;, &#34;exit&#34;, &#34;delete&#34;)) // 设置遇到url中包含logout、exit和delete时不会访问
	...

```


#### 定义

`blacklist(keywords ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### browserInfo

#### 详细描述
browserInfo 是一个请求选项 用于配制浏览器参数

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	browserInfo = {
	   &#34;ws_address&#34;:&#34;&#34;,		// 浏览器websocket url
	   &#34;exe_path&#34;:&#34;&#34;,		// 浏览器可执行路径
	   &#34;proxy_address&#34;:&#34;&#34;,	// 代理地址
	   &#34;proxy_username&#34;:&#34;&#34;,	// 代理用户名
	   &#34;proxy_password&#34;:&#34;&#34;,	// 代理密码
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
| data | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### concurrent

#### 详细描述
concurrent 是一个请求选项 用于设置浏览器同时打开的最大页面数量

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.concurrent(3)) // 设置浏览器同时打开的最大页面数量为3
	...

```


#### 定义

`concurrent(concurrent int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### cookies

#### 详细描述
cookies 是一个请求选项 用于设置爬虫发送请求时的cookie

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	cookieMap = make(map[string]string, 0)
	cookieMap[&#34;Apache&#34;] = &#34;5651982500959.057.1731310579958&#34;
	cookieMap[&#34;ULV&#34;] = &#34;1731310579971:11:1:1:5651982500959.057.1731310579958:1727418057693&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.cookies(&#34;testphp.vulnweb.com&#34;, cookieMap)) // cookie字典形式输入
	...

```


#### 定义

`cookies(domain string, cookiesInfo map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| cookiesInfo | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### evalJs

#### 详细描述


#### 定义

`evalJs(target string, evalJs string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| evalJs | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### extraWaitLoadTime

#### 详细描述
extraWaitLoadTime 是一个请求选项 用于设置页面加载的额外页面等待时间

防止加载vue网站页面时页面状态为加载完成 实际仍在加载中的情况

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.extraWaitLoadTime(1000)) // 设置页面加载的额外页面等待时间为1000毫秒
	...

```


#### 定义

`extraWaitLoadTime(extraWaitLoadTime int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraWaitLoadTime | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### fileInput

#### 详细描述
fileInput 是一个请求选项 用于设置页面遇到input submit时默认上传文件

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	fileMap = make(map[string]string, 0)
	fileMap[&#34;default&#34;] = &#34;/path/to/file/test.txt&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.fileInput(fileMap)) // 设置遇到输入框元素中存在对应关键词时输入对应内容 默认输入test
	...

```


#### 定义

`fileInput(fileInput map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileInput | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### formFill

#### 详细描述
formFill 是一个请求选项 用于设置页面输入框填写内容

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	inputMap = make(map[string]string, 0)
	inputMap[&#34;username&#34;] = &#34;admin&#34;
	inputMap[&#34;password&#34;] = &#34;123321&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.formFill(inputMap)) // 设置遇到输入框元素中存在对应关键词时输入对应内容 默认输入test
	...

```


#### 定义

`formFill(formFills map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| formFills | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### fromPlugin

#### 详细描述


#### 定义

`fromPlugin(fromPlugin string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### fullTimeout

#### 详细描述
fullTimeout 是一个请求选项 用于设置爬虫任务总超时时间

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.fullTimeout(1800)) // 设置爬虫任务总超时时间为1800秒
	...

```


#### 定义

`fullTimeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### headers

#### 详细描述
headers 是一个请求选项 用于设置爬虫发送请求时的headers

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	headerMap = make(map[string]string, 0)
	headerMap[&#34;Connection&#34;] = &#34;keep-alive&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.headers(headerMap)) // header以字典形式输入
	...

```


#### 定义

`headers(headersInfo map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headersInfo | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### ignoreQueryName

#### 详细描述
ignoreQueryName 是一个请求选项 用于设置url中的query名称去重时忽略

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.ignoreQueryName(&#34;sid&#34;, &#34;tid&#34;)) // 设置检测url是否重复时无视sid和tid这两个query
	...

```


#### 定义

`ignoreQueryName(names ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### invalidSuffix

#### 详细描述


#### 定义

`invalidSuffix(suffix []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| suffix | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### jsResultSend

#### 详细描述


#### 定义

`jsResultSend(storage func(s string)) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `func(s string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### leakless

#### 详细描述


#### 定义

`leakless(leakless string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### localStorage

#### 详细描述


#### 定义

`localStorage(storage map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### loginPassword

#### 详细描述


#### 定义

`loginPassword(password string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### loginUsername

#### 详细描述


#### 定义

`loginUsername(username string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxDepth

#### 详细描述
maxDepth 是一个请求选项 用于设置网站最大爬取深度

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.maxDepth(3)) // 设置网站最大爬取深度为3
	...

```


#### 定义

`maxDepth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxUrl

#### 详细描述
maxUrl 是一个请求选项 用于设置最大爬取url数量

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.maxUrl(100)) // 设置最大爬取url数量为100
	...

```


#### 定义

`maxUrl(maxUrl int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxUrl | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### pageTimeout

#### 详细描述
pageTimeout 是一个请求选项 用于设置单个页面超时时间

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.pageTimeout(30)) // 设置单个页面超时时间为30秒
	...

```


#### 定义

`pageTimeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rawCookie

#### 详细描述
rawCookie 是一个请求选项 用于设置爬虫发送请求时的cookie

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	cookie = `Apache=5651982500959.057.1731310579958; ULV=1731310579971:11:1:1:5651982500959.057.1731310579958:1727418057693; ALF=1735783078`
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.rawCookie(&#34;testphp.vulnweb.com&#34;, cookie)) // 原生cookie输入
	...

```


#### 定义

`rawCookie(domain string, cookieInfo string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| cookieInfo | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rawHeaders

#### 详细描述
rawHeaders 是一个请求选项 用于设置爬虫发送请求时的headers

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
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
| headerInfo | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### response

#### 详细描述


#### 定义

`response(targetUrl string, response string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` |   |
| response | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### runtimeID

#### 详细描述


#### 定义

`runtimeID(id string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### runtimeId

#### 详细描述


#### 定义

`runtimeId(id string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### saveToDB

#### 详细描述


#### 定义

`saveToDB(b bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### scanRangeLevel

#### 详细描述
scanRangeLevel 是一个请求选项 用于设置爬虫扫描范围

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
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
| scanRange | `scanRangeLevel` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### scanRepeatLevel

#### 详细描述
scanRepeatLevel 是一个请求选项 用于设置爬虫去重强度

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
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
| scanRepeat | `repeatLevel` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### sensitiveWords

#### 详细描述
sensitiveWords 是一个请求选项 用于设置页面按钮点击时的敏感词

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	sensitiveWords = &#34;logout,delete&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.sensitiveWords(sensitiveWords.Split(&#34;,&#34;))) // 当按钮所在元素中存在logout和delete关键词时不会点击
	...

```


#### 定义

`sensitiveWords(words []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| words | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### sessionStorage

#### 详细描述


#### 定义

`sessionStorage(storage map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### sourceType

#### 详细描述


#### 定义

`sourceType(sourceType string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourceType | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### stealth

#### 详细描述


#### 定义

`stealth(stealth bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| stealth | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### urlCheck

#### 详细描述
urlCheck 是一个请求选项 用于设置是否在爬虫前进行url存活检测

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.urlCheck(true))
	...

```


#### 定义

`urlCheck(check bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| check | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### vue

#### 详细描述


#### 定义

`vue(vue bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vue | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### whitelist

#### 详细描述
whitelist 是一个请求选项 用于设置只会被访问的url链接中包含的关键词

Examples:
```

	targetUrl = &#34;http://testphp.vulnweb.com/&#34;
	ch, err = crawlerx.StartCrawler(targetUrl, crawlerx.whitelist(&#34;test&#34;, &#34;click&#34;)) // 设置只会访问url中包含test和click的链接
	...

```


#### 定义

`whitelist(keywords ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


