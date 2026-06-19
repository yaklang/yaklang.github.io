# dns

|函数名|函数描述/介绍|
|:------|:--------|
| [dns.QuertAxfr](#quertaxfr) |QueryAxfr 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误 参数: - target: 要查询的域名 - opts: 可选配置，例如 dns.timeout、dns.dnsServers 返回值: - 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片|
| [dns.QueryAxfr](#queryaxfr) |QueryAxfr 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误 参数: - target: 要查询的域名 - opts: 可选配置，例如 dns.timeout、dns.dnsServers 返回值: - 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片|
| [dns.QueryIP](#queryip) |QueryIP 查询目标域名的 A 记录，返回解析到的第一个 IPv4 地址 参数: - target: 要查询的域名 - opts: 可选配置，例如 dns.timeout、dns.dnsServers 返回值: - 解析到的 IP 地址字符串；解析失败时返回空字符串|
| [dns.QueryIPAll](#queryipall) |QueryIPAll 查询目标域名的全部 A 记录，返回所有解析到的 IPv4 地址 参数: - target: 要查询的域名 - opts: 可选配置，例如 dns.timeout、dns.dnsServers 返回值: - 解析到的所有 IP 地址字符串切片；解析失败时返回空切片|
| [dns.QueryNS](#queryns) |QueryNS 查询目标域名的 NS（权威域名服务器）记录 参数: - target: 要查询的域名 - opts: 可选配置，例如 dns.timeout、dns.dnsServers 返回值: - 解析到的 NS 记录字符串切片；解析失败时返回空切片|
| [dns.QueryTXT](#querytxt) |QueryTXT 查询目标域名的 TXT 记录 参数: - target: 要查询的域名 - opts: 可选配置，例如 dns.timeout、dns.dnsServers 返回值: - 解析到的 TXT 记录字符串切片；解析失败时返回空切片|
| [dns.dnsServers](#dnsservers) |dnsServers 是一个 DNS 查询配置选项，用于指定自定义的 DNS 服务器列表 参数: - servers: 一个或多个 DNS 服务器地址（如 &#34;8.8.8.8&#34;） 返回值: - 一个 DNS 查询配置选项，作为可变参数传入查询函数|
| [dns.timeout](#timeout) |timeout 是一个 DNS 查询配置选项，用于设置查询的超时时间（单位：秒） 参数: - d: 超时时间，单位为秒，支持小数 返回值: - 一个 DNS 查询配置选项，作为可变参数传入查询函数|


## 函数定义
### QuertAxfr

#### 详细描述
QueryAxfr 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误

参数:

  - target: 要查询的域名

  - opts: 可选配置，例如 dns.timeout、dns.dnsServers



返回值:

  - 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片




Example:

``````````````yak
// 真实 DNS 区域传送查询，结果依赖目标配置，此处仅作示意
records = dns.QueryAxfr("zonetransfer.me", dns.timeout(5))
for r in records { println(r) }
``````````````


#### 定义

`QuertAxfr(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 要查询的域名 |
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片 |


### QueryAxfr

#### 详细描述
QueryAxfr 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误

参数:

  - target: 要查询的域名

  - opts: 可选配置，例如 dns.timeout、dns.dnsServers



返回值:

  - 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片




Example:

``````````````yak
// 真实 DNS 区域传送查询，结果依赖目标配置，此处仅作示意
records = dns.QueryAxfr("zonetransfer.me", dns.timeout(5))
for r in records { println(r) }
``````````````


#### 定义

`QueryAxfr(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 要查询的域名 |
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片 |


### QueryIP

#### 详细描述
QueryIP 查询目标域名的 A 记录，返回解析到的第一个 IPv4 地址

参数:

  - target: 要查询的域名

  - opts: 可选配置，例如 dns.timeout、dns.dnsServers



返回值:

  - 解析到的 IP 地址字符串；解析失败时返回空字符串




Example:

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
ip = dns.QueryIP("www.example.com", dns.timeout(5))
println(ip)
``````````````


#### 定义

`QueryIP(target string, opts ..._dnsConfigOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 要查询的域名 |
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解析到的 IP 地址字符串；解析失败时返回空字符串 |


### QueryIPAll

#### 详细描述
QueryIPAll 查询目标域名的全部 A 记录，返回所有解析到的 IPv4 地址

参数:

  - target: 要查询的域名

  - opts: 可选配置，例如 dns.timeout、dns.dnsServers



返回值:

  - 解析到的所有 IP 地址字符串切片；解析失败时返回空切片




Example:

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
ips = dns.QueryIPAll("www.example.com", dns.timeout(5))
for ip in ips { println(ip) }
``````````````


#### 定义

`QueryIPAll(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 要查询的域名 |
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析到的所有 IP 地址字符串切片；解析失败时返回空切片 |


### QueryNS

#### 详细描述
QueryNS 查询目标域名的 NS（权威域名服务器）记录

参数:

  - target: 要查询的域名

  - opts: 可选配置，例如 dns.timeout、dns.dnsServers



返回值:

  - 解析到的 NS 记录字符串切片；解析失败时返回空切片




Example:

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
records = dns.QueryNS("example.com", dns.timeout(5))
for r in records { println(r) }
``````````````


#### 定义

`QueryNS(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 要查询的域名 |
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析到的 NS 记录字符串切片；解析失败时返回空切片 |


### QueryTXT

#### 详细描述
QueryTXT 查询目标域名的 TXT 记录

参数:

  - target: 要查询的域名

  - opts: 可选配置，例如 dns.timeout、dns.dnsServers



返回值:

  - 解析到的 TXT 记录字符串切片；解析失败时返回空切片




Example:

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
records = dns.QueryTXT("example.com", dns.timeout(5))
for r in records { println(r) }
``````````````


#### 定义

`QueryTXT(target string, opts ..._dnsConfigOpt) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 要查询的域名 |
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析到的 TXT 记录字符串切片；解析失败时返回空切片 |


### dnsServers

#### 详细描述
dnsServers 是一个 DNS 查询配置选项，用于指定自定义的 DNS 服务器列表

参数:

  - servers: 一个或多个 DNS 服务器地址（如 &#34;8.8.8.8&#34;）



返回值:

  - 一个 DNS 查询配置选项，作为可变参数传入查询函数




Example:

``````````````yak
// 指定使用 8.8.8.8 与 1.1.1.1 进行查询，此处仅作示意
ip = dns.QueryIP("www.example.com", dns.dnsServers("8.8.8.8", "1.1.1.1"), dns.timeout(5))
println(ip)
``````````````


#### 定义

`dnsServers(servers ...string) _dnsConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `...string` | 一个或多个 DNS 服务器地址（如 &#34;8.8.8.8&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnsConfigOpt` | 一个 DNS 查询配置选项，作为可变参数传入查询函数 |


### timeout

#### 详细描述
timeout 是一个 DNS 查询配置选项，用于设置查询的超时时间（单位：秒）

参数:

  - d: 超时时间，单位为秒，支持小数



返回值:

  - 一个 DNS 查询配置选项，作为可变参数传入查询函数




Example:

``````````````yak
// 设置 3 秒超时进行 DNS 查询，此处仅作示意
ip = dns.QueryIP("www.example.com", dns.timeout(3))
println(ip)
``````````````


#### 定义

`timeout(d float64) _dnsConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_dnsConfigOpt` | 一个 DNS 查询配置选项，作为可变参数传入查询函数 |


