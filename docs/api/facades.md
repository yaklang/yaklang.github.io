# facades


|成员函数|函数描述/介绍|
|:------|:--------|
 | [facades.NewFacadeServer](#facadesnewfacadeserver) |  |
 | [facades.Serve](#facadesserve) |  |
 | [facades.evilClassResource](#facadesevilclassresource) |  |
 | [facades.httpResource](#facadeshttpresource) |  |
 | [facades.javaClassName](#facadesjavaclassname) |  |
 | [facades.javaCodeBase](#facadesjavacodebase) |  |
 | [facades.javaFactory](#facadesjavafactory) |  |
 | [facades.ldapResourceAddr](#facadesldapresourceaddr) |  |
 | [facades.objectClass](#facadesobjectclass) |  |
 | [facades.rmiResourceAddr](#facadesrmiresourceaddr) |  |




 



## 函数定义

### facades.NewFacadeServer



#### 详细描述



#### 定义：

`func facades.NewFacadeServer(v1: string, v2: int, v3 ...facades.FacadeServerConfig) return (r0: *facades.FacadeServer)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `...facades.FacadeServerConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*facades.FacadeServer` |   |


 
### facades.Serve



#### 详细描述



#### 定义：

`func facades.Serve(v1: string, v2: int, v3 ...facades.FacadeServerConfig) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `...facades.FacadeServerConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### facades.evilClassResource



#### 详细描述



#### 定义：

`func facades.evilClassResource(v1: string, v2: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.httpResource



#### 详细描述



#### 定义：

`func facades.httpResource(v1: string, v2: bytes) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.javaClassName



#### 详细描述



#### 定义：

`func facades.javaClassName(v1: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.javaCodeBase



#### 详细描述



#### 定义：

`func facades.javaCodeBase(v1: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.javaFactory



#### 详细描述



#### 定义：

`func facades.javaFactory(v1: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.ldapResourceAddr



#### 详细描述



#### 定义：

`func facades.ldapResourceAddr(v1: string, v2: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.objectClass



#### 详细描述



#### 定义：

`func facades.objectClass(v1: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 
### facades.rmiResourceAddr



#### 详细描述



#### 定义：

`func facades.rmiResourceAddr(v1: string, v2: string) return (r0: func FacadeServerConfig(v1: *facades.FacadeServer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 


