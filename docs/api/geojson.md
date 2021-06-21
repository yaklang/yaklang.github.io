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



#### 定义：

`func (v1 ...*geojson.Feature) return(*geojson.FeatureCollection) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []*geojson.Feature |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *geojson.FeatureCollection |   |


### geojson.NewFeatureCollection



#### 定义：

`func () return(*geojson.FeatureCollection) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *geojson.FeatureCollection |   |


### geojson.WithName



#### 定义：

`func (v1: *geojson.Feature, v2: string) return(*geojson.Feature) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | *geojson.Feature |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *geojson.Feature |   |


### geojson.WithNameValue



#### 定义：

`func (v1: *geojson.Feature, v2: string, v3: float64) return(*geojson.Feature) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | *geojson.Feature |   |
| v2 | string |   |
| v3 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *geojson.Feature |   |


### geojson.WithProperty



#### 定义：

`func (v1: *geojson.Feature, v2: string, v3: float64) return(*geojson.Feature) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | *geojson.Feature |   |
| v2 | string |   |
| v3 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *geojson.Feature |   |


### geojson.WithValue



#### 定义：

`func (v1: *geojson.Feature, v2: float64) return(*geojson.Feature) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | *geojson.Feature |   |
| v2 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *geojson.Feature |   |





