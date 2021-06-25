# fuzz


|成员函数|函数描述/介绍|
|:------|:--------|
 | [fuzz.HTTPRequest](#fuzzhttprequest) |  |
 | [fuzz.Strings](#fuzzstrings) |  |
 | [fuzz.UrlsToHTTPRequests](#fuzzurlstohttprequests) |  |
 | [fuzz.https](#fuzzhttps) |  |




 



## 函数定义

### fuzz.HTTPRequest



#### 详细描述



#### 定义：

`func fuzz.HTTPRequest(v1: any, v2 ...mutate.BuildFuzzHTTPRequestOption) return (r0: *mutate.FuzzHTTPRequest, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...mutate.BuildFuzzHTTPRequestOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mutate.FuzzHTTPRequest` |   |
| r1 | `error` |   |


 
### fuzz.Strings



#### 详细描述



#### 定义：

`func fuzz.Strings(v1: any) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### fuzz.UrlsToHTTPRequests



#### 详细描述



#### 定义：

`func fuzz.UrlsToHTTPRequests(v1 ...any) return (r0: *mutate.FuzzHTTPRequestBatch, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mutate.FuzzHTTPRequestBatch` |   |
| r1 | `error` |   |


 
### fuzz.https



#### 详细描述



#### 定义：

`func fuzz.https(v1: bool) return (r0: func BuildFuzzHTTPRequestOption(v1: *mutate.buildFuzzHTTPRequestConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func BuildFuzzHTTPRequestOption(v1: *mutate.buildFuzzHTTPRequestConfig) ` |   |


 


