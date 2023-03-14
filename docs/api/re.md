# re


|成员函数|函数描述/介绍|
|:------|:--------|
 | [re.Compile](#recompile) | 编译正则 |
 | [re.CompilePOSIX](#recompileposix) |  |
 | [re.ExtractEmail](#reextractemail) | 从字符串中提取 email |
 | [re.ExtractHostPort](#reextracthostport) | 从结果中提取 `host:port` |
 | [re.ExtractIP](#reextractip) | 从内容中提取 IP 地址 |
 | [re.ExtractIPv4](#reextractipv4) | 从内容中提取 IPv4 地址 |
 | [re.ExtractIPv6](#reextractipv6) | 从内容中提取 IPv6 地址 |
 | [re.ExtractMac](#reextractmac) | 从字符串中提取可用的 Mac 地址 |
 | [re.ExtractPath](#reextractpath) | 从内容中提取路径 |
 | [re.ExtractTTY](#reextracttty) | 从内容中提取 TTY 内容 |
 | [re.ExtractURL](#reextracturl) | 从内容中提取 URL |
 | [re.Find](#refind) | 匹配并提取数据中符合正则的数据 |
 | [re.FindAll](#refindall) | 提取所有正则匹配到的数据 |
 | [re.FindAllIndex](#refindallindex) | 提取匹配到的数据的索引（起止位置） |
 | [re.FindIndex](#refindindex) | 提取匹配到的数据索引位置（起止位置） |
 | [re.FindSubmatch](#refindsubmatch) | 正则匹配提取带分组的数据（只匹配一个） |
 | [re.FindSubmatchAll](#refindsubmatchall) | 正则匹配提取带分组的数据（匹配全部） |
 | [re.FindSubmatchAllIndex](#refindsubmatchallindex) | 匹配并提取分组带索引（起止位置） |
 | [re.FindSubmatchIndex](#refindsubmatchindex) | 只匹配并提取第一组的分组带索引（起止位置） |
 | [re.Grok](#regrok) | 从内容中按照 Grok 规则提取数据 |
 | [re.Match](#rematch) |  |
 | [re.MustCompile](#remustcompile) | 编译正则，如果编译失败则 Panic |
 | [re.MustCompilePOSIX](#remustcompileposix) | 编译正则 POSIX 模式，编译失败则 Panic |
 | [re.QuoteMeta](#requotemeta) | 把正则保留字符进行转义 |
 | [re.ReplaceAll](#rereplaceall) | 整体批量替换 |
 | [re.ReplaceAllWithFunc](#rereplaceallwithfunc) | 正则批量替换数据（使用函数处理匹配结果） |




 



## 函数定义

### re.Compile

编译正则

#### 详细描述



#### 定义：

`func re.Compile(regexpStr: string) return (r0: *regexp.Regexp, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| regexpStr | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |
| r1 | `error` |   |


 
### re.CompilePOSIX



#### 详细描述

编译正则（同 Golang `regexp.CompilePOSIX`）

#### 定义：

`func re.CompilePOSIX(regexpStr: string) return (r0: *regexp.Regexp, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| regexpStr | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |
| r1 | `error` |   |


 
### re.ExtractEmail

从字符串中提取 email

#### 详细描述



#### 定义：

`func re.ExtractEmail(content: []byte|string|io.Reader|any) return (emails: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| emails | `[]string` |   |


 
### re.ExtractHostPort

从结果中提取 `host:port`

#### 详细描述



#### 定义：

`func re.ExtractHostPort(content: []byte|string|io.Reader|any) return (hostPorts: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| hostPorts | `[]string` |   |


 
### re.ExtractIP

从内容中提取 IP 地址

#### 详细描述



#### 定义：

`func re.ExtractIP(content: []byte|string|io.Reader|any) return (ipAddrs: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ipAddrs | `[]string` |   |


 
### re.ExtractIPv4

从内容中提取 IPv4 地址

#### 详细描述



#### 定义：

`func re.ExtractIPv4(content: []byte|string|io.Reader|any) return (ipAddrs: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ipAddrs | `[]string` |   |


 
### re.ExtractIPv6

从内容中提取 IPv6 地址

#### 详细描述



#### 定义：

`func re.ExtractIPv6(content: []byte|string|io.Reader|any) return (ipAddrs: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ipAddrs | `[]string` |   |


 
### re.ExtractMac

从字符串中提取可用的 Mac 地址

#### 详细描述



#### 定义：

`func re.ExtractMac(content: []byte|string|io.Reader|any) return (macAddrs: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| macAddrs | `[]string` |   |


 
### re.ExtractPath

从内容中提取路径

#### 详细描述



#### 定义：

`func re.ExtractPath(content: []byte|string|io.Reader|any) return (paths: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| paths | `[]string` |   |


 
### re.ExtractTTY

从内容中提取 TTY 内容

#### 详细描述



#### 定义：

`func re.ExtractTTY(content: []byte|string|io.Reader|any) return (ttys: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ttys | `[]string` |   |


 
### re.ExtractURL

从内容中提取 URL

#### 详细描述



#### 定义：

`func re.ExtractURL(content: []byte|string|io.Reader|any) return (urls: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `[]byte|string|io.Reader|any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| urls | `[]string` |   |


 
### re.Find

匹配并提取数据中符合正则的数据

#### 详细描述



#### 定义：

`func re.Find(data: any, regexp: string) return (result: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `string` |   |


 
### re.FindAll

提取所有正则匹配到的数据

#### 详细描述



#### 定义：

`func re.FindAll(data: any, regexp: string) return (results: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `[]string` |   |


 
### re.FindAllIndex

提取匹配到的数据的索引（起止位置）

#### 详细描述



#### 定义：

`func re.FindAllIndex(data: any, regexp: string) return (indexes: [][start: int, end: int])`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| indexes | `[][start: int, end: int]` |   |


 
### re.FindIndex

提取匹配到的数据索引位置（起止位置）

#### 详细描述



#### 定义：

`func re.FindIndex(data: any, regexp: string) return (index: [start:int, end:int])`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| index | `[start:int, end:int]` |   |


 
### re.FindSubmatch

正则匹配提取带分组的数据（只匹配一个）

#### 详细描述



#### 定义：

`func re.FindSubmatch(data: any, regexp: string) return (results: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `[]string` |   |


 
### re.FindSubmatchAll

正则匹配提取带分组的数据（匹配全部）

#### 详细描述



#### 定义：

`func re.FindSubmatchAll(data: any, regexp: string) return (r0: [][]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[][]string` |   |


 
### re.FindSubmatchAllIndex

匹配并提取分组带索引（起止位置）

#### 详细描述



#### 定义：

`func re.FindSubmatchAllIndex(data: any, regexp: string) return (indexes: [][matchStart, matchEnd, group1Start, group1End, ...])`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| indexes | `[][matchStart, matchEnd, group1Start, group1End, ...]` |   |


 
### re.FindSubmatchIndex

只匹配并提取第一组的分组带索引（起止位置）

#### 详细描述



#### 定义：

`func re.FindSubmatchIndex(data: any, regexp: string) return (r0: []int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]int` |   |


 
### re.Grok

从内容中按照 Grok 规则提取数据

#### 详细描述



#### 定义：

`func re.Grok(content: string, grokRule: string) return (data: yaklib.GrokResult)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `string` |   |
| grokRule | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| data | `yaklib.GrokResult` |   |


 
### re.Match



#### 详细描述



#### 定义：

`func re.Match(regexpPattern: string, content: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| regexpPattern | `string` |  想要匹配的规则 |
| content | `any` |  想要通过正则匹配的数据 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### re.MustCompile

编译正则，如果编译失败则 Panic

#### 详细描述



#### 定义：

`func re.MustCompile(regexpStr: string) return (r0: *regexp.Regexp)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| regexpStr | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |


 
### re.MustCompilePOSIX

编译正则 POSIX 模式，编译失败则 Panic

#### 详细描述



#### 定义：

`func re.MustCompilePOSIX(regexpStr: string) return (r0: *regexp.Regexp)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| regexpStr | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |


 
### re.QuoteMeta

把正则保留字符进行转义

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


 
### re.ReplaceAll

整体批量替换

#### 详细描述



#### 定义：

`func re.ReplaceAll(data: any, regexp: string, newStr: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |
| newStr | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### re.ReplaceAllWithFunc

正则批量替换数据（使用函数处理匹配结果）

#### 详细描述



#### 定义：

`func re.ReplaceAllWithFunc(data: any, regexp: string, replaceFunc: func (v1: string) return(string) ) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| regexp | `string` |   |
| replaceFunc | `func (v1: string) return(string) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


