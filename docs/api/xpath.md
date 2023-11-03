# xpath

|成员函数|函数描述/介绍|
|:------|:--------|
| [xpath.CreateXPathNavigator](#createxpathnavigator) |CreateXPathNavigator creates a new xpath.NodeNavigator for the specified html.Node. |
| [xpath.ExistedAttr](#existedattr) |ExistsAttr returns whether attribute with specified name exists. |
| [xpath.Find](#find) |Find is like QueryAll but Will panics if the expression `expr` cannot be parsed.  See `QueryAll()` function. |
| [xpath.FindOne](#findone) |FindOne is like Query but will panics if the expression `expr` cannot be parsed. See `Query()` function. |
| [xpath.InnerText](#innertext) |InnerText returns the text between the start and end tags of the object. |
| [xpath.LoadHTMLDocument](#loadhtmldocument) ||
| [xpath.OutputHTML](#outputhtml) ||
| [xpath.OutputHTMLSelf](#outputhtmlself) ||
| [xpath.Query](#query) |Query runs the given XPath expression against the given html.Node and returns the first matching html.Node, or nil if no matches are found.  Returns a...|
| [xpath.QueryAll](#queryall) |QueryAll searches the html.Node that matches by the specified XPath expr. Return an error if the expression `expr` cannot be parsed. |
| [xpath.SelectAttr](#selectattr) |SelectAttr returns the attribute value with the specified name. |


## 函数定义
### CreateXPathNavigator

#### 详细描述
CreateXPathNavigator creates a new xpath.NodeNavigator for the specified html.Node.


#### 定义

`CreateXPathNavigator(top *html.Node) *NodeNavigator`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*NodeNavigator` |   |


### ExistedAttr

#### 详细描述
ExistsAttr returns whether attribute with specified name exists.


#### 定义

`ExistedAttr(n *html.Node, name string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `*html.Node` |   |
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Find

#### 详细描述
Find is like QueryAll but Will panics if the expression `expr` cannot be parsed.

See `QueryAll()` function.


#### 定义

`Find(top *html.Node, expr string) []*html.Node`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` |   |
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*html.Node` |   |


### FindOne

#### 详细描述
FindOne is like Query but will panics if the expression `expr` cannot be parsed.
See `Query()` function.


#### 定义

`FindOne(top *html.Node, expr string) *html.Node`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` |   |
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*html.Node` |   |


### InnerText

#### 详细描述
InnerText returns the text between the start and end tags of the object.


#### 定义

`InnerText(n *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `*html.Node` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### LoadHTMLDocument

#### 详细描述


#### 定义

`LoadHTMLDocument(htmlText any) (*html.Node, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| htmlText | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*html.Node` |   |
| r2 | `error` |   |


### OutputHTML

#### 详细描述


#### 定义

`OutputHTML(doc *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| doc | `*html.Node` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### OutputHTMLSelf

#### 详细描述


#### 定义

`OutputHTMLSelf(doc *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| doc | `*html.Node` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Query

#### 详细描述
Query runs the given XPath expression against the given html.Node and
returns the first matching html.Node, or nil if no matches are found.

Returns an error if the expression `expr` cannot be parsed.


#### 定义

`Query(top *html.Node, expr string) (*html.Node, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` |   |
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*html.Node` |   |
| r2 | `error` |   |


### QueryAll

#### 详细描述
QueryAll searches the html.Node that matches by the specified XPath expr.
Return an error if the expression `expr` cannot be parsed.


#### 定义

`QueryAll(top *html.Node, expr string) ([]*html.Node, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` |   |
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*html.Node` |   |
| r2 | `error` |   |


### SelectAttr

#### 详细描述
SelectAttr returns the attribute value with the specified name.


#### 定义

`SelectAttr(n *html.Node, name string) (val string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `*html.Node` |   |
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| val | `string` |   |


