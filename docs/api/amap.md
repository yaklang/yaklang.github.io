# amap

|函数名|函数描述/介绍|
|:------|:--------|
| [amap.GetBicyclingPlan](#getbicyclingplan) ||
| [amap.GetDistance](#getdistance) ||
| [amap.GetDrivingPlan](#getdrivingplan) ||
| [amap.GetGeocode](#getgeocode) ||
| [amap.GetIpLocation](#getiplocation) |IPLocation locates an IP address or the requester&amp;#39;s IP if ip is empty |
| [amap.GetNearbyPOI](#getnearbypoi) |SearchNearbyPOI provides simplified location-based POI search |
| [amap.GetPOI](#getpoi) |SearchPOI provides simplified keyword-based POI search |
| [amap.GetPOIDetail](#getpoidetail) |GetPOIDetail provides simplified POI detail lookup by ID |
| [amap.GetReverseGeocode](#getreversegeocode) ||
| [amap.GetTransitPlan](#gettransitplan) ||
| [amap.GetWalkingPlan](#getwalkingplan) ||
| [amap.GetWeather](#getweather) ||
| [amap.apiKey](#apikey) |WithApiKey sets the API key in the config. |
| [amap.baseURL](#baseurl) |WithBaseURL sets the base URL in the config. |
| [amap.city](#city) |WithCity sets the city for API requests |
| [amap.extensions](#extensions) |WithExtensions sets the extensions parameter (base or all) |
| [amap.geocodeFilter](#geocodefilter) |WithGeocodeFilter sets the geocode filter for the Amap API client. |
| [amap.page](#page) |WithPage sets the page number for paginated results |
| [amap.pageSize](#pagesize) |WithPageSize sets the page size for paginated results |
| [amap.pocOpts](#pocopts) |WithLowhttpOptions sets the lowhttp options for the Amap API client. |
| [amap.radius](#radius) |WithRadius sets the radius for nearby searches |
| [amap.sortRule](#sortrule) |WithSortRule sets the sort rule for search results |
| [amap.timeout](#timeout) |WithTimeout sets the HTTP client timeout in the config. |
| [amap.type](#type) |WithType sets the type parameter for distance calculations |


## 函数定义
### GetBicyclingPlan

#### 详细描述


#### 定义

`GetBicyclingPlan(origin string, destination string, options ...AmapConfigOption) (*BicyclingResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| destination | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*BicyclingResult` |   |
| r2 | `error` |   |


### GetDistance

#### 详细描述


#### 定义

`GetDistance(origin string, destination string, options ...AmapConfigOption) (*DistanceResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| destination | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DistanceResult` |   |
| r2 | `error` |   |


### GetDrivingPlan

#### 详细描述


#### 定义

`GetDrivingPlan(origin string, destination string, options ...AmapConfigOption) (*DirectionResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| destination | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DirectionResponse` |   |
| r2 | `error` |   |


### GetGeocode

#### 详细描述


#### 定义

`GetGeocode(address string, options ...AmapConfigOption) ([]*GeocodeResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| address | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GeocodeResult` |   |
| r2 | `error` |   |


### GetIpLocation

#### 详细描述
IPLocation locates an IP address or the requester&#39;s IP if ip is empty


#### 定义

`GetIpLocation(ip string, options ...AmapConfigOption) (*IPLocationResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*IPLocationResultEx` |   |
| r2 | `error` |   |


### GetNearbyPOI

#### 详细描述
SearchNearbyPOI provides simplified location-based POI search


#### 定义

`GetNearbyPOI(location string, keywords string, options ...AmapConfigOption) (*SearchPOIResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| location | `string` |   |
| keywords | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SearchPOIResultEx` |   |
| r2 | `error` |   |


### GetPOI

#### 详细描述
SearchPOI provides simplified keyword-based POI search


#### 定义

`GetPOI(keywords string, options ...AmapConfigOption) (*SearchPOIResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SearchPOIResultEx` |   |
| r2 | `error` |   |


### GetPOIDetail

#### 详细描述
GetPOIDetail provides simplified POI detail lookup by ID


#### 定义

`GetPOIDetail(poiID string, options ...AmapConfigOption) (*POIResultEx, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| poiID | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*POIResultEx` |   |
| r2 | `error` |   |


### GetReverseGeocode

#### 详细描述


#### 定义

`GetReverseGeocode(longitude float64, latitude float64, options ...AmapConfigOption) (*RegeoCodeResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| longitude | `float64` |   |
| latitude | `float64` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RegeoCodeResult` |   |
| r2 | `error` |   |


### GetTransitPlan

#### 详细描述


#### 定义

`GetTransitPlan(origin string, destination string, options ...AmapConfigOption) (*TransitResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| destination | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*TransitResponse` |   |
| r2 | `error` |   |


### GetWalkingPlan

#### 详细描述


#### 定义

`GetWalkingPlan(origin string, destination string, options ...AmapConfigOption) (*V5WalkingResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| destination | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*V5WalkingResponse` |   |
| r2 | `error` |   |


### GetWeather

#### 详细描述


#### 定义

`GetWeather(cityCode string, options ...AmapConfigOption) (*WeatherResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cityCode | `string` |   |
| options | `...AmapConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*WeatherResponse` |   |
| r2 | `error` |   |


### apiKey

#### 详细描述
WithApiKey sets the API key in the config.


#### 定义

`apiKey(apiKey string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| apiKey | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### baseURL

#### 详细描述
WithBaseURL sets the base URL in the config.


#### 定义

`baseURL(baseURL string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseURL | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### city

#### 详细描述
WithCity sets the city for API requests


#### 定义

`city(city string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| city | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### extensions

#### 详细描述
WithExtensions sets the extensions parameter (base or all)


#### 定义

`extensions(extensions string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extensions | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### geocodeFilter

#### 详细描述
WithGeocodeFilter sets the geocode filter for the Amap API client.


#### 定义

`geocodeFilter(filter func(geocodes []*GeocodeResult) *GeocodeResult) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `func(geocodes []*GeocodeResult) *GeocodeResult` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### page

#### 详细描述
WithPage sets the page number for paginated results


#### 定义

`page(page int) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| page | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### pageSize

#### 详细描述
WithPageSize sets the page size for paginated results


#### 定义

`pageSize(pageSize int) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pageSize | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### pocOpts

#### 详细描述
WithLowhttpOptions sets the lowhttp options for the Amap API client.


#### 定义

`pocOpts(opts ...poc.PocConfigOption) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...poc.PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### radius

#### 详细描述
WithRadius sets the radius for nearby searches


#### 定义

`radius(radius int) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| radius | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### sortRule

#### 详细描述
WithSortRule sets the sort rule for search results


#### 定义

`sortRule(sortRule string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sortRule | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### timeout

#### 详细描述
WithTimeout sets the HTTP client timeout in the config.


#### 定义

`timeout(timeout time.Duration) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


### type

#### 详细描述
WithType sets the type parameter for distance calculations


#### 定义

`type(typ string) AmapConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typ | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AmapConfigOption` |   |


