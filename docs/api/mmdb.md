# mmdb

|成员函数|函数描述/介绍|
|:------|:--------|
| [mmdb.Open](#Open) ||
| [mmdb.QueryIPCity](#QueryIPCity) ||


## 函数定义
### mmdb.Open

#### 详细描述


#### 定义

`Open(file string) (*Reader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reader` |   |
| r2 | `error` |   |


### mmdb.QueryIPCity

#### 详细描述


#### 定义

`QueryIPCity(r *maxminddb.Reader, ip string) (*geo.City, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*maxminddb.Reader` |   |
| ip | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.City` |   |
| r2 | `error` |   |


