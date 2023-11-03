# json

|成员函数|函数描述/介绍|
|:------|:--------|
| [json.ExtractJSON](#extractjson) ||
| [json.ExtractJSONEx](#extractjsonex) ||
| [json.Find](#find) ||
| [json.FindPath](#findpath) ||
| [json.Marshal](#marshal) |Marshal returns the JSON encoding of v.  Marshal traverses the value v recursively. If an encountered value implements the Marshaler interface and is ...|
| [json.New](#new) ||
| [json.ReplaceAll](#replaceall) ||
| [json.dumps](#dumps) ||
| [json.loads](#loads) ||


## 函数定义
### ExtractJSON

#### 详细描述


#### 定义

`ExtractJSON(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### ExtractJSONEx

#### 详细描述


#### 定义

`ExtractJSONEx(raw string) (results []string, rawStr []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `[]string` |   |
| rawStr | `[]string` |   |


### Find

#### 详细描述


#### 定义

`Find(j any, jpath string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `any` |   |
| jpath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### FindPath

#### 详细描述


#### 定义

`FindPath(j any, jpath string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `any` |   |
| jpath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### Marshal

#### 详细描述
Marshal returns the JSON encoding of v.

Marshal traverses the value v recursively.
If an encountered value implements the Marshaler interface
and is not a nil pointer, Marshal calls its MarshalJSON method
to produce JSON. If no MarshalJSON method is present but the
value implements encoding.TextMarshaler instead, Marshal calls
its MarshalText method and encodes the result as a JSON string.
The nil pointer exception is not strictly necessary
but mimics a similar, necessary exception in the behavior of
UnmarshalJSON.

Otherwise, Marshal uses the following type-dependent default encodings:

Boolean values encode as JSON booleans.

Floating point, integer, and Number values encode as JSON numbers.

String values encode as JSON strings coerced to valid UTF-8,
replacing invalid bytes with the Unicode replacement rune.
So that the JSON will be safe to embed inside HTML &lt;script&gt; tags,
the string is encoded using HTMLEscape,
which replaces "&lt;", "&gt;", "&", U+2028, and U+2029 are escaped
to "\u003c","\u003e", "\u0026", "\u2028", and "\u2029".
This replacement can be disabled when using an Encoder,
by calling SetEscapeHTML(false).

Array and slice values encode as JSON arrays, except that
[]byte encodes as a base64-encoded string, and a nil slice
encodes as the null JSON value.

Struct values encode as JSON objects.
Each exported struct field becomes a member of the object, using the
field name as the object key, unless the field is omitted for one of the
reasons given below.

The encoding of each struct field can be customized by the format string
stored under the "json" key in the struct field's tag.
The format string gives the name of the field, possibly followed by a
comma-separated list of options. The name may be empty in order to
specify options without overriding the default field name.

The "omitempty" option specifies that the field should be omitted
from the encoding if the field has an empty value, defined as
false, 0, a nil pointer, a nil interface value, and any empty array,
slice, map, or string.

As a special case, if the field tag is "-", the field is always omitted.
Note that a field with name "-" can still be generated using the tag "-,".

Examples of struct field tags and their meanings:

	// Field appears in JSON as key "myName".
	Field int `json:"myName"`

	// Field appears in JSON as key "myName" and
	// the field is omitted from the object if its value is empty,
	// as defined above.
	Field int `json:"myName,omitempty"`

	// Field appears in JSON as key "Field" (the default), but
	// the field is skipped if empty.
	// Note the leading comma.
	Field int `json:",omitempty"`

	// Field is ignored by this package.
	Field int `json:"-"`

	// Field appears in JSON as key "-".
	Field int `json:"-,"`

The "string" option signals that a field is stored as JSON inside a
JSON-encoded string. It applies only to fields of string, floating point,
integer, or boolean types. This extra level of encoding is sometimes used
when communicating with JavaScript programs:

	Int64String int64 `json:",string"`

The key name will be used if it's a non-empty string consisting of
only Unicode letters, digits, and ASCII punctuation except quotation
marks, backslash, and comma.

Anonymous struct fields are usually marshaled as if their inner exported fields
were fields in the outer struct, subject to the usual Go visibility rules amended
as described in the next paragraph.
An anonymous struct field with a name given in its JSON tag is treated as
having that name, rather than being anonymous.
An anonymous struct field of interface type is treated the same as having
that type as its name, rather than being anonymous.

The Go visibility rules for struct fields are amended for JSON when
deciding which field to marshal or unmarshal. If there are
multiple fields at the same level, and that level is the least
nested (and would therefore be the nesting level selected by the
usual Go rules), the following extra rules apply:

1) Of those fields, if any are JSON-tagged, only tagged fields are considered,
even if there are multiple untagged fields that would otherwise conflict.

2) If there is exactly one field (tagged or not according to the first rule), that is selected.

3) Otherwise there are multiple fields, and all are ignored; no error occurs.

Handling of anonymous struct fields is new in Go 1.1.
Prior to Go 1.1, anonymous struct fields were ignored. To force ignoring of
an anonymous struct field in both current and earlier versions, give the field
a JSON tag of "-".

Map values encode as JSON objects. The map's key type must either be a
string, an integer type, or implement encoding.TextMarshaler. The map keys
are sorted and used as JSON object keys by applying the following rules,
subject to the UTF-8 coercion described for string values above:
  - keys of any string type are used directly
  - encoding.TextMarshalers are marshaled
  - integer keys are converted to strings

Pointer values encode as the value pointed to.
A nil pointer encodes as the null JSON value.

Interface values encode as the value contained in the interface.
A nil interface value encodes as the null JSON value.

Channel, complex, and function values cannot be encoded in JSON.
Attempting to encode such a value causes Marshal to return
an UnsupportedTypeError.

JSON cannot represent cyclic data structures and Marshal does not
handle them. Passing cyclic structures to Marshal will result in
an error.


#### 定义

`Marshal(v any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### New

#### 详细描述


#### 定义

`New(i any) (*yakJson, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakJson` |   |
| r2 | `error` |   |


### ReplaceAll

#### 详细描述


#### 定义

`ReplaceAll(j any, jpath string, replaceValue any) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `any` |   |
| jpath | `string` |   |
| replaceValue | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


### dumps

#### 详细描述


#### 定义

`dumps(raw any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### loads

#### 详细描述


#### 定义

`loads(raw any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


