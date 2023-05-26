# cve


|成员函数|函数描述/介绍|
|:------|:--------|
 | [cve.Download](#cvedownload) |  |
 | [cve.GetCVE](#cvegetcve) |  |
 | [cve.LoadCVE](#cveloadcve) |  |
 | [cve.MakeCtScript](#cvemakectscript) |  |
 | [cve.NewStatistics](#cvenewstatistics) |  |
 | [cve.Query](#cvequery) |  |
 | [cve.QueryEx](#cvequeryex) |  |
 | [cve.after](#cveafter) |  |
 | [cve.before](#cvebefore) |  |
 | [cve.cpe](#cvecpe) |  |
 | [cve.cve](#cvecve) |  |
 | [cve.cwe](#cvecwe) |  |
 | [cve.parseToCpe](#cveparsetocpe) |  |
 | [cve.product](#cveproduct) |  |
 | [cve.score](#cvescore) |  |
 | [cve.severity](#cveseverity) |  |
 | [cve.vendor](#cvevendor) |  |




 



## 函数定义

### cve.Download



#### 详细描述



#### 定义：

`Download(dir string)  doc:DownLoad 从NVD下载CVE json数据到本地`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### cve.GetCVE



#### 详细描述



#### 定义：

`func cve.GetCVE(v1: string) return (r0: *cveresources.CVE)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*cveresources.CVE` |   |


 
### cve.LoadCVE



#### 详细描述



#### 定义：

`LoadCVE(fileDir, DbPath string)  doc:LoadCVE 从本地的CVE json数据加载构造数据库`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...int` |   |




 

 
### cve.MakeCtScript



#### 详细描述



#### 定义：

`MakeCtScript(product, dbName, serverName, scriptPath string)  doc:MakeCtScript 生成合规插件脚本，要求输入产品名，数据库路径，服务名(扫描获取的服务名)，脚本输出路径`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `string` |   |




 

 
### cve.NewStatistics



#### 详细描述



#### 定义：

`func cve.NewStatistics(v1: string) return (r0: *cve.Statistics)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*cve.Statistics` |   |


 
### cve.Query



#### 详细描述



#### 定义：

`Query(DbPath string, opts ...CVEOption) ([]cmd.CVERes, int)  doc:Query 查询CVE`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...cvequeryops.CVEOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]cveresources.CVERes` |   |
| r1 | `int` |   |


 
### cve.QueryEx



#### 详细描述



#### 定义：

`func cve.QueryEx(v1 ...any) return (r0: chan *cveresources.CVE)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *cveresources.CVE` |   |


 
### cve.after



#### 详细描述



#### 定义：

`after(int, ...int) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.before



#### 详细描述



#### 定义：

`before(int, ...int) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.cpe



#### 详细描述



#### 定义：

`cpe(string) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.cve



#### 详细描述



#### 定义：

`cve(string) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.cwe



#### 详细描述



#### 定义：

`cwe(string) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.parseToCpe



#### 详细描述



#### 定义：

`func cve.parseToCpe(v1: string) return (r0: *webfingerprint.CPE, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*webfingerprint.CPE` |   |
| r1 | `error` |   |


 
### cve.product



#### 详细描述



#### 定义：

`product(string, ...string) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.score



#### 详细描述



#### 定义：

`score(float64) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.severity



#### 详细描述



#### 定义：

`severity(string) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 
### cve.vendor



#### 详细描述



#### 定义：

`vendor(string) cveAction.CVEOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func CVEOption(v1: *cvequeryops.CVEQueryInfo) ` |   |


 


