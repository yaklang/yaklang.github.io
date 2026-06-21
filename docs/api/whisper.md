# whisper {#library-whisper}

`whisper` 库提供语音转写能力（基于 Whisper），把音频转换为 SRT 字幕文件并管理字幕，常用于音视频内容分析、取证转写与 AI 多模态预处理。

典型使用场景：

- 转写：`whisper.ConvertAudioToSRTFile(audio)` 把音频转为 SRT 字幕文件。
- 字幕管理：`whisper.CreateSRTManager(srtPath)` 创建字幕管理器，对字幕做读取与处理。

与相邻库的关系：`whisper` 常承接 `ffmpeg`（从视频抽取音频）的产出，转写后的文本可交给 `ai`/`rag` 做内容分析与知识入库。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [whisper.ConvertAudioToSRTFile](#convertaudiotosrtfile) | `i string` | `string, error` | 调用本地 whisper 模型把音频文件转写为 SRT 字幕文件 |
| [whisper.CreateSRTManager](#createsrtmanager) | `srtFilePath string` | `*SRTManager, error` | NewSRTManagerFromFile creates a new SRT manager from an SRT file |

## 函数详情

### ConvertAudioToSRTFile {#convertaudiotosrtfile}

```go
ConvertAudioToSRTFile(i string) (string, error)
```

调用本地 whisper 模型把音频文件转写为 SRT 字幕文件

需要在配置中正确设置 whisper 模型路径，转写过程依赖本地模型与外部环境

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入音频文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 SRT 字幕文件路径 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地 whisper 模型与真实音频文件
srtfilename = whisper.ConvertAudioToSRTFile("audio.mp3")~
println(srtfilename)
``````````````

---

### CreateSRTManager {#createsrtmanager}

```go
CreateSRTManager(srtFilePath string) (*SRTManager, error)
```

NewSRTManagerFromFile creates a new SRT manager from an SRT file

NewSRTManagerFromFile 从 SRT 字幕文件创建字幕管理器（导出名为 whisper.CreateSRTManager）

字幕管理器可按时间偏移检索字幕内容、遍历字幕条目等

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srtFilePath | `string` | SRT 字幕文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SRTManager` | 字幕管理器对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要真实的 SRT 字幕文件
srt = whisper.CreateSRTManager("subtitle.srt")~
r = srt.GetSRTContextByOffsetSeconds(30, 10)
dump(r)
``````````````

---

