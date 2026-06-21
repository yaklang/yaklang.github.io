# browser {#library-browser}

`browser` 库提供对无头/有头 Chrome 浏览器实例的管理能力，基于 CDP（Chrome DevTools Protocol）驱动真实浏览器，用于需要渲染 JS、模拟真实用户行为的爬取、截图与自动化场景。

典型使用场景：

- 实例管理：`browser.Open` / `browser.Get` 启动或获取一个浏览器实例，`browser.Close` / `browser.CloseAll` 关闭，`browser.List` 列出当前实例。
- 环境检查：`browser.HaveBrowserInstalled` 判断本机是否已安装可用浏览器。
- 启动选项：`browser.headless`（无头模式）、`browser.exePath`（指定可执行文件）、`browser.proxy`（代理）、`browser.wsAddress` / `browser.controlURL`（连接已有浏览器）、`browser.noSandBox` / `browser.leakless` / `browser.timeout` 等。

与相邻库的关系：相比 `crawler`/`crawlerx` 的 HTTP 层爬取，`browser` 走真实浏览器内核，适合强 JS 渲染的页面；常与 `crawlerx`（浏览器爬虫）配合完成动态站点的资产发现。

> 共 15 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [browser.CloseAll](#closeall) | - | - | 关闭当前所有已打开的浏览器实例（导出名为 browser.CloseAll） |
| [browser.HaveBrowserInstalled](#havebrowserinstalled) | - | `bool` | 检测当前环境是否已安装可用的浏览器（导出名为 browser.HaveBrowserInstalled） |
| [browser.List](#list) | - | `[]string` | 列出当前所有已打开浏览器实例的 ID（导出名为 browser.List） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [browser.Close](#close) | `opts ...BrowserOption` | `error` | CloseByID 关闭指定 ID 的浏览器实例（导出名为 browser.Close） |
| [browser.Get](#get) | `opts ...BrowserOption` | `*BrowserInstance, error` | 获取一个已存在的浏览器实例（不存在时按选项创建，导出名为 browser.Get） |
| [browser.Open](#open) | `opts ...BrowserOption` | `*BrowserInstance, error` | 打开一个新的浏览器实例（导出名为 browser.Open） |

## 函数详情

### CloseAll {#closeall}

```go
CloseAll()
```

关闭当前所有已打开的浏览器实例（导出名为 browser.CloseAll）

**示例**

``````````````yak
browser.CloseAll()
``````````````

---

### HaveBrowserInstalled {#havebrowserinstalled}

```go
HaveBrowserInstalled() bool
```

检测当前环境是否已安装可用的浏览器（导出名为 browser.HaveBrowserInstalled）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否已安装浏览器 |

**示例**

``````````````yak
has = browser.HaveBrowserInstalled()
println(has)
``````````````

---

### List {#list}

```go
List() []string
```

列出当前所有已打开浏览器实例的 ID（导出名为 browser.List）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 浏览器实例 ID 列表 |

**示例**

``````````````yak
ids = browser.List()
dump(ids)
``````````````

---

## 可变参数函数详情

### Close {#close}

```go
Close(opts ...BrowserOption) error
```

CloseByID 关闭指定 ID 的浏览器实例（导出名为 browser.Close）

**可选参数**

可作为可变参数 `opts ...BrowserOption` 传入选项；共 9 个可用选项，详见 [BrowserOption 选项列表](#option-browseroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关闭指定 ID 的浏览器（示意性示例）
err = browser.Close(browser.id("main"))
if err != nil { die(err) }
``````````````

---

### Get {#get}

```go
Get(opts ...BrowserOption) (*BrowserInstance, error)
```

获取一个已存在的浏览器实例（不存在时按选项创建，导出名为 browser.Get）

**可选参数**

可作为可变参数 `opts ...BrowserOption` 传入选项；共 9 个可用选项，详见 [BrowserOption 选项列表](#option-browseroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*BrowserInstance` | 浏览器实例对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 按 ID 获取浏览器实例（示意性示例）
b = browser.Get(browser.id("main"))~
dump(b)
``````````````

---

### Open {#open}

```go
Open(opts ...BrowserOption) (*BrowserInstance, error)
```

打开一个新的浏览器实例（导出名为 browser.Open）

**可选参数**

可作为可变参数 `opts ...BrowserOption` 传入选项；共 9 个可用选项，详见 [BrowserOption 选项列表](#option-browseroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*BrowserInstance` | 浏览器实例对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 打开一个无头浏览器（示意性示例，需要本地已安装浏览器）
b = browser.Open(browser.headless(true))~
defer browser.CloseAll()
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：BrowserOption {#option-browseroption}

涉及到的函数有：[browser.Close](#close)、[browser.Get](#get)、[browser.Open](#open)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `browser.controlURL` | `controlURL string` | `BrowserOption` | WithControlURL 指定通过 control URL 连接已有浏览器 |
| `browser.exePath` | `exePath string` | `BrowserOption` | WithExePath 指定浏览器可执行文件路径 |
| `browser.headless` | `headless bool` | `BrowserOption` | WithHeadless 设置浏览器是否以无头模式启动 |
| `browser.id` | `id string` | `BrowserOption` | WithID 指定浏览器实例 ID |
| `browser.leakless` | `leakless bool` | `BrowserOption` | WithLeakless 设置是否启用 leakless 守护进程以确保浏览器进程被清理 |
| `browser.noSandBox` | `noSandBox bool` | `BrowserOption` | WithNoSandBox 设置浏览器是否以 no-sandbox 模式启动 |
| `browser.proxy` | `proxyAddress string` | `BrowserOption` | WithProxy 指定浏览器使用的代理地址 |
| `browser.timeout` | `timeout float64` | `BrowserOption` | WithTimeout 设置浏览器操作的超时时间 |
| `browser.wsAddress` | `wsAddress string` | `BrowserOption` | WithWsAddress 指定通过 WebSocket 地址连接已有浏览器 |

