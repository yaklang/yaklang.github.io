# pprof

|函数名|函数描述/介绍|
|:------|:--------|
| [pprof.AutoAnalyzeFile](#autoanalyzefile) |AutoAnalyzeFile 分析指定的 pprof 文件并返回人类可读的分析结果 AutoAnalyzeFile 解析一个 pprof 采样文件并生成可读的性能分析报告（导出名为 pprof.AutoAnalyzeFile） 报告按函数聚合采样数据，便于快速定位热点 参数: - filename...|
| [pprof.StartCPUAndMemoryProfile](#startcpuandmemoryprofile) |StartCPUAndMemoryProfile 同时进行 CPU 与内存采样（导出名为 pprof.StartCPUAndMemoryProfile） 两类采样并行进行，均受同一组选项控制；该调用会阻塞直到采样时长结束 参数: - opts: 可选项，如 pprof.cpuProfilePath ...|
| [pprof.StartCPUProfile](#startcpuprofile) |StartCPUProfile 开始 CPU 采样并将结果写入 profile 文件（导出名为 pprof.StartCPUProfile） 该调用会阻塞直到采样时长结束（由 pprof.timeout 或 pprof.ctx 控制，默认 15 秒） 参数: - opts: 可选项，如 pprof....|
| [pprof.StartMemoryProfile](#startmemoryprofile) |StartMemoryProfile 在采样时长结束后写入一次堆内存 profile（导出名为 pprof.StartMemoryProfile） 该调用会阻塞直到采样时长结束（由 pprof.timeout 或 pprof.ctx 控制，默认 15 秒） 参数: - opts: 可选项，如 ppr...|
| [pprof.callback](#callback) |callback 设置采样完成后的统一回调（导出名为 pprof.callback） 同时作用于 CPU 与内存 profile 完成事件，回调参数为生成的 profile 文件路径 作为 pprof 采样函数的可选项使用 参数: - h: 回调函数 func(profilePath) 返回值: -...|
| [pprof.cpuProfilePath](#cpuprofilepath) |cpuProfilePath 指定 CPU profile 的输出文件路径（导出名为 pprof.cpuProfilePath） 作为 pprof.StartCPUProfile / pprof.StartCPUAndMemoryProfile 的可选项使用；不指定时使用默认临时路径 参数: - f...|
| [pprof.ctx](#ctx) |ctx 指定控制采样时长的上下文（导出名为 pprof.ctx） 采样会一直进行直到上下文结束；若上下文未设置截止时间，则回退为默认 15 秒 作为 pprof 采样函数的可选项使用 参数: - ctx: 控制采样生命周期的上下文 返回值: - 可传入 pprof 采样函数的选项|
| [pprof.memProfilePath](#memprofilepath) |memProfilePath 指定内存 profile 的输出文件路径（导出名为 pprof.memProfilePath） 作为 pprof.StartMemoryProfile / pprof.StartCPUAndMemoryProfile 的可选项使用；不指定时使用默认临时路径 参数: - ...|
| [pprof.onCPUProfileFinished](#oncpuprofilefinished) |onCPUProfileFinished 设置 CPU 采样结束时的回调（导出名为 pprof.onCPUProfileFinished） 回调参数为生成的 CPU profile 文件路径与可能的错误；作为 pprof.StartCPUProfile 的可选项使用 参数: - fn: 回调函数 f...|
| [pprof.onCPUProfileStarted](#oncpuprofilestarted) |onCPUProfileStarted 设置 CPU 采样开始时的回调（导出名为 pprof.onCPUProfileStarted） 回调参数为 CPU profile 文件路径；作为 pprof.StartCPUProfile 的可选项使用 参数: - fn: 回调函数 func(profile...|
| [pprof.onMemProfileFinished](#onmemprofilefinished) |onMemProfileFinished 设置内存采样结束时的回调（导出名为 pprof.onMemProfileFinished） 回调参数为生成的内存 profile 文件路径与可能的错误；作为 pprof.StartMemoryProfile 的可选项使用 参数: - fn: 回调函数 fun...|
| [pprof.onMemProfileStarted](#onmemprofilestarted) |onMemProfileStarted 设置内存采样开始时的回调（导出名为 pprof.onMemProfileStarted） 回调参数为内存 profile 文件路径；作为 pprof.StartMemoryProfile 的可选项使用 参数: - fn: 回调函数 func(profilePa...|
| [pprof.timeout](#timeout) |timeout 指定采样持续的秒数（导出名为 pprof.timeout） 内部会据此创建一个带截止时间的上下文；传入非正数时回退为默认 15 秒 作为 pprof 采样函数的可选项使用 参数: - i: 采样秒数（支持小数） 返回值: - 可传入 pprof 采样函数的选项|


## 函数定义
### AutoAnalyzeFile

#### 详细描述
AutoAnalyzeFile 分析指定的 pprof 文件并返回人类可读的分析结果

AutoAnalyzeFile 解析一个 pprof 采样文件并生成可读的性能分析报告（导出名为 pprof.AutoAnalyzeFile）

报告按函数聚合采样数据，便于快速定位热点



参数:

  - filename: pprof 采样文件路径（由 pprof.StartCPUProfile 等生成）



返回值:

  - 文本格式的分析报告

  - 错误信息（文件读取/解析失败或无性能数据时返回）




Example:

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


#### 定义

`AutoAnalyzeFile(filename string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | pprof 采样文件路径（由 pprof.StartCPUProfile 等生成） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 文本格式的分析报告 |
| r2 | `error` | 错误信息（文件读取/解析失败或无性能数据时返回） |


### StartCPUAndMemoryProfile

#### 详细描述
StartCPUAndMemoryProfile 同时进行 CPU 与内存采样（导出名为 pprof.StartCPUAndMemoryProfile）

两类采样并行进行，均受同一组选项控制；该调用会阻塞直到采样时长结束



参数:

  - opts: 可选项，如 pprof.cpuProfilePath / pprof.memProfilePath / pprof.timeout / pprof.ctx / pprof.callback 等



返回值:

  - 错误信息




Example:

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


#### 定义

`StartCPUAndMemoryProfile(opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` | 可选项，如 pprof.cpuProfilePath / pprof.memProfilePath / pprof.timeout / pprof.ctx / pprof.callback 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### StartCPUProfile

#### 详细描述
StartCPUProfile 开始 CPU 采样并将结果写入 profile 文件（导出名为 pprof.StartCPUProfile）

该调用会阻塞直到采样时长结束（由 pprof.timeout 或 pprof.ctx 控制，默认 15 秒）



参数:

  - opts: 可选项，如 pprof.cpuProfilePath / pprof.timeout / pprof.ctx / pprof.onCPUProfileStarted / pprof.onCPUProfileFinished



返回值:

  - 错误信息




Example:

``````````````yak
prof = file.Join(os.TempDir(), "cpu_demo.prof")
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "StartCPUProfile should write a CPU profile file"
file.Remove(prof)
``````````````


#### 定义

`StartCPUProfile(opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` | 可选项，如 pprof.cpuProfilePath / pprof.timeout / pprof.ctx / pprof.onCPUProfileStarted / pprof.onCPUProfileFinished |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### StartMemoryProfile

#### 详细描述
StartMemoryProfile 在采样时长结束后写入一次堆内存 profile（导出名为 pprof.StartMemoryProfile）

该调用会阻塞直到采样时长结束（由 pprof.timeout 或 pprof.ctx 控制，默认 15 秒）



参数:

  - opts: 可选项，如 pprof.memProfilePath / pprof.timeout / pprof.ctx / pprof.onMemProfileStarted / pprof.onMemProfileFinished



返回值:

  - 错误信息




Example:

``````````````yak
prof = file.Join(os.TempDir(), "mem_demo.prof")
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "StartMemoryProfile should write a memory profile file"
file.Remove(prof)
``````````````


#### 定义

`StartMemoryProfile(opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` | 可选项，如 pprof.memProfilePath / pprof.timeout / pprof.ctx / pprof.onMemProfileStarted / pprof.onMemProfileFinished |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### callback

#### 详细描述
callback 设置采样完成后的统一回调（导出名为 pprof.callback）

同时作用于 CPU 与内存 profile 完成事件，回调参数为生成的 profile 文件路径

作为 pprof 采样函数的可选项使用



参数:

  - h: 回调函数 func(profilePath)



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "mem_cb_demo.prof")
done = ""
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1), pprof.callback(func(p) { done = p }))
println(done == prof)   // OUT: true
assert done == prof, "callback should receive the generated profile path"
file.Remove(prof)
``````````````


#### 定义

`callback(h func(string)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(string)` | 回调函数 func(profilePath) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### cpuProfilePath

#### 详细描述
cpuProfilePath 指定 CPU profile 的输出文件路径（导出名为 pprof.cpuProfilePath）

作为 pprof.StartCPUProfile / pprof.StartCPUAndMemoryProfile 的可选项使用；不指定时使用默认临时路径



参数:

  - file: CPU profile 输出文件路径



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "cpu_path_demo.prof")
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "cpuProfilePath should control where the CPU profile is written"
file.Remove(prof)
``````````````


#### 定义

`cpuProfilePath(file string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` | CPU profile 输出文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### ctx

#### 详细描述
ctx 指定控制采样时长的上下文（导出名为 pprof.ctx）

采样会一直进行直到上下文结束；若上下文未设置截止时间，则回退为默认 15 秒

作为 pprof 采样函数的可选项使用



参数:

  - ctx: 控制采样生命周期的上下文



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "cpu_ctx_demo.prof")
ctx = context.WithTimeout(context.Background(), time.ParseDuration("1s")~)[0]
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.ctx(ctx))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "ctx should bound the CPU profiling duration"
file.Remove(prof)
``````````````


#### 定义

`ctx(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 控制采样生命周期的上下文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### memProfilePath

#### 详细描述
memProfilePath 指定内存 profile 的输出文件路径（导出名为 pprof.memProfilePath）

作为 pprof.StartMemoryProfile / pprof.StartCPUAndMemoryProfile 的可选项使用；不指定时使用默认临时路径



参数:

  - file: 内存 profile 输出文件路径



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "mem_path_demo.prof")
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "memProfilePath should control where the memory profile is written"
file.Remove(prof)
``````````````


#### 定义

`memProfilePath(file string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` | 内存 profile 输出文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### onCPUProfileFinished

#### 详细描述
onCPUProfileFinished 设置 CPU 采样结束时的回调（导出名为 pprof.onCPUProfileFinished）

回调参数为生成的 CPU profile 文件路径与可能的错误；作为 pprof.StartCPUProfile 的可选项使用



参数:

  - fn: 回调函数 func(profilePath, err)



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "cpu_fin_demo.prof")
fin = ""
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.timeout(1), pprof.onCPUProfileFinished(func(p, err) { fin = p }))
println(fin == prof)   // OUT: true
assert fin == prof, "onCPUProfileFinished should report the finished CPU profile path"
file.Remove(prof)
``````````````


#### 定义

`onCPUProfileFinished(fn func(string, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string, error)` | 回调函数 func(profilePath, err) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### onCPUProfileStarted

#### 详细描述
onCPUProfileStarted 设置 CPU 采样开始时的回调（导出名为 pprof.onCPUProfileStarted）

回调参数为 CPU profile 文件路径；作为 pprof.StartCPUProfile 的可选项使用



参数:

  - fn: 回调函数 func(profilePath)



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "cpu_start_demo.prof")
started = ""
pprof.StartCPUProfile(pprof.cpuProfilePath(prof), pprof.timeout(1), pprof.onCPUProfileStarted(func(p) { started = p }))
println(started == prof)   // OUT: true
assert started == prof, "onCPUProfileStarted should report the CPU profile path"
file.Remove(prof)
``````````````


#### 定义

`onCPUProfileStarted(fn func(string)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string)` | 回调函数 func(profilePath) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### onMemProfileFinished

#### 详细描述
onMemProfileFinished 设置内存采样结束时的回调（导出名为 pprof.onMemProfileFinished）

回调参数为生成的内存 profile 文件路径与可能的错误；作为 pprof.StartMemoryProfile 的可选项使用



参数:

  - fn: 回调函数 func(profilePath, err)



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "mem_fin_demo.prof")
fin = ""
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1), pprof.onMemProfileFinished(func(p, err) { fin = p }))
println(fin == prof)   // OUT: true
assert fin == prof, "onMemProfileFinished should report the finished memory profile path"
file.Remove(prof)
``````````````


#### 定义

`onMemProfileFinished(fn func(string, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string, error)` | 回调函数 func(profilePath, err) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### onMemProfileStarted

#### 详细描述
onMemProfileStarted 设置内存采样开始时的回调（导出名为 pprof.onMemProfileStarted）

回调参数为内存 profile 文件路径；作为 pprof.StartMemoryProfile 的可选项使用



参数:

  - fn: 回调函数 func(profilePath)



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "mem_start_demo.prof")
started = ""
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1), pprof.onMemProfileStarted(func(p) { started = p }))
println(started == prof)   // OUT: true
assert started == prof, "onMemProfileStarted should report the memory profile path"
file.Remove(prof)
``````````````


#### 定义

`onMemProfileStarted(fn func(string)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string)` | 回调函数 func(profilePath) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


### timeout

#### 详细描述
timeout 指定采样持续的秒数（导出名为 pprof.timeout）

内部会据此创建一个带截止时间的上下文；传入非正数时回退为默认 15 秒

作为 pprof 采样函数的可选项使用



参数:

  - i: 采样秒数（支持小数）



返回值:

  - 可传入 pprof 采样函数的选项




Example:

``````````````yak
prof = file.Join(os.TempDir(), "mem_timeout_demo.prof")
pprof.StartMemoryProfile(pprof.memProfilePath(prof), pprof.timeout(1))
println(file.IsExisted(prof))   // OUT: true
assert file.IsExisted(prof), "timeout should bound the profiling duration"
file.Remove(prof)
``````````````


#### 定义

`timeout(i float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 采样秒数（支持小数） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 pprof 采样函数的选项 |


