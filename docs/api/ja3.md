# ja3


|成员函数|函数描述/介绍|
|:------|:--------|
 | [ja3.GetTransportByClientHelloSpec](#ja3gettransportbyclienthellospec) |  |
 | [ja3.ParseJA3](#ja3parseja3) |  |
 | [ja3.ParseJA3S](#ja3parseja3s) |  |
 | [ja3.ParseJA3ToClientHelloSpec](#ja3parseja3toclienthellospec) |  |




 



## 函数定义

### ja3.GetTransportByClientHelloSpec



#### 详细描述



#### 定义：

`func ja3.GetTransportByClientHelloSpec(v1: *tls.ClientHelloSpec) return (r0: *http.Transport)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*tls.ClientHelloSpec` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Transport` |   |


 
### ja3.ParseJA3



#### 详细描述



#### 定义：

`func ja3.ParseJA3(v1: string) return (r0: *ja3.JA3, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*ja3.JA3` |   |
| r1 | `error` |   |


 
### ja3.ParseJA3S



#### 详细描述



#### 定义：

`func ja3.ParseJA3S(v1: string) return (r0: *ja3.JA3S, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*ja3.JA3S` |   |
| r1 | `error` |   |


 
### ja3.ParseJA3ToClientHelloSpec



#### 详细描述



#### 定义：

`func ja3.ParseJA3ToClientHelloSpec(v1: string) return (r0: *tls.ClientHelloSpec, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*tls.ClientHelloSpec` |   |
| r1 | `error` |   |


 


