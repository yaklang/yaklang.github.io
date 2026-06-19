# bot

|函数名|函数描述/介绍|
|:------|:--------|
| [bot.FromEnv](#fromenv) |FromEnv 从环境变量读取 webhook 配置创建机器人客户端 读取 YAKIT_DINGTALK_WEBHOOK/SECRET、YAKIT_WORKWX_WEBHOOK/SECRET、YAKIT_FEISHU_WEBHOOK/SECRET 返回值: - 机器人客户端对象|
| [bot.New](#new) |New 创建一个机器人客户端，用于向钉钉、企业微信、飞书等推送消息 通过 bot.webhook / bot.ding / bot.workwx / bot.webhookWithSecret 等可选项配置目标 webhook 参数: - opts: 机器人配置可选项 返回值: - 机器人客户端对象...|
| [bot.ding](#ding) |WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding） 会根据 webhook 域名自动识别钉钉、飞书或企业微信类型 参数: - webhook: 机器人 webhook 地址 - key: 加签密钥...|
| [bot.webhook](#webhook) |WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx） 会根据 webhook 域名自动识别钉钉、飞书或企业微信类型 参数: - webhook: 机器人 webhook 地址 返回值: - 机器人配置可选项|
| [bot.webhookWithSecret](#webhookwithsecret) |WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding） 会根据 webhook 域名自动识别钉钉、飞书或企业微信类型 参数: - webhook: 机器人 webhook 地址 - key: 加签密钥...|
| [bot.workwx](#workwx) |WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx） 会根据 webhook 域名自动识别钉钉、飞书或企业微信类型 参数: - webhook: 机器人 webhook 地址 返回值: - 机器人配置可选项|


## 函数定义
### FromEnv

#### 详细描述
FromEnv 从环境变量读取 webhook 配置创建机器人客户端

读取 YAKIT_DINGTALK_WEBHOOK/SECRET、YAKIT_WORKWX_WEBHOOK/SECRET、YAKIT_FEISHU_WEBHOOK/SECRET

返回值:

  - 机器人客户端对象




Example:

``````````````yak
// 示意性示例，需要预先设置相关环境变量
client = bot.FromEnv()
client.SendText("hello from env")
``````````````


#### 定义

`FromEnv() *Client`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Client` | 机器人客户端对象 |


### New

#### 详细描述
New 创建一个机器人客户端，用于向钉钉、企业微信、飞书等推送消息

通过 bot.webhook / bot.ding / bot.workwx / bot.webhookWithSecret 等可选项配置目标 webhook

参数:

  - opts: 机器人配置可选项



返回值:

  - 机器人客户端对象，可调用 SendText / SendMarkdown 等方法推送消息




Example:

``````````````yak
// 示意性示例，需替换为真实 webhook 地址
client = bot.New(bot.webhook("https://oapi.dingtalk.com/robot/send?access_token=xxx"))
client.SendText("hello from yak")
``````````````


#### 定义

`New(opts ...ConfigOpt) *Client`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ConfigOpt` | 机器人配置可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Client` | 机器人客户端对象，可调用 SendText / SendMarkdown 等方法推送消息 |


### ding

#### 详细描述
WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

参数:

  - webhook: 机器人 webhook 地址

  - key: 加签密钥（secret）



返回值:

  - 机器人配置可选项




Example:

``````````````yak
// 示意性示例，需替换为真实 webhook 与密钥
client = bot.New(bot.ding("https://oapi.dingtalk.com/robot/send?access_token=xxx", "SECxxx"))
client.SendText("hello with secret")
``````````````


#### 定义

`ding(webhook string, key string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` | 机器人 webhook 地址 |
| key | `string` | 加签密钥（secret） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 机器人配置可选项 |


### webhook

#### 详细描述
WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

参数:

  - webhook: 机器人 webhook 地址



返回值:

  - 机器人配置可选项




Example:

``````````````yak
// 示意性示例，需替换为真实 webhook 地址
client = bot.New(bot.webhook("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx"))
client.SendText("hello workwx")
``````````````


#### 定义

`webhook(webhook string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` | 机器人 webhook 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 机器人配置可选项 |


### webhookWithSecret

#### 详细描述
WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

参数:

  - webhook: 机器人 webhook 地址

  - key: 加签密钥（secret）



返回值:

  - 机器人配置可选项




Example:

``````````````yak
// 示意性示例，需替换为真实 webhook 与密钥
client = bot.New(bot.ding("https://oapi.dingtalk.com/robot/send?access_token=xxx", "SECxxx"))
client.SendText("hello with secret")
``````````````


#### 定义

`webhookWithSecret(webhook string, key string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` | 机器人 webhook 地址 |
| key | `string` | 加签密钥（secret） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 机器人配置可选项 |


### workwx

#### 详细描述
WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

参数:

  - webhook: 机器人 webhook 地址



返回值:

  - 机器人配置可选项




Example:

``````````````yak
// 示意性示例，需替换为真实 webhook 地址
client = bot.New(bot.webhook("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx"))
client.SendText("hello workwx")
``````````````


#### 定义

`workwx(webhook string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webhook | `string` | 机器人 webhook 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 机器人配置可选项 |


