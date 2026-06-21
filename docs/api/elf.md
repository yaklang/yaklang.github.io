# elf {#library-elf}

`elf` 库用于解析 ELF（Linux/Unix 可执行与可链接格式）文件，读取其头部、节（section）、段（segment）、架构与入口点信息，常用于二进制分析、固件检查与恶意样本研判。

典型使用场景：

- 识别与概览：`elf.IsELF` 判断是否 ELF，`elf.DisplayELF` 输出可读概览，`elf.ParseELF` 解析为结构。
- 读取结构：`elf.ReadELFHeader` 读头部，`elf.ReadELFSections` / `elf.GetELFSection` 读节，`elf.ReadELFSegments` / `elf.GetELFSegment` 读段，`elf.GetELFArchitecture` / `elf.GetELFEntryPoint` 取架构与入口。

与相邻库的关系：`elf` 属于二进制分析工具，与 `bin`（通用二进制解析）、`java`（Java 字节码）、`sca`（成分分析）同属逆向/审计方向。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [elf.DisplayELF](#displayelf) | `file any` | `string, error` | 以 readelf 风格输出格式化的 ELF 文件信息字符串 |
| [elf.GetELFArchitecture](#getelfarchitecture) | `file any` | `string, error` | 获取 ELF 文件的机器架构类型 |
| [elf.GetELFEntryPoint](#getelfentrypoint) | `file any` | `uint64, error` | 获取 ELF 文件的入口地址 |
| [elf.GetELFSection](#getelfsection) | `info *ELFInfo, index int` | `*ELFSection, error` | 获取指定索引的 ELF 节信息 |
| [elf.GetELFSegment](#getelfsegment) | `info *ELFInfo, index int` | `*ELFSegment, error` | 获取指定索引的 ELF 段信息 |
| [elf.IsELF](#iself) | `file string` | `bool` | 检查文件是否为 ELF 格式（通过文件头魔数 0x7F 45 4C 46 判断） |
| [elf.ParseELF](#parseelf) | `file any` | `*ELFInfo, error` | 解析 ELF 文件，返回包含文件头、段、节的完整信息结构 |
| [elf.ReadELFHeader](#readelfheader) | `file any` | `*ELFHeader, error` | 仅读取 ELF 文件头信息 |
| [elf.ReadELFSections](#readelfsections) | `file any` | `[]ELFSection, error` | 读取 ELF 的节（Section Header）信息列表 |
| [elf.ReadELFSegments](#readelfsegments) | `file any` | `[]ELFSegment, error` | 读取 ELF 的段（Program Header）信息列表 |

## 函数详情

### DisplayELF {#displayelf}

```go
DisplayELF(file any) (string, error)
```

以 readelf 风格输出格式化的 ELF 文件信息字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 格式化的 ELF 信息字符串 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
output, err = elf.DisplayELF("/path/to/binary")
if err != nil { die(err) }
println(output)
``````````````

---

### GetELFArchitecture {#getelfarchitecture}

```go
GetELFArchitecture(file any) (string, error)
```

获取 ELF 文件的机器架构类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 架构类型字符串，如 &#34;EM_X86_64 (AMD x86-64)&#34; |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
arch, err = elf.GetELFArchitecture("/path/to/binary")
if err != nil { die(err) }
println(arch)
``````````````

---

### GetELFEntryPoint {#getelfentrypoint}

```go
GetELFEntryPoint(file any) (uint64, error)
```

获取 ELF 文件的入口地址

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `uint64` | 入口地址 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
entry, err = elf.GetELFEntryPoint("/path/to/binary")
if err != nil { die(err) }
println(entry)
``````````````

---

### GetELFSection {#getelfsection}

```go
GetELFSection(info *ELFInfo, index int) (*ELFSection, error)
```

获取指定索引的 ELF 节信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| info | `*ELFInfo` | ELF 信息结构（由 elf.ParseELF 得到） |
| index | `int` | 节索引 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ELFSection` | ELF 节信息 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
info, err = elf.ParseELF("/path/to/binary")
if err != nil { die(err) }
sect, err = elf.GetELFSection(info, 0)
if err != nil { die(err) }
println(sect.Name)
``````````````

---

### GetELFSegment {#getelfsegment}

```go
GetELFSegment(info *ELFInfo, index int) (*ELFSegment, error)
```

获取指定索引的 ELF 段信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| info | `*ELFInfo` | ELF 信息结构（由 elf.ParseELF 得到） |
| index | `int` | 段索引 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ELFSegment` | ELF 段信息 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
info, err = elf.ParseELF("/path/to/binary")
if err != nil { die(err) }
seg, err = elf.GetELFSegment(info, 0)
if err != nil { die(err) }
println(seg.Type)
``````````````

---

### IsELF {#iself}

```go
IsELF(file string) bool
```

检查文件是否为 ELF 格式（通过文件头魔数 0x7F 45 4C 46 判断）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否为 ELF 文件 |

**示例**

``````````````yak
// 写入 ELF 魔数后应被识别为 ELF
p = file.Join(os.TempDir(), "yak-elf-example.bin")
file.Save(p, codec.DecodeHex("7f454c46")~)~
println(elf.IsELF(p))   // OUT: true
assert elf.IsELF(p) == true, "file with ELF magic should be recognized"
file.Remove(p)
``````````````

---

### ParseELF {#parseelf}

```go
ParseELF(file any) (*ELFInfo, error)
```

解析 ELF 文件，返回包含文件头、段、节的完整信息结构

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ELFInfo` | ELF 文件信息（含 Header、Segments、Sections） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
info, err = elf.ParseELF("/path/to/binary")
if err != nil { die(err) }
println(info.Header.Magic)
println(info.Header.Machine)
``````````````

---

### ReadELFHeader {#readelfheader}

```go
ReadELFHeader(file any) (*ELFHeader, error)
```

仅读取 ELF 文件头信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ELFHeader` | ELF 文件头信息（含 Class、Machine、Entry 等） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
header, err = elf.ReadELFHeader("/path/to/binary")
if err != nil { die(err) }
println(header.Class)
println(header.Machine)
``````````````

---

### ReadELFSections {#readelfsections}

```go
ReadELFSections(file any) ([]ELFSection, error)
```

读取 ELF 的节（Section Header）信息列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ELFSection` | ELF 节信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
sections, err = elf.ReadELFSections("/path/to/binary")
if err != nil { die(err) }

	for sect in sections {
	    if sect.IsSymTab { println(sect.Name) }
	}
``````````````

---

### ReadELFSegments {#readelfsegments}

```go
ReadELFSegments(file any) ([]ELFSegment, error)
```

读取 ELF 的段（Program Header）信息列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `any` | 文件路径(string)或字节数组([]byte) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ELFSegment` | ELF 段信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
segments, err = elf.ReadELFSegments("/path/to/binary")
if err != nil { die(err) }

	for seg in segments {
	    if seg.IsCode { println(seg.Type) }
	}
``````````````

---

