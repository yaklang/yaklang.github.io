# xhtml


|成员函数|函数描述/介绍|
|:------|:--------|
 | [xhtml.CompareHtml](#xhtmlcomparehtml) |  |
 | [xhtml.Find](#xhtmlfind) | 寻找一个关键字在 HTML 中的位置 |
 | [xhtml.GenerateXPath](#xhtmlgeneratexpath) | 生成 xpath |
 | [xhtml.MatchBetween](#xhtmlmatchbetween) |  |
 | [xhtml.RandomUpperAndLower](#xhtmlrandomupperandlower) | 随机大小写变换 |
 | [xhtml.Walker](#xhtmlwalker) | 遍历 HTML |




 



## 函数定义

### xhtml.CompareHtml



#### 详细描述



#### 定义：

`CompareHtml(any, any) ([]*xhtml.DiffInfo, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*xhtml.DiffInfo` |   |
| r1 | `error` |   |


 
### xhtml.Find

寻找一个关键字在 HTML 中的位置

#### 详细描述



#### 定义：

`Find(any, string) []*xhtml.MatchNodeInfo`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| html | `any` |   |
| keyword | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*xhtml.MatchNodeInfo` |   |


 
### xhtml.GenerateXPath

生成 xpath

#### 详细描述



#### 定义：

`GenerateXPath(node *html.Node) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### xhtml.MatchBetween



#### 详细描述



#### 定义：

`MatchBetween(srcBody any, start string, end string, max int) (int, string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `string` |   |


 
### xhtml.RandomUpperAndLower

随机大小写变换

#### 详细描述



#### 定义：

`RandomUpperAndLower(s string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### xhtml.Walker

遍历 HTML

#### 详细描述



#### 定义：

`Walker(h any, handler func(node *html.Node)) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| html | `any` |   |
| v2 | `func (v1: *html.Node) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


