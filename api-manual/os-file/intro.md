---
sidebar_position: 1
sidebar_label: "本章总览"
---

# 操作系统与文件编程

本章介绍 Yaklang 中与"机器本身"打交道的能力：文件的增删改查、句柄级 IO 与流式读写、路径处理、操作系统环境与系统常量、外部命令执行，以及时间与日期操作。这些是写自动化脚本、落地工具、采集与扫描类脚本的基石。

为方便循序渐进地学习，本章拆成多篇小文章，**每一项能力来自哪个库，下表写得很清楚**。Yaklang 中所有这类调用都带库名前缀（如 `os.OS`、`file.Save`、`exec.System`、`time.Now`），看前缀就知道它属于哪个库。

## 本章目录与所属库

| 小节 | 所属库 | 代表 API | 一句话说明 |
| --- | --- | --- | --- |
| [文件增删改查与目录操作](./file-basic.md) | `file` | `file.Save` `file.ReadFile` `file.Stat` `file.Cp` `file.Ls` | 整文件读写、信息/哈希、复制移动删除、目录遍历 |
| [文件句柄、IO 与流式读写](./file-io.md) | `file` | `file.Open` `f.Write` `f.ReadLine` `f.Seek` `f.Truncated` | 句柄读写、追加、随机定位、按行流式、截断 |
| [路径操作](./path.md) | `file` | `file.Join` `file.Split` `file.GetExt` `file.Clean` `file.Abs` | 拼接、拆分、扩展名/基名、规整、绝对化 |
| [操作系统环境与系统常量](./os-system.md) | `os` | `os.Getenv` `os.Setenv` `os.OS` `os.ARCH` `os.TempDir` | 环境变量、平台/架构常量、进程与系统目录 |
| [系统命令执行（exec）](./exec.md) | `exec` | `exec.System` `exec.Command` `exec.SystemBatch` `exec.WatchStdout` | 执行命令、命令对象、批量并发、流式输出 |
| [系统时间与日期（time）](./time.md) | `time` | `time.Now` `time.Parse` `time.ParseDuration` `time.Sleep` | 取时间、解析、格式化、时长计算、休眠 |

:::tip 阅读约定
本章所有示例都经过 `yak` 实跑验证。沿用 `str` 手册的约定：`assert` 用来锁定确定性结论（不成立即中断），`println` 用来打印可观察的结果，并在同一行用 `// OUT:` 标注它真实打印了什么——`// OUT:` 后面就是该行的标准输出，可以逐行对照学习。涉及临时文件的示例都写在系统临时目录下并在结束时清理。

本章还会对一些"看起来理所当然、实际有坑"的地方，结合内置库的 Golang 实现给出解释，帮助你和 AI 准确理解其真实行为。
:::
