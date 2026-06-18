# __global__


|成员函数|函数描述/介绍|
|:------|:--------|
 | [append](#append) |  |
 | [assert](#assert) |  |
 | [assertEmpty](#assertempty) |  |
 | [assertTrue](#asserttrue) |  |
 | [assertf](#assertf) |  |
 | [atoi](#atoi) |  |
 | [cap](#cap) |  |
 | [chr](#chr) |  |
 | [close](#close) |  |
 | [copy](#copy) |  |
 | [date](#date) |  |
 | [datetime](#datetime) |  |
 | [datetimeToTimestamp](#datetimetotimestamp) |  |
 | [delete](#delete) |  |
 | [desc](#desc) |  |
 | [descStr](#descstr) |  |
 | [die](#die) |  |
 | [dump](#dump) |  |
 | [eval](#eval) |  |
 | [fail](#fail) |  |
 | [fprintln](#fprintln) |  |
 | [get](#get) |  |
 | [getScopeInspects](#getscopeinspects) |  |
 | [import](#import) |  |
 | [input](#input) |  |
 | [isEmpty](#isempty) |  |
 | [len](#len) |  |
 | [logdiscard](#logdiscard) |  |
 | [loglevel](#loglevel) |  |
 | [logquiet](#logquiet) |  |
 | [logrecover](#logrecover) |  |
 | [make](#make) |  |
 | [mapFrom](#mapfrom) |  |
 | [mapOf](#mapof) |  |
 | [max](#max) |  |
 | [min](#min) |  |
 | [mkmap](#mkmap) |  |
 | [mkslice](#mkslice) |  |
 | [nanotimestamp](#nanotimestamp) |  |
 | [now](#now) |  |
 | [ord](#ord) |  |
 | [panic](#panic) |  |
 | [panicf](#panicf) |  |
 | [parseBool](#parsebool) |  |
 | [parseBoolean](#parseboolean) |  |
 | [parseFloat](#parsefloat) |  |
 | [parseInt](#parseint) |  |
 | [parseStr](#parsestr) |  |
 | [parseString](#parsestring) |  |
 | [parseTime](#parsetime) |  |
 | [print](#print) |  |
 | [printf](#printf) |  |
 | [println](#println) |  |
 | [randn](#randn) |  |
 | [randstr](#randstr) |  |
 | [sdump](#sdump) |  |
 | [set](#set) |  |
 | [sleep](#sleep) |  |
 | [slice](#slice) |  |
 | [sliceOf](#sliceof) |  |
 | [sprint](#sprint) |  |
 | [sprintf](#sprintf) |  |
 | [sprintln](#sprintln) |  |
 | [sub](#sub) |  |
 | [tick1s](#tick1s) |  |
 | [timestamp](#timestamp) |  |
 | [timestampToDatetime](#timestamptodatetime) |  |
 | [timestampToTime](#timestamptotime) |  |
 | [typeof](#typeof) |  |
 | [uuid](#uuid) |  |
 | [wait](#wait) |  |
 | [yakfmt](#yakfmt) |  |
 | [yakfmtWithError](#yakfmtwitherror) |  |
 | [yakit_output](#yakit_output) |  |
 | [yakit_save](#yakit_save) |  |
 | [yakit_status](#yakit_status) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`bool`|`builtin.tyBool`| //|
|`byte`|`builtin.tyUint8`| //|
|`false`|`bool`| //|
|`float`|`builtin.tyFloat64`| //|
|`float32`|`builtin.tyFloat32`| //|
|`float64`|`builtin.tyFloat64`| //|
|`int`|`builtin.tyInt`| //|
|`int16`|`builtin.tyInt16`| //|
|`int32`|`builtin.tyInt32`| //|
|`int64`|`builtin.tyInt64`| //|
|`int8`|`builtin.tyInt8`| //|
|`sliceFrom`|`builtin.goSliceFrom`| //|
|`string`|`builtin.tyString`| //|
|`true`|`bool`| //|
|`type`|`builtin.goTypeOf`| //|
|`uint`|`builtin.tyUint`| //|
|`uint16`|`builtin.tyUint16`| //|
|`uint32`|`builtin.tyUint32`| //|
|`uint64`|`builtin.tyUint64`| //|
|`uint8`|`builtin.tyUint8`| //|
|`undefined`|`*spec.undefinedType`| //|
|`var`|`builtin.tyVar`| //|





## 函数定义

### append



#### 详细描述



#### 定义：

`append(a any, vals ...any) (ret any)  doc:Append does append(a, vals...)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### assert



#### 详细描述



#### 定义：

`assert(b bool, reason ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |
| v2 | `...any` |   |




 

 
### assertEmpty



#### 详细描述



#### 定义：

`assertEmpty(any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### assertTrue



#### 详细描述



#### 定义：

`assertTrue(b bool, reason ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |
| v2 | `...any` |   |




 

 
### assertf



#### 详细描述



#### 定义：

`assertf(bool, string, ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |
| v2 | `string` |   |
| v3 | `...any` |   |




 

 
### atoi



#### 详细描述



#### 定义：

`atoi(s string) (int, error)  doc:Atoi is equivalent to ParseInt(s, 10, 0), converted to type int.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### cap



#### 详细描述



#### 定义：

`cap(a any) int  doc:Cap returns capacity of a collection object. object can be a slice, an array or a chan.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### chr



#### 详细描述



#### 定义：

`chr(any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### close



#### 详细描述



#### 定义：

`close(v any)  doc:close channel`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### copy



#### 详细描述



#### 定义：

`copy(a, b any) int  doc:Copy does copy(a, b).`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### date



#### 详细描述



#### 定义：

`date() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### datetime



#### 详细描述



#### 定义：

`datetime() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### datetimeToTimestamp



#### 详细描述



#### 定义：

`datetimeToTimestamp(string) (int64, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |
| r1 | `error` |   |


 
### delete



#### 详细描述



#### 定义：

`delete(m any, key any)  doc:Delete deletes a key from map object.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |




 

 
### desc



#### 详细描述



#### 定义：

`desc(i any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### descStr



#### 详细描述



#### 定义：

`descStr(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### die



#### 详细描述



#### 定义：

`die(err any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### dump



#### 详细描述



#### 定义：

`dump(...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |




 

 
### eval



#### 详细描述



#### 定义：

``func eval(v1: context.Context, v2: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |
| v2 | `string` |   |




 

 
### fail



#### 详细描述



#### 定义：

`fail(msg ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |




 

 
### fprintln



#### 详细描述



#### 定义：

`fprintln(w io.Writer, a ...any) (n int, err error)  doc:Fprintln formats using the default formats for its operands and writes to w.Spaces are always added between operands and a newline is appended.It returns the number of bytes written and any write error encountered.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Writer` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### get



#### 详细描述



#### 定义：

`get(m any, key any, defaultValues ...any) (result any)  doc:Get gets a value from an object. object can be a slice, an array, a map or a user-defined class.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |
| v3 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### getScopeInspects



#### 详细描述



#### 定义：

`func getScopeInspects() return (r0: []*antlr4yak.ScopeValue, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*antlr4yak.ScopeValue` |   |
| r1 | `error` |   |


 
### import



#### 详细描述



#### 定义：

`import(file string, exportsName string) (any, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |
| r1 | `error` |   |


 
### input



#### 详细描述



#### 定义：

`func input(v1 ...string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### isEmpty



#### 详细描述



#### 定义：

`isEmpty(any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### len



#### 详细描述



#### 定义：

`len(a any) int  doc:Len returns length of a collection object. object can be a slice, an array, a map, a string or a chan.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### logdiscard



#### 详细描述



#### 定义：

`logdiscard()`

 

 

 
### loglevel



#### 详细描述



#### 定义：

`loglevel(i any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### logquiet



#### 详细描述



#### 定义：

`logquiet()`

 

 

 
### logrecover



#### 详细描述



#### 定义：

`logrecover()`

 

 

 
### make



#### 详细描述



#### 定义：

`make(typ yaksepc.GoTyper, args ...int) any  doc:Make creates a instance of yaksepc builtin type (slice, map and chan)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `spec.GoTyper` |   |
| v2 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### mapFrom



#### 详细描述



#### 定义：

`mapFrom(args ...any) any  doc:MapFrom creates a map from args.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### mapOf



#### 详细描述



#### 定义：

`mapOf(key, val any) any  doc:MapOf makes a map type.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### max



#### 详细描述



#### 定义：

`max(args ...any) (max any)  doc:Max returns max(a1, a2, ...)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### min



#### 详细描述



#### 定义：

`min(args ...any) (min any)  doc:Min returns min(a1, a2, ...)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### mkmap



#### 详细描述



#### 定义：

`mkmap(typ any, n ...int) any  doc:Mkmap makes a new map object.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### mkslice



#### 详细描述



#### 定义：

`mkslice(typ any, args ...any) any  doc:Mkslice returns a new slice.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nanotimestamp



#### 详细描述



#### 定义：

`nanotimestamp() int64`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |


 
### now



#### 详细描述



#### 定义：

`now() time.Time`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### ord



#### 详细描述



#### 定义：

`ord(any) int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### panic



#### 详细描述



#### 定义：

`panic(v any)  doc:Panic panics with v.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### panicf



#### 详细描述



#### 定义：

`panicf(format string, args ...any)  doc:Panicf panics with sprintf(format, args...).`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |




 

 
### parseBool



#### 详细描述



#### 定义：

`parseBool(i any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### parseBoolean



#### 详细描述



#### 定义：

`parseBoolean(i any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### parseFloat



#### 详细描述



#### 定义：

`parseFloat(s string) float64`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `float64` |   |


 
### parseInt



#### 详细描述



#### 定义：

`parseInt(s string) int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### parseStr



#### 详细描述



#### 定义：

`parseStr(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### parseString



#### 详细描述



#### 定义：

`parseString(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### parseTime



#### 详细描述



#### 定义：

`parseTime(string, string) (time.Time, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### print



#### 详细描述



#### 定义：

`print(a ...any) (n int, err error)  doc:Print formats using the default formats for its operands and writes to standard output.Spaces are added between operands when neither is a string.It returns the number of bytes written and any write error encountered.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### printf



#### 详细描述



#### 定义：

`printf(format string, a ...any) (n int, err error)  doc:Printf formats according to a format specifier and writes to standard output.It returns the number of bytes written and any write error encountered.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### println



#### 详细描述



#### 定义：

`println(a ...any) (n int, err error)  doc:Println formats using the default formats for its operands and writes to standard output.Spaces are always added between operands and a newline is appended.It returns the number of bytes written and any write error encountered.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### randn



#### 详细描述



#### 定义：

`randn(int, int) int`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### randstr



#### 详细描述



#### 定义：

`randstr(int) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### sdump



#### 详细描述



#### 定义：

`sdump(...any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### set



#### 详细描述



#### 定义：

`set(m any, args ...any)  doc:Set sets (index, value) pairs to an object. object can be a slice, an array, a map or a user-defined class.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |




 

 
### sleep



#### 详细描述



#### 定义：

`sleep(i float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |




 

 
### slice



#### 详细描述



#### 定义：

`slice(typ any, args ...any) any  doc:Mkslice returns a new slice.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### sliceOf



#### 详细描述



#### 定义：

`sliceOf(typ any) any  doc:SliceOf makes a slice type.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### sprint



#### 详细描述



#### 定义：

`sprint(a ...any) string  doc:Sprint formats using the default formats for its operands and returns the resulting string.Spaces are added between operands when neither is a string.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### sprintf



#### 详细描述



#### 定义：

`sprintf(format string, a ...any) string  doc:Sprintf formats according to a format specifier and returns the resulting string.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### sprintln



#### 详细描述



#### 定义：

`sprintln(a ...any) string  doc:Sprintln formats using the default formats for its operands and returns the resulting string.Spaces are always added between operands and a newline is appended.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### sub



#### 详细描述



#### 定义：

`sub(a, i, j any) any  doc:SubSlice returns a[i:j]. if i == nil it returns a[:j]. if j == nil it returns a[i:].`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### tick1s



#### 详细描述



#### 定义：

`tick1s(f func() bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func () return(bool) ` |   |




 

 
### timestamp



#### 详细描述



#### 定义：

`timestamp() int64`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |


 
### timestampToDatetime



#### 详细描述



#### 定义：

`timestampToDatetime(int64) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### timestampToTime



#### 详细描述



#### 定义：

`timestampToTime(int64) time.Time`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### typeof



#### 详细描述



#### 定义：

`typeof(any) reflect.Type`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `reflect.Type` |   |


 
### uuid



#### 详细描述



#### 定义：

`uuid() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### wait



#### 详细描述



#### 定义：

`wait(any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakfmt



#### 详细描述



#### 定义：

`func yakfmt(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakfmtWithError



#### 详细描述



#### 定义：

`func yakfmtWithError(v1: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### yakit_output



#### 详细描述



#### 定义：

``func yakit_output(v1 ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |




 

 
### yakit_save



#### 详细描述



#### 定义：

``func yakit_save(v1 ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |




 

 
### yakit_status



#### 详细描述



#### 定义：

``func yakit_status(v1 ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |




 

 


