# nasl {#library-nasl}

`nasl` 库提供对 NASL（Nessus Attack Scripting Language）脚本的加载与执行能力，可运行大量开源漏洞检测插件对目标做漏洞扫描，是兼容既有漏洞库的扫描引擎。

典型使用场景：

- 扫描：`nasl.Scan(hosts, ports, opts...)` 对目标范围扫描，`nasl.ScanTarget` 扫描单目标，返回知识库（KBs）结果 channel。
- 插件与数据库：`nasl.QueryAllScripts` 查询可用脚本，`nasl.UpdateDatabase` / `nasl.RemoveDatabase` 维护脚本库，`nasl.plugin` / `nasl.family` / `nasl.conditions` 选择脚本，`nasl.riskHandle` 处理发现的风险。

与相邻库的关系：`nasl` 与 `nuclei`（YAML 模板）同为模板化漏洞扫描引擎，发现的风险可经 `risk` 记录、`report` 汇总。

> 共 11 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [nasl.RemoveDatabase](#removedatabase) | - | `error` | 清空本地数据库中已导入的全部 NASL 脚本 |
| [nasl.UpdateDatabase](#updatedatabase) | `p string` | - | 从指定文件或目录加载 NASL 脚本(.nasl/.inc)并导入到本地数据库 |
| [nasl.family](#family) | `family string` | `script_core.NaslScriptConfigOptFunc` | WithFamily 指定本次 NASL 扫描要运行的脚本家族(family) |
| [nasl.riskHandle](#riskhandle) | `f func(any)` | `script_core.NaslScriptConfigOptFunc` | WithRiskHandle 设置 NASL 扫描发现风险时触发的回调函数 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [nasl.QueryAllScripts](#queryallscripts) | `script ...any` | `[]*script_core.NaslScriptInfo` | 根据可选的查询条件从本地数据库中检索已导入的 NASL 脚本信息 |
| [nasl.Scan](#scan) | `hosts string, ports string, opts ...script_core.NaslScriptConfigOptFunc` | `chan *script_core.NaslKBs` | 对指定主机与端口运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果 |
| [nasl.ScanTarget](#scantarget) | `target string, opts ...script_core.NaslScriptConfigOptFunc` | `chan *script_core.NaslKBs, error` | 对单个目标(host:port)运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果 |
| [nasl.conditions](#conditions) | `script ...any` | `script_core.NaslScriptConfigOptFunc` | WithConditions 按条件筛选要运行的 NASL 脚本 |
| [nasl.plugin](#plugin) | `plugins ...string` | `script_core.NaslScriptConfigOptFunc` | WithPlugins 指定本次 NASL 扫描要运行的插件(脚本文件名)列表 |
| [nasl.proxy](#proxy) | `proxies ...string` | `script_core.NaslScriptConfigOptFunc` | WithProxy 设置 NASL 扫描使用的代理地址列表 |
| [nasl.sourcePaths](#sourcepaths) | `sourcePath ...string` | `script_core.NaslScriptConfigOptFunc` | WithSourcePath 指定额外的 NASL 脚本源码搜索路径 |

## 函数详情

### RemoveDatabase {#removedatabase}

```go
RemoveDatabase() error
```

清空本地数据库中已导入的全部 NASL 脚本

在 yak 中通过 nasl.RemoveDatabase 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，操作失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：清空 NASL 脚本库
err = nasl.RemoveDatabase()
``````````````

---

### UpdateDatabase {#updatedatabase}

```go
UpdateDatabase(p string)
```

从指定文件或目录加载 NASL 脚本(.nasl/.inc)并导入到本地数据库

在 yak 中通过 nasl.UpdateDatabase 调用，传入目录时会递归加载

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `string` | NASL 脚本文件或目录路径 |

**示例**

``````````````yak
// 该示例为示意性用法：从目录批量导入 NASL 脚本
nasl.UpdateDatabase("/path/to/nasl-scripts")
``````````````

---

### family {#family}

```go
family(family string) script_core.NaslScriptConfigOptFunc
```

WithFamily 指定本次 NASL 扫描要运行的脚本家族(family)

在 yak 中通过 nasl.family 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| family | `string` | NASL 脚本家族名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：按家族选择脚本
res = nasl.ScanTarget("192.168.1.1:80", nasl.family("Web Servers"))~
``````````````

---

### riskHandle {#riskhandle}

```go
riskHandle(f func(any)) script_core.NaslScriptConfigOptFunc
```

WithRiskHandle 设置 NASL 扫描发现风险时触发的回调函数

在 yak 中通过 nasl.riskHandle 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(any)` | 接收风险对象的回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：处理扫描发现的风险

	res = nasl.ScanTarget("192.168.1.1:80", nasl.riskHandle(func(r) {
	    println("risk:", r)
	}))~
``````````````

---

## 可变参数函数详情

### QueryAllScripts {#queryallscripts}

```go
QueryAllScripts(script ...any) []*script_core.NaslScriptInfo
```

根据可选的查询条件从本地数据库中检索已导入的 NASL 脚本信息

在 yak 中通过 nasl.QueryAllScripts 调用，支持按 origin_file_name、cve、script_name、category、family 过滤

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| script | `...any` | 可选的查询条件 map |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*script_core.NaslScriptInfo` | 匹配的 NASL 脚本信息列表 |

**示例**

``````````````yak
// 该示例为示意性用法：依赖本地已导入的 NASL 脚本库
scripts = nasl.QueryAllScripts({"family": "Web Servers"})
println("scripts:", len(scripts))
``````````````

---

### Scan {#scan}

```go
Scan(hosts string, ports string, opts ...script_core.NaslScriptConfigOptFunc) chan *script_core.NaslKBs
```

对指定主机与端口运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果

在 yak 中通过 nasl.Scan 调用，依赖网络环境与已导入的 NASL 脚本

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| hosts | `string` | 目标主机(支持多种主机表达式) |
| ports | `string` | 目标端口(支持端口表达式) |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...script_core.NaslScriptConfigOptFunc` | 可选配置项，如 nasl.plugin、nasl.family 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *script_core.NaslKBs` | 一个只读 channel，逐条产出扫描结果 NaslKBs |

**示例**

``````````````yak
// 该示例为示意性用法：对主机端口运行 NASL 扫描
res = nasl.Scan("192.168.1.1", "80,443", nasl.family("Web Servers"))

	for kb = range res {
	    println(kb)
	}
``````````````

---

### ScanTarget {#scantarget}

```go
ScanTarget(target string, opts ...script_core.NaslScriptConfigOptFunc) (chan *script_core.NaslKBs, error)
```

对单个目标(host:port)运行 NASL 脚本进行扫描，以 channel 形式返回扫描得到的知识库(KB)结果

在 yak 中通过 nasl.ScanTarget 调用，依赖网络环境与已导入的 NASL 脚本

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 扫描目标，形如 &#34;192.168.1.1:80&#34; |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...script_core.NaslScriptConfigOptFunc` | 可选配置项，如 nasl.plugin、nasl.family、nasl.proxy 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *script_core.NaslKBs` | 一个只读 channel，逐条产出扫描结果 NaslKBs |
| r2 | `error` | 错误信息，目标解析失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：对目标运行指定 NASL 插件
res = nasl.ScanTarget("192.168.1.1:80", nasl.family("Web Servers"))~

	for kb = range res {
	    println(kb)
	}
``````````````

---

### conditions {#conditions}

```go
conditions(script ...any) script_core.NaslScriptConfigOptFunc
```

WithConditions 按条件筛选要运行的 NASL 脚本

在 yak 中通过 nasl.conditions 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| script | `...any` | 一个或多个筛选条件 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：按条件筛选脚本
res = nasl.ScanTarget("192.168.1.1:80", nasl.conditions({"category": "ACT_GATHER_INFO"}))~
``````````````

---

### plugin {#plugin}

```go
plugin(plugins ...string) script_core.NaslScriptConfigOptFunc
```

WithPlugins 指定本次 NASL 扫描要运行的插件(脚本文件名)列表

在 yak 中通过 nasl.plugin 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| plugins | `...string` | 一个或多个 NASL 插件名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定运行的 NASL 插件
res = nasl.ScanTarget("192.168.1.1:80", nasl.plugin("http_version.nasl"))~
``````````````

---

### proxy {#proxy}

```go
proxy(proxies ...string) script_core.NaslScriptConfigOptFunc
```

WithProxy 设置 NASL 扫描使用的代理地址列表

在 yak 中通过 nasl.proxy 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxies | `...string` | 一个或多个代理地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：通过代理扫描
res = nasl.ScanTarget("192.168.1.1:80", nasl.proxy("socks5://127.0.0.1:1080"))~
``````````````

---

### sourcePaths {#sourcepaths}

```go
sourcePaths(sourcePath ...string) script_core.NaslScriptConfigOptFunc
```

WithSourcePath 指定额外的 NASL 脚本源码搜索路径

在 yak 中通过 nasl.sourcePaths 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| sourcePath | `...string` | 一个或多个脚本源码目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `script_core.NaslScriptConfigOptFunc` | 一个 nasl.Scan/nasl.ScanTarget 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定脚本源码路径
res = nasl.ScanTarget("192.168.1.1:80", nasl.sourcePaths("/path/to/nasl"))~
``````````````

---

