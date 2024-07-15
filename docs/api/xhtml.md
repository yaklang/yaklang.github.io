# xhtml

|函数名|函数描述/介绍|
|:------|:--------|
| [xhtml.CompareHtml](#comparehtml) |CompareHtml 比较两段 HTML 代码的差异，返回差异的节点信息结构体引用切片与错误  |
| [xhtml.Find](#find) |Find 解析并遍历一段 HTML 代码的每一个节点并找到匹配字符串的节点，返回匹配字符串的节点信息的引用切片  |
| [xhtml.GenerateXPath](#generatexpath) |GenerateXPath 根据节点引用生成一个节点的 XPath 路径  |
| [xhtml.MatchBetween](#matchbetween) |MatchBetween 从字符串中匹配两个字符串之间的内容，最多匹配 n 个字符，n 为 -1 时不限制  返回匹配到的内容的起始位置与匹配到的内容  |
| [xhtml.RandomUpperAndLower](#randomupperandlower) |RandomUpperAndLower 返回一个随机大小写的字符串  |
| [xhtml.Walker](#walker) |Walker 解析并遍历一段 HTML 代码的每一个节点并回调函数，返回错误  |


## 函数定义
### CompareHtml

#### 详细描述
CompareHtml 比较两段 HTML 代码的差异，返回差异的节点信息结构体引用切片与错误

Example:
```
diff, err = xhtml.CompareHtml(html1, html2)
```


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
Find 解析并遍历一段 HTML 代码的每一个节点并找到匹配字符串的节点，返回匹配字符串的节点信息的引用切片

Example:
```
matchInfoRes = xhtml.Find(&#34;&lt;html&gt;&lt;body&gt;&lt;div&gt;hello&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&#34;, &#34;hello&#34;)
```


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
GenerateXPath 根据节点引用生成一个节点的 XPath 路径

Example:
```
xhtml.Walker(&#34;&lt;html&gt;&lt;body&gt;&lt;div&gt;hello&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&#34;, func(node) {
println(xhtml.GenerateXPath(node))
})
```


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
MatchBetween 从字符串中匹配两个字符串之间的内容，最多匹配 n 个字符，n 为 -1 时不限制

返回匹配到的内容的起始位置与匹配到的内容

Example:
```
xhtml.MatchBetween(&#34;123456789&#34;, &#34;2&#34;, &#34;6&#34;, -1) // 2, &#34;345&#34;
```


#### 定义

`MatchBetween(srcBody any, start string, end string, n int) (int, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcBody | `any` |   |
| start | `string` |   |
| end | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |
| r2 | `string` |   |


### RandomUpperAndLower

#### 详细描述
RandomUpperAndLower 返回一个随机大小写的字符串

Example:
```
xhtml.RandomUpperAndLower(&#34;target&#34;) // TArGeT
```


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
Walker 解析并遍历一段 HTML 代码的每一个节点并回调函数，返回错误

Example:
```
err = xhtml.Walker(&#34;&lt;html&gt;&lt;body&gt;&lt;div&gt;hello&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&#34;, func(node) {
println(node.Data)
})
```


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


