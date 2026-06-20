# elf

|函数名|函数描述/介绍|
|:------|:--------|
| [elf.DisplayELF](#displayelf) |DisplayELF 以 readelf 风格输出格式化的 ELF 文件信息字符串 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - 格式化的 ELF 信息字符串 - 错误信息|
| [elf.GetELFArchitecture](#getelfarchitecture) |GetELFArchitecture 获取 ELF 文件的机器架构类型 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - 架构类型字符串，如 &#34;EM_X86_64 (AMD x86-64)&#34; - 错误信息|
| [elf.GetELFEntryPoint](#getelfentrypoint) |GetELFEntryPoint 获取 ELF 文件的入口地址 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - 入口地址 - 错误信息|
| [elf.GetELFSection](#getelfsection) |GetELFSection 获取指定索引的 ELF 节信息 参数: - info: ELF 信息结构（由 elf.ParseELF 得到） - index: 节索引 返回值: - ELF 节信息 - 错误信息|
| [elf.GetELFSegment](#getelfsegment) |GetELFSegment 获取指定索引的 ELF 段信息 参数: - info: ELF 信息结构（由 elf.ParseELF 得到） - index: 段索引 返回值: - ELF 段信息 - 错误信息|
| [elf.IsELF](#iself) |IsELF 检查文件是否为 ELF 格式（通过文件头魔数 0x7F 45 4C 46 判断） 参数: - file: 文件路径 返回值: - 是否为 ELF 文件|
| [elf.ParseELF](#parseelf) |ParseELF 解析 ELF 文件，返回包含文件头、段、节的完整信息结构 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - ELF 文件信息（含 Header、Segments、Sections） - 错误信息|
| [elf.ReadELFHeader](#readelfheader) |ReadELFHeader 仅读取 ELF 文件头信息 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - ELF 文件头信息（含 Class、Machine、Entry 等） - 错误信息|
| [elf.ReadELFSections](#readelfsections) |ReadELFSections 读取 ELF 的节（Section Header）信息列表 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - ELF 节信息列表 - 错误信息|
| [elf.ReadELFSegments](#readelfsegments) |ReadELFSegments 读取 ELF 的段（Program Header）信息列表 参数: - file: 文件路径(string)或字节数组([]byte) 返回值: - ELF 段信息列表 - 错误信息|


## 函数定义
### DisplayELF

#### 详细描述
DisplayELF 以 readelf 风格输出格式化的 ELF 文件信息字符串

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - 格式化的 ELF 信息字符串

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
output, err = elf.DisplayELF("/path/to/binary")
if err != nil { die(err) }
println(output)
``````````````


#### 定义

`DisplayELF(file any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 格式化的 ELF 信息字符串 |
| r2 | `error` | 错误信息 |


### GetELFArchitecture

#### 详细描述
GetELFArchitecture 获取 ELF 文件的机器架构类型

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - 架构类型字符串，如 &#34;EM_X86_64 (AMD x86-64)&#34;

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
arch, err = elf.GetELFArchitecture("/path/to/binary")
if err != nil { die(err) }
println(arch)
``````````````


#### 定义

`GetELFArchitecture(file any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 架构类型字符串，如 &#34;EM_X86_64 (AMD x86-64)&#34; |
| r2 | `error` | 错误信息 |


### GetELFEntryPoint

#### 详细描述
GetELFEntryPoint 获取 ELF 文件的入口地址

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - 入口地址

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
entry, err = elf.GetELFEntryPoint("/path/to/binary")
if err != nil { die(err) }
println(entry)
``````````````


#### 定义

`GetELFEntryPoint(file any) (uint64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `uint64` | 入口地址 |
| r2 | `error` | 错误信息 |


### GetELFSection

#### 详细描述
GetELFSection 获取指定索引的 ELF 节信息

参数:

  - info: ELF 信息结构（由 elf.ParseELF 得到）

  - index: 节索引



返回值:

  - ELF 节信息

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
info, err = elf.ParseELF("/path/to/binary")
if err != nil { die(err) }
sect, err = elf.GetELFSection(info, 0)
if err != nil { die(err) }
println(sect.Name)
``````````````


#### 定义

`GetELFSection(info *ELFInfo, index int) (*ELFSection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| info | `*ELFInfo` | ELF 信息结构（由 elf.ParseELF 得到） |
| index | `int` | 节索引 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFSection` | ELF 节信息 |
| r2 | `error` | 错误信息 |


### GetELFSegment

#### 详细描述
GetELFSegment 获取指定索引的 ELF 段信息

参数:

  - info: ELF 信息结构（由 elf.ParseELF 得到）

  - index: 段索引



返回值:

  - ELF 段信息

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
info, err = elf.ParseELF("/path/to/binary")
if err != nil { die(err) }
seg, err = elf.GetELFSegment(info, 0)
if err != nil { die(err) }
println(seg.Type)
``````````````


#### 定义

`GetELFSegment(info *ELFInfo, index int) (*ELFSegment, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| info | `*ELFInfo` | ELF 信息结构（由 elf.ParseELF 得到） |
| index | `int` | 段索引 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFSegment` | ELF 段信息 |
| r2 | `error` | 错误信息 |


### IsELF

#### 详细描述
IsELF 检查文件是否为 ELF 格式（通过文件头魔数 0x7F 45 4C 46 判断）

参数:

  - file: 文件路径



返回值:

  - 是否为 ELF 文件




Example:

``````````````yak
// 写入 ELF 魔数后应被识别为 ELF
p = file.Join(os.TempDir(), "yak-elf-example.bin")
file.Save(p, codec.DecodeHex("7f454c46")~)~
println(elf.IsELF(p))   // OUT: true
assert elf.IsELF(p) == true, "file with ELF magic should be recognized"
file.Remove(p)
``````````````


#### 定义

`IsELF(file string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 ELF 文件 |


### ParseELF

#### 详细描述
ParseELF 解析 ELF 文件，返回包含文件头、段、节的完整信息结构

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - ELF 文件信息（含 Header、Segments、Sections）

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
info, err = elf.ParseELF("/path/to/binary")
if err != nil { die(err) }
println(info.Header.Magic)
println(info.Header.Machine)
``````````````


#### 定义

`ParseELF(file any) (*ELFInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFInfo` | ELF 文件信息（含 Header、Segments、Sections） |
| r2 | `error` | 错误信息 |


### ReadELFHeader

#### 详细描述
ReadELFHeader 仅读取 ELF 文件头信息

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - ELF 文件头信息（含 Class、Machine、Entry 等）

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
header, err = elf.ReadELFHeader("/path/to/binary")
if err != nil { die(err) }
println(header.Class)
println(header.Machine)
``````````````


#### 定义

`ReadELFHeader(file any) (*ELFHeader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFHeader` | ELF 文件头信息（含 Class、Machine、Entry 等） |
| r2 | `error` | 错误信息 |


### ReadELFSections

#### 详细描述
ReadELFSections 读取 ELF 的节（Section Header）信息列表

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - ELF 节信息列表

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
sections, err = elf.ReadELFSections("/path/to/binary")
if err != nil { die(err) }

	for sect in sections {
	    if sect.IsSymTab { println(sect.Name) }
	}
``````````````


#### 定义

`ReadELFSections(file any) ([]ELFSection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ELFSection` | ELF 节信息列表 |
| r2 | `error` | 错误信息 |


### ReadELFSegments

#### 详细描述
ReadELFSegments 读取 ELF 的段（Program Header）信息列表

参数:

  - file: 文件路径(string)或字节数组([]byte)



返回值:

  - ELF 段信息列表

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 ELF 二进制文件
segments, err = elf.ReadELFSegments("/path/to/binary")
if err != nil { die(err) }

	for seg in segments {
	    if seg.IsCode { println(seg.Type) }
	}
``````````````


#### 定义

`ReadELFSegments(file any) ([]ELFSegment, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` | 文件路径(string)或字节数组([]byte) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ELFSegment` | ELF 段信息列表 |
| r2 | `error` | 错误信息 |


