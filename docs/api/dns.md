# dns


|成员函数|函数描述/介绍|
|:------|:--------|
 | [dns.QueryIP](#dnsqueryip) | 新增查询域名 IP 的接口 |
 | [dns.QueryIPAll](#dnsqueryipall) | 查询一个域名的所有 IP |
 | [dns.QueryNS](#dnsqueryns) | 查询 NameServers |
 | [dns.dnsServers](#dnsdnsservers) |  |
 | [dns.timeout](#dnstimeout) | 设置 timeout |




 



## 函数定义

### dns.QueryIP

新增查询域名 IP 的接口

#### 详细描述



#### 定义：

`func dns.QueryIP(v1: string, v2 ...yaklib._dnsConfigOpt) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib._dnsConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### dns.QueryIPAll

查询一个域名的所有 IP

#### 详细描述



#### 定义：

`func dns.QueryIPAll(v1: string, v2 ...yaklib._dnsConfigOpt) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib._dnsConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### dns.QueryNS

查询 NameServers

#### 详细描述



#### 定义：

`func dns.QueryNS(v1: string, v2 ...yaklib._dnsConfigOpt) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib._dnsConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### dns.dnsServers



#### 详细描述



#### 定义：

`func dns.dnsServers(v1 ...string) return (r0: func _dnsConfigOpt(v1: *yaklib._dnsConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _dnsConfigOpt(v1: *yaklib._dnsConfig) ` |   |


 
### dns.timeout

设置 timeout

#### 详细描述



#### 定义：

`func dns.timeout(v1: float64) return (r0: func _dnsConfigOpt(v1: *yaklib._dnsConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _dnsConfigOpt(v1: *yaklib._dnsConfig) ` |   |


 


