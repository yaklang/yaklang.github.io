# csrf

|函数名|函数描述/介绍|
|:------|:--------|
| [csrf.Generate](#generate) |Generate 根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC)，返回生成的POC HTML字符串与错误  |
| [csrf.https](#https) |https 手动设置请求报文是否为HTTPS类型  |
| [csrf.multipartDefaultValue](#multipartdefaultvalue) |multipartDefaultValue 手动设置请求报文是否为multipart/form-data类型  如果设置为true，则会生成使用JavaScript提交的漏洞验证(POC)  |


## 函数定义
### Generate

#### 详细描述
Generate 根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC)，返回生成的POC HTML字符串与错误

Example:
```
csrfPoc, err = csrf.Generate("POST / HTTP/1.1\r\nHost:example.com\r\nContent-Type:application/x-www-form-urlencoded\r\n\r\nname=1&age=2")
```


#### 定义

`Generate(raw any, opts ...csrfConfig) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| opts | `...csrfConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### https

#### 详细描述
https 手动设置请求报文是否为HTTPS类型

Example:
```
csrfPoc, err = csrf.Generate("POST / HTTP/1.1\r\nHost:example.com\r\nContent-Type:application/x-www-form-urlencoded\r\n\r\nname=1&age=2", csrf.HTTPS(true))
```


#### 定义

`https(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` |   |


### multipartDefaultValue

#### 详细描述
multipartDefaultValue 手动设置请求报文是否为multipart/form-data类型

如果设置为true，则会生成使用JavaScript提交的漏洞验证(POC)

Example:
```
csrfPoc, err = csrf.Generate("POST / HTTP/1.1\r\nHost:example.com\r\nContent-Type:application/x-www-form-urlencoded\r\n\r\nname=1&age=2", csrf.MultipartDefaultValue(true))
```


#### 定义

`multipartDefaultValue(b bool) csrfConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `csrfConfig` |   |


