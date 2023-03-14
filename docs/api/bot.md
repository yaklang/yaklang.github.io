# bot


|成员函数|函数描述/介绍|
|:------|:--------|
 | [bot.FromEnv](#botfromenv) |  |
 | [bot.New](#botnew) |  |
 | [bot.ding](#botding) |  |
 | [bot.webhook](#botwebhook) |  |
 | [bot.webhookWithSecret](#botwebhookwithsecret) |  |
 | [bot.workwx](#botworkwx) |  |




 



## 函数定义

### bot.FromEnv



#### 详细描述



#### 定义：

`func bot.FromEnv() return (r0: *bot.Client)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*bot.Client` |   |


 
### bot.New



#### 详细描述



#### 定义：

`func bot.New(v1 ...bot.ConfigOpt) return (r0: *bot.Client)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...bot.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*bot.Client` |   |


 
### bot.ding



#### 详细描述



#### 定义：

`func bot.ding(v1: string, v2: string) return (r0: func ConfigOpt(v1: *bot.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bot.Client) ` |   |


 
### bot.webhook



#### 详细描述



#### 定义：

`func bot.webhook(v1: string) return (r0: func ConfigOpt(v1: *bot.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bot.Client) ` |   |


 
### bot.webhookWithSecret



#### 详细描述



#### 定义：

`func bot.webhookWithSecret(v1: string, v2: string) return (r0: func ConfigOpt(v1: *bot.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bot.Client) ` |   |


 
### bot.workwx



#### 详细描述



#### 定义：

`func bot.workwx(v1: string) return (r0: func ConfigOpt(v1: *bot.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *bot.Client) ` |   |


 


