---
sidebar_position: 4
---

# [io] 系统读写工具库

1. 把后面的 `var_2(io.Reader)` 的输出接入到 `var_1(io.Writer)` 中 `fn io.Copy(var_1: io.Writer, var_2: io.Reader): (int64, error)`
1. `io.Copy` 增加了缓冲区限制，详细用法可以参考[Golang函数](https://golang.org/pkg/io/#CopyBuffer) `fn io.CopyBuffer(var_1: io.Writer, var_2: io.Reader, var_3: []uint8): (int64, error)`
1. `io.Copy` 增加了长度限制，详细用法可以参考[Golang函数](https://golang.org/pkg/io/#CopyN) `fn io.CopyN(var_1: io.Writer, var_2: io.Reader, var_3: int64): (int64, error)`
1. 读取 `io.Reader` 的前几个字节 `fn io.LimitReader(var_1: io.Reader, var_2: int64): io.Reader`
1. 把多个 reader 融合成一个 `fn io.MultiReader(vars: ...io.Reader): io.Reader`
1. 按照块(Section)来读一个 Reader `fn io.NewSectionReader(var_1: io.ReaderAt, var_2: int64, var_3: int64): *io.SectionReader`
1. 如果读到 Nop/Null/空字符，就关掉 io.Reader `fn io.NopCloser(var_1: io.Reader): io.ReadCloser`
1. 构建一个读写管道 `fn io.Pipe(): (*io.PipeReader, *io.PipeWriter)`
1. 读出 `io.Reader` 的全部内容 `fn io.ReadAll(var_1: io.Reader): ([]uint8, error)`
1. `fn io.ReadAtLeast(var_1: io.Reader, var_2: []uint8, var_3: int): (int, error)`
1. 每一秒钟读一次 reader 中的内容，回调函数包含缓冲区内容 `fn io.ReadEvery1s(var_1: context.Context, var_2: io.Reader, var_3: func([]uint8) bool)`
1. 读一个文件中的全部内容 `fn io.ReadFile(var_1: string): ([]uint8, error)`
1. 读满一个缓冲区 `fn io.ReadFull(var_1: io.Reader, var_2: []uint8): (int, error)`
1. io.Reader 分流，包装出一个 reader，读新的 Reader，读出来的值会写入 var_2(io.Writer)`fn io.TeeReader(var_1: io.Reader, var_2: io.Writer): io.Reader`
1. `fn io.WriteString(var_1: io.Writer, var_2: string): (int, error)`
1. `io.Discard: io.discard = <nil>`
1. `io.EOF: *errors.errorString = <nil>`