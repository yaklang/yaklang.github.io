# git

|函数名|函数描述/介绍|
|:------|:--------|
| [git.Blame](#blame) |Blame 对某个文件在 HEAD 下做 blame，逐行追踪最后修改信息（导出名为 git.Blame） 参数: - repos: 本地仓库路径 - fileName: 仓库内的文件路径 返回值: - blame 结果（逐行的提交信息） - 错误信息|
| [git.BlameCommit](#blamecommit) |BlameWithCommit 在指定 commit 下对某个文件做 blame，逐行追踪最后修改信息（导出名为 git.BlameCommit） 参数: - repos: 本地仓库路径 - fileName: 仓库内的文件路径 - rev: 目标 commit/引用 返回值: - blame 结果...|
| [git.Branch](#branch) |GetAllBranches 获取本地仓库中的所有引用名（导出名为 git.Branch） 参数: - repos: 本地仓库路径 返回值: - 引用名列表 - 错误信息|
| [git.Checkout](#checkout) |Checkout 用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为 参数: - localPath: 本地仓库路径 - ref: 要检出的分支名或引用 - opts: 可选项，如 git.checkoutC...|
| [git.Clone](#clone) |Clone 用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为 参数: - u: 远程仓库地址 - localPath: 本地存储路径 - opt: 可选项，如 git.recursive、git.verify、git.depth、git.auth 等 返回值: -...|
| [git.Fetch](#fetch) |Fetch 用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为 参数: - localPath: 本地仓库路径 - opts: 可选项，如 git.verify、git.remote、git.fetchAllTags 等 返回值: - 错误信息|
| [git.FileSystemCurrentDay](#filesystemcurrentday) |FileSystemCurrentDay 获取当前自然日的文件系统（导出名为 git.FileSystemCurrentDay） 参数: - repos: 本地仓库路径 返回值: - 当天变更聚合得到的文件系统 - 错误信息|
| [git.FileSystemCurrentMonth](#filesystemcurrentmonth) |FileSystemCurrentMonth 获取当前自然月的文件系统（导出名为 git.FileSystemCurrentMonth） 参数: - repos: 本地仓库路径 返回值: - 本月变更聚合得到的文件系统 - 错误信息|
| [git.FileSystemCurrentWeek](#filesystemcurrentweek) |FileSystemCurrentWeek 获取当前自然周（周一到周天）的文件系统（导出名为 git.FileSystemCurrentWeek） 参数: - repos: 本地仓库路径 返回值: - 本周内变更聚合得到的文件系统 - 错误信息|
| [git.FileSystemFromCommit](#filesystemfromcommit) |FileSystemFromCommit 从指定的commit中获取文件系统 参数: - repos: 本地仓库路径 - commitHash: 目标 commit 的哈希 返回值: - 该 commit 对应的文件系统 - 错误信息|
| [git.FileSystemFromCommitDateRange](#filesystemfromcommitdaterange) |FileSystemFromCommitDateRange 根据日期范围获取文件系统（导出名为 git.FileSystemFromCommitDateRange） 参数: - repos: 本地仓库路径 - startDate: 起始日期，支持多种格式和类型（字符串、时间戳等） - endDate...|
| [git.FileSystemFromCommitRange](#filesystemfromcommitrange) |FileSystemFromCommitRange 从commit范围中获取文件系统 参数: - repos: 本地仓库路径 - start: 起始 commit（旧） - end: 结束 commit（新） 返回值: - 该范围内变更聚合得到的文件系统 - 错误信息|
| [git.FileSystemFromCommits](#filesystemfromcommits) |FileSystemFromCommits 从多个commit中获取文件系统 参数: - repos: 本地仓库路径 - commitHashes: 一个或多个 commit 哈希 返回值: - 合并多个 commit 后的文件系统 - 错误信息|
| [git.FileSystemFromDate](#filesystemfromdate) |FileSystemFromDate 根据指定日期获取该日的文件系统（导出名为 git.FileSystemFromDate） 参数: - repos: 本地仓库路径 - date: 目标日期，支持多种格式和类型 返回值: - 该日变更聚合得到的文件系统 - 错误信息|
| [git.FileSystemFromMonth](#filesystemfrommonth) |FileSystemFromMonth 根据指定年月获取该月的文件系统（导出名为 git.FileSystemFromMonth） 参数: - repos: 本地仓库路径 - year: 年份 - month: 月份（1-12） 返回值: - 该月变更聚合得到的文件系统 - 错误信息|
| [git.FileSystemLastSevenDay](#filesystemlastsevenday) |FileSystemLastSevenDay 获取最近七天的文件系统（导出名为 git.FileSystemLastSevenDay） 参数: - repos: 本地仓库路径 返回值: - 最近七天内变更聚合得到的文件系统 - 错误信息|
| [git.GitHack](#githack) |GitHack 是一个用于利用 Git 源码泄露漏洞的函数 Git源码泄露漏洞是指：由于网站服务器的错误配置，可以通过 HTTP / HTTPS 直接访问到网站 .git 目录下的文件，从而导致源码泄露 参数: - remoteRepoURL: 存在 .git 泄露的目标地址 - localPath...|
| [git.Glance](#glance) |Glance 快速查看本地仓库的概要信息（HEAD 哈希、类型、分支范围等，导出名为 git.Glance） 参数: - repos: 本地仓库路径 返回值: - 概要信息文本，失败时返回空字符串|
| [git.HeadBranch](#headbranch) |GetHeadBranch 获取本地仓库当前 HEAD 所指向的分支/标签引用名（导出名为 git.HeadBranch） 参数: - repos: 本地仓库路径 返回值: - 当前引用名，失败时返回空字符串|
| [git.HeadBranchRange](#headbranchrange) |GetBranchRange 获取某个分支的起止 commit 哈希范围（导出名为 git.HeadBranchRange） 参数: - repos: 本地仓库路径 - branchName: 分支引用名 返回值: - 起始 commit 哈希 - 结束 commit 哈希 - 错误信息|
| [git.HeadHash](#headhash) |GetHeadHash 获取本地仓库当前 HEAD 的 commit 哈希（导出名为 git.HeadHash） 参数: - repos: 本地仓库路径 返回值: - HEAD 的 commit 哈希字符串，失败时返回空字符串|
| [git.IterateCommit](#iteratecommit) |IterateCommit 用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数 参数: - localRepos: 本地仓库路径 - opt: 可选项，如 git.filterReference、git...|
| [git.ParentHash](#parenthash) |GetParentCommitHash 获取指定 commit 的父 commit 哈希（导出名为 git.ParentHash） 参数: - repos: 本地仓库路径 - commit: 目标 commit（可为短哈希或引用） 返回值: - 父 commit 哈希 - 错误信息|
| [git.Pull](#pull) |Pull 用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为 参数: - localPath: 本地仓库路径 - opts: 可选项，如 git.verify、git.remote、git.auth 等 ...|
| [git.RevParse](#revparse) |RevParse 将一个引用（分支名、标签、短哈希等）解析为完整的 commit 哈希（导出名为 git.RevParse） 参数: - repos: 本地仓库路径 - rev: 待解析的引用 返回值: - 完整的 commit 哈希 - 错误信息|
| [git.SetProxy](#setproxy) |SetProxy 是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理 参数: - proxies: 一个或多个代理地址 返回值: - 无|
| [git.auth](#auth) |auth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的认证用户名和密码|
| [git.branch](#branch) |WithBranch 指定其他 Git 操作（例如 Clone）时使用的分支（导出名为 git.branch） 参数: - branch: 分支名 返回值: - 选项函数|
| [git.checkoutCreate](#checkoutcreate) |fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否创建新分支|
| [git.checkoutForce](#checkoutforce) |fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否强制|
| [git.checkoutKeep](#checkoutkeep) |checkoutKeep 是一个选项函数，用于指定检出(checkout)操作时，本地更改（索引或工作树更改）是否被保留，如果保留，就可以将它们提交到目标分支，默认为false|
| [git.context](#context) |context 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的上下文|
| [git.depth](#depth) |depth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的最大深度，默认为1|
| [git.fetchAllTags](#fetchalltags) |fetchAllTags 是一个选项函数，用于指定获取(fetch)操作时是否拉取所有标签|
| [git.filterCommit](#filtercommit) |filterCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到提交记录时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个提交记录|
| [git.filterReference](#filterreference) |filterReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到引用时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个引用|
| [git.force](#force) |force 是一个选项函数，用于指定其他 Git 操作（例如Pull）时是否强制执行，默认为false|
| [git.handleCommit](#handlecommit) |handleCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到一个过滤后的提交记录时，就会调用这个回调函数|
| [git.handleReference](#handlereference) |handleReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到过滤后的引用时，就会调用这个回调函数|
| [git.httpOpts](#httpopts) |httpOpts 是一个GitHack选项函数，用于指定GitHack的HTTP选项，其接收零个到多个poc的请求选项函数|
| [git.noFetchTags](#nofetchtags) |noFetchTags 是一个选项函数，用于指定获取(fetch)操作时是否不拉取标签|
| [git.recursive](#recursive) |recursive 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的是否递归克隆子模块，默认为false|
| [git.remote](#remote) |remote 是一个选项函数，用于指定其他 Git 操作（例如Pull）时的远程仓库名称，默认为origin|
| [git.threads](#threads) |threads 是一个GitHack选项函数，用于指定并发数，默认为8|
| [git.useLocalGitBinary](#uselocalgitbinary) |useLocalGitBinary 是一个GitHack选项函数，用于指定是否使用本地环境变量的git二进制文件来执行`git fsck`命令，这个命令用于尽可能恢复完整的git仓库，默认为true|
| [git.verify](#verify) |verify 是一个选项函数，用于指定其他 Git 操作（例如Clone）时是否验证TLS证书|
| [git.withInsecureIgnoreHostKey](#withinsecureignorehostkey) ||
| [git.withPrivateKey](#withprivatekey) |WithPrivateKey 使用 SSH 私钥文件进行认证（导出名为 git.withPrivateKey） 参数: - userName: SSH 用户名（通常为 git） - keyPath: 私钥文件路径 - password: 私钥口令，无口令时传空字符串 返回值: - 选项函数|
| [git.withPrivateKeyContent](#withprivatekeycontent) |WithPrivateKeyContent 使用私钥内容进行认证|


## 函数定义
### Blame

#### 详细描述
Blame 对某个文件在 HEAD 下做 blame，逐行追踪最后修改信息（导出名为 git.Blame）

参数:

  - repos: 本地仓库路径

  - fileName: 仓库内的文件路径



返回值:

  - blame 结果（逐行的提交信息）

  - 错误信息




Example:

``````````````yak
// 对文件做 blame（示意性示例，需替换为真实仓库路径）
lines = git.Blame("/path/to/repo", "README.md")~
println(lines.String())
``````````````


#### 定义

`Blame(repos string, fileName string) (BlameLines, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| fileName | `string` | 仓库内的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BlameLines` | blame 结果（逐行的提交信息） |
| r2 | `error` | 错误信息 |


### BlameCommit

#### 详细描述
BlameWithCommit 在指定 commit 下对某个文件做 blame，逐行追踪最后修改信息（导出名为 git.BlameCommit）

参数:

  - repos: 本地仓库路径

  - fileName: 仓库内的文件路径

  - rev: 目标 commit/引用



返回值:

  - blame 结果（逐行的提交信息）

  - 错误信息




Example:

``````````````yak
// 在指定提交下对文件做 blame（示意性示例，需替换为真实仓库路径）
lines = git.BlameCommit("/path/to/repo", "README.md", "HEAD")~
println(lines.String())
``````````````


#### 定义

`BlameCommit(repos string, fileName string, rev string) (BlameLines, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| fileName | `string` | 仓库内的文件路径 |
| rev | `string` | 目标 commit/引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BlameLines` | blame 结果（逐行的提交信息） |
| r2 | `error` | 错误信息 |


### Branch

#### 详细描述
GetAllBranches 获取本地仓库中的所有引用名（导出名为 git.Branch）

参数:

  - repos: 本地仓库路径



返回值:

  - 引用名列表

  - 错误信息




Example:

``````````````yak
// 列出仓库的引用（示意性示例，需替换为真实仓库路径）
branches = git.Branch("/path/to/repo")~
dump(branches)
``````````````


#### 定义

`Branch(repos string) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 引用名列表 |
| r2 | `error` | 错误信息 |


### Checkout

#### 详细描述
Checkout 用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为

参数:

  - localPath: 本地仓库路径

  - ref: 要检出的分支名或引用

  - opts: 可选项，如 git.checkoutCreate、git.checkoutForce、git.checkoutKeep 等



返回值:

  - 错误信息




Example:

``````````````yak
git.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true)) // 创建新分支
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true)) // 强制切换
``````````````


#### 定义

`Checkout(localPath string, ref string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `string` | 本地仓库路径 |
| ref | `string` | 要检出的分支名或引用 |
| opts | `...Option` | 可选项，如 git.checkoutCreate、git.checkoutForce、git.checkoutKeep 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Clone

#### 详细描述
Clone 用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为

参数:

  - u: 远程仓库地址

  - localPath: 本地存储路径

  - opt: 可选项，如 git.recursive、git.verify、git.depth、git.auth 等



返回值:

  - 错误信息




Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))
``````````````


#### 定义

`Clone(u string, localPath string, opt ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` | 远程仓库地址 |
| localPath | `string` | 本地存储路径 |
| opt | `...Option` | 可选项，如 git.recursive、git.verify、git.depth、git.auth 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Fetch

#### 详细描述
Fetch 用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为

参数:

  - localPath: 本地仓库路径

  - opts: 可选项，如 git.verify、git.remote、git.fetchAllTags 等



返回值:

  - 错误信息




Example:

``````````````yak
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"), git.fetchAllTags(true))
``````````````


#### 定义

`Fetch(localPath string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `string` | 本地仓库路径 |
| opts | `...Option` | 可选项，如 git.verify、git.remote、git.fetchAllTags 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### FileSystemCurrentDay

#### 详细描述
FileSystemCurrentDay 获取当前自然日的文件系统（导出名为 git.FileSystemCurrentDay）

参数:

  - repos: 本地仓库路径



返回值:

  - 当天变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取今天的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemCurrentDay("/path/to/repo")~
dump(fs)
``````````````


#### 定义

`FileSystemCurrentDay(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 当天变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemCurrentMonth

#### 详细描述
FileSystemCurrentMonth 获取当前自然月的文件系统（导出名为 git.FileSystemCurrentMonth）

参数:

  - repos: 本地仓库路径



返回值:

  - 本月变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取本月的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemCurrentMonth("/path/to/repo")~
dump(fs)
``````````````


#### 定义

`FileSystemCurrentMonth(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 本月变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemCurrentWeek

#### 详细描述
FileSystemCurrentWeek 获取当前自然周（周一到周天）的文件系统（导出名为 git.FileSystemCurrentWeek）

参数:

  - repos: 本地仓库路径



返回值:

  - 本周内变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取本周的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemCurrentWeek("/path/to/repo")~
dump(fs)
``````````````


#### 定义

`FileSystemCurrentWeek(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 本周内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemFromCommit

#### 详细描述
FileSystemFromCommit 从指定的commit中获取文件系统

参数:

  - repos: 本地仓库路径

  - commitHash: 目标 commit 的哈希



返回值:

  - 该 commit 对应的文件系统

  - 错误信息




Example:

``````````````yak
fs := git.FileSystemFromCommit("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")~
fs, err := git.FileSystemFromCommit("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")
``````````````


#### 定义

`FileSystemFromCommit(repos string, commitHash string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| commitHash | `string` | 目标 commit 的哈希 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 该 commit 对应的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemFromCommitDateRange

#### 详细描述
FileSystemFromCommitDateRange 根据日期范围获取文件系统（导出名为 git.FileSystemFromCommitDateRange）

参数:

  - repos: 本地仓库路径

  - startDate: 起始日期，支持多种格式和类型（字符串、时间戳等）

  - endDate: 结束日期，支持多种格式和类型



返回值:

  - 该日期范围内变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取某段日期范围内的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemFromCommitDateRange("/path/to/repo", "2024-01-01", "2024-02-01")~
dump(fs)
``````````````


#### 定义

`FileSystemFromCommitDateRange(repos string, startDate any, endDate any) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| startDate | `any` | 起始日期，支持多种格式和类型（字符串、时间戳等） |
| endDate | `any` | 结束日期，支持多种格式和类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 该日期范围内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemFromCommitRange

#### 详细描述
FileSystemFromCommitRange 从commit范围中获取文件系统

参数:

  - repos: 本地仓库路径

  - start: 起始 commit（旧）

  - end: 结束 commit（新）



返回值:

  - 该范围内变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
fs := git.FileSystemFromCommitRange("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560", "54165a396a219d085980dca623ae1ff6582033ad")~
``````````````


#### 定义

`FileSystemFromCommitRange(repos string, start string, end string) (*filesys.VirtualFS, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| start | `string` | 起始 commit（旧） |
| end | `string` | 结束 commit（新） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*filesys.VirtualFS` | 该范围内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemFromCommits

#### 详细描述
FileSystemFromCommits 从多个commit中获取文件系统

参数:

  - repos: 本地仓库路径

  - commitHashes: 一个或多个 commit 哈希



返回值:

  - 合并多个 commit 后的文件系统

  - 错误信息




Example:

``````````````yak
fs := git.FileSystemFromCommits("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560", "54165a396a219d085980dca623ae1ff6582033ad")~
fs, err := git.FileSystemFromCommits("path/to/repo", "54165a396a219d085980dca623ae1ff6582033ad", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")
``````````````


#### 定义

`FileSystemFromCommits(repos string, commitHashes ...string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| commitHashes | `...string` | 一个或多个 commit 哈希 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 合并多个 commit 后的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemFromDate

#### 详细描述
FileSystemFromDate 根据指定日期获取该日的文件系统（导出名为 git.FileSystemFromDate）

参数:

  - repos: 本地仓库路径

  - date: 目标日期，支持多种格式和类型



返回值:

  - 该日变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取指定日期的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemFromDate("/path/to/repo", "2024-01-15")~
dump(fs)
``````````````


#### 定义

`FileSystemFromDate(repos string, date any) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| date | `any` | 目标日期，支持多种格式和类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 该日变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemFromMonth

#### 详细描述
FileSystemFromMonth 根据指定年月获取该月的文件系统（导出名为 git.FileSystemFromMonth）

参数:

  - repos: 本地仓库路径

  - year: 年份

  - month: 月份（1-12）



返回值:

  - 该月变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取指定年月的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemFromMonth("/path/to/repo", 2024, 1)~
dump(fs)
``````````````


#### 定义

`FileSystemFromMonth(repos string, year int, month int) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| year | `int` | 年份 |
| month | `int` | 月份（1-12） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 该月变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### FileSystemLastSevenDay

#### 详细描述
FileSystemLastSevenDay 获取最近七天的文件系统（导出名为 git.FileSystemLastSevenDay）

参数:

  - repos: 本地仓库路径



返回值:

  - 最近七天内变更聚合得到的文件系统

  - 错误信息




Example:

``````````````yak
// 获取最近七天的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemLastSevenDay("/path/to/repo")~
dump(fs)
``````````````


#### 定义

`FileSystemLastSevenDay(repos string) (filesys_interface.FileSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `filesys_interface.FileSystem` | 最近七天内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |


### GitHack

#### 详细描述
GitHack 是一个用于利用 Git 源码泄露漏洞的函数

Git源码泄露漏洞是指：由于网站服务器的错误配置，可以通过 HTTP / HTTPS 直接访问到网站 .git 目录下的文件，从而导致源码泄露

参数:

  - remoteRepoURL: 存在 .git 泄露的目标地址

  - localPath: 本地保存还原结果的路径

  - opts: 可选项，如 git.threads、git.context、git.httpOpts 等



返回值:

  - 错误信息




Example:

``````````````yak
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))
``````````````


#### 定义

`GitHack(remoteRepoURL string, localPath string, opts ...Option) (finalErr error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| remoteRepoURL | `string` | 存在 .git 泄露的目标地址 |
| localPath | `string` | 本地保存还原结果的路径 |
| opts | `...Option` | 可选项，如 git.threads、git.context、git.httpOpts 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| finalErr | `error` | 错误信息 |


### Glance

#### 详细描述
Glance 快速查看本地仓库的概要信息（HEAD 哈希、类型、分支范围等，导出名为 git.Glance）

参数:

  - repos: 本地仓库路径



返回值:

  - 概要信息文本，失败时返回空字符串




Example:

``````````````yak
// 查看本地仓库概要（示意性示例，需替换为真实仓库路径）
info = git.Glance("/path/to/repo")
println(info)
``````````````


#### 定义

`Glance(repos string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 概要信息文本，失败时返回空字符串 |


### HeadBranch

#### 详细描述
GetHeadBranch 获取本地仓库当前 HEAD 所指向的分支/标签引用名（导出名为 git.HeadBranch）

参数:

  - repos: 本地仓库路径



返回值:

  - 当前引用名，失败时返回空字符串




Example:

``````````````yak
// 读取本地仓库当前分支（示意性示例，需替换为真实仓库路径）
branch = git.HeadBranch("/path/to/repo")
println(branch)
``````````````


#### 定义

`HeadBranch(repos string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前引用名，失败时返回空字符串 |


### HeadBranchRange

#### 详细描述
GetBranchRange 获取某个分支的起止 commit 哈希范围（导出名为 git.HeadBranchRange）

参数:

  - repos: 本地仓库路径

  - branchName: 分支引用名



返回值:

  - 起始 commit 哈希

  - 结束 commit 哈希

  - 错误信息




Example:

``````````````yak
// 获取某分支的起止 commit（示意性示例，需替换为真实仓库路径）
start, end, err = git.HeadBranchRange("/path/to/repo", "refs/heads/main")
if err != nil { die(err) }
println(start, end)
``````````````


#### 定义

`HeadBranchRange(repos string, branchName string) (start string, end string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| branchName | `string` | 分支引用名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| start | `string` | 起始 commit 哈希 |
| end | `string` | 结束 commit 哈希 |
| err | `error` | 错误信息 |


### HeadHash

#### 详细描述
GetHeadHash 获取本地仓库当前 HEAD 的 commit 哈希（导出名为 git.HeadHash）

参数:

  - repos: 本地仓库路径



返回值:

  - HEAD 的 commit 哈希字符串，失败时返回空字符串




Example:

``````````````yak
// 读取本地仓库 HEAD（示意性示例，需替换为真实仓库路径）
hash = git.HeadHash("/path/to/repo")
println(hash)
``````````````


#### 定义

`HeadHash(repos string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | HEAD 的 commit 哈希字符串，失败时返回空字符串 |


### IterateCommit

#### 详细描述
IterateCommit 用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数

参数:

  - localRepos: 本地仓库路径

  - opt: 可选项，如 git.filterReference、git.filterCommit、git.handleCommit、git.handleReference 等



返回值:

  - 错误信息




Example:

``````````````yak
// 遍历提交记录，过滤名字中包含ci的引用记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.filterCommit((c) => { return c.Author.Name != "xxx" }),
git.handleCommit((c) => { println(c.String()) }))
``````````````


#### 定义

`IterateCommit(localRepos string, opt ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localRepos | `string` | 本地仓库路径 |
| opt | `...Option` | 可选项，如 git.filterReference、git.filterCommit、git.handleCommit、git.handleReference 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### ParentHash

#### 详细描述
GetParentCommitHash 获取指定 commit 的父 commit 哈希（导出名为 git.ParentHash）

参数:

  - repos: 本地仓库路径

  - commit: 目标 commit（可为短哈希或引用）



返回值:

  - 父 commit 哈希

  - 错误信息




Example:

``````````````yak
// 获取某 commit 的父提交（示意性示例，需替换为真实仓库路径）
parent, err = git.ParentHash("/path/to/repo", "HEAD")
if err != nil { die(err) }
println(parent)
``````````````


#### 定义

`ParentHash(repos string, commit string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| commit | `string` | 目标 commit（可为短哈希或引用） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 父 commit 哈希 |
| r2 | `error` | 错误信息 |


### Pull

#### 详细描述
Pull 用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为

参数:

  - localPath: 本地仓库路径

  - opts: 可选项，如 git.verify、git.remote、git.auth 等



返回值:

  - 错误信息




Example:

``````````````yak
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))
``````````````


#### 定义

`Pull(localPath string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `string` | 本地仓库路径 |
| opts | `...Option` | 可选项，如 git.verify、git.remote、git.auth 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### RevParse

#### 详细描述
RevParse 将一个引用（分支名、标签、短哈希等）解析为完整的 commit 哈希（导出名为 git.RevParse）

参数:

  - repos: 本地仓库路径

  - rev: 待解析的引用



返回值:

  - 完整的 commit 哈希

  - 错误信息




Example:

``````````````yak
// 解析 HEAD 的完整哈希（示意性示例，需替换为真实仓库路径）
hash, err = git.RevParse("/path/to/repo", "HEAD")
if err != nil { die(err) }
println(hash)
``````````````


#### 定义

`RevParse(repos string, rev string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repos | `string` | 本地仓库路径 |
| rev | `string` | 待解析的引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 完整的 commit 哈希 |
| r2 | `error` | 错误信息 |


### SetProxy

#### 详细描述
SetProxy 是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理

参数:

  - proxies: 一个或多个代理地址



返回值:

  - 无




Example:

``````````````yak
git.SetProxy("http://127.0.0.1:1080")
``````````````


#### 定义

`SetProxy(proxies ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` | 一个或多个代理地址 |


### auth

#### 详细描述
auth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的认证用户名和密码


Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.auth("admin", "admin"))

参数:
  - username: 认证用户名
  - password: 认证密码

返回值:
  - 选项函数
``````````````


#### 定义

`auth(username string, password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` | 认证用户名 |
| password | `string` | 认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### branch

#### 详细描述
WithBranch 指定其他 Git 操作（例如 Clone）时使用的分支（导出名为 git.branch）

参数:

  - branch: 分支名



返回值:

  - 选项函数




Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "/tmp/yaklang", git.branch("main"))
``````````````


#### 定义

`branch(branch string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| branch | `string` | 分支名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### checkoutCreate

#### 详细描述
fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否创建新分支


Example:

``````````````yak
git.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true))

参数:
  - b: 检出时是否创建新分支

返回值:
  - 选项函数
``````````````


#### 定义

`checkoutCreate(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 检出时是否创建新分支 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### checkoutForce

#### 详细描述
fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否强制


Example:

``````````````yak
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true))

参数:
  - b: 检出时是否强制覆盖

返回值:
  - 选项函数
``````````````


#### 定义

`checkoutForce(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 检出时是否强制覆盖 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### checkoutKeep

#### 详细描述
checkoutKeep 是一个选项函数，用于指定检出(checkout)操作时，本地更改（索引或工作树更改）是否被保留，如果保留，就可以将它们提交到目标分支，默认为false


Example:

``````````````yak
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutKeep(true))

参数:
  - b: 检出时是否保留本地更改

返回值:
  - 选项函数
``````````````


#### 定义

`checkoutKeep(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 检出时是否保留本地更改 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### context

#### 详细描述
context 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的上下文


Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.context(context.New()))

参数:
  - ctx: 上下文，用于控制操作的取消

返回值:
  - 选项函数
``````````````


#### 定义

`context(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制操作的取消 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### depth

#### 详细描述
depth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的最大深度，默认为1


Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.Depth(1))

参数:
  - depth: 克隆/拉取的最大深度

返回值:
  - 选项函数
``````````````


#### 定义

`depth(depth int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` | 克隆/拉取的最大深度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### fetchAllTags

#### 详细描述
fetchAllTags 是一个选项函数，用于指定获取(fetch)操作时是否拉取所有标签


Example:

``````````````yak
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.fetchAllTags(true)) // 拉取所有标签

参数:
  - b: 是否拉取所有标签

返回值:
  - 选项函数
``````````````


#### 定义

`fetchAllTags(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否拉取所有标签 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### filterCommit

#### 详细描述
filterCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到提交记录时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个提交记录


Example:

``````````````yak
// 遍历提交记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterCommit((c) => { return c.Author.Name != "xxx" }),
git.handleCommit((c) => { println(c.String()) }))

参数:
  - f: 过滤提交记录的回调函数，返回 true 表示保留

返回值:
  - 选项函数
``````````````


#### 定义

`filterCommit(f func(r *object.Commit) bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *object.Commit) bool` | 过滤提交记录的回调函数，返回 true 表示保留 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### filterReference

#### 详细描述
filterReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到引用时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个引用


Example:

``````````````yak
// 遍历提交记录，过滤名字中包含ci的引用记录，打印剩余的每个引用记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.handleReference((ref) => { println(ref.String()) }))

参数:
  - f: 过滤引用的回调函数，返回 true 表示保留

返回值:
  - 选项函数
``````````````


#### 定义

`filterReference(f func(r *plumbing.Reference) bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *plumbing.Reference) bool` | 过滤引用的回调函数，返回 true 表示保留 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### force

#### 详细描述
force 是一个选项函数，用于指定其他 Git 操作（例如Pull）时是否强制执行，默认为false


Example:

``````````````yak
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.force(true))

参数:
  - b: 是否强制执行

返回值:
  - 选项函数
``````````````


#### 定义

`force(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否强制执行 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### handleCommit

#### 详细描述
handleCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到一个过滤后的提交记录时，就会调用这个回调函数


Example:

``````````````yak
// 遍历提交记录，打印每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang", git.handleCommit((c) => { println(c.String()) }))

参数:
  - f: 处理每个提交记录的回调函数

返回值:
  - 选项函数
``````````````


#### 定义

`handleCommit(f func(r *object.Commit) error) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *object.Commit) error` | 处理每个提交记录的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### handleReference

#### 详细描述
handleReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到过滤后的引用时，就会调用这个回调函数


Example:

``````````````yak
// 遍历提交记录，过滤名字中包含ci的引用记录，打印剩余的每个引用记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.handleReference((ref) => { println(ref.String()) }))

参数:
  - f: 处理每个引用的回调函数

返回值:
  - 选项函数
``````````````


#### 定义

`handleReference(f func(r *plumbing.Reference) error) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(r *plumbing.Reference) error` | 处理每个引用的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### httpOpts

#### 详细描述
httpOpts 是一个GitHack选项函数，用于指定GitHack的HTTP选项，其接收零个到多个poc的请求选项函数


Example:

``````````````yak
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.httpOpts(poc.timeout(10), poc.https(true)))

参数:
  - opts: 零个到多个 poc 请求选项函数

返回值:
  - 选项函数
``````````````


#### 定义

`httpOpts(opts ...poc.PocConfigOption) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...poc.PocConfigOption` | 零个到多个 poc 请求选项函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### noFetchTags

#### 详细描述
noFetchTags 是一个选项函数，用于指定获取(fetch)操作时是否不拉取标签


Example:

``````````````yak
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.noFetchTags(true)) // 不拉取标签

参数:
  - b: 是否不拉取标签

返回值:
  - 选项函数
``````````````


#### 定义

`noFetchTags(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否不拉取标签 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### recursive

#### 详细描述
recursive 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的是否递归克隆子模块，默认为false


Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true))

参数:
  - b: 是否递归克隆子模块

返回值:
  - 选项函数
``````````````


#### 定义

`recursive(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否递归克隆子模块 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### remote

#### 详细描述
remote 是一个选项函数，用于指定其他 Git 操作（例如Pull）时的远程仓库名称，默认为origin


Example:

``````````````yak
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))

参数:
  - remote: 远程仓库名称

返回值:
  - 选项函数
``````````````


#### 定义

`remote(remote string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| remote | `string` | 远程仓库名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### threads

#### 详细描述
threads 是一个GitHack选项函数，用于指定并发数，默认为8


Example:

``````````````yak
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))

参数:
  - threads: 并发数

返回值:
  - 选项函数
``````````````


#### 定义

`threads(threads int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| threads | `int` | 并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### useLocalGitBinary

#### 详细描述
useLocalGitBinary 是一个GitHack选项函数，用于指定是否使用本地环境变量的git二进制文件来执行`git fsck`命令，这个命令用于尽可能恢复完整的git仓库，默认为true


Example:

``````````````yak
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.useLocalGitBinary(true))

参数:
  - b: 是否使用本地 git 二进制执行 git fsck 以尽量恢复完整仓库

返回值:
  - 选项函数
``````````````


#### 定义

`useLocalGitBinary(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用本地 git 二进制执行 git fsck 以尽量恢复完整仓库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### verify

#### 详细描述
verify 是一个选项函数，用于指定其他 Git 操作（例如Clone）时是否验证TLS证书


Example:

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))

参数:
  - b: 是否验证 TLS 证书

返回值:
  - 选项函数
``````````````


#### 定义

`verify(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否验证 TLS 证书 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### withInsecureIgnoreHostKey

#### 详细描述
暂无描述

#### 定义

`withInsecureIgnoreHostKey() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### withPrivateKey

#### 详细描述
WithPrivateKey 使用 SSH 私钥文件进行认证（导出名为 git.withPrivateKey）

参数:

  - userName: SSH 用户名（通常为 git）

  - keyPath: 私钥文件路径

  - password: 私钥口令，无口令时传空字符串



返回值:

  - 选项函数




Example:

``````````````yak
git.Clone("git@github.com:user/repo.git", "/tmp/repo", git.withPrivateKey("git", "/root/.ssh/id_rsa", ""), git.withInsecureIgnoreHostKey())
``````````````


#### 定义

`withPrivateKey(userName string, keyPath string, password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userName | `string` | SSH 用户名（通常为 git） |
| keyPath | `string` | 私钥文件路径 |
| password | `string` | 私钥口令，无口令时传空字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


### withPrivateKeyContent

#### 详细描述
WithPrivateKeyContent 使用私钥内容进行认证


Example:

``````````````yak
keyContent := `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmU...
-----END OPENSSH PRIVATE KEY-----`
git.Clone("git@github.com:user/repo.git", "/tmp/repo",

	git.WithPrivateKeyContent("git", keyContent, ""),
	git.WithInsecureIgnoreHostKey(),  // 跳过主机密钥验证

)

参数:
  - userName: SSH 用户名（通常为 git）
  - keyContent: PEM 格式的私钥内容
  - password: 私钥口令，无口令时传空字符串

返回值:
  - 选项函数
``````````````


#### 定义

`withPrivateKeyContent(userName string, keyContent string, password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userName | `string` | SSH 用户名（通常为 git） |
| keyContent | `string` | PEM 格式的私钥内容 |
| password | `string` | 私钥口令，无口令时传空字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 选项函数 |


