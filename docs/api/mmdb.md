# mmdb


|成员函数|函数描述/介绍|
|:------|:--------|
 | [mmdb.Open](#mmdbopen) |  |
 | [mmdb.QueryIPCity](#mmdbqueryipcity) |  |




 



## 函数定义

### mmdb.Open



#### 详细描述



#### 定义：

`func mmdb.Open(v1: string) return (r0: *maxminddb.Reader, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*maxminddb.Reader` |   |
| r1 | `error` |   |


 
### mmdb.QueryIPCity



#### 详细描述



#### 定义：

`func mmdb.QueryIPCity(v1: *maxminddb.Reader, v2: string) return (r0: *geo.City, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*maxminddb.Reader` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geo.City` |   |
| r1 | `error` |   |


 


