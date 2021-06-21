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



#### 定义：

`func (v1: *yaklib.yakHttpRequest) return(*http.Response, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | *yaklib.yakHttpRequest |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *http.Response |   |
| r1 | error |   |


### http.Get



#### 定义：

`func (v1: string, v2 ...func httpOption(v1: *yaklib.yakHttpRequest) ) return(*http.Response, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | []yaklib.httpOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *http.Response |   |
| r1 | error |   |


### http.GetAllBody



#### 定义：

`func (v1: *http.Response) return([]uint8) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | *http.Response |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |


### http.NewRequest



#### 定义：

`func (v1: string, v2: string, v3 ...func httpOption(v1: *yaklib.yakHttpRequest) ) return(*yaklib.yakHttpRequest, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | []yaklib.httpOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *yaklib.yakHttpRequest |   |
| r1 | error |   |


### http.Post



#### 定义：

`func (v1: string, v2 ...func httpOption(v1: *yaklib.yakHttpRequest) ) return(*http.Response, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | []yaklib.httpOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *http.Response |   |
| r1 | error |   |


### http.Raw



#### 定义：

`func (v1: interface {}) return(*http.Request, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *http.Request |   |
| r1 | error |   |


### http.Request



#### 定义：

`func (v1: string, v2: string, v3 ...func httpOption(v1: *yaklib.yakHttpRequest) ) return(*http.Response, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | []yaklib.httpOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *http.Response |   |
| r1 | error |   |


### http.body



#### 定义：

`func (v1: interface {}) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |


### http.cookie



#### 定义：

`func (v1: interface {}) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |


### http.dump



#### 定义：

`func (v1: interface {}) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### http.dumphead



#### 定义：

`func (v1: interface {}) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### http.header



#### 定义：

`func (v1: interface {}, v2: interface {}) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |


### http.proxy



#### 定义：

`func (v1 ...string) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |


### http.show



#### 定义：

`func (v1: interface {}) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |




 

### http.showhead



#### 定义：

`func (v1: interface {}) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |




 

### http.timeout



#### 定义：

`func (v1: float64) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |


### http.ua



#### 定义：

`func (v1: interface {}) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |


### http.uarand



#### 定义：

`func () return(string) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### http.useragent



#### 定义：

`func (v1: interface {}) return(func httpOption(v1: *yaklib.yakHttpRequest) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func httpOption(v1: *yaklib.yakHttpRequest)  |   |





