# dns

|函数名|函数描述/介绍|
|:------|:--------|
| [dns.QuertAxfr](#quertaxfr) ||
| [dns.QueryAxfr](#queryaxfr) ||
| [dns.QueryIP](#queryip) ||
| [dns.QueryIPAll](#queryipall) ||
| [dns.QueryNS](#queryns) ||
| [dns.QueryTXT](#querytxt) ||
| [dns.dnsServers](#dnsservers) ||
| [dns.timeout](#timeout) ||


## 函数定义
### QuertAxfr

#### 详细描述


#### 定义

`QuertAxfr(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `..._dnsConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### QueryAxfr

#### 详细描述


#### 定义

`QueryAxfr(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `..._dnsConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### QueryIP

#### 详细描述


#### 定义

`QueryIP(target string, opts ..._dnsConfigOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `..._dnsConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### QueryIPAll

#### 详细描述


#### 定义

`QueryIPAll(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `..._dnsConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### QueryNS

#### 详细描述


#### 定义

`QueryNS(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `..._dnsConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### QueryTXT

#### 详细描述


#### 定义

`QueryTXT(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `..._dnsConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### dnsServers

#### 详细描述


#### 定义

`dnsServers(servers ...string) _dnsConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnsConfigOpt` |   |


### timeout

#### 详细描述


#### 定义

`timeout(d float64) _dnsConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnsConfigOpt` |   |


