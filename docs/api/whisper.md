# whisper

|函数名|函数描述/介绍|
|:------|:--------|
| [whisper.ConvertAudioToSRTFile](#convertaudiotosrtfile) |ConvertAudioToSRTFile 调用本地 whisper 模型把音频文件转写为 SRT 字幕文件 需要在配置中正确设置 whisper 模型路径，转写过程依赖本地模型与外部环境 参数: - i: 输入音频文件路径 返回值: - 生成的 SRT 字幕文件路径 - 错误信息|
| [whisper.CreateSRTManager](#createsrtmanager) |NewSRTManagerFromFile creates a new SRT manager from an SRT file NewSRTManagerFromFile 从 SRT 字幕文件创建字幕管理器（导出名为 whisper.CreateSRTManager） 字幕管理器可按时间偏移检索字...|


## 函数定义
### ConvertAudioToSRTFile

#### 详细描述
ConvertAudioToSRTFile 调用本地 whisper 模型把音频文件转写为 SRT 字幕文件

需要在配置中正确设置 whisper 模型路径，转写过程依赖本地模型与外部环境

参数:

  - i: 输入音频文件路径



返回值:

  - 生成的 SRT 字幕文件路径

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地 whisper 模型与真实音频文件
srtfilename = whisper.ConvertAudioToSRTFile("audio.mp3")~
println(srtfilename)
``````````````


#### 定义

`ConvertAudioToSRTFile(i string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入音频文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的 SRT 字幕文件路径 |
| r2 | `error` | 错误信息 |


### CreateSRTManager

#### 详细描述
NewSRTManagerFromFile creates a new SRT manager from an SRT file

NewSRTManagerFromFile 从 SRT 字幕文件创建字幕管理器（导出名为 whisper.CreateSRTManager）

字幕管理器可按时间偏移检索字幕内容、遍历字幕条目等

参数:

  - srtFilePath: SRT 字幕文件路径



返回值:

  - 字幕管理器对象

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要真实的 SRT 字幕文件
srt = whisper.CreateSRTManager("subtitle.srt")~
r = srt.GetSRTContextByOffsetSeconds(30, 10)
dump(r)
``````````````


#### 定义

`CreateSRTManager(srtFilePath string) (*SRTManager, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srtFilePath | `string` | SRT 字幕文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SRTManager` | 字幕管理器对象 |
| r2 | `error` | 错误信息 |


