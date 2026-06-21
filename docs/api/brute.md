# brute {#library-brute}

`brute` 库是弱口令爆破框架，内置对多种协议/服务（如 SSH、FTP、数据库、Web 等）的爆破插件，支持自定义用户名/密码字典、并发控制与自定义校验回调，是认证安全评估的核心工具。

典型使用场景：

- 选择爆破类型：`brute.GetAvailableBruteTypes` 列出支持的服务类型，`brute.New(type, opts...)` 创建爆破器并对目标执行。
- 字典管理：`brute.userList` / `brute.passList` 指定字典，`brute.autoDict` 启用内置字典，`brute.GetUsernameListFromBruteType` / `brute.GetPasswordListFromBruteType` 取出某类型的内置字典。
- 速率与策略：`brute.concurrent` / `brute.concurrentTarget` 控制并发，`brute.minDelay` / `brute.maxDelay` 控制节流，`brute.okToStop` / `brute.finishingThreshold` 控制命中后停止，`brute.bruteHandler` 自定义校验逻辑。

与相邻库的关系：`brute` 常接在资产发现之后——`synscan`/`servicescan` 找到开放服务，`brute` 对其做口令爆破，命中结果可经 `risk` 记录、`report` 汇总。

> 共 15 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [brute.GetAvailableBruteTypes](#getavailablebrutetypes) | - | `[]string` | 返回当前支持的所有内置爆破类型(协议/服务)名称列表 |
| [brute.GetPasswordListFromBruteType](#getpasswordlistfrombrutetype) | `t string` | `[]string` | 返回指定爆破类型对应的内置密码字典 |
| [brute.GetUsernameListFromBruteType](#getusernamelistfrombrutetype) | `t string` | `[]string` | 返回指定爆破类型对应的内置用户名字典 |
| [brute.autoDict](#autodict) | - | `BruteOpt` | 根据爆破类型自动加载内置的用户名与密码字典 |
| [brute.bruteHandler](#brutehandler) | `cb func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult` | `BruteOpt` | 自定义爆破的核心处理函数，覆盖默认的协议爆破逻辑 |
| [brute.concurrent](#concurrent) | `c int` | `BruteOpt` | 设置单个目标内部的并发尝试数量 |
| [brute.concurrentTarget](#concurrenttarget) | `c int` | `BruteOpt` | 设置同时进行爆破的目标数量(默认 256) |
| [brute.debug](#debug) | `b bool` | `BruteOpt` | 设置爆破器是否开启调试模式，开启后会输出更详细的过程日志 |
| [brute.finishingThreshold](#finishingthreshold) | `i int` | `BruteOpt` | 设置单个目标的失败容忍阈值，连续失败达到该值后提前结束该目标的爆破 |
| [brute.maxDelay](#maxdelay) | `max int` | `BruteOpt` | 设置每个目标两次尝试之间的最大间隔秒数 |
| [brute.minDelay](#mindelay) | `min int` | `BruteOpt` | 设置每个目标两次尝试之间的最小间隔秒数 |
| [brute.okToStop](#oktostop) | `b bool` | `BruteOpt` | 设置当某个目标爆破出有效凭据后是否立即停止对该目标的后续尝试 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [brute.New](#new) | `typeStr string, opts ...BruteOpt` | `*yakBruter, error` | 创建一个指定类型的弱口令爆破器，可通过选项配置字典、并发、延迟等，再调用 Start 对目标执行爆破 |
| [brute.passList](#passlist) | `passes ...string` | `BruteOpt` | 设置爆破使用的密码字典 |
| [brute.userList](#userlist) | `users ...string` | `BruteOpt` | 设置爆破使用的用户名字典 |

## 函数详情

### GetAvailableBruteTypes {#getavailablebrutetypes}

```go
GetAvailableBruteTypes() []string
```

返回当前支持的所有内置爆破类型(协议/服务)名称列表

在 yak 中通过 brute.GetAvailableBruteTypes 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 支持的爆破类型名称字符串切片，如 ssh、ftp、redis、mysql 等 |

**示例**

``````````````yak
types = brute.GetAvailableBruteTypes()
assert len(types) > 0, "should expose builtin brute types"
// 常见服务 ssh 应在支持列表中
println("ssh" in types)   // OUT: true
assert "ssh" in types, "ssh brute type should be available"
``````````````

---

### GetPasswordListFromBruteType {#getpasswordlistfrombrutetype}

```go
GetPasswordListFromBruteType(t string) []string
```

返回指定爆破类型对应的内置密码字典

在 yak 中通过 brute.GetPasswordListFromBruteType 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `string` | 爆破类型名称，如 ssh、mysql |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 该类型的内置密码候选列表 |

**示例**

``````````````yak
passwords = brute.GetPasswordListFromBruteType("ssh")
assert len(passwords) > 0, "ssh password dict should not be empty"
``````````````

---

### GetUsernameListFromBruteType {#getusernamelistfrombrutetype}

```go
GetUsernameListFromBruteType(t string) []string
```

返回指定爆破类型对应的内置用户名字典

在 yak 中通过 brute.GetUsernameListFromBruteType 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `string` | 爆破类型名称，如 ssh、mysql |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 该类型的内置用户名候选列表 |

**示例**

``````````````yak
users = brute.GetUsernameListFromBruteType("ssh")
assert len(users) > 0, "ssh username dict should not be empty"
``````````````

---

### autoDict {#autodict}

```go
autoDict() BruteOpt
```

根据爆破类型自动加载内置的用户名与密码字典

在 yak 中通过 brute.autoDict 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：自动使用内置字典
bruter = brute.New("ssh", brute.autoDict())~
``````````````

---

### bruteHandler {#brutehandler}

```go
bruteHandler(cb func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult) BruteOpt
```

自定义爆破的核心处理函数，覆盖默认的协议爆破逻辑

在 yak 中通过 brute.bruteHandler 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cb | `func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult` | 处理单个爆破项并返回结果的回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：自定义爆破处理逻辑

	bruter = brute.New("ssh", brute.bruteHandler(func(item) {
	    return item.Result()
	}))~
``````````````

---

### concurrent {#concurrent}

```go
concurrent(c int) BruteOpt
```

设置单个目标内部的并发尝试数量

在 yak 中通过 brute.concurrent 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| c | `int` | 单目标并发数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：单目标并发设为 1
bruter = brute.New("ssh", brute.concurrent(1))~
``````````````

---

### concurrentTarget {#concurrenttarget}

```go
concurrentTarget(c int) BruteOpt
```

设置同时进行爆破的目标数量(默认 256)

在 yak 中通过 brute.concurrentTarget 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| c | `int` | 并发目标数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：同时爆破 10 个目标
bruter = brute.New("ssh", brute.concurrentTarget(10))~
``````````````

---

### debug {#debug}

```go
debug(b bool) BruteOpt
```

设置爆破器是否开启调试模式，开启后会输出更详细的过程日志

在 yak 中通过 brute.debug 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否开启调试 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：开启调试模式
bruter = brute.New("ssh", brute.debug(true))~
``````````````

---

### finishingThreshold {#finishingthreshold}

```go
finishingThreshold(i int) BruteOpt
```

设置单个目标的失败容忍阈值，连续失败达到该值后提前结束该目标的爆破

在 yak 中通过 brute.finishingThreshold 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 失败阈值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置失败阈值
bruter = brute.New("ssh", brute.finishingThreshold(50))~
``````````````

---

### maxDelay {#maxdelay}

```go
maxDelay(max int) BruteOpt
```

设置每个目标两次尝试之间的最大间隔秒数

在 yak 中通过 brute.maxDelay 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| max | `int` | 最大间隔(秒) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置最大间隔 5 秒
bruter = brute.New("ssh", brute.maxDelay(5))~
``````````````

---

### minDelay {#mindelay}

```go
minDelay(min int) BruteOpt
```

设置每个目标两次尝试之间的最小间隔秒数

在 yak 中通过 brute.minDelay 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| min | `int` | 最小间隔(秒) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置最小间隔 1 秒
bruter = brute.New("ssh", brute.minDelay(1))~
``````````````

---

### okToStop {#oktostop}

```go
okToStop(b bool) BruteOpt
```

设置当某个目标爆破出有效凭据后是否立即停止对该目标的后续尝试

在 yak 中通过 brute.okToStop 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 命中后是否停止 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：命中即停止
bruter = brute.New("ssh", brute.okToStop(true))~
``````````````

---

## 可变参数函数详情

### New {#new}

```go
New(typeStr string, opts ...BruteOpt) (*yakBruter, error)
```

创建一个指定类型的弱口令爆破器，可通过选项配置字典、并发、延迟等，再调用 Start 对目标执行爆破

在 yak 中通过 brute.New 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| typeStr | `string` | 爆破类型名称，如 ssh、mysql、redis |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...BruteOpt` | 可选配置项，如 brute.userList、brute.passList、brute.concurrent 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*yakBruter` | 爆破器对象，可调用 Start(targets...) 执行爆破 |
| r2 | `error` | 错误信息，类型不支持时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：对目标执行 ssh 弱口令爆破
bruter = brute.New("ssh",

	brute.userList("root", "admin"),
	brute.passList("123456", "password"),
	brute.concurrent(1),

)~
res = bruter.Start("127.0.0.1:22")~

	for item = range res {
	    if item.Ok {
	        println("found:", item.Username, item.Password)
	    }
	}
``````````````

---

### passList {#passlist}

```go
passList(passes ...string) BruteOpt
```

设置爆破使用的密码字典

在 yak 中通过 brute.passList 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| passes | `...string` | 一个或多个密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定密码字典
bruter = brute.New("ssh", brute.passList("123456", "password"))~
``````````````

---

### userList {#userlist}

```go
userList(users ...string) BruteOpt
```

设置爆破使用的用户名字典

在 yak 中通过 brute.userList 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| users | `...string` | 一个或多个用户名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定用户名字典
bruter = brute.New("ssh", brute.userList("root", "admin"))~
``````````````

---

