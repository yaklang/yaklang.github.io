# rpa

|函数名|函数描述/介绍|
|:------|:--------|
| [rpa.Bruteforce](#bruteforce) |BruteForceStart 对目标登录页面进行基于浏览器的自动化登录爆破（导出名为 rpa.Bruteforce） 参数: - url: 目标登录页面 URL - opts: 可选项，如 rpa.bruteUsername、rpa.brutePassword、rpa.bruteUserEleme...|
| [rpa.Start](#start) |Start 启动一个基于浏览器的 RPA 爬虫，对目标 URL 进行自动化爬取（导出名为 rpa.Start） 参数: - url: 起始 URL - opt: 可选项，如 rpa.depth、rpa.proxy、rpa.maxUrl、rpa.timeout 等 返回值: - 请求结果的 chann...|
| [rpa.blackDomain](#blackdomain) |WithBlackDomain 添加域名黑名单（glob 匹配，导出名为 rpa.blackDomain） 参数: - matchStr: 域名 glob 匹配表达式 返回值: - RPA 配置可选项|
| [rpa.bruteButtonElement](#brutebuttonelement) |WithButtonElement 设置登录提交按钮的元素选择器（导出名为 rpa.bruteButtonElement） 参数: - element: 登录按钮的 CSS selector 返回值: - 爆破配置可选项|
| [rpa.bruteCaptchaElement](#brutecaptchaelement) |WithCaptchaElement 设置验证码输入框与验证码图片的元素选择器（导出名为 rpa.bruteCaptchaElement） 参数: - element: 验证码输入框的 CSS selector - pic: 验证码图片的 CSS selector 返回值: - 爆破配置可选项|
| [rpa.brutePassElement](#brutepasselement) |WithPasswordElement 设置密码输入框的元素选择器（导出名为 rpa.brutePassElement） 参数: - element: 密码输入框的 CSS selector 返回值: - 爆破配置可选项|
| [rpa.brutePassword](#brutepassword) |WithPassword 设置爆破密码（导出名为 rpa.brutePassword） 参数: - password: 一个或多个密码 返回值: - 爆破配置可选项|
| [rpa.bruteUserElement](#bruteuserelement) |WithUsernameElement 设置用户名输入框的元素选择器（导出名为 rpa.bruteUserElement） 参数: - element: 用户名输入框的 CSS selector 返回值: - 爆破配置可选项|
| [rpa.bruteUserPassPath](#bruteuserpasspath) |WithUserPassPath 从文件加载用户名/密码字典（导出名为 rpa.bruteUserPassPath） 参数: - filepath: 一个或两个文件路径，传一个时用户名密码使用同一文件 返回值: - 爆破配置可选项|
| [rpa.bruteUsername](#bruteusername) |WithUsername 设置爆破用户名（导出名为 rpa.bruteUsername） 参数: - username: 一个或多个用户名 返回值: - 爆破配置可选项|
| [rpa.click](#click) |ClickMethod 在爆破前对指定元素执行点击操作（导出名为 rpa.click） 参数: - selector: 目标元素的 CSS selector 返回值: - 爆破配置可选项|
| [rpa.depth](#depth) |WithSpiderDepth 设置 RPA 爬虫的扫描深度（导出名为 rpa.depth） 参数: - depth: 扫描深度 返回值: - RPA 配置可选项|
| [rpa.headers](#headers) |WithHeader 设置请求头，可传入 headers 文件路径或 JSON 字符串（导出名为 rpa.headers） 参数: - s: headers 文件路径或 JSON 字符串 返回值: - RPA 配置可选项|
| [rpa.input](#input) |InputMethod 在爆破前向指定输入框填入文本（导出名为 rpa.input） 参数: - selector: 输入框的 CSS selector - inputStr: 要填入的文本 返回值: - 爆破配置可选项|
| [rpa.maxUrl](#maxurl) |WithUrlCount 设置 URL 总数上限，超出后停止扫描（导出名为 rpa.maxUrl） 参数: - count: URL 数量上限 返回值: - RPA 配置可选项|
| [rpa.proxy](#proxy) |WithBrowserProxy 设置浏览器代理地址，可选附带用户名密码（导出名为 rpa.proxy） 参数: - url: 代理地址 - userinfo: 可选的代理用户名与密码 返回值: - RPA 配置可选项|
| [rpa.select](#select) |SelectMethod 在爆破前对指定下拉框选择某个选项（导出名为 rpa.select） 参数: - selector: 下拉框的 CSS selector - item: 要选择的选项 返回值: - 爆破配置可选项|
| [rpa.strictUrl](#stricturl) |WithStrictUrlDetect 设置是否严格检测 URL 是否存在风险（导出名为 rpa.strictUrl） 参数: - status: 是否启用严格 URL 检测 返回值: - RPA 配置可选项|
| [rpa.timeout](#timeout) |WithTimeout 设置单链接超时时间（导出名为 rpa.timeout） 参数: - timeout: 超时时间（秒） 返回值: - RPA 配置可选项|
| [rpa.whiteDomain](#whitedomain) |WithWhiteDomain 添加域名白名单（glob 匹配，导出名为 rpa.whiteDomain） 参数: - matchStr: 域名 glob 匹配表达式 返回值: - RPA 配置可选项|


## 函数定义
### Bruteforce

#### 详细描述
BruteForceStart 对目标登录页面进行基于浏览器的自动化登录爆破（导出名为 rpa.Bruteforce）

参数:

  - url: 目标登录页面 URL

  - opts: 可选项，如 rpa.bruteUsername、rpa.brutePassword、rpa.bruteUserElement 等



返回值:

  - 爆破成功的用户名

  - 爆破成功的密码




Example:

``````````````yak
// 对登录页面进行爆破（示意性示例，需要本地已安装浏览器）
username, password = rpa.Bruteforce("http://example.com/login",

	rpa.bruteUsername("admin"),
	rpa.brutePassword("admin", "123456"),
	rpa.bruteUserElement("#username"),
	rpa.brutePassElement("#password"),
	rpa.bruteButtonElement("#login"),

)
println(username, password)
``````````````


#### 定义

`Bruteforce(url string, opts ...ConfigOpt) (string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 目标登录页面 URL |
| opts | `...ConfigOpt` | 可选项，如 rpa.bruteUsername、rpa.brutePassword、rpa.bruteUserElement 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 爆破成功的用户名 |
| r2 | `string` | 爆破成功的密码 |


### Start

#### 详细描述
Start 启动一个基于浏览器的 RPA 爬虫，对目标 URL 进行自动化爬取（导出名为 rpa.Start）

参数:

  - url: 起始 URL

  - opt: 可选项，如 rpa.depth、rpa.proxy、rpa.maxUrl、rpa.timeout 等



返回值:

  - 请求结果的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 启动 RPA 爬虫并遍历抓取到的请求（示意性示例，需要本地已安装浏览器）
ch = rpa.Start("http://example.com", rpa.depth(2), rpa.maxUrl(50))~

	for req := range ch {
	    println(req.Url())
	}
``````````````


#### 定义

`Start(url string, opt ...core.ConfigOpt) (chan core.RequestIf, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 起始 URL |
| opt | `...core.ConfigOpt` | 可选项，如 rpa.depth、rpa.proxy、rpa.maxUrl、rpa.timeout 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan core.RequestIf` | 请求结果的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### blackDomain

#### 详细描述
WithBlackDomain 添加域名黑名单（glob 匹配，导出名为 rpa.blackDomain）

参数:

  - matchStr: 域名 glob 匹配表达式



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.blackDomain("*.ad.example.com")
println(opt)
``````````````


#### 定义

`blackDomain(matchStr string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchStr | `string` | 域名 glob 匹配表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### bruteButtonElement

#### 详细描述
WithButtonElement 设置登录提交按钮的元素选择器（导出名为 rpa.bruteButtonElement）

参数:

  - element: 登录按钮的 CSS selector



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.bruteButtonElement("#login")
println(opt)
``````````````


#### 定义

`bruteButtonElement(element string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` | 登录按钮的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### bruteCaptchaElement

#### 详细描述
WithCaptchaElement 设置验证码输入框与验证码图片的元素选择器（导出名为 rpa.bruteCaptchaElement）

参数:

  - element: 验证码输入框的 CSS selector

  - pic: 验证码图片的 CSS selector



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.bruteCaptchaElement("#captcha", "#captcha-img")
println(opt)
``````````````


#### 定义

`bruteCaptchaElement(element string, pic string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` | 验证码输入框的 CSS selector |
| pic | `string` | 验证码图片的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### brutePassElement

#### 详细描述
WithPasswordElement 设置密码输入框的元素选择器（导出名为 rpa.brutePassElement）

参数:

  - element: 密码输入框的 CSS selector



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.brutePassElement("#password")
println(opt)
``````````````


#### 定义

`brutePassElement(element string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` | 密码输入框的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### brutePassword

#### 详细描述
WithPassword 设置爆破密码（导出名为 rpa.brutePassword）

参数:

  - password: 一个或多个密码



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.brutePassword("admin", "123456")
println(opt)
``````````````


#### 定义

`brutePassword(password ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `...string` | 一个或多个密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### bruteUserElement

#### 详细描述
WithUsernameElement 设置用户名输入框的元素选择器（导出名为 rpa.bruteUserElement）

参数:

  - element: 用户名输入框的 CSS selector



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.bruteUserElement("#username")
println(opt)
``````````````


#### 定义

`bruteUserElement(element string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `string` | 用户名输入框的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### bruteUserPassPath

#### 详细描述
WithUserPassPath 从文件加载用户名/密码字典（导出名为 rpa.bruteUserPassPath）

参数:

  - filepath: 一个或两个文件路径，传一个时用户名密码使用同一文件



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.bruteUserPassPath("/tmp/users.txt", "/tmp/pass.txt")
println(opt)
``````````````


#### 定义

`bruteUserPassPath(filepath ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `...string` | 一个或两个文件路径，传一个时用户名密码使用同一文件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### bruteUsername

#### 详细描述
WithUsername 设置爆破用户名（导出名为 rpa.bruteUsername）

参数:

  - username: 一个或多个用户名



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.bruteUsername("admin", "root")
println(opt)
``````````````


#### 定义

`bruteUsername(username ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `...string` | 一个或多个用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### click

#### 详细描述
ClickMethod 在爆破前对指定元素执行点击操作（导出名为 rpa.click）

参数:

  - selector: 目标元素的 CSS selector



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.click("#agree")
println(opt)
``````````````


#### 定义

`click(selector string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 目标元素的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### depth

#### 详细描述
WithSpiderDepth 设置 RPA 爬虫的扫描深度（导出名为 rpa.depth）

参数:

  - depth: 扫描深度



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.depth(3)
println(opt)
``````````````


#### 定义

`depth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` | 扫描深度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### headers

#### 详细描述
WithHeader 设置请求头，可传入 headers 文件路径或 JSON 字符串（导出名为 rpa.headers）

参数:

  - s: headers 文件路径或 JSON 字符串



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.headers(`{"User-Agent": "yak-rpa"}`)
println(opt)
``````````````


#### 定义

`headers(s string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | headers 文件路径或 JSON 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### input

#### 详细描述
InputMethod 在爆破前向指定输入框填入文本（导出名为 rpa.input）

参数:

  - selector: 输入框的 CSS selector

  - inputStr: 要填入的文本



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.input("#extra", "value")
println(opt)
``````````````


#### 定义

`input(selector string, inputStr string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 输入框的 CSS selector |
| inputStr | `string` | 要填入的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### maxUrl

#### 详细描述
WithUrlCount 设置 URL 总数上限，超出后停止扫描（导出名为 rpa.maxUrl）

参数:

  - count: URL 数量上限



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.maxUrl(100)
println(opt)
``````````````


#### 定义

`maxUrl(count int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` | URL 数量上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### proxy

#### 详细描述
WithBrowserProxy 设置浏览器代理地址，可选附带用户名密码（导出名为 rpa.proxy）

参数:

  - url: 代理地址

  - userinfo: 可选的代理用户名与密码



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.proxy("http://127.0.0.1:8080")
println(opt)
``````````````


#### 定义

`proxy(url string, userinfo ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 代理地址 |
| userinfo | `...string` | 可选的代理用户名与密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### select

#### 详细描述
SelectMethod 在爆破前对指定下拉框选择某个选项（导出名为 rpa.select）

参数:

  - selector: 下拉框的 CSS selector

  - item: 要选择的选项



返回值:

  - 爆破配置可选项




Example:

``````````````yak
opt = rpa.select("#role", "admin")
println(opt)
``````````````


#### 定义

`select(selector string, item string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 下拉框的 CSS selector |
| item | `string` | 要选择的选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 爆破配置可选项 |


### strictUrl

#### 详细描述
WithStrictUrlDetect 设置是否严格检测 URL 是否存在风险（导出名为 rpa.strictUrl）

参数:

  - status: 是否启用严格 URL 检测



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.strictUrl(true)
println(opt)
``````````````


#### 定义

`strictUrl(status bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| status | `bool` | 是否启用严格 URL 检测 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### timeout

#### 详细描述
WithTimeout 设置单链接超时时间（导出名为 rpa.timeout）

参数:

  - timeout: 超时时间（秒）



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.timeout(10)
println(opt)
``````````````


#### 定义

`timeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` | 超时时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


### whiteDomain

#### 详细描述
WithWhiteDomain 添加域名白名单（glob 匹配，导出名为 rpa.whiteDomain）

参数:

  - matchStr: 域名 glob 匹配表达式



返回值:

  - RPA 配置可选项




Example:

``````````````yak
opt = rpa.whiteDomain("*.example.com")
println(opt)
``````````````


#### 定义

`whiteDomain(matchStr string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchStr | `string` | 域名 glob 匹配表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | RPA 配置可选项 |


