# str

|成员函数|函数描述/介绍|
|:------|:--------|
| [str.CalcSSDeep](#calcssdeep) ||
| [str.CalcSSDeepStability](#calcssdeepstability) |稳定性定义为最远距离 / 最低分数|
| [str.CalcSimHash](#calcsimhash) ||
| [str.CalcSimHashStability](#calcsimhashstability) |计算 simhash 稳定性|
| [str.CalcSimilarity](#calcsimilarity) ||
| [str.CalcTextMaxSubStrStability](#calctextmaxsubstrstability) ||
| [str.Compare](#compare) |Compare returns an integer comparing two strings lexicographically.The result will be 0 if a == b, -1 if a &lt; b, and +1 if a &gt; b.Compare is inclu...|
| [str.Contains](#contains) |Contains reports whether substr is within s.|
| [str.ContainsAny](#containsany) |ContainsAny reports whether any Unicode code points in chars are within s.|
| [str.Count](#count) |Count counts the number of non-overlapping instances of substr in s.If substr is an empty string, Count returns 1 + the number of Unicode code points ...|
| [str.EndsWith](#endswith) |HasSuffix tests whether the string s ends with suffix.|
| [str.EqualFold](#equalfold) |EqualFold reports whether s and t, interpreted as UTF-8 strings,are equal under simple Unicode case-folding, which is a more generalform of case-insen...|
| [str.ExtractBodyFromHTTPResponseRaw](#extractbodyfromhttpresponseraw) ||
| [str.ExtractChineseIDCards](#extractchineseidcards) ||
| [str.ExtractDomain](#extractdomain) ||
| [str.ExtractHost](#extracthost) ||
| [str.ExtractJson](#extractjson) ||
| [str.ExtractJsonWithRaw](#extractjsonwithraw) ||
| [str.ExtractRootDomain](#extractrootdomain) ||
| [str.ExtractStrContext](#extractstrcontext) ||
| [str.ExtractTitle](#extracttitle) ||
| [str.ExtractURLFromHTTPRequest](#extracturlfromhttprequest) ||
| [str.ExtractURLFromHTTPRequestRaw](#extracturlfromhttprequestraw) ||
| [str.Fields](#fields) |Fields splits the string s around each instance of one or more consecutive white spacecharacters, as defined by unicode.IsSpace, returning a slice of ...|
| [str.FixHTTPRequest](#fixhttprequest) ||
| [str.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse try its best to fix and present human-readable response|
| [str.Grok](#grok) ||
| [str.HasPrefix](#hasprefix) |HasPrefix tests whether the string s begins with prefix.|
| [str.HasSuffix](#hassuffix) |HasSuffix tests whether the string s ends with suffix.|
| [str.HostPort](#hostport) ||
| [str.IPv4ToCClassNetwork](#ipv4tocclassnetwork) ||
| [str.Index](#index) |Index returns the index of the first instance of substr in s, or -1 if substr is not present in s.|
| [str.IndexAny](#indexany) |IndexAny returns the index of the first instance of any Unicode code pointfrom chars in s, or -1 if no Unicode code point from chars is present in s.|
| [str.IndexByte](#indexbyte) |IndexByte returns the index of the first instance of c in s, or -1 if c is not present in s.|
| [str.IntersectString](#intersectstring) |IntersectString returns the intersection between two collections of string.|
| [str.IsAlNum](#isalnum) ||
| [str.IsAlpha](#isalpha) ||
| [str.IsAlphaNum](#isalphanum) ||
| [str.IsBase64Value](#isbase64value) ||
| [str.IsCaptchaField](#iscaptchafield) ||
| [str.IsDigit](#isdigit) ||
| [str.IsHtmlResponse](#ishtmlresponse) ||
| [str.IsHttpURL](#ishttpurl) |IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https|
| [str.IsIPv4](#isipv4) ||
| [str.IsIPv6](#isipv6) ||
| [str.IsJSONPParam](#isjsonpparam) ||
| [str.IsJsonResponse](#isjsonresponse) ||
| [str.IsMD5Value](#ismd5value) ||
| [str.IsPasswordField](#ispasswordfield) ||
| [str.IsPlainBase64Value](#isplainbase64value) ||
| [str.IsRedirectParam](#isredirectparam) |根据 key 的名字猜测是否是用于重定向的参数|
| [str.IsSQLColumnField](#issqlcolumnfield) ||
| [str.IsSensitiveJson](#issensitivejson) ||
| [str.IsSensitiveTokenField](#issensitivetokenfield) ||
| [str.IsServerError](#isservererror) ||
| [str.IsSha256Value](#issha256value) ||
| [str.IsStrongPassword](#isstrongpassword) ||
| [str.IsTLSServer](#istlsserver) ||
| [str.IsUrlParam](#isurlparam) ||
| [str.IsUrlPath](#isurlpath) |根据 value 猜测是否是一个 url path|
| [str.IsUsernameField](#isusernamefield) ||
| [str.IsXmlParam](#isxmlparam) ||
| [str.IsXmlRequest](#isxmlrequest) ||
| [str.IsXmlValue](#isxmlvalue) ||
| [str.Join](#join) ||
| [str.JsonStreamToMapList](#jsonstreamtomaplist) ||
| [str.JsonToMap](#jsontomap) ||
| [str.JsonToMapList](#jsontomaplist) ||
| [str.LastIndex](#lastindex) |LastIndex returns the index of the last instance of substr in s, or -1 if substr is not present in s.|
| [str.LastIndexAny](#lastindexany) |LastIndexAny returns the index of the last instance of any Unicode codepoint from chars in s, or -1 if no Unicode code point from chars ispresent in s...|
| [str.LastIndexByte](#lastindexbyte) |LastIndexByte returns the index of the last instance of c in s, or -1 if c is not present in s.|
| [str.LowerAndTrimSpace](#lowerandtrimspace) ||
| [str.MatchAllOfGlob](#matchallofglob) ||
| [str.MatchAllOfRegexp](#matchallofregexp) ||
| [str.MatchAllOfSubString](#matchallofsubstring) ||
| [str.MatchAnyOfGlob](#matchanyofglob) ||
| [str.MatchAnyOfRegexp](#matchanyofregexp) ||
| [str.MatchAnyOfSubString](#matchanyofsubstring) ||
| [str.MergeUrlFromHTTPRequest](#mergeurlfromhttprequest) ||
| [str.NewFilter](#newfilter) ||
| [str.NewReader](#newreader) |NewReader returns a new Reader reading from s.It is similar to bytes.NewBufferString but more efficient and read-only.|
| [str.ParamsGetOr](#paramsgetor) ||
| [str.ParseBytesToHTTPRequest](#parsebytestohttprequest) ||
| [str.ParseBytesToHTTPResponse](#parsebytestohttpresponse) ||
| [str.ParseStringToCClassHosts](#parsestringtocclasshosts) ||
| [str.ParseStringToHTTPRequest](#parsestringtohttprequest) ||
| [str.ParseStringToHTTPResponse](#parsestringtohttpresponse) ||
| [str.ParseStringToHostPort](#parsestringtohostport) ||
| [str.ParseStringToHosts](#parsestringtohosts) ||
| [str.ParseStringToLines](#parsestringtolines) ||
| [str.ParseStringToPorts](#parsestringtoports) |ParseStringToPorts 负数端口代表了是 UDP 扫描端口|
| [str.ParseStringToUrls](#parsestringtourls) ||
| [str.ParseStringToUrlsWith3W](#parsestringtourlswith3w) ||
| [str.ParseStringUrlToUrlInstance](#parsestringurltourlinstance) ||
| [str.ParseStringUrlToWebsiteRootPath](#parsestringurltowebsiterootpath) ||
| [str.PathJoin](#pathjoin) |Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Clea...|
| [str.RandSecret](#randsecret) ||
| [str.RandStr](#randstr) |RandStringBytes return length `n` alphabet random string|
| [str.RegexpMatch](#regexpmatch) ||
| [str.RemoveRepeat](#removerepeat) |元素去重|
| [str.Repeat](#repeat) |Repeat returns a new string consisting of count copies of the string s.It panics if count is negative or if the result of (len(s) * count)overflows.|
| [str.Replace](#replace) |Replace returns a copy of the string s with the first nnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning o...|
| [str.ReplaceAll](#replaceall) |ReplaceAll returns a copy of the string s with allnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the...|
| [str.ReplaceHTTPPacketBody](#replacehttppacketbody) ||
| [str.Split](#split) |Split slices s into all substrings separated by sep and returns a slice ofthe substrings between those separators.If s does not contain sep and sep is...|
| [str.SplitAfter](#splitafter) |SplitAfter slices s into all substrings after each instance of sep andreturns a slice of those substrings.If s does not contain sep and sep is not emp...|
| [str.SplitAfterN](#splitaftern) |SplitAfterN slices s into substrings after each instance of sep andreturns a slice of those substrings.The count determines the number of substrings t...|
| [str.SplitAndTrim](#splitandtrim) ||
| [str.SplitHTTPHeadersAndBodyFromPacket](#splithttpheadersandbodyfrompacket) ||
| [str.SplitHostsToPrivateAndPublic](#splithoststoprivateandpublic) ||
| [str.SplitN](#splitn) |SplitN slices s into substrings separated by sep and returns a slice ofthe substrings between those separators.The count determines the number of subs...|
| [str.StartsWith](#startswith) |HasPrefix tests whether the string s begins with prefix.|
| [str.StringContainsAnyOfSubString](#stringcontainsanyofsubstring) ||
| [str.StringSliceContains](#stringslicecontains) ||
| [str.StringSliceContainsAll](#stringslicecontainsall) ||
| [str.Subtract](#subtract) |SubtractString returns the subtraction between two collections of string|
| [str.Title](#title) |Title returns a copy of the string s with all Unicode letters that begin wordsmapped to their Unicode title case.Deprecated: The rule Title uses for w...|
| [str.ToJsonIndentStr](#tojsonindentstr) ||
| [str.ToLower](#tolower) |ToLower returns s with all Unicode letters mapped to their lower case.|
| [str.ToLowerSpecial](#tolowerspecial) |ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to theirlower case using the case mapping specified by c.|
| [str.ToStringSlice](#tostringslice) ||
| [str.ToTitle](#totitle) |ToTitle returns a copy of the string s with all Unicode letters mapped totheir Unicode title case.|
| [str.ToTitleSpecial](#totitlespecial) |ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to theirUnicode title case, giving priority to the special casing rules.|
| [str.ToUpper](#toupper) |ToUpper returns s with all Unicode letters mapped to their upper case.|
| [str.ToUpperSpecial](#toupperspecial) |ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to theirupper case using the case mapping specified by c.|
| [str.ToValidUTF8](#tovalidutf8) |ToValidUTF8 returns a copy of the string s with each run of invalid UTF-8 byte sequencesreplaced by the replacement string, which may be empty.|
| [str.Trim](#trim) |Trim returns a slice of the string s with all leading andtrailing Unicode code points contained in cutset removed.|
| [str.TrimLeft](#trimleft) |TrimLeft returns a slice of the string s with all leadingUnicode code points contained in cutset removed.To remove a prefix, use TrimPrefix instead.|
| [str.TrimPrefix](#trimprefix) |TrimPrefix returns s without the provided leading prefix string.If s doesn't start with prefix, s is returned unchanged.|
| [str.TrimRight](#trimright) |TrimRight returns a slice of the string s, with all trailingUnicode code points contained in cutset removed.To remove a suffix, use TrimSuffix instead...|
| [str.TrimSpace](#trimspace) |TrimSpace returns a slice of the string s, with all leadingand trailing white space removed, as defined by Unicode.|
| [str.TrimSuffix](#trimsuffix) |TrimSuffix returns s without the provided trailing suffix string.If s doesn't end with suffix, s is returned unchanged.|
| [str.UrlJoin](#urljoin) |https://baidu.com/abc   a?key=valuehttps://baidu.com/abc/a?key=value =&gt; [X] https://baidu.com/abc/a%xxkey=value[X] https://baidu.com/a?key=value|
| [str.VersionEqual](#versionequal) |VersionEqual v1 等于 v2 返回 true|
| [str.VersionGreater](#versiongreater) |VersionGreater v1 大于 v2 返回 true|
| [str.VersionGreaterEqual](#versiongreaterequal) |VersionGreaterEqual v1 大于等于 v2 返回 true|
| [str.VersionLess](#versionless) |VersionLess v1 小于 v2 返回true|
| [str.VersionLessEqual](#versionlessequal) |VersionLessEqual v1 小于等于 v2 返回true|
| [str.f](#f) ||


## 函数定义
### calcssdeep

#### 详细描述


#### 定义

`CalcSSDeep(raw []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### calcssdeepstability

#### 详细描述
稳定性定义为最远距离 / 最低分数

#### 定义

`CalcSSDeepStability(req ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `error` |   |


### calcsimhash

#### 详细描述


#### 定义

`CalcSimHash(raw []byte) uint64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `uint64` |   |


### calcsimhashstability

#### 详细描述
计算 simhash 稳定性

#### 定义

`CalcSimHashStability(req ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `error` |   |


### calcsimilarity

#### 详细描述


#### 定义

`CalcSimilarity(raw ...[]byte) float64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### calctextmaxsubstrstability

#### 详细描述


#### 定义

`CalcTextMaxSubStrStability(raw ...[]byte) (float64, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |
| r2 | `error` |   |


### compare

#### 详细描述
Compare returns an integer comparing two strings lexicographically.The result will be 0 if a == b, -1 if a &lt; b, and +1 if a &gt; b.Compare is included only for symmetry with package bytes.It is usually clearer and always faster to use the built-instring comparison operators ==, &lt;, &gt;, and so on.

#### 定义

`Compare(a string, b string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `string` |   |
| b | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### contains

#### 详细描述
Contains reports whether substr is within s.

#### 定义

`Contains(s string, substr string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### containsany

#### 详细描述
ContainsAny reports whether any Unicode code points in chars are within s.

#### 定义

`ContainsAny(s string, chars string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| chars | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### count

#### 详细描述
Count counts the number of non-overlapping instances of substr in s.If substr is an empty string, Count returns 1 + the number of Unicode code points in s.

#### 定义

`Count(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### endswith

#### 详细描述
HasSuffix tests whether the string s ends with suffix.

#### 定义

`EndsWith(s string, suffix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### equalfold

#### 详细描述
EqualFold reports whether s and t, interpreted as UTF-8 strings,are equal under simple Unicode case-folding, which is a more generalform of case-insensitivity.

#### 定义

`EqualFold(s string, t string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### extractbodyfromhttpresponseraw

#### 详细描述


#### 定义

`ExtractBodyFromHTTPResponseRaw(res []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### extractchineseidcards

#### 详细描述


#### 定义

`ExtractChineseIDCards(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractdomain

#### 详细描述


#### 定义

`ExtractDomain(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracthost

#### 详细描述


#### 定义

`ExtractHost(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### extractjson

#### 详细描述


#### 定义

`ExtractJson(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractjsonwithraw

#### 详细描述


#### 定义

`ExtractJsonWithRaw(i any) ([]string, []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |
| r2 | `[]string` |   |


### extractrootdomain

#### 详细描述


#### 定义

`ExtractRootDomain(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractstrcontext

#### 详细描述


#### 定义

`ExtractStrContext(raw []byte, res []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| res | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracttitle

#### 详细描述


#### 定义

`ExtractTitle(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### extracturlfromhttprequest

#### 详细描述


#### 定义

`ExtractURLFromHTTPRequest(r *http.Request, https bool) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*http.Request` |   |
| https | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` |   |
| r2 | `error` |   |


### extracturlfromhttprequestraw

#### 详细描述


#### 定义

`ExtractURLFromHTTPRequestRaw(req []byte, isHttps bool) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` |   |
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` |   |
| r2 | `error` |   |


### fields

#### 详细描述
Fields splits the string s around each instance of one or more consecutive white spacecharacters, as defined by unicode.IsSpace, returning a slice of substrings of s or anempty slice if s contains only white space.

#### 定义

`Fields(s string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### fixhttprequest

#### 详细描述


#### 定义

`FixHTTPRequest(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### fixhttpresponse

#### 详细描述
FixHTTPResponse try its best to fix and present human-readable response

#### 定义

`FixHTTPResponse(raw []byte) (rsp []byte, body []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |
| body | `[]byte` |   |
| _ | `error` |   |


### grok

#### 详细描述


#### 定义

`Grok(line string, rule string) GrokResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |
| rule | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrokResult` |   |


### hasprefix

#### 详细描述
HasPrefix tests whether the string s begins with prefix.

#### 定义

`HasPrefix(s string, prefix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### hassuffix

#### 详细描述
HasSuffix tests whether the string s ends with suffix.

#### 定义

`HasSuffix(s string, suffix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### hostport

#### 详细描述


#### 定义

`HostPort(host string, port any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ipv4tocclassnetwork

#### 详细描述


#### 定义

`IPv4ToCClassNetwork(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### index

#### 详细描述
Index returns the index of the first instance of substr in s, or -1 if substr is not present in s.

#### 定义

`Index(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### indexany

#### 详细描述
IndexAny returns the index of the first instance of any Unicode code pointfrom chars in s, or -1 if no Unicode code point from chars is present in s.

#### 定义

`IndexAny(s string, chars string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| chars | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### indexbyte

#### 详细描述
IndexByte returns the index of the first instance of c in s, or -1 if c is not present in s.

#### 定义

`IndexByte(s string, c byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| c | `byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### intersectstring

#### 详细描述
IntersectString returns the intersection between two collections of string.

#### 定义

`IntersectString(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` |   |
| y | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### isalnum

#### 详细描述


#### 定义

`IsAlNum(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isalpha

#### 详细描述


#### 定义

`IsAlpha(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isalphanum

#### 详细描述


#### 定义

`IsAlphaNum(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isbase64value

#### 详细描述


#### 定义

`IsBase64Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### iscaptchafield

#### 详细描述


#### 定义

`IsCaptchaField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isdigit

#### 详细描述


#### 定义

`IsDigit(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ishtmlresponse

#### 详细描述


#### 定义

`IsHtmlResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ishttpurl

#### 详细描述
IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https

#### 定义

`IsHttpURL(v any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isipv4

#### 详细描述


#### 定义

`IsIPv4(raw string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isipv6

#### 详细描述


#### 定义

`IsIPv6(raw string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isjsonpparam

#### 详细描述


#### 定义

`IsJSONPParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isjsonresponse

#### 详细描述


#### 定义

`IsJsonResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ismd5value

#### 详细描述


#### 定义

`IsMD5Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### ispasswordfield

#### 详细描述


#### 定义

`IsPasswordField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isplainbase64value

#### 详细描述


#### 定义

`IsPlainBase64Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isredirectparam

#### 详细描述
根据 key 的名字猜测是否是用于重定向的参数

#### 定义

`IsRedirectParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issqlcolumnfield

#### 详细描述


#### 定义

`IsSQLColumnField(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issensitivejson

#### 详细描述


#### 定义

`IsSensitiveJson(data []byte) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issensitivetokenfield

#### 详细描述


#### 定义

`IsSensitiveTokenField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isservererror

#### 详细描述


#### 定义

`IsServerError(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### issha256value

#### 详细描述


#### 定义

`IsSha256Value(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isstrongpassword

#### 详细描述


#### 定义

`IsStrongPassword(s string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### istlsserver

#### 详细描述


#### 定义

`IsTLSServer(addr string, proxies ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isurlparam

#### 详细描述


#### 定义

`IsUrlParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isurlpath

#### 详细描述
根据 value 猜测是否是一个 url path

#### 定义

`IsUrlPath(v any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isusernamefield

#### 详细描述


#### 定义

`IsUsernameField(key string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isxmlparam

#### 详细描述


#### 定义

`IsXmlParam(key string, value any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isxmlrequest

#### 详细描述


#### 定义

`IsXmlRequest(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isxmlvalue

#### 详细描述


#### 定义

`IsXmlValue(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### join

#### 详细描述


#### 定义

`Join(i any, d any) (defaultResult string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| d | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| defaultResult | `string` |   |


### jsonstreamtomaplist

#### 详细描述


#### 定义

`JsonStreamToMapList(reader io.Reader) []map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reader | `io.Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]any` |   |


### jsontomap

#### 详细描述


#### 定义

`JsonToMap(line string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### jsontomaplist

#### 详细描述


#### 定义

`JsonToMapList(line string) []map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]string` |   |


### lastindex

#### 详细描述
LastIndex returns the index of the last instance of substr in s, or -1 if substr is not present in s.

#### 定义

`LastIndex(s string, substr string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| substr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### lastindexany

#### 详细描述
LastIndexAny returns the index of the last instance of any Unicode codepoint from chars in s, or -1 if no Unicode code point from chars ispresent in s.

#### 定义

`LastIndexAny(s string, chars string) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| chars | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### lastindexbyte

#### 详细描述
LastIndexByte returns the index of the last instance of c in s, or -1 if c is not present in s.

#### 定义

`LastIndexByte(s string, c byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| c | `byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### lowerandtrimspace

#### 详细描述


#### 定义

`LowerAndTrimSpace(raw string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### matchallofglob

#### 详细描述


#### 定义

`MatchAllOfGlob(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchallofregexp

#### 详细描述


#### 定义

`MatchAllOfRegexp(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchallofsubstring

#### 详细描述


#### 定义

`MatchAllOfSubString(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchanyofglob

#### 详细描述


#### 定义

`MatchAnyOfGlob(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchanyofregexp

#### 详细描述


#### 定义

`MatchAnyOfRegexp(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### matchanyofsubstring

#### 详细描述


#### 定义

`MatchAnyOfSubString(i any, re ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### mergeurlfromhttprequest

#### 详细描述


#### 定义

`MergeUrlFromHTTPRequest(rawRequest []byte, target string, isHttps bool) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rawRequest | `[]byte` |   |
| target | `string` |   |
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### newfilter

#### 详细描述


#### 定义

`NewFilter() *StringFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*StringFilter` |   |


### newreader

#### 详细描述
NewReader returns a new Reader reading from s.It is similar to bytes.NewBufferString but more efficient and read-only.

#### 定义

`NewReader(s string) *Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reader` |   |


### paramsgetor

#### 详细描述


#### 定义

`ParamsGetOr(i map[string]string, keyValue string, defaultValue string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `map[string]string` |   |
| keyValue | `string` |   |
| defaultValue | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### parsebytestohttprequest

#### 详细描述


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### parsebytestohttpresponse

#### 详细描述


#### 定义

`ParseBytesToHTTPResponse(res []byte) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### parsestringtocclasshosts

#### 详细描述


#### 定义

`ParseStringToCClassHosts(targets string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### parsestringtohttprequest

#### 详细描述


#### 定义

`ParseStringToHTTPRequest(raw string) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### parsestringtohttpresponse

#### 详细描述


#### 定义

`ParseStringToHTTPResponse(res string) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### parsestringtohostport

#### 详细描述


#### 定义

`ParseStringToHostPort(raw string) (host string, port int, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| err | `error` |   |


### parsestringtohosts

#### 详细描述


#### 定义

`ParseStringToHosts(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringtolines

#### 详细描述


#### 定义

`ParseStringToLines(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringtoports

#### 详细描述
ParseStringToPorts 负数端口代表了是 UDP 扫描端口

#### 定义

`ParseStringToPorts(ports string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### parsestringtourls

#### 详细描述


#### 定义

`ParseStringToUrls(targets ...string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringtourlswith3w

#### 详细描述


#### 定义

`ParseStringToUrlsWith3W(sub ...string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sub | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### parsestringurltourlinstance

#### 详细描述


#### 定义

`ParseStringUrlToUrlInstance(s string) (*url.URL, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*url.URL` |   |
| r2 | `error` |   |


### parsestringurltowebsiterootpath

#### 详细描述


#### 定义

`ParseStringUrlToWebsiteRootPath(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### pathjoin

#### 详细描述
Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Cleaned. However, if the argumentlist is empty or all its elements are empty, Join returnsan empty string.On Windows, the result will only be a UNC path if the firstnon-empty element is a UNC path.

#### 定义

`PathJoin(elem ...string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| elem | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### randsecret

#### 详细描述


#### 定义

`RandSecret(n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### randstr

#### 详细描述
RandStringBytes return length `n` alphabet random string

#### 定义

`RandStr(n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### regexpmatch

#### 详细描述


#### 定义

`RegexpMatch(pattern string, i interface) (pattern string, i interface)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |
| i | `interface` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |
| i | `interface` |   |


### removerepeat

#### 详细描述
元素去重

#### 定义

`RemoveRepeat(slc []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| slc | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### repeat

#### 详细描述
Repeat returns a new string consisting of count copies of the string s.It panics if count is negative or if the result of (len(s) * count)overflows.

#### 定义

`Repeat(s string, count int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replace

#### 详细描述
Replace returns a copy of the string s with the first nnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k+1 replacementsfor a k-rune string.If n &lt; 0, there is no limit on the number of replacements.

#### 定义

`Replace(s string, old string, new string, n int) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| old | `string` |   |
| new | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replaceall

#### 详细描述
ReplaceAll returns a copy of the string s with allnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k+1 replacementsfor a k-rune string.

#### 定义

`ReplaceAll(s string, old string, new string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| old | `string` |   |
| new | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replacehttppacketbody

#### 详细描述


#### 定义

`ReplaceHTTPPacketBody(raw []byte, body []byte, chunk bool) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### split

#### 详细描述
Split slices s into all substrings separated by sep and returns a slice ofthe substrings between those separators.If s does not contain sep and sep is not empty, Split returns aslice of length 1 whose only element is s.If sep is empty, Split splits after each UTF-8 sequence. If both sand sep are empty, Split returns an empty slice.It is equivalent to SplitN with a count of -1.To split around the first instance of a separator, see Cut.

#### 定义

`Split(s string, sep string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### splitafter

#### 详细描述
SplitAfter slices s into all substrings after each instance of sep andreturns a slice of those substrings.If s does not contain sep and sep is not empty, SplitAfter returnsa slice of length 1 whose only element is s.If sep is empty, SplitAfter splits after each UTF-8 sequence. Ifboth s and sep are empty, SplitAfter returns an empty slice.It is equivalent to SplitAfterN with a count of -1.

#### 定义

`SplitAfter(s string, sep string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### splitaftern

#### 详细描述
SplitAfterN slices s into substrings after each instance of sep andreturns a slice of those substrings.The count determines the number of substrings to return:	n &gt; 0: at most n substrings; the last substring will be the unsplit remainder.	n == 0: the result is nil (zero substrings)	n &lt; 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for SplitAfter.

#### 定义

`SplitAfterN(s string, sep string, n int) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### splitandtrim

#### 详细描述


#### 定义

`SplitAndTrim(Raw string, sep string) (targets []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| Raw | `string` |   |
| sep | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| targets | `[]string` |   |


### splithttpheadersandbodyfrompacket

#### 详细描述


#### 定义

`SplitHTTPHeadersAndBodyFromPacket(raw []byte, hook ...func(line string)) (string, []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| hook | `...func(line string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `[]byte` |   |


### splithoststoprivateandpublic

#### 详细描述


#### 定义

`SplitHostsToPrivateAndPublic(hosts ...string) (privs []string, pub []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| privs | `[]string` |   |
| pub | `[]string` |   |


### splitn

#### 详细描述
SplitN slices s into substrings separated by sep and returns a slice ofthe substrings between those separators.The count determines the number of substrings to return:	n &gt; 0: at most n substrings; the last substring will be the unsplit remainder.	n == 0: the result is nil (zero substrings)	n &lt; 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for Split.To split around the first instance of a separator, see Cut.

#### 定义

`SplitN(s string, sep string, n int) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| sep | `string` |   |
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### startswith

#### 详细描述
HasPrefix tests whether the string s begins with prefix.

#### 定义

`StartsWith(s string, prefix string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### stringcontainsanyofsubstring

#### 详细描述


#### 定义

`StringContainsAnyOfSubString(s string, subs []string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| subs | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### stringslicecontains

#### 详细描述


#### 定义

`StringSliceContains(s any, raw string) (result bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `any` |   |
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bool` |   |


### stringslicecontainsall

#### 详细描述


#### 定义

`StringSliceContainsAll(o []string, elements ...string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| o | `[]string` |   |
| elements | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### subtract

#### 详细描述
SubtractString returns the subtraction between two collections of string

#### 定义

`Subtract(x []string, y []string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| x | `[]string` |   |
| y | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### title

#### 详细描述
Title returns a copy of the string s with all Unicode letters that begin wordsmapped to their Unicode title case.Deprecated: The rule Title uses for word boundaries does not handle Unicodepunctuation properly. Use golang.org/x/text/cases instead.

#### 定义

`Title(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tojsonindentstr

#### 详细描述


#### 定义

`ToJsonIndentStr(d any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tolower

#### 详细描述
ToLower returns s with all Unicode letters mapped to their lower case.

#### 定义

`ToLower(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tolowerspecial

#### 详细描述
ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to theirlower case using the case mapping specified by c.

#### 定义

`ToLowerSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tostringslice

#### 详细描述


#### 定义

`ToStringSlice(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### totitle

#### 详细描述
ToTitle returns a copy of the string s with all Unicode letters mapped totheir Unicode title case.

#### 定义

`ToTitle(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### totitlespecial

#### 详细描述
ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to theirUnicode title case, giving priority to the special casing rules.

#### 定义

`ToTitleSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### toupper

#### 详细描述
ToUpper returns s with all Unicode letters mapped to their upper case.

#### 定义

`ToUpper(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### toupperspecial

#### 详细描述
ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to theirupper case using the case mapping specified by c.

#### 定义

`ToUpperSpecial(c unicode.SpecialCase, s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `unicode.SpecialCase` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### tovalidutf8

#### 详细描述
ToValidUTF8 returns a copy of the string s with each run of invalid UTF-8 byte sequencesreplaced by the replacement string, which may be empty.

#### 定义

`ToValidUTF8(s string, replacement string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| replacement | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trim

#### 详细描述
Trim returns a slice of the string s with all leading andtrailing Unicode code points contained in cutset removed.

#### 定义

`Trim(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| cutset | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimleft

#### 详细描述
TrimLeft returns a slice of the string s with all leadingUnicode code points contained in cutset removed.To remove a prefix, use TrimPrefix instead.

#### 定义

`TrimLeft(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| cutset | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimprefix

#### 详细描述
TrimPrefix returns s without the provided leading prefix string.If s doesn't start with prefix, s is returned unchanged.

#### 定义

`TrimPrefix(s string, prefix string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimright

#### 详细描述
TrimRight returns a slice of the string s, with all trailingUnicode code points contained in cutset removed.To remove a suffix, use TrimSuffix instead.

#### 定义

`TrimRight(s string, cutset string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| cutset | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimspace

#### 详细描述
TrimSpace returns a slice of the string s, with all leadingand trailing white space removed, as defined by Unicode.

#### 定义

`TrimSpace(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### trimsuffix

#### 详细描述
TrimSuffix returns s without the provided trailing suffix string.If s doesn't end with suffix, s is returned unchanged.

#### 定义

`TrimSuffix(s string, suffix string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| suffix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### urljoin

#### 详细描述
https://baidu.com/abc   a?key=valuehttps://baidu.com/abc/a?key=value =&gt; [X] https://baidu.com/abc/a%xxkey=value[X] https://baidu.com/a?key=value

#### 定义

`UrlJoin(origin string, paths ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `string` |   |
| paths | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### versionequal

#### 详细描述
VersionEqual v1 等于 v2 返回 true

#### 定义

`VersionEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versiongreater

#### 详细描述
VersionGreater v1 大于 v2 返回 true

#### 定义

`VersionGreater(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versiongreaterequal

#### 详细描述
VersionGreaterEqual v1 大于等于 v2 返回 true

#### 定义

`VersionGreaterEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versionless

#### 详细描述
VersionLess v1 小于 v2 返回true

#### 定义

`VersionLess(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### versionlessequal

#### 详细描述
VersionLessEqual v1 小于等于 v2 返回true

#### 定义

`VersionLessEqual(v1 string, v2 string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### f

#### 详细描述


#### 定义

`f(f string, items ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |
| items | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


