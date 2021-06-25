# synscan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [synscan.Scan](#synscanscan) |  |
 | [synscan.outputFile](#synscanoutputfile) |  |
 | [synscan.outputPrefix](#synscanoutputprefix) |  |
 | [synscan.wait](#synscanwait) |  |




 



## 函数定义

### synscan.Scan



#### 详细描述



#### 定义：

`func synscan.Scan(v1: string, v2: string, v3 ...tools.scanOpt) return (r0: chan *tools.SynScanResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...tools.scanOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *tools.SynScanResult` |   |
| r1 | `error` |   |


 
### synscan.outputFile



#### 详细描述



#### 定义：

`func synscan.outputFile(v1: string) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.outputPrefix



#### 详细描述



#### 定义：

`func synscan.outputPrefix(v1: string) return (r0: func scanOpt(v1: *tools._yakPortScanConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func scanOpt(v1: *tools._yakPortScanConfig) ` |   |


 
### synscan.wait



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


 


