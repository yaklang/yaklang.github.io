# mfa

|函数名|函数描述/介绍|
|:------|:--------|
| [mfa.GetUTCCode](#getutccode) |GetUTCCode 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码 该函数等价于 twofa.TOTPCode，生成的验证码为 6 位数字字符串，每 30 秒变化一次 参数: - secret: 用于生成 TOTP 验证码的密钥字符串 返回值: - 当前时间窗口内的...|
| [mfa.TOTPCode](#totpcode) |GetUTCCode 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码 该函数等价于 twofa.TOTPCode，生成的验证码为 6 位数字字符串，每 30 秒变化一次 参数: - secret: 用于生成 TOTP 验证码的密钥字符串 返回值: - 当前时间窗口内的...|
| [mfa.TOTPVerify](#totpverify) |VerifyUTCCode 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配 该函数等价于 twofa.TOTPVerify，校验失败或发生错误时返回 false 参数: - secret: 用于生成 TOTP 验证码的密钥字符串 - code: 待校验的验证码，...|
| [mfa.VerifyUTCCode](#verifyutccode) |VerifyUTCCode 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配 该函数等价于 twofa.TOTPVerify，校验失败或发生错误时返回 false 参数: - secret: 用于生成 TOTP 验证码的密钥字符串 - code: 待校验的验证码，...|
| [mfa.poc](#poc) |WithTwoFa 返回一个 poc 请求选项，自动把请求头 Y-T-Verify-Code 设置为 由 secret 计算出的当前 UTC 时间 TOTP 验证码，便于对需要二次验证的接口发起请求 该函数在 yak 中通过 twofa.poc 调用 参数: - secret: 用于生成 TOTP ...|


## 函数定义
### GetUTCCode

#### 详细描述
GetUTCCode 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码

该函数等价于 twofa.TOTPCode，生成的验证码为 6 位数字字符串，每 30 秒变化一次

参数:

  - secret: 用于生成 TOTP 验证码的密钥字符串



返回值:

  - 当前时间窗口内的 6 位数字验证码字符串




Example:

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


#### 定义

`GetUTCCode(secret string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前时间窗口内的 6 位数字验证码字符串 |


### TOTPCode

#### 详细描述
GetUTCCode 根据给定的密钥(secret)计算当前 UTC 时间下的 TOTP 动态验证码

该函数等价于 twofa.TOTPCode，生成的验证码为 6 位数字字符串，每 30 秒变化一次

参数:

  - secret: 用于生成 TOTP 验证码的密钥字符串



返回值:

  - 当前时间窗口内的 6 位数字验证码字符串




Example:

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


#### 定义

`TOTPCode(secret string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前时间窗口内的 6 位数字验证码字符串 |


### TOTPVerify

#### 详细描述
VerifyUTCCode 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配

该函数等价于 twofa.TOTPVerify，校验失败或发生错误时返回 false

参数:

  - secret: 用于生成 TOTP 验证码的密钥字符串

  - code: 待校验的验证码，可以是字符串或整数



返回值:

  - 校验是否通过的布尔值




Example:

``````````````yak
secret = "hello-yak-secret"
// 用同一密钥生成验证码并立即校验，往返必然成功
code = twofa.GetUTCCode(secret)
ok = twofa.VerifyUTCCode(secret, code)
println(ok)   // OUT: true
assert ok == true, "round-trip verify should pass"
``````````````


#### 定义

`TOTPVerify(secret string, code any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |
| code | `any` | 待校验的验证码，可以是字符串或整数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 校验是否通过的布尔值 |


### VerifyUTCCode

#### 详细描述
VerifyUTCCode 校验给定的验证码(code)是否与密钥(secret)在当前 UTC 时间窗口内匹配

该函数等价于 twofa.TOTPVerify，校验失败或发生错误时返回 false

参数:

  - secret: 用于生成 TOTP 验证码的密钥字符串

  - code: 待校验的验证码，可以是字符串或整数



返回值:

  - 校验是否通过的布尔值




Example:

``````````````yak
secret = "hello-yak-secret"
// 用同一密钥生成验证码并立即校验，往返必然成功
code = twofa.GetUTCCode(secret)
ok = twofa.VerifyUTCCode(secret, code)
println(ok)   // OUT: true
assert ok == true, "round-trip verify should pass"
``````````````


#### 定义

`VerifyUTCCode(secret string, code any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |
| code | `any` | 待校验的验证码，可以是字符串或整数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 校验是否通过的布尔值 |


### poc

#### 详细描述
WithTwoFa 返回一个 poc 请求选项，自动把请求头 Y-T-Verify-Code 设置为

由 secret 计算出的当前 UTC 时间 TOTP 验证码，便于对需要二次验证的接口发起请求

该函数在 yak 中通过 twofa.poc 调用

参数:

  - secret: 用于生成 TOTP 验证码的密钥字符串



返回值:

  - 可传入 poc 系列函数的请求配置选项




Example:

``````````````yak
// 该示例为示意性用法：把 TOTP 验证码自动注入到请求头中
raw = "GET /api/profile HTTP/1.1\r\nHost: example.com\r\n\r\n"
rsp, req = poc.HTTP(raw, twofa.poc("hello-yak-secret"), poc.timeout(5))~
``````````````


#### 定义

`poc(secret string) poc.PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` | 用于生成 TOTP 验证码的密钥字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `poc.PocConfigOption` | 可传入 poc 系列函数的请求配置选项 |


