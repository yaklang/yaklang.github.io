# rpa {#library-rpa}

`rpa` 库提供基于浏览器的流程自动化（RPA）能力，可模拟点击、输入、选择、登录爆破等真实用户操作，常用于复杂登录流程的自动化、带验证码的爆破与动态站点交互。

典型使用场景：

- 自动化遍历：`rpa.Start(url, opts...)` 启动浏览器自动化并返回请求流，配 `rpa.click` / `rpa.input` / `rpa.select` 模拟交互，`rpa.depth` / `rpa.maxUrl` / `rpa.whiteDomain` / `rpa.blackDomain` 控制范围。
- 登录爆破：`rpa.Bruteforce(url, opts...)` 对登录页爆破，配 `rpa.bruteUserElement` / `rpa.brutePassElement` / `rpa.bruteButtonElement` 定位元素，`rpa.bruteUsername` / `rpa.brutePassword` 提供字典，`rpa.bruteCaptchaElement` 处理验证码。

与相邻库的关系：`rpa` 走真实浏览器，与 `crawlerx`（浏览器爬虫）、`simulator`（模拟登录爆破）、`browser`（浏览器实例）思路相通，专攻"需要真实交互"的自动化场景。

> 共 20 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rpa.blackDomain](#blackdomain) | `matchStr string` | `ConfigOpt` | WithBlackDomain 添加域名黑名单（glob 匹配，导出名为 rpa.blackDomain） |
| [rpa.bruteButtonElement](#brutebuttonelement) | `element string` | `ConfigOpt` | WithButtonElement 设置登录提交按钮的元素选择器（导出名为 rpa.bruteButtonElement） |
| [rpa.bruteCaptchaElement](#brutecaptchaelement) | `element string, pic string` | `ConfigOpt` | WithCaptchaElement 设置验证码输入框与验证码图片的元素选择器（导出名为 rpa.bruteCaptchaElement） |
| [rpa.brutePassElement](#brutepasselement) | `element string` | `ConfigOpt` | WithPasswordElement 设置密码输入框的元素选择器（导出名为 rpa.brutePassElement） |
| [rpa.bruteUserElement](#bruteuserelement) | `element string` | `ConfigOpt` | WithUsernameElement 设置用户名输入框的元素选择器（导出名为 rpa.bruteUserElement） |
| [rpa.click](#click) | `selector string` | `ConfigOpt` | ClickMethod 在爆破前对指定元素执行点击操作（导出名为 rpa.click） |
| [rpa.depth](#depth) | `depth int` | `ConfigOpt` | WithSpiderDepth 设置 RPA 爬虫的扫描深度（导出名为 rpa.depth） |
| [rpa.headers](#headers) | `s string` | `ConfigOpt` | WithHeader 设置请求头，可传入 headers 文件路径或 JSON 字符串（导出名为 rpa.headers） |
| [rpa.input](#input) | `selector string, inputStr string` | `ConfigOpt` | InputMethod 在爆破前向指定输入框填入文本（导出名为 rpa.input） |
| [rpa.maxUrl](#maxurl) | `count int` | `ConfigOpt` | WithUrlCount 设置 URL 总数上限，超出后停止扫描（导出名为 rpa.maxUrl） |
| [rpa.select](#select) | `selector string, item string` | `ConfigOpt` | SelectMethod 在爆破前对指定下拉框选择某个选项（导出名为 rpa.select） |
| [rpa.strictUrl](#stricturl) | `status bool` | `ConfigOpt` | WithStrictUrlDetect 设置是否严格检测 URL 是否存在风险（导出名为 rpa.strictUrl） |
| [rpa.timeout](#timeout) | `timeout int` | `ConfigOpt` | WithTimeout 设置单链接超时时间（导出名为 rpa.timeout） |
| [rpa.whiteDomain](#whitedomain) | `matchStr string` | `ConfigOpt` | WithWhiteDomain 添加域名白名单（glob 匹配，导出名为 rpa.whiteDomain） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rpa.Bruteforce](#bruteforce) | `url string, opts ...ConfigOpt` | `string, string` | BruteForceStart 对目标登录页面进行基于浏览器的自动化登录爆破（导出名为 rpa.Bruteforce） |
| [rpa.Start](#start) | `url string, opt ...core.ConfigOpt` | `chan core.RequestIf, error` | 启动一个基于浏览器的 RPA 爬虫，对目标 URL 进行自动化爬取（导出名为 rpa.Start） |
| [rpa.brutePassword](#brutepassword) | `password ...string` | `ConfigOpt` | WithPassword 设置爆破密码（导出名为 rpa.brutePassword） |
| [rpa.bruteUserPassPath](#bruteuserpasspath) | `filepath ...string` | `ConfigOpt` | WithUserPassPath 从文件加载用户名/密码字典（导出名为 rpa.bruteUserPassPath） |
| [rpa.bruteUsername](#bruteusername) | `username ...string` | `ConfigOpt` | WithUsername 设置爆破用户名（导出名为 rpa.bruteUsername） |
| [rpa.proxy](#proxy) | `url string, userinfo ...string` | `ConfigOpt` | WithBrowserProxy 设置浏览器代理地址，可选附带用户名密码（导出名为 rpa.proxy） |

## 函数详情

### blackDomain {#blackdomain}

```go
blackDomain(matchStr string) ConfigOpt
```

WithBlackDomain 添加域名黑名单（glob 匹配，导出名为 rpa.blackDomain）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| matchStr | `string` | 域名 glob 匹配表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.blackDomain("*.ad.example.com")
println(opt)
``````````````

---

### bruteButtonElement {#brutebuttonelement}

```go
bruteButtonElement(element string) ConfigOpt
```

WithButtonElement 设置登录提交按钮的元素选择器（导出名为 rpa.bruteButtonElement）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| element | `string` | 登录按钮的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.bruteButtonElement("#login")
println(opt)
``````````````

---

### bruteCaptchaElement {#brutecaptchaelement}

```go
bruteCaptchaElement(element string, pic string) ConfigOpt
```

WithCaptchaElement 设置验证码输入框与验证码图片的元素选择器（导出名为 rpa.bruteCaptchaElement）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| element | `string` | 验证码输入框的 CSS selector |
| pic | `string` | 验证码图片的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.bruteCaptchaElement("#captcha", "#captcha-img")
println(opt)
``````````````

---

### brutePassElement {#brutepasselement}

```go
brutePassElement(element string) ConfigOpt
```

WithPasswordElement 设置密码输入框的元素选择器（导出名为 rpa.brutePassElement）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| element | `string` | 密码输入框的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.brutePassElement("#password")
println(opt)
``````````````

---

### bruteUserElement {#bruteuserelement}

```go
bruteUserElement(element string) ConfigOpt
```

WithUsernameElement 设置用户名输入框的元素选择器（导出名为 rpa.bruteUserElement）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| element | `string` | 用户名输入框的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.bruteUserElement("#username")
println(opt)
``````````````

---

### click {#click}

```go
click(selector string) ConfigOpt
```

ClickMethod 在爆破前对指定元素执行点击操作（导出名为 rpa.click）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 目标元素的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.click("#agree")
println(opt)
``````````````

---

### depth {#depth}

```go
depth(depth int) ConfigOpt
```

WithSpiderDepth 设置 RPA 爬虫的扫描深度（导出名为 rpa.depth）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| depth | `int` | 扫描深度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.depth(3)
println(opt)
``````````````

---

### headers {#headers}

```go
headers(s string) ConfigOpt
```

WithHeader 设置请求头，可传入 headers 文件路径或 JSON 字符串（导出名为 rpa.headers）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | headers 文件路径或 JSON 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.headers(`{"User-Agent": "yak-rpa"}`)
println(opt)
``````````````

---

### input {#input}

```go
input(selector string, inputStr string) ConfigOpt
```

InputMethod 在爆破前向指定输入框填入文本（导出名为 rpa.input）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 输入框的 CSS selector |
| inputStr | `string` | 要填入的文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.input("#extra", "value")
println(opt)
``````````````

---

### maxUrl {#maxurl}

```go
maxUrl(count int) ConfigOpt
```

WithUrlCount 设置 URL 总数上限，超出后停止扫描（导出名为 rpa.maxUrl）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| count | `int` | URL 数量上限 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.maxUrl(100)
println(opt)
``````````````

---

### select {#select}

```go
select(selector string, item string) ConfigOpt
```

SelectMethod 在爆破前对指定下拉框选择某个选项（导出名为 rpa.select）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 下拉框的 CSS selector |
| item | `string` | 要选择的选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.select("#role", "admin")
println(opt)
``````````````

---

### strictUrl {#stricturl}

```go
strictUrl(status bool) ConfigOpt
```

WithStrictUrlDetect 设置是否严格检测 URL 是否存在风险（导出名为 rpa.strictUrl）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| status | `bool` | 是否启用严格 URL 检测 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.strictUrl(true)
println(opt)
``````````````

---

### timeout {#timeout}

```go
timeout(timeout int) ConfigOpt
```

WithTimeout 设置单链接超时时间（导出名为 rpa.timeout）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| timeout | `int` | 超时时间（秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.timeout(10)
println(opt)
``````````````

---

### whiteDomain {#whitedomain}

```go
whiteDomain(matchStr string) ConfigOpt
```

WithWhiteDomain 添加域名白名单（glob 匹配，导出名为 rpa.whiteDomain）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| matchStr | `string` | 域名 glob 匹配表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.whiteDomain("*.example.com")
println(opt)
``````````````

---

## 可变参数函数详情

### Bruteforce {#bruteforce}

```go
Bruteforce(url string, opts ...ConfigOpt) (string, string)
```

BruteForceStart 对目标登录页面进行基于浏览器的自动化登录爆破（导出名为 rpa.Bruteforce）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 目标登录页面 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...ConfigOpt` | 可选项，如 rpa.bruteUsername、rpa.brutePassword、rpa.bruteUserElement 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 爆破成功的用户名 |
| r2 | `string` | 爆破成功的密码 |

**示例**

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

---

### Start {#start}

```go
Start(url string, opt ...core.ConfigOpt) (chan core.RequestIf, error)
```

启动一个基于浏览器的 RPA 爬虫，对目标 URL 进行自动化爬取（导出名为 rpa.Start）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 起始 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...core.ConfigOpt` | 可选项，如 rpa.depth、rpa.proxy、rpa.maxUrl、rpa.timeout 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan core.RequestIf` | 请求结果的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 启动 RPA 爬虫并遍历抓取到的请求（示意性示例，需要本地已安装浏览器）
ch = rpa.Start("http://example.com", rpa.depth(2), rpa.maxUrl(50))~

	for req := range ch {
	    println(req.Url())
	}
``````````````

---

### brutePassword {#brutepassword}

```go
brutePassword(password ...string) ConfigOpt
```

WithPassword 设置爆破密码（导出名为 rpa.brutePassword）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| password | `...string` | 一个或多个密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.brutePassword("admin", "123456")
println(opt)
``````````````

---

### bruteUserPassPath {#bruteuserpasspath}

```go
bruteUserPassPath(filepath ...string) ConfigOpt
```

WithUserPassPath 从文件加载用户名/密码字典（导出名为 rpa.bruteUserPassPath）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filepath | `...string` | 一个或两个文件路径，传一个时用户名密码使用同一文件 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.bruteUserPassPath("/tmp/users.txt", "/tmp/pass.txt")
println(opt)
``````````````

---

### bruteUsername {#bruteusername}

```go
bruteUsername(username ...string) ConfigOpt
```

WithUsername 设置爆破用户名（导出名为 rpa.bruteUsername）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| username | `...string` | 一个或多个用户名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 爆破配置可选项 |

**示例**

``````````````yak
opt = rpa.bruteUsername("admin", "root")
println(opt)
``````````````

---

### proxy {#proxy}

```go
proxy(url string, userinfo ...string) ConfigOpt
```

WithBrowserProxy 设置浏览器代理地址，可选附带用户名密码（导出名为 rpa.proxy）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 代理地址 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| userinfo | `...string` | 可选的代理用户名与密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | RPA 配置可选项 |

**示例**

``````````````yak
opt = rpa.proxy("http://127.0.0.1:8080")
println(opt)
``````````````

---

