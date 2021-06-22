# re


|成员函数|函数描述/介绍|
|:------|:--------|
 | [re.Compile](#recompile) |  |
 | [re.CompilePOSIX](#recompileposix) |  |
 | [re.ExtractEmail](#reextractemail) |  |
 | [re.ExtractHostPort](#reextracthostport) |  |
 | [re.ExtractIP](#reextractip) |  |
 | [re.ExtractIPv4](#reextractipv4) |  |
 | [re.ExtractIPv6](#reextractipv6) |  |
 | [re.ExtractMac](#reextractmac) |  |
 | [re.ExtractPath](#reextractpath) |  |
 | [re.ExtractTTY](#reextracttty) |  |
 | [re.ExtractURL](#reextracturl) |  |
 | [re.Grok](#regrok) |  |
 | [re.Match](#rematch) |  |
 | [re.MustCompile](#remustcompile) |  |
 | [re.MustCompilePOSIX](#remustcompileposix) |  |
 | [re.QuoteMeta](#requotemeta) |  |




 



## 函数定义

### re.Compile



#### 详细描述



#### 定义：

`func re.Compile(v1: string) return (r0: *regexp.Regexp, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |
| r1 | `error` |   |


 
### re.CompilePOSIX



#### 详细描述



#### 定义：

`func re.CompilePOSIX(v1: string) return (r0: *regexp.Regexp, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |
| r1 | `error` |   |


 
### re.ExtractEmail



#### 详细描述



#### 定义：

`func re.ExtractEmail(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractHostPort



#### 详细描述



#### 定义：

`func re.ExtractHostPort(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractIP



#### 详细描述



#### 定义：

`func re.ExtractIP(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractIPv4



#### 详细描述



#### 定义：

`func re.ExtractIPv4(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractIPv6



#### 详细描述



#### 定义：

`func re.ExtractIPv6(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractMac



#### 详细描述



#### 定义：

`func re.ExtractMac(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractPath



#### 详细描述



#### 定义：

`func re.ExtractPath(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractTTY



#### 详细描述



#### 定义：

`func re.ExtractTTY(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.ExtractURL



#### 详细描述



#### 定义：

`func re.ExtractURL(v1: interface {}) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re.Grok



#### 详细描述



#### 定义：

`func re.Grok(v1: string, v2: string) return (r0: yaklib.GrokResult)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `yaklib.GrokResult` |   |


 
### re.Match



#### 详细描述



#### 定义：

`func re.Match(v1: string, v2: interface {}) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### re.MustCompile



#### 详细描述



#### 定义：

`func re.MustCompile(v1: string) return (r0: *regexp.Regexp)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |


 
### re.MustCompilePOSIX



#### 详细描述



#### 定义：

`func re.MustCompilePOSIX(v1: string) return (r0: *regexp.Regexp)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |


 
### re.QuoteMeta



#### 详细描述



#### 定义：

`func re.QuoteMeta(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


