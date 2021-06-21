# synscan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [synscan.Scan](#synscanscan) |  |
 | [synscan.outputFile](#synscanoutputfile) |  |
 | [synscan.outputPrefix](#synscanoutputprefix) |  |
 | [synscan.wait](#synscanwait) |  |




 



## 函数定义

### synscan.Scan



#### 定义：

`func (v1: string, v2: string, v3 ...func scanOpt(v1: *tools._yakPortScanConfig) ) return(chan *tools.SynScanResult, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | []tools.scanOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan *tools.SynScanResult |   |
| r1 | error |   |


### synscan.outputFile



#### 定义：

`func (v1: string) return(func scanOpt(v1: *tools._yakPortScanConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func scanOpt(v1: *tools._yakPortScanConfig)  |   |


### synscan.outputPrefix



#### 定义：

`func (v1: string) return(func scanOpt(v1: *tools._yakPortScanConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func scanOpt(v1: *tools._yakPortScanConfig)  |   |


### synscan.wait



#### 定义：

`func (v1: float64) return(func scanOpt(v1: *tools._yakPortScanConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func scanOpt(v1: *tools._yakPortScanConfig)  |   |





