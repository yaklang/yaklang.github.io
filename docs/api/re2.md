# re2


|成员函数|函数描述/介绍|
|:------|:--------|
 | [re2.Compile](#re2compile) |  |
 | [re2.CompilePOSIX](#re2compileposix) |  |
 | [re2.ExtractEmail](#re2extractemail) |  |
 | [re2.ExtractHostPort](#re2extracthostport) |  |
 | [re2.ExtractIP](#re2extractip) |  |
 | [re2.ExtractIPv4](#re2extractipv4) |  |
 | [re2.ExtractIPv6](#re2extractipv6) |  |
 | [re2.ExtractMac](#re2extractmac) |  |
 | [re2.ExtractPath](#re2extractpath) |  |
 | [re2.ExtractTTY](#re2extracttty) |  |
 | [re2.ExtractURL](#re2extracturl) |  |
 | [re2.Find](#re2find) |  |
 | [re2.FindAll](#re2findall) |  |
 | [re2.FindAllIndex](#re2findallindex) |  |
 | [re2.FindGroup](#re2findgroup) |  |
 | [re2.FindGroupAll](#re2findgroupall) |  |
 | [re2.FindIndex](#re2findindex) |  |
 | [re2.FindSubmatch](#re2findsubmatch) |  |
 | [re2.FindSubmatchAll](#re2findsubmatchall) |  |
 | [re2.FindSubmatchAllIndex](#re2findsubmatchallindex) |  |
 | [re2.FindSubmatchIndex](#re2findsubmatchindex) |  |
 | [re2.Grok](#re2grok) |  |
 | [re2.Match](#re2match) |  |
 | [re2.MustCompile](#re2mustcompile) |  |
 | [re2.MustCompilePOSIX](#re2mustcompileposix) |  |
 | [re2.QuoteMeta](#re2quotemeta) |  |
 | [re2.ReplaceAll](#re2replaceall) |  |
 | [re2.ReplaceAllWithFunc](#re2replaceallwithfunc) |  |




 



## 函数定义

### re2.Compile



#### 详细描述



#### 定义：

`Compile(string) (*regexp.Regexp, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |
| r1 | `error` |   |


 
### re2.CompilePOSIX



#### 详细描述



#### 定义：

`CompilePOSIX(string) (*regexp.Regexp, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |
| r1 | `error` |   |


 
### re2.ExtractEmail



#### 详细描述



#### 定义：

`ExtractEmail(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractHostPort



#### 详细描述



#### 定义：

`ExtractHostPort(i any) []string  doc:HOSTPORT`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractIP



#### 详细描述



#### 定义：

`ExtractIP(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractIPv4



#### 详细描述



#### 定义：

`ExtractIPv4(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractIPv6



#### 详细描述



#### 定义：

`ExtractIPv6(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractMac



#### 详细描述



#### 定义：

`ExtractMac(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractPath



#### 详细描述



#### 定义：

`ExtractPath(i any) []string  doc:PATHPARAM`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractTTY



#### 详细描述



#### 定义：

`ExtractTTY(i any) []string  doc:TTY`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.ExtractURL



#### 详细描述



#### 定义：

`ExtractURL(i any) []string  doc:URL`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.Find



#### 详细描述



#### 定义：

`Find(origin any, re string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### re2.FindAll



#### 详细描述



#### 定义：

`FindAll(origin any, re string) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.FindAllIndex



#### 详细描述



#### 定义：

`FindAllIndex(origin any, re string) [][]int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[][]int` |   |


 
### re2.FindGroup



#### 详细描述



#### 定义：

`FindGroup(i any, raw string) map[string]string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]string` |   |


 
### re2.FindGroupAll



#### 详细描述



#### 定义：

`FindGroupAll(i any, raw string) []map[string]string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]map[string]string` |   |


 
### re2.FindIndex



#### 详细描述



#### 定义：

`FindIndex(origin any, re string) []int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]int` |   |


 
### re2.FindSubmatch



#### 详细描述



#### 定义：

`FindSubmatch(origin any, re string) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### re2.FindSubmatchAll



#### 详细描述



#### 定义：

`FindSubmatchAll(origin any, re string) [][]string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[][]string` |   |


 
### re2.FindSubmatchAllIndex



#### 详细描述



#### 定义：

`FindSubmatchAllIndex(origin any, re string) [][]int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[][]int` |   |


 
### re2.FindSubmatchIndex



#### 详细描述



#### 定义：

`FindSubmatchIndex(origin any, re string) []int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]int` |   |


 
### re2.Grok



#### 详细描述



#### 定义：

`Grok(string, string) yaklib.GrokResult`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `yaklib.GrokResult` |   |


 
### re2.Match



#### 详细描述



#### 定义：

`Match(string, any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### re2.MustCompile



#### 详细描述



#### 定义：

`MustCompile(string) *regexp.Regexp`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |


 
### re2.MustCompilePOSIX



#### 详细描述



#### 定义：

`MustCompilePOSIX(string) *regexp.Regexp`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*regexp.Regexp` |   |


 
### re2.QuoteMeta



#### 详细描述



#### 定义：

`QuoteMeta(s string) string  doc:QuoteMeta returns a string that escapes all regular expression metacharactersinside the argument text; the returned string is a regular expression matchingthe literal text.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### re2.ReplaceAll



#### 详细描述



#### 定义：

`ReplaceAll(origin any, re string, newStr any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### re2.ReplaceAllWithFunc



#### 详细描述



#### 定义：

`ReplaceAllWithFunc(origin any, re string, newStr func(string) string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |
| v3 | `func (v1: string) return(string) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


