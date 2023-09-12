# git

|成员函数|函数描述/介绍|
|:------|:--------|
| [git.Checkout](#Checkout) ||
| [git.Clone](#Clone) ||
| [git.Fetch](#Fetch) ||
| [git.IterateCommit](#IterateCommit) ||
| [git.Pull](#Pull) ||
| [git.SetProxy](#SetProxy) ||
| [git.auth](#auth) ||
| [git.checkoutCreate](#checkoutCreate) ||
| [git.checkoutForce](#checkoutForce) ||
| [git.checkoutKeep](#checkoutKeep) ||
| [git.context](#context) ||
| [git.depth](#depth) ||
| [git.fetchAllTags](#fetchAllTags) ||
| [git.filterCommit](#filterCommit) ||
| [git.filterReference](#filterReference) ||
| [git.force](#force) ||
| [git.handleCommit](#handleCommit) ||
| [git.handleReference](#handleReference) ||
| [git.noFetchTags](#noFetchTags) ||
| [git.recursive](#recursive) ||
| [git.remote](#remote) ||
| [git.verify](#verify) ||


## 函数定义
### git.Checkout

#### 详细描述


#### 定义

`Checkout(localPath string, ref string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `string` |   |
| ref | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### git.Clone

#### 详细描述


#### 定义

`Clone(u string, localPath string, opt ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| localPath | `string` |   |
| opt | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### git.Fetch

#### 详细描述


#### 定义

`Fetch(localPath string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### git.IterateCommit

#### 详细描述


#### 定义

`IterateCommit(localRepos string, opt ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localRepos | `string` |   |
| opt | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### git.Pull

#### 详细描述


#### 定义

`Pull(localPath string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### git.SetProxy

#### 详细描述


#### 定义

`SetProxy(proxies ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |


### git.auth

#### 详细描述


#### 定义

`auth(username string, password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.checkoutCreate

#### 详细描述


#### 定义

`checkoutCreate(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.checkoutForce

#### 详细描述


#### 定义

`checkoutForce(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.checkoutKeep

#### 详细描述


#### 定义

`checkoutKeep(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.context

#### 详细描述


#### 定义

`context(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.depth

#### 详细描述


#### 定义

`depth(depth int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.fetchAllTags

#### 详细描述


#### 定义

`fetchAllTags(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.filterCommit

#### 详细描述


#### 定义

`filterCommit(f func(r *object.Commit) bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *object.Commit) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.filterReference

#### 详细描述


#### 定义

`filterReference(f func(r *plumbing.Reference) bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *plumbing.Reference) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.force

#### 详细描述


#### 定义

`force(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.handleCommit

#### 详细描述


#### 定义

`handleCommit(f func(r *object.Commit) error) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *object.Commit) error` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.handleReference

#### 详细描述


#### 定义

`handleReference(f func(r *plumbing.Reference) error) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *plumbing.Reference) error` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.noFetchTags

#### 详细描述


#### 定义

`noFetchTags(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.recursive

#### 详细描述


#### 定义

`recursive(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.remote

#### 详细描述


#### 定义

`remote(remote string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| remote | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### git.verify

#### 详细描述


#### 定义

`verify(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


