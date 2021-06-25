# geojson


|成员函数|函数描述/介绍|
|:------|:--------|
 | [geojson.FeaturesToCollection](#geojsonfeaturestocollection) |  |
 | [geojson.NewFeatureCollection](#geojsonnewfeaturecollection) |  |
 | [geojson.WithName](#geojsonwithname) |  |
 | [geojson.WithNameValue](#geojsonwithnamevalue) |  |
 | [geojson.WithProperty](#geojsonwithproperty) |  |
 | [geojson.WithValue](#geojsonwithvalue) |  |




 



## 函数定义

### geojson.FeaturesToCollection



#### 详细描述



#### 定义：

`func geojson.FeaturesToCollection(v1 ...*geojson.Feature) return (r0: *geojson.FeatureCollection)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...*geojson.Feature` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geojson.FeatureCollection` |   |


 
### geojson.NewFeatureCollection



#### 详细描述



#### 定义：

`func geojson.NewFeatureCollection() return (r0: *geojson.FeatureCollection)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geojson.FeatureCollection` |   |


 
### geojson.WithName



#### 详细描述



#### 定义：

`func geojson.WithName(v1: *geojson.Feature, v2: string) return (r0: *geojson.Feature)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*geojson.Feature` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geojson.Feature` |   |


 
### geojson.WithNameValue



#### 详细描述



#### 定义：

`func geojson.WithNameValue(v1: *geojson.Feature, v2: string, v3: float64) return (r0: *geojson.Feature)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*geojson.Feature` |   |
| v2 | `string` |   |
| v3 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geojson.Feature` |   |


 
### geojson.WithProperty



#### 详细描述



#### 定义：

`func geojson.WithProperty(v1: *geojson.Feature, v2: string, v3: float64) return (r0: *geojson.Feature)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*geojson.Feature` |   |
| v2 | `string` |   |
| v3 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geojson.Feature` |   |


 
### geojson.WithValue



#### 详细描述



#### 定义：

`func geojson.WithValue(v1: *geojson.Feature, v2: float64) return (r0: *geojson.Feature)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*geojson.Feature` |   |
| v2 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geojson.Feature` |   |


 


