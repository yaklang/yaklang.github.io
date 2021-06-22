# tools


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tools.NewBruteUtil](#toolsnewbruteutil) |  |
 | [tools.NewPocInvoker](#toolsnewpocinvoker) |  |
 | [tools.NewSubFinder](#toolsnewsubfinder) |  |
 | [tools.ScanSubDomain](#toolsscansubdomain) |  |




 



## 函数定义

### tools.NewBruteUtil



#### 详细描述



#### 定义：

`func tools.NewBruteUtil(v1: string) return (r0: *bruteutils.BruteUtil, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*bruteutils.BruteUtil` |   |
| r1 | `error` |   |


 
### tools.NewPocInvoker



#### 详细描述



#### 定义：

`func tools.NewPocInvoker() return (r0: *tools.PocInvoker, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*tools.PocInvoker` |   |
| r1 | `error` |   |


 
### tools.NewSubFinder



#### 详细描述



#### 定义：

`func tools.NewSubFinder() return (r0: *tools.SubFinderInstance, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*tools.SubFinderInstance` |   |
| r1 | `error` |   |


 
### tools.ScanSubDomain



#### 详细描述



#### 定义：

`func tools.ScanSubDomain(v1: context.Context, v2 ...[]string) return (r0: chan *subdomain.SubdomainResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |
| v2 | `[]string /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *subdomain.SubdomainResult` |   |
| r1 | `error` |   |


 


