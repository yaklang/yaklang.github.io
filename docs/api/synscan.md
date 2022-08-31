# synscan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [synscan.Scan](#synscanscan) | 扫描核心函数 |
 | [synscan.ScanFromPing](#synscanscanfromping) | 新增从 Ping 中的扫描 |
 | [synscan.callback](#synscancallback) |  |
 | [synscan.concurrent](#synscanconcurrent) |  |
 | [synscan.excludeHosts](#synscanexcludehosts) | 可设置排除的 Host |
 | [synscan.excludePorts](#synscanexcludeports) | 设置排除端口 |
 | [synscan.initHostFilter](#synscaninithostfilter) |  |
 | [synscan.initPortFilter](#synscaninitportfilter) |  |
 | [synscan.outputFile](#synscanoutputfile) | 【参数】synscan 对外输出的文件 |
 | [synscan.outputPrefix](#synscanoutputprefix) | 【参数】输出的文件每一行的前缀（用于增加 `https://` 这样的协议名等） |
 | [synscan.rateLimit](#synscanratelimit) |  |
 | [synscan.submitTaskCallback](#synscansubmittaskcallback) |  |
 | [synscan.wait](#synscanwait) | 【参数】当所有数据包发出之后，等待多少秒？ |




 



## 函数定义

### synscan.Scan

扫描核心函数

#### 详细描述



#### 定义：

`func synscan.Scan(hosts: string, ports: string, v3 ...tools.scanOpt) return (r0: chan *synscan.SynScanResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |
| ports | `string` |   |
| v3 | `...tools.scanOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *synscan.SynScanResult` |   |
| r1 | `error` |   |


 
### synscan.ScanFromPing

新增从 Ping 中的扫描

#### 详细描述



#### 定义：

`func synscan.ScanFromPing(v1: chan *pingutil.PingResult, v2: string, v3 ...tools.scanOpt) return (r0: chan *synscan.SynScanResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `chan *pingutil.PingResult` |   |
| v2 | `string` |   |
| v3 | `...tools.scanOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *synscan.SynScanResult` |   |
| r1 | `error` |   |


 
### synscan.callback



#### 详细描述



#### 定义：

`func synscan.callback(v1: func (v1: *synscan.SynScanResult) ) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *synscan.SynScanResult) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.concurrent



#### 详细描述



#### 定义：

`func synscan.concurrent(v1: int) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.excludeHosts

可设置排除的 Host

#### 详细描述



#### 定义：

`func synscan.excludeHosts(v1: string) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.excludePorts

设置排除端口

#### 详细描述



#### 定义：

`func synscan.excludePorts(v1: string) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.initHostFilter



#### 详细描述



#### 定义：

`func synscan.initHostFilter(v1: string) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.initPortFilter



#### 详细描述



#### 定义：

`func synscan.initPortFilter(v1: string) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.outputFile

【参数】synscan 对外输出的文件

#### 详细描述



#### 定义：

`func synscan.outputFile(v1: string) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### synscan.outputPrefix

【参数】输出的文件每一行的前缀（用于增加 `https://` 这样的协议名等）

#### 详细描述



#### 定义：

`func synscan.outputPrefix(prefix: string) return (r0: opt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### synscan.rateLimit



#### 详细描述



#### 定义：

`func synscan.rateLimit(v1: int, v2: int) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.submitTaskCallback



#### 详细描述



#### 定义：

`func synscan.submitTaskCallback(v1: func (v1: string) ) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: string) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.wait

【参数】当所有数据包发出之后，等待多少秒？

#### 详细描述



#### 定义：

`func synscan.wait(v1: float64) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 


