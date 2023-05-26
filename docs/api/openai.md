# openai


|成员函数|函数描述/介绍|
|:------|:--------|
 | [openai.Chat](#openaichat) |  |
 | [openai.TranslateToChinese](#openaitranslatetochinese) |  |
 | [openai.apiKey](#openaiapikey) |  |
 | [openai.domain](#openaidomain) |  |
 | [openai.localAPIKey](#openailocalapikey) |  |
 | [openai.model](#openaimodel) |  |
 | [openai.proxy](#openaiproxy) |  |
 | [openai.yakDomain](#openaiyakdomain) |  |




 



## 函数定义

### openai.Chat



#### 详细描述



#### 定义：

`func openai.Chat(v1: string, v2 ...openai.ConfigOption) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...openai.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### openai.TranslateToChinese



#### 详细描述



#### 定义：

`func openai.TranslateToChinese(v1: string, v2 ...openai.ConfigOption) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...openai.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### openai.apiKey



#### 详细描述



#### 定义：

`func openai.apiKey(v1: string) return (r0: func ConfigOption(v1: *openai.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *openai.Client) ` |   |


 
### openai.domain



#### 详细描述



#### 定义：

`func openai.domain(v1: string) return (r0: func ConfigOption(v1: *openai.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *openai.Client) ` |   |


 
### openai.localAPIKey



#### 详细描述



#### 定义：

`func openai.localAPIKey() return (r0: func ConfigOption(v1: *openai.Client) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *openai.Client) ` |   |


 
### openai.model



#### 详细描述



#### 定义：

`func openai.model(v1: string) return (r0: func ConfigOption(v1: *openai.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *openai.Client) ` |   |


 
### openai.proxy



#### 详细描述



#### 定义：

`func openai.proxy(v1: string) return (r0: func ConfigOption(v1: *openai.Client) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *openai.Client) ` |   |


 
### openai.yakDomain



#### 详细描述



#### 定义：

`func openai.yakDomain() return (r0: func ConfigOption(v1: *openai.Client) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *openai.Client) ` |   |


 


