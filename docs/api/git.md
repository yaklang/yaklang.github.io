# git


|成员函数|函数描述/介绍|
|:------|:--------|
 | [git.Checkout](#gitcheckout) |  |
 | [git.Clone](#gitclone) |  |
 | [git.Fetch](#gitfetch) |  |
 | [git.IterateCommit](#gititeratecommit) |  |
 | [git.Pull](#gitpull) |  |
 | [git.SetProxy](#gitsetproxy) |  |
 | [git.auth](#gitauth) |  |
 | [git.checkoutCreate](#gitcheckoutcreate) |  |
 | [git.checkoutForce](#gitcheckoutforce) |  |
 | [git.checkoutKeep](#gitcheckoutkeep) |  |
 | [git.context](#gitcontext) |  |
 | [git.depth](#gitdepth) |  |
 | [git.fetchAllTags](#gitfetchalltags) |  |
 | [git.filterCommit](#gitfiltercommit) |  |
 | [git.filterReference](#gitfilterreference) |  |
 | [git.force](#gitforce) |  |
 | [git.handleCommit](#githandlecommit) |  |
 | [git.handleReference](#githandlereference) |  |
 | [git.noFetchTags](#gitnofetchtags) |  |
 | [git.recursive](#gitrecursive) |  |
 | [git.remote](#gitremote) |  |
 | [git.verify](#gitverify) |  |




 



## 函数定义

### git.Checkout



#### 详细描述



#### 定义：

`func git.Checkout(v1: string, v2: string, v3 ...yakgit.Option) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakgit.Option` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### git.Clone



#### 详细描述



#### 定义：

`func git.Clone(v1: string, v2: string, v3 ...yakgit.Option) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakgit.Option` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### git.Fetch



#### 详细描述



#### 定义：

`func git.Fetch(v1: string, v2 ...yakgit.Option) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakgit.Option` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### git.IterateCommit



#### 详细描述



#### 定义：

`func git.IterateCommit(v1: string, v2 ...yakgit.Option) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakgit.Option` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### git.Pull



#### 详细描述



#### 定义：

`func git.Pull(v1: string, v2 ...yakgit.Option) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakgit.Option` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### git.SetProxy



#### 详细描述



#### 定义：

``func git.SetProxy(v1 ...string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |




 

 
### git.auth



#### 详细描述



#### 定义：

`func git.auth(v1: string, v2: string) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.checkoutCreate



#### 详细描述



#### 定义：

`func git.checkoutCreate(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.checkoutForce



#### 详细描述



#### 定义：

`func git.checkoutForce(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.checkoutKeep



#### 详细描述



#### 定义：

`func git.checkoutKeep(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.context



#### 详细描述



#### 定义：

`func git.context(v1: context.Context) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.depth



#### 详细描述



#### 定义：

`func git.depth(v1: int) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.fetchAllTags



#### 详细描述



#### 定义：

`func git.fetchAllTags(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.filterCommit



#### 详细描述



#### 定义：

`func git.filterCommit(v1: func (v1: *object.Commit) return(bool) ) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *object.Commit) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.filterReference



#### 详细描述



#### 定义：

`func git.filterReference(v1: func (v1: *plumbing.Reference) return(bool) ) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *plumbing.Reference) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.force



#### 详细描述



#### 定义：

`func git.force(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.handleCommit



#### 详细描述



#### 定义：

`func git.handleCommit(v1: func (v1: *object.Commit) return(error) ) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *object.Commit) return(error) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.handleReference



#### 详细描述



#### 定义：

`func git.handleReference(v1: func (v1: *plumbing.Reference) return(error) ) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *plumbing.Reference) return(error) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.noFetchTags



#### 详细描述



#### 定义：

`func git.noFetchTags(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.recursive



#### 详细描述



#### 定义：

`func git.recursive(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.remote



#### 详细描述



#### 定义：

`func git.remote(v1: string) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 
### git.verify



#### 详细描述



#### 定义：

`func git.verify(v1: bool) return (r0: func Option(v1: *yakgit.config) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func Option(v1: *yakgit.config) return(error) ` |   |


 


