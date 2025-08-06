# git

|函数名|函数描述/介绍|
|:------|:--------|
| [git.Blame](#blame) ||
| [git.BlameCommit](#blamecommit) ||
| [git.Branch](#branch) ||
| [git.Checkout](#checkout) |Checkout 用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为  |
| [git.Clone](#clone) |Clone 用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为  |
| [git.Fetch](#fetch) |Fetch 用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为  |
| [git.FileSystemCurrentDay](#filesystemcurrentday) |FileSystemCurrentDay 获取当前自然日的文件系统 |
| [git.FileSystemCurrentMonth](#filesystemcurrentmonth) |FileSystemCurrentMonth 获取当前自然月的文件系统 |
| [git.FileSystemCurrentWeek](#filesystemcurrentweek) |FileSystemCurrentWeek 获取当前自然周（周一到周天）的文件系统 |
| [git.FileSystemFromCommit](#filesystemfromcommit) |FileSystemFromCommit 从指定的commit中获取文件系统    |
| [git.FileSystemFromCommitDateRange](#filesystemfromcommitdaterange) |FileSystemFromCommitDateRange 根据日期范围获取文件系统 startDate: 起始日期，支持多种格式和类型 endDate: 结束日期，支持多种格式和类型 |
| [git.FileSystemFromCommitRange](#filesystemfromcommitrange) |FileSystemFromCommitRange 从commit范围中获取文件系统    |
| [git.FileSystemFromCommits](#filesystemfromcommits) |FileSystemFromCommits 从多个commit中获取文件系统    |
| [git.FileSystemFromDate](#filesystemfromdate) |FileSystemFromDate 根据指定日期获取该日的文件系统 |
| [git.FileSystemFromMonth](#filesystemfrommonth) |FileSystemFromMonth 根据指定年月获取该月的文件系统 |
| [git.FileSystemLastSevenDay](#filesystemlastsevenday) |FileSystemLastSevenDay 获取最近七天的文件系统 |
| [git.GitHack](#githack) |GitHack 是一个用于利用 Git 源码泄露漏洞的函数  Git源码泄露漏洞是指：由于网站服务器的错误配置，可以通过 HTTP / HTTPS 直接访问到网站 .git 目录下的文件，从而导致源码泄露  |
| [git.Glance](#glance) ||
| [git.HeadBranch](#headbranch) ||
| [git.HeadBranchRange](#headbranchrange) ||
| [git.HeadHash](#headhash) ||
| [git.IterateCommit](#iteratecommit) |IterateCommit 用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数  |
| [git.ParentHash](#parenthash) ||
| [git.Pull](#pull) |Pull 用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为  |
| [git.RevParse](#revparse) ||
| [git.SetProxy](#setproxy) |SetProxy 是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理  |
| [git.auth](#auth) |auth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的认证用户名和密码  |
| [git.checkoutCreate](#checkoutcreate) |fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否创建新分支  |
| [git.checkoutForce](#checkoutforce) |fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否强制  |
| [git.checkoutKeep](#checkoutkeep) |checkoutKeep 是一个选项函数，用于指定检出(checkout)操作时，本地更改（索引或工作树更改）是否被保留，如果保留，就可以将它们提交到目标分支，默认为false  |
| [git.context](#context) |context 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的上下文  |
| [git.depth](#depth) |depth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的最大深度，默认为1  |
| [git.fetchAllTags](#fetchalltags) |fetchAllTags 是一个选项函数，用于指定获取(fetch)操作时是否拉取所有标签  |
| [git.filterCommit](#filtercommit) |filterCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到提交记录时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个提交记录  |
| [git.filterReference](#filterreference) |filterReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到引用时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个引用  |
| [git.force](#force) |force 是一个选项函数，用于指定其他 Git 操作（例如Pull）时是否强制执行，默认为false  |
| [git.handleCommit](#handlecommit) |handleCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到一个过滤后的提交记录时，就会调用这个回调函数  |
| [git.handleReference](#handlereference) |handleReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到过滤后的引用时，就会调用这个回调函数  |
| [git.httpOpts](#httpopts) |httpOpts 是一个GitHack选项函数，用于指定GitHack的HTTP选项，其接收零个到多个poc的请求选项函数  |
| [git.noFetchTags](#nofetchtags) |noFetchTags 是一个选项函数，用于指定获取(fetch)操作时是否不拉取标签  |
| [git.recursive](#recursive) |recursive 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的是否递归克隆子模块，默认为false  |
| [git.remote](#remote) |remote 是一个选项函数，用于指定其他 Git 操作（例如Pull）时的远程仓库名称，默认为origin  |
| [git.threads](#threads) |threads 是一个GitHack选项函数，用于指定并发数，默认为8  |
| [git.useLocalGitBinary](#uselocalgitbinary) |useLocalGitBinary 是一个GitHack选项函数，用于指定是否使用本地环境变量的git二进制文件来执行`git fsck`命令，这个命令用于尽可能恢复完整的git仓库，默认为true  |
| [git.verify](#verify) |verify 是一个选项函数，用于指定其他 Git 操作（例如Clone）时是否验证TLS证书  |


## 函数定义
### Blame

#### 详细描述


#### 定义

`Blame(repos string, fileName string) (BlameLines, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| fileName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BlameLines` |   |
| r2 | `error` |   |


### BlameCommit

#### 详细描述


#### 定义

`BlameCommit(repos string, fileName string, rev string) (BlameLines, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| fileName | `string` |   |
| rev | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BlameLines` |   |
| r2 | `error` |   |


### Branch

#### 详细描述


#### 定义

`Branch(repos string) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |
| r2 | `error` |   |


### Checkout

#### 详细描述
Checkout 用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为

Example:
```
git.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true)) // 创建新分支
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true)) // 强制切换
```


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
Clone 用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为

Example:
```
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))
```


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
Fetch 用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为

Example:
```
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"), git.fetchAllTags(true))
```


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


### FileSystemCurrentDay

#### 详细描述
FileSystemCurrentDay 获取当前自然日的文件系统


#### 定义

`FileSystemCurrentDay(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemCurrentMonth

#### 详细描述
FileSystemCurrentMonth 获取当前自然月的文件系统


#### 定义

`FileSystemCurrentMonth(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemCurrentWeek

#### 详细描述
FileSystemCurrentWeek 获取当前自然周（周一到周天）的文件系统


#### 定义

`FileSystemCurrentWeek(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemFromCommit

#### 详细描述
FileSystemFromCommit 从指定的commit中获取文件系统



Example:
```
fs := git.FileSystemFromCommit("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")~
fs, err := git.FileSystemFromCommit("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")
```


#### 定义

`FileSystemFromCommit(repos string, commitHash string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| commitHash | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemFromCommitDateRange

#### 详细描述
FileSystemFromCommitDateRange 根据日期范围获取文件系统
startDate: 起始日期，支持多种格式和类型
endDate: 结束日期，支持多种格式和类型


#### 定义

`FileSystemFromCommitDateRange(repos string, startDate any, endDate any) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| startDate | `any` |   |
| endDate | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemFromCommitRange

#### 详细描述
FileSystemFromCommitRange 从commit范围中获取文件系统



Example:
```
fs := git.FileSystemFromCommitRange("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560", "54165a396a219d085980dca623ae1ff6582033ad")~
```


#### 定义

`FileSystemFromCommitRange(repos string, start string, end string) (*filesys.VirtualFS, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| start | `string` |   |
| end | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*filesys.VirtualFS` |   |
| r2 | `error` |   |


### FileSystemFromCommits

#### 详细描述
FileSystemFromCommits 从多个commit中获取文件系统



Example:
```
fs := git.FileSystemFromCommits("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560", "54165a396a219d085980dca623ae1ff6582033ad")~
fs, err := git.FileSystemFromCommits("path/to/repo", "54165a396a219d085980dca623ae1ff6582033ad", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")
```


#### 定义

`FileSystemFromCommits(repos string, commitHashes ...string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| commitHashes | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemFromDate

#### 详细描述
FileSystemFromDate 根据指定日期获取该日的文件系统


#### 定义

`FileSystemFromDate(repos string, date any) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| date | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemFromMonth

#### 详细描述
FileSystemFromMonth 根据指定年月获取该月的文件系统


#### 定义

`FileSystemFromMonth(repos string, year int, month int) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| year | `int` |   |
| month | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### FileSystemLastSevenDay

#### 详细描述
FileSystemLastSevenDay 获取最近七天的文件系统


#### 定义

`FileSystemLastSevenDay(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` |   |
| r2 | `error` |   |


### GitHack

#### 详细描述
GitHack 是一个用于利用 Git 源码泄露漏洞的函数

Git源码泄露漏洞是指：由于网站服务器的错误配置，可以通过 HTTP / HTTPS 直接访问到网站 .git 目录下的文件，从而导致源码泄露

Example:
```
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))
```


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


### Glance

#### 详细描述


#### 定义

`Glance(repos string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### HeadBranch

#### 详细描述


#### 定义

`HeadBranch(repos string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### HeadBranchRange

#### 详细描述


#### 定义

`HeadBranchRange(repos string, branchName string) (start string, end string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| branchName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| start | `string` |   |
| end | `string` |   |
| err | `error` |   |


### HeadHash

#### 详细描述


#### 定义

`HeadHash(repos string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### IterateCommit

#### 详细描述
IterateCommit 用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数

Example:
```
// 遍历提交记录，过滤名字中包含ci的引用记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.filterCommit((c) => { return c.Author.Name != "xxx" }),
git.handleCommit((c) => { println(c.String()) }))
```


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


### ParentHash

#### 详细描述


#### 定义

`ParentHash(repos string, commit string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| commit | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Pull

#### 详细描述
Pull 用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为

Example:
```
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))
```


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


### RevParse

#### 详细描述


#### 定义

`RevParse(repos string, rev string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` |   |
| rev | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### SetProxy

#### 详细描述
SetProxy 是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理

Example:
```
git.SetProxy("http://127.0.0.1:1080")
```


#### 定义

`SetProxy(proxies ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |


### auth

#### 详细描述
auth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的认证用户名和密码

Example:
```
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.auth("admin", "admin"))
```


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
fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否创建新分支

Example:
```
git.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true))
```


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
fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否强制

Example:
```
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true))
```


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
checkoutKeep 是一个选项函数，用于指定检出(checkout)操作时，本地更改（索引或工作树更改）是否被保留，如果保留，就可以将它们提交到目标分支，默认为false

Example:
```
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutKeep(true))
```


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
context 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的上下文

Example:
```
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.context(context.New()))
```


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
depth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的最大深度，默认为1

Example:
```
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.Depth(1))
```


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
fetchAllTags 是一个选项函数，用于指定获取(fetch)操作时是否拉取所有标签

Example:
```
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.fetchAllTags(true)) // 拉取所有标签
```


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
filterCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到提交记录时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个提交记录

Example:
```
// 遍历提交记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterCommit((c) => { return c.Author.Name != "xxx" }),
git.handleCommit((c) => { println(c.String()) }))
```


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
filterReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到引用时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个引用

Example:
```
// 遍历提交记录，过滤名字中包含ci的引用记录，打印剩余的每个引用记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.handleReference((ref) => { println(ref.String()) }))
```


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
force 是一个选项函数，用于指定其他 Git 操作（例如Pull）时是否强制执行，默认为false

Example:
```
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.force(true))
```


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
handleCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到一个过滤后的提交记录时，就会调用这个回调函数

Example:
```
// 遍历提交记录，打印每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang", git.handleCommit((c) => { println(c.String()) }))
```


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
handleReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到过滤后的引用时，就会调用这个回调函数

Example:
```
// 遍历提交记录，过滤名字中包含ci的引用记录，打印剩余的每个引用记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.handleReference((ref) => { println(ref.String()) }))
```


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
httpOpts 是一个GitHack选项函数，用于指定GitHack的HTTP选项，其接收零个到多个poc的请求选项函数

Example:
```
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.httpOpts(poc.timeout(10), poc.https(true)))
```


#### 定义

`httpOpts(opts ...poc.PocConfigOption) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...poc.PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### noFetchTags

#### 详细描述
noFetchTags 是一个选项函数，用于指定获取(fetch)操作时是否不拉取标签

Example:
```
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.noFetchTags(true)) // 不拉取标签
```


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
recursive 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的是否递归克隆子模块，默认为false

Example:
```
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true))
```


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
remote 是一个选项函数，用于指定其他 Git 操作（例如Pull）时的远程仓库名称，默认为origin

Example:
```
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))
```


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
threads 是一个GitHack选项函数，用于指定并发数，默认为8

Example:
```
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))
```


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
useLocalGitBinary 是一个GitHack选项函数，用于指定是否使用本地环境变量的git二进制文件来执行`git fsck`命令，这个命令用于尽可能恢复完整的git仓库，默认为true

Example:
```
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.useLocalGitBinary(true))
```


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
verify 是一个选项函数，用于指定其他 Git 操作（例如Clone）时是否验证TLS证书

Example:
```
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))
```


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


