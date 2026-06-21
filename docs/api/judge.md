# judge {#library-judge}

`judge` 库用于比较两次 HTTP 响应的相似度，量化差异程度，常用于布尔盲注、差异判定、WAF 拦截识别等"基于响应变化"的检测逻辑。

典型使用场景：

- 相似度比较：`judge.CompareHTTPResponse` 比较两个响应对象，`judge.CompareRaw` 比较两段原始响应字节，返回相似度分值。
- 判别器：`judge.NewDiscriminator(origin)` 以基准响应创建判别器，用于持续判定后续响应是否"显著不同"。

与相邻库的关系：`judge` 是检测判定工具，常与 `fuzz`/`poc`（发包）配合，把"响应差异"转化为漏洞是否触发的判断依据。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [judge.CompareHTTPResponse](#comparehttpresponse) | `rsp1 *http.Response, rsp2 *http.Response` | `float64` | 比较两个 http.Response 对象的相似度，返回 0 到 1 之间的相似度分值 |
| [judge.CompareRaw](#compareraw) | `rsp1 []byte, rsp2 []byte` | `float64` | 比较两个原始 HTTP 响应报文的相似度，返回 0 到 1 之间的相似度分值 |
| [judge.NewDiscriminator](#newdiscriminator) | `origin []byte` | `*Discriminator` | 基于一个原始响应样本创建一个判别器，用于判断其它响应是否与样本相似 |

## 函数详情

### CompareHTTPResponse {#comparehttpresponse}

```go
CompareHTTPResponse(rsp1 *http.Response, rsp2 *http.Response) float64
```

比较两个 http.Response 对象的相似度，返回 0 到 1 之间的相似度分值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rsp1 | `*http.Response` | 第一个 http.Response 对象 |
| rsp2 | `*http.Response` | 第二个 http.Response 对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 相似度分值，1 表示完全相同，0 表示完全不同 |

**示例**

``````````````yak
// 比较两个 http.Response 对象的相似度(需先获得 Response 对象，作示意)
score = judge.CompareHTTPResponse(rsp1, rsp2)
println(score)
``````````````

---

### CompareRaw {#compareraw}

```go
CompareRaw(rsp1 []byte, rsp2 []byte) float64
```

比较两个原始 HTTP 响应报文的相似度，返回 0 到 1 之间的相似度分值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rsp1 | `[]byte` | 第一个原始 HTTP 响应报文 |
| rsp2 | `[]byte` | 第二个原始 HTTP 响应报文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 相似度分值，1 表示完全相同，0 表示完全不同 |

**示例**

``````````````yak
// VARS: 比较两个完全相同的响应
score = judge.CompareRaw("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello", "HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello")
// STDOUT: 打印相似度
println(score)   // OUT: 1
// assert: 完全相同的响应相似度为 1
assert score == 1, "identical responses should score 1"
``````````````

---

### NewDiscriminator {#newdiscriminator}

```go
NewDiscriminator(origin []byte) *Discriminator
```

基于一个原始响应样本创建一个判别器，用于判断其它响应是否与样本相似

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `[]byte` | 作为正样本的原始 HTTP 响应报文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Discriminator` | 判别器对象，可调用 IsNegative 等方法进行相似度判别 |

**示例**

``````````````yak
// VARS: 基于样本创建判别器
d = judge.NewDiscriminator("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello")
// assert: 与负样本(空)相比不相似，IsNegative 返回 false
assert d.IsNegative("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello") == false, "discriminator should be constructed and callable"
``````````````

---

