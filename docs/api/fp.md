# fp {#library-fp}

`fp` 库提供指纹（fingerprint）规则匹配能力，对响应数据应用内置或自定义规则，识别其对应的产品/组件。它是 `servicescan` 指纹识别背后的规则引擎入口。

典型使用场景：

- 规则匹配：`fp.MatchRsp(rsp)` 用全部规则匹配响应并返回命中的指纹，`fp.MatchRspByRule(rsp, rule)` 用指定规则判断是否命中。
- 规则浏览：`fp.GetAllFingerprint` 流式列出全部内置指纹规则。

与相邻库的关系：`fp` 是指纹规则层，`servicescan` 在其之上做端到端的服务识别；识别出的产品/版本可交给 `cve`/`sca` 做漏洞关联。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [fp.GetAllFingerprint](#getallfingerprint) | - | `chan *schema.GeneralRule` | 从本地指纹规则库中读取全部指纹规则，并以 channel 形式逐条返回 |
| [fp.MatchRsp](#matchrsp) | `rsp []byte` | `[]string` | 使用本地全部指纹规则库匹配给定的响应报文，返回所有命中的产品名称(CPE Product) |
| [fp.MatchRspByRule](#matchrspbyrule) | `rsp []byte, rule any` | `bool` | 使用单条指纹规则匹配给定的响应报文，命中返回 true |

## 函数详情

### GetAllFingerprint {#getallfingerprint}

```go
GetAllFingerprint() chan *schema.GeneralRule
```

从本地指纹规则库中读取全部指纹规则，并以 channel 形式逐条返回

该函数依赖本地规则数据库，规则数量取决于已加载的指纹库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.GeneralRule` | 一个只读 channel，逐条产出 *schema.GeneralRule 指纹规则 |

**示例**

``````````````yak
// 该示例为示意性用法：遍历本地指纹规则库
count = 0

	for rule = range fp.GetAllFingerprint() {
	    count++
	    if count >= 5 {
	        break
	    }
	}

println("read rules:", count)
``````````````

---

### MatchRsp {#matchrsp}

```go
MatchRsp(rsp []byte) []string
```

使用本地全部指纹规则库匹配给定的响应报文，返回所有命中的产品名称(CPE Product)

该函数依赖本地规则数据库

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rsp | `[]byte` | 待匹配的原始响应报文(字节数组) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 命中的产品名称字符串切片，未命中时为空切片 |

**示例**

``````````````yak
// 该示例为示意性用法：用本地指纹库匹配响应报文
rsp = "HTTP/1.1 200 OK\r\nServer: nginx\r\n\r\n<html>welcome</html>"
products = fp.MatchRsp([]byte(rsp))
println("matched products:", len(products))
``````````````

---

### MatchRspByRule {#matchrspbyrule}

```go
MatchRspByRule(rsp []byte, rule any) bool
```

使用单条指纹规则匹配给定的响应报文，命中返回 true

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rsp | `[]byte` | 待匹配的原始响应报文(字节数组) |
| rule | `any` | 指纹规则，可以是 *schema.GeneralRule 对象，或形如 `body=&#34;xxx&#34;` 的匹配表达式字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否命中该指纹规则 |

**示例**

``````````````yak
rsp = "HTTP/1.1 200 OK\r\nServer: nginx\r\n\r\n<html>welcome to nginx</html>"
// 用 body 匹配表达式判断响应体是否包含指定内容
hit = fp.MatchRspByRule([]byte(rsp), `body="welcome to nginx"`)
println(hit)   // OUT: true
assert hit == true, "rule should match the response body"
miss = fp.MatchRspByRule([]byte(rsp), `body="this-should-not-appear-xyz"`)
assert miss == false, "rule should not match absent content"
``````````````

---

