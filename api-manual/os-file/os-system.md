---
sidebar_position: 5
sidebar_label: "操作系统环境与系统常量"
---

# 操作系统环境与系统常量

本节全部来自 `os` 库。`os` 库封装了进程与系统层面的能力：环境变量读写、平台与架构常量、进程信息、系统目录等。

## 分组速查表

| 分组 | 代表函数 | 说明 |
| --- | --- | --- |
| 环境变量 | `os.Getenv(k)` `os.Setenv(k,v)` `os.LookupEnv(k)` `os.Unsetenv(k)` | 读/写/探测/删除 |
| 变量展开 | `os.ExpandEnv(s)` `os.Environ()` | 展开 `$VAR`、列出全部 |
| 平台常量 | `os.OS` `os.ARCH` | 编译期常量（GOOS/GOARCH） |
| 进程信息 | `os.Getpid()` `os.Getppid()` `os.Args` | 进程号、父进程号、命令行参数 |
| 系统目录 | `os.TempDir()` `os.GetHomeDir()` `os.Getwd()` | 临时目录、家目录、当前目录 |
| 主机信息 | `os.Hostname()` | 主机名 |

## 环境变量

最常用的一组：`os.Getenv` 读、`os.Setenv` 写、`os.Unsetenv` 删、`os.LookupEnv` 在"读值"的同时返回该变量是否存在。

``````````````yak
// 特性: 环境变量 os.Setenv / Getenv / LookupEnv / Unsetenv
// 关键词: os.Setenv, os.Getenv, os.LookupEnv, os.Unsetenv
os.Setenv("YAK_DEMO_KEY", "demo-value")~
println(os.Getenv("YAK_DEMO_KEY"))   // OUT: demo-value

// LookupEnv 返回 (值, 是否存在), 用于区分"空值"与"未设置"
v, ok = os.LookupEnv("YAK_DEMO_KEY")
println(v)        // OUT: demo-value
println(ok)       // OUT: true

os.Unsetenv("YAK_DEMO_KEY")~
assert os.Getenv("YAK_DEMO_KEY") == "", "get after unset is empty string"
_, ok2 = os.LookupEnv("YAK_DEMO_KEY")
println(ok2)      // OUT: false
``````````````

:::note os.Getenv 读不到时返回空字符串，分不清"没设置"和"值就是空"
`os.Getenv("不存在")` 返回 `""`，不会报错，也无法区分"变量没设置"与"变量值本身就是空字符串"。要可靠判断是否存在，必须用 `os.LookupEnv`，它的第二个返回值才是真正的"存在性"标志。这与 Golang `os.Getenv` / `os.LookupEnv` 语义一致。
:::

`os.ExpandEnv` 把字符串里的 `$VAR` / `${VAR}` 替换成对应环境变量的值。

``````````````yak
// 特性: os.ExpandEnv 展开环境变量引用
// 关键词: os.ExpandEnv
os.Setenv("YAK_USER", "alice")~
println(os.ExpandEnv("user=$YAK_USER"))       // OUT: user=alice
println(os.ExpandEnv("home=${YAK_USER}/bin")) // OUT: home=alice/bin
os.Unsetenv("YAK_USER")~
``````````````

## 系统常量与系统信息

系统信息以"常量 + 函数"两种形式提供：`os.OS`、`os.ARCH` 是平台与架构常量；`os.Getpid` 取进程号；`os.TempDir` / `os.GetHomeDir` 取系统目录。这些值与运行环境相关，所以用 `assert` 校验"非空/合法/存在"这类稳定性质，再用 `println` 打印恒为 `true` 的结论。

``````````````yak
// 特性: 系统信息 os.OS / os.ARCH / os.Getpid / os.TempDir / os.GetHomeDir
// 关键词: os.OS, os.ARCH, os.Getpid, os.TempDir, os.GetHomeDir
assert len(os.OS) > 0, "os.OS should not be empty"
assert len(os.ARCH) > 0, "os.ARCH should not be empty"

// os.OS 必是已知平台之一(用 in 判断切片包含)
println(os.OS in ["windows", "linux", "darwin", "freebsd", "openbsd"])   // OUT: true
println(os.Getpid() > 0)              // OUT: true
println(file.IsDir(os.TempDir()))     // OUT: true
println(file.IsDir(os.GetHomeDir()))  // OUT: true
``````````````

:::note os.OS / os.ARCH 是编译期就定下的常量，不会变
`os.OS` 和 `os.ARCH` 不是运行时探测出来的，而是直接取自 Golang 编译期常量 `runtime.GOOS` / `runtime.GOARCH`：

```go
// common/yak/yaklib/system.go
var OS = runtime.GOOS     // "windows" / "linux" / "darwin" ...
var ARCH = runtime.GOARCH // "amd64" / "arm64" / "386" ...
```

它们反映的是"当前这份 yak 引擎为哪个平台/架构编译"，在一次运行里是固定值。写跨平台脚本时，用 `os.OS == "windows"` 分支选择不同命令，是最常见的用法。
:::

当前工作目录、临时目录、家目录在写临时文件、定位资源时很常用。

``````````````yak
// 特性: 系统目录 os.Getwd / os.TempDir / os.GetHomeDir
// 关键词: os.Getwd, os.TempDir, os.GetHomeDir
// Getwd 返回 (路径, error)
cwd = os.Getwd()~
println(file.IsAbs(cwd))           // OUT: true
println(len(os.TempDir()) > 0)     // OUT: true
println(len(os.GetHomeDir()) > 0)  // OUT: true
``````````````
