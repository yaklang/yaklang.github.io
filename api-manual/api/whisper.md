# whisper

|函数名|函数描述/介绍|
|:------|:--------|
| [whisper.ConvertAudioToSRTFile](#convertaudiotosrtfile) |whisper.ConvertAudioToSRTFile can convert audio to srt file  example: ``` srtfilename = whisper.ConvertAudioToSRTFile(&amp;#34;audio.mp3&amp;#34;)~ println(sr...|
| [whisper.CreateSRTManager](#createsrtmanager) |NewSRTManagerFromFile creates a new SRT manager from an SRT file |


## 函数定义
### ConvertAudioToSRTFile

#### 详细描述
whisper.ConvertAudioToSRTFile can convert audio to srt file

example:
```
srtfilename = whisper.ConvertAudioToSRTFile(&#34;audio.mp3&#34;)~
println(srtfilename)
```


#### 定义

`ConvertAudioToSRTFile(i string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### CreateSRTManager

#### 详细描述
NewSRTManagerFromFile creates a new SRT manager from an SRT file


#### 定义

`CreateSRTManager(srtFilePath string) (*SRTManager, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srtFilePath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SRTManager` |   |
| r2 | `error` |   |


