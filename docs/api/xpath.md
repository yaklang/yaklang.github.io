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

`func xpath.CreateXPathNavigator(v1: *html.Node) return (r0: *htmlquery.NodeNavigator)`


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

`func xpath.ExistedAttr(v1: *html.Node, v2: string) return (r0: bool)`


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

`func xpath.Find(v1: *html.Node, v2: string) return (r0: []*html.Node)`


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

`func xpath.FindOne(v1: *html.Node, v2: string) return (r0: *html.Node)`


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

`func xpath.InnerText(v1: *html.Node) return (r0: string)`


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

`func xpath.LoadHTMLDocument(v1: any) return (r0: *html.Node, r1: error)`


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

`func xpath.OutputHTML(v1: *html.Node) return (r0: string)`


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

`func xpath.OutputHTMLSelf(v1: *html.Node) return (r0: string)`


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

`func xpath.Query(v1: *html.Node, v2: string) return (r0: *html.Node, r1: error)`


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

`func xpath.QueryAll(v1: *html.Node, v2: string) return (r0: []*html.Node, r1: error)`


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

`func xpath.SelectAttr(v1: *html.Node, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*html.Node` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 


