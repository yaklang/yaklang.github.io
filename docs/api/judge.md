# judge


|成员函数|函数描述/介绍|
|:------|:--------|
 | [judge.CompareHTTPResponse](#judgecomparehttpresponse) |  |
 | [judge.CompareRaw](#judgecompareraw) |  |
 | [judge.NewDiscriminator](#judgenewdiscriminator) |  |




 



## 函数定义

### judge.CompareHTTPResponse



#### 详细描述



#### 定义：

`CompareHTTPResponse(rsp1 *http.Response, rsp2 *http.Response) float64`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*http.Response` |   |
| v2 | `*http.Response` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### judge.CompareRaw



#### 详细描述



#### 定义：

`CompareRaw(rsp1 []byte, rsp2 []byte) float64`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### judge.NewDiscriminator



#### 详细描述



#### 定义：

`NewDiscriminator([]uint8) *comparer.Discriminator`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*comparer.Discriminator` |   |


 


