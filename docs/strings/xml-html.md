---
sidebar_position: 4
sidebar_label: "XML / HTML 解析 xpath"
---

# 用 xpath / xhtml 解析 XML / HTML

从网页里抽取数据时，正则往往力不从心（标签嵌套、属性顺序多变）。Yaklang 的 `xpath` 库把 HTML/XML 解析成节点树，用 **XPath 表达式** 精确定位节点；`xhtml` 则提供一些轻量的辅助函数（如取两个标记之间的内容）。

:::danger Find / FindOne 表达式错误会 panic
`xpath.Find` / `xpath.FindOne` 在 **XPath 表达式本身语法错误** 时会 panic（而不是返回 error）。表达式建议先确认无误，或在外层用 `defer recover()` 兜底，避免脚本直接崩掉。
:::

## 分组速查表

| 分组 | 函数（含调用形态） | 返回 | 说明 |
| --- | --- | --- | --- |
| 加载 | `xpath.LoadHTMLDocument(html)` | (doc, err) | 解析为节点树根节点 |
| 查询 | `xpath.Find(node, expr)` `xpath.FindOne(node, expr)` | []node / node | 按 XPath 取全部 / 第一个 |
| 文本 | `xpath.InnerText(node)` | string | 节点及子节点的纯文本 |
| 属性 | `xpath.SelectAttr(node, name)` `xpath.ExistedAttr(node, name)` | string / bool | 取属性值 / 判断是否存在 |
| 序列化 | `xpath.OutputHTML(node)` `xpath.OutputHTMLSelf(node)` | string | 输出内部 / 含自身的 HTML |
| 轻量辅助 | `xhtml.MatchBetween(s, start, end, n)` | (int, string) | 取两标记之间的内容 |

## 加载与查询

`xpath.LoadHTMLDocument` 返回根节点，之后用 `xpath.Find`（取全部匹配）或 `xpath.FindOne`（取第一个）配合 XPath 表达式定位。

``````````````yak
// 特性: xpath.LoadHTMLDocument / Find / FindOne 加载与查询
// 关键词: xpath.LoadHTMLDocument, xpath.Find, xpath.FindOne
htmlText = `<html><body>
<ul id="nav">
<li class="item"><a href="/a">Alpha</a></li>
<li class="item"><a href="/b">Beta</a></li>
<li class="item special"><a href="/c">Gamma</a></li>
</ul>
<div class="content">Hello <b>World</b></div>
</body></html>`

// LoadHTMLDocument 返回 (根节点, error)
doc, err = xpath.LoadHTMLDocument(htmlText)
assert err == nil, "valid html should load"

// Find 取所有匹配的节点(切片)
items = xpath.Find(doc, "//li")
println(len(items))   // OUT: 3

// FindOne 只取第一个匹配的节点(没有则为 nil)
first = xpath.FindOne(doc, "//li/a")
println(first != nil) // OUT: true
``````````````

## 取文本与属性

定位到节点后，常用四个取值动作：`InnerText` 取纯文本、`SelectAttr` 取属性、`ExistedAttr` 判断属性是否存在、`OutputHTML` 取内部 HTML 片段。

``````````````yak
// 特性: xpath.InnerText / SelectAttr / ExistedAttr / OutputHTML
// 关键词: xpath.InnerText, xpath.SelectAttr, xpath.OutputHTML
htmlText = `<div class="content">Hello <b>World</b></div><a href="/a">Alpha</a>`
doc = xpath.LoadHTMLDocument(htmlText)~

a = xpath.FindOne(doc, "//a")
// InnerText 取标签内纯文本
println(xpath.InnerText(a))          // OUT: Alpha
// SelectAttr 取指定属性值
println(xpath.SelectAttr(a, "href")) // OUT: /a

content = xpath.FindOne(doc, "//div[@class='content']")
// InnerText 会把子标签里的文本一起拼出来(<b> 被剥掉)
println(xpath.InnerText(content))         // OUT: Hello World
// ExistedAttr 判断属性是否存在
println(xpath.ExistedAttr(content, "class"))  // OUT: true
// OutputHTML 输出的是节点“内部”的 HTML(不含 div 自身, 但保留 <b>)
println(xpath.OutputHTML(content))        // OUT: Hello <b>World</b>
``````````````

:::note InnerText 取正文，OutputHTML 保结构
`InnerText` 返回纯文本（剥掉所有标签），适合拿正文；`OutputHTML` 返回带标签的 HTML 片段（注意是节点**内部**的内容，不含节点自身，含自身要用 `OutputHTMLSelf`），适合需要保留结构再处理的场景。
:::

## 遍历多个节点

`xpath.Find` 返回节点切片，直接用 `for ... in` 遍历即可批量抽取。

``````````````yak
// 特性: 遍历 xpath.Find 的结果
// 关键词: xpath.Find, for in 遍历节点
htmlText = `<ul>
<li><a href="/a">Alpha</a></li>
<li><a href="/b">Beta</a></li>
<li><a href="/c">Gamma</a></li>
</ul>`
doc = xpath.LoadHTMLDocument(htmlText)~

links = xpath.Find(doc, "//a")
texts = []
for n in links {
    texts = append(texts, xpath.InnerText(n))
}
println(texts)        // OUT: [Alpha Beta Gamma]
println(len(texts))   // OUT: 3
``````````````

## XPath 谓词的精确匹配陷阱（重点）

`[@class='item']` 是**精确相等**判断：`class="item special"` 这种多 class 的节点不会被命中。要"包含某个 class"应当用 `contains(@class, 'item')`。下面用一个小实验直接对照两种写法的命中数：

``````````````yak
// 特性: XPath 谓词 @class='x' 精确匹配 vs contains() 包含匹配
// 关键词: XPath contains, 属性精确匹配陷阱
htmlText = `<ul>
<li class="item"><a>A</a></li>
<li class="item"><a>B</a></li>
<li class="item special"><a>C</a></li>
</ul>`
doc = xpath.LoadHTMLDocument(htmlText)~

// 精确相等: "item special" 因为不等于 "item" 而被漏掉
exact = xpath.Find(doc, "//li[@class='item']")
println(len(exact))     // OUT: 2

// contains: 把 "item special" 也算进来
contained = xpath.Find(doc, "//li[contains(@class,'item')]")
println(len(contained)) // OUT: 3

assert len(exact) == 2 && len(contained) == 3, "contains matches multi-class node too"
``````````````

:::danger 多 class 一定用 contains
真实网页里元素常有多个 class（如 `class="btn btn-primary active"`）。用 `[@class='btn']` 几乎一定漏匹配，应改用 `[contains(@class,'btn')]`。这是抓取数据时最常见的"明明有却匹配不到"的原因。
:::

## xhtml.MatchBetween：取两个标记之间的内容

不想动用完整 XPath 解析时，`xhtml.MatchBetween` 可以直接抠出两段标记之间的文本。

:::note 返回值是 (起始下标, 内容)
`xhtml.MatchBetween(s, start, end, n)` 返回**两个值**：内容在原串中的起始下标、以及内容本身。`n` 是最多匹配多少个字符，`-1` 表示不限制。漏接第一个返回值会拿错数据。
:::

``````````````yak
// 特性: xhtml.MatchBetween 取标记之间内容
// 关键词: xhtml.MatchBetween, 返回 (下标, 内容)
// "prefix<title>" 共 13 个字符, 所以内容 "Yak" 从下标 13 开始
pos, title = xhtml.MatchBetween("prefix<title>Yak</title>suffix", "<title>", "</title>", -1)
println(pos)     // OUT: 13
println(title)   // OUT: Yak
``````````````
