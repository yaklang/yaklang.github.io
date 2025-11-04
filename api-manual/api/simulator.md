# simulator

|实例名|实例描述|
|:------|:--------|
defaultChangeMode|(simulator.loginDetectMode) -1|
htmlChangeMode|(simulator.loginDetectMode) 1|
leaklessDefault|(simulator.LeaklessMode) 0|
leaklessOff|(simulator.LeaklessMode) -1|
leaklessOn|(simulator.LeaklessMode) 1|
simple|(map[string]interface {}) map[string]interface {}{&#34;CreateBrowser&#34;: (func(...simple.BrowserConfigOpt) (*simple.VBrowser, error))(0x3270940), &#34;bodyModifyTarget&#34;: &#34;body&#34;, &#34;bodyReplaceTarget&#34;: &#34;bodyReplace&#34;, &#34;createBrowser&#34;: (func(...simple.BrowserConfigOpt) (*simple.VBrowser, error))(0x3270940), &#34;exePath&#34;: (func(string) simple.BrowserConfigOpt)(0x326ff40), &#34;headersModifyTarget&#34;: &#34;headers&#34;, &#34;headless&#34;: (func(bool) simple.BrowserConfigOpt)(0x3270240), &#34;hijack&#34;: (func(bool) simple.BrowserConfigOpt)(0x32702c0), &#34;hostModifyTarget&#34;: &#34;host&#34;, &#34;leakless&#34;: (func(bool) simple.BrowserConfigOpt)(0x32708c0), &#34;noSandBox&#34;: (func(bool) simple.BrowserConfigOpt)(0x32701c0), &#34;proxy&#34;: (func(string, ...string) simple.BrowserConfigOpt)(0x3270020), &#34;requestModify&#34;: (func(string, simple.ModifyTarget, interface {}) simple.BrowserConfigOpt)(0x32705c0), &#34;responseModify&#34;: (func(string, simple.ModifyTarget, interface {}) simple.BrowserConfigOpt)(0x3270340), &#34;timeout&#34;: (func(int) simple.BrowserConfigOpt)(0x3270840), &#34;wsAddress&#34;: (func(string) simple.BrowserConfigOpt)(0x326fe60)}|
stringMatchMode|(simulator.loginDetectMode) 2|
urlChangeMode|(simulator.loginDetectMode) 0|

|函数名|函数描述/介绍|
|:------|:--------|
| [simulator.HttpBruteForce](#httpbruteforce) |HttpBruteForce 进行目标url的页面进行http爆破 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爆破结果    |
| [simulator.captchaImgSelector](#captchaimgselector) |captchaImgSelector 是一个请求选项 用于在验证码图片位置识别错误时输入验证码图片对应的selector    |
| [simulator.captchaInputSelector](#captchainputselector) |captchaInputSelector 是一个请求选项 用于在验证码输入框位置识别错误时输入验证码输入框对应的selector    |
| [simulator.captchaMode](#captchamode) |captchaMode 特殊选项 如果你不知道怎么用请勿使用 |
| [simulator.captchaType](#captchatype) |captchaType 是一个请求选项 用于标识使用验证码的种类 其中1 其他（正常请勿使用）2 老版ddddocr server接口（url以/ocr/b64/json结尾） 3 新版ddddocr server接口（url以/ocr结尾）    |
| [simulator.captchaUrl](#captchaurl) |captchaUrl 是一个请求选项 用于验证码的url地址    |
| [simulator.exePath](#exepath) |exePath 是一个请求选项 用于输入浏览器路径    |
| [simulator.extraWaitLoadTime](#extrawaitloadtime) |extraWaitLoadTime 是一个请求选项 用于选择页面加载的额外页面等待时间 单位毫秒    |
| [simulator.fromPlugin](#fromplugin) ||
| [simulator.leaklessStatus](#leaklessstatus) |leaklessStatus 是一个请求选项 用于选择是否自动关闭浏览器进程    simulator.leaklessOn为开启 simulator.leaklessOff为关闭 simulator.leaklessDefault为默认  浏览器自动进程关闭进行在windows下会报病毒 默认在w...|
| [simulator.loginDetectMode](#logindetectmode) |loginDetectMode 是一个请求选项 用于选择识别登录跳转的模式，    其中simulator.htmlChangeMode 表示检测html变化程度 超过一定数字则认为发生登录跳转  simulator.urlChangeMode 表示检测url变化 如果url发生变化则认为登录成功 ...|
| [simulator.password](#password) |password 是一个请求选项 用于输入爆破的密码    |
| [simulator.passwordList](#passwordlist) |passwordList 是一个请求选项 用于输入爆破的密码的列表    |
| [simulator.passwordSelector](#passwordselector) |passwordSelector 是一个请求选项 用于在密码框位置识别错误时输入密码框对应的selector    |
| [simulator.preAction](#preaction) ||
| [simulator.proxy](#proxy) |proxy 是一个请求选项 用于输入代理服务器地址    |
| [simulator.runtimeID](#runtimeid) ||
| [simulator.saveToDB](#savetodb) ||
| [simulator.sourceType](#sourcetype) ||
| [simulator.submitButtonSelector](#submitbuttonselector) |submitButtonSelector 是一个请求选项 用于在提交登录按钮位置识别错误时输入提交登录按钮对应的selector    |
| [simulator.successMatchers](#successmatchers) |successMatchers 是一个请求选项 用于在页面变化中匹配指定字符串来判断登录成功    |
| [simulator.username](#username) |username 是一个请求选项 用于输入爆破的用户名    	|
| [simulator.usernameList](#usernamelist) |usernameList 是一个请求选项 用于输入爆破的用户名的列表    |
| [simulator.usernameSelector](#usernameselector) |usernameSelector 是一个请求选项 用于在用户框位置识别错误时输入用户框对应的selector    |
| [simulator.wsAddress](#wsaddress) |wsAddress 是一个请求选项 用于输入浏览器的websocket地址    |


## 函数定义
### HttpBruteForce

#### 详细描述
HttpBruteForce 进行目标url的页面进行http爆破 第一个参数为目标url，后面可以添加零个或多个请求选项，用于对此次请求进行配置 返回值包括channel和错误，从channel中获取爆破结果



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin"), simulator.password("admin", "luckyadmin123"))

	for item := range ch {
	    yakit.Info(`[bruteforce] %s:%s login %v with info: %s`, item.Username(), item.Password(), item.Status(), item.Info())
	}

```


#### 定义

`HttpBruteForce(targetUrl string, opts ...BruteConfigOpt) (chan Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` |   |
| opts | `...BruteConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan Result` |   |
| r2 | `error` |   |


### captchaImgSelector

#### 详细描述
captchaImgSelector 是一个请求选项 用于在验证码图片位置识别错误时输入验证码图片对应的selector



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaImgSelector("#img"))

```


#### 定义

`captchaImgSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaInputSelector

#### 详细描述
captchaInputSelector 是一个请求选项 用于在验证码输入框位置识别错误时输入验证码输入框对应的selector



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaInputSelector("#captcha"))

```


#### 定义

`captchaInputSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaMode

#### 详细描述
captchaMode 特殊选项 如果你不知道怎么用请勿使用


#### 定义

`captchaMode(mode string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaType

#### 详细描述
captchaType 是一个请求选项 用于标识使用验证码的种类 其中1 其他（正常请勿使用）2 老版ddddocr server接口（url以/ocr/b64/json结尾） 3 新版ddddocr server接口（url以/ocr结尾）



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaType(3))

```


#### 定义

`captchaType(typeEnum int) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeEnum | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### captchaUrl

#### 详细描述
captchaUrl 是一个请求选项 用于验证码的url地址



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.captchaUrl("http://localhost:8088/"))

```


#### 定义

`captchaUrl(url string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### exePath

#### 详细描述
exePath 是一个请求选项 用于输入浏览器路径



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.exePath("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")) // 不存在用户名密码的代理

```


#### 定义

`exePath(exePath string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exePath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### extraWaitLoadTime

#### 详细描述
extraWaitLoadTime 是一个请求选项 用于选择页面加载的额外页面等待时间 单位毫秒



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.extraWaitLoadTime(1000))

```


#### 定义

`extraWaitLoadTime(time int) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| time | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### fromPlugin

#### 详细描述


#### 定义

`fromPlugin(fromPlugin string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### leaklessStatus

#### 详细描述
leaklessStatus 是一个请求选项 用于选择是否自动关闭浏览器进程



simulator.leaklessOn为开启 simulator.leaklessOff为关闭 simulator.leaklessDefault为默认

浏览器自动进程关闭进行在windows下会报病毒 默认在windows下会关闭

当关闭时 如果强制关闭爬虫进程时chrome进程会存在于后台 浏览器进程后台过多时请手动进行关闭



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.leaklessStatus(simulator.leaklessDefault))

```


#### 定义

`leaklessStatus(leakless LeaklessMode) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `LeaklessMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### loginDetectMode

#### 详细描述
loginDetectMode 是一个请求选项 用于选择识别登录跳转的模式，



其中simulator.htmlChangeMode 表示检测html变化程度 超过一定数字则认为发生登录跳转

simulator.urlChangeMode 表示检测url变化 如果url发生变化则认为登录成功

simulator.defaultChangeMode 表示同时使用以上两种策略

simulator.stringMatchMode 表示使用页面内容或变动中的字符串匹配结果判断登录

第二个参数表示检测html变化程度的比例，超过该比例则认为发生变化 默认为0.6



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.loginDetectMode(simulator.htmlChangeMode, 0.6))

```


#### 定义

`loginDetectMode(mode loginDetectMode, degree ...float64) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `loginDetectMode` |   |
| degree | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### password

#### 详细描述
password 是一个请求选项 用于输入爆破的密码



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin", "root"), simulator.password("admin", "luckyadmin123"))

```


#### 定义

`password(password ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### passwordList

#### 详细描述
passwordList 是一个请求选项 用于输入爆破的密码的列表



Example:
```

	userList = ["admin", "root"]
	passList = ["123", "admin"]
	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameList(userList), simulator.passwordList(passList))

```


#### 定义

`passwordList(password []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### passwordSelector

#### 详细描述
passwordSelector 是一个请求选项 用于在密码框位置识别错误时输入密码框对应的selector



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.passwordSelector("#password"))

```


#### 定义

`passwordSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### preAction

#### 详细描述


#### 定义

`preAction(actionsJs string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| actionsJs | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### proxy

#### 详细描述
proxy 是一个请求选项 用于输入代理服务器地址



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.proxy("http://127.0.0.1:8123/")) // 不存在用户名密码的代理
	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.proxy("http://127.0.0.1:8123/", "admin", "123321")) // 存在用户名密码的代理

```


#### 定义

`proxy(proxy string, details ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |
| details | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### runtimeID

#### 详细描述


#### 定义

`runtimeID(runtimeID string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeID | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### saveToDB

#### 详细描述


#### 定义

`saveToDB(saveToDB bool) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| saveToDB | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### sourceType

#### 详细描述


#### 定义

`sourceType(sourceType string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourceType | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### submitButtonSelector

#### 详细描述
submitButtonSelector 是一个请求选项 用于在提交登录按钮位置识别错误时输入提交登录按钮对应的selector



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.submitButtonSelector("#login"))

```


#### 定义

`submitButtonSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### successMatchers

#### 详细描述
successMatchers 是一个请求选项 用于在页面变化中匹配指定字符串来判断登录成功



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.successMatchers("login success"))

```


#### 定义

`successMatchers(matchers ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchers | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### username

#### 详细描述
username 是一个请求选项 用于输入爆破的用户名



	Example:

```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.username("admin", "root"), simulator.password("admin", "luckyadmin123"))

```


#### 定义

`username(username ...string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### usernameList

#### 详细描述
usernameList 是一个请求选项 用于输入爆破的用户名的列表



Example:
```

	userList = ["admin", "root"]
	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameList(userList), simulator.password("admin", "luckyadmin123"))

```


#### 定义

`usernameList(username []string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### usernameSelector

#### 详细描述
usernameSelector 是一个请求选项 用于在用户框位置识别错误时输入用户框对应的selector



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.usernameSelector("#username"))

```


#### 定义

`usernameSelector(selector string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selector | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


### wsAddress

#### 详细描述
wsAddress 是一个请求选项 用于输入浏览器的websocket地址



Example:
```

	ch, err = simulator.HttpBruteForce("http://127.0.0.1:8080/", simulator.wsAddress("http://127.0.0.1:7317/"))

```


#### 定义

`wsAddress(ws string) BruteConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ws | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteConfigOpt` |   |


