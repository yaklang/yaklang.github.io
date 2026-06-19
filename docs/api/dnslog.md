# dnslog

|函数名|函数描述/介绍|
|:------|:--------|
| [dnslog.LookupFirst](#lookupfirst) ||
| [dnslog.NewCustomDNSLog](#newcustomdnslog) |NewCustomDNSLog 创建一个 DNSLog 客户端，用于申请 DNSLog 域名并查询 DNS 回连记录 在 yak 中通过 dnslog.NewCustomDNSLog 调用，可通过选项设置平台、是否本地、脚本等 参数: - opts: 可选配置项，如 dnslog.mode、dnsl...|
| [dnslog.QueryCustomScript](#querycustomscript) |QueryCustomScript 是为自定义 DNSLog 脚本预留的占位函数，当前不执行任何操作 在 yak 中通过 dnslog.QueryCustomScript 调用|
| [dnslog.local](#local) |local 设置是否使用本地反连服务来申请与查询 DNSLog 在 yak 中通过 dnslog.local 调用 参数: - isLocal: 是否使用本地模式 返回值: - 一个 dnslog.NewCustomDNSLog 可接收的配置选项|
| [dnslog.mode](#mode) |mode 指定 DNSLog 使用的平台名称 在 yak 中通过 dnslog.mode 调用 参数: - mode: DNSLog 平台标识字符串 返回值: - 一个 dnslog.NewCustomDNSLog 可接收的配置选项|
| [dnslog.random](#random) |random 设置 DNSLog 客户端随机选择可用平台(mode 设为通配) 在 yak 中通过 dnslog.random 调用 返回值: - 一个 dnslog.NewCustomDNSLog 可接收的配置选项|
| [dnslog.script](#script) |script 指定用于申请与查询 DNSLog 的自定义 yak 脚本名称，并自动切换为本地模式 在 yak 中通过 dnslog.script 调用 参数: - name: 自定义 DNSLog 脚本的名称 返回值: - 一个 dnslog.NewCustomDNSLog 可接收的配置选项|


## 函数定义
### LookupFirst

#### 详细描述
暂无描述

#### 定义

`LookupFirst(host string, opt ...DNSOption) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |  |
| opt | `...DNSOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### NewCustomDNSLog

#### 详细描述
NewCustomDNSLog 创建一个 DNSLog 客户端，用于申请 DNSLog 域名并查询 DNS 回连记录

在 yak 中通过 dnslog.NewCustomDNSLog 调用，可通过选项设置平台、是否本地、脚本等

参数:

  - opts: 可选配置项，如 dnslog.mode、dnslog.local、dnslog.script、dnslog.random



返回值:

  - DNSLog 客户端对象，可调用 GetSubDomainAndToken/CheckDNSLogByToken 等方法




Example:

``````````````yak
// 该示例为示意性用法：依赖外部 DNSLog 平台/反连服务
client = dnslog.NewCustomDNSLog(dnslog.random())
domain, token = client.GetSubDomainAndToken()~
println("dnslog domain:", domain)
// 触发对 domain 的 DNS 请求后查询回连事件
events = client.CheckDNSLogByToken()~
``````````````


#### 定义

`NewCustomDNSLog(opts ..._dnslogConfigOpt) *CustomDNSLog`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `..._dnslogConfigOpt` | 可选配置项，如 dnslog.mode、dnslog.local、dnslog.script、dnslog.random |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CustomDNSLog` | DNSLog 客户端对象，可调用 GetSubDomainAndToken/CheckDNSLogByToken 等方法 |


### QueryCustomScript

#### 详细描述
QueryCustomScript 是为自定义 DNSLog 脚本预留的占位函数，当前不执行任何操作

在 yak 中通过 dnslog.QueryCustomScript 调用




Example:

``````````````yak
// 该示例为示意性用法：占位接口，无实际副作用
dnslog.QueryCustomScript()
``````````````


#### 定义

`QueryCustomScript()`


### local

#### 详细描述
local 设置是否使用本地反连服务来申请与查询 DNSLog

在 yak 中通过 dnslog.local 调用

参数:

  - isLocal: 是否使用本地模式



返回值:

  - 一个 dnslog.NewCustomDNSLog 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用本地反连服务
client = dnslog.NewCustomDNSLog(dnslog.local(true))
``````````````


#### 定义

`local(isLocal bool) _dnslogConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isLocal | `bool` | 是否使用本地模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |


### mode

#### 详细描述
mode 指定 DNSLog 使用的平台名称

在 yak 中通过 dnslog.mode 调用

参数:

  - mode: DNSLog 平台标识字符串



返回值:

  - 一个 dnslog.NewCustomDNSLog 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定 DNSLog 平台
client = dnslog.NewCustomDNSLog(dnslog.mode("dnslog.cn"))
``````````````


#### 定义

`mode(mode string) _dnslogConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `string` | DNSLog 平台标识字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |


### random

#### 详细描述
random 设置 DNSLog 客户端随机选择可用平台(mode 设为通配)

在 yak 中通过 dnslog.random 调用

返回值:

  - 一个 dnslog.NewCustomDNSLog 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：随机选择 DNSLog 平台
client = dnslog.NewCustomDNSLog(dnslog.random())
``````````````


#### 定义

`random() _dnslogConfigOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |


### script

#### 详细描述
script 指定用于申请与查询 DNSLog 的自定义 yak 脚本名称，并自动切换为本地模式

在 yak 中通过 dnslog.script 调用

参数:

  - name: 自定义 DNSLog 脚本的名称



返回值:

  - 一个 dnslog.NewCustomDNSLog 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用自定义脚本驱动 DNSLog
client = dnslog.NewCustomDNSLog(dnslog.script("my-dnslog-script"))
``````````````


#### 定义

`script(name string) _dnslogConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 自定义 DNSLog 脚本的名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |


