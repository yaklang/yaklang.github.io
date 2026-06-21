# bot {#library-bot}

`bot` 库用于把消息推送到即时通讯机器人（如钉钉、企业微信），常用于扫描完成、发现高危漏洞时的告警通知。它封装了 webhook 调用与签名校验，几行即可把结果推送到群聊。

典型使用场景：

- 创建客户端：`bot.New` 按选项创建，`bot.FromEnv` 从环境变量读取配置创建。
- 配置通道：`bot.ding` / `bot.webhookWithSecret` 配置带加签的钉钉机器人，`bot.workwx` 配置企业微信机器人，`bot.webhook` 配置通用 webhook。

与相邻库的关系：`bot` 是结果外发通道，常作为扫描/监控类脚本的最后一环，与 `report`（生成报告）、`risk`（漏洞记录）、`yakit`（界面展示）互补——前者面向"通知人"，后者面向"留存与展示"。

> 共 6 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [bot.FromEnv](#fromenv) | - | `*Client` | 从环境变量读取 webhook 配置创建机器人客户端 |
| [bot.ding](#ding) | `webhook string, key string` | `ConfigOpt` | WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding） |
| [bot.webhook](#webhook) | `webhook string` | `ConfigOpt` | WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx） |
| [bot.webhookWithSecret](#webhookwithsecret) | `webhook string, key string` | `ConfigOpt` | WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding） |
| [bot.workwx](#workwx) | `webhook string` | `ConfigOpt` | WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [bot.New](#new) | `opts ...ConfigOpt` | `*Client` | 创建一个机器人客户端，用于向钉钉、企业微信、飞书等推送消息 |

## 函数详情

### FromEnv {#fromenv}

```go
FromEnv() *Client
```

从环境变量读取 webhook 配置创建机器人客户端

读取 YAKIT_DINGTALK_WEBHOOK/SECRET、YAKIT_WORKWX_WEBHOOK/SECRET、YAKIT_FEISHU_WEBHOOK/SECRET

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Client` | 机器人客户端对象 |

**示例**

``````````````yak
// 示意性示例，需要预先设置相关环境变量
client = bot.FromEnv()
client.SendText("hello from env")
``````````````

---

### ding {#ding}

```go
ding(webhook string, key string) ConfigOpt
```

WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| webhook | `string` | 机器人 webhook 地址 |
| key | `string` | 加签密钥（secret） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 机器人配置可选项 |

**示例**

``````````````yak
// 示意性示例，需替换为真实 webhook 与密钥
client = bot.New(bot.ding("https://oapi.dingtalk.com/robot/send?access_token=xxx", "SECxxx"))
client.SendText("hello with secret")
``````````````

---

### webhook {#webhook}

```go
webhook(webhook string) ConfigOpt
```

WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| webhook | `string` | 机器人 webhook 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 机器人配置可选项 |

**示例**

``````````````yak
// 示意性示例，需替换为真实 webhook 地址
client = bot.New(bot.webhook("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx"))
client.SendText("hello workwx")
``````````````

---

### webhookWithSecret {#webhookwithsecret}

```go
webhookWithSecret(webhook string, key string) ConfigOpt
```

WithWebhookWithSecret 配置带签名密钥的 webhook（导出名为 bot.webhookWithSecret / bot.ding）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| webhook | `string` | 机器人 webhook 地址 |
| key | `string` | 加签密钥（secret） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 机器人配置可选项 |

**示例**

``````````````yak
// 示意性示例，需替换为真实 webhook 与密钥
client = bot.New(bot.ding("https://oapi.dingtalk.com/robot/send?access_token=xxx", "SECxxx"))
client.SendText("hello with secret")
``````````````

---

### workwx {#workwx}

```go
workwx(webhook string) ConfigOpt
```

WithWebhook 配置无密钥的 webhook（导出名为 bot.webhook / bot.workwx）

会根据 webhook 域名自动识别钉钉、飞书或企业微信类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| webhook | `string` | 机器人 webhook 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 机器人配置可选项 |

**示例**

``````````````yak
// 示意性示例，需替换为真实 webhook 地址
client = bot.New(bot.webhook("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx"))
client.SendText("hello workwx")
``````````````

---

## 可变参数函数详情

### New {#new}

```go
New(opts ...ConfigOpt) *Client
```

创建一个机器人客户端，用于向钉钉、企业微信、飞书等推送消息

通过 bot.webhook / bot.ding / bot.workwx / bot.webhookWithSecret 等可选项配置目标 webhook

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...ConfigOpt` | 机器人配置可选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Client` | 机器人客户端对象，可调用 SendText / SendMarkdown 等方法推送消息 |

**示例**

``````````````yak
// 示意性示例，需替换为真实 webhook 地址
client = bot.New(bot.webhook("https://oapi.dingtalk.com/robot/send?access_token=xxx"))
client.SendText("hello from yak")
``````````````

---

