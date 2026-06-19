# brute

|函数名|函数描述/介绍|
|:------|:--------|
| [brute.GetAvailableBruteTypes](#getavailablebrutetypes) |GetAvailableBruteTypes 返回当前支持的所有内置爆破类型(协议/服务)名称列表 在 yak 中通过 brute.GetAvailableBruteTypes 调用 返回值: - 支持的爆破类型名称字符串切片，如 ssh、ftp、redis、mysql 等|
| [brute.GetPasswordListFromBruteType](#getpasswordlistfrombrutetype) |GetPasswordListFromBruteType 返回指定爆破类型对应的内置密码字典 在 yak 中通过 brute.GetPasswordListFromBruteType 调用 参数: - t: 爆破类型名称，如 ssh、mysql 返回值: - 该类型的内置密码候选列表|
| [brute.GetUsernameListFromBruteType](#getusernamelistfrombrutetype) |GetUsernameListFromBruteType 返回指定爆破类型对应的内置用户名字典 在 yak 中通过 brute.GetUsernameListFromBruteType 调用 参数: - t: 爆破类型名称，如 ssh、mysql 返回值: - 该类型的内置用户名候选列表|
| [brute.New](#new) |New 创建一个指定类型的弱口令爆破器，可通过选项配置字典、并发、延迟等，再调用 Start 对目标执行爆破 在 yak 中通过 brute.New 调用 参数: - typeStr: 爆破类型名称，如 ssh、mysql、redis - opts: 可选配置项，如 brute.userList、b...|
| [brute.autoDict](#autodict) |autoDict 根据爆破类型自动加载内置的用户名与密码字典 在 yak 中通过 brute.autoDict 调用 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.bruteHandler](#brutehandler) |bruteHandler 自定义爆破的核心处理函数，覆盖默认的协议爆破逻辑 在 yak 中通过 brute.bruteHandler 调用 参数: - cb: 处理单个爆破项并返回结果的回调函数 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.concurrent](#concurrent) |concurrent 设置单个目标内部的并发尝试数量 在 yak 中通过 brute.concurrent 调用 参数: - c: 单目标并发数 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.concurrentTarget](#concurrenttarget) |concurrentTarget 设置同时进行爆破的目标数量(默认 256) 在 yak 中通过 brute.concurrentTarget 调用 参数: - c: 并发目标数量 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.debug](#debug) |debug 设置爆破器是否开启调试模式，开启后会输出更详细的过程日志 在 yak 中通过 brute.debug 调用 参数: - b: 是否开启调试 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.finishingThreshold](#finishingthreshold) |finishingThreshold 设置单个目标的失败容忍阈值，连续失败达到该值后提前结束该目标的爆破 在 yak 中通过 brute.finishingThreshold 调用 参数: - i: 失败阈值 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.maxDelay](#maxdelay) |maxDelay 设置每个目标两次尝试之间的最大间隔秒数 在 yak 中通过 brute.maxDelay 调用 参数: - max: 最大间隔(秒) 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.minDelay](#mindelay) |minDelay 设置每个目标两次尝试之间的最小间隔秒数 在 yak 中通过 brute.minDelay 调用 参数: - min: 最小间隔(秒) 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.okToStop](#oktostop) |okToStop 设置当某个目标爆破出有效凭据后是否立即停止对该目标的后续尝试 在 yak 中通过 brute.okToStop 调用 参数: - b: 命中后是否停止 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.passList](#passlist) |passList 设置爆破使用的密码字典 在 yak 中通过 brute.passList 调用 参数: - passes: 一个或多个密码 返回值: - 一个 brute.New 可接收的配置选项|
| [brute.userList](#userlist) |userList 设置爆破使用的用户名字典 在 yak 中通过 brute.userList 调用 参数: - users: 一个或多个用户名 返回值: - 一个 brute.New 可接收的配置选项|


## 函数定义
### GetAvailableBruteTypes

#### 详细描述
GetAvailableBruteTypes 返回当前支持的所有内置爆破类型(协议/服务)名称列表

在 yak 中通过 brute.GetAvailableBruteTypes 调用

返回值:

  - 支持的爆破类型名称字符串切片，如 ssh、ftp、redis、mysql 等




Example:

``````````````yak
types = brute.GetAvailableBruteTypes()
assert len(types) > 0, "should expose builtin brute types"
// 常见服务 ssh 应在支持列表中
println("ssh" in types)   // OUT: true
assert "ssh" in types, "ssh brute type should be available"
``````````````


#### 定义

`GetAvailableBruteTypes() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 支持的爆破类型名称字符串切片，如 ssh、ftp、redis、mysql 等 |


### GetPasswordListFromBruteType

#### 详细描述
GetPasswordListFromBruteType 返回指定爆破类型对应的内置密码字典

在 yak 中通过 brute.GetPasswordListFromBruteType 调用

参数:

  - t: 爆破类型名称，如 ssh、mysql



返回值:

  - 该类型的内置密码候选列表




Example:

``````````````yak
passwords = brute.GetPasswordListFromBruteType("ssh")
assert len(passwords) > 0, "ssh password dict should not be empty"
``````````````


#### 定义

`GetPasswordListFromBruteType(t string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` | 爆破类型名称，如 ssh、mysql |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 该类型的内置密码候选列表 |


### GetUsernameListFromBruteType

#### 详细描述
GetUsernameListFromBruteType 返回指定爆破类型对应的内置用户名字典

在 yak 中通过 brute.GetUsernameListFromBruteType 调用

参数:

  - t: 爆破类型名称，如 ssh、mysql



返回值:

  - 该类型的内置用户名候选列表




Example:

``````````````yak
users = brute.GetUsernameListFromBruteType("ssh")
assert len(users) > 0, "ssh username dict should not be empty"
``````````````


#### 定义

`GetUsernameListFromBruteType(t string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` | 爆破类型名称，如 ssh、mysql |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 该类型的内置用户名候选列表 |


### New

#### 详细描述
New 创建一个指定类型的弱口令爆破器，可通过选项配置字典、并发、延迟等，再调用 Start 对目标执行爆破

在 yak 中通过 brute.New 调用

参数:

  - typeStr: 爆破类型名称，如 ssh、mysql、redis

  - opts: 可选配置项，如 brute.userList、brute.passList、brute.concurrent 等



返回值:

  - 爆破器对象，可调用 Start(targets...) 执行爆破

  - 错误信息，类型不支持时非 nil




Example:

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


#### 定义

`New(typeStr string, opts ...BruteOpt) (*yakBruter, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeStr | `string` | 爆破类型名称，如 ssh、mysql、redis |
| opts | `...BruteOpt` | 可选配置项，如 brute.userList、brute.passList、brute.concurrent 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakBruter` | 爆破器对象，可调用 Start(targets...) 执行爆破 |
| r2 | `error` | 错误信息，类型不支持时非 nil |


### autoDict

#### 详细描述
autoDict 根据爆破类型自动加载内置的用户名与密码字典

在 yak 中通过 brute.autoDict 调用

返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：自动使用内置字典
bruter = brute.New("ssh", brute.autoDict())~
``````````````


#### 定义

`autoDict() BruteOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### bruteHandler

#### 详细描述
bruteHandler 自定义爆破的核心处理函数，覆盖默认的协议爆破逻辑

在 yak 中通过 brute.bruteHandler 调用

参数:

  - cb: 处理单个爆破项并返回结果的回调函数



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：自定义爆破处理逻辑

	bruter = brute.New("ssh", brute.bruteHandler(func(item) {
	    return item.Result()
	}))~
``````````````


#### 定义

`bruteHandler(cb func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult` | 处理单个爆破项并返回结果的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### concurrent

#### 详细描述
concurrent 设置单个目标内部的并发尝试数量

在 yak 中通过 brute.concurrent 调用

参数:

  - c: 单目标并发数



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：单目标并发设为 1
bruter = brute.New("ssh", brute.concurrent(1))~
``````````````


#### 定义

`concurrent(c int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` | 单目标并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### concurrentTarget

#### 详细描述
concurrentTarget 设置同时进行爆破的目标数量(默认 256)

在 yak 中通过 brute.concurrentTarget 调用

参数:

  - c: 并发目标数量



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：同时爆破 10 个目标
bruter = brute.New("ssh", brute.concurrentTarget(10))~
``````````````


#### 定义

`concurrentTarget(c int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `int` | 并发目标数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### debug

#### 详细描述
debug 设置爆破器是否开启调试模式，开启后会输出更详细的过程日志

在 yak 中通过 brute.debug 调用

参数:

  - b: 是否开启调试



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启调试模式
bruter = brute.New("ssh", brute.debug(true))~
``````````````


#### 定义

`debug(b bool) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否开启调试 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### finishingThreshold

#### 详细描述
finishingThreshold 设置单个目标的失败容忍阈值，连续失败达到该值后提前结束该目标的爆破

在 yak 中通过 brute.finishingThreshold 调用

参数:

  - i: 失败阈值



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置失败阈值
bruter = brute.New("ssh", brute.finishingThreshold(50))~
``````````````


#### 定义

`finishingThreshold(i int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 失败阈值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### maxDelay

#### 详细描述
maxDelay 设置每个目标两次尝试之间的最大间隔秒数

在 yak 中通过 brute.maxDelay 调用

参数:

  - max: 最大间隔(秒)



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置最大间隔 5 秒
bruter = brute.New("ssh", brute.maxDelay(5))~
``````````````


#### 定义

`maxDelay(max int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` | 最大间隔(秒) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### minDelay

#### 详细描述
minDelay 设置每个目标两次尝试之间的最小间隔秒数

在 yak 中通过 brute.minDelay 调用

参数:

  - min: 最小间隔(秒)



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置最小间隔 1 秒
bruter = brute.New("ssh", brute.minDelay(1))~
``````````````


#### 定义

`minDelay(min int) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` | 最小间隔(秒) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### okToStop

#### 详细描述
okToStop 设置当某个目标爆破出有效凭据后是否立即停止对该目标的后续尝试

在 yak 中通过 brute.okToStop 调用

参数:

  - b: 命中后是否停止



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：命中即停止
bruter = brute.New("ssh", brute.okToStop(true))~
``````````````


#### 定义

`okToStop(b bool) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 命中后是否停止 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### passList

#### 详细描述
passList 设置爆破使用的密码字典

在 yak 中通过 brute.passList 调用

参数:

  - passes: 一个或多个密码



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定密码字典
bruter = brute.New("ssh", brute.passList("123456", "password"))~
``````````````


#### 定义

`passList(passes ...string) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passes | `...string` | 一个或多个密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


### userList

#### 详细描述
userList 设置爆破使用的用户名字典

在 yak 中通过 brute.userList 调用

参数:

  - users: 一个或多个用户名



返回值:

  - 一个 brute.New 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定用户名字典
bruter = brute.New("ssh", brute.userList("root", "admin"))~
``````````````


#### 定义

`userList(users ...string) BruteOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` | 一个或多个用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BruteOpt` | 一个 brute.New 可接收的配置选项 |


