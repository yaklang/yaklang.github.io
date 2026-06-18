# yaml

|函数名|函数描述/介绍|
|:------|:--------|
| [yaml.Marshal](#marshal) |Marshal serializes the value provided into a YAML document. The structure of the generated document will reflect the structure of the value itself. Ma...|
| [yaml.Unmarshal](#unmarshal) ||
| [yaml.UnmarshalStrict](#unmarshalstrict) ||


## 函数定义
### Marshal

#### 详细描述
Marshal serializes the value provided into a YAML document. The structure
of the generated document will reflect the structure of the value itself.
Maps and pointers (to struct, string, int, etc) are accepted as the in value.

Struct fields are only marshalled if they are exported (have an upper case
first letter), and are marshalled using the field name lowercased as the
default key. Custom keys may be defined via the &#34;yaml&#34; name in the field
tag: the content preceding the first comma is used as the key, and the
following comma-separated options are used to tweak the marshalling process.
Conflicting names result in a runtime error.

The field tag format accepted is:

    `(...) yaml:&#34;[&lt;key&gt;][,&lt;flag1&gt;[,&lt;flag2&gt;]]&#34; (...)`

The following flags are currently supported:

    omitempty    Only include the field if it&#39;s not set to the zero
                 value for the type or to empty slices or maps.
                 Zero valued structs will be omitted if all their public
                 fields are zero, unless they implement an IsZero
                 method (see the IsZeroer interface type), in which
                 case the field will be excluded if IsZero returns true.

    flow         Marshal using a flow style (useful for structs,
                 sequences and maps).

    inline       Inline the field, which must be a struct or a map,
                 causing all of its fields or keys to be processed as if
                 they were part of the outer struct. For maps, keys must
                 not conflict with the yaml keys of other struct fields.

In addition, if the key is &#34;-&#34;, the field is ignored.

For example:

    type T struct {
        F int `yaml:&#34;a,omitempty&#34;`
        B int
    }
    yaml.Marshal(&amp;T{B: 2}) // Returns &#34;b: 2\n&#34;
    yaml.Marshal(&amp;T{F: 1}} // Returns &#34;a: 1\nb: 0\n&#34;


#### 定义

`Marshal(in any) (out []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| out | `[]byte` |   |
| err | `error` |   |


### Unmarshal

#### 详细描述


#### 定义

`Unmarshal(b []byte) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |
| r2 | `error` |   |


### UnmarshalStrict

#### 详细描述


#### 定义

`UnmarshalStrict(b []byte) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |
| r2 | `error` |   |


