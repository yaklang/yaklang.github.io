# webforest

|函数名|函数描述/介绍|
|:------|:--------|
| [webforest.New](#new) |NewWebsiteForest 创建一个网站森林（导出名为 webforest.New） 网站森林以&#34;域名为根、路径为枝&#34;的树形结构组织 URL，常用于爬虫结果的站点结构归并与展示 参数: - size: 森林容纳的最大节点规模 返回值: - 网站森林对象，可调用 AddNode 添加 URL、C...|


## 函数定义
### New

#### 详细描述
NewWebsiteForest 创建一个网站森林（导出名为 webforest.New）

网站森林以&#34;域名为根、路径为枝&#34;的树形结构组织 URL，常用于爬虫结果的站点结构归并与展示



参数:

  - size: 森林容纳的最大节点规模



返回值:

  - 网站森林对象，可调用 AddNode 添加 URL、CountUrls 统计、Output 输出树形结构




Example:

``````````````yak
forest = webforest.New(100)
forest.AddNode("https://example.com/a")~
forest.AddNode("https://example.com/b/c")~
println(forest.CountUrls())   // OUT: 2
assert forest.CountUrls() == 2, "forest should count the two added urls"
``````````````


#### 定义

`New(size int) *WebsiteForest`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` | 森林容纳的最大节点规模 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*WebsiteForest` | 网站森林对象，可调用 AddNode 添加 URL、CountUrls 统计、Output 输出树形结构 |


