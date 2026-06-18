---
sidebar_position: 4
sidebar_label: "路径操作"
---

# 路径操作

本节全部来自 `file` 库，是一组**纯字符串层面**的路径处理函数——它们只对路径字符串做计算，不访问磁盘。底层基本对应 Golang 的 `path/filepath`，因此行为与之一致。

## 分组速查表

| 分组 | 代表函数 | 说明 |
| --- | --- | --- |
| 拼接 | `file.Join(a, b, ...)` | 按平台分隔符拼接，并自动 Clean |
| 拆分 | `file.Split(p)` `file.GetBase(p)` `file.GetDirPath(p)` | 拆目录/文件名、取基名、取目录 |
| 扩展名 | `file.GetExt(p)` | 取最后一段扩展名（含点） |
| 规整 | `file.Clean(p)` | 消除 `.` `..` 与重复分隔符 |
| 判断 | `file.IsAbs(p)` | 是否绝对路径 |
| 绝对化 | `file.Abs(p)` | 相对路径补全为绝对路径（基于 CWD，支持 `~`） |

## 拼接：file.Join

`file.Join` 用当前平台的分隔符把各段连起来，并自动调用 `Clean` 规整。

``````````````yak
// 特性: file.Join 拼接(自动规整)
// 关键词: file.Join, filepath.Join
println(file.Join("a", "b", "c"))       // OUT: a/b/c
// 多余分隔符 / 当前目录 . 会被规整掉
println(file.Join("a/", "/b", "./c"))   // OUT: a/b/c
// 末尾分隔符不会保留
println(file.Join("a", "b/"))           // OUT: a/b
``````````````

:::danger 拼路径永远用 file.Join，别手写斜杠
不同操作系统分隔符不同（Unix 是 `/`，Windows 是 `\`）。手写 `"a" + "/" + "b"` 在 Windows 上会出问题。`file.Join` 会用 `file.SEPARATOR` 按平台正确拼接，还会顺手把 `..`、多余斜杠规整掉。
:::

## 拆分：Split / GetBase / GetDirPath

`file.Split` 一次返回 `(目录, 文件名)`；`file.GetBase` 只要文件名；`file.GetDirPath` 只要目录。

``````````````yak
// 特性: 拆分路径 file.Split / GetBase / GetDirPath
// 关键词: file.Split, file.GetBase, file.GetDirPath
d, name = file.Split("/home/user/report.txt")
println(d)        // OUT: /home/user/
println(name)     // OUT: report.txt

println(file.GetBase("/home/user/report.txt"))      // OUT: report.txt
println(file.GetDirPath("/home/user/report.txt"))   // OUT: /home/user/
``````````````

:::note Split / GetDirPath 给出的目录带结尾分隔符
注意 `d` 是 `"/home/user/"` 而不是 `"/home/user"`——结尾多了一个斜杠。这是 Golang `filepath.Split` 的设计（目录部分保留结尾分隔符），`file.GetDirPath` 也特意补上了结尾分隔符。只想要不带斜杠的目录名时，用 `str.TrimRight(d, "/")` 处理一下。
:::

## 扩展名：GetExt

``````````````yak
// 特性: file.GetExt 取扩展名(含点)
// 关键词: file.GetExt, filepath.Ext
println(file.GetExt("/home/user/report.txt"))   // OUT: .txt
// 多重扩展名只取最后一段
println(file.GetExt("archive.tar.gz"))          // OUT: .gz
// 无扩展名返回空字符串
assert file.GetExt("README") == "", "no extension -> empty string"
// 以点开头的隐藏文件: 整个被当成扩展名
println(file.GetExt(".bashrc"))                 // OUT: .bashrc
``````````````

:::note .bashrc 这类隐藏文件的扩展名是它自己
`file.GetExt(".bashrc")` 返回 `.bashrc` 而不是空——因为 `filepath.Ext` 从最后一个 `.` 起算，而隐藏文件名本身就以 `.` 开头。判断"有没有真正的扩展名"时要留意这个边界。
:::

## 规整与判断：Clean / IsAbs

`file.Clean` 把 `.`、`..` 和重复分隔符消化掉，得到等价的最简路径；`file.IsAbs` 判断是否绝对路径。

``````````````yak
// 特性: file.Clean 规整 / file.IsAbs 判断
// 关键词: file.Clean, file.IsAbs
println(file.Clean("/a/b/../c"))     // OUT: /a/c
println(file.Clean("a//b/./c"))      // OUT: a/b/c

println(file.IsAbs("/etc/hosts"))    // OUT: true
println(file.IsAbs("etc/hosts"))     // OUT: false
``````````````

## 绝对化：Abs

`file.Abs` 把相对路径基于**当前工作目录**补全为绝对路径；在 Unix 上还支持 `~` 展开为家目录。结果依赖运行环境，所以这里只断言"它确实是绝对路径"。

``````````````yak
// 特性: file.Abs 相对转绝对
// 关键词: file.Abs, 当前工作目录, ~ 展开
// 相对路径 -> 绝对路径(具体值取决于运行目录)
println(file.IsAbs(file.Abs("./x.txt")))   // OUT: true
``````````````

:::note Clean / Abs 不验证路径是否真实存在
这一节所有函数都只做字符串运算：`file.Clean("/a/b/../c")` 得到 `/a/c`，并不关心 `/a/c` 是否真的存在。要判断存在性或类型，得用会访问磁盘的 `file.IsExisted` / `file.IsFile` / `file.IsDir`（见[文件增删改查](./file-basic.md)）。
:::
