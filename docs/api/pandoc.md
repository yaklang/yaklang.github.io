# pandoc

|函数名|函数描述/介绍|
|:------|:--------|
| [pandoc.SimpleConvertMarkdownFileToDocx](#simpleconvertmarkdownfiletodocx) |pandoc.SimpleConvertMarkdownFileToDocx can convert markdown to docx file  example: ``` md := &amp;#34;filename.md&amp;#34; outputFile, err = pandoc.SimpleConv...|
| [pandoc.SimpleConvertMarkdownFileToDocxContext](#simpleconvertmarkdownfiletodocxcontext) |pandoc.SimpleConvertMarkdownFileToDocxContext can convert markdown to docx file  example: ``` md := &amp;#34;filename.md&amp;#34; ctx := context.Background() ...|
| [pandoc.SimpleCoverMD2Word](#simplecovermd2word) ||


## 函数定义
### SimpleConvertMarkdownFileToDocx

#### 详细描述
pandoc.SimpleConvertMarkdownFileToDocx can convert markdown to docx file

example:
```
md := &#34;filename.md&#34;
outputFile, err = pandoc.SimpleConvertMarkdownFileToDocx(md)
```


#### 定义

`SimpleConvertMarkdownFileToDocx(md string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| md | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### SimpleConvertMarkdownFileToDocxContext

#### 详细描述
pandoc.SimpleConvertMarkdownFileToDocxContext can convert markdown to docx file

example:
```
md := &#34;filename.md&#34;
ctx := context.Background()
result, err := pandoc.SimpleConvertMarkdownFileToDocxContext(ctx, md)
if err != nil { die(err) }
// println(&#34;Converted file path:&#34;, result)
```


#### 定义

`SimpleConvertMarkdownFileToDocxContext(ctx context.Context, md string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| md | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### SimpleCoverMD2Word

#### 详细描述


#### 定义

`SimpleCoverMD2Word(ctx context.Context, inputFile string, outputFile string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| inputFile | `string` |   |
| outputFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


