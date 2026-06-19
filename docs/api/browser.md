# browser

|函数名|函数描述/介绍|
|:------|:--------|
| [browser.Close](#close) |CloseByID 关闭指定 ID 的浏览器实例（导出名为 browser.Close） 参数: - opts: 浏览器可选项，通常使用 browser.id 指定要关闭的实例 返回值: - 错误信息|
| [browser.CloseAll](#closeall) |CloseAll 关闭当前所有已打开的浏览器实例（导出名为 browser.CloseAll） 参数: - 无 返回值: - 无|
| [browser.Get](#get) ||
| [browser.HaveBrowserInstalled](#havebrowserinstalled) |HaveBrowserInstalled 检测当前环境是否已安装可用的浏览器（导出名为 browser.HaveBrowserInstalled） 参数: - 无 返回值: - 是否已安装浏览器|
| [browser.List](#list) |List 列出当前所有已打开浏览器实例的 ID（导出名为 browser.List） 参数: - 无 返回值: - 浏览器实例 ID 列表|
| [browser.Open](#open) ||
| [browser.controlURL](#controlurl) |WithControlURL 指定通过 control URL 连接已有浏览器（导出名为 browser.controlURL） 参数: - controlURL: 浏览器的控制地址 返回值: - 浏览器可选项|
| [browser.exePath](#exepath) |WithExePath 指定浏览器可执行文件路径（导出名为 browser.exePath） 参数: - exePath: 浏览器可执行文件路径 返回值: - 浏览器可选项|
| [browser.headless](#headless) |WithHeadless 设置浏览器是否以无头模式启动（导出名为 browser.headless） 参数: - headless: 是否无头模式 返回值: - 浏览器可选项|
| [browser.id](#id) |WithID 指定浏览器实例 ID（导出名为 browser.id） 参数: - id: 浏览器实例 ID 返回值: - 浏览器可选项|
| [browser.leakless](#leakless) |WithLeakless 设置是否启用 leakless 守护进程以确保浏览器进程被清理（导出名为 browser.leakless） 参数: - leakless: 是否启用 leakless 返回值: - 浏览器可选项|
| [browser.noSandBox](#nosandbox) |WithNoSandBox 设置浏览器是否以 no-sandbox 模式启动（导出名为 browser.noSandBox） 参数: - noSandBox: 是否禁用沙箱 返回值: - 浏览器可选项|
| [browser.proxy](#proxy) |WithProxy 指定浏览器使用的代理地址（导出名为 browser.proxy） 参数: - proxyAddress: 代理地址 返回值: - 浏览器可选项|
| [browser.timeout](#timeout) |WithTimeout 设置浏览器操作的超时时间（导出名为 browser.timeout） 参数: - timeout: 超时时间（秒） 返回值: - 浏览器可选项|
| [browser.wsAddress](#wsaddress) |WithWsAddress 指定通过 WebSocket 地址连接已有浏览器（导出名为 browser.wsAddress） 参数: - wsAddress: 浏览器调试 WebSocket 地址 返回值: - 浏览器可选项|


## 函数定义
### Close

#### 详细描述
CloseByID 关闭指定 ID 的浏览器实例（导出名为 browser.Close）

参数:

  - opts: 浏览器可选项，通常使用 browser.id 指定要关闭的实例



返回值:

  - 错误信息




Example:

``````````````yak
// 关闭指定 ID 的浏览器（示意性示例）
err = browser.Close(browser.id("main"))
if err != nil { die(err) }
``````````````


#### 定义

`Close(opts ...BrowserOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...BrowserOption` | 浏览器可选项，通常使用 browser.id 指定要关闭的实例 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### CloseAll

#### 详细描述
CloseAll 关闭当前所有已打开的浏览器实例（导出名为 browser.CloseAll）

参数:

  - 无



返回值:

  - 无




Example:

``````````````yak
browser.CloseAll()
``````````````


#### 定义

`CloseAll()`


### Get

#### 详细描述
暂无描述

#### 定义

`Get(opts ...BrowserOption) (*BrowserInstance, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...BrowserOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*BrowserInstance` |  |
| r2 | `error` |  |


### HaveBrowserInstalled

#### 详细描述
HaveBrowserInstalled 检测当前环境是否已安装可用的浏览器（导出名为 browser.HaveBrowserInstalled）

参数:

  - 无



返回值:

  - 是否已安装浏览器




Example:

``````````````yak
has = browser.HaveBrowserInstalled()
println(has)
``````````````


#### 定义

`HaveBrowserInstalled() bool`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否已安装浏览器 |


### List

#### 详细描述
List 列出当前所有已打开浏览器实例的 ID（导出名为 browser.List）

参数:

  - 无



返回值:

  - 浏览器实例 ID 列表




Example:

``````````````yak
ids = browser.List()
dump(ids)
``````````````


#### 定义

`List() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 浏览器实例 ID 列表 |


### Open

#### 详细描述
暂无描述

#### 定义

`Open(opts ...BrowserOption) (*BrowserInstance, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...BrowserOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*BrowserInstance` |  |
| r2 | `error` |  |


### controlURL

#### 详细描述
WithControlURL 指定通过 control URL 连接已有浏览器（导出名为 browser.controlURL）

参数:

  - controlURL: 浏览器的控制地址



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.controlURL("http://127.0.0.1:9222")
println(opt)
``````````````


#### 定义

`controlURL(controlURL string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| controlURL | `string` | 浏览器的控制地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### exePath

#### 详细描述
WithExePath 指定浏览器可执行文件路径（导出名为 browser.exePath）

参数:

  - exePath: 浏览器可执行文件路径



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.exePath("/usr/bin/google-chrome")
println(opt)
``````````````


#### 定义

`exePath(exePath string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exePath | `string` | 浏览器可执行文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### headless

#### 详细描述
WithHeadless 设置浏览器是否以无头模式启动（导出名为 browser.headless）

参数:

  - headless: 是否无头模式



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.headless(true)
println(opt)
``````````````


#### 定义

`headless(headless bool) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headless | `bool` | 是否无头模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### id

#### 详细描述
WithID 指定浏览器实例 ID（导出名为 browser.id）

参数:

  - id: 浏览器实例 ID



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.id("main")
println(opt)
``````````````


#### 定义

`id(id string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | 浏览器实例 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### leakless

#### 详细描述
WithLeakless 设置是否启用 leakless 守护进程以确保浏览器进程被清理（导出名为 browser.leakless）

参数:

  - leakless: 是否启用 leakless



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.leakless(true)
println(opt)
``````````````


#### 定义

`leakless(leakless bool) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `bool` | 是否启用 leakless |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### noSandBox

#### 详细描述
WithNoSandBox 设置浏览器是否以 no-sandbox 模式启动（导出名为 browser.noSandBox）

参数:

  - noSandBox: 是否禁用沙箱



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.noSandBox(true)
println(opt)
``````````````


#### 定义

`noSandBox(noSandBox bool) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noSandBox | `bool` | 是否禁用沙箱 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### proxy

#### 详细描述
WithProxy 指定浏览器使用的代理地址（导出名为 browser.proxy）

参数:

  - proxyAddress: 代理地址



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.proxy("http://127.0.0.1:8080")
println(opt)
``````````````


#### 定义

`proxy(proxyAddress string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxyAddress | `string` | 代理地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### timeout

#### 详细描述
WithTimeout 设置浏览器操作的超时时间（导出名为 browser.timeout）

参数:

  - timeout: 超时时间（秒）



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.timeout(30)
println(opt)
``````````````


#### 定义

`timeout(timeout float64) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` | 超时时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


### wsAddress

#### 详细描述
WithWsAddress 指定通过 WebSocket 地址连接已有浏览器（导出名为 browser.wsAddress）

参数:

  - wsAddress: 浏览器调试 WebSocket 地址



返回值:

  - 浏览器可选项




Example:

``````````````yak
opt = browser.wsAddress("ws://127.0.0.1:9222/devtools/browser/xxx")
println(opt)
``````````````


#### 定义

`wsAddress(wsAddress string) BrowserOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wsAddress | `string` | 浏览器调试 WebSocket 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BrowserOption` | 浏览器可选项 |


