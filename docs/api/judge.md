# judge

|函数名|函数描述/介绍|
|:------|:--------|
| [judge.CompareHTTPResponse](#comparehttpresponse) ||
| [judge.CompareRaw](#compareraw) ||
| [judge.NewDiscriminator](#newdiscriminator) ||


## 函数定义
### CompareHTTPResponse

#### 详细描述


#### 定义

`CompareHTTPResponse(rsp1 *http.Response, rsp2 *http.Response) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp1 | `*http.Response` |   |
| rsp2 | `*http.Response` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### CompareRaw

#### 详细描述


#### 定义

`CompareRaw(rsp1 []byte, rsp2 []byte) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp1 | `[]byte` |   |
| rsp2 | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### NewDiscriminator

#### 详细描述


#### 定义

`NewDiscriminator(origin []byte) *Discriminator`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Discriminator` |   |


