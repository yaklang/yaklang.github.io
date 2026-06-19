# ja3

|函数名|函数描述/介绍|
|:------|:--------|
| [ja3.GetTransportByClientHelloSpec](#gettransportbyclienthellospec) |GetTransportByClientHelloSpec 根据给定的 ClientHelloSpec 构造一个使用该 TLS 指纹的 http.Transport 配合 ParseJA3ToClientHelloSpec 可让 HTTP 请求伪装成特定客户端的 TLS 指纹 参数: - spec:...|
| [ja3.ParseJA3](#parseja3) |ParseJA3 解析 JA3 全字符串(由 5 个逗号分隔字段组成)，返回结构化的 JA3 指纹对象 JA3 用于标识 TLS 客户端，字段依次为 TLS 版本、加密套件、扩展类型、椭圆曲线、椭圆曲线点格式 参数: - ja3FullString: JA3 全字符串，形如 &#34;771,4865-48...|
| [ja3.ParseJA3S](#parseja3s) |ParseJA3S 解析 JA3S 全字符串(由 3 个逗号分隔字段组成)，返回结构化的 JA3S 指纹对象 JA3S 用于标识 TLS 服务端，字段依次为 TLS 版本、选定加密套件、扩展类型 参数: - ja3sFullString: JA3S 全字符串，形如 &#34;771,4865,0-23&#34; 返...|
| [ja3.ParseJA3ToClientHelloSpec](#parseja3toclienthellospec) |ParseJA3ToClientHelloSpec 将 JA3 全字符串转换为 uTLS 的 ClientHelloSpec，用于模拟特定 TLS 客户端指纹 参数: - str: JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34; 返回值:...|


## 函数定义
### GetTransportByClientHelloSpec

#### 详细描述
GetTransportByClientHelloSpec 根据给定的 ClientHelloSpec 构造一个使用该 TLS 指纹的 http.Transport

配合 ParseJA3ToClientHelloSpec 可让 HTTP 请求伪装成特定客户端的 TLS 指纹

参数:

  - spec: TLS ClientHelloSpec，通常由 ja3.ParseJA3ToClientHelloSpec 生成



返回值:

  - 使用指定 TLS 指纹的 *http.Transport




Example:

``````````````yak
// 该示例为示意性用法：用 JA3 指纹构造可发起真实请求的 transport
spec = ja3.ParseJA3ToClientHelloSpec("771,4865-4866-4867,0-23-65281,29-23-24,0")~
transport = ja3.GetTransportByClientHelloSpec(spec)
println(transport != nil)
``````````````


#### 定义

`GetTransportByClientHelloSpec(spec *tls.ClientHelloSpec) *http.Transport`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| spec | `*tls.ClientHelloSpec` | TLS ClientHelloSpec，通常由 ja3.ParseJA3ToClientHelloSpec 生成 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Transport` | 使用指定 TLS 指纹的 *http.Transport |


### ParseJA3

#### 详细描述
ParseJA3 解析 JA3 全字符串(由 5 个逗号分隔字段组成)，返回结构化的 JA3 指纹对象

JA3 用于标识 TLS 客户端，字段依次为 TLS 版本、加密套件、扩展类型、椭圆曲线、椭圆曲线点格式

参数:

  - ja3FullString: JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34;



返回值:

  - 解析得到的 JA3 指纹对象

  - 错误信息，字段数量不为 5 时返回错误




Example:

``````````````yak
ja3str = "771,4865-4866-4867,0-23-65281,29-23-24,0"
obj, err = ja3.ParseJA3(ja3str)
assert err == nil, "valid ja3 string should parse"
// 加密套件字段含 3 个套件
println(len(obj.CipherSuites))   // OUT: 3
assert len(obj.CipherSuites) == 3, "should parse three cipher suites"
``````````````


#### 定义

`ParseJA3(ja3FullString string) (*JA3, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ja3FullString | `string` | JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JA3` | 解析得到的 JA3 指纹对象 |
| r2 | `error` | 错误信息，字段数量不为 5 时返回错误 |


### ParseJA3S

#### 详细描述
ParseJA3S 解析 JA3S 全字符串(由 3 个逗号分隔字段组成)，返回结构化的 JA3S 指纹对象

JA3S 用于标识 TLS 服务端，字段依次为 TLS 版本、选定加密套件、扩展类型

参数:

  - ja3sFullString: JA3S 全字符串，形如 &#34;771,4865,0-23&#34;



返回值:

  - 解析得到的 JA3S 指纹对象

  - 错误信息，字段数量不为 3 时返回错误




Example:

``````````````yak
ja3sstr = "771,4865,0-23"
obj, err = ja3.ParseJA3S(ja3sstr)
assert err == nil, "valid ja3s string should parse"
// 扩展类型字段含 2 个扩展
println(len(obj.ExtensionsTypes))   // OUT: 2
assert len(obj.ExtensionsTypes) == 2, "should parse two extension types"
``````````````


#### 定义

`ParseJA3S(ja3sFullString string) (*JA3S, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ja3sFullString | `string` | JA3S 全字符串，形如 &#34;771,4865,0-23&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JA3S` | 解析得到的 JA3S 指纹对象 |
| r2 | `error` | 错误信息，字段数量不为 3 时返回错误 |


### ParseJA3ToClientHelloSpec

#### 详细描述
ParseJA3ToClientHelloSpec 将 JA3 全字符串转换为 uTLS 的 ClientHelloSpec，用于模拟特定 TLS 客户端指纹

参数:

  - str: JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34;



返回值:

  - 构造出的 *tls.ClientHelloSpec，可用于自定义 TLS 握手

  - 错误信息，解析失败时非 nil




Example:

``````````````yak
ja3str = "771,4865-4866-4867,0-23-65281,29-23-24,0"
spec, err = ja3.ParseJA3ToClientHelloSpec(ja3str)
assert err == nil, "should build client hello spec"
assert spec != nil, "spec should not be nil"
``````````````


#### 定义

`ParseJA3ToClientHelloSpec(str string) (*tls.ClientHelloSpec, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` | JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tls.ClientHelloSpec` | 构造出的 *tls.ClientHelloSpec，可用于自定义 TLS 握手 |
| r2 | `error` | 错误信息，解析失败时非 nil |


