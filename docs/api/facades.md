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

`NewFacadeServer(string, int, ...facades.FacadeServerConfig) *facades.FacadeServer`


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

`Serve(host string, port int, configs ...FacadeServerConfig) error`


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

`evilClassResource(string, string) facades.FacadeServerConfig`


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

`httpResource(string, []uint8) facades.FacadeServerConfig`


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

`javaClassName(string) facades.FacadeServerConfig`


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

`javaCodeBase(string) facades.FacadeServerConfig`


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

`javaFactory(string) facades.FacadeServerConfig`


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

`ldapResourceAddr(string, string) facades.FacadeServerConfig`


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

`objectClass(string) facades.FacadeServerConfig`


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

`rmiResourceAddr(string, string) facades.FacadeServerConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func FacadeServerConfig(v1: *facades.FacadeServer) ` |   |


 


