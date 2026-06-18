# dnslog

|函数名|函数描述/介绍|
|:------|:--------|
| [dnslog.LookupFirst](#lookupfirst) ||
| [dnslog.NewCustomDNSLog](#newcustomdnslog) ||
| [dnslog.QueryCustomScript](#querycustomscript) ||
| [dnslog.local](#local) ||
| [dnslog.mode](#mode) ||
| [dnslog.random](#random) ||
| [dnslog.script](#script) ||


## 函数定义
### LookupFirst

#### 详细描述


#### 定义

`LookupFirst(host string, opt ...DNSOption) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| opt | `...DNSOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewCustomDNSLog

#### 详细描述


#### 定义

`NewCustomDNSLog(opts ..._dnslogConfigOpt) *CustomDNSLog`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `..._dnslogConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CustomDNSLog` |   |


### QueryCustomScript

#### 详细描述


#### 定义

`QueryCustomScript()`


### local

#### 详细描述


#### 定义

`local(isLocal bool) _dnslogConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isLocal | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` |   |


### mode

#### 详细描述


#### 定义

`mode(mode string) _dnslogConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` |   |


### random

#### 详细描述


#### 定义

`random() _dnslogConfigOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` |   |


### script

#### 详细描述


#### 定义

`script(name string) _dnslogConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnslogConfigOpt` |   |


