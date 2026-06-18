---
sidebar_position: 2
sidebar_label: "文件增删改查与目录操作"
---

# 文件增删改查与目录操作

本节全部来自 `file` 库（拼路径会配合 `os.TempDir` 取临时目录）。这里讲"把整个文件当一个整体"的操作：一次性读写、文件信息与哈希、复制移动删除、目录列举与遍历。需要句柄级、按行、随机定位等更细的 IO，见下一节[文件句柄、IO 与流式读写](./file-io.md)。

## 分组速查表

| 分组 | 代表函数（含调用形态） | 说明 |
| --- | --- | --- |
| 整文件读写 | `file.Save(path, data)` `file.ReadFile(path)` `file.ReadLines(path)` | 一次性写/读，`ReadFile` 返回 `([]byte, error)` |
| 结构化写 | `file.SaveJson(path, obj)` | 非字符串/字节会被序列化为 JSON |
| 存在/类型 | `file.IsExisted(p)` `file.IsFile(p)` `file.IsDir(p)` | 返回布尔 |
| 信息/哈希 | `file.Stat(p)` `file.Md5(p)` `file.Sha256(p)` | 文件信息与内容哈希 |
| 复制移动删除 | `file.Cp(s,d)` `file.Mv(s,d)` `file.Rm(p)` `file.Rename(s,d)` | 类 Unix 命令 |
| 目录 | `file.Mkdir(p)` `file.MkdirAll(p)` `file.Ls(p)` `file.Walk(p, fn)` | 建目录、列举、递归遍历 |
| 查看 | `file.Cat(p)` | 把内容打印到标准输出 |

## 整文件读写

核心是 `file.Save`（写）与 `file.ReadFile`（读）。`file.ReadFile` 返回 `([]byte, error)`，用 `~` 自动处理错误后再 `string(...)` 还原文本。

``````````````yak
// 特性: 文件增删改查 file.Save / ReadFile / IsExisted / Rm
// 关键词: file.Save, file.ReadFile, file.IsExisted, file.Rm
dir = file.Join(os.TempDir(), "yak_fb_crud")
os.RemoveAll(dir)
file.MkdirAll(dir)~

p = file.Join(dir, "note.txt")
file.Save(p, "hello yak")~                  // 写入(不存在则建, 存在则覆盖)
println(file.IsExisted(p))                  // OUT: true

content = string(file.ReadFile(p)~)         // 读取并还原为文本
println(content)                            // OUT: hello yak
assert content == "hello yak", "read back the same content"

file.Rm(p)~                                 // 删除
println(file.IsExisted(p))                  // OUT: false

os.RemoveAll(dir)
``````````````

:::danger file.Save 是"覆盖写"，不是"追加写"
`file.Save` 对已存在的文件会**先清空再写入**。看它的实现就明白了——打开文件时带了 `O_TRUNC`（截断）标志，且根据入参类型分别处理：

```go
// common/yak/yaklib/file.go
func _saveFile(fileName string, i interface{}) error {
    file, _ := os.OpenFile(fileName, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, os.ModePerm)
    switch ret := i.(type) {
    case string:   // 直接写入
    case []byte:   // 写入字节
    case []string: // 每个元素后补 "\n" 写成一行
        for _, line := range ret { file.WriteString(fmt.Sprintf("%v\n", line)) }
    }
}
```

要往文件**追加**内容，得用 `file.OpenFile(path, file.O_APPEND|file.O_WRONLY, 0644)` 拿句柄再写（见下一节）。
:::

`file.Save` 传入字符串数组时按行写入，配套的 `file.ReadLines` 把文件读成行数组。

``````````````yak
// 特性: 数组按行写 + file.ReadLines 按行读
// 关键词: file.Save([]string), file.ReadLines
dir = file.Join(os.TempDir(), "yak_fb_lines")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "list.txt")

file.Save(p, ["alpha", "beta", "gamma"])~   // 每个元素一行
lines = file.ReadLines(p)
println(len(lines))        // OUT: 3
println(lines[0])          // OUT: alpha

os.RemoveAll(dir)
``````````````

:::danger file.ReadLines 会丢掉空行
`file.ReadLines` 不是简单按 `\n` 切分——它会去掉 BOM 头并**丢弃所有空行**（底层 `utils.ParseStringToLines`）。如果文件里有空行、你又关心行号，行数会对不上。需要保留空行时改用 `file.ReadFile` 读全文，再 `str.Split(content, "\n")` 自己切。
:::

## 结构化写入：SaveJson

`file.SaveJson` 对字符串/字节/字符串数组的行为与 `file.Save` 一致；遇到其他类型（如 map、切片）会先 `json.Marshal` 再写入。

``````````````yak
// 特性: file.SaveJson 写入对象(自动 JSON 序列化)
// 关键词: file.SaveJson
dir = file.Join(os.TempDir(), "yak_fb_json")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "d.json")

file.SaveJson(p, {"name": "yak", "age": 3})~   // map 会被序列化
raw = string(file.ReadFile(p)~)
println(str.Contains(raw, `"name"`))   // OUT: true
println(str.Contains(raw, "yak"))      // OUT: true

os.RemoveAll(dir)
``````````````

## 文件信息与哈希

`file.Stat` 返回 `os.FileInfo`，其上有 `Name()` / `Size()` / `IsDir()` / `Mode()` / `ModTime()` 等方法（注意是带括号的方法，不是字段）。`file.Md5` / `file.Sha1` / `file.Sha256` 直接给出文件内容的哈希。

``````````````yak
// 特性: file.Stat 文件信息 + file.Md5 内容哈希
// 关键词: file.Stat, Size(), file.Md5
dir = file.Join(os.TempDir(), "yak_fb_stat")
os.RemoveAll(dir); file.MkdirAll(dir)~
p = file.Join(dir, "s.txt")
file.Save(p, "hello")~

info = file.Stat(p)~
println(info.Name())          // OUT: s.txt
println(info.Size())          // OUT: 5
println(info.IsDir())         // OUT: false

// "hello" 的 md5
println(file.Md5(p))          // OUT: 5d41402abc4b2a76b9719d911017c592

os.RemoveAll(dir)
``````````````

## 复制、移动、删除

`file.Cp`（复制，支持目录）、`file.Mv`（移动/重命名，是 `file.Rename` 的别名）、`file.Rm`（删除，是 `file.Remove` 别名，会递归删整棵目录树）。

``````````````yak
// 特性: 复制移动 file.Cp / file.Mv
// 关键词: file.Cp, file.Mv, file.Rename
dir = file.Join(os.TempDir(), "yak_fb_cp")
os.RemoveAll(dir); file.MkdirAll(dir)~
src = file.Join(dir, "src.txt")
file.Save(src, "data")~

dst = file.Join(dir, "dst.txt")
file.Cp(src, dst)~                            // 复制
println(file.IsExisted(dst))                  // OUT: true
println(string(file.ReadFile(dst)~))          // OUT: data

moved = file.Join(dir, "moved.txt")
file.Mv(dst, moved)~                          // 移动/重命名
println(file.IsExisted(dst))                  // OUT: false
println(file.IsExisted(moved))                // OUT: true

os.RemoveAll(dir)
``````````````

:::danger file.Rm / file.Remove 会递归删除，等价于 rm -rf
`file.Rm` 和 `file.Remove` 底层都是 `os.RemoveAll`——传入一个目录会**连同里面所有内容一并删除**，且不会进回收站。删除前务必确认路径正确。只想删单个空目录或文件时也可以用 `os.Remove`（非递归，目录非空会报错）。
:::

## 目录：建立、列举、遍历

`file.MkdirAll` 递归建目录；`file.Ls`（别名 `file.Dir`）列出**当前一层**的条目，返回 `FileInfo` 切片，元素用 `.Name` / `.IsDir` 字段访问；`file.Walk` 递归遍历，回调返回 `true` 继续、`false` 停止。

``````````````yak
// 特性: 目录操作 file.MkdirAll / file.Ls / file.Walk
// 关键词: file.MkdirAll, file.Ls, file.Walk
dir = file.Join(os.TempDir(), "yak_fb_dir")
os.RemoveAll(dir)
file.MkdirAll(file.Join(dir, "sub"))~          // 递归建 dir/sub
file.Save(file.Join(dir, "a.txt"), "a")~
file.Save(file.Join(dir, "b.txt"), "b")~

// Ls 只列当前层: a.txt / b.txt / sub 共 3 个
items = file.Ls(dir)
println(len(items))            // OUT: 3
// FileInfo 用字段访问(注意: Ls 的元素是 .Name 字段, 不是 Name() 方法)
for it in items {
    if it.Name == "sub" { println(it.IsDir) }   // OUT: true
}

// Walk 递归遍历整棵树
count = 0
file.Walk(dir, (info) => { count++; return true })~
println(count > 0)             // OUT: true

os.RemoveAll(dir)
``````````````

:::note Ls 返回的 FileInfo 用"字段"，Stat 返回的用"方法"
这是个容易混的点：`file.Ls` / `file.Dir` 返回的是 Yaklang 内部的 `FileInfo`，用 **字段** 访问（`it.Name`、`it.IsDir`）；而 `file.Stat` 返回的是标准库的 `os.FileInfo`，用 **方法** 访问（`info.Name()`、`info.IsDir()`）。拿不准时先 `desc(对象)` 看一眼它有哪些字段或方法。
:::
