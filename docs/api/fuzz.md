# fuzz


|成员函数|函数描述/介绍|
|:------|:--------|
 | [fuzz.FuzzCalcExpr](#fuzzfuzzcalcexpr) |  |
 | [fuzz.HTTPRequest](#fuzzhttprequest) | HTTP模糊测试核心函数，构建一个模糊测试 HTTP 请求 |
 | [fuzz.MustHTTPRequest](#fuzzmusthttprequest) |  |
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
 | [fuzz.WithTimeOut](#fuzzwithtimeout) |  |
 | [fuzz.https](#fuzzhttps) | `http.HTTPRequest` 的 extraParams 中的额外选项之一 |




 



## 函数定义

### fuzz.FuzzCalcExpr



#### 详细描述



#### 定义：

`func fuzz.FuzzCalcExpr() return (r0: map[string]any)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]any` |   |


 
### fuzz.HTTPRequest

HTTP模糊测试核心函数，构建一个模糊测试 HTTP 请求

#### 详细描述



#### 定义：

`HTTPRequest(any, ...mutate.BuildFuzzHTTPRequestOption) (*mutate.FuzzHTTPRequest, error)`


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


 
### fuzz.MustHTTPRequest



#### 详细描述



#### 定义：

`MustHTTPRequest(any, ...mutate.BuildFuzzHTTPRequestOption) *mutate.FuzzHTTPRequest`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...mutate.BuildFuzzHTTPRequestOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mutate.FuzzHTTPRequest` |   |


 
### fuzz.ProtobufBytes



#### 详细描述



#### 定义：

`ProtobufBytes(any) *yaklib.ProtobufRecords`


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

`ProtobufHex(any) *yaklib.ProtobufRecords`


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

`ProtobufJSON(any) *yaklib.ProtobufRecords`


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

`ProtobufYAML(any) *yaklib.ProtobufRecords`


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

`Strings(i any) []string  doc:fuzz`


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

`StringsFunc(i any, cb func(i *mutate.MutateResult), params ...any) error`


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

`StringsWithParam(i any, i2 any) []string`


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

`UrlToHTTPRequest(method string, i any) (*mutate.FuzzHTTPRequest, error)`


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

`UrlsToHTTPRequests(...any) (*mutate.FuzzHTTPRequestBatch, error)`


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

`WithConcurrentLimit(int) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.WithDelay



#### 详细描述



#### 定义：

`WithDelay(float64) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.WithNamingContext



#### 详细描述



#### 定义：

`WithNamingContext(string) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.WithTimeOut



#### 详细描述



#### 定义：

`WithTimeOut(float64) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### fuzz.https

`http.HTTPRequest` 的 extraParams 中的额外选项之一

#### 详细描述



#### 定义：

`https(bool) mutate.BuildFuzzHTTPRequestOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `fuzzHTTPRequestOpt` |   |


 


