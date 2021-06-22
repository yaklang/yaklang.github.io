# tls


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tls.GenerateRootCA](#tlsgeneraterootca) |  |
 | [tls.SignClientCertAndKey](#tlssignclientcertandkey) |  |
 | [tls.SignServerCertAndKey](#tlssignservercertandkey) |  |
 | [tls.SignX509ClientCertAndKey](#tlssignx509clientcertandkey) |  |
 | [tls.SignX509ServerCertAndKey](#tlssignx509servercertandkey) |  |




 



## 函数定义

### tls.GenerateRootCA



#### 详细描述



#### 定义：

`func tls.GenerateRootCA(v1: string) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignClientCertAndKey



#### 详细描述



#### 定义：

`func tls.SignClientCertAndKey(v1: bytes, v2: bytes) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignServerCertAndKey



#### 详细描述



#### 定义：

`func tls.SignServerCertAndKey(v1: bytes, v2: bytes) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignX509ClientCertAndKey



#### 详细描述



#### 定义：

`func tls.SignX509ClientCertAndKey(v1: bytes, v2: bytes) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignX509ServerCertAndKey



#### 详细描述



#### 定义：

`func tls.SignX509ServerCertAndKey(v1: bytes, v2: bytes) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 


