# xpath

|函数名|函数描述/介绍|
|:------|:--------|
| [xpath.CreateXPathNavigator](#createxpathnavigator) |CreateXPathNavigator 根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点 参数: - top: 作为导航起点的节点 返回值: - 可用于遍历节点树的 XPath 导航器|
| [xpath.ExistedAttr](#existedattr) |ExistedAttr 判断传入节点是否存在指定名称的属性并返回布尔值 参数: - n: 目标节点 - name: 属性名 返回值: - 节点是否存在该属性|
| [xpath.Find](#find) |Find 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组 如果表达式解析出错会 panic 参数: - top: 查询的起始节点 - expr: XPath 表达式 返回值: - 所有匹配节点组成的数组|
| [xpath.FindOne](#findone) |FindOne 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点 如果表达式解析出错会 panic 参数: - top: 查询的起始节点 - expr: XPath 表达式 返回值: - 第一个匹配的节点，未匹配时为 nil|
| [xpath.InnerText](#innertext) |InnerText 返回指定节点及其子节点的字符串 参数: - n: 要提取文本的节点 返回值: - 节点及其子节点拼接后的纯文本|
| [xpath.LoadHTMLDocument](#loadhtmldocument) |LoadHTMLDocument 解析传入的 HTML 文本，返回根节点结构体引用与错误 参数: - htmlText: 待解析的 HTML 文本(字符串或字节切片) 返回值: - 解析得到的根节点 - 解析失败时返回的错误|
| [xpath.OutputHTML](#outputhtml) |OutputHTML 将传入的节点结构体引用转换为 HTML 文本(不含节点自身标签，仅子节点) 参数: - doc: 要渲染的节点 返回值: - 渲染出的 HTML 文本(节点内部内容)|
| [xpath.OutputHTMLSelf](#outputhtmlself) |OutputHTMLSelf 将传入的节点结构体引用转换为 HTML 文本，包含自身节点 参数: - doc: 要渲染的节点 返回值: - 渲染出的 HTML 文本(包含节点自身的标签)|
| [xpath.Query](#query) |Query 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误 参数: - top: 查询的起始节点 - expr: XPath 表达式 返回值: - 第一个匹配的节点，未匹配时为 nil - 表达式解析失败时返回的错误|
| [xpath.QueryAll](#queryall) |QueryAll 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误 参数: - top: 查询的起始节点 - expr: XPath 表达式 返回值: - 所有匹配节点组成的数组 - 表达式解析失败时返回的错误|
| [xpath.SelectAttr](#selectattr) |SelectAttr 返回传入节点指定名称的属性值 参数: - n: 目标节点 - name: 属性名 返回值: - 属性值，不存在时返回空字符串|


## 函数定义
### CreateXPathNavigator

#### 详细描述
CreateXPathNavigator 根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点

参数:

  - top: 作为导航起点的节点



返回值:

  - 可用于遍历节点树的 XPath 导航器




Example:

``````````````yak
// VARS: 基于文档创建导航器
doc = xpath.LoadHTMLDocument(`<div>x</div>`)~
nav = xpath.CreateXPathNavigator(doc)
// assert: 成功创建导航器
assert nav != nil, "navigator should be created"
``````````````


#### 定义

`CreateXPathNavigator(top *html.Node) *NodeNavigator`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` | 作为导航起点的节点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*NodeNavigator` | 可用于遍历节点树的 XPath 导航器 |


### ExistedAttr

#### 详细描述
ExistedAttr 判断传入节点是否存在指定名称的属性并返回布尔值

参数:

  - n: 目标节点

  - name: 属性名



返回值:

  - 节点是否存在该属性




Example:

``````````````yak
// VARS: 判断属性是否存在
doc = xpath.LoadHTMLDocument(`<div class="content">x</div>`)~
node = xpath.FindOne(doc, "//div")
// STDOUT: class 属性存在
println(xpath.ExistedAttr(node, "class"))   // OUT: true
// assert: 不存在的属性返回 false
assert xpath.ExistedAttr(node, "id") == false, "missing attribute should report false"
``````````````


#### 定义

`ExistedAttr(n *html.Node, name string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `*html.Node` | 目标节点 |
| name | `string` | 属性名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 节点是否存在该属性 |


### Find

#### 详细描述
Find 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组

如果表达式解析出错会 panic

参数:

  - top: 查询的起始节点

  - expr: XPath 表达式



返回值:

  - 所有匹配节点组成的数组




Example:

``````````````yak
// VARS: 查找所有匹配的 div
doc = xpath.LoadHTMLDocument(`<div class="c">a</div><div class="c">b</div>`)~
nodes = xpath.Find(doc, "//div[@class='c']")
// STDOUT: 打印命中数量
println(len(nodes))   // OUT: 2
// assert: 锁定结论
assert len(nodes) == 2, "should find two div nodes"
``````````````


#### 定义

`Find(top *html.Node, expr string) []*html.Node`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*html.Node` | 所有匹配节点组成的数组 |


### FindOne

#### 详细描述
FindOne 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点

如果表达式解析出错会 panic

参数:

  - top: 查询的起始节点

  - expr: XPath 表达式



返回值:

  - 第一个匹配的节点，未匹配时为 nil




Example:

``````````````yak
// VARS: 查找第一个 div
doc = xpath.LoadHTMLDocument(`<div class="c">hello</div>`)~
node = xpath.FindOne(doc, "//div[@class='c']")
// STDOUT: 打印节点文本
println(xpath.InnerText(node))   // OUT: hello
// assert: 锁定结论
assert xpath.InnerText(node) == "hello", "should find the div text"
``````````````


#### 定义

`FindOne(top *html.Node, expr string) *html.Node`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*html.Node` | 第一个匹配的节点，未匹配时为 nil |


### InnerText

#### 详细描述
InnerText 返回指定节点及其子节点的字符串

参数:

  - n: 要提取文本的节点



返回值:

  - 节点及其子节点拼接后的纯文本




Example:

``````````````yak
// VARS: 提取节点文本
doc = xpath.LoadHTMLDocument(`<div>hello</div>`)~
node = xpath.FindOne(doc, "//div")
text = xpath.InnerText(node)
// STDOUT: 打印文本
println(text)   // OUT: hello
// assert: 锁定结论
assert text == "hello", "InnerText should extract node text"
``````````````


#### 定义

`InnerText(n *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `*html.Node` | 要提取文本的节点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 节点及其子节点拼接后的纯文本 |


### LoadHTMLDocument

#### 详细描述
LoadHTMLDocument 解析传入的 HTML 文本，返回根节点结构体引用与错误

参数:

  - htmlText: 待解析的 HTML 文本(字符串或字节切片)



返回值:

  - 解析得到的根节点

  - 解析失败时返回的错误




Example:

``````````````yak
// VARS: 解析 HTML 并查询
doc = xpath.LoadHTMLDocument(`<div class="content">hello</div>`)~
node = xpath.FindOne(doc, "//div")
// assert: 文档可被正常查询
assert xpath.InnerText(node) == "hello", "loaded document should be queryable"
``````````````


#### 定义

`LoadHTMLDocument(htmlText any) (*html.Node, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| htmlText | `any` | 待解析的 HTML 文本(字符串或字节切片) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*html.Node` | 解析得到的根节点 |
| r2 | `error` | 解析失败时返回的错误 |


### OutputHTML

#### 详细描述
OutputHTML 将传入的节点结构体引用转换为 HTML 文本(不含节点自身标签，仅子节点)

参数:

  - doc: 要渲染的节点



返回值:

  - 渲染出的 HTML 文本(节点内部内容)




Example:

``````````````yak
// VARS: 渲染节点内部 HTML
doc = xpath.LoadHTMLDocument(`<div class="c">hello</div>`)~
node = xpath.FindOne(doc, "//div")
// STDOUT: 打印内部内容
println(xpath.OutputHTML(node))   // OUT: hello
// assert: 锁定结论
assert xpath.OutputHTML(node) == "hello", "OutputHTML should render the inner content"
``````````````


#### 定义

`OutputHTML(doc *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| doc | `*html.Node` | 要渲染的节点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 渲染出的 HTML 文本(节点内部内容) |


### OutputHTMLSelf

#### 详细描述
OutputHTMLSelf 将传入的节点结构体引用转换为 HTML 文本，包含自身节点

参数:

  - doc: 要渲染的节点



返回值:

  - 渲染出的 HTML 文本(包含节点自身的标签)




Example:

``````````````yak
// VARS: 渲染包含自身标签的 HTML
doc = xpath.LoadHTMLDocument(`<div class="c">hello</div>`)~
node = xpath.FindOne(doc, "//div")
out = xpath.OutputHTMLSelf(node)
// assert: 输出包含节点自身标签
assert str.Contains(out, "<div"), "OutputHTMLSelf should include the node tag itself"
``````````````


#### 定义

`OutputHTMLSelf(doc *html.Node) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| doc | `*html.Node` | 要渲染的节点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 渲染出的 HTML 文本(包含节点自身的标签) |


### Query

#### 详细描述
Query 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误

参数:

  - top: 查询的起始节点

  - expr: XPath 表达式



返回值:

  - 第一个匹配的节点，未匹配时为 nil

  - 表达式解析失败时返回的错误




Example:

``````````````yak
// VARS: 查询第一个 div
doc = xpath.LoadHTMLDocument(`<div>hello</div>`)~
node = xpath.Query(doc, "//div")~
// assert: 锁定结论
assert xpath.InnerText(node) == "hello", "should query the first div"
``````````````


#### 定义

`Query(top *html.Node, expr string) (*html.Node, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*html.Node` | 第一个匹配的节点，未匹配时为 nil |
| r2 | `error` | 表达式解析失败时返回的错误 |


### QueryAll

#### 详细描述
QueryAll 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误

参数:

  - top: 查询的起始节点

  - expr: XPath 表达式



返回值:

  - 所有匹配节点组成的数组

  - 表达式解析失败时返回的错误




Example:

``````````````yak
// VARS: 查询所有 div
doc = xpath.LoadHTMLDocument(`<div>a</div><div>b</div>`)~
nodes = xpath.QueryAll(doc, "//div")~
// STDOUT: 打印命中数量
println(len(nodes))   // OUT: 2
// assert: 锁定结论
assert len(nodes) == 2, "should query two div nodes"
``````````````


#### 定义

`QueryAll(top *html.Node, expr string) ([]*html.Node, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*html.Node` | 所有匹配节点组成的数组 |
| r2 | `error` | 表达式解析失败时返回的错误 |


### SelectAttr

#### 详细描述
SelectAttr 返回传入节点指定名称的属性值

参数:

  - n: 目标节点

  - name: 属性名



返回值:

  - 属性值，不存在时返回空字符串




Example:

``````````````yak
// VARS: 读取 class 属性
doc = xpath.LoadHTMLDocument(`<div class="content">x</div>`)~
node = xpath.FindOne(doc, "//div")
attr = xpath.SelectAttr(node, "class")
// STDOUT: 打印属性值
println(attr)   // OUT: content
// assert: 锁定结论
assert attr == "content", "SelectAttr should read the class attribute"
``````````````


#### 定义

`SelectAttr(n *html.Node, name string) (val string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `*html.Node` | 目标节点 |
| name | `string` | 属性名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| val | `string` | 属性值，不存在时返回空字符串 |


