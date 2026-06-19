# fp

|函数名|函数描述/介绍|
|:------|:--------|
| [fp.GetAllFingerprint](#getallfingerprint) |GetAllFingerprint 从本地指纹规则库中读取全部指纹规则，并以 channel 形式逐条返回 该函数依赖本地规则数据库，规则数量取决于已加载的指纹库 返回值: - 一个只读 channel，逐条产出 *schema.GeneralRule 指纹规则|
| [fp.MatchRsp](#matchrsp) |MatchRsp 使用本地全部指纹规则库匹配给定的响应报文，返回所有命中的产品名称(CPE Product) 该函数依赖本地规则数据库 参数: - rsp: 待匹配的原始响应报文(字节数组) 返回值: - 命中的产品名称字符串切片，未命中时为空切片|
| [fp.MatchRspByRule](#matchrspbyrule) |MatchRspByRule 使用单条指纹规则匹配给定的响应报文，命中返回 true 参数: - rsp: 待匹配的原始响应报文(字节数组) - rule: 指纹规则，可以是 *schema.GeneralRule 对象，或形如 `body=&#34;xxx&#34;` 的匹配表达式字符串 返回值: - 是否命中该...|


## 函数定义
### GetAllFingerprint

#### 详细描述
GetAllFingerprint 从本地指纹规则库中读取全部指纹规则，并以 channel 形式逐条返回

该函数依赖本地规则数据库，规则数量取决于已加载的指纹库

返回值:

  - 一个只读 channel，逐条产出 *schema.GeneralRule 指纹规则




Example:

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


#### 定义

`GetAllFingerprint() chan *schema.GeneralRule`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.GeneralRule` | 一个只读 channel，逐条产出 *schema.GeneralRule 指纹规则 |


### MatchRsp

#### 详细描述
MatchRsp 使用本地全部指纹规则库匹配给定的响应报文，返回所有命中的产品名称(CPE Product)

该函数依赖本地规则数据库

参数:

  - rsp: 待匹配的原始响应报文(字节数组)



返回值:

  - 命中的产品名称字符串切片，未命中时为空切片




Example:

``````````````yak
// 该示例为示意性用法：用本地指纹库匹配响应报文
rsp = "HTTP/1.1 200 OK\r\nServer: nginx\r\n\r\n<html>welcome</html>"
products = fp.MatchRsp([]byte(rsp))
println("matched products:", len(products))
``````````````


#### 定义

`MatchRsp(rsp []byte) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` | 待匹配的原始响应报文(字节数组) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 命中的产品名称字符串切片，未命中时为空切片 |


### MatchRspByRule

#### 详细描述
MatchRspByRule 使用单条指纹规则匹配给定的响应报文，命中返回 true

参数:

  - rsp: 待匹配的原始响应报文(字节数组)

  - rule: 指纹规则，可以是 *schema.GeneralRule 对象，或形如 `body=&#34;xxx&#34;` 的匹配表达式字符串



返回值:

  - 是否命中该指纹规则




Example:

``````````````yak
rsp = "HTTP/1.1 200 OK\r\nServer: nginx\r\n\r\n<html>welcome to nginx</html>"
// 用 body 匹配表达式判断响应体是否包含指定内容
hit = fp.MatchRspByRule([]byte(rsp), `body="welcome to nginx"`)
println(hit)   // OUT: true
assert hit == true, "rule should match the response body"
miss = fp.MatchRspByRule([]byte(rsp), `body="this-should-not-appear-xyz"`)
assert miss == false, "rule should not match absent content"
``````````````


#### 定义

`MatchRspByRule(rsp []byte, rule any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` | 待匹配的原始响应报文(字节数组) |
| rule | `any` | 指纹规则，可以是 *schema.GeneralRule 对象，或形如 `body=&#34;xxx&#34;` 的匹配表达式字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否命中该指纹规则 |


