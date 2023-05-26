# pcapx


|成员函数|函数描述/介绍|
|:------|:--------|
 | [pcapx.GetStatistics](#pcapxgetstatistics) |  |
 | [pcapx.InjectChaosTraffic](#pcapxinjectchaostraffic) |  |
 | [pcapx.InjectHTTPRequest](#pcapxinjecthttprequest) |  |
 | [pcapx.InjectIP](#pcapxinjectip) |  |
 | [pcapx.InjectRaw](#pcapxinjectraw) |  |
 | [pcapx.InjectTCP](#pcapxinjecttcp) |  |




 



## 函数定义

### pcapx.GetStatistics



#### 详细描述



#### 定义：

`func pcapx.GetStatistics() return (r0: *pcapx.Statistics)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*pcapx.Statistics` |   |


 
### pcapx.InjectChaosTraffic



#### 详细描述



#### 定义：

``func pcapx.InjectChaosTraffic(v1: *chaosmaker.ChaosTraffic, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*chaosmaker.ChaosTraffic` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectHTTPRequest



#### 详细描述



#### 定义：

``func pcapx.InjectHTTPRequest(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectIP



#### 详细描述



#### 定义：

``func pcapx.InjectIP(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectRaw



#### 详细描述



#### 定义：

``func pcapx.InjectRaw(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectTCP



#### 详细描述



#### 定义：

``func pcapx.InjectTCP(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 


