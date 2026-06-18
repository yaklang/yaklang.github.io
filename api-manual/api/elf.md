# elf

|函数名|函数描述/介绍|
|:------|:--------|
| [elf.DisplayELF](#displayelf) |DisplayELF 以 readelf 风格显示 ELF 文件信息  @param {string|[]byte} file 文件路径或字节数组  @return {string} 格式化的 ELF 信息字符串  @return {error} 错误信息  |
| [elf.GetELFArchitecture](#getelfarchitecture) |GetELFArchitecture 获取ELF文件的架构类型  @param {string|[]byte} file 文件路径或字节数组  @return {string} 架构类型字符串  @return {error} 错误信息  |
| [elf.GetELFEntryPoint](#getelfentrypoint) |GetELFEntryPoint 获取ELF文件的入口地址  @param {string|[]byte} file 文件路径或字节数组  @return {uint64} 入口地址  @return {error} 错误信息  |
| [elf.GetELFSection](#getelfsection) |GetELFSection 获取指定索引的ELF节信息  @param {*ELFInfo} info ELF信息结构  @param {int} index 节索引  @return {*ELFSection} ELF节信息  @return {error} 错误信息  |
| [elf.GetELFSegment](#getelfsegment) |GetELFSegment 获取指定索引的ELF段信息  @param {*ELFInfo} info ELF信息结构  @param {int} index 段索引  @return {*ELFSegment} ELF段信息  @return {error} 错误信息  |
| [elf.IsELF](#iself) |IsELF 检查文件是否为ELF格式  @param {string} file 文件路径  @return {bool} 是否为ELF文件  |
| [elf.ParseELF](#parseelf) |ParseELF 解析ELF文件，返回ELF信息结构  @param {string|[]byte} file 文件路径或字节数组  @return {*ELFInfo} ELF文件信息  @return {error} 错误信息  |
| [elf.ReadELFHeader](#readelfheader) |ReadELFHeader 仅读取ELF文件头信息  @param {string|[]byte} file 文件路径或字节数组  @return {*ELFHeader} ELF文件头信息  @return {error} 错误信息  |
| [elf.ReadELFSections](#readelfsections) |ReadELFSections 读取ELF节信息  @param {string|[]byte} file 文件路径或字节数组  @return {[]ELFSection} ELF节信息列表  @return {error} 错误信息  |
| [elf.ReadELFSegments](#readelfsegments) |ReadELFSegments 读取ELF段信息  @param {string|[]byte} file 文件路径或字节数组  @return {[]ELFSegment} ELF段信息列表  @return {error} 错误信息  |


## 函数定义
### DisplayELF

#### 详细描述
DisplayELF 以 readelf 风格显示 ELF 文件信息

@param {string|[]byte} file 文件路径或字节数组

@return {string} 格式化的 ELF 信息字符串

@return {error} 错误信息

Example:
```
// 从文件路径显示
output, err = elf.DisplayELF("/path/to/binary")
// 或从字节数组显示
data = file.ReadFile("/path/to/binary")
output, err = elf.DisplayELF(data)
println(output)  // 显示类似 readelf 的输出
```


#### 定义

`DisplayELF(file any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GetELFArchitecture

#### 详细描述
GetELFArchitecture 获取ELF文件的架构类型

@param {string|[]byte} file 文件路径或字节数组

@return {string} 架构类型字符串

@return {error} 错误信息

Example:
```
// 从文件路径获取
arch, err = elf.GetELFArchitecture("/path/to/binary")
// 或从字节数组获取
data = file.ReadFile("/path/to/binary")
arch, err = elf.GetELFArchitecture(data)
dump(arch)  // "EM_X86_64 (AMD x86-64)"
```


#### 定义

`GetELFArchitecture(file any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GetELFEntryPoint

#### 详细描述
GetELFEntryPoint 获取ELF文件的入口地址

@param {string|[]byte} file 文件路径或字节数组

@return {uint64} 入口地址

@return {error} 错误信息

Example:
```
// 从文件路径获取
entry, err = elf.GetELFEntryPoint("/path/to/binary")
// 或从字节数组获取
data = file.ReadFile("/path/to/binary")
entry, err = elf.GetELFEntryPoint(data)
dump(entry)  // 0x401000
```


#### 定义

`GetELFEntryPoint(file any) (uint64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `uint64` |   |
| r2 | `error` |   |


### GetELFSection

#### 详细描述
GetELFSection 获取指定索引的ELF节信息

@param {*ELFInfo} info ELF信息结构

@param {int} index 节索引

@return {*ELFSection} ELF节信息

@return {error} 错误信息

Example:
```
info, err = elf.ParseELF("/path/to/binary")
sect, err = elf.GetELFSection(info, 0)  // 获取第一个节
dump(sect.Name, sect.Type)
```


#### 定义

`GetELFSection(info *ELFInfo, index int) (*ELFSection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| info | `*ELFInfo` |   |
| index | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFSection` |   |
| r2 | `error` |   |


### GetELFSegment

#### 详细描述
GetELFSegment 获取指定索引的ELF段信息

@param {*ELFInfo} info ELF信息结构

@param {int} index 段索引

@return {*ELFSegment} ELF段信息

@return {error} 错误信息

Example:
```
info, err = elf.ParseELF("/path/to/binary")
seg, err = elf.GetELFSegment(info, 0)  // 获取第一个段
dump(seg.Type, seg.Flags)
```


#### 定义

`GetELFSegment(info *ELFInfo, index int) (*ELFSegment, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| info | `*ELFInfo` |   |
| index | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFSegment` |   |
| r2 | `error` |   |


### IsELF

#### 详细描述
IsELF 检查文件是否为ELF格式

@param {string} file 文件路径

@return {bool} 是否为ELF文件

Example:
```

	if elf.IsELF("/path/to/binary") {
	    println("This is an ELF file")
	}

```


#### 定义

`IsELF(file string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ParseELF

#### 详细描述
ParseELF 解析ELF文件，返回ELF信息结构

@param {string|[]byte} file 文件路径或字节数组

@return {*ELFInfo} ELF文件信息

@return {error} 错误信息

Example:
```
// 从文件路径解析
info, err = elf.ParseELF("/path/to/binary")
dump(info.Header.Magic)  // "ELF"
dump(info.Header.Machine)  // "EM_X86_64 (AMD x86-64)"
dump(info.Header.Entry)  // 入口地址

// 从字节数组解析
data = file.ReadFile("/path/to/binary")
info, err = elf.ParseELF(data)
```


#### 定义

`ParseELF(file any) (*ELFInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFInfo` |   |
| r2 | `error` |   |


### ReadELFHeader

#### 详细描述
ReadELFHeader 仅读取ELF文件头信息

@param {string|[]byte} file 文件路径或字节数组

@return {*ELFHeader} ELF文件头信息

@return {error} 错误信息

Example:
```
// 从文件路径读取
header, err = elf.ReadELFHeader("/path/to/binary")
// 或从字节数组读取
data = file.ReadFile("/path/to/binary")
header, err = elf.ReadELFHeader(data)
dump(header.Magic)  // "ELF"
dump(header.Class)  // "64-bit"
dump(header.Machine)  // "EM_X86_64 (AMD x86-64)"
dump(header.Entry)  // 入口地址
```


#### 定义

`ReadELFHeader(file any) (*ELFHeader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ELFHeader` |   |
| r2 | `error` |   |


### ReadELFSections

#### 详细描述
ReadELFSections 读取ELF节信息

@param {string|[]byte} file 文件路径或字节数组

@return {[]ELFSection} ELF节信息列表

@return {error} 错误信息

Example:
```
// 从文件路径读取
sections, err = elf.ReadELFSections("/path/to/binary")
// 或从字节数组读取
data = file.ReadFile("/path/to/binary")
sections, err = elf.ReadELFSections(data)

	for sect in sections {
	    if sect.IsSymTab {
	        dump(sect.Name, sect.Type)  // 符号表信息
	    }
	    if sect.IsStrTab {
	        dump(sect.Name, sect.Type)  // 字符串表信息
	    }
	}

```


#### 定义

`ReadELFSections(file any) ([]ELFSection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ELFSection` |   |
| r2 | `error` |   |


### ReadELFSegments

#### 详细描述
ReadELFSegments 读取ELF段信息

@param {string|[]byte} file 文件路径或字节数组

@return {[]ELFSegment} ELF段信息列表

@return {error} 错误信息

Example:
```
// 从文件路径读取
segments, err = elf.ReadELFSegments("/path/to/binary")
// 或从字节数组读取
data = file.ReadFile("/path/to/binary")
segments, err = elf.ReadELFSegments(data)

	for seg in segments {
	    if seg.IsCode {
	        dump(seg.Type, seg.VAddr, seg.FileSz)  // 代码段信息
	    }
	    if seg.IsData {
	        dump(seg.Type, seg.VAddr, seg.FileSz)  // 数据段信息
	    }
	}

```


#### 定义

`ReadELFSegments(file any) ([]ELFSegment, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ELFSegment` |   |
| r2 | `error` |   |


