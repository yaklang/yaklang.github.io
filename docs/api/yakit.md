# yakit


|成员函数|函数描述/介绍|
|:------|:--------|
 | [yakit.NewBarGraph](#yakitnewbargraph) | yakit 平台绘制一个图 |
 | [yakit.NewClient](#yakitnewclient) | 创建一个与 yakit 通信的通道（webhook） |
 | [yakit.NewLineGraph](#yakitnewlinegraph) | 创建一个折线图 |
 | [yakit.NewPieGraph](#yakitnewpiegraph) | 创建一个饼图 |
 | [yakit.NewTable](#yakitnewtable) | 创建一个表格 |
 | [yakit.NewWordCloud](#yakitnewwordcloud) | 创建一个词云图（yakit） |




 



## 函数定义

### yakit.NewBarGraph

yakit 平台绘制一个图

#### 详细描述



#### 定义：

`func yakit.NewBarGraph() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
### yakit.NewClient

创建一个与 yakit 通信的通道（webhook）

#### 详细描述



#### 定义：

`func yakit.NewClient(yakitWebhook: string) return (r0: *yaklib.YakitClient)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| yakitWebhook | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitClient` |   |


 
### yakit.NewLineGraph

创建一个折线图

#### 详细描述



#### 定义：

`func yakit.NewLineGraph() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
### yakit.NewPieGraph

创建一个饼图

#### 详细描述



#### 定义：

`func yakit.NewPieGraph() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
### yakit.NewTable

创建一个表格

#### 详细描述



#### 定义：

`func yakit.NewTable(v1 ...string) return (r0: *yaklib.yakitTable)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitTable` |   |


 
### yakit.NewWordCloud

创建一个词云图（yakit）

#### 详细描述



#### 定义：

`func yakit.NewWordCloud() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 


