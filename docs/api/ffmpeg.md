# ffmpeg

|实例名|实例描述|
|:------|:--------|
QualityHigh|(ffmpegutils.ScreenCaptureQuality) 2|
QualityLow|(ffmpegutils.ScreenCaptureQuality) 0|
QualityNormal|(ffmpegutils.ScreenCaptureQuality) 1|

|函数名|函数描述/介绍|
|:------|:--------|
| [ffmpeg.BurnSRTIntoVideo](#burnsrtintovideo) |BurnSRTIntoVideo can burn subtitles into a video|
| [ffmpeg.ExtractAudioFromVideo](#extractaudiofromvideo) |ffmpeg.ExtractAudioFromVideo can extract audio from video|
| [ffmpeg.ExtractBroadGrainedFramesFromVideo](#extractbroadgrainedframesfromvideo) |ffmpeg.ExtractBroadGrainedFramesFromVideo can extract fine-grained frames from video|
| [ffmpeg.ExtractFineGrainedFramesFromVideo](#extractfinegrainedframesfromvideo) |ffmpeg.ExtractFineGrainedFramesFromVideo can extract fine-grained frames from video|
| [ffmpeg.ExtractUserScreenshot](#extractuserscreenshot) |ffmpeg.ExtractUserScreenshot can capture user screen screenshots with multi-monitor support|
| [ffmpeg.ExtractVideoSliceFromVideo](#extractvideoslicefromvideo) |ffmpeg.ExtractVideoSliceFromVideo can split a long video into time-based mp4 slices. 默认流复制（不重编码、保持源分辨率与 FPS）；通过 ffmpeg.withSliceReencode(true) 启用重编码。 ...|
| [ffmpeg.withDebug](#withdebug) |WithDebug enables verbose logging for the ffmpeg command.|
| [ffmpeg.withIgnoreBottomPaddingInSceneDetection](#withignorebottompaddinginscenedetection) |WithIgnoreBottomPaddingInSceneDetection controls whether scene detection should ignore the bottom padding area. When enabled, scene detection will onl...|
| [ffmpeg.withOutputFile](#withoutputfile) |WithOutputVideoFile specifies the path for the final output video.|
| [ffmpeg.withScreenCaptureDebug](#withscreencapturedebug) |WithScreenCaptureDebug 启用屏幕截图调试信息|
| [ffmpeg.withScreenCaptureQuality](#withscreencapturequality) |WithScreenCaptureQuality 设置屏幕截图质量|
| [ffmpeg.withSliceCallback](#withslicecallback) |WithSliceCallback 注册实时回调，每个分片落盘后立即触发，与 channel 同时发送。 关键词: 切片回调, slice callback|
| [ffmpeg.withSliceDurationSeconds](#withslicedurationseconds) |WithSliceDurationSeconds 设置每段切片时长（秒），默认 120 秒。 关键词: 切片段长, segment_time|
| [ffmpeg.withSliceLoadRawData](#withsliceloadrawdata) |WithSliceLoadRawData 控制是否在 channel 中携带分片字节，默认 false（仅返回路径）。 启用会显著增加内存与 IO 开销，建议在确实需要 base64 推送时再开启。 关键词: 携带原始字节, raw data|
| [ffmpeg.withSliceMaxHeight](#withslicemaxheight) |WithSliceMaxHeight 重编码模式下设置最大高度（保持宽高比），默认 720。 关键词: 切片分辨率, scale|
| [ffmpeg.withSliceOutputDir](#withsliceoutputdir) |WithSliceOutputDir 指定切片输出目录，不指定则使用临时目录。 关键词: 切片输出目录, slice output dir|
| [ffmpeg.withSlicePresetForOmni](#withslicepresetforomni) |WithSlicePresetForOmni 一键预设：根据目标 omni 模型设定段长。 turbo =&gt; 30 秒（模型上限 40s），flash =&gt; 120 秒（上限 150s），plus =&gt; 120 秒 （文档上限 1h，但 base64 实测 300s 会触发 &#34;video file ...|
| [ffmpeg.withSliceReencode](#withslicereencode) |WithSliceReencode 切换是否重编码模式。 false（默认）：使用 -c copy 做流复制，速度极快，分辨率与 FPS 保持源； true：重编码到指定分辨率与 FPS（适合统一 base64 体积/控制 token 开销）。 关键词: 流复制 stream copy, 重编码 r...|
| [ffmpeg.withSliceTargetFPS](#withslicetargetfps) |WithSliceTargetFPS 重编码模式下设置目标 FPS，默认 2（贴合 omni 默认抽样率）。 关键词: 切片帧率, target fps|
| [ffmpeg.withStartEnd](#withstartend) |WithStartEndSeconds specifies the time range for extraction in seconds.|
| [ffmpeg.withSubtitlePadding](#withsubtitlepadding) |WithSubtitlePadding enables or disables adding black padding for subtitles. When enabled, black padding will be added to the bottom of the video where...|
| [ffmpeg.withTimestampOverlay](#withtimestampoverlay) |WithTimestampOverlay enables or disables timestamp overlay on extracted frames. When enabled, a black bar will be added at the bottom of each frame di...|


## 函数定义
### BurnSRTIntoVideo

#### 详细描述
BurnSRTIntoVideo can burn subtitles into a video


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
| inputVideo | `string` |  |
| srtFile | `string` |  |
| opts | `...ffmpegutils.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### ExtractAudioFromVideo

#### 详细描述
ffmpeg.ExtractAudioFromVideo can extract audio from video


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
| i | `string` |  |
| opts | `...ffmpegutils.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ffmpegutils.AudioExtractionResult` |  |
| r2 | `error` |  |


### ExtractBroadGrainedFramesFromVideo

#### 详细描述
ffmpeg.ExtractBroadGrainedFramesFromVideo can extract fine-grained frames from video


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
| i | `string` |  |
| opts | `...ffmpegutils.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *ffmpegutils.FfmpegStreamResult` |  |
| r2 | `error` |  |


### ExtractFineGrainedFramesFromVideo

#### 详细描述
ffmpeg.ExtractFineGrainedFramesFromVideo can extract fine-grained frames from video


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
| i | `string` |  |
| opts | `...ffmpegutils.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *ffmpegutils.FfmpegStreamResult` |  |
| r2 | `error` |  |


### ExtractUserScreenshot

#### 详细描述
ffmpeg.ExtractUserScreenshot can capture user screen screenshots with multi-monitor support


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
| opts | `...ffmpegutils.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ffmpegutils.FfmpegStreamResult` |  |
| r2 | `error` |  |


### ExtractVideoSliceFromVideo

#### 详细描述
ffmpeg.ExtractVideoSliceFromVideo can split a long video into time-based mp4 slices.
默认流复制（不重编码、保持源分辨率与 FPS）；通过 ffmpeg.withSliceReencode(true) 启用重编码。
切片实时通过 channel 与可选回调 ffmpeg.withSliceCallback(cb) 下发。


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
| i | `string` |  |
| opts | `...ffmpegutils.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *ffmpegutils.VideoSliceResult` |  |
| r2 | `error` |  |


### withDebug

#### 详细描述
WithDebug enables verbose logging for the ffmpeg command.


#### 定义

`withDebug(debug bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| debug | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withIgnoreBottomPaddingInSceneDetection

#### 详细描述
WithIgnoreBottomPaddingInSceneDetection controls whether scene detection should ignore the bottom padding area.
When enabled, scene detection will only analyze the original video content, ignoring changes in timestamp/subtitle areas.
This is particularly useful when extracting frames with timestamps or subtitles to avoid false scene changes.


#### 定义

`withIgnoreBottomPaddingInSceneDetection(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withOutputFile

#### 详细描述
WithOutputVideoFile specifies the path for the final output video.


#### 定义

`withOutputFile(filepath string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withScreenCaptureDebug

#### 详细描述
WithScreenCaptureDebug 启用屏幕截图调试信息


#### 定义

`withScreenCaptureDebug(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withScreenCaptureQuality

#### 详细描述
WithScreenCaptureQuality 设置屏幕截图质量


#### 定义

`withScreenCaptureQuality(quality ScreenCaptureQuality) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| quality | `ScreenCaptureQuality` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceCallback

#### 详细描述
WithSliceCallback 注册实时回调，每个分片落盘后立即触发，与 channel 同时发送。
关键词: 切片回调, slice callback


#### 定义

`withSliceCallback(cb func(*VideoSliceResult)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*VideoSliceResult)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceDurationSeconds

#### 详细描述
WithSliceDurationSeconds 设置每段切片时长（秒），默认 120 秒。
关键词: 切片段长, segment_time


#### 定义

`withSliceDurationSeconds(seconds float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceLoadRawData

#### 详细描述
WithSliceLoadRawData 控制是否在 channel 中携带分片字节，默认 false（仅返回路径）。
启用会显著增加内存与 IO 开销，建议在确实需要 base64 推送时再开启。
关键词: 携带原始字节, raw data


#### 定义

`withSliceLoadRawData(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceMaxHeight

#### 详细描述
WithSliceMaxHeight 重编码模式下设置最大高度（保持宽高比），默认 720。
关键词: 切片分辨率, scale


#### 定义

`withSliceMaxHeight(h int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceOutputDir

#### 详细描述
WithSliceOutputDir 指定切片输出目录，不指定则使用临时目录。
关键词: 切片输出目录, slice output dir


#### 定义

`withSliceOutputDir(dir string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSlicePresetForOmni

#### 详细描述
WithSlicePresetForOmni 一键预设：根据目标 omni 模型设定段长。
turbo =&gt; 30 秒（模型上限 40s），flash =&gt; 120 秒（上限 150s），plus =&gt; 120 秒
（文档上限 1h，但 base64 实测 300s 会触发 &#34;video file is too long&#34;，
故保守设为 120 秒；如需要更长可手动 WithSliceDurationSeconds）。
关键词: omni 预设, slice preset


#### 定义

`withSlicePresetForOmni(preset string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| preset | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceReencode

#### 详细描述
WithSliceReencode 切换是否重编码模式。
false（默认）：使用 -c copy 做流复制，速度极快，分辨率与 FPS 保持源；
true：重编码到指定分辨率与 FPS（适合统一 base64 体积/控制 token 开销）。
关键词: 流复制 stream copy, 重编码 reencode


#### 定义

`withSliceReencode(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSliceTargetFPS

#### 详细描述
WithSliceTargetFPS 重编码模式下设置目标 FPS，默认 2（贴合 omni 默认抽样率）。
关键词: 切片帧率, target fps


#### 定义

`withSliceTargetFPS(fps float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fps | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withStartEnd

#### 详细描述
WithStartEndSeconds specifies the time range for extraction in seconds.


#### 定义

`withStartEnd(start float64, end float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| start | `float64` |  |
| end | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSubtitlePadding

#### 详细描述
WithSubtitlePadding enables or disables adding black padding for subtitles.
When enabled, black padding will be added to the bottom of the video where subtitles are displayed,
ensuring subtitles don&#39;t cover the original video content.


#### 定义

`withSubtitlePadding(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withTimestampOverlay

#### 详细描述
WithTimestampOverlay enables or disables timestamp overlay on extracted frames.
When enabled, a black bar will be added at the bottom of each frame displaying the timestamp.


#### 定义

`withTimestampOverlay(show bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


