# json


|成员函数|函数描述/介绍|
|:------|:--------|
 | [json.ExtractJSON](#jsonextractjson) |  |
 | [json.ExtractJSONEx](#jsonextractjsonex) |  |
 | [json.Find](#jsonfind) |  |
 | [json.FindPath](#jsonfindpath) |  |
 | [json.Marshal](#jsonmarshal) |  |
 | [json.New](#jsonnew) |  |
 | [json.ReplaceAll](#jsonreplaceall) |  |
 | [json.dumps](#jsondumps) | 把一个任何Yak/Golang对象解析为 string |
 | [json.loads](#jsonloads) | 把一个JSON字符串解析成Yak对象，要注意参数支持 string 或 bytes |




 



## 函数定义

### json.ExtractJSON



#### 详细描述



#### 定义：

`ExtractJSON(raw string) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### json.ExtractJSONEx



#### 详细描述



#### 定义：

`ExtractJSONEx(raw string) (results []string, rawStr []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |
| r1 | `[]string` |   |


 
### json.Find



#### 详细描述



#### 定义：

`Find(j any, jpath string) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### json.FindPath



#### 详细描述



#### 定义：

`FindPath(j any, jpath string) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### json.Marshal



#### 详细描述



#### 定义：

`Marshal(v any) ([]byte, error)  doc:Marshal returns the JSON encoding of v.Marshal traverses the value v recursively.If an encountered value implements the Marshaler interfaceand is not a nil pointer, Marshal calls its MarshalJSON methodto produce JSON. If no MarshalJSON method is present but thevalue implements encoding.TextMarshaler instead, Marshal callsits MarshalText method and encodes the result as a JSON string.The nil pointer exception is not strictly necessarybut mimics a similar, necessary exception in the behavior ofUnmarshalJSON.Otherwise, Marshal uses the following type-dependent default encodings:Boolean values encode as JSON booleans.Floating point, integer, and Number values encode as JSON numbers.String values encode as JSON strings coerced to valid UTF-8,replacing invalid bytes with the Unicode replacement rune.So that the JSON will be safe to embed inside HTML &lt;script&gt; tags,the string is encoded using HTMLEscape,which replaces &#34;&lt;&#34;, &#34;&gt;&#34;, &#34;&amp;&#34;, U&#43;2028, and U&#43;2029 are escapedto &#34;\u003c&#34;,&#34;\u003e&#34;, &#34;\u0026&#34;, &#34;\u2028&#34;, and &#34;\u2029&#34;.This replacement can be disabled when using an Encoder,by calling SetEscapeHTML(false).Array and slice values encode as JSON arrays, except that[]byte encodes as a base64-encoded string, and a nil sliceencodes as the null JSON value.Struct values encode as JSON objects.Each exported struct field becomes a member of the object, using thefield name as the object key, unless the field is omitted for one of thereasons given below.The encoding of each struct field can be customized by the format stringstored under the &#34;json&#34; key in the struct field&#39;s tag.The format string gives the name of the field, possibly followed by acomma-separated list of options. The name may be empty in order tospecify options without overriding the default field name.The &#34;omitempty&#34; option specifies that the field should be omittedfrom the encoding if the field has an empty value, defined asfalse, 0, a nil pointer, a nil interface value, and any empty array,slice, map, or string.As a special case, if the field tag is &#34;-&#34;, the field is always omitted.Note that a field with name &#34;-&#34; can still be generated using the tag &#34;-,&#34;.Examples of struct field tags and their meanings:  // Field appears in JSON as key &#34;myName&#34;.  Field int `json:&#34;myName&#34;`  // Field appears in JSON as key &#34;myName&#34; and  // the field is omitted from the object if its value is empty,  // as defined above.  Field int `json:&#34;myName,omitempty&#34;`  // Field appears in JSON as key &#34;Field&#34; (the default), but  // the field is skipped if empty.  // Note the leading comma.  Field int `json:&#34;,omitempty&#34;`  // Field is ignored by this package.  Field int `json:&#34;-&#34;`  // Field appears in JSON as key &#34;-&#34;.  Field int `json:&#34;-,&#34;`The &#34;string&#34; option signals that a field is stored as JSON inside aJSON-encoded string. It applies only to fields of string, floating point,integer, or boolean types. This extra level of encoding is sometimes usedwhen communicating with JavaScript programs:   Int64String int64 `json:&#34;,string&#34;`The key name will be used if it&#39;s a non-empty string consisting ofonly Unicode letters, digits, and ASCII punctuation except quotationmarks, backslash, and comma.Anonymous struct fields are usually marshaled as if their inner exported fieldswere fields in the outer struct, subject to the usual Go visibility rules amendedas described in the next paragraph.An anonymous struct field with a name given in its JSON tag is treated ashaving that name, rather than being anonymous.An anonymous struct field of interface type is treated the same as havingthat type as its name, rather than being anonymous.The Go visibility rules for struct fields are amended for JSON whendeciding which field to marshal or unmarshal. If there aremultiple fields at the same level, and that level is the leastnested (and would therefore be the nesting level selected by theusual Go rules), the following extra rules apply:1) Of those fields, if any are JSON-tagged, only tagged fields are considered,even if there are multiple untagged fields that would otherwise conflict.2) If there is exactly one field (tagged or not according to the first rule), that is selected.3) Otherwise there are multiple fields, and all are ignored; no error occurs.Handling of anonymous struct fields is new in Go 1.1.Prior to Go 1.1, anonymous struct fields were ignored. To force ignoring ofan anonymous struct field in both current and earlier versions, give the fielda JSON tag of &#34;-&#34;.Map values encode as JSON objects. The map&#39;s key type must either be astring, an integer type, or implement encoding.TextMarshaler. The map keysare sorted and used as JSON object keys by applying the following rules,subject to the UTF-8 coercion described for string values above:  - keys of any string type are used directly  - encoding.TextMarshalers are marshaled  - integer keys are converted to stringsPointer values encode as the value pointed to.A nil pointer encodes as the null JSON value.Interface values encode as the value contained in the interface.A nil interface value encodes as the null JSON value.Channel, complex, and function values cannot be encoded in JSON.Attempting to encode such a value causes Marshal to returnan UnsupportedTypeError.JSON cannot represent cyclic data structures and Marshal does nothandle them. Passing cyclic structures to Marshal will result inan error.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### json.New



#### 详细描述



#### 定义：

`New(any) (*yaklib.yakJson, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakJson` |   |
| r1 | `error` |   |


 
### json.ReplaceAll



#### 详细描述



#### 定义：

`ReplaceAll(j any, jpath string, replaceValue any) map[string]any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]any` |   |


 
### json.dumps

把一个任何Yak/Golang对象解析为 string

#### 详细描述



#### 定义：

`dumps(raw any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### json.loads

把一个JSON字符串解析成Yak对象，要注意参数支持 string 或 bytes

#### 详细描述



#### 定义：

`loads(raw any) any`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string|[]byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 


