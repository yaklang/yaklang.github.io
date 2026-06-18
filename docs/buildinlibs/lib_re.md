---
sidebar_position: 5
---

# [re] 正则工具库

    fn re.QuoteMeta(var_1: string): string

yak 的正则工具包非常简单易用，核心只有两个函数

1. `fn re.Match(var_1: string, var_2: string|[]byte): bool`: 使用正则检查目的字符串是否符合正则，返回 `true/false`
1. `fn re.Grok(var_1: string, var_2: string): yaklib.GrokResult`: 符合 Grok 标准的正则捕获模块

同时继承了 Golang `regexp` 标准库中的几个标准接口

1. [`fn re.Compile(var_1: string): (*regexp.Regexp, error)`](https://golang.org/pkg/regexp/#Compile)
1. [`fn re.CompilePOSIX(var_1: string): (*regexp.Regexp, error)`](https://golang.org/pkg/regexp/#CompilePOSIX)
1. [`fn re.MustCompile(var_1: string): *regexp.Regexp`](https://golang.org/pkg/regexp/#MustCompile)
1. [`fn re.MustCompilePOSIX(var_1: string): *regexp.Regexp`](https://golang.org/pkg/regexp/#MustCompilePOSIX)

## 核心函数之一：`re.Match`

这个函数其实是最基础的正则判断函数，给出一个正则 `pattern`，判断字符串是否符合该正则，如果正则编译失败，或无法匹配到结果，则返回 false，正确匹配到结果返回 true。

同时这个函数也是相当高频使用的。

我们看以下案例：

### 使用 `re.Match` 检查字符串是否符合正则

```go
// 我们构建一个 match
pattern := `matchThis(.*?)txt`

// 我们随便写一个字符串
result := re.Match(pattern, `
asdfas sdfa sdfa
dsfasdfk;iopu34
matchMatchMatchmatchThisasdfnkaopjryqeryjklijklojkloptxt
`)
if !result {
    die("failed to match re:")
}
printf("pattern: %v 匹配成功\n", pattern)

/*
OUTPUT:

pattern: matchThis(.*?)txt 匹配成功
*/
```

### 使用 `re.Match` 检查字节流(`[]byte`)是否符合正则

```go
pattern := `matchThis(.*?)txt`
result := re.Match(pattern, []byte(`
asdfas sdfa sdfa
dsfasdfk;iopu34
matchMatchMatchmatchThisasdfnkaopjryqeryjklijklojkloptxt
`))
if !result {
    die("failed to match re:")
}
printf("pattern: %v 匹配成功\n", pattern)

/*
OUTPUT:

pattern: matchThis(.*?)txt 匹配成功
*/
```

## [re.Grok]：Logstash Grok 风格的正则捕获

> 资料介绍来源 [https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html](https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html)

Grok 是 Logstash 最重要的插件。你可以在 grok 里预定义好命名正则表达式，在稍后(grok参数或者其他正则表达式里)引用它。 正则表达式语法。大家如果有接触过 Logstash （ELK）的话，会对 Grok
非常熟悉，当我们需要对日志进行处理， 提取关键日志中的信息，我们将会编写对应的 Grok 表达式，提取出关键信息。

Grok 是一种采用组合多个预定义的正则表达式。用来匹配分割文本，并且映射到关键字的工具。主要用来对日志数据进行预处理。Logstash 的 filter 模块中 grok
插件就是其应用。其实主要思想就是用正则的方式匹配出字段，然后映射成某个字段。

### `re.Grok` 定义

```go
func re.Grok(content: string, grokPattern: string) return (map[string][]string)
```

### 正则表达式语法

运维工程师多多少少都会一点正则。你可以在 grok 里写标准的正则，像下面这样：

```go
\s+(?<request_time>\d+(?:\.\d+)?)\s+
```

:::tip 小贴士： 
这个正则表达式写法对于 Perl 或者 Ruby 程序员应该很熟悉了，Python 程序员可能更习惯写 `(?P<name>pattern)`，没办法，适应一下吧
:::

下面是从官方文件中摘抄的最简单但是足够说明用法的示例：

```
USERNAME [a-zA-Z0-9._-]+
USER %{USERNAME}
```

第一行，用普通的正则表达式来定义一个 grok 表达式；第二行，通过打印赋值格式，用前面定义好的 grok 表达式来定义另一个 grok 表达式。

grok 表达式的打印复制格式的完整语法是下面这样的：

```
%{PATTERN_NAME:capture_name}
```

### 实践案例：使用 grok 提取 Yak 版本

我们经常需要用 Grok 来提取一些数据，同时我们可以用 `Regexp.FindAll*` 相关接口来提取数据，这两者的核心远离其实并没有太大区别，但是 Grok 的优势就是

1. 更可读，更好维护
1. 规则通用，在 Logstash 平台中可以使用，同时 Golang 的 Grok 实现在本节内容也可以使用

我们以 Yak 本身版本信息来作为原材料，使用 Grok 规则来提取规则。

```bash title="yak version"
Yak Language Build Info:
    Version: v0.9.7a2-ff28a9389f7bd7538de20468b4a096258dfe3ce6
    GoVersion: go version go1.15.13 darwin/amd64
    GitHash: ff28a9389f7bd7538de20468b4a096258dfe3ce6
    BuildTime: Mon Jul 19 17:45:48 2021 +0800

```

我们通过 `yak version` 来获取上述内容。编写以下脚本案例：

```go
version = re.Grok(`Yak Language Build Info:
    Version: v0.9.7a2-ff28a9389f7bd7538de20468b4a096258dfe3ce6
    GoVersion: go version go1.15.13 darwin/amd64
    GitHash: ff28a9389f7bd7538de20468b4a096258dfe3ce6
    BuildTime: Mon Jul 19 17:45:48 2021 +0800
`, "Version: v%{COMMONVERSION:version}")["version"]
println(version)
```

当我们执行完成的时候，我们将提取到 `version` 的值，为一个 `[]string`，结果为 `[0.9.7]`

### yak 的 `re.Grok` 支持内置的规则

```go
var patterns = map[string]string{
    // 匹配 Version
	"COMMONVERSION": `(%{INT}\.?)+[a-zA-Z]*?`,

    // 匹配一个用户名
	"USERNAME":           `[a-zA-Z0-9._-]+`,
	"USER":               `%{USERNAME}`,

    // 匹配一个 EMAIL 的用户名字段
	"EMAILLOCALPART":     `[a-zA-Z][a-zA-Z0-9_.+-=:]+`,

    // 匹配一个 EMAIL 地址
	"EMAILADDRESS":       `%{EMAILLOCALPART}@%{HOSTNAME}`,

    // 匹配 HTTPD 的用户信息
	"HTTPDUSER":          `%{EMAILADDRESS}|%{USER}`,

    // 匹配一个 Int
	"INT":                `(?:[+-]?(?:[0-9]+))`,

    // 匹配一个数字
	"BASE10NUM":          `([+-]?(?:[0-9]+(?:\.[0-9]+)?)|\.[0-9]+)`,
	"NUMBER":             `(?:%{BASE10NUM})`,

    // 匹配一个十六进制
	"BASE16NUM":          `(0[xX]?[0-9a-fA-F]+)`,
	"POSINT":             `\b(?:[1-9][0-9]*)\b`,
	"NONNEGINT":          `\b(?:[0-9]+)\b`,

    // 提取一个字符
	"WORD":               `\b\w+\b`,

    // 不匹配空格
	"NOTSPACE":           `\S+`,

    // 匹配一个空格
	"SPACE":              `\s*`,

    // 匹配数据
	"DATA":               `.*?`,
	"GREEDYDATA":         `.*`,

    // 匹配一个被包裹的字符串
	"QUOTEDSTRING":       `"([^"\\]*(\\.[^"\\]*)*)"|\'([^\'\\]*(\\.[^\'\\]*)*)\'`,

    // 匹配一个 UUID
	"UUID":               `[A-Fa-f0-9]{8}-(?:[A-Fa-f0-9]{4}-){3}[A-Fa-f0-9]{12}`,

    // 匹配 MAC 地址
	"MAC":                `(?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC})`,
	"CISCOMAC":           `(?:(?:[A-Fa-f0-9]{4}\.){2}[A-Fa-f0-9]{4})`,
	"WINDOWSMAC":         `(?:(?:[A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2})`,
	"COMMONMAC":          `(?:(?:[A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2})`,

    // 匹配 IPv6
	"IPV6":               `((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?`,

    // 匹配 IPv4
	"IPV4":               `(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,

    // 匹配 IP 地址
	"IP":                 `(?:%{IPV6}|%{IPV4})`,

	"HOSTNAME":           `\b(?:[0-9A-Za-z][0-9A-Za-z-]{0,62})(?:\.(?:[0-9A-Za-z][0-9A-Za-z-]{0,62}))*(\.?|\b)`,
	"HOST":               `%{HOSTNAME}`,

    // 匹配一个 IP Host
	"IPORHOST":           `(?:%{IP}|%{HOSTNAME})`,

    // 匹配一个 HostPort
	"HOSTPORT":           `%{IPORHOST}:%{POSINT}`,

	"PATH":               `(?:%{UNIXPATH}|%{WINPATH})`,
	"UNIXPATH":           `(/[\w_%!$@:.,-]?/?)(\S+)?`,

    // 匹配页面是否出现 TTY
	"TTY":                `(?:/dev/(pts|tty([pq])?)(\w+)?/?(?:[0-9]+))`,

	"WINPATH":            `([A-Za-z]:|\\)(?:\\[^\\?*]*)+`,
	"URIPROTO":           `[A-Za-z]+(\+[A-Za-z+]+)?`,
	"URIHOST":            `%{IPORHOST}(?::%{POSINT:port})?`,
	"URIPATH":            `(?:/[A-Za-z0-9$.+!*'(){},~:;=@#%_\-]*)+`,
	"URIPARAM":           `\?[A-Za-z0-9$.+!*'|(){},~@#%&/=:;_?\-\[\]<>]*`,
	"URIPATHPARAM":       `%{URIPATH}(?:%{URIPARAM})?`,

    // 匹配一个 URI/URL
	"URI":                `%{URIPROTO}://(?:%{USER}(?::[^@]*)?@)?(?:%{URIHOST})?(?:%{URIPATHPARAM})?`,
	"MONTH":              `\b(?:Jan(?:uary|uar)?|Feb(?:ruary|ruar)?|M(?:a|ä)?r(?:ch|z)?|Apr(?:il)?|Ma(?:y|i)?|Jun(?:e|i)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|O(?:c|k)?t(?:ober)?|Nov(?:ember)?|De(?:c|z)(?:ember)?)\b`,
	"MONTHNUM":           `(?:0?[1-9]|1[0-2])`,
	"MONTHNUM2":          `(?:0[1-9]|1[0-2])`,
	"MONTHDAY":           `(?:(?:0[1-9])|(?:[12][0-9])|(?:3[01])|[1-9])`,
	"DAY":                `(?:Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)`,
	"YEAR":               `(\d\d){1,2}`,
	"HOUR":               `(?:2[0123]|[01]?[0-9])`,
	"MINUTE":             `(?:[0-5][0-9])`,
	"SECOND":             `(?:(?:[0-5]?[0-9]|60)(?:[:.,][0-9]+)?)`,
	"TIME":               `([^0-9]?)%{HOUR}:%{MINUTE}(?::%{SECOND})([^0-9]?)`,
	"DATE_US":            `%{MONTHNUM}[/-]%{MONTHDAY}[/-]%{YEAR}`,
	"DATE_EU":            `%{MONTHDAY}[./-]%{MONTHNUM}[./-]%{YEAR}`,
	"ISO8601_TIMEZONE":   `(?:Z|[+-]%{HOUR}(?::?%{MINUTE}))`,
	"ISO8601_SECOND":     `(?:%{SECOND}|60)`,
	"TIMESTAMP_ISO8601":  `%{YEAR}-%{MONTHNUM}-%{MONTHDAY}[T ]%{HOUR}:?%{MINUTE}(?::?%{SECOND})?%{ISO8601_TIMEZONE}?`,
	"DATE":               `%{DATE_US}|%{DATE_EU}`,
	"DATESTAMP":          `%{DATE}[- ]%{TIME}`,
	"TZ":                 `(?:[PMCE][SD]T|UTC)`,
	"DATESTAMP_RFC822":   `%{DAY} %{MONTH} %{MONTHDAY} %{YEAR} %{TIME} %{TZ}`,
	"DATESTAMP_RFC2822":  `%{DAY}, %{MONTHDAY} %{MONTH} %{YEAR} %{TIME} %{ISO8601_TIMEZONE}`,
	"DATESTAMP_OTHER":    `%{DAY} %{MONTH} %{MONTHDAY} %{TIME} %{TZ} %{YEAR}`,
	"DATESTAMP_EVENTLOG": `%{YEAR}%{MONTHNUM2}%{MONTHDAY}%{HOUR}%{MINUTE}%{SECOND}`,
	"HTTPDERROR_DATE":    `%{DAY} %{MONTH} %{MONTHDAY} %{TIME} %{YEAR}`,
	"SYSLOGTIMESTAMP":    `%{MONTH} +%{MONTHDAY} %{TIME}`,
	"PROG":               `[\x21-\x5a\x5c\x5e-\x7e]+`,
	"SYSLOGPROG":         `%{PROG:program}(?:\[%{POSINT:pid}\])?`,
	"SYSLOGHOST":         `%{IPORHOST}`,
	"SYSLOGFACILITY":     `<%{NONNEGINT:facility}.%{NONNEGINT:priority}>`,
	"HTTPDATE":           `%{MONTHDAY}/%{MONTH}/%{YEAR}:%{TIME} %{INT}`,

    // 匹配被字符串包裹的内容
	"QS":                 `%{QUOTEDSTRING}`,

	"SYSLOGBASE":         `%{SYSLOGTIMESTAMP:timestamp} (?:%{SYSLOGFACILITY} )?%{SYSLOGHOST:logsource} %{SYSLOGPROG}:`,

	"COMMONAPACHELOG":    `%{IPORHOST:clientip} %{HTTPDUSER:ident} %{USER:auth} \[%{HTTPDATE:timestamp}\] "(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion})?|%{DATA:rawrequest})" %{NUMBER:response} (?:%{NUMBER:bytes}|-)`,

	"COMBINEDAPACHELOG":  `%{COMMONAPACHELOG} %{QS:referrer} %{QS:agent}`,

	"HTTPD20_ERRORLOG":   `\[%{HTTPDERROR_DATE:timestamp}\] \[%{LOGLEVEL:loglevel}\] (?:\[client %{IPORHOST:clientip}\] ){0,1}%{GREEDYDATA:errormsg}`,

	"HTTPD24_ERRORLOG":   `\[%{HTTPDERROR_DATE:timestamp}\] \[%{WORD:module}:%{LOGLEVEL:loglevel}\] \[pid %{POSINT:pid}:tid %{NUMBER:tid}\]( \(%{POSINT:proxy_errorcode}\)%{DATA:proxy_errormessage}:)?( \[client %{IPORHOST:client}:%{POSINT:clientport}\])? %{DATA:errorcode}: %{GREEDYDATA:message}`,

	"HTTPD_ERRORLOG":     `%{HTTPD20_ERRORLOG}|%{HTTPD24_ERRORLOG}`,
    
	"LOGLEVEL":           `([Aa]lert|ALERT|[Tt]race|TRACE|[Dd]ebug|DEBUG|[Nn]otice|NOTICE|[Ii]nfo|INFO|[Ww]arn?(?:ing)?|WARN?(?:ING)?|[Ee]rr?(?:or)?|ERR?(?:OR)?|[Cc]rit?(?:ical)?|CRIT?(?:ICAL)?|[Ff]atal|FATAL|[Ss]evere|SEVERE|EMERG(?:ENCY)?|[Ee]merg(?:ency)?)`,
}
```