# judge

|函数名|函数描述/介绍|
|:------|:--------|
| [judge.CompareHTTPResponse](#comparehttpresponse) |CompareHTTPResponse 比较两个 http.Response 对象的相似度，返回 0 到 1 之间的相似度分值 参数: - rsp1: 第一个 http.Response 对象 - rsp2: 第二个 http.Response 对象 返回值: - 相似度分值，1 表示完全相同，0 ...|
| [judge.CompareRaw](#compareraw) |CompareRaw 比较两个原始 HTTP 响应报文的相似度，返回 0 到 1 之间的相似度分值 参数: - rsp1: 第一个原始 HTTP 响应报文 - rsp2: 第二个原始 HTTP 响应报文 返回值: - 相似度分值，1 表示完全相同，0 表示完全不同|
| [judge.NewDiscriminator](#newdiscriminator) |NewDiscriminator 基于一个原始响应样本创建一个判别器，用于判断其它响应是否与样本相似 参数: - origin: 作为正样本的原始 HTTP 响应报文 返回值: - 判别器对象，可调用 IsNegative 等方法进行相似度判别|


## 函数定义
### CompareHTTPResponse

#### 详细描述
CompareHTTPResponse 比较两个 http.Response 对象的相似度，返回 0 到 1 之间的相似度分值

参数:

  - rsp1: 第一个 http.Response 对象

  - rsp2: 第二个 http.Response 对象



返回值:

  - 相似度分值，1 表示完全相同，0 表示完全不同




Example:

``````````````yak
// 比较两个 http.Response 对象的相似度(需先获得 Response 对象，作示意)
score = judge.CompareHTTPResponse(rsp1, rsp2)
println(score)
``````````````


#### 定义

`CompareHTTPResponse(rsp1 *http.Response, rsp2 *http.Response) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp1 | `*http.Response` | 第一个 http.Response 对象 |
| rsp2 | `*http.Response` | 第二个 http.Response 对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 相似度分值，1 表示完全相同，0 表示完全不同 |


### CompareRaw

#### 详细描述
CompareRaw 比较两个原始 HTTP 响应报文的相似度，返回 0 到 1 之间的相似度分值

参数:

  - rsp1: 第一个原始 HTTP 响应报文

  - rsp2: 第二个原始 HTTP 响应报文



返回值:

  - 相似度分值，1 表示完全相同，0 表示完全不同




Example:

``````````````yak
// VARS: 比较两个完全相同的响应
score = judge.CompareRaw("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello", "HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello")
// STDOUT: 打印相似度
println(score)   // OUT: 1
// assert: 完全相同的响应相似度为 1
assert score == 1, "identical responses should score 1"
``````````````


#### 定义

`CompareRaw(rsp1 []byte, rsp2 []byte) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp1 | `[]byte` | 第一个原始 HTTP 响应报文 |
| rsp2 | `[]byte` | 第二个原始 HTTP 响应报文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 相似度分值，1 表示完全相同，0 表示完全不同 |


### NewDiscriminator

#### 详细描述
NewDiscriminator 基于一个原始响应样本创建一个判别器，用于判断其它响应是否与样本相似

参数:

  - origin: 作为正样本的原始 HTTP 响应报文



返回值:

  - 判别器对象，可调用 IsNegative 等方法进行相似度判别




Example:

``````````````yak
// VARS: 基于样本创建判别器
d = judge.NewDiscriminator("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello")
// assert: 与负样本(空)相比不相似，IsNegative 返回 false
assert d.IsNegative("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello") == false, "discriminator should be constructed and callable"
``````````````


#### 定义

`NewDiscriminator(origin []byte) *Discriminator`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `[]byte` | 作为正样本的原始 HTTP 响应报文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Discriminator` | 判别器对象，可调用 IsNegative 等方法进行相似度判别 |


