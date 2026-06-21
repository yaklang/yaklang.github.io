# ffmpeg {#library-ffmpeg}

`ffmpeg` 库基于 ffmpeg 提供音视频处理能力，支持抽帧、抽音轨、切片、烧录字幕、屏幕截图等，常用于多媒体取证、视频内容分析与 AI 多模态预处理。

典型使用场景：

- 抽取：`ffmpeg.ExtractAudioFromVideo` 抽音轨，`ffmpeg.ExtractFineGrainedFramesFromVideo` / `ffmpeg.ExtractBroadGrainedFramesFromVideo` 按粒度抽帧，`ffmpeg.ExtractVideoSliceFromVideo` 切片，`ffmpeg.ExtractUserScreenshot` 截屏。
- 字幕：`ffmpeg.BurnSRTIntoVideo` 把 SRT 字幕烧录进视频。
- 选项：`ffmpeg.withStartEnd`（时间区间）、`ffmpeg.withSliceDurationSeconds` / `ffmpeg.withSliceTargetFPS`（切片参数）、`ffmpeg.withOutputFile` / `ffmpeg.withSliceOutputDir`（输出）等。

与相邻库的关系：`ffmpeg` 是多媒体预处理工具，抽出的帧/音频常交给 `whisper`（语音转写）、`imageutils`（图像处理）或 AI 多模态分析使用。

> 共 22 个函数、3 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| QualityHigh | `ffmpegutils.ScreenCaptureQuality` | 2 |
| QualityLow | `ffmpegutils.ScreenCaptureQuality` | 0 |
| QualityNormal | `ffmpegutils.ScreenCaptureQuality` | 1 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ffmpeg.BurnSRTIntoVideo](#burnsrtintovideo) | `inputVideo string, srtFile string, opts ...ffmpegutils.Option` | `string, error` | 将 SRT 字幕烧录进视频（导出名为 ffmpeg.BurnSRTIntoVideo） |
| [ffmpeg.ExtractAudioFromVideo](#extractaudiofromvideo) | `i string, opts ...ffmpegutils.Option` | `*ffmpegutils.AudioExtractionResult, error` | 从视频中提取音频（导出名为 ffmpeg.ExtractAudioFromVideo） |
| [ffmpeg.ExtractBroadGrainedFramesFromVideo](#extractbroadgrainedframesfromvideo) | `i string, opts ...ffmpegutils.Option` | `<-chan *ffmpegutils.FfmpegStreamResult, error` | 以粗粒度（较高场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractBroadGrainedFramesFromVideo） |
| [ffmpeg.ExtractFineGrainedFramesFromVideo](#extractfinegrainedframesfromvideo) | `i string, opts ...ffmpegutils.Option` | `<-chan *ffmpegutils.FfmpegStreamResult, error` | 以细粒度（低场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractFineGrainedFramesFromVideo） |
| [ffmpeg.ExtractUserScreenshot](#extractuserscreenshot) | `opts ...ffmpegutils.Option` | `*ffmpegutils.FfmpegStreamResult, error` | 截取用户屏幕截图，支持多显示器自动拼接（导出名为 ffmpeg.ExtractUserScreenshot） |
| [ffmpeg.ExtractVideoSliceFromVideo](#extractvideoslicefromvideo) | `i string, opts ...ffmpegutils.Option` | `<-chan *ffmpegutils.VideoSliceResult, error` | 将长视频按时间切分为多个 mp4 切片（导出名为 ffmpeg.ExtractVideoSliceFromVideo） |

## 可变参数函数详情

### BurnSRTIntoVideo {#burnsrtintovideo}

```go
BurnSRTIntoVideo(inputVideo string, srtFile string, opts ...ffmpegutils.Option) (string, error)
```

将 SRT 字幕烧录进视频（导出名为 ffmpeg.BurnSRTIntoVideo）
默认启用字幕内边距与时间戳，输出为新的 mp4 文件并返回其路径

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| inputVideo | `string` | 输入视频文件路径 |
| srtFile | `string` | SRT 字幕文件路径 |

**可选参数**

可作为可变参数 `opts ...ffmpegutils.Option` 传入选项；共 16 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 输出视频文件路径 |
| r2 | `error` | 错误信息（烧录失败或输出无效时返回） |

**示例**

``````````````yak
outputFile, err = ffmpeg.BurnSRTIntoVideo("video.mp4", "subtitles.srt")
die(err)
println(outputFile)

// With simple mode (wavy calling)
outputFile = ffmpeg.BurnSRTIntoVideo("video.mp4", "subtitles.srt")~
``````````````

---

### ExtractAudioFromVideo {#extractaudiofromvideo}

```go
ExtractAudioFromVideo(i string, opts ...ffmpegutils.Option) (*ffmpegutils.AudioExtractionResult, error)
```

从视频中提取音频（导出名为 ffmpeg.ExtractAudioFromVideo）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入视频文件路径 |

**可选参数**

可作为可变参数 `opts ...ffmpegutils.Option` 传入选项；共 16 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ffmpegutils.AudioExtractionResult` | 音频提取结果对象（含输出文件路径等信息） |
| r2 | `error` | 错误信息（提取失败时返回） |

**示例**

``````````````yak
result, err = ffmpeg.ExtractAudioFromVideo("video.mp4")
die(err)
println(result.FilePath)
// ------------
dump(ffmpeg.ExtractAudioFromVideo("video.mp4")~)
``````````````

---

### ExtractBroadGrainedFramesFromVideo {#extractbroadgrainedframesfromvideo}

```go
ExtractBroadGrainedFramesFromVideo(i string, opts ...ffmpegutils.Option) (<-chan *ffmpegutils.FfmpegStreamResult, error)
```

以粗粒度（较高场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractBroadGrainedFramesFromVideo）
相比细粒度采样更稀疏，适合快速概览视频内容

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入视频文件路径 |

**可选参数**

可作为可变参数 `opts ...ffmpegutils.Option` 传入选项；共 16 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *ffmpegutils.FfmpegStreamResult` | 帧结果管道，可用 for range 逐帧消费（每帧可 SaveToFile） |
| r2 | `error` | 错误信息（提取失败时返回） |

**示例**

``````````````yak
result, err = ffmpeg.ExtractBroadGrainedFramesFromVideo("video.mp4");

for i in result {
    filename, err = i.SaveToFile();
	if err != nil { continue }
}
``````````````

---

### ExtractFineGrainedFramesFromVideo {#extractfinegrainedframesfromvideo}

```go
ExtractFineGrainedFramesFromVideo(i string, opts ...ffmpegutils.Option) (<-chan *ffmpegutils.FfmpegStreamResult, error)
```

以细粒度（低场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractFineGrainedFramesFromVideo）
默认启用时间戳叠加与智能场景检测，适合需要较密集采样的场景

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入视频文件路径 |

**可选参数**

可作为可变参数 `opts ...ffmpegutils.Option` 传入选项；共 16 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *ffmpegutils.FfmpegStreamResult` | 帧结果管道，可用 for range 逐帧消费（每帧可 SaveToFile） |
| r2 | `error` | 错误信息（提取失败时返回） |

**示例**

``````````````yak
result, err = ffmpeg.ExtractFineGrainedFramesFromVideo("video.mp4");

	for i in result {
	    filename, err = i.SaveToFile();
		if err != nil { continue }
	}

result = ffmpeg.ExtractFineGrainedFramesFromVideo("video.mp4", ffmpeg.withStartEnd(10, 20.5))~ // 10-20.5 seconds frames
``````````````

---

### ExtractUserScreenshot {#extractuserscreenshot}

```go
ExtractUserScreenshot(opts ...ffmpegutils.Option) (*ffmpegutils.FfmpegStreamResult, error)
```

截取用户屏幕截图，支持多显示器自动拼接（导出名为 ffmpeg.ExtractUserScreenshot）

**可选参数**

可作为可变参数 `opts ...ffmpegutils.Option` 传入选项；共 16 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ffmpegutils.FfmpegStreamResult` | 截图结果对象（可调用 SaveToFile 保存） |
| r2 | `error` | 错误信息（截图失败时返回） |

**示例**

``````````````yak
result, err = ffmpeg.ExtractUserScreenshot()
die(err)
filename, err = result.SaveToFile()
println(filename)

// With debug mode
result = ffmpeg.ExtractUserScreenshot(ffmpeg.withScreenCaptureDebug(true))~

// With high quality (无损压缩)
result = ffmpeg.ExtractUserScreenshot(ffmpeg.withScreenCaptureQuality(ffmpeg.QualityHigh))~

// With normal quality (平衡质量和大小)
result = ffmpeg.ExtractUserScreenshot(ffmpeg.withScreenCaptureQuality(ffmpeg.QualityNormal))~

// With low quality (快速截图，小文件)
result = ffmpeg.ExtractUserScreenshot(ffmpeg.withScreenCaptureQuality(ffmpeg.QualityLow))~

// Screenshot is automatically concatenated if multiple screens are detected
``````````````

---

### ExtractVideoSliceFromVideo {#extractvideoslicefromvideo}

```go
ExtractVideoSliceFromVideo(i string, opts ...ffmpegutils.Option) (<-chan *ffmpegutils.VideoSliceResult, error)
```

将长视频按时间切分为多个 mp4 切片（导出名为 ffmpeg.ExtractVideoSliceFromVideo）
默认流复制（不重编码、保持源分辨率与 FPS）；通过 ffmpeg.withSliceReencode(true) 启用重编码。
切片实时通过 channel 与可选回调 ffmpeg.withSliceCallback(cb) 下发。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入视频文件路径 |

**可选参数**

可作为可变参数 `opts ...ffmpegutils.Option` 传入选项；共 16 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *ffmpegutils.VideoSliceResult` | 视频切片结果管道，可用 for range 逐个消费（每个含 FilePath/Error 等） |
| r2 | `error` | 错误信息（启动切片失败时返回） |

**示例**

``````````````yak
ch, err = ffmpeg.ExtractVideoSliceFromVideo("video.mp4",
    ffmpeg.withSlicePresetForOmni("flash"),
    ffmpeg.withSliceCallback(r => log.info("slice ready: %v", r.FilePath)),
)
for slice in ch {
    if slice.Error != nil { continue }
    // upload slice.FilePath to omni model
}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[ffmpeg.BurnSRTIntoVideo](#burnsrtintovideo)、[ffmpeg.ExtractAudioFromVideo](#extractaudiofromvideo)、[ffmpeg.ExtractBroadGrainedFramesFromVideo](#extractbroadgrainedframesfromvideo)、[ffmpeg.ExtractFineGrainedFramesFromVideo](#extractfinegrainedframesfromvideo)、[ffmpeg.ExtractUserScreenshot](#extractuserscreenshot)、[ffmpeg.ExtractVideoSliceFromVideo](#extractvideoslicefromvideo)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `ffmpeg.withDebug` | `debug bool` | `Option` | 启用 ffmpeg 命令的详细日志输出 |
| `ffmpeg.withIgnoreBottomPaddingInSceneDetection` | `enable bool` | `Option` | 设置场景检测时是否忽略底部内边距区域 |
| `ffmpeg.withOutputFile` | `filepath string` | `Option` | 指定最终输出文件的路径 |
| `ffmpeg.withScreenCaptureDebug` | `enable bool` | `Option` | 启用屏幕截图的调试信息 |
| `ffmpeg.withScreenCaptureQuality` | `quality ScreenCaptureQuality` | `Option` | 设置屏幕截图质量 |
| `ffmpeg.withSliceCallback` | `cb func(*VideoSliceResult)` | `Option` | 注册切片实时回调，每段切片落盘后立即触发（与 channel 同时发送） |
| `ffmpeg.withSliceDurationSeconds` | `seconds float64` | `Option` | 设置每段切片的时长（秒），默认 120 秒 |
| `ffmpeg.withSliceLoadRawData` | `enable bool` | `Option` | 设置是否在切片结果 channel 中携带分片原始字节，默认 false |
| `ffmpeg.withSliceMaxHeight` | `h int` | `Option` | 重编码模式下设置切片最大高度（保持宽高比），默认 720 |
| `ffmpeg.withSliceOutputDir` | `dir string` | `Option` | 指定切片输出目录，不指定则使用临时目录 |
| `ffmpeg.withSlicePresetForOmni` | `preset string` | `Option` | 按目标 omni 模型一键预设切片段长 |
| `ffmpeg.withSliceReencode` | `enable bool` | `Option` | 设置切片是否重编码 |
| `ffmpeg.withSliceTargetFPS` | `fps float64` | `Option` | 重编码模式下设置切片目标 FPS，默认 2 |
| `ffmpeg.withStartEnd` | `start float64, end float64` | `Option` | 以秒为单位指定提取/处理的时间区间 |
| `ffmpeg.withSubtitlePadding` | `enable bool` | `Option` | 设置烧录字幕时是否在底部添加黑色内边距 |
| `ffmpeg.withTimestampOverlay` | `show bool` | `Option` | 设置是否在提取的帧上叠加时间戳 |

