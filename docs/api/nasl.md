# nasl

|函数名|函数描述/介绍|
|:------|:--------|
| [nasl.QueryAllScripts](#queryallscripts) |QueryAllScripts 根据可选的查询条件从本地数据库中检索已导入的 NASL 脚本信息 在 yak 中通过 nasl.QueryAllScripts 调用，支持按 origin_file_name、cve、script_name、category、family 过滤 参数: - scrip...|
| [nasl.RemoveDatabase](#removedatabase) |RemoveDatabase 清空本地数据库中已导入的全部 NASL 脚本 在 yak 中通过 nasl.RemoveDatabase 调用 返回值: - 错误信息，操作失败时非 nil|
| [nasl.Scan](#scan) |Scan 对指定主机与端口运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果 在 yak 中通过 nasl.Scan 调用，依赖网络环境与已导入的 NASL 脚本 参数: - hosts: 目标主机(支持多种主机表达式) - ports: 目标端口(支持端口表达式...|
| [nasl.ScanTarget](#scantarget) |ScanTarget 对单个目标(host:port)运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果 在 yak 中通过 nasl.ScanTarget 调用，依赖网络环境与已导入的 NASL 脚本 参数: - target: 扫描目标，形如 &#34;192.168...|
| [nasl.UpdateDatabase](#updatedatabase) |UpdateDatabase 从指定文件或目录加载 NASL 脚本(.nasl/.inc)并导入到本地数据库 在 yak 中通过 nasl.UpdateDatabase 调用，传入目录时会递归加载 参数: - p: NASL 脚本文件或目录路径|
| [nasl.conditions](#conditions) |WithConditions 按条件筛选要运行的 NASL 脚本 在 yak 中通过 nasl.conditions 调用 参数: - script: 一个或多个筛选条件 返回值: - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项|
| [nasl.family](#family) |WithFamily 指定本次 NASL 扫描要运行的脚本家族(family) 在 yak 中通过 nasl.family 调用 参数: - family: NASL 脚本家族名称 返回值: - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项|
| [nasl.plugin](#plugin) |WithPlugins 指定本次 NASL 扫描要运行的插件(脚本文件名)列表 在 yak 中通过 nasl.plugin 调用 参数: - plugins: 一个或多个 NASL 插件名 返回值: - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项|
| [nasl.proxy](#proxy) |WithProxy 设置 NASL 扫描使用的代理地址列表 在 yak 中通过 nasl.proxy 调用 参数: - proxies: 一个或多个代理地址 返回值: - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项|
| [nasl.riskHandle](#riskhandle) |WithRiskHandle 设置 NASL 扫描发现风险时触发的回调函数 在 yak 中通过 nasl.riskHandle 调用 参数: - f: 接收风险对象的回调函数 返回值: - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项|
| [nasl.sourcePaths](#sourcepaths) |WithSourcePath 指定额外的 NASL 脚本源码搜索路径 在 yak 中通过 nasl.sourcePaths 调用 参数: - sourcePath: 一个或多个脚本源码目录 返回值: - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项|


## 函数定义
### QueryAllScripts

#### 详细描述
QueryAllScripts 根据可选的查询条件从本地数据库中检索已导入的 NASL 脚本信息

在 yak 中通过 nasl.QueryAllScripts 调用，支持按 origin_file_name、cve、script_name、category、family 过滤

参数:

  - script: 可选的查询条件 map



返回值:

  - 匹配的 NASL 脚本信息列表




Example:

``````````````yak
// 该示例为示意性用法：依赖本地已导入的 NASL 脚本库
scripts = nasl.QueryAllScripts({"family": "Web Servers"})
println("scripts:", len(scripts))
``````````````


#### 定义

`QueryAllScripts(script ...any) []*script_core.NaslScriptInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| script | `...any` | 可选的查询条件 map |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*script_core.NaslScriptInfo` | 匹配的 NASL 脚本信息列表 |


### RemoveDatabase

#### 详细描述
RemoveDatabase 清空本地数据库中已导入的全部 NASL 脚本

在 yak 中通过 nasl.RemoveDatabase 调用

返回值:

  - 错误信息，操作失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：清空 NASL 脚本库
err = nasl.RemoveDatabase()
``````````````


#### 定义

`RemoveDatabase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，操作失败时非 nil |


### Scan

#### 详细描述
Scan 对指定主机与端口运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果

在 yak 中通过 nasl.Scan 调用，依赖网络环境与已导入的 NASL 脚本

参数:

  - hosts: 目标主机(支持多种主机表达式)

  - ports: 目标端口(支持端口表达式)

  - opts: 可选配置项，如 nasl.plugin、nasl.family 等



返回值:

  - 一个只读 channel，逐条产出扫描结果 NaslKBs




Example:

``````````````yak
// 该示例为示意性用法：对主机端口运行 NASL 扫描
res = nasl.Scan("192.168.1.1", "80,443", nasl.family("Web Servers"))

	for kb = range res {
	    println(kb)
	}
``````````````


#### 定义

`Scan(hosts string, ports string, opts ...script_core.NaslScriptConfigOptFunc) chan *script_core.NaslKBs`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` | 目标主机(支持多种主机表达式) |
| ports | `string` | 目标端口(支持端口表达式) |
| opts | `...script_core.NaslScriptConfigOptFunc` | 可选配置项，如 nasl.plugin、nasl.family 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *script_core.NaslKBs` | 一个只读 channel，逐条产出扫描结果 NaslKBs |


### ScanTarget

#### 详细描述
ScanTarget 对单个目标(host:port)运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果

在 yak 中通过 nasl.ScanTarget 调用，依赖网络环境与已导入的 NASL 脚本

参数:

  - target: 扫描目标，形如 &#34;192.168.1.1:80&#34;

  - opts: 可选配置项，如 nasl.plugin、nasl.family、nasl.proxy 等



返回值:

  - 一个只读 channel，逐条产出扫描结果 NaslKBs

  - 错误信息，目标解析失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：对目标运行指定 NASL 插件
res = nasl.ScanTarget("192.168.1.1:80", nasl.family("Web Servers"))~

	for kb = range res {
	    println(kb)
	}
``````````````


#### 定义

`ScanTarget(target string, opts ...script_core.NaslScriptConfigOptFunc) (chan *script_core.NaslKBs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 扫描目标，形如 &#34;192.168.1.1:80&#34; |
| opts | `...script_core.NaslScriptConfigOptFunc` | 可选配置项，如 nasl.plugin、nasl.family、nasl.proxy 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *script_core.NaslKBs` | 一个只读 channel，逐条产出扫描结果 NaslKBs |
| r2 | `error` | 错误信息，目标解析失败时非 nil |


### UpdateDatabase

#### 详细描述
UpdateDatabase 从指定文件或目录加载 NASL 脚本(.nasl/.inc)并导入到本地数据库

在 yak 中通过 nasl.UpdateDatabase 调用，传入目录时会递归加载

参数:

  - p: NASL 脚本文件或目录路径




Example:

``````````````yak
// 该示例为示意性用法：从目录批量导入 NASL 脚本
nasl.UpdateDatabase("/path/to/nasl-scripts")
``````````````


#### 定义

`UpdateDatabase(p string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` | NASL 脚本文件或目录路径 |


### conditions

#### 详细描述
WithConditions 按条件筛选要运行的 NASL 脚本

在 yak 中通过 nasl.conditions 调用

参数:

  - script: 一个或多个筛选条件



返回值:

  - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：按条件筛选脚本
res = nasl.ScanTarget("192.168.1.1:80", nasl.conditions({"category": "ACT_GATHER_INFO"}))~
``````````````


#### 定义

`conditions(script ...any) script_core.NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| script | `...any` | 一个或多个筛选条件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |


### family

#### 详细描述
WithFamily 指定本次 NASL 扫描要运行的脚本家族(family)

在 yak 中通过 nasl.family 调用

参数:

  - family: NASL 脚本家族名称



返回值:

  - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：按家族选择脚本
res = nasl.ScanTarget("192.168.1.1:80", nasl.family("Web Servers"))~
``````````````


#### 定义

`family(family string) script_core.NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| family | `string` | NASL 脚本家族名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |


### plugin

#### 详细描述
WithPlugins 指定本次 NASL 扫描要运行的插件(脚本文件名)列表

在 yak 中通过 nasl.plugin 调用

参数:

  - plugins: 一个或多个 NASL 插件名



返回值:

  - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定运行的 NASL 插件
res = nasl.ScanTarget("192.168.1.1:80", nasl.plugin("http_version.nasl"))~
``````````````


#### 定义

`plugin(plugins ...string) script_core.NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| plugins | `...string` | 一个或多个 NASL 插件名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |


### proxy

#### 详细描述
WithProxy 设置 NASL 扫描使用的代理地址列表

在 yak 中通过 nasl.proxy 调用

参数:

  - proxies: 一个或多个代理地址



返回值:

  - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：通过代理扫描
res = nasl.ScanTarget("192.168.1.1:80", nasl.proxy("socks5://127.0.0.1:1080"))~
``````````````


#### 定义

`proxy(proxies ...string) script_core.NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` | 一个或多个代理地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |


### riskHandle

#### 详细描述
WithRiskHandle 设置 NASL 扫描发现风险时触发的回调函数

在 yak 中通过 nasl.riskHandle 调用

参数:

  - f: 接收风险对象的回调函数



返回值:

  - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：处理扫描发现的风险

	res = nasl.ScanTarget("192.168.1.1:80", nasl.riskHandle(func(r) {
	    println("risk:", r)
	}))~
``````````````


#### 定义

`riskHandle(f func(any)) script_core.NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(any)` | 接收风险对象的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |


### sourcePaths

#### 详细描述
WithSourcePath 指定额外的 NASL 脚本源码搜索路径

在 yak 中通过 nasl.sourcePaths 调用

参数:

  - sourcePath: 一个或多个脚本源码目录



返回值:

  - 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定脚本源码路径
res = nasl.ScanTarget("192.168.1.1:80", nasl.sourcePaths("/path/to/nasl"))~
``````````````


#### 定义

`sourcePaths(sourcePath ...string) script_core.NaslScriptConfigOptFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourcePath | `...string` | 一个或多个脚本源码目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |


