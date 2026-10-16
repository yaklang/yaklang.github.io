# pcapdb {#library-pcapdb}

> 共 38 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pcapdb.ClosePCAPDatabases](#closepcapdatabases) | - | `error` |  |
| [pcapdb.CountPCAPDatabases](#countpcapdatabases) | - | `int64, error` |  |
| [pcapdb.DeletePCAPDatabase](#deletepcapdatabase) | `id string` | `*DeleteResult, error` |  |
| [pcapdb.FingerprintFile](#fingerprintfile) | `filename string` | `*Fingerprint, error` |  |
| [pcapdb.ListPCAPDatabases](#listpcapdatabases) | - | `[]PCAPFileDBMetadata, error` |  |
| [pcapdb.OpenPCAPDatabase](#openpcapdatabase) | `identifier string` | `*Database, error` |  |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pcapdb.EnsureProtocolFieldIndexes](#ensureprotocolfieldindexes) | `identifier string, paths ...string` | `[]ProtocolFieldIndex, error` |  |
| [pcapdb.ExportFromPCAPDatabase](#exportfrompcapdatabase) | `identifier string, outputs ...string` | `string, error` |  |
| [pcapdb.GetOrCreatePCAPDatabase](#getorcreatepcapdatabase) | `filename string, options ...ImportOption` | `*Database, error` |  |
| [pcapdb.ListPCAPDatabasesPage](#listpcapdatabasespage) | `options ...QueryOption` | `*ResultPage[CatalogSummary], error` |  |
| [pcapdb.RebuildPCAPDatabase](#rebuildpcapdatabase) | `identifier string, options ...ImportOption` | `*Database, error` |  |
| [pcapdb.ValidatePCAPDatabase](#validatepcapdatabase) | `identifier string, deep ...bool` | `*ValidationResult, error` |  |

## 函数详情

### ClosePCAPDatabases {#closepcapdatabases}

```go
ClosePCAPDatabases() error
```

暂无描述

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` |  |

---

### CountPCAPDatabases {#countpcapdatabases}

```go
CountPCAPDatabases() (int64, error)
```

暂无描述

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int64` |  |
| r2 | `error` |  |

---

### DeletePCAPDatabase {#deletepcapdatabase}

```go
DeletePCAPDatabase(id string) (*DeleteResult, error)
```

暂无描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*DeleteResult` |  |
| r2 | `error` |  |

---

### FingerprintFile {#fingerprintfile}

```go
FingerprintFile(filename string) (*Fingerprint, error)
```

暂无描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Fingerprint` |  |
| r2 | `error` |  |

---

### ListPCAPDatabases {#listpcapdatabases}

```go
ListPCAPDatabases() ([]PCAPFileDBMetadata, error)
```

暂无描述

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]PCAPFileDBMetadata` |  |
| r2 | `error` |  |

---

### OpenPCAPDatabase {#openpcapdatabase}

```go
OpenPCAPDatabase(identifier string) (*Database, error)
```

暂无描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| identifier | `string` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Database` |  |
| r2 | `error` |  |

---

## 可变参数函数详情

### EnsureProtocolFieldIndexes {#ensureprotocolfieldindexes}

```go
EnsureProtocolFieldIndexes(identifier string, paths ...string) ([]ProtocolFieldIndex, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| identifier | `string` |  |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| paths | `...string` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ProtocolFieldIndex` |  |
| r2 | `error` |  |

---

### ExportFromPCAPDatabase {#exportfrompcapdatabase}

```go
ExportFromPCAPDatabase(identifier string, outputs ...string) (string, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| identifier | `string` |  |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| outputs | `...string` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` |  |
| r2 | `error` |  |

---

### GetOrCreatePCAPDatabase {#getorcreatepcapdatabase}

```go
GetOrCreatePCAPDatabase(filename string, options ...ImportOption) (*Database, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` |  |

**可选参数**

可作为可变参数 `options ...ImportOption` 传入选项；共 6 个可用选项，详见 [ImportOption 选项列表](#option-importoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Database` |  |
| r2 | `error` |  |

---

### ListPCAPDatabasesPage {#listpcapdatabasespage}

```go
ListPCAPDatabasesPage(options ...QueryOption) (*ResultPage[CatalogSummary], error)
```

暂无描述

**可选参数**

可作为可变参数 `options ...QueryOption` 传入选项；共 20 个可用选项，详见 [QueryOption 选项列表](#option-queryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ResultPage[CatalogSummary]` |  |
| r2 | `error` |  |

---

### RebuildPCAPDatabase {#rebuildpcapdatabase}

```go
RebuildPCAPDatabase(identifier string, options ...ImportOption) (*Database, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| identifier | `string` |  |

**可选参数**

可作为可变参数 `options ...ImportOption` 传入选项；共 6 个可用选项，详见 [ImportOption 选项列表](#option-importoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Database` |  |
| r2 | `error` |  |

---

### ValidatePCAPDatabase {#validatepcapdatabase}

```go
ValidatePCAPDatabase(identifier string, deep ...bool) (*ValidationResult, error)
```

暂无描述

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| identifier | `string` |  |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| deep | `...bool` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ValidationResult` |  |
| r2 | `error` |  |

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ImportOption {#option-importoption}

涉及到的函数有：[pcapdb.GetOrCreatePCAPDatabase](#getorcreatepcapdatabase)、[pcapdb.RebuildPCAPDatabase](#rebuildpcapdatabase)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `pcapdb.onProgress` | `callback func(Progress)` | `ImportOption` | The callback runs synchronously. It may inspect/list the catalog, but must not |
| `pcapdb.withBatchSize` | `size int` | `ImportOption` |  |
| `pcapdb.withContext` | `ctx context.Context` | `ImportOption` |  |
| `pcapdb.withFieldIndex` | `path string` | `ImportOption` | creates a scalar expression index for one frequently searched |
| `pcapdb.withProtocols` | `enabled bool` | `ImportOption` | enables BIN Parser messages and full structured JSONB fields. |
| `pcapdb.withStreams` | `enabled bool` | `ImportOption` | controls session indexing and bounded TCP/datagram stream BLOBs. |

### 2. 类型：QueryOption {#option-queryoption}

涉及到的函数有：[pcapdb.ListPCAPDatabasesPage](#listpcapdatabasespage)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `pcapdb.after` | `id int64` | `QueryOption` |  |
| `pcapdb.destinationIP` | `value string` | `QueryOption` |  |
| `pcapdb.destinationPort` | `value int` | `QueryOption` |  |
| `pcapdb.field` | `path string, value any` | `QueryOption` | QueryField matches a typed scalar at a SQLite JSON path. Repeated options |
| `pcapdb.fieldExists` | `path string` | `QueryOption` | QueryFieldExists matches any present JSON value, including null and containers. |
| `pcapdb.fieldMissing` | `path string` | `QueryOption` | QueryFieldMissing matches an absent path, separately from an explicit JSON null. |
| `pcapdb.flow` | `id int64` | `QueryOption` |  |
| `pcapdb.limit` | `limit int` | `QueryOption` |  |
| `pcapdb.maxBytes` | `size int` | `QueryOption` | QueryMaxBytes caps ReadStream&#39;s response. One complete stored chunk must fit. |
| `pcapdb.previewBytes` | `size int` | `QueryOption` | QueryPreviewBytes bounds raw BLOB previews (512 bytes by default). Complete |
| `pcapdb.protocol` | `value string` | `QueryOption` |  |
| `pcapdb.queryContext` | `ctx context.Context` | `QueryOption` |  |
| `pcapdb.resultBytes` | `size int` | `QueryOption` | QueryResultBytes bounds the complete JSON envelope, including escaping and |
| `pcapdb.session` | `id uint` | `QueryOption` | QuerySession/QueryStream select indexed associations, not endpoint guesses. |
| `pcapdb.sourceIP` | `value string` | `QueryOption` |  |
| `pcapdb.sourcePort` | `value int` | `QueryOption` |  |
| `pcapdb.stream` | `id uint` | `QueryOption` |  |
| `pcapdb.timeRange` | `start int64, end int64` | `QueryOption` |  |
| `pcapdb.transport` | `value string` | `QueryOption` |  |
| `pcapdb.withFields` | `enabled bool` | `QueryOption` | QueryWithFields opts into decoding message fields and session snapshots. |

