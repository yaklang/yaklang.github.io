# ffmpeg

|函数名|函数描述/介绍|
|:------|:--------|
| [ffmpeg.BurnSRTIntoVideo](#burnsrtintovideo) |BurnSRTIntoVideo can burn subtitles into a video  example: ``` outputFile, err = ffmpeg.BurnSRTIntoVideo(&amp;#34;video.mp4&amp;#34;, &amp;#34;subtitles.srt&amp;#34;)...|
| [ffmpeg.ExtractAudioFromVideo](#extractaudiofromvideo) |ffmpeg.ExtractAudioFromVideo can extract audio from video  example: ``` result, err = ffmpeg.ExtractAudioFromVideo(&amp;#34;video.mp4&amp;#34;) die(err) print...|
| [ffmpeg.ExtractBroadGrainedFramesFromVideo](#extractbroadgrainedframesfromvideo) |ffmpeg.ExtractBroadGrainedFramesFromVideo can extract fine-grained frames from video  example: ```  	result, err = ffmpeg.ExtractBroadGrainedFramesFro...|
| [ffmpeg.ExtractFineGrainedFramesFromVideo](#extractfinegrainedframesfromvideo) |ffmpeg.ExtractFineGrainedFramesFromVideo can extract fine-grained frames from video  example: ```  	result, err = ffmpeg.ExtractFineGrainedFramesFromV...|
| [ffmpeg.withIgnoreBottomPaddingInSceneDetection](#withignorebottompaddinginscenedetection) |WithIgnoreBottomPaddingInSceneDetection controls whether scene detection should ignore the bottom padding area. When enabled, scene detection will onl...|
| [ffmpeg.withOutputFile](#withoutputfile) |WithOutputVideoFile specifies the path for the final output video. |
| [ffmpeg.withStartEnd](#withstartend) |WithStartEndSeconds specifies the time range for extraction in seconds. |
| [ffmpeg.withSubtitlePadding](#withsubtitlepadding) |WithSubtitlePadding enables or disables adding black padding for subtitles. When enabled, black padding will be added to the bottom of the video where...|
| [ffmpeg.withTimestampOverlay](#withtimestampoverlay) |WithTimestampOverlay enables or disables timestamp overlay on extracted frames. When enabled, a black bar will be added at the bottom of each frame di...|


## 函数定义
### BurnSRTIntoVideo

#### 详细描述
BurnSRTIntoVideo can burn subtitles into a video

example:
```
outputFile, err = ffmpeg.BurnSRTIntoVideo(&#34;video.mp4&#34;, &#34;subtitles.srt&#34;)
die(err)
println(outputFile)

// With simple mode (wavy calling)
outputFile = ffmpeg.BurnSRTIntoVideo(&#34;video.mp4&#34;, &#34;subtitles.srt&#34;)~

```


#### 定义

`BurnSRTIntoVideo(inputVideo string, srtFile string, opts ...ffmpegutils.Option) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| inputVideo | `string` |   |
| srtFile | `string` |   |
| opts | `...ffmpegutils.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### ExtractAudioFromVideo

#### 详细描述
ffmpeg.ExtractAudioFromVideo can extract audio from video

example:
```
result, err = ffmpeg.ExtractAudioFromVideo(&#34;video.mp4&#34;)
die(err)
println(result.FilePath)
// ------------
dump(ffmpeg.ExtractAudioFromVideo(&#34;video.mp4&#34;)~)
```


#### 定义

`ExtractAudioFromVideo(i string, opts ...ffmpegutils.Option) (*ffmpegutils.AudioExtractionResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| opts | `...ffmpegutils.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ffmpegutils.AudioExtractionResult` |   |
| r2 | `error` |   |


### ExtractBroadGrainedFramesFromVideo

#### 详细描述
ffmpeg.ExtractBroadGrainedFramesFromVideo can extract fine-grained frames from video

example:
```

	result, err = ffmpeg.ExtractBroadGrainedFramesFromVideo(&#34;video.mp4&#34;);

	for i in result {
	    filename, err = i.SaveToFile();
		if err != nil { continue }
	}

```


#### 定义

`ExtractBroadGrainedFramesFromVideo(i string, opts ...ffmpegutils.Option) (&lt;-chan *ffmpegutils.FfmpegStreamResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| opts | `...ffmpegutils.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *ffmpegutils.FfmpegStreamResult` |   |
| r2 | `error` |   |


### ExtractFineGrainedFramesFromVideo

#### 详细描述
ffmpeg.ExtractFineGrainedFramesFromVideo can extract fine-grained frames from video

example:
```

	result, err = ffmpeg.ExtractFineGrainedFramesFromVideo(&#34;video.mp4&#34;);

	for i in result {
	    filename, err = i.SaveToFile();
		if err != nil { continue }
	}

result = ffmpeg.ExtractFineGrainedFramesFromVideo(&#34;video.mp4&#34;, ffmpeg.withStartEnd(10, 20.5))~ // 10-20.5 seconds frames
```


#### 定义

`ExtractFineGrainedFramesFromVideo(i string, opts ...ffmpegutils.Option) (&lt;-chan *ffmpegutils.FfmpegStreamResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| opts | `...ffmpegutils.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *ffmpegutils.FfmpegStreamResult` |   |
| r2 | `error` |   |


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
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withOutputFile

#### 详细描述
WithOutputVideoFile specifies the path for the final output video.


#### 定义

`withOutputFile(filepath string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withStartEnd

#### 详细描述
WithStartEndSeconds specifies the time range for extraction in seconds.


#### 定义

`withStartEnd(start float64, end float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| start | `float64` |   |
| end | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withTimestampOverlay

#### 详细描述
WithTimestampOverlay enables or disables timestamp overlay on extracted frames.
When enabled, a black bar will be added at the bottom of each frame displaying the timestamp.


#### 定义

`withTimestampOverlay(show bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| show | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


