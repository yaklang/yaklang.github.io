# fuzz


|成员函数|函数描述/介绍|
|:------|:--------|
 | [fuzz.HTTPRequest](#fuzzhttprequest) |  |
 | [fuzz.Strings](#fuzzstrings) |  |
 | [fuzz.UrlsToHTTPRequests](#fuzzurlstohttprequests) |  |
 | [fuzz.https](#fuzzhttps) |  |




 



## 函数定义

### fuzz.HTTPRequest



#### 定义：

`func (v1: interface {}, v2 ...func BuildFuzzHTTPRequestOption(v1: *mutate.buildFuzzHTTPRequestConfig) ) return(*mutate.FuzzHTTPRequest, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | []mutate.BuildFuzzHTTPRequestOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *mutate.FuzzHTTPRequest |   |
| r1 | error |   |


### fuzz.Strings



#### 定义：

`func (v1: interface {}) return([]string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### fuzz.UrlsToHTTPRequests



#### 定义：

`func (v1 ...interface {}) return(*mutate.FuzzHTTPRequestBatch, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *mutate.FuzzHTTPRequestBatch |   |
| r1 | error |   |


### fuzz.https



#### 定义：

`func (v1: bool) return(func BuildFuzzHTTPRequestOption(v1: *mutate.buildFuzzHTTPRequestConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | bool |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func BuildFuzzHTTPRequestOption(v1: *mutate.buildFuzzHTTPRequestConfig)  |   |





