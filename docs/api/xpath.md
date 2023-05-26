# xpath


|成员函数|函数描述/介绍|
|:------|:--------|
 | [xpath.CreateXPathNavigator](#xpathcreatexpathnavigator) |  |
 | [xpath.ExistedAttr](#xpathexistedattr) |  |
 | [xpath.Find](#xpathfind) |  |
 | [xpath.FindOne](#xpathfindone) |  |
 | [xpath.InnerText](#xpathinnertext) |  |
 | [xpath.LoadHTMLDocument](#xpathloadhtmldocument) |  |
 | [xpath.OutputHTML](#xpathoutputhtml) |  |
 | [xpath.OutputHTMLSelf](#xpathoutputhtmlself) |  |
 | [xpath.Query](#xpathquery) |  |
 | [xpath.QueryAll](#xpathqueryall) |  |
 | [xpath.SelectAttr](#xpathselectattr) |  |




 



## 函数定义

### xpath.CreateXPathNavigator



#### 详细描述



#### 定义：

`CreateXPathNavigator(*html.Node) *htmlquery.NodeNavigator`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*htmlquery.NodeNavigator` |   |


 
### xpath.ExistedAttr



#### 详细描述



#### 定义：

`ExistedAttr(n *html.Node, name string) bool  doc:ExistsAttr returns whether attribute with specified name exists.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### xpath.Find



#### 详细描述



#### 定义：

`Find(top *html.Node, expr string) []*html.Node  doc:Find is like QueryAll but Will panics if the expression `expr` cannot be parsed.See `QueryAll()` function.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*html.Node` |   |


 
### xpath.FindOne



#### 详细描述



#### 定义：

`FindOne(top *html.Node, expr string) *html.Node  doc:FindOne is like Query but will panics if the expression `expr` cannot be parsed.See `Query()` function.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*html.Node` |   |


 
### xpath.InnerText



#### 详细描述



#### 定义：

`InnerText(n *html.Node) string  doc:InnerText returns the text between the start and end tags of the object.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### xpath.LoadHTMLDocument



#### 详细描述



#### 定义：

`LoadHTMLDocument(any) (*html.Node, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*html.Node` |   |
| r1 | `error` |   |


 
### xpath.OutputHTML



#### 详细描述



#### 定义：

`OutputHTML(*html.Node) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### xpath.OutputHTMLSelf



#### 详细描述



#### 定义：

`OutputHTMLSelf(*html.Node) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### xpath.Query



#### 详细描述



#### 定义：

`Query(top *html.Node, expr string) (*html.Node, error)  doc:Query runs the given XPath expression against the given html.Node andreturns the first matching html.Node, or nil if no matches are found.Returns an error if the expression `expr` cannot be parsed.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*html.Node` |   |
| r1 | `error` |   |


 
### xpath.QueryAll



#### 详细描述



#### 定义：

`QueryAll(top *html.Node, expr string) ([]*html.Node, error)  doc:QueryAll searches the html.Node that matches by the specified XPath expr.Return an error if the expression `expr` cannot be parsed.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*html.Node` |   |
| r1 | `error` |   |


 
### xpath.SelectAttr



#### 详细描述



#### 定义：

`SelectAttr(n *html.Node, name string) (val string)  doc:SelectAttr returns the attribute value with the specified name.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


