# mmdb

|函数名|函数描述/介绍|
|:------|:--------|
| [mmdb.Open](#open) |mmdbOpen 打开一个 MaxMind mmdb 数据库文件并返回可供查询的 Reader（导出名为 mmdb.Open） 常配合 mmdb.QueryIPCity 使用，对 IP 做地理位置归属查询 参数: - file: mmdb 数据库文件路径（如 GeoIP2-City.mmdb） 返回...|
| [mmdb.QueryIPCity](#queryipcity) |mmdbQueryIPCity 使用已打开的 mmdb Reader 查询指定 IP 的城市级地理信息（导出名为 mmdb.QueryIPCity） 对港澳台地区做了归一化处理 参数: - r: 由 mmdb.Open 返回的数据库 Reader - ip: 待查询的 IP 地址字符串 返回值: -...|


## 函数定义
### Open

#### 详细描述
mmdbOpen 打开一个 MaxMind mmdb 数据库文件并返回可供查询的 Reader（导出名为 mmdb.Open）

常配合 mmdb.QueryIPCity 使用，对 IP 做地理位置归属查询



参数:

  - file: mmdb 数据库文件路径（如 GeoIP2-City.mmdb）



返回值:

  - mmdb 数据库 Reader

  - 错误信息（文件不存在或格式非法时返回）




Example:

``````````````yak
// 该示例依赖本地 GeoIP2-City.mmdb 数据文件，仅作用法示意
reader = mmdb.Open("GeoIP2-City.mmdb")~
city = mmdb.QueryIPCity(reader, "1.1.1.1")~
println(city.City.Names["en"])
``````````````


#### 定义

`Open(file string) (*maxminddb.Reader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` | mmdb 数据库文件路径（如 GeoIP2-City.mmdb） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*maxminddb.Reader` | mmdb 数据库 Reader |
| r2 | `error` | 错误信息（文件不存在或格式非法时返回） |


### QueryIPCity

#### 详细描述
mmdbQueryIPCity 使用已打开的 mmdb Reader 查询指定 IP 的城市级地理信息（导出名为 mmdb.QueryIPCity）

对港澳台地区做了归一化处理



参数:

  - r: 由 mmdb.Open 返回的数据库 Reader

  - ip: 待查询的 IP 地址字符串



返回值:

  - 包含国家/城市/坐标等信息的地理对象

  - 错误信息（查询失败时返回）




Example:

``````````````yak
// 该示例依赖本地 GeoIP2-City.mmdb 数据文件，仅作用法示意
reader = mmdb.Open("GeoIP2-City.mmdb")~
city = mmdb.QueryIPCity(reader, "1.1.1.1")~
println(city.Country.IsoCode)
``````````````


#### 定义

`QueryIPCity(r *maxminddb.Reader, ip string) (*geo.City, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*maxminddb.Reader` | 由 mmdb.Open 返回的数据库 Reader |
| ip | `string` | 待查询的 IP 地址字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.City` | 包含国家/城市/坐标等信息的地理对象 |
| r2 | `error` | 错误信息（查询失败时返回） |


