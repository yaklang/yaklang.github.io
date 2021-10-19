# synscan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [synscan.Scan](#synscanscan) |  |
 | [synscan.outputFile](#synscanoutputfile) | 【参数】synscan 对外输出的文件 |
 | [synscan.outputPrefix](#synscanoutputprefix) | 【参数】输出的文件每一行的前缀（用于增加 `https://` 这样的协议名等） |
 | [synscan.wait](#synscanwait) | 【参数】当所有数据包发出之后，等待多少秒？ |




 



## 函数定义

### synscan.Scan



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


 


