# mfa

|函数名|函数描述/介绍|
|:------|:--------|
| [mfa.GetUTCCode](#getutccode) |GetUTCCode in twofa lib will receive the secret and return the verify code with utc time |
| [mfa.TOTPCode](#totpcode) |GetUTCCode in twofa lib will receive the secret and return the verify code with utc time |
| [mfa.TOTPVerify](#totpverify) |VerifyUTCCode in twofa lib will receive the secret and code, then return the verify result |
| [mfa.VerifyUTCCode](#verifyutccode) |VerifyUTCCode in twofa lib will receive the secret and code, then return the verify result |
| [mfa.poc](#poc) |poc 是一个请求选项，设置 Y-T-Verify-Code 的值为 secret 计算出的 UTC 时间验证码，适配于 poc 包 |


## 函数定义
### GetUTCCode

#### 详细描述
GetUTCCode in twofa lib will receive the secret and return the verify code with utc time


#### 定义

`GetUTCCode(secret string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### TOTPCode

#### 详细描述
GetUTCCode in twofa lib will receive the secret and return the verify code with utc time


#### 定义

`TOTPCode(secret string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### TOTPVerify

#### 详细描述
VerifyUTCCode in twofa lib will receive the secret and code, then return the verify result


#### 定义

`TOTPVerify(secret string, code any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` |   |
| code | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### VerifyUTCCode

#### 详细描述
VerifyUTCCode in twofa lib will receive the secret and code, then return the verify result


#### 定义

`VerifyUTCCode(secret string, code any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` |   |
| code | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### poc

#### 详细描述
poc 是一个请求选项，设置 Y-T-Verify-Code 的值为 secret 计算出的 UTC 时间验证码，适配于 poc 包


#### 定义

`poc(secret string) poc.PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| secret | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `poc.PocConfigOption` |   |


