# csrf {#library-csrf}

`csrf` 库用于根据一个原始 HTTP 请求自动生成 CSRF（跨站请求伪造）PoC 页面，便于在 Web 安全测试中验证目标接口是否缺乏 CSRF 防护。

典型使用场景：

- 生成 PoC：`csrf.Generate(raw, opts...)` 传入原始 HTTP 请求报文，生成可直接打开的 HTML 表单 PoC。
- 行为选项：`csrf.autoSubmit` 让页面加载后自动提交，`csrf.https` 指定使用 HTTPS，`csrf.multipartDefaultValue` 处理 multipart 表单的默认值。

与相邻库的关系：`csrf` 是 Web 漏洞验证小工具，输入常来自 `fuzz`/`poc` 构造或抓取的请求，产出的 PoC 可用于复现与报告（`report`）。

> 共 4 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [csrf.autoSubmit](#autosubmit) | `b bool` | `csrfConfig` | 设置是否在生成的 HTML 中注入自动提交脚本，使页面加载后自动提交表单 |
| [csrf.https](#https) | `b bool` | `csrfConfig` | 设置目标请求报文是否使用 HTTPS，从而决定生成 POC 中目标 URL 的协议 |
| [csrf.multipartDefaultValue](#multipartdefaultvalue) | `b bool` | `csrfConfig` | 设置请求报文是否按 multipart/form-data 类型处理 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [csrf.Generate](#generate) | `raw any, opts ...csrfConfig` | `string, error` | 根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC) HTML 页面 |

## 函数详情

### autoSubmit {#autosubmit}

```go
autoSubmit(b bool) csrfConfig
```

设置是否在生成的 HTML 中注入自动提交脚本，使页面加载后自动提交表单

在 yak 中通过 csrf.autoSubmit 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否注入自动提交脚本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `csrfConfig` | 一个 csrf.Generate 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：生成加载后自动提交的 CSRF POC
raw = "POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\nname=admin"
poc = csrf.Generate(raw, csrf.autoSubmit(true))~
``````````````

---

### https {#https}

```go
https(b bool) csrfConfig
```

设置目标请求报文是否使用 HTTPS，从而决定生成 POC 中目标 URL 的协议

在 yak 中通过 csrf.https 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否使用 HTTPS 协议 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `csrfConfig` | 一个 csrf.Generate 可接收的配置选项 |

**示例**

``````````````yak
raw = "POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\nname=admin"
// 启用 https 后，生成的目标地址应为 https 协议
poc = csrf.Generate(raw, csrf.https(true))~
assert str.Contains(poc, "https://example.com/submit"), "poc should use https scheme"
``````````````

---

### multipartDefaultValue {#multipartdefaultvalue}

```go
multipartDefaultValue(b bool) csrfConfig
```

设置请求报文是否按 multipart/form-data 类型处理

当设置为 true 时，会改用基于 JavaScript(XHR) 提交的 POC 模板

在 yak 中通过 csrf.multipartDefaultValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否启用 multipart/form-data 提交模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `csrfConfig` | 一个 csrf.Generate 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：生成基于 JS 提交的 CSRF POC
raw = "POST / HTTP/1.1\r\nHost: example.com\r\nContent-Type: multipart/form-data; boundary=x\r\n\r\n"
poc = csrf.Generate(raw, csrf.multipartDefaultValue(true))~
``````````````

---

## 可变参数函数详情

### Generate {#generate}

```go
Generate(raw any, opts ...csrfConfig) (string, error)
```

根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC) HTML 页面

在 yak 中通过 csrf.Generate 调用，自动从请求中提取 URL、方法与表单参数构造自动提交表单

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 原始 HTTP 请求报文，可以是字符串或字节数组 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...csrfConfig` | 可选配置项，如 csrf.https、csrf.multipartDefaultValue、csrf.autoSubmit |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 CSRF POC HTML 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |

**示例**

``````````````yak
raw = "POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\nname=admin&age=2"
poc, err = csrf.Generate(raw)
assert err == nil, "generate should succeed"
// 生成的 HTML 中应包含目标地址与表单字段
assert str.Contains(poc, `action="http://example.com/submit"`), "poc should target the request url"
assert str.Contains(poc, `name="name"`), "poc should carry the form field"
``````````````

---

