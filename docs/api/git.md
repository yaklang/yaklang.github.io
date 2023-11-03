# git

|成员函数|函数描述/介绍|
|:------|:--------|
| [git.Checkout](#checkout) ||
| [git.Clone](#clone) ||
| [git.Fetch](#fetch) ||
| [git.GitHack](#githack) ||
| [git.IterateCommit](#iteratecommit) ||
| [git.Pull](#pull) ||
| [git.SetProxy](#setproxy) ||
| [git.auth](#auth) ||
| [git.checkoutCreate](#checkoutcreate) ||
| [git.checkoutForce](#checkoutforce) ||
| [git.checkoutKeep](#checkoutkeep) ||
| [git.context](#context) ||
| [git.depth](#depth) ||
| [git.fetchAllTags](#fetchalltags) ||
| [git.filterCommit](#filtercommit) ||
| [git.filterReference](#filterreference) ||
| [git.force](#force) ||
| [git.handleCommit](#handlecommit) ||
| [git.handleReference](#handlereference) ||
| [git.httpOpts](#httpopts) ||
| [git.noFetchTags](#nofetchtags) ||
| [git.recursive](#recursive) ||
| [git.remote](#remote) ||
| [git.threads](#threads) ||
| [git.useLocalGitBinary](#uselocalgitbinary) ||
| [git.verify](#verify) ||


## 函数定义
### Checkout

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


### Clone

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


### Fetch

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


### GitHack

#### 详细描述


#### 定义

`GitHack(remoteRepoURL string, localPath string, opts ...Option) (finalErr error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| remoteRepoURL | `string` |   |
| localPath | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| finalErr | `error` |   |


### IterateCommit

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


### Pull

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


### SetProxy

#### 详细描述


#### 定义

`SetProxy(proxies ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |


### auth

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


### checkoutCreate

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


### checkoutForce

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


### checkoutKeep

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


### context

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


### depth

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


### fetchAllTags

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


### filterCommit

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


### filterReference

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


### force

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


### handleCommit

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


### handleReference

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


### httpOpts

#### 详细描述


#### 定义

`httpOpts(opts ...yaklib.PocConfig) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...yaklib.PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### noFetchTags

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


### recursive

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


### remote

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


### threads

#### 详细描述


#### 定义

`threads(threads int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| threads | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### useLocalGitBinary

#### 详细描述


#### 定义

`useLocalGitBinary(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### verify

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


