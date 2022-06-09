# xhtml


|成员函数|函数描述/介绍|
|:------|:--------|
 | [xhtml.CompareHtml](#xhtmlcomparehtml) | 比较两个 HTML 不同的点 |
 | [xhtml.Find](#xhtmlfind) | 寻找一个关键字在 HTML 中的位置 |
 | [xhtml.GenerateXPath](#xhtmlgeneratexpath) | 生成 xpath |
 | [xhtml.MatchBetween](#xhtmlmatchbetween) | 提取两个字符串之间的数据 |
 | [xhtml.NewXssFuzz](#xhtmlnewxssfuzz) |  |
 | [xhtml.RandomUpperAndLower](#xhtmlrandomupperandlower) | 随机大小写变换 |
 | [xhtml.Walker](#xhtmlwalker) | 遍历 HTML |




 



## 函数定义

### xhtml.CompareHtml

比较两个 HTML 不同的点

#### 详细描述



#### 定义：

`func xhtml.CompareHtml(htmlStr1: any, v2: any) return (htmlStr2: []xhtml.DiffInfo, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| htmlStr1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| htmlStr2 | `[]xhtml.DiffInfo` |   |
| r1 | `error` |   |


 
### xhtml.Find

寻找一个关键字在 HTML 中的位置

#### 详细描述



#### 定义：

`func xhtml.Find(html: any, keyword: string) return (r0: []*xhtml.MatchNodeInfo)`


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

`func xhtml.GenerateXPath(v1: *html.Node) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### xhtml.MatchBetween

提取两个字符串之间的数据

#### 详细描述



#### 定义：

`func xhtml.MatchBetween(raw: string, start: string, end: string, v4: int) return (r0: int, r1: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| start | `string` |   |
| end | `string` |   |
| v4 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `string` |   |


 
### xhtml.NewXssFuzz



#### 详细描述



#### 定义：

`func xhtml.NewXssFuzz(v1: any) return (r0: *xhtml.XssFuzz)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*xhtml.XssFuzz` |   |


 
### xhtml.RandomUpperAndLower

随机大小写变换

#### 详细描述



#### 定义：

`func xhtml.RandomUpperAndLower(v1: string) return (r0: string)`


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

`func xhtml.Walker(html: any, v2: func (v1: *html.Node) ) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| html | `any` |   |
| v2 | `func (v1: *html.Node) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


