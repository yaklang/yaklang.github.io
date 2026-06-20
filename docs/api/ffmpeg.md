# ffmpeg

|实例名|实例描述|
|:------|:--------|
QualityHigh|(ffmpegutils.ScreenCaptureQuality) 2|
QualityLow|(ffmpegutils.ScreenCaptureQuality) 0|
QualityNormal|(ffmpegutils.ScreenCaptureQuality) 1|

|函数名|函数描述/介绍|
|:------|:--------|
| [ffmpeg.BurnSRTIntoVideo](#burnsrtintovideo) |BurnSRTIntoVideo 将 SRT 字幕烧录进视频（导出名为 ffmpeg.BurnSRTIntoVideo） 默认启用字幕内边距与时间戳，输出为新的 mp4 文件并返回其路径 参数: - inputVideo: 输入视频文件路径 - srtFile: SRT 字幕文件路径 - opts:...|
| [ffmpeg.ExtractAudioFromVideo](#extractaudiofromvideo) |ExtractAudioFromVideo 从视频中提取音频（导出名为 ffmpeg.ExtractAudioFromVideo） 参数: - i: 输入视频文件路径 - opts: 可选项，如 ffmpeg.withOutputFile / ffmpeg.withStartEnd / ffmpeg...|
| [ffmpeg.ExtractBroadGrainedFramesFromVideo](#extractbroadgrainedframesfromvideo) |ExtractBroadGrainedFramesFromVideo 以粗粒度（较高场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractBroadGrainedFramesFromVideo） 相比细粒度采样更稀疏，适合快速概览视频内容 参数: - i: 输入视频文件路径 - opt...|
| [ffmpeg.ExtractFineGrainedFramesFromVideo](#extractfinegrainedframesfromvideo) |ExtractFineGrainedFramesFromVideo 以细粒度（低场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractFineGrainedFramesFromVideo） 默认启用时间戳叠加与智能场景检测，适合需要较密集采样的场景 参数: - i: 输入视频文件路径 ...|
| [ffmpeg.ExtractUserScreenshot](#extractuserscreenshot) |ExtractUserScreenshot 截取用户屏幕截图，支持多显示器自动拼接（导出名为 ffmpeg.ExtractUserScreenshot） 参数: - opts: 可选项，如 ffmpeg.withScreenCaptureDebug / ffmpeg.withScreenCaptur...|
| [ffmpeg.ExtractVideoSliceFromVideo](#extractvideoslicefromvideo) |ExtractVideoSliceFromVideo 将长视频按时间切分为多个 mp4 切片（导出名为 ffmpeg.ExtractVideoSliceFromVideo） 默认流复制（不重编码、保持源分辨率与 FPS）；通过 ffmpeg.withSliceReencode(true) 启用重编码...|
| [ffmpeg.withDebug](#withdebug) |withDebug 启用 ffmpeg 命令的详细日志输出（导出名为 ffmpeg.withDebug） 作为各 ffmpeg.Extract*/Burn* 接口的可选项使用，便于排查问题 参数: - debug: 是否启用详细日志 返回值: - 可传入 ffmpeg 各接口的选项|
| [ffmpeg.withIgnoreBottomPaddingInSceneDetection](#withignorebottompaddinginscenedetection) |withIgnoreBottomPaddingInSceneDetection 设置场景检测时是否忽略底部内边距区域（导出名为 ffmpeg.withIgnoreBottomPaddingInSceneDetection） 启用后场景检测只分析原始画面，忽略时间戳/字幕区域的变化，避免误判场景切换 ...|
| [ffmpeg.withOutputFile](#withoutputfile) |withOutputFile 指定最终输出文件的路径（导出名为 ffmpeg.withOutputFile） 作为 ffmpeg.BurnSRTIntoVideo / ffmpeg.ExtractAudioFromVideo 等接口的可选项；不设置时使用临时文件 参数: - filepath: 输出...|
| [ffmpeg.withScreenCaptureDebug](#withscreencapturedebug) |withScreenCaptureDebug 启用屏幕截图的调试信息（导出名为 ffmpeg.withScreenCaptureDebug） 作为 ffmpeg.ExtractUserScreenshot 的可选项使用 参数: - enable: 是否启用调试信息 返回值: - 可传入 ffmpeg...|
| [ffmpeg.withScreenCaptureQuality](#withscreencapturequality) |withScreenCaptureQuality 设置屏幕截图质量（导出名为 ffmpeg.withScreenCaptureQuality） 作为 ffmpeg.ExtractUserScreenshot 的可选项使用；可选 ffmpeg.QualityLow/QualityNormal/Qual...|
| [ffmpeg.withSliceCallback](#withslicecallback) |withSliceCallback 注册切片实时回调，每段切片落盘后立即触发（与 channel 同时发送）（导出名为 ffmpeg.withSliceCallback） 作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用，便于边切片边处理（如上传到模型） 关键词...|
| [ffmpeg.withSliceDurationSeconds](#withslicedurationseconds) |withSliceDurationSeconds 设置每段切片的时长（秒），默认 120 秒（导出名为 ffmpeg.withSliceDurationSeconds） 作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用 关键词: 切片段长, segment_ti...|
| [ffmpeg.withSliceLoadRawData](#withsliceloadrawdata) |withSliceLoadRawData 设置是否在切片结果 channel 中携带分片原始字节，默认 false（导出名为 ffmpeg.withSliceLoadRawData） 默认仅返回文件路径；启用会显著增加内存与 IO 开销，建议确需 base64 推送时再开启 作为 ffmpeg.Ex...|
| [ffmpeg.withSliceMaxHeight](#withslicemaxheight) |withSliceMaxHeight 重编码模式下设置切片最大高度（保持宽高比），默认 720（导出名为 ffmpeg.withSliceMaxHeight） 仅在启用 ffmpeg.withSliceReencode(true) 时生效；作为 ffmpeg.ExtractVideoSliceFro...|
| [ffmpeg.withSliceOutputDir](#withsliceoutputdir) |withSliceOutputDir 指定切片输出目录，不指定则使用临时目录（导出名为 ffmpeg.withSliceOutputDir） 作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用 关键词: 切片输出目录, slice output dir 参数: -...|
| [ffmpeg.withSlicePresetForOmni](#withslicepresetforomni) |withSlicePresetForOmni 按目标 omni 模型一键预设切片段长（导出名为 ffmpeg.withSlicePresetForOmni） turbo =&gt; 30 秒、flash =&gt; 120 秒、plus =&gt; 120 秒（保守值，避免触发 &#34;video file is too ...|
| [ffmpeg.withSliceReencode](#withslicereencode) |withSliceReencode 设置切片是否重编码（导出名为 ffmpeg.withSliceReencode） false（默认）使用 -c copy 流复制，速度极快、保持源分辨率与 FPS；true 则重编码到指定分辨率与 FPS 作为 ffmpeg.ExtractVideoSliceFr...|
| [ffmpeg.withSliceTargetFPS](#withslicetargetfps) |withSliceTargetFPS 重编码模式下设置切片目标 FPS，默认 2（导出名为 ffmpeg.withSliceTargetFPS） 仅在启用 ffmpeg.withSliceReencode(true) 时生效；默认值贴合 omni 默认抽样率 作为 ffmpeg.ExtractVid...|
| [ffmpeg.withStartEnd](#withstartend) |withStartEnd 以秒为单位指定提取/处理的时间区间（导出名为 ffmpeg.withStartEnd） 作为各 ffmpeg.Extract* 接口的可选项使用，仅处理 [start, end] 区间内的内容 参数: - start: 起始时间（秒） - end: 结束时间（秒） 返回值:...|
| [ffmpeg.withSubtitlePadding](#withsubtitlepadding) |withSubtitlePadding 设置烧录字幕时是否在底部添加黑色内边距（导出名为 ffmpeg.withSubtitlePadding） 启用后会在视频底部加黑边用于显示字幕，避免字幕遮挡原始画面；作为 ffmpeg.BurnSRTIntoVideo 的可选项使用 参数: - enable:...|
| [ffmpeg.withTimestampOverlay](#withtimestampoverlay) |withTimestampOverlay 设置是否在提取的帧上叠加时间戳（导出名为 ffmpeg.withTimestampOverlay） 启用后会在每帧底部加一条黑条显示时间戳；作为 ffmpeg.Extract*Frames* 接口的可选项使用 参数: - show: 是否叠加时间戳 返回值:...|


## 函数定义
### BurnSRTIntoVideo

#### 详细描述
BurnSRTIntoVideo 将 SRT 字幕烧录进视频（导出名为 ffmpeg.BurnSRTIntoVideo）
默认启用字幕内边距与时间戳，输出为新的 mp4 文件并返回其路径

参数:
  - inputVideo: 输入视频文件路径
  - srtFile: SRT 字幕文件路径
  - opts: 可选项，如 ffmpeg.withOutputFile / ffmpeg.withSubtitlePadding 等

返回值:
  - 输出视频文件路径
  - 错误信息（烧录失败或输出无效时返回）


Example:

``````````````yak
outputFile, err = ffmpeg.BurnSRTIntoVideo("video.mp4", "subtitles.srt")
die(err)
println(outputFile)

// With simple mode (wavy calling)
outputFile = ffmpeg.BurnSRTIntoVideo("video.mp4", "subtitles.srt")~
``````````````


#### 定义

`BurnSRTIntoVideo(inputVideo string, srtFile string, opts ...ffmpegutils.Option) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| inputVideo | `string` | 输入视频文件路径 |
| srtFile | `string` | SRT 字幕文件路径 |
| opts | `...ffmpegutils.Option` | 可选项，如 ffmpeg.withOutputFile / ffmpeg.withSubtitlePadding 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 输出视频文件路径 |
| r2 | `error` | 错误信息（烧录失败或输出无效时返回） |


### ExtractAudioFromVideo

#### 详细描述
ExtractAudioFromVideo 从视频中提取音频（导出名为 ffmpeg.ExtractAudioFromVideo）

参数:
  - i: 输入视频文件路径
  - opts: 可选项，如 ffmpeg.withOutputFile / ffmpeg.withStartEnd / ffmpeg.withDebug 等

返回值:
  - 音频提取结果对象（含输出文件路径等信息）
  - 错误信息（提取失败时返回）


Example:

``````````````yak
result, err = ffmpeg.ExtractAudioFromVideo("video.mp4")
die(err)
println(result.FilePath)
// ------------
dump(ffmpeg.ExtractAudioFromVideo("video.mp4")~)
``````````````


#### 定义

`ExtractAudioFromVideo(i string, opts ...ffmpegutils.Option) (*ffmpegutils.AudioExtractionResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入视频文件路径 |
| opts | `...ffmpegutils.Option` | 可选项，如 ffmpeg.withOutputFile / ffmpeg.withStartEnd / ffmpeg.withDebug 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ffmpegutils.AudioExtractionResult` | 音频提取结果对象（含输出文件路径等信息） |
| r2 | `error` | 错误信息（提取失败时返回） |


### ExtractBroadGrainedFramesFromVideo

#### 详细描述
ExtractBroadGrainedFramesFromVideo 以粗粒度（较高场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractBroadGrainedFramesFromVideo）
相比细粒度采样更稀疏，适合快速概览视频内容

参数:
  - i: 输入视频文件路径
  - opts: 可选项，如 ffmpeg.withStartEnd / ffmpeg.withTimestampOverlay 等

返回值:
  - 帧结果管道，可用 for range 逐帧消费（每帧可 SaveToFile）
  - 错误信息（提取失败时返回）


Example:

``````````````yak
result, err = ffmpeg.ExtractBroadGrainedFramesFromVideo("video.mp4");

for i in result {
    filename, err = i.SaveToFile();
	if err != nil { continue }
}
``````````````


#### 定义

`ExtractBroadGrainedFramesFromVideo(i string, opts ...ffmpegutils.Option) (<-chan *ffmpegutils.FfmpegStreamResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入视频文件路径 |
| opts | `...ffmpegutils.Option` | 可选项，如 ffmpeg.withStartEnd / ffmpeg.withTimestampOverlay 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *ffmpegutils.FfmpegStreamResult` | 帧结果管道，可用 for range 逐帧消费（每帧可 SaveToFile） |
| r2 | `error` | 错误信息（提取失败时返回） |


### ExtractFineGrainedFramesFromVideo

#### 详细描述
ExtractFineGrainedFramesFromVideo 以细粒度（低场景阈值）从视频中提取关键帧（导出名为 ffmpeg.ExtractFineGrainedFramesFromVideo）
默认启用时间戳叠加与智能场景检测，适合需要较密集采样的场景

参数:
  - i: 输入视频文件路径
  - opts: 可选项，如 ffmpeg.withStartEnd / ffmpeg.withTimestampOverlay 等

返回值:
  - 帧结果管道，可用 for range 逐帧消费（每帧可 SaveToFile）
  - 错误信息（提取失败时返回）


Example:

``````````````yak
result, err = ffmpeg.ExtractFineGrainedFramesFromVideo("video.mp4");

	for i in result {
	    filename, err = i.SaveToFile();
		if err != nil { continue }
	}

result = ffmpeg.ExtractFineGrainedFramesFromVideo("video.mp4", ffmpeg.withStartEnd(10, 20.5))~ // 10-20.5 seconds frames
``````````````


#### 定义

`ExtractFineGrainedFramesFromVideo(i string, opts ...ffmpegutils.Option) (<-chan *ffmpegutils.FfmpegStreamResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入视频文件路径 |
| opts | `...ffmpegutils.Option` | 可选项，如 ffmpeg.withStartEnd / ffmpeg.withTimestampOverlay 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *ffmpegutils.FfmpegStreamResult` | 帧结果管道，可用 for range 逐帧消费（每帧可 SaveToFile） |
| r2 | `error` | 错误信息（提取失败时返回） |


### ExtractUserScreenshot

#### 详细描述
ExtractUserScreenshot 截取用户屏幕截图，支持多显示器自动拼接（导出名为 ffmpeg.ExtractUserScreenshot）

参数:
  - opts: 可选项，如 ffmpeg.withScreenCaptureDebug / ffmpeg.withScreenCaptureQuality 等

返回值:
  - 截图结果对象（可调用 SaveToFile 保存）
  - 错误信息（截图失败时返回）


Example:

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


#### 定义

`ExtractUserScreenshot(opts ...ffmpegutils.Option) (*ffmpegutils.FfmpegStreamResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ffmpegutils.Option` | 可选项，如 ffmpeg.withScreenCaptureDebug / ffmpeg.withScreenCaptureQuality 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ffmpegutils.FfmpegStreamResult` | 截图结果对象（可调用 SaveToFile 保存） |
| r2 | `error` | 错误信息（截图失败时返回） |


### ExtractVideoSliceFromVideo

#### 详细描述
ExtractVideoSliceFromVideo 将长视频按时间切分为多个 mp4 切片（导出名为 ffmpeg.ExtractVideoSliceFromVideo）
默认流复制（不重编码、保持源分辨率与 FPS）；通过 ffmpeg.withSliceReencode(true) 启用重编码。
切片实时通过 channel 与可选回调 ffmpeg.withSliceCallback(cb) 下发。

参数:
  - i: 输入视频文件路径
  - opts: 可选项，如 ffmpeg.withSliceDurationSeconds / ffmpeg.withSlicePresetForOmni / ffmpeg.withSliceCallback 等

返回值:
  - 视频切片结果管道，可用 for range 逐个消费（每个含 FilePath/Error 等）
  - 错误信息（启动切片失败时返回）


Example:

``````````````yak
ch, err = ffmpeg.ExtractVideoSliceFromVideo("video.mp4",
	    ffmpeg.withSlicePresetForOmni("flash"),
	    ffmpeg.withSliceCallback(r => log.info("slice ready: %v", r.FilePath)),
	)
	for slice in ch {
	    if slice.Error != nil { continue }
	    // upload slice.FilePath to omni model
	}


关键词: ffmpeg 切片, segment muxer, omni 视频切片
``````````````


#### 定义

`ExtractVideoSliceFromVideo(i string, opts ...ffmpegutils.Option) (<-chan *ffmpegutils.VideoSliceResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入视频文件路径 |
| opts | `...ffmpegutils.Option` | 可选项，如 ffmpeg.withSliceDurationSeconds / ffmpeg.withSlicePresetForOmni / ffmpeg.withSliceCallback 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *ffmpegutils.VideoSliceResult` | 视频切片结果管道，可用 for range 逐个消费（每个含 FilePath/Error 等） |
| r2 | `error` | 错误信息（启动切片失败时返回） |


### withDebug

#### 详细描述
withDebug 启用 ffmpeg 命令的详细日志输出（导出名为 ffmpeg.withDebug）

作为各 ffmpeg.Extract*/Burn* 接口的可选项使用，便于排查问题



参数:

  - debug: 是否启用详细日志



返回值:

  - 可传入 ffmpeg 各接口的选项




Example:

``````````````yak
// 开启调试日志提取音频（需要真实视频文件，示意性示例）
result = ffmpeg.ExtractAudioFromVideo("video.mp4", ffmpeg.withDebug(true))~
``````````````


#### 定义

`withDebug(debug bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| debug | `bool` | 是否启用详细日志 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg 各接口的选项 |


### withIgnoreBottomPaddingInSceneDetection

#### 详细描述
withIgnoreBottomPaddingInSceneDetection 设置场景检测时是否忽略底部内边距区域（导出名为 ffmpeg.withIgnoreBottomPaddingInSceneDetection）

启用后场景检测只分析原始画面，忽略时间戳/字幕区域的变化，避免误判场景切换



参数:

  - enable: 是否在场景检测中忽略底部内边距



返回值:

  - 可传入 ffmpeg 各接口的选项




Example:

``````````````yak
// 叠加时间戳的同时避免其干扰场景检测（需要真实视频文件，示意性示例）
result = ffmpeg.ExtractFineGrainedFramesFromVideo("video.mp4",
    ffmpeg.withTimestampOverlay(true),
    ffmpeg.withIgnoreBottomPaddingInSceneDetection(true),
)~
``````````````


#### 定义

`withIgnoreBottomPaddingInSceneDetection(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否在场景检测中忽略底部内边距 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg 各接口的选项 |


### withOutputFile

#### 详细描述
withOutputFile 指定最终输出文件的路径（导出名为 ffmpeg.withOutputFile）

作为 ffmpeg.BurnSRTIntoVideo / ffmpeg.ExtractAudioFromVideo 等接口的可选项；不设置时使用临时文件



参数:

  - filepath: 输出文件路径



返回值:

  - 可传入 ffmpeg 各接口的选项




Example:

``````````````yak
// 指定输出路径烧录字幕（需要真实视频与字幕文件，示意性示例）
out = ffmpeg.BurnSRTIntoVideo("video.mp4", "subtitles.srt", ffmpeg.withOutputFile("/tmp/out.mp4"))~
``````````````


#### 定义

`withOutputFile(filepath string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `string` | 输出文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg 各接口的选项 |


### withScreenCaptureDebug

#### 详细描述
withScreenCaptureDebug 启用屏幕截图的调试信息（导出名为 ffmpeg.withScreenCaptureDebug）

作为 ffmpeg.ExtractUserScreenshot 的可选项使用



参数:

  - enable: 是否启用调试信息



返回值:

  - 可传入 ffmpeg.ExtractUserScreenshot 的选项




Example:

``````````````yak
// 以调试模式截屏（需要桌面环境，示意性示例）
result = ffmpeg.ExtractUserScreenshot(ffmpeg.withScreenCaptureDebug(true))~
``````````````


#### 定义

`withScreenCaptureDebug(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用调试信息 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractUserScreenshot 的选项 |


### withScreenCaptureQuality

#### 详细描述
withScreenCaptureQuality 设置屏幕截图质量（导出名为 ffmpeg.withScreenCaptureQuality）

作为 ffmpeg.ExtractUserScreenshot 的可选项使用；可选 ffmpeg.QualityLow/QualityNormal/QualityHigh



参数:

  - quality: 质量级别（QualityLow 快速小文件 / QualityNormal 平衡 / QualityHigh 无损）



返回值:

  - 可传入 ffmpeg.ExtractUserScreenshot 的选项




Example:

``````````````yak
// 以高质量（无损）截屏（需要桌面环境，示意性示例）
result = ffmpeg.ExtractUserScreenshot(ffmpeg.withScreenCaptureQuality(ffmpeg.QualityHigh))~
``````````````


#### 定义

`withScreenCaptureQuality(quality ScreenCaptureQuality) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| quality | `ScreenCaptureQuality` | 质量级别（QualityLow 快速小文件 / QualityNormal 平衡 / QualityHigh 无损） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractUserScreenshot 的选项 |


### withSliceCallback

#### 详细描述
withSliceCallback 注册切片实时回调，每段切片落盘后立即触发（与 channel 同时发送）（导出名为 ffmpeg.withSliceCallback）

作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用，便于边切片边处理（如上传到模型）

关键词: 切片回调, slice callback



参数:

  - cb: 回调函数 func(result)，每段切片就绪时调用



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 边切片边记录路径（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4",
    ffmpeg.withSliceCallback(func(r) { log.info("slice ready: %v", r.FilePath) }),
)~
``````````````


#### 定义

`withSliceCallback(cb func(*VideoSliceResult)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*VideoSliceResult)` | 回调函数 func(result)，每段切片就绪时调用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSliceDurationSeconds

#### 详细描述
withSliceDurationSeconds 设置每段切片的时长（秒），默认 120 秒（导出名为 ffmpeg.withSliceDurationSeconds）

作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: 切片段长, segment_time



参数:

  - seconds: 每段切片时长（秒）



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 每 30 秒切一段（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4", ffmpeg.withSliceDurationSeconds(30))~
``````````````


#### 定义

`withSliceDurationSeconds(seconds float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` | 每段切片时长（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSliceLoadRawData

#### 详细描述
withSliceLoadRawData 设置是否在切片结果 channel 中携带分片原始字节，默认 false（导出名为 ffmpeg.withSliceLoadRawData）

默认仅返回文件路径；启用会显著增加内存与 IO 开销，建议确需 base64 推送时再开启

作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: 携带原始字节, raw data



参数:

  - enable: 是否在结果中携带原始字节



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 切片并携带原始字节用于直接上传（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4", ffmpeg.withSliceLoadRawData(true))~
``````````````


#### 定义

`withSliceLoadRawData(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否在结果中携带原始字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSliceMaxHeight

#### 详细描述
withSliceMaxHeight 重编码模式下设置切片最大高度（保持宽高比），默认 720（导出名为 ffmpeg.withSliceMaxHeight）

仅在启用 ffmpeg.withSliceReencode(true) 时生效；作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: 切片分辨率, scale



参数:

  - h: 最大高度（像素）



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 重编码并限制高度为 480（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4", ffmpeg.withSliceReencode(true), ffmpeg.withSliceMaxHeight(480))~
``````````````


#### 定义

`withSliceMaxHeight(h int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `int` | 最大高度（像素） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSliceOutputDir

#### 详细描述
withSliceOutputDir 指定切片输出目录，不指定则使用临时目录（导出名为 ffmpeg.withSliceOutputDir）

作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: 切片输出目录, slice output dir



参数:

  - dir: 切片文件输出目录



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 将切片输出到指定目录（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4", ffmpeg.withSliceOutputDir("/tmp/slices"))~
``````````````


#### 定义

`withSliceOutputDir(dir string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` | 切片文件输出目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSlicePresetForOmni

#### 详细描述
withSlicePresetForOmni 按目标 omni 模型一键预设切片段长（导出名为 ffmpeg.withSlicePresetForOmni）

turbo =&gt; 30 秒、flash =&gt; 120 秒、plus =&gt; 120 秒（保守值，避免触发 &#34;video file is too long&#34;；

如需更长可改用 ffmpeg.withSliceDurationSeconds）。作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: omni 预设, slice preset



参数:

  - preset: 预设名称（turbo / flash / plus）



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 使用 flash 预设切片（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4", ffmpeg.withSlicePresetForOmni("flash"))~
``````````````


#### 定义

`withSlicePresetForOmni(preset string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| preset | `string` | 预设名称（turbo / flash / plus） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSliceReencode

#### 详细描述
withSliceReencode 设置切片是否重编码（导出名为 ffmpeg.withSliceReencode）

false（默认）使用 -c copy 流复制，速度极快、保持源分辨率与 FPS；true 则重编码到指定分辨率与 FPS

作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: 流复制 stream copy, 重编码 reencode



参数:

  - enable: 是否启用重编码



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 启用重编码切片以统一分辨率/帧率（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4",
    ffmpeg.withSliceReencode(true),
    ffmpeg.withSliceMaxHeight(720),
    ffmpeg.withSliceTargetFPS(2),
)~
``````````````


#### 定义

`withSliceReencode(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用重编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withSliceTargetFPS

#### 详细描述
withSliceTargetFPS 重编码模式下设置切片目标 FPS，默认 2（导出名为 ffmpeg.withSliceTargetFPS）

仅在启用 ffmpeg.withSliceReencode(true) 时生效；默认值贴合 omni 默认抽样率

作为 ffmpeg.ExtractVideoSliceFromVideo 的可选项使用

关键词: 切片帧率, target fps



参数:

  - fps: 目标帧率



返回值:

  - 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项




Example:

``````````````yak
// 重编码并设置目标帧率为 1（需要真实视频文件，示意性示例）
ch = ffmpeg.ExtractVideoSliceFromVideo("video.mp4", ffmpeg.withSliceReencode(true), ffmpeg.withSliceTargetFPS(1))~
``````````````


#### 定义

`withSliceTargetFPS(fps float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fps | `float64` | 目标帧率 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg.ExtractVideoSliceFromVideo 的选项 |


### withStartEnd

#### 详细描述
withStartEnd 以秒为单位指定提取/处理的时间区间（导出名为 ffmpeg.withStartEnd）

作为各 ffmpeg.Extract* 接口的可选项使用，仅处理 [start, end] 区间内的内容



参数:

  - start: 起始时间（秒）

  - end: 结束时间（秒）



返回值:

  - 可传入 ffmpeg 各接口的选项




Example:

``````````````yak
// 仅提取 10 到 20.5 秒之间的帧（需要真实视频文件，示意性示例）
result = ffmpeg.ExtractFineGrainedFramesFromVideo("video.mp4", ffmpeg.withStartEnd(10, 20.5))~
``````````````


#### 定义

`withStartEnd(start float64, end float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| start | `float64` | 起始时间（秒） |
| end | `float64` | 结束时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg 各接口的选项 |


### withSubtitlePadding

#### 详细描述
withSubtitlePadding 设置烧录字幕时是否在底部添加黑色内边距（导出名为 ffmpeg.withSubtitlePadding）

启用后会在视频底部加黑边用于显示字幕，避免字幕遮挡原始画面；作为 ffmpeg.BurnSRTIntoVideo 的可选项使用



参数:

  - enable: 是否添加字幕内边距



返回值:

  - 可传入 ffmpeg 各接口的选项




Example:

``````````````yak
// 烧录字幕并添加底部黑边（需要真实视频与字幕文件，示意性示例）
out = ffmpeg.BurnSRTIntoVideo("video.mp4", "subtitles.srt", ffmpeg.withSubtitlePadding(true))~
``````````````


#### 定义

`withSubtitlePadding(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否添加字幕内边距 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg 各接口的选项 |


### withTimestampOverlay

#### 详细描述
withTimestampOverlay 设置是否在提取的帧上叠加时间戳（导出名为 ffmpeg.withTimestampOverlay）

启用后会在每帧底部加一条黑条显示时间戳；作为 ffmpeg.Extract*Frames* 接口的可选项使用



参数:

  - show: 是否叠加时间戳



返回值:

  - 可传入 ffmpeg 各接口的选项




Example:

``````````````yak
// 提取帧并叠加时间戳（需要真实视频文件，示意性示例）
result = ffmpeg.ExtractBroadGrainedFramesFromVideo("video.mp4", ffmpeg.withTimestampOverlay(true))~
``````````````


#### 定义

`withTimestampOverlay(show bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` | 是否叠加时间戳 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 ffmpeg 各接口的选项 |


