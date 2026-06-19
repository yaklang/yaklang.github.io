# csrf

|函数名|函数描述/介绍|
|:------|:--------|
| [csrf.Generate](#generate) |Generate 根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC) HTML 页面 在 yak 中通过 csrf.Generate 调用，自动从请求中提取 URL、方法与表单参数构造自动提交表单 参数: - raw: 原始 HTTP 请求报文，可以是字符串或字节数组 - o...|
| [csrf.autoSubmit](#autosubmit) |autoSubmit 设置是否在生成的 HTML 中注入自动提交脚本，使页面加载后自动提交表单 在 yak 中通过 csrf.autoSubmit 调用 参数: - b: 是否注入自动提交脚本 返回值: - 一个 csrf.Generate 可接收的配置选项|
| [csrf.https](#https) |https 设置目标请求报文是否使用 HTTPS，从而决定生成 POC 中目标 URL 的协议 在 yak 中通过 csrf.https 调用 参数: - b: 是否使用 HTTPS 协议 返回值: - 一个 csrf.Generate 可接收的配置选项|
| [csrf.multipartDefaultValue](#multipartdefaultvalue) |multipartDefaultValue 设置请求报文是否按 multipart/form-data 类型处理 当设置为 true 时，会改用基于 JavaScript(XHR) 提交的 POC 模板 在 yak 中通过 csrf.multipartDefaultValue 调用 参数: - b:...|


## 函数定义
### Generate

#### 详细描述
Generate 根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC) HTML 页面

在 yak 中通过 csrf.Generate 调用，自动从请求中提取 URL、方法与表单参数构造自动提交表单

参数:

  - raw: 原始 HTTP 请求报文，可以是字符串或字节数组

  - opts: 可选配置项，如 csrf.https、csrf.multipartDefaultValue、csrf.autoSubmit



返回值:

  - 生成的 CSRF POC HTML 字符串

  - 错误信息，成功时为 nil




Example:

``````````````yak
raw = "POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\nname=admin&age=2"
poc, err = csrf.Generate(raw)
assert err == nil, "generate should succeed"
// 生成的 HTML 中应包含目标地址与表单字段
assert str.Contains(poc, `action="http://example.com/submit"`), "poc should target the request url"
assert str.Contains(poc, `name="name"`), "poc should carry the form field"
``````````````


#### 定义

`Generate(raw any, opts ...csrfConfig) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 原始 HTTP 请求报文，可以是字符串或字节数组 |
| opts | `...csrfConfig` | 可选配置项，如 csrf.https、csrf.multipartDefaultValue、csrf.autoSubmit |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的 CSRF POC HTML 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |


### autoSubmit

#### 详细描述
autoSubmit 设置是否在生成的 HTML 中注入自动提交脚本，使页面加载后自动提交表单

在 yak 中通过 csrf.autoSubmit 调用

参数:

  - b: 是否注入自动提交脚本



返回值:

  - 一个 csrf.Generate 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：生成加载后自动提交的 CSRF POC
raw = "POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\nname=admin"
poc = csrf.Generate(raw, csrf.autoSubmit(true))~
``````````````


#### 定义

`autoSubmit(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否注入自动提交脚本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` | 一个 csrf.Generate 可接收的配置选项 |


### https

#### 详细描述
https 设置目标请求报文是否使用 HTTPS，从而决定生成 POC 中目标 URL 的协议

在 yak 中通过 csrf.https 调用

参数:

  - b: 是否使用 HTTPS 协议



返回值:

  - 一个 csrf.Generate 可接收的配置选项




Example:

``````````````yak
raw = "POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\nname=admin"
// 启用 https 后，生成的目标地址应为 https 协议
poc = csrf.Generate(raw, csrf.https(true))~
assert str.Contains(poc, "https://example.com/submit"), "poc should use https scheme"
``````````````


#### 定义

`https(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用 HTTPS 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` | 一个 csrf.Generate 可接收的配置选项 |


### multipartDefaultValue

#### 详细描述
multipartDefaultValue 设置请求报文是否按 multipart/form-data 类型处理

当设置为 true 时，会改用基于 JavaScript(XHR) 提交的 POC 模板

在 yak 中通过 csrf.multipartDefaultValue 调用

参数:

  - b: 是否启用 multipart/form-data 提交模式



返回值:

  - 一个 csrf.Generate 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：生成基于 JS 提交的 CSRF POC
raw = "POST / HTTP/1.1\r\nHost: example.com\r\nContent-Type: multipart/form-data; boundary=x\r\n\r\n"
poc = csrf.Generate(raw, csrf.multipartDefaultValue(true))~
``````````````


#### 定义

`multipartDefaultValue(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用 multipart/form-data 提交模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` | 一个 csrf.Generate 可接收的配置选项 |


