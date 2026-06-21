# xhtml {#library-xhtml}

`xhtml` 库提供 HTML 内容的解析、遍历、查找与比较能力，常用于网页内容提取、DOM 差异分析与生成元素的 XPath 定位。

典型使用场景：

- 查找与遍历：`xhtml.Find(htmlRaw, matchStr)` 在 HTML 中查找匹配节点，`xhtml.Walker(h, handler)` 遍历 DOM 节点，`xhtml.MatchBetween` 抽取两个标记之间的内容。
- 定位与比较：`xhtml.GenerateXPath(node)` 为节点生成 XPath，`xhtml.CompareHtml` 比较两份 HTML 的差异。

与相邻库的关系：`xhtml` 与 `xpath`（XPath 查询）、`crawler`/`crawlerx`（爬取）配合，用于从网页中精确提取与比对内容。

> 共 6 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [xhtml.CompareHtml](#comparehtml) | `htmlRaw1 any, htmlRaw2 any` | `[]*DiffInfo, error` | 比较两段 HTML 代码的差异，返回差异的节点信息结构体引用切片与错误 |
| [xhtml.Find](#find) | `htmlRaw any, matchStr string` | `[]*MatchNodeInfo` | 解析并遍历一段 HTML 代码的每一个节点并找到匹配字符串的节点，返回匹配字符串的节点信息的引用切片 |
| [xhtml.GenerateXPath](#generatexpath) | `node *html.Node` | `string` | 根据节点引用生成一个节点的 XPath 路径 |
| [xhtml.MatchBetween](#matchbetween) | `srcBody any, start string, end string, n int` | `int, string` | 从字符串中匹配两个字符串之间的内容，最多匹配 n 个字符，n 为 -1 时不限制 |
| [xhtml.RandomUpperAndLower](#randomupperandlower) | `s string` | `string` | 返回一个随机大小写的字符串，常用于绕过大小写敏感的过滤 |
| [xhtml.Walker](#walker) | `h any, handler func(node *html.Node)` | `error` | 解析并遍历一段 HTML 代码的每一个节点并回调函数，返回错误 |

## 函数详情

### CompareHtml {#comparehtml}

```go
CompareHtml(htmlRaw1 any, htmlRaw2 any) ([]*DiffInfo, error)
```

比较两段 HTML 代码的差异，返回差异的节点信息结构体引用切片与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| htmlRaw1 | `any` | 第一段 HTML 内容，会被转换为字符串 |
| htmlRaw2 | `any` | 第二段 HTML 内容，会被转换为字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*DiffInfo` | 差异信息引用切片，每个元素描述一处结构/属性/文本差异 |
| r2 | `error` | 解析 HTML 失败时返回的错误 |

**示例**

``````````````yak
// VARS: 比较两段不同的 HTML
diff = xhtml.CompareHtml("<div>a</div>", "<div>b</div>")~
// assert: 不同内容应产生差异
assert len(diff) > 0, "different html should produce diffs"
``````````````

---

### Find {#find}

```go
Find(htmlRaw any, matchStr string) []*MatchNodeInfo
```

解析并遍历一段 HTML 代码的每一个节点并找到匹配字符串的节点，返回匹配字符串的节点信息的引用切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| htmlRaw | `any` | 待解析的 HTML 内容，会被转换为字符串 |
| matchStr | `string` | 要匹配的子串(支持 glob 匹配) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*MatchNodeInfo` | 匹配到的节点信息引用切片，每个元素含 Xpath、TagName、MatchText 等字段 |

**示例**

``````````````yak
// VARS: 在 HTML 中查找包含 hello 的节点
res = xhtml.Find("<html><body><div>hello</div></body></html>", "hello")
// STDOUT: 打印命中数量
println(len(res))   // OUT: 1
// assert: 命中文本节点
assert res[0].MatchText == "hello", "should match the text node"
``````````````

---

### GenerateXPath {#generatexpath}

```go
GenerateXPath(node *html.Node) string
```

根据节点引用生成一个节点的 XPath 路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| node | `*html.Node` | 目标节点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 该节点的 XPath 路径字符串 |

**示例**

``````````````yak
// VARS: 遍历并取出 div 节点的 XPath
xp = ""

	xhtml.Walker("<html><body><div>x</div></body></html>", func(node) {
	    if node.Data == "div" {
	        xp = xhtml.GenerateXPath(node)
	    }
	})

// assert: 生成的路径引用了 div 节点
assert str.Contains(xp, "div"), "generated xpath should reference the div node"
``````````````

---

### MatchBetween {#matchbetween}

```go
MatchBetween(srcBody any, start string, end string, n int) (int, string)
```

从字符串中匹配两个字符串之间的内容，最多匹配 n 个字符，n 为 -1 时不限制

返回匹配到的内容的起始位置与匹配到的内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srcBody | `any` | 源内容，会被转换为字符串 |
| start | `string` | 起始定界字符串 |
| end | `string` | 结束定界字符串 |
| n | `int` | 内容长度上限，-1 表示不限制 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 匹配内容在源字符串中的起始下标，未匹配时为 -1 |
| r2 | `string` | 两个定界字符串之间的内容，未匹配时为空字符串 |

**示例**

``````````````yak
// VARS: 取出 2 和 6 之间的内容
idx, content = xhtml.MatchBetween("123456789", "2", "6", -1)
// STDOUT: 打印匹配内容
println(content)   // OUT: 345
// assert: 锁定结论
assert content == "345", "should extract the text between 2 and 6"
``````````````

---

### RandomUpperAndLower {#randomupperandlower}

```go
RandomUpperAndLower(s string) string
```

返回一个随机大小写的字符串，常用于绕过大小写敏感的过滤

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 原始字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 随机翻转字母大小写后的字符串(字母构成不变) |

**示例**

``````````````yak
// VARS: 随机大小写变形(每次结果不同)
r = xhtml.RandomUpperAndLower("target")
// assert: 忽略大小写后仍等于原串
assert str.ToLower(r) == "target", "random case should preserve the letters case-insensitively"
``````````````

---

### Walker {#walker}

```go
Walker(h any, handler func(node *html.Node)) error
```

解析并遍历一段 HTML 代码的每一个节点并回调函数，返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `any` | 待解析的 HTML 内容，会被转换为字节切片 |
| handler | `func(node *html.Node)` | 对每个节点调用的回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 解析 HTML 失败时返回的错误 |

**示例**

``````````````yak
// VARS: 遍历所有节点并计数
count = 0
xhtml.Walker("<html><body><div>x</div></body></html>", func(node) { count++ })
// assert: 至少访问到若干节点
assert count > 0, "walker should visit nodes"
``````````````

---

