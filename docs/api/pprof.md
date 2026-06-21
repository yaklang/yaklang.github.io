# pprof {#library-pprof}

`pprof` 库提供性能剖析能力，采集 CPU 与内存 profile 并可自动分析，常用于排查脚本/引擎的性能瓶颈与内存占用。

典型使用场景：

- 采集 profile：`pprof.StartCPUProfile` / `pprof.StartMemoryProfile` / `pprof.StartCPUAndMemoryProfile` 启动采集，配 `pprof.cpuProfilePath` / `pprof.memProfilePath` / `pprof.timeout` 与各类生命周期回调。
- 自动分析：`pprof.AutoAnalyzeFile(filename)` 对已有 profile 文件做自动分析输出。

与相邻库的关系：`pprof` 是诊断工具，独立于业务逻辑，用于优化耗时脚本（如大规模扫描、AI 处理）的性能。

> 共 13 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pprof.AutoAnalyzeFile](#autoanalyzefile) | `filename string` | `string, error` | 分析指定的 pprof 文件并返回人类可读的分析结果 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pprof.StartCPUAndMemoryProfile](#startcpuandmemoryprofile) | `opts ...Option` | `error` | 同时进行 CPU 与内存采样（导出名为 pprof.StartCPUAndMemoryProfile） |
| [pprof.StartCPUProfile](#startcpuprofile) | `opts ...Option` | `error` | 开始 CPU 采样并将结果写入 profile 文件（导出名为 pprof.StartCPUProfile） |
| [pprof.StartMemoryProfile](#startmemoryprofile) | `opts ...Option` | `error` | 在采样时长结束后写入一次堆内存 profile（导出名为 pprof.StartMemoryProfile） |

## 函数详情

### AutoAnalyzeFile {#autoanalyzefile}

```go
AutoAnalyzeFile(filename string) (string, error)
```

分析指定的 pprof 文件并返回人类可读的分析结果

AutoAnalyzeFile 解析一个 pprof 采样文件并生成可读的性能分析报告（导出名为 pprof.AutoAnalyzeFile）

报告按函数聚合采样数据，便于快速定位热点

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | pprof 采样文件路径（由 pprof.StartCPUProfile 等生成） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 文本格式的分析报告 |
| r2 | `error` | 错误信息（文件读取/解析失败或无性能数据时返回） |

**示例**

``````````````yak
prof = file.Join(os.TempDir(), "cpu_analyze_demo.prof")
stop = false
go func() { n = 0; for !stop { for i in 100000 { n = n + i } } }()
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.timeout(2))
stop = true
report = pprof.AutoAnalyzeFile(prof)~
println(len(report) > 0)   // OUT: true
assert len(report) > 0, "AutoAnalyzeFile should produce a non-empty report"
file.Remove(prof)
``````````````

---

## 可变参数函数详情

### StartCPUAndMemoryProfile {#startcpuandmemoryprofile}

```go
StartCPUAndMemoryProfile(opts ...Option) error
```

同时进行 CPU 与内存采样（导出名为 pprof.StartCPUAndMemoryProfile）

两类采样并行进行，均受同一组选项控制；该调用会阻塞直到采样时长结束

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 9 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
cpuPath = file.Join(os.TempDir(), "cm_cpu_demo.prof")
memPath = file.Join(os.TempDir(), "cm_mem_demo.prof")
finished = 0
pprof.StartCPUAndMemoryProfile(
    pprof.cpuProfilePath(cpuPath),
    pprof.memProfilePath(memPath),
    pprof.timeout(1),
    pprof.callback(func(p) { finished++ }),
)
println(file.IsExisted(cpuPath) && file.IsExisted(memPath))   // OUT: true
assert file.IsExisted(cpuPath) && file.IsExisted(memPath), "should produce both CPU and memory profiles"
file.Remove(cpuPath); file.Remove(memPath)
``````````````

---

### StartCPUProfile {#startcpuprofile}

```go
StartCPUProfile(opts ...Option) error
```

开始 CPU 采样并将结果写入 profile 文件（导出名为 pprof.StartCPUProfile）

该调用会阻塞直到采样时长结束（由 pprof.timeout 或 pprof.ctx 控制，默认 15 秒）

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 9 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
prof = file.Join(os.TempDir(), "cpu_demo.prof")
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "StartCPUProfile should write a CPU profile file"
file.Remove(prof)
``````````````

---

### StartMemoryProfile {#startmemoryprofile}

```go
StartMemoryProfile(opts ...Option) error
```

在采样时长结束后写入一次堆内存 profile（导出名为 pprof.StartMemoryProfile）

该调用会阻塞直到采样时长结束（由 pprof.timeout 或 pprof.ctx 控制，默认 15 秒）

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 9 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
prof = file.Join(os.TempDir(), "mem_demo.prof")
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "StartMemoryProfile should write a memory profile file"
file.Remove(prof)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[pprof.StartCPUAndMemoryProfile](#startcpuandmemoryprofile)、[pprof.StartCPUProfile](#startcpuprofile)、[pprof.StartMemoryProfile](#startmemoryprofile)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `pprof.callback` | `h func(string)` | `Option` | 设置采样完成后的统一回调 |
| `pprof.cpuProfilePath` | `file string` | `Option` | 指定 CPU profile 的输出文件路径 |
| `pprof.ctx` | `ctx context.Context` | `Option` | 指定控制采样时长的上下文 |
| `pprof.memProfilePath` | `file string` | `Option` | 指定内存 profile 的输出文件路径 |
| `pprof.onCPUProfileFinished` | `fn func(string, error)` | `Option` | 设置 CPU 采样结束时的回调 |
| `pprof.onCPUProfileStarted` | `fn func(string)` | `Option` | 设置 CPU 采样开始时的回调 |
| `pprof.onMemProfileFinished` | `fn func(string, error)` | `Option` | 设置内存采样结束时的回调 |
| `pprof.onMemProfileStarted` | `fn func(string)` | `Option` | 设置内存采样开始时的回调 |
| `pprof.timeout` | `i float64` | `Option` | 指定采样持续的秒数 |

