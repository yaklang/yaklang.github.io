# xpath {#library-xpath}

`xpath` 库提供基于 XPath 的 HTML/XML 文档查询能力，加载文档后用 XPath 表达式精确定位节点并提取内容，常用于结构化网页数据提取。

典型使用场景：

- 加载文档：`xpath.LoadHTMLDocument(htmlText)` 解析 HTML 为节点树。
- 查询节点：`xpath.Find` / `xpath.FindOne` / `xpath.QueryAll` / `xpath.Query` 用 XPath 表达式定位节点，`xpath.InnerText` 取文本，`xpath.SelectAttr` / `xpath.ExistedAttr` 取/判断属性，`xpath.OutputHTML` 输出节点 HTML。

与相邻库的关系：`xpath` 与 `xhtml`（HTML 遍历/比较）、`crawler`/`crawlerx`（爬取）配合，是网页结构化提取的主力查询工具。

> 共 11 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [xpath.CreateXPathNavigator](#createxpathnavigator) | `top *html.Node` | `*NodeNavigator` | 根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点 |
| [xpath.ExistedAttr](#existedattr) | `n *html.Node, name string` | `bool` | 判断传入节点是否存在指定名称的属性并返回布尔值 |
| [xpath.Find](#find) | `top *html.Node, expr string` | `[]*html.Node` | 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组 |
| [xpath.FindOne](#findone) | `top *html.Node, expr string` | `*html.Node` | 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点 |
| [xpath.InnerText](#innertext) | `n *html.Node` | `string` | 返回指定节点及其子节点的字符串 |
| [xpath.LoadHTMLDocument](#loadhtmldocument) | `htmlText any` | `*html.Node, error` | 解析传入的 HTML 文本，返回根节点结构体引用与错误 |
| [xpath.OutputHTML](#outputhtml) | `doc *html.Node` | `string` | 将传入的节点结构体引用转换为 HTML 文本(不含节点自身标签，仅子节点) |
| [xpath.OutputHTMLSelf](#outputhtmlself) | `doc *html.Node` | `string` | 将传入的节点结构体引用转换为 HTML 文本，包含自身节点 |
| [xpath.Query](#query) | `top *html.Node, expr string` | `*html.Node, error` | 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误 |
| [xpath.QueryAll](#queryall) | `top *html.Node, expr string` | `[]*html.Node, error` | 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误 |
| [xpath.SelectAttr](#selectattr) | `n *html.Node, name string` | `string` | 返回传入节点指定名称的属性值 |

## 函数详情

### CreateXPathNavigator {#createxpathnavigator}

```go
CreateXPathNavigator(top *html.Node) *NodeNavigator
```

根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| top | `*html.Node` | 作为导航起点的节点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*NodeNavigator` | 可用于遍历节点树的 XPath 导航器 |

**示例**

``````````````yak
// VARS: 基于文档创建导航器
doc = xpath.LoadHTMLDocument(`<div>x</div>`)~
nav = xpath.CreateXPathNavigator(doc)
// assert: 成功创建导航器
assert nav != nil, "navigator should be created"
``````````````

---

### ExistedAttr {#existedattr}

```go
ExistedAttr(n *html.Node, name string) bool
```

判断传入节点是否存在指定名称的属性并返回布尔值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `*html.Node` | 目标节点 |
| name | `string` | 属性名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 节点是否存在该属性 |

**示例**

``````````````yak
// VARS: 判断属性是否存在
doc = xpath.LoadHTMLDocument(`<div class="content">x</div>`)~
node = xpath.FindOne(doc, "//div")
// STDOUT: class 属性存在
println(xpath.ExistedAttr(node, "class"))   // OUT: true
// assert: 不存在的属性返回 false
assert xpath.ExistedAttr(node, "id") == false, "missing attribute should report false"
``````````````

---

### Find {#find}

```go
Find(top *html.Node, expr string) []*html.Node
```

根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组

如果表达式解析出错会 panic

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*html.Node` | 所有匹配节点组成的数组 |

**示例**

``````````````yak
// VARS: 查找所有匹配的 div
doc = xpath.LoadHTMLDocument(`<div class="c">a</div><div class="c">b</div>`)~
nodes = xpath.Find(doc, "//div[@class='c']")
// STDOUT: 打印命中数量
println(len(nodes))   // OUT: 2
// assert: 锁定结论
assert len(nodes) == 2, "should find two div nodes"
``````````````

---

### FindOne {#findone}

```go
FindOne(top *html.Node, expr string) *html.Node
```

根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点

如果表达式解析出错会 panic

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*html.Node` | 第一个匹配的节点，未匹配时为 nil |

**示例**

``````````````yak
// VARS: 查找第一个 div
doc = xpath.LoadHTMLDocument(`<div class="c">hello</div>`)~
node = xpath.FindOne(doc, "//div[@class='c']")
// STDOUT: 打印节点文本
println(xpath.InnerText(node))   // OUT: hello
// assert: 锁定结论
assert xpath.InnerText(node) == "hello", "should find the div text"
``````````````

---

### InnerText {#innertext}

```go
InnerText(n *html.Node) string
```

返回指定节点及其子节点的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `*html.Node` | 要提取文本的节点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 节点及其子节点拼接后的纯文本 |

**示例**

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

---

### LoadHTMLDocument {#loadhtmldocument}

```go
LoadHTMLDocument(htmlText any) (*html.Node, error)
```

解析传入的 HTML 文本，返回根节点结构体引用与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| htmlText | `any` | 待解析的 HTML 文本(字符串或字节切片) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*html.Node` | 解析得到的根节点 |
| r2 | `error` | 解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 解析 HTML 并查询
doc = xpath.LoadHTMLDocument(`<div class="content">hello</div>`)~
node = xpath.FindOne(doc, "//div")
// assert: 文档可被正常查询
assert xpath.InnerText(node) == "hello", "loaded document should be queryable"
``````````````

---

### OutputHTML {#outputhtml}

```go
OutputHTML(doc *html.Node) string
```

将传入的节点结构体引用转换为 HTML 文本(不含节点自身标签，仅子节点)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| doc | `*html.Node` | 要渲染的节点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 渲染出的 HTML 文本(节点内部内容) |

**示例**

``````````````yak
// VARS: 渲染节点内部 HTML
doc = xpath.LoadHTMLDocument(`<div class="c">hello</div>`)~
node = xpath.FindOne(doc, "//div")
// STDOUT: 打印内部内容
println(xpath.OutputHTML(node))   // OUT: hello
// assert: 锁定结论
assert xpath.OutputHTML(node) == "hello", "OutputHTML should render the inner content"
``````````````

---

### OutputHTMLSelf {#outputhtmlself}

```go
OutputHTMLSelf(doc *html.Node) string
```

将传入的节点结构体引用转换为 HTML 文本，包含自身节点

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| doc | `*html.Node` | 要渲染的节点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 渲染出的 HTML 文本(包含节点自身的标签) |

**示例**

``````````````yak
// VARS: 渲染包含自身标签的 HTML
doc = xpath.LoadHTMLDocument(`<div class="c">hello</div>`)~
node = xpath.FindOne(doc, "//div")
out = xpath.OutputHTMLSelf(node)
// assert: 输出包含节点自身标签
assert str.Contains(out, "<div"), "OutputHTMLSelf should include the node tag itself"
``````````````

---

### Query {#query}

```go
Query(top *html.Node, expr string) (*html.Node, error)
```

根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*html.Node` | 第一个匹配的节点，未匹配时为 nil |
| r2 | `error` | 表达式解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 查询第一个 div
doc = xpath.LoadHTMLDocument(`<div>hello</div>`)~
node = xpath.Query(doc, "//div")~
// assert: 锁定结论
assert xpath.InnerText(node) == "hello", "should query the first div"
``````````````

---

### QueryAll {#queryall}

```go
QueryAll(top *html.Node, expr string) ([]*html.Node, error)
```

根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| top | `*html.Node` | 查询的起始节点 |
| expr | `string` | XPath 表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*html.Node` | 所有匹配节点组成的数组 |
| r2 | `error` | 表达式解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 查询所有 div
doc = xpath.LoadHTMLDocument(`<div>a</div><div>b</div>`)~
nodes = xpath.QueryAll(doc, "//div")~
// STDOUT: 打印命中数量
println(len(nodes))   // OUT: 2
// assert: 锁定结论
assert len(nodes) == 2, "should query two div nodes"
``````````````

---

### SelectAttr {#selectattr}

```go
SelectAttr(n *html.Node, name string) (val string)
```

返回传入节点指定名称的属性值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `*html.Node` | 目标节点 |
| name | `string` | 属性名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| val | `string` | 属性值，不存在时返回空字符串 |

**示例**

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

---

