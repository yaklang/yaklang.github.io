# amap

|函数名|函数描述/介绍|
|:------|:--------|
| [amap.GetBicyclingPlan](#getbicyclingplan) ||
| [amap.GetDistance](#getdistance) ||
| [amap.GetDrivingPlan](#getdrivingplan) ||
| [amap.GetGeocode](#getgeocode) ||
| [amap.GetIpLocation](#getiplocation) |IPLocation 根据 IP 地址定位其地理位置（ip 为空时定位请求方 IP，导出名为 amap.GetIpLocation） 参数: - ip: 待定位的 IP 地址，为空时定位请求方 IP - options: 可选项，需要 amap.apiKey 提供高德 API Key 返回值: - ...|
| [amap.GetNearbyPOI](#getnearbypoi) |SearchNearbyPOI 基于坐标的周边兴趣点搜索（导出名为 amap.GetNearbyPOI） 参数: - location: 中心点坐标（如 &#34;116.481,39.990&#34;） - keywords: 搜索关键词 - options: 可选项，需要 amap.apiKey 提供高德 AP...|
| [amap.GetPOI](#getpoi) |SearchPOI 基于关键词搜索兴趣点（POI，导出名为 amap.GetPOI） 参数: - keywords: 搜索关键词 - options: 可选项，需要 amap.apiKey 提供高德 API Key，可用 amap.city、amap.page、amap.pageSize 返回值: ...|
| [amap.GetPOIDetail](#getpoidetail) |GetPOIDetail 根据 POI ID 查询兴趣点详情（导出名为 amap.GetPOIDetail） 参数: - poiID: 兴趣点 ID - options: 可选项，需要 amap.apiKey 提供高德 API Key 返回值: - POI 详情结果 - 错误信息|
| [amap.GetReverseGeocode](#getreversegeocode) ||
| [amap.GetTransitPlan](#gettransitplan) ||
| [amap.GetWalkingPlan](#getwalkingplan) ||
| [amap.GetWeather](#getweather) ||
| [amap.apiKey](#apikey) |WithApiKey 设置高德开放平台 API Key（导出名为 amap.apiKey） 参数: - apiKey: 高德开放平台申请的 API Key 返回值: - 高德 API 配置可选项|
| [amap.baseURL](#baseurl) |WithBaseURL 设置高德 API 的基础 URL（导出名为 amap.baseURL） 参数: - baseURL: API 基础地址 返回值: - 高德 API 配置可选项|
| [amap.city](#city) |WithCity 设置请求关联的城市（导出名为 amap.city） 参数: - city: 城市名或 citycode 返回值: - 高德 API 配置可选项|
| [amap.extensions](#extensions) |WithExtensions 设置返回结果的详细程度（base 或 all，导出名为 amap.extensions） 参数: - extensions: 取值 base 或 all 返回值: - 高德 API 配置可选项|
| [amap.geocodeFilter](#geocodefilter) |WithGeocodeFilter 设置地理编码结果过滤器，用于从多个候选中选出一个（导出名为 amap.geocodeFilter） 参数: - filter: 过滤回调，输入候选地理编码结果，返回选中的结果 返回值: - 高德 API 配置可选项|
| [amap.page](#page) |WithPage 设置分页结果的页码（导出名为 amap.page） 参数: - page: 页码（从 1 开始） 返回值: - 高德 API 配置可选项|
| [amap.pageSize](#pagesize) |WithPageSize 设置分页结果的每页数量（导出名为 amap.pageSize） 参数: - pageSize: 每页数量 返回值: - 高德 API 配置可选项|
| [amap.pocOpts](#pocopts) |WithLowhttpOptions 设置高德 API 客户端底层 HTTP 请求选项（导出名为 amap.pocOpts） 参数: - opts: 零个到多个 poc 请求选项函数 返回值: - 高德 API 配置可选项|
| [amap.radius](#radius) |WithRadius 设置周边搜索的半径（导出名为 amap.radius） 参数: - radius: 搜索半径（米） 返回值: - 高德 API 配置可选项|
| [amap.sortRule](#sortrule) |WithSortRule 设置搜索结果的排序规则（导出名为 amap.sortRule） 参数: - sortRule: 排序规则，如 distance/weight 返回值: - 高德 API 配置可选项|
| [amap.timeout](#timeout) |WithTimeout 设置 HTTP 请求超时时间（导出名为 amap.timeout） 参数: - timeout: 超时时间（time.Duration） 返回值: - 高德 API 配置可选项|
| [amap.type](#type) |WithType 设置类型参数（如距离计算的类型，导出名为 amap.type） 参数: - typ: 类型参数 返回值: - 高德 API 配置可选项|


## 函数定义
### GetBicyclingPlan

#### 详细描述
暂无描述

#### 定义

`GetBicyclingPlan(origin string, destination string, options ...AmapConfigOption) (*BicyclingResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |  |
| destination | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*BicyclingResult` |  |
| r2 | `error` |  |


### GetDistance

#### 详细描述
暂无描述

#### 定义

`GetDistance(origin string, destination string, options ...AmapConfigOption) (*DistanceResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |  |
| destination | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DistanceResult` |  |
| r2 | `error` |  |


### GetDrivingPlan

#### 详细描述
暂无描述

#### 定义

`GetDrivingPlan(origin string, destination string, options ...AmapConfigOption) (*DirectionResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |  |
| destination | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DirectionResponse` |  |
| r2 | `error` |  |


### GetGeocode

#### 详细描述
暂无描述

#### 定义

`GetGeocode(address string, options ...AmapConfigOption) ([]*GeocodeResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| address | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GeocodeResult` |  |
| r2 | `error` |  |


### GetIpLocation

#### 详细描述
IPLocation 根据 IP 地址定位其地理位置（ip 为空时定位请求方 IP，导出名为 amap.GetIpLocation）

参数:

  - ip: 待定位的 IP 地址，为空时定位请求方 IP

  - options: 可选项，需要 amap.apiKey 提供高德 API Key



返回值:

  - IP 地理位置结果

  - 错误信息




Example:

``````````````yak
// 需要有效的高德 API Key（示意性示例）
loc = amap.GetIpLocation("114.114.114.114", amap.apiKey("your-key"))~
dump(loc)
``````````````


#### 定义

`GetIpLocation(ip string, options ...AmapConfigOption) (*IPLocationResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` | 待定位的 IP 地址，为空时定位请求方 IP |
| options | `...AmapConfigOption` | 可选项，需要 amap.apiKey 提供高德 API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*IPLocationResultEx` | IP 地理位置结果 |
| r2 | `error` | 错误信息 |


### GetNearbyPOI

#### 详细描述
SearchNearbyPOI 基于坐标的周边兴趣点搜索（导出名为 amap.GetNearbyPOI）

参数:

  - location: 中心点坐标（如 &#34;116.481,39.990&#34;）

  - keywords: 搜索关键词

  - options: 可选项，需要 amap.apiKey 提供高德 API Key，可用 amap.radius 指定半径



返回值:

  - POI 搜索结果

  - 错误信息




Example:

``````````````yak
// 需要有效的高德 API Key（示意性示例）
pois = amap.GetNearbyPOI("116.481488,39.990464", "咖啡", amap.apiKey("your-key"), amap.radius(1000))~
dump(pois)
``````````````


#### 定义

`GetNearbyPOI(location string, keywords string, options ...AmapConfigOption) (*SearchPOIResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| location | `string` | 中心点坐标（如 &#34;116.481,39.990&#34;） |
| keywords | `string` | 搜索关键词 |
| options | `...AmapConfigOption` | 可选项，需要 amap.apiKey 提供高德 API Key，可用 amap.radius 指定半径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SearchPOIResultEx` | POI 搜索结果 |
| r2 | `error` | 错误信息 |


### GetPOI

#### 详细描述
SearchPOI 基于关键词搜索兴趣点（POI，导出名为 amap.GetPOI）

参数:

  - keywords: 搜索关键词

  - options: 可选项，需要 amap.apiKey 提供高德 API Key，可用 amap.city、amap.page、amap.pageSize



返回值:

  - POI 搜索结果

  - 错误信息




Example:

``````````````yak
// 需要有效的高德 API Key（示意性示例）
pois = amap.GetPOI("咖啡", amap.apiKey("your-key"), amap.city("北京"))~
dump(pois)
``````````````


#### 定义

`GetPOI(keywords string, options ...AmapConfigOption) (*SearchPOIResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `string` | 搜索关键词 |
| options | `...AmapConfigOption` | 可选项，需要 amap.apiKey 提供高德 API Key，可用 amap.city、amap.page、amap.pageSize |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SearchPOIResultEx` | POI 搜索结果 |
| r2 | `error` | 错误信息 |


### GetPOIDetail

#### 详细描述
GetPOIDetail 根据 POI ID 查询兴趣点详情（导出名为 amap.GetPOIDetail）

参数:

  - poiID: 兴趣点 ID

  - options: 可选项，需要 amap.apiKey 提供高德 API Key



返回值:

  - POI 详情结果

  - 错误信息




Example:

``````````````yak
// 需要有效的高德 API Key（示意性示例）
detail = amap.GetPOIDetail("B000A83M61", amap.apiKey("your-key"))~
dump(detail)
``````````````


#### 定义

`GetPOIDetail(poiID string, options ...AmapConfigOption) (*POIResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| poiID | `string` | 兴趣点 ID |
| options | `...AmapConfigOption` | 可选项，需要 amap.apiKey 提供高德 API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*POIResultEx` | POI 详情结果 |
| r2 | `error` | 错误信息 |


### GetReverseGeocode

#### 详细描述
暂无描述

#### 定义

`GetReverseGeocode(longitude float64, latitude float64, options ...AmapConfigOption) (*RegeoCodeResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| longitude | `float64` |  |
| latitude | `float64` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RegeoCodeResult` |  |
| r2 | `error` |  |


### GetTransitPlan

#### 详细描述
暂无描述

#### 定义

`GetTransitPlan(origin string, destination string, options ...AmapConfigOption) (*TransitResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |  |
| destination | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*TransitResponse` |  |
| r2 | `error` |  |


### GetWalkingPlan

#### 详细描述
暂无描述

#### 定义

`GetWalkingPlan(origin string, destination string, options ...AmapConfigOption) (*V5WalkingResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |  |
| destination | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*V5WalkingResponse` |  |
| r2 | `error` |  |


### GetWeather

#### 详细描述
暂无描述

#### 定义

`GetWeather(cityCode string, options ...AmapConfigOption) (*WeatherResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cityCode | `string` |  |
| options | `...AmapConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*WeatherResponse` |  |
| r2 | `error` |  |


### apiKey

#### 详细描述
WithApiKey 设置高德开放平台 API Key（导出名为 amap.apiKey）

参数:

  - apiKey: 高德开放平台申请的 API Key



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.apiKey("your-amap-api-key")
println(opt)
``````````````


#### 定义

`apiKey(apiKey string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| apiKey | `string` | 高德开放平台申请的 API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### baseURL

#### 详细描述
WithBaseURL 设置高德 API 的基础 URL（导出名为 amap.baseURL）

参数:

  - baseURL: API 基础地址



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.baseURL("https://restapi.amap.com")
println(opt)
``````````````


#### 定义

`baseURL(baseURL string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseURL | `string` | API 基础地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### city

#### 详细描述
WithCity 设置请求关联的城市（导出名为 amap.city）

参数:

  - city: 城市名或 citycode



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.city("北京")
println(opt)
``````````````


#### 定义

`city(city string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| city | `string` | 城市名或 citycode |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### extensions

#### 详细描述
WithExtensions 设置返回结果的详细程度（base 或 all，导出名为 amap.extensions）

参数:

  - extensions: 取值 base 或 all



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.extensions("all")
println(opt)
``````````````


#### 定义

`extensions(extensions string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extensions | `string` | 取值 base 或 all |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### geocodeFilter

#### 详细描述
WithGeocodeFilter 设置地理编码结果过滤器，用于从多个候选中选出一个（导出名为 amap.geocodeFilter）

参数:

  - filter: 过滤回调，输入候选地理编码结果，返回选中的结果



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.geocodeFilter(func(geocodes) { return geocodes[0] })
println(opt)
``````````````


#### 定义

`geocodeFilter(filter func(geocodes []*GeocodeResult) *GeocodeResult) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `func(geocodes []*GeocodeResult) *GeocodeResult` | 过滤回调，输入候选地理编码结果，返回选中的结果 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### page

#### 详细描述
WithPage 设置分页结果的页码（导出名为 amap.page）

参数:

  - page: 页码（从 1 开始）



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.page(1)
println(opt)
``````````````


#### 定义

`page(page int) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| page | `int` | 页码（从 1 开始） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### pageSize

#### 详细描述
WithPageSize 设置分页结果的每页数量（导出名为 amap.pageSize）

参数:

  - pageSize: 每页数量



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.pageSize(20)
println(opt)
``````````````


#### 定义

`pageSize(pageSize int) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pageSize | `int` | 每页数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### pocOpts

#### 详细描述
WithLowhttpOptions 设置高德 API 客户端底层 HTTP 请求选项（导出名为 amap.pocOpts）

参数:

  - opts: 零个到多个 poc 请求选项函数



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.pocOpts(poc.timeout(10))
println(opt)
``````````````


#### 定义

`pocOpts(opts ...poc.PocConfigOption) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...poc.PocConfigOption` | 零个到多个 poc 请求选项函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### radius

#### 详细描述
WithRadius 设置周边搜索的半径（导出名为 amap.radius）

参数:

  - radius: 搜索半径（米）



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.radius(1000)
println(opt)
``````````````


#### 定义

`radius(radius int) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| radius | `int` | 搜索半径（米） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### sortRule

#### 详细描述
WithSortRule 设置搜索结果的排序规则（导出名为 amap.sortRule）

参数:

  - sortRule: 排序规则，如 distance/weight



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.sortRule("distance")
println(opt)
``````````````


#### 定义

`sortRule(sortRule string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sortRule | `string` | 排序规则，如 distance/weight |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### timeout

#### 详细描述
WithTimeout 设置 HTTP 请求超时时间（导出名为 amap.timeout）

参数:

  - timeout: 超时时间（time.Duration）



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.timeout(10 * time.Second)
println(opt)
``````````````


#### 定义

`timeout(timeout time.Duration) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `time.Duration` | 超时时间（time.Duration） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


### type

#### 详细描述
WithType 设置类型参数（如距离计算的类型，导出名为 amap.type）

参数:

  - typ: 类型参数



返回值:

  - 高德 API 配置可选项




Example:

``````````````yak
opt = amap.type("1")
println(opt)
``````````````


#### 定义

`type(typ string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typ | `string` | 类型参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` | 高德 API 配置可选项 |


