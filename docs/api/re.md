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



#### 定义：

`func (v1: string) return(*regexp.Regexp, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *regexp.Regexp |   |
| r1 | error |   |


### re.CompilePOSIX



#### 定义：

`func (v1: string) return(*regexp.Regexp, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *regexp.Regexp |   |
| r1 | error |   |


### re.ExtractEmail



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


### re.ExtractHostPort



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


### re.ExtractIP



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


### re.ExtractIPv4



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


### re.ExtractIPv6



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


### re.ExtractMac



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


### re.ExtractPath



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


### re.ExtractTTY



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


### re.ExtractURL



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


### re.Grok



#### 定义：

`func (v1: string, v2: string) return(yaklib.GrokResult) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | yaklib.GrokResult |   |


### re.Match



#### 定义：

`func (v1: string, v2: interface {}) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### re.MustCompile



#### 定义：

`func (v1: string) return(*regexp.Regexp) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *regexp.Regexp |   |


### re.MustCompilePOSIX



#### 定义：

`func (v1: string) return(*regexp.Regexp) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *regexp.Regexp |   |


### re.QuoteMeta



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |





