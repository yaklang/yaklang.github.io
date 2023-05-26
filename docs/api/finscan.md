# finscan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [finscan.Scan](#finscanscan) |  |
 | [finscan.concurrent](#finscanconcurrent) |  |
 | [finscan.excludeHosts](#finscanexcludehosts) |  |
 | [finscan.excludePorts](#finscanexcludeports) |  |
 | [finscan.initHostFilter](#finscaninithostfilter) |  |
 | [finscan.initPortFilter](#finscaninitportfilter) |  |
 | [finscan.outputFile](#finscanoutputfile) |  |
 | [finscan.outputPrefix](#finscanoutputprefix) |  |
 | [finscan.rateLimit](#finscanratelimit) |  |
 | [finscan.wait](#finscanwait) |  |




 



## 函数定义

### finscan.Scan



#### 详细描述



#### 定义：

`Scan(string, string, ...tools.finScanOpt) (chan *finscan.FinScanResult, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...tools.finScanOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *finscan.FinScanResult` |   |
| r1 | `error` |   |


 
### finscan.concurrent



#### 详细描述



#### 定义：

`concurrent(int) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.excludeHosts



#### 详细描述



#### 定义：

`excludeHosts(string) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.excludePorts



#### 详细描述



#### 定义：

`excludePorts(string) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.initHostFilter



#### 详细描述



#### 定义：

`initHostFilter(string) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.initPortFilter



#### 详细描述



#### 定义：

`initPortFilter(string) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.outputFile



#### 详细描述



#### 定义：

`outputFile(string) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.outputPrefix



#### 详细描述



#### 定义：

`outputPrefix(string) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.rateLimit



#### 详细描述



#### 定义：

`rateLimit(int, int) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 
### finscan.wait



#### 详细描述



#### 定义：

`wait(float64) tools.finScanOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func finScanOpt(v1: *tools._yakFinPortScanConfig) ` |   |


 


