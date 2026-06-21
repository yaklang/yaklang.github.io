# simulator {#library-simulator}

`simulator` 库提供基于真实浏览器的 Web 登录爆破能力，能处理动态登录页、JS 加密、验证码等复杂场景，按元素选择器定位用户名/密码/提交按钮并自动尝试字典。

典型使用场景：

- 登录爆破：`simulator.HttpBruteForce(targetUrl, opts...)` 对登录页爆破，配 `simulator.usernameSelector` / `simulator.passwordSelector` / `simulator.submitButtonSelector` 定位元素，`simulator.username` / `simulator.password`（或 `simulator.usernameList` / `simulator.passwordList`）提供字典。
- 验证码与判定：`simulator.captchaImgSelector` / `simulator.captchaInputSelector` / `simulator.captchaMode` 处理验证码，`simulator.successMatchers` / `simulator.loginDetectMode` 判定登录是否成功，`simulator.preAction` 在爆破前执行自定义 JS。

与相邻库的关系：`simulator` 走真实浏览器，专攻"前端加密 + 验证码"的登录爆破；与 `brute`（协议层爆破）、`rpa`/`crawlerx`（浏览器自动化）互补。

> 共 25 个函数、8 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| defaultChangeMode | `simulator.loginDetectMode` | -1 |
| htmlChangeMode | `simulator.loginDetectMode` | 1 |
| leaklessDefault | `simulator.LeaklessMode` | 0 |
| leaklessOff | `simulator.LeaklessMode` | -1 |
| leaklessOn | `simulator.LeaklessMode` | 1 |
| simple | `map[string]interface {}` | map[string]interface {}{&#34;CreateBrowser&#34;: (func(...simple.BrowserConfigOpt) (*simple.VBrowser, error))(0x37ec9c0), &#34;bodyModifyTarget&#34;: &#34;body&#34;, &#34;bodyReplaceTarget&#34;: &#34;bodyReplace&#34;, &#34;createBrowser&#34;: (func(...simple.BrowserConfigOpt) (*simple.VBrowser, error))(0x37ec9c0), &#34;exePath&#34;: (func(string) simple.BrowserConfigOpt)(0x37ebfc0), &#34;headersModifyTarget&#34;: &#34;headers&#34;, &#34;headless&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec2c0), &#34;hijack&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec340), &#34;hostModifyTarget&#34;: &#34;host&#34;, &#34;leakless&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec940), &#34;noSandBox&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec240), &#34;proxy&#34;: (func(string, ...string) simple.BrowserConfigOpt)(0x37ec0a0), &#34;requestModify&#34;: (func(string, simple.ModifyTarget, interface {}) simple.BrowserConfigOpt)(0x37ec640), &#34;responseModify&#34;: (func(string, simple.ModifyTarget, interface {}) simple.BrowserConfigOpt)(0x37ec3c0), &#34;timeout&#34;: (func(int) simple.BrowserConfigOpt)(0x37ec8c0), &#34;wsAddress&#34;: (func(string) simple.BrowserConfigOpt)(0x37ebee0)} |
| stringMatchMode | `simulator.loginDetectMode` | 2 |
| urlChangeMode | `simulator.loginDetectMode` | 0 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [simulator.captchaImgSelector](#captchaimgselector) | `selector string` | `BruteConfigOpt` | 是一个请求选项 用于在验证码图片位置识别错误时输入验证码图片对应的selector |
| [simulator.captchaInputSelector](#captchainputselector) | `selector string` | `BruteConfigOpt` | 是一个请求选项 用于在验证码输入框位置识别错误时输入验证码输入框对应的selector |
| [simulator.captchaMode](#captchamode) | `mode string` | `BruteConfigOpt` | 特殊选项 如果你不知道怎么用请勿使用 |
| [simulator.captchaType](#captchatype) | `typeEnum int` | `BruteConfigOpt` | 是一个请求选项 用于标识使用验证码的种类 其中1 其他（正常请勿使用）2 老版ddddocr server接口（url以/ocr/b64/json结尾） 3 新版ddddocr server接口（url以/ocr结尾） |
| [simulator.captchaUrl](#captchaurl) | `url string` | `BruteConfigOpt` | 是一个请求选项 用于验证码的url地址 |
| [simulator.exePath](#exepath) | `exePath string` | `BruteConfigOpt` | 是一个请求选项 用于输入浏览器路径 |
| [simulator.extraWaitLoadTime](#extrawaitloadtime) | `time int` | `BruteConfigOpt` | 是一个请求选项 用于选择页面加载的额外页面等待时间 单位毫秒 |
| [simulator.fromPlugin](#fromplugin) | `fromPlugin string` | `BruteConfigOpt` | 是一个请求选项 用于标识结果来源插件名（导出名为 simulator.fromPlugin） |
| [simulator.leaklessStatus](#leaklessstatus) | `leakless LeaklessMode` | `BruteConfigOpt` | 是一个请求选项 用于选择是否自动关闭浏览器进程 |
| [simulator.passwordList](#passwordlist) | `password []string` | `BruteConfigOpt` | 是一个请求选项 用于输入爆破的密码的列表 |
| [simulator.passwordSelector](#passwordselector) | `selector string` | `BruteConfigOpt` | 是一个请求选项 用于在密码框位置识别错误时输入密码框对应的selector |
| [simulator.preAction](#preaction) | `actionsJs string` | `BruteConfigOpt` | 是一个请求选项 用于在登录前执行预置动作（以 JSON 字符串描述，导出名为 simulator.preAction） |
| [simulator.runtimeID](#runtimeid) | `runtimeID string` | `BruteConfigOpt` | 是一个请求选项 用于绑定运行时 ID（导出名为 simulator.runtimeID） |
| [simulator.saveToDB](#savetodb) | `saveToDB bool` | `BruteConfigOpt` | 是一个请求选项 用于设置是否将爆破结果保存到数据库（导出名为 simulator.saveToDB） |
| [simulator.sourceType](#sourcetype) | `sourceType string` | `BruteConfigOpt` | 是一个请求选项 用于标识结果来源类型（导出名为 simulator.sourceType） |
| [simulator.submitButtonSelector](#submitbuttonselector) | `selector string` | `BruteConfigOpt` | 是一个请求选项 用于在提交登录按钮位置识别错误时输入提交登录按钮对应的selector |
| [simulator.usernameList](#usernamelist) | `username []string` | `BruteConfigOpt` | 是一个请求选项 用于输入爆破的用户名的列表 |
| [simulator.usernameSelector](#usernameselector) | `selector string` | `BruteConfigOpt` | 是一个请求选项 用于在用户框位置识别错误时输入用户框对应的selector |
| [simulator.wsAddress](#wsaddress) | `ws string` | `BruteConfigOpt` | 是一个请求选项 用于输入浏览器的websocket地址 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [simulator.HttpBruteForce](#httpbruteforce) | `targetUrl string, opts ...BruteConfigOpt` | `chan Result, error` | 进行目标url的页面进行http爆破 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爆破结果 |
| [simulator.loginDetectMode](#logindetectmode) | `mode loginDetectMode, degree ...float64` | `BruteConfigOpt` | 是一个请求选项 用于选择识别登录跳转的模式， |
| [simulator.password](#password) | `password ...string` | `BruteConfigOpt` | 是一个请求选项 用于输入爆破的密码 |
| [simulator.proxy](#proxy) | `proxy string, details ...string` | `BruteConfigOpt` | 是一个请求选项 用于输入代理服务器地址 |
| [simulator.successMatchers](#successmatchers) | `matchers ...string` | `BruteConfigOpt` | 是一个请求选项 用于在页面变化中匹配指定字符串来判断登录成功 |
| [simulator.username](#username) | `username ...string` | `BruteConfigOpt` | 是一个请求选项 用于输入爆破的用户名 |

## 函数详情

### captchaImgSelector {#captchaimgselector}

```go
captchaImgSelector(selector string) BruteConfigOpt
```

是一个请求选项 用于在验证码图片位置识别错误时输入验证码图片对应的selector

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 验证码图片的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaImgSelector("#img"))
``````````````

---

### captchaInputSelector {#captchainputselector}

```go
captchaInputSelector(selector string) BruteConfigOpt
```

是一个请求选项 用于在验证码输入框位置识别错误时输入验证码输入框对应的selector

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 验证码输入框的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaInputSelector("#captcha"))
``````````````

---

### captchaMode {#captchamode}

```go
captchaMode(mode string) BruteConfigOpt
```

特殊选项 如果你不知道怎么用请勿使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| mode | `string` | 验证码模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
opt = simulator.captchaMode("default")
println(opt)
``````````````

---

### captchaType {#captchatype}

```go
captchaType(typeEnum int) BruteConfigOpt
```

是一个请求选项 用于标识使用验证码的种类 其中1 其他（正常请勿使用）2 老版ddddocr server接口（url以/ocr/b64/json结尾） 3 新版ddddocr server接口（url以/ocr结尾）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| typeEnum | `int` | 验证码接口类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaType(3))
``````````````

---

### captchaUrl {#captchaurl}

```go
captchaUrl(url string) BruteConfigOpt
```

是一个请求选项 用于验证码的url地址

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 验证码识别服务的 URL |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaUrl("http://localhost:8088/"))
``````````````

---

### exePath {#exepath}

```go
exePath(exePath string) BruteConfigOpt
```

是一个请求选项 用于输入浏览器路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| exePath | `string` | 浏览器可执行文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.exePath("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")) // 不存在用户名密码的代理
``````````````

---

### extraWaitLoadTime {#extrawaitloadtime}

```go
extraWaitLoadTime(time int) BruteConfigOpt
```

是一个请求选项 用于选择页面加载的额外页面等待时间 单位毫秒

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| time | `int` | 额外等待时间（毫秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.extraWaitLoadTime(1000))
``````````````

---

### fromPlugin {#fromplugin}

```go
fromPlugin(fromPlugin string) BruteConfigOpt
```

是一个请求选项 用于标识结果来源插件名（导出名为 simulator.fromPlugin）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| fromPlugin | `string` | 来源插件名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
opt = simulator.fromPlugin("my-plugin")
println(opt)
``````````````

---

### leaklessStatus {#leaklessstatus}

```go
leaklessStatus(leakless LeaklessMode) BruteConfigOpt
```

是一个请求选项 用于选择是否自动关闭浏览器进程

simulator.leaklessOn为开启 simulator.leaklessOff为关闭 simulator.leaklessDefault为默认

浏览器自动进程关闭进行在windows下会报病毒 默认在windows下会关闭

当关闭时 如果强制关闭爬虫进程时chrome进程会存在于后台 浏览器进程后台过多时请手动进行关闭

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| leakless | `LeaklessMode` | leakless 模式，如 simulator.leaklessOn、simulator.leaklessOff、simulator.leaklessDefault |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.leaklessStatus(simulator.leaklessDefault))
``````````````

---

### passwordList {#passwordlist}

```go
passwordList(password []string) BruteConfigOpt
```

是一个请求选项 用于输入爆破的密码的列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| password | `[]string` | 密码列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
userList = ["admin", "root"]
passList = ["123", "admin"]
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameList(userList), simulator.passwordList(passList))
``````````````

---

### passwordSelector {#passwordselector}

```go
passwordSelector(selector string) BruteConfigOpt
```

是一个请求选项 用于在密码框位置识别错误时输入密码框对应的selector

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 密码输入框的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.passwordSelector("#password"))
``````````````

---

### preAction {#preaction}

```go
preAction(actionsJs string) BruteConfigOpt
```

是一个请求选项 用于在登录前执行预置动作（以 JSON 字符串描述，导出名为 simulator.preAction）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| actionsJs | `string` | 预置动作的 JSON 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
// 预置动作 JSON 用于在爆破前执行点击、输入等操作（示意性示例）
opt = simulator.preAction(`[]`)
println(opt)
``````````````

---

### runtimeID {#runtimeid}

```go
runtimeID(runtimeID string) BruteConfigOpt
```

是一个请求选项 用于绑定运行时 ID（导出名为 simulator.runtimeID）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| runtimeID | `string` | 运行时 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
opt = simulator.runtimeID("runtime-uuid")
println(opt)
``````````````

---

### saveToDB {#savetodb}

```go
saveToDB(saveToDB bool) BruteConfigOpt
```

是一个请求选项 用于设置是否将爆破结果保存到数据库（导出名为 simulator.saveToDB）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| saveToDB | `bool` | 是否保存到数据库 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
opt = simulator.saveToDB(true)
println(opt)
``````````````

---

### sourceType {#sourcetype}

```go
sourceType(sourceType string) BruteConfigOpt
```

是一个请求选项 用于标识结果来源类型（导出名为 simulator.sourceType）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sourceType | `string` | 来源类型，如 &#34;scan&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
opt = simulator.sourceType("scan")
println(opt)
``````````````

---

### submitButtonSelector {#submitbuttonselector}

```go
submitButtonSelector(selector string) BruteConfigOpt
```

是一个请求选项 用于在提交登录按钮位置识别错误时输入提交登录按钮对应的selector

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 登录提交按钮的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.submitButtonSelector("#login"))
``````````````

---

### usernameList {#usernamelist}

```go
usernameList(username []string) BruteConfigOpt
```

是一个请求选项 用于输入爆破的用户名的列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| username | `[]string` | 用户名列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
userList = ["admin", "root"]
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameList(userList), simulator.password("admin", "luckyadmin123"))
``````````````

---

### usernameSelector {#usernameselector}

```go
usernameSelector(selector string) BruteConfigOpt
```

是一个请求选项 用于在用户框位置识别错误时输入用户框对应的selector

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selector | `string` | 用户名输入框的 CSS selector |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameSelector("#username"))
``````````````

---

### wsAddress {#wsaddress}

```go
wsAddress(ws string) BruteConfigOpt
```

是一个请求选项 用于输入浏览器的websocket地址

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ws | `string` | 浏览器的 WebSocket 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.wsAddress("http://127.0.0.1:7317/"))
``````````````

---

## 可变参数函数详情

### HttpBruteForce {#httpbruteforce}

```go
HttpBruteForce(targetUrl string, opts ...BruteConfigOpt) (chan Result, error)
```

进行目标url的页面进行http爆破 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爆破结果

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| targetUrl | `string` | 目标登录页面 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...BruteConfigOpt` | 零个到多个请求选项，如 simulator.username、simulator.password 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan Result` | 爆破结果的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin"), simulator.password("admin", "luckyadmin123"))

for item := range ch {
    yakit.Info(`[bruteforce] %s:%s login %v with info: %s`, item.Username(), item.Password(), item.Status(), item.Info())
}
``````````````

---

### loginDetectMode {#logindetectmode}

```go
loginDetectMode(mode loginDetectMode, degree ...float64) BruteConfigOpt
```

是一个请求选项 用于选择识别登录跳转的模式，

其中simulator.htmlChangeMode 表示检测html变化程度 超过一定数字则认为发生登录跳转

simulator.urlChangeMode 表示检测url变化 如果url发生变化则认为登录成功

simulator.defaultChangeMode 表示同时使用以上两种策略

simulator.stringMatchMode 表示使用页面内容或变动中的字符串匹配结果判断登录

第二个参数表示检测html变化程度的比例，超过该比例则认为发生变化 默认为0.6

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mode | `loginDetectMode` | 登录检测模式，如 simulator.htmlChangeMode、simulator.urlChangeMode |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| degree | `...float64` | 可选的 html 变化比例阈值（默认 0.6） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.loginDetectMode(simulator.htmlChangeMode, 0.6))
``````````````

---

### password {#password}

```go
password(password ...string) BruteConfigOpt
```

是一个请求选项 用于输入爆破的密码

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| password | `...string` | 一个或多个密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin", "root"), simulator.password("admin", "luckyadmin123"))
``````````````

---

### proxy {#proxy}

```go
proxy(proxy string, details ...string) BruteConfigOpt
```

是一个请求选项 用于输入代理服务器地址

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `string` | 代理服务器地址 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| details | `...string` | 可选的代理认证信息（用户名、密码） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.proxy("http://127.0.0.1:8123/")) // 不存在用户名密码的代理
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.proxy("http://127.0.0.1:8123/", "admin", "123321")) // 存在用户名密码的代理
``````````````

---

### successMatchers {#successmatchers}

```go
successMatchers(matchers ...string) BruteConfigOpt
```

是一个请求选项 用于在页面变化中匹配指定字符串来判断登录成功

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| matchers | `...string` | 一个或多个用于判断登录成功的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.successMatchers("login success"))
``````````````

---

### username {#username}

```go
username(username ...string) BruteConfigOpt
```

是一个请求选项 用于输入爆破的用户名

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| username | `...string` | 一个或多个用户名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteConfigOpt` | 请求选项 |

**示例**

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin", "root"), simulator.password("admin", "luckyadmin123"))
``````````````

---

