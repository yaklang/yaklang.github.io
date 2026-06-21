# git {#library-git}

`git` 库提供 Git 仓库操作能力，覆盖克隆、拉取、检出、分支/提交遍历、Blame 以及把任意提交/时间范围"快照"成可遍历文件系统的能力，常用于代码审计、供应链分析与 .git 泄露利用。

典型使用场景：

- 仓库操作：`git.Clone` / `git.Pull` / `git.Fetch` / `git.Checkout`，配合 `git.auth` / `git.withPrivateKey` / `git.depth` / `git.branch` 等选项。
- 历史分析：`git.IterateCommit` 遍历提交，`git.Blame` / `git.BlameCommit` 行级追溯，`git.Branch` / `git.HeadHash` / `git.ParentHash` / `git.RevParse` 查询引用。
- 快照为文件系统：`git.FileSystemFromCommit` / `git.FileSystemFromCommitRange` / `git.FileSystemFromDate` / `git.FileSystemCurrentWeek` 等把某次提交/时间窗的代码变成可遍历 FS。
- 安全利用：`git.GitHack` 从泄露的 .git 目录还原源码。

与相邻库的关系：`git` 产出的文件系统常交给 `ssa`/`syntaxflow`（代码分析）、`diff`（版本比对）、`filesys`（遍历）做后续审计。

> 共 49 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [git.Blame](#blame) | `repos string, fileName string` | `BlameLines, error` | 对某个文件在 HEAD 下做 blame，逐行追踪最后修改信息（导出名为 git.Blame） |
| [git.BlameCommit](#blamecommit) | `repos string, fileName string, rev string` | `BlameLines, error` | BlameWithCommit 在指定 commit 下对某个文件做 blame，逐行追踪最后修改信息（导出名为 git.BlameCommit） |
| [git.Branch](#branch) | `repos string` | `[]string, error` | GetAllBranches 获取本地仓库中的所有引用名（导出名为 git.Branch） |
| [git.FileSystemCurrentDay](#filesystemcurrentday) | `repos string` | `filesys_interface.FileSystem, error` | 获取当前自然日的文件系统（导出名为 git.FileSystemCurrentDay） |
| [git.FileSystemCurrentMonth](#filesystemcurrentmonth) | `repos string` | `filesys_interface.FileSystem, error` | 获取当前自然月的文件系统（导出名为 git.FileSystemCurrentMonth） |
| [git.FileSystemCurrentWeek](#filesystemcurrentweek) | `repos string` | `filesys_interface.FileSystem, error` | 获取当前自然周（周一到周天）的文件系统（导出名为 git.FileSystemCurrentWeek） |
| [git.FileSystemFromCommit](#filesystemfromcommit) | `repos string, commitHash string` | `filesys_interface.FileSystem, error` | 从指定的commit中获取文件系统 |
| [git.FileSystemFromCommitDateRange](#filesystemfromcommitdaterange) | `repos string, startDate any, endDate any` | `filesys_interface.FileSystem, error` | 根据日期范围获取文件系统（导出名为 git.FileSystemFromCommitDateRange） |
| [git.FileSystemFromCommitRange](#filesystemfromcommitrange) | `repos string, start string, end string` | `*filesys.VirtualFS, error` | 从commit范围中获取文件系统 |
| [git.FileSystemFromDate](#filesystemfromdate) | `repos string, date any` | `filesys_interface.FileSystem, error` | 根据指定日期获取该日的文件系统（导出名为 git.FileSystemFromDate） |
| [git.FileSystemFromMonth](#filesystemfrommonth) | `repos string, year int, month int` | `filesys_interface.FileSystem, error` | 根据指定年月获取该月的文件系统（导出名为 git.FileSystemFromMonth） |
| [git.FileSystemLastSevenDay](#filesystemlastsevenday) | `repos string` | `filesys_interface.FileSystem, error` | 获取最近七天的文件系统（导出名为 git.FileSystemLastSevenDay） |
| [git.Glance](#glance) | `repos string` | `string` | 快速查看本地仓库的概要信息（HEAD 哈希、类型、分支范围等，导出名为 git.Glance） |
| [git.HeadBranch](#headbranch) | `repos string` | `string` | 获取本地仓库当前 HEAD 所指向的分支/标签引用名（导出名为 git.HeadBranch） |
| [git.HeadBranchRange](#headbranchrange) | `repos string, branchName string` | `string, string, error` | GetBranchRange 获取某个分支的起止 commit 哈希范围（导出名为 git.HeadBranchRange） |
| [git.HeadHash](#headhash) | `repos string` | `string` | 获取本地仓库当前 HEAD 的 commit 哈希（导出名为 git.HeadHash） |
| [git.ParentHash](#parenthash) | `repos string, commit string` | `string, error` | GetParentCommitHash 获取指定 commit 的父 commit 哈希（导出名为 git.ParentHash） |
| [git.RevParse](#revparse) | `repos string, rev string` | `string, error` | 将一个引用（分支名、标签、短哈希等）解析为完整的 commit 哈希（导出名为 git.RevParse） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [git.Checkout](#checkout) | `localPath string, ref string, opts ...Option` | `error` | 用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为 |
| [git.Clone](#clone) | `u string, localPath string, opt ...Option` | `error` | 用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为 |
| [git.Fetch](#fetch) | `localPath string, opts ...Option` | `error` | 用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为 |
| [git.FileSystemFromCommits](#filesystemfromcommits) | `repos string, commitHashes ...string` | `filesys_interface.FileSystem, error` | 从多个commit中获取文件系统 |
| [git.GitHack](#githack) | `remoteRepoURL string, localPath string, opts ...Option` | `error` | 是一个用于利用 Git 源码泄露漏洞的函数 |
| [git.IterateCommit](#iteratecommit) | `localRepos string, opt ...Option` | `error` | 用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数 |
| [git.Pull](#pull) | `localPath string, opts ...Option` | `error` | 用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为 |
| [git.SetProxy](#setproxy) | `proxies ...string` | - | 是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理 |

## 函数详情

### Blame {#blame}

```go
Blame(repos string, fileName string) (BlameLines, error)
```

对某个文件在 HEAD 下做 blame，逐行追踪最后修改信息（导出名为 git.Blame）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| fileName | `string` | 仓库内的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BlameLines` | blame 结果（逐行的提交信息） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 对文件做 blame（示意性示例，需替换为真实仓库路径）
lines = git.Blame("/path/to/repo", "README.md")~
println(lines.String())
``````````````

---

### BlameCommit {#blamecommit}

```go
BlameCommit(repos string, fileName string, rev string) (BlameLines, error)
```

BlameWithCommit 在指定 commit 下对某个文件做 blame，逐行追踪最后修改信息（导出名为 git.BlameCommit）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| fileName | `string` | 仓库内的文件路径 |
| rev | `string` | 目标 commit/引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BlameLines` | blame 结果（逐行的提交信息） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 在指定提交下对文件做 blame（示意性示例，需替换为真实仓库路径）
lines = git.BlameCommit("/path/to/repo", "README.md", "HEAD")~
println(lines.String())
``````````````

---

### Branch {#branch}

```go
Branch(repos string) ([]string, error)
```

GetAllBranches 获取本地仓库中的所有引用名（导出名为 git.Branch）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 引用名列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 列出仓库的引用（示意性示例，需替换为真实仓库路径）
branches = git.Branch("/path/to/repo")~
dump(branches)
``````````````

---

### FileSystemCurrentDay {#filesystemcurrentday}

```go
FileSystemCurrentDay(repos string) (filesys_interface.FileSystem, error)
```

获取当前自然日的文件系统（导出名为 git.FileSystemCurrentDay）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 当天变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取今天的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemCurrentDay("/path/to/repo")~
dump(fs)
``````````````

---

### FileSystemCurrentMonth {#filesystemcurrentmonth}

```go
FileSystemCurrentMonth(repos string) (filesys_interface.FileSystem, error)
```

获取当前自然月的文件系统（导出名为 git.FileSystemCurrentMonth）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 本月变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取本月的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemCurrentMonth("/path/to/repo")~
dump(fs)
``````````````

---

### FileSystemCurrentWeek {#filesystemcurrentweek}

```go
FileSystemCurrentWeek(repos string) (filesys_interface.FileSystem, error)
```

获取当前自然周（周一到周天）的文件系统（导出名为 git.FileSystemCurrentWeek）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 本周内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取本周的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemCurrentWeek("/path/to/repo")~
dump(fs)
``````````````

---

### FileSystemFromCommit {#filesystemfromcommit}

```go
FileSystemFromCommit(repos string, commitHash string) (filesys_interface.FileSystem, error)
```

从指定的commit中获取文件系统

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| commitHash | `string` | 目标 commit 的哈希 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 该 commit 对应的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
fs := git.FileSystemFromCommit("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")~
fs, err := git.FileSystemFromCommit("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")
``````````````

---

### FileSystemFromCommitDateRange {#filesystemfromcommitdaterange}

```go
FileSystemFromCommitDateRange(repos string, startDate any, endDate any) (filesys_interface.FileSystem, error)
```

根据日期范围获取文件系统（导出名为 git.FileSystemFromCommitDateRange）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| startDate | `any` | 起始日期，支持多种格式和类型（字符串、时间戳等） |
| endDate | `any` | 结束日期，支持多种格式和类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 该日期范围内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取某段日期范围内的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemFromCommitDateRange("/path/to/repo", "2024-01-01", "2024-02-01")~
dump(fs)
``````````````

---

### FileSystemFromCommitRange {#filesystemfromcommitrange}

```go
FileSystemFromCommitRange(repos string, start string, end string) (*filesys.VirtualFS, error)
```

从commit范围中获取文件系统

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| start | `string` | 起始 commit（旧） |
| end | `string` | 结束 commit（新） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*filesys.VirtualFS` | 该范围内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
fs := git.FileSystemFromCommitRange("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560", "54165a396a219d085980dca623ae1ff6582033ad")~
``````````````

---

### FileSystemFromDate {#filesystemfromdate}

```go
FileSystemFromDate(repos string, date any) (filesys_interface.FileSystem, error)
```

根据指定日期获取该日的文件系统（导出名为 git.FileSystemFromDate）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| date | `any` | 目标日期，支持多种格式和类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 该日变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取指定日期的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemFromDate("/path/to/repo", "2024-01-15")~
dump(fs)
``````````````

---

### FileSystemFromMonth {#filesystemfrommonth}

```go
FileSystemFromMonth(repos string, year int, month int) (filesys_interface.FileSystem, error)
```

根据指定年月获取该月的文件系统（导出名为 git.FileSystemFromMonth）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| year | `int` | 年份 |
| month | `int` | 月份（1-12） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 该月变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取指定年月的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemFromMonth("/path/to/repo", 2024, 1)~
dump(fs)
``````````````

---

### FileSystemLastSevenDay {#filesystemlastsevenday}

```go
FileSystemLastSevenDay(repos string) (filesys_interface.FileSystem, error)
```

获取最近七天的文件系统（导出名为 git.FileSystemLastSevenDay）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 最近七天内变更聚合得到的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取最近七天的变更文件系统（示意性示例，需替换为真实仓库路径）
fs = git.FileSystemLastSevenDay("/path/to/repo")~
dump(fs)
``````````````

---

### Glance {#glance}

```go
Glance(repos string) string
```

快速查看本地仓库的概要信息（HEAD 哈希、类型、分支范围等，导出名为 git.Glance）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 概要信息文本，失败时返回空字符串 |

**示例**

``````````````yak
// 查看本地仓库概要（示意性示例，需替换为真实仓库路径）
info = git.Glance("/path/to/repo")
println(info)
``````````````

---

### HeadBranch {#headbranch}

```go
HeadBranch(repos string) string
```

获取本地仓库当前 HEAD 所指向的分支/标签引用名（导出名为 git.HeadBranch）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前引用名，失败时返回空字符串 |

**示例**

``````````````yak
// 读取本地仓库当前分支（示意性示例，需替换为真实仓库路径）
branch = git.HeadBranch("/path/to/repo")
println(branch)
``````````````

---

### HeadBranchRange {#headbranchrange}

```go
HeadBranchRange(repos string, branchName string) (start string, end string, err error)
```

GetBranchRange 获取某个分支的起止 commit 哈希范围（导出名为 git.HeadBranchRange）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| branchName | `string` | 分支引用名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| start | `string` | 起始 commit 哈希 |
| end | `string` | 结束 commit 哈希 |
| err | `error` | 错误信息 |

**示例**

``````````````yak
// 获取某分支的起止 commit（示意性示例，需替换为真实仓库路径）
start, end, err = git.HeadBranchRange("/path/to/repo", "refs/heads/main")
if err != nil { die(err) }
println(start, end)
``````````````

---

### HeadHash {#headhash}

```go
HeadHash(repos string) string
```

获取本地仓库当前 HEAD 的 commit 哈希（导出名为 git.HeadHash）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | HEAD 的 commit 哈希字符串，失败时返回空字符串 |

**示例**

``````````````yak
// 读取本地仓库 HEAD（示意性示例，需替换为真实仓库路径）
hash = git.HeadHash("/path/to/repo")
println(hash)
``````````````

---

### ParentHash {#parenthash}

```go
ParentHash(repos string, commit string) (string, error)
```

GetParentCommitHash 获取指定 commit 的父 commit 哈希（导出名为 git.ParentHash）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| commit | `string` | 目标 commit（可为短哈希或引用） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 父 commit 哈希 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取某 commit 的父提交（示意性示例，需替换为真实仓库路径）
parent, err = git.ParentHash("/path/to/repo", "HEAD")
if err != nil { die(err) }
println(parent)
``````````````

---

### RevParse {#revparse}

```go
RevParse(repos string, rev string) (string, error)
```

将一个引用（分支名、标签、短哈希等）解析为完整的 commit 哈希（导出名为 git.RevParse）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |
| rev | `string` | 待解析的引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 完整的 commit 哈希 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 解析 HEAD 的完整哈希（示意性示例，需替换为真实仓库路径）
hash, err = git.RevParse("/path/to/repo", "HEAD")
if err != nil { die(err) }
println(hash)
``````````````

---

## 可变参数函数详情

### Checkout {#checkout}

```go
Checkout(localPath string, ref string, opts ...Option) error
```

用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| localPath | `string` | 本地仓库路径 |
| ref | `string` | 要检出的分支名或引用 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 23 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
git.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true)) // 创建新分支
git.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true)) // 强制切换
``````````````

---

### Clone {#clone}

```go
Clone(u string, localPath string, opt ...Option) error
```

用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| u | `string` | 远程仓库地址 |
| localPath | `string` | 本地存储路径 |

**可选参数**

可作为可变参数 `opt ...Option` 传入选项；共 23 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
git.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))
``````````````

---

### Fetch {#fetch}

```go
Fetch(localPath string, opts ...Option) error
```

用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| localPath | `string` | 本地仓库路径 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 23 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
git.Fetch("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"), git.fetchAllTags(true))
``````````````

---

### FileSystemFromCommits {#filesystemfromcommits}

```go
FileSystemFromCommits(repos string, commitHashes ...string) (filesys_interface.FileSystem, error)
```

从多个commit中获取文件系统

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| repos | `string` | 本地仓库路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| commitHashes | `...string` | 一个或多个 commit 哈希 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `filesys_interface.FileSystem` | 合并多个 commit 后的文件系统 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
fs := git.FileSystemFromCommits("path/to/repo", "2871a988b2ed7ec10a1fd45eca248a96a99a8560", "54165a396a219d085980dca623ae1ff6582033ad")~
fs, err := git.FileSystemFromCommits("path/to/repo", "54165a396a219d085980dca623ae1ff6582033ad", "2871a988b2ed7ec10a1fd45eca248a96a99a8560")
``````````````

---

### GitHack {#githack}

```go
GitHack(remoteRepoURL string, localPath string, opts ...Option) (finalErr error)
```

是一个用于利用 Git 源码泄露漏洞的函数

Git源码泄露漏洞是指：由于网站服务器的错误配置，可以通过 HTTP / HTTPS 直接访问到网站 .git 目录下的文件，从而导致源码泄露

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| remoteRepoURL | `string` | 存在 .git 泄露的目标地址 |
| localPath | `string` | 本地保存还原结果的路径 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 23 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| finalErr | `error` | 错误信息 |

**示例**

``````````````yak
git.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))
``````````````

---

### IterateCommit {#iteratecommit}

```go
IterateCommit(localRepos string, opt ...Option) error
```

用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| localRepos | `string` | 本地仓库路径 |

**可选参数**

可作为可变参数 `opt ...Option` 传入选项；共 23 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 遍历提交记录，过滤名字中包含ci的引用记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录
git.IterateCommit("D:/coding/golang/src/yaklang",
git.filterReference((ref) => {return !ref.Name().Contains("ci")}),
git.filterCommit((c) => { return c.Author.Name != "xxx" }),
git.handleCommit((c) => { println(c.String()) }))
``````````````

---

### Pull {#pull}

```go
Pull(localPath string, opts ...Option) error
```

用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| localPath | `string` | 本地仓库路径 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 23 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
git.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))
``````````````

---

### SetProxy {#setproxy}

```go
SetProxy(proxies ...string)
```

是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxies | `...string` | 一个或多个代理地址 |

**示例**

``````````````yak
git.SetProxy("http://127.0.0.1:1080")
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[git.Checkout](#checkout)、[git.Clone](#clone)、[git.Fetch](#fetch)、[git.GitHack](#githack)、[git.IterateCommit](#iteratecommit)、[git.Pull](#pull)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `git.auth` | `username string, password string` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的认证用户名和密码 |
| `git.branch` | `branch string` | `Option` | WithBranch 指定其他 Git 操作（例如 Clone）时使用的分支 |
| `git.checkoutCreate` | `b bool` | `Option` | fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否创建新分支 |
| `git.checkoutForce` | `b bool` | `Option` | fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否强制 |
| `git.checkoutKeep` | `b bool` | `Option` | 是一个选项函数，用于指定检出(checkout)操作时，本地更改（索引或工作树更改）是否被保留，如果保留，就可以将它们提交到目标分支，默认为false |
| `git.context` | `ctx context.Context` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的上下文 |
| `git.depth` | `depth int` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的最大深度，默认为1 |
| `git.fetchAllTags` | `b bool` | `Option` | 是一个选项函数，用于指定获取(fetch)操作时是否拉取所有标签 |
| `git.filterCommit` | `f func(r *object.Commit) bool` | `Option` | 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到提交记录时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个提交记录 |
| `git.filterReference` | `f func(r *plumbing.Reference) bool` | `Option` | 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到引用时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个引用 |
| `git.force` | `b bool` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Pull）时是否强制执行，默认为false |
| `git.handleCommit` | `f func(r *object.Commit) error` | `Option` | 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到一个过滤后的提交记录时，就会调用这个回调函数 |
| `git.handleReference` | `f func(r *plumbing.Reference) error` | `Option` | 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到过滤后的引用时，就会调用这个回调函数 |
| `git.httpOpts` | `opts ...poc.PocConfigOption` | `Option` | 是一个GitHack选项函数，用于指定GitHack的HTTP选项，其接收零个到多个poc的请求选项函数 |
| `git.noFetchTags` | `b bool` | `Option` | 是一个选项函数，用于指定获取(fetch)操作时是否不拉取标签 |
| `git.recursive` | `b bool` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的是否递归克隆子模块，默认为false |
| `git.remote` | `remote string` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Pull）时的远程仓库名称，默认为origin |
| `git.threads` | `threads int` | `Option` | 是一个GitHack选项函数，用于指定并发数，默认为8 |
| `git.useLocalGitBinary` | `b bool` | `Option` | 是一个GitHack选项函数，用于指定是否使用本地环境变量的git二进制文件来执行`git fsck`命令，这个命令用于尽可能恢复完整的git仓库，默认为true |
| `git.verify` | `b bool` | `Option` | 是一个选项函数，用于指定其他 Git 操作（例如Clone）时是否验证TLS证书 |
| `git.withInsecureIgnoreHostKey` | - | `Option` | 跳过 SSH 主机密钥验证 |
| `git.withPrivateKey` | `userName string, keyPath string, password string` | `Option` | 使用 SSH 私钥文件进行认证 |
| `git.withPrivateKeyContent` | `userName string, keyContent string, password string` | `Option` | 使用私钥内容进行认证 |

