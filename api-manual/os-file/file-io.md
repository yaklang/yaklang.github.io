---
sidebar_position: 3
sidebar_label: "文件句柄、IO 与流式读写"
---

# 文件句柄、IO 与流式读写

上一节是"把整个文件当整体"读写；本节是更细粒度的**句柄级 IO**：打开一个文件拿到句柄后，可以多次写、随机定位（`Seek`）、按行流式读、追加、截断。处理大文件、日志、需要边读边处理的场景都靠它。本节仍属 `file` 库，并会用到 `io` 库。

## 打开方式与句柄方法速查

| 打开方式 | 形态 | 说明 |
| --- | --- | --- |
| `file.Open(path)` | `(*File, error)` | 以 `O_CREATE\|O_RDWR` 打开（不存在则创建），带行缓冲 |
| `file.OpenFile(path, flags, mode)` | `(*File, error)` | 自定义打开标志与权限，带行缓冲 |
| `file.Create(path)` | `(*File, error)` | 仅创建用于写，**不支持按行读** |

| 句柄方法 | 说明 |
| --- | --- |
| `f.Write(data)` `f.WriteString(s)` `f.WriteLine(s)` | 写字节/字符串/整行 |
| `f.Read(buf)` `f.ReadAll()` `f.ReadString()` | 读到缓冲/读全部/读为字符串 |
| `f.ReadLine()` `f.ReadLines()` | 读一行/读剩余所有行（需 Open/OpenFile） |
| `f.Seek(offset, whence)` | 移动读写指针，`whence`：0 开头 / 1 当前 / 2 末尾 |
| `f.Truncated(size)` | 把文件截断到指定字节数 |
| `f.Sync()` `f.Close()` `f.Name()` | 刷盘 / 关闭 / 取文件名 |

## 句柄写入与读取

打开 → 写 → 关闭 → 读回。`O_TRUNC` 表示打开时清空。

``````````````yak
// 特性: 句柄写读 file.OpenFile + WriteString + Close
// 关键词: file.OpenFile, WriteString, Sync, Close, O_TRUNC
dir = file.Join(os.TempDir(), "yak_io_open")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "h.txt")

// O_CREATE|O_RDWR|O_TRUNC: 新建或清空, 可读可写
f = file.OpenFile(p, file.O_CREATE|file.O_RDWR|file.O_TRUNC, 0o644)~
f.WriteString("hello world")~
f.Sync()~      // 刷到磁盘
f.Close()~     // 用完务必关闭

println(string(file.ReadFile(p)~))   // OUT: hello world
os.RemoveAll(dir)
``````````````

:::danger 句柄用完一定要 Close
每个打开的句柄都占一个系统文件描述符。循环里大量 `Open` 却不 `Close` 会很快耗尽描述符导致 "too many open files"。固定写法是打开后立刻 `defer f.Close()`。另外写入有缓冲时，`Close`（或 `Sync`）才能保证数据真正落盘。
:::

## 随机定位读取：Seek

`f.Seek(offset, whence)` 移动读写指针。`whence` 取 `0`（从开头）、`1`（从当前）、`2`（从末尾）——`io` 库没有导出 `SEEK_SET` 这类常量，直接写数字即可。

``````````````yak
// 特性: 随机定位 f.Seek(offset, whence)
// 关键词: Seek, whence 0/1/2, Read
dir = file.Join(os.TempDir(), "yak_io_seek")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "s.txt")
file.Save(p, "0123456789")~

f = file.Open(p)~
// 从开头偏移 3, 读 4 个字节
f.Seek(3, 0)~
buf = make([]byte, 4)
n = f.Read(buf)~
println(string(buf[:n]))    // OUT: 3456

// 从末尾回退 2 字节(负偏移 + whence=2), 读到结尾
f.Seek(-2, 2)~
println(string(f.ReadAll()~))   // OUT: 89

f.Close()~
os.RemoveAll(dir)
``````````````

## 按行流式读取

`f.ReadLine()` 读一行，`f.ReadLines()` 读剩余所有行。它们依赖 `Open`/`OpenFile` 建立的行缓冲，因此**必须用 `file.Open` 或 `file.OpenFile` 打开**。

``````````````yak
// 特性: 句柄按行读 ReadLine / ReadLines
// 关键词: file.Open, ReadLine, ReadLines
dir = file.Join(os.TempDir(), "yak_io_line")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "l.txt")
file.Save(p, ["alpha", "beta", "gamma"])~

f = file.Open(p)~
println(f.ReadLine()~)      // OUT: alpha
// ReadLines 读"剩余"的行(第一行已被上面读走)
println(f.ReadLines())      // OUT: [beta gamma]
f.Close()~
os.RemoveAll(dir)
``````````````

:::danger file.Create 打开的句柄不能按行读
`file.Open` / `file.OpenFile` 会给句柄装上 `bufio` 行缓冲，所以能 `ReadLine` / `ReadLines`；而 `file.Create` 只设置了底层文件、没有行缓冲，对它调用 `ReadLine` 会出错。**需要按行读，请始终用 `file.Open` 或 `file.OpenFile`。**
:::

逐行处理大文件时，也可以用回调式的 `file.ReadLinesWithCallback`，它边读边回调、不需要先把整个文件读进内存。

``````````````yak
// 特性: 回调式按行读 file.ReadLinesWithCallback
// 关键词: file.ReadLinesWithCallback, 大文件逐行
dir = file.Join(os.TempDir(), "yak_io_cb")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "big.txt")
file.Save(p, ["x1", "x2", "x3", "x4"])~

count = 0
file.ReadLinesWithCallback(p, (line) => { count++ })~
println(count)              // OUT: 4
os.RemoveAll(dir)
``````````````

## 追加写入

用 `file.O_APPEND` 打开，写入会落在文件末尾而不是覆盖。

``````````````yak
// 特性: 追加写 file.O_APPEND
// 关键词: file.OpenFile, O_APPEND, O_WRONLY
dir = file.Join(os.TempDir(), "yak_io_app")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "log.txt")
file.Save(p, ["line1"])~                       // 已有一行

// O_APPEND|O_WRONLY: 追加到末尾
f = file.OpenFile(p, file.O_APPEND|file.O_WRONLY, 0o644)~
f.WriteString("line2\n")~
f.Close()~
println(len(file.ReadLines(p)))   // OUT: 2
os.RemoveAll(dir)
``````````````

## 截断文件

`f.Truncated(size)` 把文件裁到指定字节数（方法名是 `Truncated`，底层 `os.File.Truncate`）。

``````````````yak
// 特性: 截断 f.Truncated(size)
// 关键词: Truncated, 文件裁剪
dir = file.Join(os.TempDir(), "yak_io_trunc")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "t.txt")
file.Save(p, "0123456789")~

f = file.OpenFile(p, file.O_RDWR, 0o644)~
f.Truncated(4)~             // 只保留前 4 个字节
f.Close()~
println(string(file.ReadFile(p)~))   // OUT: 0123
os.RemoveAll(dir)
``````````````

## 从任意 Reader 读取：file.ReadAll

`file.ReadAll(reader)`（函数形态）接收任意 `io.Reader`，一次读到 EOF。它和句柄方法 `f.ReadAll()` 都能用，区别只是写法。

``````````````yak
// 特性: file.ReadAll 从 Reader 读到 EOF
// 关键词: file.ReadAll, io.Reader
dir = file.Join(os.TempDir(), "yak_io_ra")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "r.txt")
file.Save(p, "stream-content")~

f = file.Open(p)~
data = file.ReadAll(f)~     // 把句柄当 Reader 一次读完
println(string(data))       // OUT: stream-content
f.Close()~
os.RemoveAll(dir)
``````````````

## 跨多个文件按行流式读：NewMultiFileLineReader

把多个文件当成一条连续的行流来读，常用于合并日志、批量字典。

``````````````yak
// 特性: 多文件按行流 file.NewMultiFileLineReader
// 关键词: file.NewMultiFileLineReader, Next, Text
dir = file.Join(os.TempDir(), "yak_io_multi")
os.RemoveAll(dir); file.MkdirAll(dir)~
f1 = file.Join(dir, "1.txt"); file.Save(f1, ["a", "b"])~
f2 = file.Join(dir, "2.txt"); file.Save(f2, ["c"])~

m = file.NewMultiFileLineReader(f1, f2)~
lines = []
for m.Next() {              // Next 推进到下一行, 没有则返回 false
    lines = append(lines, m.Text())
}
println(lines)             // OUT: [a b c]
os.RemoveAll(dir)
``````````````

:::note 想"跟踪"实时增长的文件用 file.TailF
`file.TailF(path, callback)` 模拟 `tail -f`：会一直阻塞并在文件追加新内容时回调新行。因为它**永不返回**，只适合常驻脚本，不要在需要结束的流程里直接调用（应放进 `go func{...}` 并用 context 控制）。
:::
