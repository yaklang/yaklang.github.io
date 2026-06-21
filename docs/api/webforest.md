# webforest {#library-webforest}

`webforest` 库提供"网站树森林"数据结构，把大量 URL 按站点/路径组织成树形结构，便于对爬取或测绘到的海量 URL 做聚合、去重与层级展示。

典型使用场景：

- 构建森林：`webforest.New(size)` 创建网站树森林，向其加入 URL 后按域名与路径自动组织成树，用于资产的层级化梳理。

与相邻库的关系：`webforest` 是数据组织工具，常承接 `crawler`/`crawlerx`（爬取产出）或 `db`（URL 资产）的结果，用于站点结构的聚合展示。

> 共 1 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [webforest.New](#new) | `size int` | `*WebsiteForest` | NewWebsiteForest 创建一个网站森林（导出名为 webforest.New） |

## 函数详情

### New {#new}

```go
New(size int) *WebsiteForest
```

NewWebsiteForest 创建一个网站森林（导出名为 webforest.New）

网站森林以&#34;域名为根、路径为枝&#34;的树形结构组织 URL，常用于爬虫结果的站点结构归并与展示

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| size | `int` | 森林容纳的最大节点规模 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*WebsiteForest` | 网站森林对象，可调用 AddNode 添加 URL、CountUrls 统计、Output 输出树形结构 |

**示例**

``````````````yak
forest = webforest.New(100)
forest.AddNode("https://example.com/a")~
forest.AddNode("https://example.com/b/c")~
println(forest.CountUrls())   // OUT: 2
assert forest.CountUrls() == 2, "forest should count the two added urls"
``````````````

---

