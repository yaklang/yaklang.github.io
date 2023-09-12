# str

|成员函数|函数描述/介绍|
|:------|:--------|
| [str.CalcSSDeep](#CalcSSDeep) ||
| [str.CalcSSDeepStability](#CalcSSDeepStability) |稳定性定义为最远距离 / 最低分数|
| [str.CalcSimHash](#CalcSimHash) ||
| [str.CalcSimHashStability](#CalcSimHashStability) |计算 simhash 稳定性|
| [str.CalcSimilarity](#CalcSimilarity) ||
| [str.CalcTextMaxSubStrStability](#CalcTextMaxSubStrStability) ||
| [str.Compare](#Compare) |Compare returns an integer comparing two strings lexicographically.The result will be 0 if a == b, -1 if a < b, and +1 if a > b.Compare is included only for symmetry with package bytes.It is usually clearer and always faster to use the built-instring comparison operators ==, <, >, and so on.|
| [str.Contains](#Contains) |Contains reports whether substr is within s.|
| [str.ContainsAny](#ContainsAny) |ContainsAny reports whether any Unicode code points in chars are within s.|
| [str.Count](#Count) |Count counts the number of non-overlapping instances of substr in s.If substr is an empty string, Count returns 1 + the number of Unicode code points in s.|
| [str.EndsWith](#EndsWith) |HasSuffix tests whether the string s ends with suffix.|
| [str.EqualFold](#EqualFold) |EqualFold reports whether s and t, interpreted as UTF-8 strings,are equal under simple Unicode case-folding, which is a more generalform of case-insensitivity.|
| [str.ExtractBodyFromHTTPResponseRaw](#ExtractBodyFromHTTPResponseRaw) ||
| [str.ExtractChineseIDCards](#ExtractChineseIDCards) ||
| [str.ExtractDomain](#ExtractDomain) ||
| [str.ExtractHost](#ExtractHost) ||
| [str.ExtractJson](#ExtractJson) ||
| [str.ExtractJsonWithRaw](#ExtractJsonWithRaw) ||
| [str.ExtractRootDomain](#ExtractRootDomain) ||
| [str.ExtractStrContext](#ExtractStrContext) ||
| [str.ExtractTitle](#ExtractTitle) ||
| [str.ExtractURLFromHTTPRequest](#ExtractURLFromHTTPRequest) ||
| [str.ExtractURLFromHTTPRequestRaw](#ExtractURLFromHTTPRequestRaw) ||
| [str.Fields](#Fields) |Fields splits the string s around each instance of one or more consecutive white spacecharacters, as defined by unicode.IsSpace, returning a slice of substrings of s or anempty slice if s contains only white space.|
| [str.FixHTTPRequest](#FixHTTPRequest) ||
| [str.FixHTTPResponse](#FixHTTPResponse) |FixHTTPResponse try its best to fix and present human-readable response|
| [str.Grok](#Grok) ||
| [str.HasPrefix](#HasPrefix) |HasPrefix tests whether the string s begins with prefix.|
| [str.HasSuffix](#HasSuffix) |HasSuffix tests whether the string s ends with suffix.|
| [str.HostPort](#HostPort) ||
| [str.IPv4ToCClassNetwork](#IPv4ToCClassNetwork) ||
| [str.Index](#Index) |Index returns the index of the first instance of substr in s, or -1 if substr is not present in s.|
| [str.IndexAny](#IndexAny) |IndexAny returns the index of the first instance of any Unicode code pointfrom chars in s, or -1 if no Unicode code point from chars is present in s.|
| [str.IndexByte](#IndexByte) |IndexByte returns the index of the first instance of c in s, or -1 if c is not present in s.|
| [str.IntersectString](#IntersectString) |IntersectString returns the intersection between two collections of string.|
| [str.IsAlNum](#IsAlNum) ||
| [str.IsAlpha](#IsAlpha) ||
| [str.IsAlphaNum](#IsAlphaNum) ||
| [str.IsBase64Value](#IsBase64Value) ||
| [str.IsCaptchaField](#IsCaptchaField) ||
| [str.IsDigit](#IsDigit) ||
| [str.IsHtmlResponse](#IsHtmlResponse) ||
| [str.IsHttpURL](#IsHttpURL) |IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https|
| [str.IsIPv4](#IsIPv4) ||
| [str.IsIPv6](#IsIPv6) ||
| [str.IsJSONPParam](#IsJSONPParam) ||
| [str.IsJsonResponse](#IsJsonResponse) ||
| [str.IsMD5Value](#IsMD5Value) ||
| [str.IsPasswordField](#IsPasswordField) ||
| [str.IsPlainBase64Value](#IsPlainBase64Value) ||
| [str.IsRedirectParam](#IsRedirectParam) |根据 key 的名字猜测是否是用于重定向的参数|
| [str.IsSQLColumnField](#IsSQLColumnField) ||
| [str.IsSensitiveJson](#IsSensitiveJson) ||
| [str.IsSensitiveTokenField](#IsSensitiveTokenField) ||
| [str.IsServerError](#IsServerError) ||
| [str.IsSha256Value](#IsSha256Value) ||
| [str.IsStrongPassword](#IsStrongPassword) ||
| [str.IsTLSServer](#IsTLSServer) ||
| [str.IsUrlParam](#IsUrlParam) ||
| [str.IsUrlPath](#IsUrlPath) |根据 value 猜测是否是一个 url path|
| [str.IsUsernameField](#IsUsernameField) ||
| [str.IsXmlParam](#IsXmlParam) ||
| [str.IsXmlRequest](#IsXmlRequest) ||
| [str.IsXmlValue](#IsXmlValue) ||
| [str.Join](#Join) ||
| [str.JsonStreamToMapList](#JsonStreamToMapList) ||
| [str.JsonToMap](#JsonToMap) ||
| [str.JsonToMapList](#JsonToMapList) ||
| [str.LastIndex](#LastIndex) |LastIndex returns the index of the last instance of substr in s, or -1 if substr is not present in s.|
| [str.LastIndexAny](#LastIndexAny) |LastIndexAny returns the index of the last instance of any Unicode codepoint from chars in s, or -1 if no Unicode code point from chars ispresent in s.|
| [str.LastIndexByte](#LastIndexByte) |LastIndexByte returns the index of the last instance of c in s, or -1 if c is not present in s.|
| [str.LowerAndTrimSpace](#LowerAndTrimSpace) ||
| [str.MatchAllOfGlob](#MatchAllOfGlob) ||
| [str.MatchAllOfRegexp](#MatchAllOfRegexp) ||
| [str.MatchAllOfSubString](#MatchAllOfSubString) ||
| [str.MatchAnyOfGlob](#MatchAnyOfGlob) ||
| [str.MatchAnyOfRegexp](#MatchAnyOfRegexp) ||
| [str.MatchAnyOfSubString](#MatchAnyOfSubString) ||
| [str.MergeUrlFromHTTPRequest](#MergeUrlFromHTTPRequest) ||
| [str.NewFilter](#NewFilter) ||
| [str.NewReader](#NewReader) |NewReader returns a new Reader reading from s.It is similar to bytes.NewBufferString but more efficient and read-only.|
| [str.ParamsGetOr](#ParamsGetOr) ||
| [str.ParseBytesToHTTPRequest](#ParseBytesToHTTPRequest) ||
| [str.ParseBytesToHTTPResponse](#ParseBytesToHTTPResponse) ||
| [str.ParseStringToCClassHosts](#ParseStringToCClassHosts) ||
| [str.ParseStringToHTTPRequest](#ParseStringToHTTPRequest) ||
| [str.ParseStringToHTTPResponse](#ParseStringToHTTPResponse) ||
| [str.ParseStringToHostPort](#ParseStringToHostPort) ||
| [str.ParseStringToHosts](#ParseStringToHosts) ||
| [str.ParseStringToLines](#ParseStringToLines) ||
| [str.ParseStringToPorts](#ParseStringToPorts) |ParseStringToPorts 负数端口代表了是 UDP 扫描端口|
| [str.ParseStringToUrls](#ParseStringToUrls) ||
| [str.ParseStringToUrlsWith3W](#ParseStringToUrlsWith3W) ||
| [str.ParseStringUrlToUrlInstance](#ParseStringUrlToUrlInstance) ||
| [str.ParseStringUrlToWebsiteRootPath](#ParseStringUrlToWebsiteRootPath) ||
| [str.PathJoin](#PathJoin) |Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Cleaned. However, if the argumentlist is empty or all its elements are empty, Join returnsan empty string.On Windows, the result will only be a UNC path if the firstnon-empty element is a UNC path.|
| [str.RandSecret](#RandSecret) ||
| [str.RandStr](#RandStr) |RandStringBytes return length `n` alphabet random string|
| [str.RegexpMatch](#RegexpMatch) ||
| [str.RemoveRepeat](#RemoveRepeat) |元素去重|
| [str.Repeat](#Repeat) |Repeat returns a new string consisting of count copies of the string s.It panics if count is negative or if the result of (len(s) * count)overflows.|
| [str.Replace](#Replace) |Replace returns a copy of the string s with the first nnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k+1 replacementsfor a k-rune string.If n < 0, there is no limit on the number of replacements.|
| [str.ReplaceAll](#ReplaceAll) |ReplaceAll returns a copy of the string s with allnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k+1 replacementsfor a k-rune string.|
| [str.ReplaceHTTPPacketBody](#ReplaceHTTPPacketBody) ||
| [str.Split](#Split) |Split slices s into all substrings separated by sep and returns a slice ofthe substrings between those separators.If s does not contain sep and sep is not empty, Split returns aslice of length 1 whose only element is s.If sep is empty, Split splits after each UTF-8 sequence. If both sand sep are empty, Split returns an empty slice.It is equivalent to SplitN with a count of -1.To split around the first instance of a separator, see Cut.|
| [str.SplitAfter](#SplitAfter) |SplitAfter slices s into all substrings after each instance of sep andreturns a slice of those substrings.If s does not contain sep and sep is not empty, SplitAfter returnsa slice of length 1 whose only element is s.If sep is empty, SplitAfter splits after each UTF-8 sequence. Ifboth s and sep are empty, SplitAfter returns an empty slice.It is equivalent to SplitAfterN with a count of -1.|
| [str.SplitAfterN](#SplitAfterN) |SplitAfterN slices s into substrings after each instance of sep andreturns a slice of those substrings.The count determines the number of substrings to return:	n > 0: at most n substrings; the last substring will be the unsplit remainder.	n == 0: the result is nil (zero substrings)	n < 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for SplitAfter.|
| [str.SplitAndTrim](#SplitAndTrim) ||
| [str.SplitHTTPHeadersAndBodyFromPacket](#SplitHTTPHeadersAndBodyFromPacket) ||
| [str.SplitHostsToPrivateAndPublic](#SplitHostsToPrivateAndPublic) ||
| [str.SplitN](#SplitN) |SplitN slices s into substrings separated by sep and returns a slice ofthe substrings between those separators.The count determines the number of substrings to return:	n > 0: at most n substrings; the last substring will be the unsplit remainder.	n == 0: the result is nil (zero substrings)	n < 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for Split.To split around the first instance of a separator, see Cut.|
| [str.StartsWith](#StartsWith) |HasPrefix tests whether the string s begins with prefix.|
| [str.StringContainsAnyOfSubString](#StringContainsAnyOfSubString) ||
| [str.StringSliceContains](#StringSliceContains) ||
| [str.StringSliceContainsAll](#StringSliceContainsAll) ||
| [str.Subtract](#Subtract) |SubtractString returns the subtraction between two collections of string|
| [str.Title](#Title) |Title returns a copy of the string s with all Unicode letters that begin wordsmapped to their Unicode title case.Deprecated: The rule Title uses for word boundaries does not handle Unicodepunctuation properly. Use golang.org/x/text/cases instead.|
| [str.ToJsonIndentStr](#ToJsonIndentStr) ||
| [str.ToLower](#ToLower) |ToLower returns s with all Unicode letters mapped to their lower case.|
| [str.ToLowerSpecial](#ToLowerSpecial) |ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to theirlower case using the case mapping specified by c.|
| [str.ToStringSlice](#ToStringSlice) ||
| [str.ToTitle](#ToTitle) |ToTitle returns a copy of the string s with all Unicode letters mapped totheir Unicode title case.|
| [str.ToTitleSpecial](#ToTitleSpecial) |ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to theirUnicode title case, giving priority to the special casing rules.|
| [str.ToUpper](#ToUpper) |ToUpper returns s with all Unicode letters mapped to their upper case.|
| [str.ToUpperSpecial](#ToUpperSpecial) |ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to theirupper case using the case mapping specified by c.|
| [str.ToValidUTF8](#ToValidUTF8) |ToValidUTF8 returns a copy of the string s with each run of invalid UTF-8 byte sequencesreplaced by the replacement string, which may be empty.|
| [str.Trim](#Trim) |Trim returns a slice of the string s with all leading andtrailing Unicode code points contained in cutset removed.|
| [str.TrimLeft](#TrimLeft) |TrimLeft returns a slice of the string s with all leadingUnicode code points contained in cutset removed.To remove a prefix, use TrimPrefix instead.|
| [str.TrimPrefix](#TrimPrefix) |TrimPrefix returns s without the provided leading prefix string.If s doesn't start with prefix, s is returned unchanged.|
| [str.TrimRight](#TrimRight) |TrimRight returns a slice of the string s, with all trailingUnicode code points contained in cutset removed.To remove a suffix, use TrimSuffix instead.|
| [str.TrimSpace](#TrimSpace) |TrimSpace returns a slice of the string s, with all leadingand trailing white space removed, as defined by Unicode.|
| [str.TrimSuffix](#TrimSuffix) |TrimSuffix returns s without the provided trailing suffix string.If s doesn't end with suffix, s is returned unchanged.|
| [str.UrlJoin](#UrlJoin) |https://baidu.com/abc   a?key=valuehttps://baidu.com/abc/a?key=value => [X] https://baidu.com/abc/a%xxkey=value[X] https://baidu.com/a?key=value|
| [str.VersionEqual](#VersionEqual) |VersionEqual v1 等于 v2 返回 true|
| [str.VersionGreater](#VersionGreater) |VersionGreater v1 大于 v2 返回 true|
| [str.VersionGreaterEqual](#VersionGreaterEqual) |VersionGreaterEqual v1 大于等于 v2 返回 true|
| [str.VersionLess](#VersionLess) |VersionLess v1 小于 v2 返回true|
| [str.VersionLessEqual](#VersionLessEqual) |VersionLessEqual v1 小于等于 v2 返回true|
| [str.f](#f) ||


## 函数定义
### str.CalcSSDeep

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


### str.CalcSSDeepStability

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


### str.CalcSimHash

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


### str.CalcSimHashStability

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


### str.CalcSimilarity

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


### str.CalcTextMaxSubStrStability

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


### str.Compare

#### 详细描述
Compare returns an integer comparing two strings lexicographically.The result will be 0 if a == b, -1 if a < b, and +1 if a > b.Compare is included only for symmetry with package bytes.It is usually clearer and always faster to use the built-instring comparison operators ==, <, >, and so on.

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


### str.Contains

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


### str.ContainsAny

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


### str.Count

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


### str.EndsWith

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


### str.EqualFold

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


### str.ExtractBodyFromHTTPResponseRaw

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


### str.ExtractChineseIDCards

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


### str.ExtractDomain

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


### str.ExtractHost

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


### str.ExtractJson

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


### str.ExtractJsonWithRaw

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


### str.ExtractRootDomain

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


### str.ExtractStrContext

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


### str.ExtractTitle

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


### str.ExtractURLFromHTTPRequest

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


### str.ExtractURLFromHTTPRequestRaw

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


### str.Fields

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


### str.FixHTTPRequest

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


### str.FixHTTPResponse

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


### str.Grok

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


### str.HasPrefix

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


### str.HasSuffix

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


### str.HostPort

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


### str.IPv4ToCClassNetwork

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


### str.Index

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


### str.IndexAny

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


### str.IndexByte

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


### str.IntersectString

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


### str.IsAlNum

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


### str.IsAlpha

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


### str.IsAlphaNum

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


### str.IsBase64Value

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


### str.IsCaptchaField

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


### str.IsDigit

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


### str.IsHtmlResponse

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


### str.IsHttpURL

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


### str.IsIPv4

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


### str.IsIPv6

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


### str.IsJSONPParam

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


### str.IsJsonResponse

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


### str.IsMD5Value

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


### str.IsPasswordField

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


### str.IsPlainBase64Value

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


### str.IsRedirectParam

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


### str.IsSQLColumnField

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


### str.IsSensitiveJson

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


### str.IsSensitiveTokenField

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


### str.IsServerError

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


### str.IsSha256Value

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


### str.IsStrongPassword

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


### str.IsTLSServer

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


### str.IsUrlParam

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


### str.IsUrlPath

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


### str.IsUsernameField

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


### str.IsXmlParam

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


### str.IsXmlRequest

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


### str.IsXmlValue

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


### str.Join

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


### str.JsonStreamToMapList

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


### str.JsonToMap

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


### str.JsonToMapList

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


### str.LastIndex

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


### str.LastIndexAny

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


### str.LastIndexByte

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


### str.LowerAndTrimSpace

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


### str.MatchAllOfGlob

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


### str.MatchAllOfRegexp

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


### str.MatchAllOfSubString

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


### str.MatchAnyOfGlob

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


### str.MatchAnyOfRegexp

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


### str.MatchAnyOfSubString

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


### str.MergeUrlFromHTTPRequest

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


### str.NewFilter

#### 详细描述


#### 定义

`NewFilter() *StringFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*StringFilter` |   |


### str.NewReader

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


### str.ParamsGetOr

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


### str.ParseBytesToHTTPRequest

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


### str.ParseBytesToHTTPResponse

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


### str.ParseStringToCClassHosts

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


### str.ParseStringToHTTPRequest

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


### str.ParseStringToHTTPResponse

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


### str.ParseStringToHostPort

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


### str.ParseStringToHosts

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


### str.ParseStringToLines

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


### str.ParseStringToPorts

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


### str.ParseStringToUrls

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


### str.ParseStringToUrlsWith3W

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


### str.ParseStringUrlToUrlInstance

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


### str.ParseStringUrlToWebsiteRootPath

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


### str.PathJoin

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


### str.RandSecret

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


### str.RandStr

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


### str.RegexpMatch

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


### str.RemoveRepeat

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


### str.Repeat

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


### str.Replace

#### 详细描述
Replace returns a copy of the string s with the first nnon-overlapping instances of old replaced by new.If old is empty, it matches at the beginning of the stringand after each UTF-8 sequence, yielding up to k+1 replacementsfor a k-rune string.If n < 0, there is no limit on the number of replacements.

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


### str.ReplaceAll

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


### str.ReplaceHTTPPacketBody

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


### str.Split

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


### str.SplitAfter

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


### str.SplitAfterN

#### 详细描述
SplitAfterN slices s into substrings after each instance of sep andreturns a slice of those substrings.The count determines the number of substrings to return:	n > 0: at most n substrings; the last substring will be the unsplit remainder.	n == 0: the result is nil (zero substrings)	n < 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for SplitAfter.

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


### str.SplitAndTrim

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


### str.SplitHTTPHeadersAndBodyFromPacket

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


### str.SplitHostsToPrivateAndPublic

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


### str.SplitN

#### 详细描述
SplitN slices s into substrings separated by sep and returns a slice ofthe substrings between those separators.The count determines the number of substrings to return:	n > 0: at most n substrings; the last substring will be the unsplit remainder.	n == 0: the result is nil (zero substrings)	n < 0: all substringsEdge cases for s and sep (for example, empty strings) are handledas described in the documentation for Split.To split around the first instance of a separator, see Cut.

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


### str.StartsWith

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


### str.StringContainsAnyOfSubString

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


### str.StringSliceContains

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


### str.StringSliceContainsAll

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


### str.Subtract

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


### str.Title

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


### str.ToJsonIndentStr

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


### str.ToLower

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


### str.ToLowerSpecial

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


### str.ToStringSlice

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


### str.ToTitle

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


### str.ToTitleSpecial

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


### str.ToUpper

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


### str.ToUpperSpecial

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


### str.ToValidUTF8

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


### str.Trim

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


### str.TrimLeft

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


### str.TrimPrefix

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


### str.TrimRight

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


### str.TrimSpace

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


### str.TrimSuffix

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


### str.UrlJoin

#### 详细描述
https://baidu.com/abc   a?key=valuehttps://baidu.com/abc/a?key=value => [X] https://baidu.com/abc/a%xxkey=value[X] https://baidu.com/a?key=value

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


### str.VersionEqual

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


### str.VersionGreater

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


### str.VersionGreaterEqual

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


### str.VersionLess

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


### str.VersionLessEqual

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


### str.f

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


