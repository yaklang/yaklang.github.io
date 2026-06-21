# mfa {#library-mfa}

`mfa` 库提供多因素认证（TOTP）相关能力，根据密钥生成/校验动态验证码，常用于自动化登录带二次验证的系统或测试 MFA 实现。

典型使用场景：

- 生成验证码：`mfa.TOTPCode(secret)` 生成当前 TOTP 验证码，`mfa.GetUTCCode` 基于 UTC 生成。
- 校验验证码：`mfa.TOTPVerify(secret, code)` / `mfa.VerifyUTCCode` 校验验证码是否有效。

与相邻库的关系：`mfa` 与 `twofa`（二步验证）定位相近，常配合 `http`/`poc`（自动登录流程）、`brute`（认证测试）使用。

> 共 5 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [mfa.GetUTCCode](#getutccode) | `secret string` | `string` | 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码 |
| [mfa.TOTPCode](#totpcode) | `secret string` | `string` | GetUTCCode 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码 |
| [mfa.TOTPVerify](#totpverify) | `secret string, code any` | `bool` | VerifyUTCCode 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配 |
| [mfa.VerifyUTCCode](#verifyutccode) | `secret string, code any` | `bool` | 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配 |
| [mfa.poc](#poc) | `secret string` | `poc.PocConfigOption` | WithTwoFa 返回一个 poc 请求选项，自动把请求头 Y-T-Verify-Code 设置为 |

## 函数详情

### GetUTCCode {#getutccode}

```go
GetUTCCode(secret string) string
```

根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码

该函数等价于 twofa.TOTPCode，生成的验证码为 6 位数字字符串，每 30 秒变化一次

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前时间窗口内的 6 位数字验证码字符串 |

**示例**

``````````````yak
secret = "hello-yak-secret"
code = twofa.GetUTCCode(secret)
// 验证码恒为 6 位数字
assert len(code) == 6, "TOTP code should be 6 digits"
// 同一密钥同一时间生成的验证码可被成功校验
ok = twofa.VerifyUTCCode(secret, code)
println(ok)   // OUT: true
assert ok == true, "freshly generated code should verify"
``````````````

---

### TOTPCode {#totpcode}

```go
TOTPCode(secret string) string
```

GetUTCCode 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码

该函数等价于 twofa.TOTPCode，生成的验证码为 6 位数字字符串，每 30 秒变化一次

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前时间窗口内的 6 位数字验证码字符串 |

**示例**

``````````````yak
secret = "hello-yak-secret"
code = twofa.GetUTCCode(secret)
// 验证码恒为 6 位数字
assert len(code) == 6, "TOTP code should be 6 digits"
// 同一密钥同一时间生成的验证码可被成功校验
ok = twofa.VerifyUTCCode(secret, code)
println(ok)   // OUT: true
assert ok == true, "freshly generated code should verify"
``````````````

---

### TOTPVerify {#totpverify}

```go
TOTPVerify(secret string, code any) bool
```

VerifyUTCCode 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配

该函数等价于 twofa.TOTPVerify，校验失败或发生错误时返回 false

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |
| code | `any` | 待校验的验证码，可以是字符串或整数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 校验是否通过的布尔值 |

**示例**

``````````````yak
secret = "hello-yak-secret"
// 用同一密钥生成验证码并立即校验，往返必然成功
code = twofa.GetUTCCode(secret)
ok = twofa.VerifyUTCCode(secret, code)
println(ok)   // OUT: true
assert ok == true, "round-trip verify should pass"
``````````````

---

### VerifyUTCCode {#verifyutccode}

```go
VerifyUTCCode(secret string, code any) bool
```

校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配

该函数等价于 twofa.TOTPVerify，校验失败或发生错误时返回 false

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |
| code | `any` | 待校验的验证码，可以是字符串或整数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 校验是否通过的布尔值 |

**示例**

``````````````yak
secret = "hello-yak-secret"
// 用同一密钥生成验证码并立即校验，往返必然成功
code = twofa.GetUTCCode(secret)
ok = twofa.VerifyUTCCode(secret, code)
println(ok)   // OUT: true
assert ok == true, "round-trip verify should pass"
``````````````

---

### poc {#poc}

```go
poc(secret string) poc.PocConfigOption
```

WithTwoFa 返回一个 poc 请求选项，自动把请求头 Y-T-Verify-Code 设置为

由 secret 计算出的当前 UTC 时间 TOTP 验证码，便于对需要二次验证的接口发起请求

该函数在 yak 中通过 twofa.poc 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `poc.PocConfigOption` | 可传入 poc 系列函数的请求配置选项 |

**示例**

``````````````yak
// 用本地 mock HTTP 服务演示(不出网): twofa.poc 会把 TOTP 验证码写入请求头 Y-T-Verify-Code
host, port = tcp.MockServe(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // 起本地 mock 服务
raw = f"GET /api/profile HTTP/1.1\r\nHost: ${host}:${port}\r\n\r\n"
rsp, req = poc.HTTP(raw, twofa.poc("hello-yak-secret"), poc.timeout(5))~
assert rsp != nil, "should get response from local mock server"
``````````````

---

