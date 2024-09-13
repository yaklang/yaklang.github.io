# xpath

|函数名|函数描述/介绍|
|:------|:--------|
| [xpath.CreateXPathNavigator](#createxpathnavigator) |CreateXPathNavigator 根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点  |
| [xpath.ExistedAttr](#existedattr) |ExistsAttr 判断传入节点是否存在指定名称的属性并返回布尔值  |
| [xpath.Find](#find) |Find 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组  如果表达式解析出错会 panic  |
| [xpath.FindOne](#findone) |FindOne 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点  如果表达式解析出错会 panic  |
| [xpath.InnerText](#innertext) |InnerText 返回指定节点及其子节点的字符串  |
| [xpath.LoadHTMLDocument](#loadhtmldocument) |LoadHTMLDocument 解析传入的 HTML 文本，返回根节点结构体引用与错误  |
| [xpath.OutputHTML](#outputhtml) |OutputHTML 将传入的节点结构体引用转换为 HTML 文本  |
| [xpath.OutputHTMLSelf](#outputhtmlself) |OutputHTMLSelf 将传入的节点结构体引用转换为 HTML 文本，包含自身节点  |
| [xpath.Query](#query) |Query 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误  |
| [xpath.QueryAll](#queryall) |QueryAll 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误  |
| [xpath.SelectAttr](#selectattr) |SelectAttr 返回传入节点指定名称的属性值  |


## 函数定义
### CreateXPathNavigator

#### 详细描述
CreateXPathNavigator 根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
nav = xpath.CreateXPathNavigator(doc)
nav.MoveToChild()
println(nav.String())
```


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
ExistsAttr 判断传入节点是否存在指定名称的属性并返回布尔值

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
node = xpath.FindOne(doc, "//div[@class='content']")
existed = xpath.ExistsAttr(node, "class") // true
```


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
Find 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组

如果表达式解析出错会 panic

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
nodes = xpath.Find(doc, "//div[@class='content']/text()")
```


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
FindOne 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点

如果表达式解析出错会 panic

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
node = xpath.FindOne(doc, "//div[@class='content']/text()")
```


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
InnerText 返回指定节点及其子节点的字符串

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
node = xpath.FindOne(doc, "//div[@class='content']")
text = xpath.InnerText(node)
```


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
LoadHTMLDocument 解析传入的 HTML 文本，返回根节点结构体引用与错误

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
```


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
OutputHTML 将传入的节点结构体引用转换为 HTML 文本

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
htmlText = xpath.OutputHTML(doc)
```


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
OutputHTMLSelf 将传入的节点结构体引用转换为 HTML 文本，包含自身节点

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
htmlText = xpath.OutputHTMLSelf(doc)
```


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
Query 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
node, err = xpath.Query(doc, "//div[@class='content']/text()")
```


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
QueryAll 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
nodes, err = xpath.QueryAll(doc, "//div[@class='content']/text()")
```


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
SelectAttr 返回传入节点指定名称的属性值

Example:
```
doc, err = xpath.LoadHTMLDocument(htmlText)
node = xpath.FindOne(doc, "//div[@class='content']")
attr = xpath.SelectAttr(node, "class")
```


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


