# fuzz


|成员函数|函数描述/介绍|
|:------|:--------|
 | [fuzz.HTTPRequest](#fuzzhttprequest) | HTTP模糊测试核心函数，构建一个模糊测试 HTTP 请求 |
 | [fuzz.ProtobufBytes](#fuzzprotobufbytes) |  |
 | [fuzz.ProtobufHex](#fuzzprotobufhex) |  |
 | [fuzz.ProtobufJSON](#fuzzprotobufjson) |  |
 | [fuzz.ProtobufYAML](#fuzzprotobufyaml) |  |
 | [fuzz.Strings](#fuzzstrings) | 执行 Fuzz 模版，可以支持把一个模版字符串渲染多个字符串，参考 [web/http fuzz教程](/docs/buildinlibs/lib_fuzz) |
 | [fuzz.StringsFunc](#fuzzstringsfunc) |  |
 | [fuzz.StringsWithParam](#fuzzstringswithparam) | 新增带参数的 fuzz |
 | [fuzz.UrlToHTTPRequest](#fuzzurltohttprequest) | 使用 URL 构造一个 Fuzz 请求包 |
 | [fuzz.UrlsToHTTPRequests](#fuzzurlstohttprequests) | 把多个 URL 变成可以批量 Fuzz 的请求组(Batch) |
 | [fuzz.WithConcurrentLimit](#fuzzwithconcurrentlimit) |  |
 | [fuzz.WithDelay](#fuzzwithdelay) |  |
 | [fuzz.WithNamingContext](#fuzzwithnamingcontext) |  |
 | [fuzz.https](#fuzzhttps) | `http.HTTPRequest` 的 extraParams 中的额外选项之一 |




 



## 函数定义

### fuzz.HTTPRequest

HTTP模糊测试核心函数，构建一个模糊测试 HTTP 请求

#### 详细描述



#### 定义：

`func fuzz.HTTPRequest(originRequest: []byte|string|http.Request|*http.Request, extraParams ...fuzzHTTPRequestOpt) return (r0: *mutate.FuzzHTTPRequest, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originRequest | `[]byte|string|http.Request|*http.Request` |  可以构建一个新的 HTTP Fuzz 请求的原材料。支持以上多种类型 |
| extraParams | `...fuzzHTTPRequestOpt` |  额外参数， |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mutate.FuzzHTTPRequest` |   |
| r1 | `error` |   |


 
### fuzz.ProtobufBytes



#### 详细描述



#### 定义：

`func fuzz.ProtobufBytes(v1: any) return (r0: *yaklib.ProtobufRecords)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.ProtobufRecords` |   |


 
### fuzz.ProtobufHex



#### 详细描述



#### 定义：

`func fuzz.ProtobufHex(v1: any) return (r0: *yaklib.ProtobufRecords)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.ProtobufRecords` |   |


 
### fuzz.ProtobufJSON



#### 详细描述



#### 定义：

`func fuzz.ProtobufJSON(v1: any) return (r0: *yaklib.ProtobufRecords)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.ProtobufRecords` |   |


 
### fuzz.ProtobufYAML



#### 详细描述



#### 定义：

`func fuzz.ProtobufYAML(v1: any) return (r0: *yaklib.ProtobufRecords)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.ProtobufRecords` |   |


 
### fuzz.Strings

执行 Fuzz 模版，可以支持把一个模版字符串渲染多个字符串，参考 [web/http fuzz教程](/docs/buildinlibs/lib_fuzz)

#### 详细描述



#### 定义：

`func fuzz.Strings(fuzzTemplate: []byte|string|[]string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fuzzTemplate | `[]byte|string|[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### fuzz.StringsFunc



#### 详细描述



#### 定义：

`func fuzz.StringsFunc(v1: any, v2: func (v1: *mutate.MutateResult) , v3 ...any) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `func (v1: *mutate.MutateResult) ` |   |
| v3 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### fuzz.StringsWithParam

新增带参数的 fuzz

#### 详细描述



#### 定义：

`func fuzz.StringsWithParam(v1: any, v2: any) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### fuzz.UrlToHTTPRequest

使用 URL 构造一个 Fuzz 请求包

#### 详细描述



#### 定义：

`func fuzz.UrlToHTTPRequest(v1: string, v2: any) return (r0: *mutate.FuzzHTTPRequest, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mutate.FuzzHTTPRequest` |   |
| r1 | `error` |   |


 
### fuzz.UrlsToHTTPRequests

把多个 URL 变成可以批量 Fuzz 的请求组(Batch)

#### 详细描述



#### 定义：

`func fuzz.UrlsToHTTPRequests(urlTemplate []byte|string|[]string) return (r0: *mutate.FuzzHTTPRequestBatch, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlTemplate | `[]byte|string|[]string` |  支持 URL/域名/IP 输入，使用 `str.ParseStringToUrlsWith3W` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mutate.FuzzHTTPRequestBatch` |   |
| r1 | `error` |   |


 
### fuzz.WithConcurrentLimit



#### 详细描述



#### 定义：

`func fuzz.WithConcurrentLimit(v1: int) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.WithDelay



#### 详细描述



#### 定义：

`func fuzz.WithDelay(v1: float64) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.WithNamingContext



#### 详细描述



#### 定义：

`func fuzz.WithNamingContext(v1: string) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.https

`http.HTTPRequest` 的 extraParams 中的额外选项之一

#### 详细描述



#### 定义：

`func fuzz.https(isHttps: bool) return (r0: fuzzHTTPRequestOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `fuzzHTTPRequestOpt` |   |


 


