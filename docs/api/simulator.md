# simulator

|实例名|实例描述|
|:------|:--------|
defaultChangeMode|(simulator.loginDetectMode) -1|
htmlChangeMode|(simulator.loginDetectMode) 1|
leaklessDefault|(simulator.LeaklessMode) 0|
leaklessOff|(simulator.LeaklessMode) -1|
leaklessOn|(simulator.LeaklessMode) 1|
simple|(map[string]interface {}) map[string]interface {}{&#34;CreateBrowser&#34;: (func(...simple.BrowserConfigOpt) (*simple.VBrowser, error))(0x37ec9c0), &#34;bodyModifyTarget&#34;: &#34;body&#34;, &#34;bodyReplaceTarget&#34;: &#34;bodyReplace&#34;, &#34;createBrowser&#34;: (func(...simple.BrowserConfigOpt) (*simple.VBrowser, error))(0x37ec9c0), &#34;exePath&#34;: (func(string) simple.BrowserConfigOpt)(0x37ebfc0), &#34;headersModifyTarget&#34;: &#34;headers&#34;, &#34;headless&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec2c0), &#34;hijack&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec340), &#34;hostModifyTarget&#34;: &#34;host&#34;, &#34;leakless&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec940), &#34;noSandBox&#34;: (func(bool) simple.BrowserConfigOpt)(0x37ec240), &#34;proxy&#34;: (func(string, ...string) simple.BrowserConfigOpt)(0x37ec0a0), &#34;requestModify&#34;: (func(string, simple.ModifyTarget, interface {}) simple.BrowserConfigOpt)(0x37ec640), &#34;responseModify&#34;: (func(string, simple.ModifyTarget, interface {}) simple.BrowserConfigOpt)(0x37ec3c0), &#34;timeout&#34;: (func(int) simple.BrowserConfigOpt)(0x37ec8c0), &#34;wsAddress&#34;: (func(string) simple.BrowserConfigOpt)(0x37ebee0)}|
stringMatchMode|(simulator.loginDetectMode) 2|
urlChangeMode|(simulator.loginDetectMode) 0|

|函数名|函数描述/介绍|
|:------|:--------|
| [simulator.HttpBruteForce](#httpbruteforce) |HttpBruteForce 进行目标url的页面进行http爆破 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爆破结果 参数: - targetUrl: 目标登录页面 URL - opts: 零个到多个请求选...|
| [simulator.captchaImgSelector](#captchaimgselector) |captchaImgSelector 是一个请求选项 用于在验证码图片位置识别错误时输入验证码图片对应的selector 参数: - selector: 验证码图片的 CSS selector 返回值: - 请求选项|
| [simulator.captchaInputSelector](#captchainputselector) |captchaInputSelector 是一个请求选项 用于在验证码输入框位置识别错误时输入验证码输入框对应的selector 参数: - selector: 验证码输入框的 CSS selector 返回值: - 请求选项|
| [simulator.captchaMode](#captchamode) |captchaMode 特殊选项 如果你不知道怎么用请勿使用 参数: - mode: 验证码模式 返回值: - 请求选项|
| [simulator.captchaType](#captchatype) |captchaType 是一个请求选项 用于标识使用验证码的种类 其中1 其他（正常请勿使用）2 老版ddddocr server接口（url以/ocr/b64/json结尾） 3 新版ddddocr server接口（url以/ocr结尾） 参数: - typeEnum: 验证码接口类型 返回值:...|
| [simulator.captchaUrl](#captchaurl) |captchaUrl 是一个请求选项 用于验证码的url地址 参数: - url: 验证码识别服务的 URL 返回值: - 请求选项|
| [simulator.exePath](#exepath) |exePath 是一个请求选项 用于输入浏览器路径 参数: - exePath: 浏览器可执行文件路径 返回值: - 请求选项|
| [simulator.extraWaitLoadTime](#extrawaitloadtime) |extraWaitLoadTime 是一个请求选项 用于选择页面加载的额外页面等待时间 单位毫秒 参数: - time: 额外等待时间（毫秒） 返回值: - 请求选项|
| [simulator.fromPlugin](#fromplugin) |fromPlugin 是一个请求选项 用于标识结果来源插件名（导出名为 simulator.fromPlugin） 参数: - fromPlugin: 来源插件名 返回值: - 请求选项|
| [simulator.leaklessStatus](#leaklessstatus) |leaklessStatus 是一个请求选项 用于选择是否自动关闭浏览器进程 simulator.leaklessOn为开启 simulator.leaklessOff为关闭 simulator.leaklessDefault为默认 浏览器自动进程关闭进行在windows下会报病毒 默认在windo...|
| [simulator.loginDetectMode](#logindetectmode) |loginDetectMode 是一个请求选项 用于选择识别登录跳转的模式， 其中simulator.htmlChangeMode 表示检测html变化程度 超过一定数字则认为发生登录跳转 simulator.urlChangeMode 表示检测url变化 如果url发生变化则认为登录成功 simu...|
| [simulator.password](#password) |password 是一个请求选项 用于输入爆破的密码 参数: - password: 一个或多个密码 返回值: - 请求选项|
| [simulator.passwordList](#passwordlist) |passwordList 是一个请求选项 用于输入爆破的密码的列表 参数: - password: 密码列表 返回值: - 请求选项|
| [simulator.passwordSelector](#passwordselector) |passwordSelector 是一个请求选项 用于在密码框位置识别错误时输入密码框对应的selector 参数: - selector: 密码输入框的 CSS selector 返回值: - 请求选项|
| [simulator.preAction](#preaction) |preAction 是一个请求选项 用于在登录前执行预置动作（以 JSON 字符串描述，导出名为 simulator.preAction） 参数: - actionsJs: 预置动作的 JSON 字符串 返回值: - 请求选项|
| [simulator.proxy](#proxy) |proxy 是一个请求选项 用于输入代理服务器地址 参数: - proxy: 代理服务器地址 - details: 可选的代理认证信息（用户名、密码） 返回值: - 请求选项|
| [simulator.runtimeID](#runtimeid) |runtimeID 是一个请求选项 用于绑定运行时 ID（导出名为 simulator.runtimeID） 参数: - runtimeID: 运行时 ID 返回值: - 请求选项|
| [simulator.saveToDB](#savetodb) |saveToDB 是一个请求选项 用于设置是否将爆破结果保存到数据库（导出名为 simulator.saveToDB） 参数: - saveToDB: 是否保存到数据库 返回值: - 请求选项|
| [simulator.sourceType](#sourcetype) |sourceType 是一个请求选项 用于标识结果来源类型（导出名为 simulator.sourceType） 参数: - sourceType: 来源类型，如 &#34;scan&#34; 返回值: - 请求选项|
| [simulator.submitButtonSelector](#submitbuttonselector) |submitButtonSelector 是一个请求选项 用于在提交登录按钮位置识别错误时输入提交登录按钮对应的selector 参数: - selector: 登录提交按钮的 CSS selector 返回值: - 请求选项|
| [simulator.successMatchers](#successmatchers) |successMatchers 是一个请求选项 用于在页面变化中匹配指定字符串来判断登录成功 参数: - matchers: 一个或多个用于判断登录成功的字符串 返回值: - 请求选项|
| [simulator.username](#username) |username 是一个请求选项 用于输入爆破的用户名 参数: - username: 一个或多个用户名 返回值: - 请求选项|
| [simulator.usernameList](#usernamelist) |usernameList 是一个请求选项 用于输入爆破的用户名的列表 参数: - username: 用户名列表 返回值: - 请求选项|
| [simulator.usernameSelector](#usernameselector) |usernameSelector 是一个请求选项 用于在用户框位置识别错误时输入用户框对应的selector 参数: - selector: 用户名输入框的 CSS selector 返回值: - 请求选项|
| [simulator.wsAddress](#wsaddress) |wsAddress 是一个请求选项 用于输入浏览器的websocket地址 参数: - ws: 浏览器的 WebSocket 地址 返回值: - 请求选项|


## 函数定义
### HttpBruteForce

#### 详细描述
HttpBruteForce 进行目标url的页面进行http爆破 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爆破结果

参数:

  - targetUrl: 目标登录页面 URL

  - opts: 零个到多个请求选项，如 simulator.username、simulator.password 等



返回值:

  - 爆破结果的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin"), simulator.password("admin", "luckyadmin123"))

for item := range ch {
    yakit.Info(`[bruteforce] %s:%s login %v with info: %s`, item.Username(), item.Password(), item.Status(), item.Info())
}
``````````````


#### 定义

`HttpBruteForce(targetUrl string, opts ...BruteConfigOpt) (chan Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` | 目标登录页面 URL |
| opts | `...BruteConfigOpt` | 零个到多个请求选项，如 simulator.username、simulator.password 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan Result` | 爆破结果的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### captchaImgSelector

#### 详细描述
captchaImgSelector 是一个请求选项 用于在验证码图片位置识别错误时输入验证码图片对应的selector



参数:

  - selector: 验证码图片的 CSS selector



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaImgSelector("#img"))
``````````````


#### 定义

`captchaImgSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 验证码图片的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### captchaInputSelector

#### 详细描述
captchaInputSelector 是一个请求选项 用于在验证码输入框位置识别错误时输入验证码输入框对应的selector



参数:

  - selector: 验证码输入框的 CSS selector



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaInputSelector("#captcha"))
``````````````


#### 定义

`captchaInputSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 验证码输入框的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### captchaMode

#### 详细描述
captchaMode 特殊选项 如果你不知道怎么用请勿使用

参数:

  - mode: 验证码模式



返回值:

  - 请求选项




Example:

``````````````yak
opt = simulator.captchaMode("default")
println(opt)
``````````````


#### 定义

`captchaMode(mode string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `string` | 验证码模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### captchaType

#### 详细描述
captchaType 是一个请求选项 用于标识使用验证码的种类 其中1 其他（正常请勿使用）2 老版ddddocr server接口（url以/ocr/b64/json结尾） 3 新版ddddocr server接口（url以/ocr结尾）



参数:

  - typeEnum: 验证码接口类型



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaType(3))
``````````````


#### 定义

`captchaType(typeEnum int) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeEnum | `int` | 验证码接口类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### captchaUrl

#### 详细描述
captchaUrl 是一个请求选项 用于验证码的url地址



参数:

  - url: 验证码识别服务的 URL



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaUrl("http://localhost:8088/"))
``````````````


#### 定义

`captchaUrl(url string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 验证码识别服务的 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### exePath

#### 详细描述
exePath 是一个请求选项 用于输入浏览器路径



参数:

  - exePath: 浏览器可执行文件路径



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.exePath("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")) // 不存在用户名密码的代理
``````````````


#### 定义

`exePath(exePath string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exePath | `string` | 浏览器可执行文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### extraWaitLoadTime

#### 详细描述
extraWaitLoadTime 是一个请求选项 用于选择页面加载的额外页面等待时间 单位毫秒



参数:

  - time: 额外等待时间（毫秒）



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.extraWaitLoadTime(1000))
``````````````


#### 定义

`extraWaitLoadTime(time int) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| time | `int` | 额外等待时间（毫秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### fromPlugin

#### 详细描述
fromPlugin 是一个请求选项 用于标识结果来源插件名（导出名为 simulator.fromPlugin）

参数:

  - fromPlugin: 来源插件名



返回值:

  - 请求选项




Example:

``````````````yak
opt = simulator.fromPlugin("my-plugin")
println(opt)
``````````````


#### 定义

`fromPlugin(fromPlugin string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` | 来源插件名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### leaklessStatus

#### 详细描述
leaklessStatus 是一个请求选项 用于选择是否自动关闭浏览器进程



simulator.leaklessOn为开启 simulator.leaklessOff为关闭 simulator.leaklessDefault为默认

浏览器自动进程关闭进行在windows下会报病毒 默认在windows下会关闭

当关闭时 如果强制关闭爬虫进程时chrome进程会存在于后台 浏览器进程后台过多时请手动进行关闭



参数:

  - leakless: leakless 模式，如 simulator.leaklessOn、simulator.leaklessOff、simulator.leaklessDefault



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.leaklessStatus(simulator.leaklessDefault))
``````````````


#### 定义

`leaklessStatus(leakless LeaklessMode) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `LeaklessMode` | leakless 模式，如 simulator.leaklessOn、simulator.leaklessOff、simulator.leaklessDefault |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### loginDetectMode

#### 详细描述
loginDetectMode 是一个请求选项 用于选择识别登录跳转的模式，



其中simulator.htmlChangeMode 表示检测html变化程度 超过一定数字则认为发生登录跳转

simulator.urlChangeMode 表示检测url变化 如果url发生变化则认为登录成功

simulator.defaultChangeMode 表示同时使用以上两种策略

simulator.stringMatchMode 表示使用页面内容或变动中的字符串匹配结果判断登录

第二个参数表示检测html变化程度的比例，超过该比例则认为发生变化 默认为0.6



参数:

  - mode: 登录检测模式，如 simulator.htmlChangeMode、simulator.urlChangeMode

  - degree: 可选的 html 变化比例阈值（默认 0.6）



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.loginDetectMode(simulator.htmlChangeMode, 0.6))
``````````````


#### 定义

`loginDetectMode(mode loginDetectMode, degree ...float64) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `loginDetectMode` | 登录检测模式，如 simulator.htmlChangeMode、simulator.urlChangeMode |
| degree | `...float64` | 可选的 html 变化比例阈值（默认 0.6） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### password

#### 详细描述
password 是一个请求选项 用于输入爆破的密码



参数:

  - password: 一个或多个密码



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin", "root"), simulator.password("admin", "luckyadmin123"))
``````````````


#### 定义

`password(password ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `...string` | 一个或多个密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### passwordList

#### 详细描述
passwordList 是一个请求选项 用于输入爆破的密码的列表



参数:

  - password: 密码列表



返回值:

  - 请求选项




Example:

``````````````yak
userList = ["admin", "root"]
passList = ["123", "admin"]
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameList(userList), simulator.passwordList(passList))
``````````````


#### 定义

`passwordList(password []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `[]string` | 密码列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### passwordSelector

#### 详细描述
passwordSelector 是一个请求选项 用于在密码框位置识别错误时输入密码框对应的selector



参数:

  - selector: 密码输入框的 CSS selector



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.passwordSelector("#password"))
``````````````


#### 定义

`passwordSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 密码输入框的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### preAction

#### 详细描述
preAction 是一个请求选项 用于在登录前执行预置动作（以 JSON 字符串描述，导出名为 simulator.preAction）

参数:

  - actionsJs: 预置动作的 JSON 字符串



返回值:

  - 请求选项




Example:

``````````````yak
// 预置动作 JSON 用于在爆破前执行点击、输入等操作（示意性示例）
opt = simulator.preAction(`[]`)
println(opt)
``````````````


#### 定义

`preAction(actionsJs string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| actionsJs | `string` | 预置动作的 JSON 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### proxy

#### 详细描述
proxy 是一个请求选项 用于输入代理服务器地址



参数:

  - proxy: 代理服务器地址

  - details: 可选的代理认证信息（用户名、密码）



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.proxy("http://127.0.0.1:8123/")) // 不存在用户名密码的代理
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.proxy("http://127.0.0.1:8123/", "admin", "123321")) // 存在用户名密码的代理
``````````````


#### 定义

`proxy(proxy string, details ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` | 代理服务器地址 |
| details | `...string` | 可选的代理认证信息（用户名、密码） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### runtimeID

#### 详细描述
runtimeID 是一个请求选项 用于绑定运行时 ID（导出名为 simulator.runtimeID）

参数:

  - runtimeID: 运行时 ID



返回值:

  - 请求选项




Example:

``````````````yak
opt = simulator.runtimeID("runtime-uuid")
println(opt)
``````````````


#### 定义

`runtimeID(runtimeID string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeID | `string` | 运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### saveToDB

#### 详细描述
saveToDB 是一个请求选项 用于设置是否将爆破结果保存到数据库（导出名为 simulator.saveToDB）

参数:

  - saveToDB: 是否保存到数据库



返回值:

  - 请求选项




Example:

``````````````yak
opt = simulator.saveToDB(true)
println(opt)
``````````````


#### 定义

`saveToDB(saveToDB bool) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| saveToDB | `bool` | 是否保存到数据库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### sourceType

#### 详细描述
sourceType 是一个请求选项 用于标识结果来源类型（导出名为 simulator.sourceType）

参数:

  - sourceType: 来源类型，如 &#34;scan&#34;



返回值:

  - 请求选项




Example:

``````````````yak
opt = simulator.sourceType("scan")
println(opt)
``````````````


#### 定义

`sourceType(sourceType string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourceType | `string` | 来源类型，如 &#34;scan&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### submitButtonSelector

#### 详细描述
submitButtonSelector 是一个请求选项 用于在提交登录按钮位置识别错误时输入提交登录按钮对应的selector



参数:

  - selector: 登录提交按钮的 CSS selector



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.submitButtonSelector("#login"))
``````````````


#### 定义

`submitButtonSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 登录提交按钮的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### successMatchers

#### 详细描述
successMatchers 是一个请求选项 用于在页面变化中匹配指定字符串来判断登录成功



参数:

  - matchers: 一个或多个用于判断登录成功的字符串



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.successMatchers("login success"))
``````````````


#### 定义

`successMatchers(matchers ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchers | `...string` | 一个或多个用于判断登录成功的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### username

#### 详细描述
username 是一个请求选项 用于输入爆破的用户名



参数:

  - username: 一个或多个用户名



返回值:



  - 请求选项



    
Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin", "root"), simulator.password("admin", "luckyadmin123"))
``````````````


#### 定义

`username(username ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `...string` | 一个或多个用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### usernameList

#### 详细描述
usernameList 是一个请求选项 用于输入爆破的用户名的列表



参数:

  - username: 用户名列表



返回值:

  - 请求选项




Example:

``````````````yak
userList = ["admin", "root"]
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameList(userList), simulator.password("admin", "luckyadmin123"))
``````````````


#### 定义

`usernameList(username []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `[]string` | 用户名列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### usernameSelector

#### 详细描述
usernameSelector 是一个请求选项 用于在用户框位置识别错误时输入用户框对应的selector



参数:

  - selector: 用户名输入框的 CSS selector



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameSelector("#username"))
``````````````


#### 定义

`usernameSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` | 用户名输入框的 CSS selector |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


### wsAddress

#### 详细描述
wsAddress 是一个请求选项 用于输入浏览器的websocket地址



参数:

  - ws: 浏览器的 WebSocket 地址



返回值:

  - 请求选项




Example:

``````````````yak
ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.wsAddress("http://127.0.0.1:7317/"))
``````````````


#### 定义

`wsAddress(ws string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ws | `string` | 浏览器的 WebSocket 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` | 请求选项 |


