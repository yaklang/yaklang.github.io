# amap {#library-amap}

`amap` 库是高德地图（AMap）开放平台 API 的封装，提供地理编码、逆地理编码、POI 检索、路径规划、IP 定位、天气查询等地理信息服务能力。使用前需要申请高德 API Key，通过 `amap.apiKey` 传入。

典型使用场景：

- 地理编码：`amap.GetGeocode`（地址转坐标）、`amap.GetReverseGeocode`（坐标转地址）、`amap.GetIpLocation`（IP 定位）。
- 地点检索：`amap.GetPOI` / `amap.GetNearbyPOI` / `amap.GetPOIDetail` 搜索兴趣点；`amap.GetDistance` 测算距离。
- 路径规划：`amap.GetDrivingPlan` / `amap.GetWalkingPlan` / `amap.GetBicyclingPlan` / `amap.GetTransitPlan` 分别规划驾车、步行、骑行与公交路线。
- 其他：`amap.GetWeather` 查询天气；通过 `amap.city` / `amap.radius` / `amap.page` / `amap.pageSize` / `amap.timeout` 等选项细化查询，`amap.pocOpts` 透传底层 HTTP 选项（如代理）。

与相邻库的关系：`amap` 底层基于 `poc`/HTTP 请求实现，是面向外部数据源（地理信息）的便捷封装，常用于资产地理画像、目标定位等场景。

> 共 24 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [amap.GetBicyclingPlan](#getbicyclingplan) | `origin string, destination string, options ...AmapConfigOption` | `*BicyclingResult, error` | BicyclingPlan 计算两地之间的骑行路径规划（导出名为 amap.GetBicyclingPlan） |
| [amap.GetDistance](#getdistance) | `origin string, destination string, options ...AmapConfigOption` | `*DistanceResult, error` | Distance 计算两地之间的距离（导出名为 amap.GetDistance） |
| [amap.GetDrivingPlan](#getdrivingplan) | `origin string, destination string, options ...AmapConfigOption` | `*DirectionResponse, error` | DrivingPlan 计算两地之间的驾车路径规划（导出名为 amap.GetDrivingPlan） |
| [amap.GetGeocode](#getgeocode) | `address string, options ...AmapConfigOption` | `[]*GeocodeResult, error` | Geocode 将地址转换为经纬度坐标（地理编码，导出名为 amap.GetGeocode） |
| [amap.GetIpLocation](#getiplocation) | `ip string, options ...AmapConfigOption` | `*IPLocationResultEx, error` | IPLocation 根据 IP 地址定位其地理位置（ip 为空时定位请求方 IP，导出名为 amap.GetIpLocation） |
| [amap.GetNearbyPOI](#getnearbypoi) | `location string, keywords string, options ...AmapConfigOption` | `*SearchPOIResultEx, error` | SearchNearbyPOI 基于坐标的周边兴趣点搜索（导出名为 amap.GetNearbyPOI） |
| [amap.GetPOI](#getpoi) | `keywords string, options ...AmapConfigOption` | `*SearchPOIResultEx, error` | SearchPOI 基于关键词搜索兴趣点（POI，导出名为 amap.GetPOI） |
| [amap.GetPOIDetail](#getpoidetail) | `poiID string, options ...AmapConfigOption` | `*POIResultEx, error` | 根据 POI ID 查询兴趣点详情（导出名为 amap.GetPOIDetail） |
| [amap.GetReverseGeocode](#getreversegeocode) | `longitude float64, latitude float64, options ...AmapConfigOption` | `*RegeoCodeResult, error` | ReverseGeocode 将经纬度坐标转换为结构化地址（逆地理编码，导出名为 amap.GetReverseGeocode） |
| [amap.GetTransitPlan](#gettransitplan) | `origin string, destination string, options ...AmapConfigOption` | `*TransitResponse, error` | TransitPlan 计算两地之间的公交路径规划（导出名为 amap.GetTransitPlan） |
| [amap.GetWalkingPlan](#getwalkingplan) | `origin string, destination string, options ...AmapConfigOption` | `*V5WalkingResponse, error` | WalkingPlan 计算两地之间的步行路径规划（导出名为 amap.GetWalkingPlan） |
| [amap.GetWeather](#getweather) | `cityCode string, options ...AmapConfigOption` | `*WeatherResponse, error` | 查询指定城市的天气信息（导出名为 amap.GetWeather） |

## 可变参数函数详情

### GetBicyclingPlan {#getbicyclingplan}

```go
GetBicyclingPlan(origin string, destination string, options ...AmapConfigOption) (*BicyclingResult, error)
```

BicyclingPlan 计算两地之间的骑行路径规划（导出名为 amap.GetBicyclingPlan）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `string` | 起点地址 |
| destination | `string` | 终点地址 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*BicyclingResult` | 骑行路径规划结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
plan = amap.GetBicyclingPlan("北京站", "天安门", amap.apiKey("your-key"))~
dump(plan)
``````````````

---

### GetDistance {#getdistance}

```go
GetDistance(origin string, destination string, options ...AmapConfigOption) (*DistanceResult, error)
```

Distance 计算两地之间的距离（导出名为 amap.GetDistance）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `string` | 起点地址 |
| destination | `string` | 终点地址 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*DistanceResult` | 距离计算结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
dist = amap.GetDistance("北京站", "北京西站", amap.apiKey("your-key"))~
dump(dist)
``````````````

---

### GetDrivingPlan {#getdrivingplan}

```go
GetDrivingPlan(origin string, destination string, options ...AmapConfigOption) (*DirectionResponse, error)
```

DrivingPlan 计算两地之间的驾车路径规划（导出名为 amap.GetDrivingPlan）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `string` | 起点地址 |
| destination | `string` | 终点地址 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*DirectionResponse` | 驾车路径规划结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
plan = amap.GetDrivingPlan("北京站", "北京西站", amap.apiKey("your-key"))~
dump(plan)
``````````````

---

### GetGeocode {#getgeocode}

```go
GetGeocode(address string, options ...AmapConfigOption) ([]*GeocodeResult, error)
```

Geocode 将地址转换为经纬度坐标（地理编码，导出名为 amap.GetGeocode）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| address | `string` | 结构化地址描述 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GeocodeResult` | 地理编码结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
results = amap.GetGeocode("北京市朝阳区阜通东大街6号", amap.apiKey("your-key"))~
dump(results)
``````````````

---

### GetIpLocation {#getiplocation}

```go
GetIpLocation(ip string, options ...AmapConfigOption) (*IPLocationResultEx, error)
```

IPLocation 根据 IP 地址定位其地理位置（ip 为空时定位请求方 IP，导出名为 amap.GetIpLocation）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| ip | `string` | 待定位的 IP 地址，为空时定位请求方 IP |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*IPLocationResultEx` | IP 地理位置结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
loc = amap.GetIpLocation("114.114.114.114", amap.apiKey("your-key"))~
dump(loc)
``````````````

---

### GetNearbyPOI {#getnearbypoi}

```go
GetNearbyPOI(location string, keywords string, options ...AmapConfigOption) (*SearchPOIResultEx, error)
```

SearchNearbyPOI 基于坐标的周边兴趣点搜索（导出名为 amap.GetNearbyPOI）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| location | `string` | 中心点坐标（如 &#34;116.481,39.990&#34;） |
| keywords | `string` | 搜索关键词 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SearchPOIResultEx` | POI 搜索结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
pois = amap.GetNearbyPOI("116.481488,39.990464", "咖啡", amap.apiKey("your-key"), amap.radius(1000))~
dump(pois)
``````````````

---

### GetPOI {#getpoi}

```go
GetPOI(keywords string, options ...AmapConfigOption) (*SearchPOIResultEx, error)
```

SearchPOI 基于关键词搜索兴趣点（POI，导出名为 amap.GetPOI）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keywords | `string` | 搜索关键词 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SearchPOIResultEx` | POI 搜索结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
pois = amap.GetPOI("咖啡", amap.apiKey("your-key"), amap.city("北京"))~
dump(pois)
``````````````

---

### GetPOIDetail {#getpoidetail}

```go
GetPOIDetail(poiID string, options ...AmapConfigOption) (*POIResultEx, error)
```

根据 POI ID 查询兴趣点详情（导出名为 amap.GetPOIDetail）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| poiID | `string` | 兴趣点 ID |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*POIResultEx` | POI 详情结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
detail = amap.GetPOIDetail("B000A83M61", amap.apiKey("your-key"))~
dump(detail)
``````````````

---

### GetReverseGeocode {#getreversegeocode}

```go
GetReverseGeocode(longitude float64, latitude float64, options ...AmapConfigOption) (*RegeoCodeResult, error)
```

ReverseGeocode 将经纬度坐标转换为结构化地址（逆地理编码，导出名为 amap.GetReverseGeocode）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| longitude | `float64` | 经度 |
| latitude | `float64` | 纬度 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*RegeoCodeResult` | 逆地理编码结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
result = amap.GetReverseGeocode(116.481488, 39.990464, amap.apiKey("your-key"))~
dump(result)
``````````````

---

### GetTransitPlan {#gettransitplan}

```go
GetTransitPlan(origin string, destination string, options ...AmapConfigOption) (*TransitResponse, error)
```

TransitPlan 计算两地之间的公交路径规划（导出名为 amap.GetTransitPlan）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `string` | 起点地址 |
| destination | `string` | 终点地址 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*TransitResponse` | 公交路径规划结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
plan = amap.GetTransitPlan("北京站", "北京西站", amap.apiKey("your-key"), amap.city("北京"))~
dump(plan)
``````````````

---

### GetWalkingPlan {#getwalkingplan}

```go
GetWalkingPlan(origin string, destination string, options ...AmapConfigOption) (*V5WalkingResponse, error)
```

WalkingPlan 计算两地之间的步行路径规划（导出名为 amap.GetWalkingPlan）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `string` | 起点地址 |
| destination | `string` | 终点地址 |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*V5WalkingResponse` | 步行路径规划结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
plan = amap.GetWalkingPlan("北京站", "天安门", amap.apiKey("your-key"))~
dump(plan)
``````````````

---

### GetWeather {#getweather}

```go
GetWeather(cityCode string, options ...AmapConfigOption) (*WeatherResponse, error)
```

查询指定城市的天气信息（导出名为 amap.GetWeather）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| cityCode | `string` | 城市编码（adcode） |

**可选参数**

可作为可变参数 `options ...AmapConfigOption` 传入选项；共 12 个可用选项，详见 [AmapConfigOption 选项列表](#option-amapconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*WeatherResponse` | 天气查询结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要有效的高德 API Key（示意性示例）
weather = amap.GetWeather("110000", amap.apiKey("your-key"))~
dump(weather)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：AmapConfigOption {#option-amapconfigoption}

涉及到的函数有：[amap.GetBicyclingPlan](#getbicyclingplan)、[amap.GetDistance](#getdistance)、[amap.GetDrivingPlan](#getdrivingplan)、[amap.GetGeocode](#getgeocode)、[amap.GetIpLocation](#getiplocation)、[amap.GetNearbyPOI](#getnearbypoi)、[amap.GetPOI](#getpoi)、[amap.GetPOIDetail](#getpoidetail)、[amap.GetReverseGeocode](#getreversegeocode)、[amap.GetTransitPlan](#gettransitplan)、[amap.GetWalkingPlan](#getwalkingplan)、[amap.GetWeather](#getweather)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `amap.apiKey` | `apiKey string` | `AmapConfigOption` | WithApiKey 设置高德开放平台 API Key |
| `amap.baseURL` | `baseURL string` | `AmapConfigOption` | WithBaseURL 设置高德 API 的基础 URL |
| `amap.city` | `city string` | `AmapConfigOption` | WithCity 设置请求关联的城市 |
| `amap.extensions` | `extensions string` | `AmapConfigOption` | WithExtensions 设置返回结果的详细程度（base 或 all，导出名为 amap.extensions） |
| `amap.geocodeFilter` | `filter func(geocodes []*GeocodeResult) *GeocodeResult` | `AmapConfigOption` | WithGeocodeFilter 设置地理编码结果过滤器，用于从多个候选中选出一个 |
| `amap.page` | `page int` | `AmapConfigOption` | WithPage 设置分页结果的页码 |
| `amap.pageSize` | `pageSize int` | `AmapConfigOption` | WithPageSize 设置分页结果的每页数量 |
| `amap.pocOpts` | `opts ...poc.PocConfigOption` | `AmapConfigOption` | WithLowhttpOptions 设置高德 API 客户端底层 HTTP 请求选项 |
| `amap.radius` | `radius int` | `AmapConfigOption` | WithRadius 设置周边搜索的半径 |
| `amap.sortRule` | `sortRule string` | `AmapConfigOption` | WithSortRule 设置搜索结果的排序规则 |
| `amap.timeout` | `timeout time.Duration` | `AmapConfigOption` | WithTimeout 设置 HTTP 请求超时时间 |
| `amap.type` | `typ string` | `AmapConfigOption` | WithType 设置类型参数（如距离计算的类型，导出名为 amap.type） |

