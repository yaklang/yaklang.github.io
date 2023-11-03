# xhtml

|成员函数|函数描述/介绍|
|:------|:--------|
| [xhtml.CompareHtml](#comparehtml) ||
| [xhtml.Find](#find) ||
| [xhtml.GenerateXPath](#generatexpath) ||
| [xhtml.MatchBetween](#matchbetween) ||
| [xhtml.RandomUpperAndLower](#randomupperandlower) ||
| [xhtml.Walker](#walker) ||


## 函数定义
### CompareHtml

#### 详细描述


#### 定义

`CompareHtml(htmlRaw1 any, htmlRaw2 any) ([]*DiffInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| htmlRaw1 | `any` |   |
| htmlRaw2 | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*DiffInfo` |   |
| r2 | `error` |   |


### Find

#### 详细描述


#### 定义

`Find(htmlRaw any, matchStr string) []*MatchNodeInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| htmlRaw | `any` |   |
| matchStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*MatchNodeInfo` |   |


### GenerateXPath

#### 详细描述


#### 定义

`GenerateXPath(node *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| node | `*html.Node` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### MatchBetween

#### 详细描述


#### 定义

`MatchBetween(srcBody any, start string, end string, max int) (int, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcBody | `any` |   |
| start | `string` |   |
| end | `string` |   |
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |
| r2 | `string` |   |


### RandomUpperAndLower

#### 详细描述


#### 定义

`RandomUpperAndLower(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Walker

#### 详细描述


#### 定义

`Walker(h any, handler func(node *html.Node)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `any` |   |
| handler | `func(node *html.Node)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


