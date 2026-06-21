# mmdb {#library-mmdb}

`mmdb` 库用于读取 MaxMind 的 MMDB 数据库（如 GeoLite2），按 IP 查询地理位置信息，常用于 IP 归属地标注与资产地理画像。

典型使用场景：

- 打开与查询：`mmdb.Open(file)` 打开 MMDB 文件得到 reader，`mmdb.QueryIPCity(reader, ip)` 按 IP 查询城市/地理信息。

与相邻库的关系：`mmdb` 是离线地理库读取工具，与 `db.QueryIPCity`（内置 GeoIP）、`amap`（在线地理服务）互补，用于 IP 地理信息富化。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [mmdb.Open](#open) | `file string` | `*maxminddb.Reader, error` | 打开一个 MaxMind mmdb 数据库文件并返回可供查询的 Reader（导出名为 mmdb.Open） |
| [mmdb.QueryIPCity](#queryipcity) | `r *maxminddb.Reader, ip string` | `*geo.City, error` | 使用已打开的 mmdb Reader 查询指定 IP 的城市级地理信息（导出名为 mmdb.QueryIPCity） |

## 函数详情

### Open {#open}

```go
Open(file string) (*maxminddb.Reader, error)
```

打开一个 MaxMind mmdb 数据库文件并返回可供查询的 Reader（导出名为 mmdb.Open）

常配合 mmdb.QueryIPCity 使用，对 IP 做地理位置归属查询

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `string` | mmdb 数据库文件路径（如 GeoIP2-City.mmdb） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*maxminddb.Reader` | mmdb 数据库 Reader |
| r2 | `error` | 错误信息（文件不存在或格式非法时返回） |

**示例**

``````````````yak
// 该示例依赖本地 GeoIP2-City.mmdb 数据文件，仅作用法示意
reader = mmdb.Open("GeoIP2-City.mmdb")~
city = mmdb.QueryIPCity(reader, "1.1.1.1")~
println(city.City.Names["en"])
``````````````

---

### QueryIPCity {#queryipcity}

```go
QueryIPCity(r *maxminddb.Reader, ip string) (*geo.City, error)
```

使用已打开的 mmdb Reader 查询指定 IP 的城市级地理信息（导出名为 mmdb.QueryIPCity）

对港澳台地区做了归一化处理

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `*maxminddb.Reader` | 由 mmdb.Open 返回的数据库 Reader |
| ip | `string` | 待查询的 IP 地址字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*geo.City` | 包含国家/城市/坐标等信息的地理对象 |
| r2 | `error` | 错误信息（查询失败时返回） |

**示例**

``````````````yak
// 该示例依赖本地 GeoIP2-City.mmdb 数据文件，仅作用法示意
reader = mmdb.Open("GeoIP2-City.mmdb")~
city = mmdb.QueryIPCity(reader, "1.1.1.1")~
println(city.Country.IsoCode)
``````````````

---

