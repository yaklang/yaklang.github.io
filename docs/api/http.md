# http


|成员函数|函数描述/介绍|
|:------|:--------|
 | [http.Do](#httpdo) |  |
 | [http.Get](#httpget) |  |
 | [http.GetAllBody](#httpgetallbody) |  |
 | [http.NewRequest](#httpnewrequest) |  |
 | [http.Post](#httppost) |  |
 | [http.Raw](#httpraw) |  |
 | [http.Request](#httprequest) |  |
 | [http.body](#httpbody) |  |
 | [http.cookie](#httpcookie) |  |
 | [http.dump](#httpdump) |  |
 | [http.dumphead](#httpdumphead) |  |
 | [http.header](#httpheader) |  |
 | [http.proxy](#httpproxy) |  |
 | [http.show](#httpshow) |  |
 | [http.showhead](#httpshowhead) |  |
 | [http.timeout](#httptimeout) |  |
 | [http.ua](#httpua) |  |
 | [http.uarand](#httpuarand) |  |
 | [http.useragent](#httpuseragent) |  |




 



## 函数定义

### http.Do



#### 详细描述



#### 定义：

`func http.Do(v1: *yaklib.yakHttpRequest) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yaklib.yakHttpRequest` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.Get



#### 详细描述



#### 定义：

`func http.Get(v1: string, v2 ...[]yaklib.httpOption) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `[]yaklib.httpOption /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.GetAllBody



#### 详细描述



#### 定义：

`func http.GetAllBody(v1: *http.Response) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*http.Response` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### http.NewRequest



#### 详细描述



#### 定义：

`func http.NewRequest(v1: string, v2: string, v3 ...[]yaklib.httpOption) return (r0: *yaklib.yakHttpRequest, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `[]yaklib.httpOption /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakHttpRequest` |   |
| r1 | `error` |   |


 
### http.Post



#### 详细描述



#### 定义：

`func http.Post(v1: string, v2 ...[]yaklib.httpOption) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `[]yaklib.httpOption /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.Raw



#### 详细描述



#### 定义：

`func http.Raw(v1: interface {}) return (r0: *http.Request, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Request` |   |
| r1 | `error` |   |


 
### http.Request



#### 详细描述



#### 定义：

`func http.Request(v1: string, v2: string, v3 ...[]yaklib.httpOption) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `[]yaklib.httpOption /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.body



#### 详细描述



#### 定义：

`func http.body(v1: interface {}) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.cookie



#### 详细描述



#### 定义：

`func http.cookie(v1: interface {}) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.dump



#### 详细描述



#### 定义：

`func http.dump(v1: interface {}) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### http.dumphead



#### 详细描述



#### 定义：

`func http.dumphead(v1: interface {}) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### http.header



#### 详细描述



#### 定义：

`func http.header(v1: interface {}, v2: interface {}) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |
| v2 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.proxy



#### 详细描述



#### 定义：

`func http.proxy(v1 ...[]string) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.show



#### 详细描述



#### 定义：

``func http.show(v1: interface {})``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |




 

 
### http.showhead



#### 详细描述



#### 定义：

``func http.showhead(v1: interface {})``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |




 

 
### http.timeout



#### 详细描述



#### 定义：

`func http.timeout(v1: float64) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.ua



#### 详细描述



#### 定义：

`func http.ua(v1: interface {}) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.uarand



#### 详细描述



#### 定义：

`func http.uarand() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### http.useragent



#### 详细描述



#### 定义：

`func http.useragent(v1: interface {}) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 


