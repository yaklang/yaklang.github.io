# rag {#library-rag}

`rag` 库是检索增强生成（Retrieval-Augmented Generation）的完整实现，提供知识库构建、文本向量化（Embedding）、向量存储与语义检索能力，让 AI 能基于私有知识作答。它内置 HNSW 向量索引、实体关系建模与知识图谱（k-hop）检索。

典型使用场景：

- 构建知识库：`rag.BuildCollectionFromFile` / `rag.BuildCollectionFromRaw` / `rag.BuildCollectionFromReader` 从文件/内容构建集合，`rag.AddDocument` 增量加文档，`rag.BuildIndexKnowledgeFromFile` 建索引。
- 向量化：`rag.Embedding` / `rag.LocalEmbedding` / `rag.OnlineEmbedding` 把文本转向量。
- 检索：`rag.Query` 语义检索，`rag.QueryDocuments` 在指定知识库检索，`rag.DBQueryKnowledge` / `rag.DBQueryEntity` 直查知识/实体；配 `rag.queryLimit` / `rag.querySimilarityThreshold` / `rag.khopk` 等调参。
- 管理：`rag.ListCollection` / `rag.GetCollection` / `rag.DeleteCollection` / `rag.Export` / `rag.Import` 管理集合。

与相邻库的关系：`rag` 是知识层，与 `ai`/`liteforge`（模型与 Embedding 来源）、`aiagent`/`aim`（把知识库作为工具挂载）、`aireducer`（长文分块）协同，构成"带私有知识的 AI"能力。

> 共 99 个函数、5 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| QUERY_ENHANCE_TYPE_BASIC | `string` | &#34;basic&#34; |
| QUERY_ENHANCE_TYPE_EXACT_KEYWORD_SEARCH | `string` | &#34;exact_keyword_search&#34; |
| QUERY_ENHANCE_TYPE_GENERALIZE_QUERY | `string` | &#34;generalize_query&#34; |
| QUERY_ENHANCE_TYPE_HYPOTHETICAL_ANSWER | `string` | &#34;hypothetical_answer&#34; |
| QUERY_ENHANCE_TYPE_SPLIT_QUERY | `string` | &#34;split_query&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rag.DeleteAllKnowledgeBase](#deleteallknowledgebase) | - | `error` | _deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容 |
| [rag.DeleteCollection](#deletecollection) | `name string` | `error` | _deleteCollection 删除指定的 RAG 集合 |
| [rag.DeleteKnowledgeBase](#deleteknowledgebase) | `name string` | `error` | _deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容 |
| [rag.DeleteRAG](#deleterag) | `name string` | `error` | _deleteRAG 删除指定的 RAG 系统 |
| [rag.Embedding](#embedding) | `text string` | `[]float32, error` | _embedding 生成文本的嵌入向量 |
| [rag.EnableMockMode](#enablemockmode) | - | - | _enableMockMode 启用模拟模式（使用 mock 嵌入服务，便于测试） |
| [rag.GetCollectionInfo](#getcollectioninfo) | `name string` | `*vectorstore.CollectionInfo, error` | _getCollectionInfo 获取指定集合的详细信息 |
| [rag.HasCollection](#hascollection) | `name string` | `bool` | _hasCollection 检查指定集合是否存在 |
| [rag.ListCollection](#listcollection) | - | `[]string` | _listCollection 获取所有 RAG 集合列表 |
| [rag.ListRAG](#listrag) | - | `[]string` | _listRAG 列出所有 RAG 系统列表 |
| [rag.LocalEmbedding](#localembedding) | `text string` | `[]float32, error` | _localEmbedding 使用本地嵌入服务生成文本的向量表示 |
| [rag.NewRagDatabase](#newragdatabase) | `path string` | `*gorm.DB, error` | NewVectorStoreDatabase 在指定路径创建（或打开）一个向量存储数据库（导出名为 rag.NewRagDatabase） |
| [rag.NewTempRagDatabase](#newtempragdatabase) | - | `*gorm.DB, error` | _newTempRagDatabase 创建临时 RAG 数据库 |
| [rag.OnlineEmbedding](#onlineembedding) | `text string` | `[]float32, error` | _onlineEmbedding 使用在线嵌入服务生成文本的向量表示 |
| [rag.analyzeConcurrency](#analyzeconcurrency) | `concurrency int` | `AnalysisOption` | 控制知识构建分析的并发数（在 rag 中导出名为 rag.analyzeConcurrency） |
| [rag.chunkSize](#chunksize) | `size int64` | `Option` | 设置文本分块的大小（在 rag 中导出名为 rag.chunkSize），单位为字符数 |
| [rag.ctx](#ctx) | `ctx context.Context` | `AnalysisOption` | WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx） |
| [rag.disableERM](#disableerm) | `disable bool` | `RefineOption` | 是否禁用实体关系模型（ERM）构建（在 rag 中导出名为 rag.disableERM） |
| [rag.disableIndex](#disableindex) | `disable bool` | `RefineOption` | 是否禁用知识索引构建（在 rag 中导出名为 rag.disableIndex） |
| [rag.entryLength](#entrylength) | `length int` | `RefineOption` | RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength） |
| [rag.extraPrompt](#extraprompt) | `prompt string` | `AnalysisOption` | WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt） |
| [rag.getEntityFilter](#getentityfilter) | `reposName string, entityTypes []string, names []string, HiddenIndex []string, keywords []string` | `*ypb.EntityFilter` | 构建一个实体过滤器（在 rag 中导出名为 rag.getEntityFilter），用于 k-hop 查询等场景 |
| [rag.log](#log) | `handler func(format string, args ...any)` | `AnalysisOption` | WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog） |
| [rag.statusCard](#statuscard) | `handler func(id string, data any, tags ...string)` | `AnalysisOption` | WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rag.AddDocument](#adddocument) | `knowledgeBaseName string, documentName string, document string, metadata map[string]any, opts ...rag.RAGSystemConfigOption` | `error` | _addDocument 向指定集合添加文档 |
| [rag.BuildCollectionFromFile](#buildcollectionfromfile) | `kbName string, path string, option ...any` | `<-chan *schema.KnowledgeBaseEntry, error` | BuildKnowledgeFromFile 使用 AI 分析文件内容并构建知识库（导出名为 rag.BuildCollectionFromFile） |
| [rag.BuildCollectionFromRaw](#buildcollectionfromraw) | `kbName string, content []byte, option ...any` | `<-chan *schema.KnowledgeBaseEntry, error` | BuildKnowledgeFromBytes 使用 AI 分析字节内容并构建知识库（导出名为 rag.BuildCollectionFromRaw） |
| [rag.BuildCollectionFromReader](#buildcollectionfromreader) | `kbName string, reader io.Reader, option ...any` | `<-chan *schema.KnowledgeBaseEntry, error` | BuildKnowledgeFromReader 使用 AI 分析 reader 内容并构建知识库（导出名为 rag.BuildCollectionFromReader） |
| [rag.BuildIndexKnowledgeFromFile](#buildindexknowledgefromfile) | `kbName string, path string, option ...any` | `error` | 从文件构建带索引的知识库条目（导出名为 rag.BuildIndexKnowledgeFromFile） |
| [rag.BuildKnowledgeFromEntityRepos](#buildknowledgefromentityrepos) | `name string, option ...any` | `<-chan *schema.KnowledgeBaseEntry, error` | BuildKnowledgeFromEntityReposByName 基于已有的实体仓库构建知识库（导出名为 rag.BuildKnowledgeFromEntityRepos） |
| [rag.BuildSearchIndexKnowledge](#buildsearchindexknowledge) | `kbName string, text string, option ...any` | `*aiforge.SearchIndexResult, error` | builds a search index for the given text content. |
| [rag.BuildSearchIndexKnowledgeFromFile](#buildsearchindexknowledgefromfile) | `kbName string, filename string, option ...any` | `*aiforge.SearchIndexResult, error` | builds a search index from a file. |
| [rag.DBQueryCountVectorsByEntry](#dbquerycountvectorsbyentry) | `entryID string, opts ...DBQueryOption` | `int, error` | _dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量 |
| [rag.DBQueryEntity](#dbqueryentity) | `keyword string, opts ...DBQueryOption` | `[]*schema.ERModelEntity, error` | _dbQueryEntity 数据库直接查询实体 |
| [rag.DBQueryKnowledge](#dbqueryknowledge) | `keyword string, opts ...DBQueryOption` | `[]*schema.KnowledgeBaseEntry, error` | _dbQueryKnowledge 数据库直接查询知识库条目 |
| [rag.DBQueryKnowledgeExists](#dbqueryknowledgeexists) | `keyword string, opts ...DBQueryOption` | `*DBQueryKnowledgeExistsResult, error` | _dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引 |
| [rag.DBQueryUniqueKnowledgeTitles](#dbqueryuniqueknowledgetitles) | `opts ...DBQueryOption` | `[]string, error` | _dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表 |
| [rag.DBQueryVectorDocument](#dbqueryvectordocument) | `keyword string, opts ...DBQueryOption` | `[]*schema.VectorStoreDocument, error` | _dbQueryVectorDocument 数据库直接查询向量文档 |
| [rag.DeleteDocument](#deletedocument) | `knowledgeBaseName string, documentName string, opts ...rag.RAGSystemConfigOption` | `error` | _deleteDocument 从指定集合删除文档 |
| [rag.Export](#export) | `collectionName string, fileName string, opts ...RAGSystemConfigOption` | `error` | ExportRAG 将指定 RAG 集合导出为 .rag 二进制文件（导出名为 rag.Export） |
| [rag.Get](#get) | `name string, opts ...RAGSystemConfigOption` | `*RAGSystem, error` | GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection） |
| [rag.GetCollection](#getcollection) | `name string, opts ...RAGSystemConfigOption` | `*RAGSystem, error` | GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection） |
| [rag.Import](#import) | `inputPath string, optFuncs ...RAGSystemConfigOption` | `error` | ImportRAG 从 .rag 二进制文件导入 RAG 集合到数据库（导出名为 rag.Import） |
| [rag.Query](#query) | `query string, opts ...rag.RAGSystemConfigOption` | `<-chan *rag.RAGSearchResult, error` | _query 统一的查询/搜索接口 |
| [rag.QueryDocuments](#querydocuments) | `knowledgeBaseName string, query string, limit int, opts ...rag.RAGSystemConfigOption` | `[]*rag.SearchResult, error` | _queryDocuments 在指定集合中查询文档 |

## 函数详情

### DeleteAllKnowledgeBase {#deleteallknowledgebase}

```go
DeleteAllKnowledgeBase() error
```

_deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容

清空所有: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = rag.DeleteAllKnowledgeBase()
``````````````

---

### DeleteCollection {#deletecollection}

```go
DeleteCollection(name string) error
```

_deleteCollection 删除指定的 RAG 集合

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 集合名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = rag.DeleteCollection("my_collection")
``````````````

---

### DeleteKnowledgeBase {#deleteknowledgebase}

```go
DeleteKnowledgeBase(name string) error
```

_deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容

包括: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 知识库名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = rag.DeleteKnowledgeBase("my_knowledge_base")
``````````````

---

### DeleteRAG {#deleterag}

```go
DeleteRAG(name string) error
```

_deleteRAG 删除指定的 RAG 系统

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | RAG 系统名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = rag.DeleteRAG("my_rag")
``````````````

---

### Embedding {#embedding}

```go
Embedding(text string) ([]float32, error)
```

_embedding 生成文本的嵌入向量

使用默认的嵌入服务生成文本的向量表示（优先使用在线服务，回退到本地服务）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| text | `string` | 待嵌入的文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]float32` | 嵌入向量（[]float32） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
result, err = rag.Embedding("你好")
if err != nil {
    // handle error
}
// result is []float32
``````````````

---

### EnableMockMode {#enablemockmode}

```go
EnableMockMode()
```

_enableMockMode 启用模拟模式（使用 mock 嵌入服务，便于测试）

**示例**

``````````````yak
rag.EnableMockMode()
``````````````

---

### GetCollectionInfo {#getcollectioninfo}

```go
GetCollectionInfo(name string) (*vectorstore.CollectionInfo, error)
```

_getCollectionInfo 获取指定集合的详细信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 集合名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*vectorstore.CollectionInfo` | 集合详细信息对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
info, err = rag.GetCollectionInfo("my_collection")
``````````````

---

### HasCollection {#hascollection}

```go
HasCollection(name string) bool
```

_hasCollection 检查指定集合是否存在

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 集合名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否存在 |

**示例**

``````````````yak
exists = rag.HasCollection("my_collection")
``````````````

---

### ListCollection {#listcollection}

```go
ListCollection() []string
```

_listCollection 获取所有 RAG 集合列表

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 集合名称列表 |

**示例**

``````````````yak
collections = rag.ListCollection()
``````````````

---

### ListRAG {#listrag}

```go
ListRAG() []string
```

_listRAG 列出所有 RAG 系统列表

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | RAG 系统名称列表 |

**示例**

``````````````yak
ragSystems = rag.ListRAG()
``````````````

---

### LocalEmbedding {#localembedding}

```go
LocalEmbedding(text string) ([]float32, error)
```

_localEmbedding 使用本地嵌入服务生成文本的向量表示

本地服务需要安装本地模型（如 Qwen3-Embedding-0.6B-Q4_K_M）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| text | `string` | 待嵌入的文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]float32` | 嵌入向量（[]float32，维度 1024） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
result, err = rag.LocalEmbedding("你好")
if err != nil {
    // handle error - 本地服务不可用
}
// result is []float32, dimension: 1024
``````````````

---

### NewRagDatabase {#newragdatabase}

```go
NewRagDatabase(path string) (*gorm.DB, error)
```

NewVectorStoreDatabase 在指定路径创建（或打开）一个向量存储数据库（导出名为 rag.NewRagDatabase）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | sqlite 数据库文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
db = rag.NewRagDatabase("/tmp/my-rag.db")~
``````````````

---

### NewTempRagDatabase {#newtempragdatabase}

```go
NewTempRagDatabase() (*gorm.DB, error)
```

_newTempRagDatabase 创建临时 RAG 数据库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
db, err = rag.NewTempRagDatabase()
``````````````

---

### OnlineEmbedding {#onlineembedding}

```go
OnlineEmbedding(text string) ([]float32, error)
```

_onlineEmbedding 使用在线嵌入服务生成文本的向量表示

使用 AIBalance 免费在线服务，无需安装本地模型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| text | `string` | 待嵌入的文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]float32` | 嵌入向量（[]float32，维度 1024） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
result, err = rag.OnlineEmbedding("你好")
if err != nil {
    // handle error - 在线服务不可用
}
// result is []float32, dimension: 1024
``````````````

---

### analyzeConcurrency {#analyzeconcurrency}

```go
analyzeConcurrency(concurrency int) AnalysisOption
```

控制知识构建分析的并发数（在 rag 中导出名为 rag.analyzeConcurrency）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| concurrency | `int` | 分析并发数（同时处理的分块数量） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析配置选项 |

**示例**

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.analyzeConcurrency(4))~
``````````````

---

### chunkSize {#chunksize}

```go
chunkSize(size int64) Option
```

设置文本分块的大小（在 rag 中导出名为 rag.chunkSize），单位为字符数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| size | `int64` | 每个分块的目标大小 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | 分块器配置选项 |

**示例**

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.chunkSize(1024))~
``````````````

---

### ctx {#ctx}

```go
ctx(ctx context.Context) AnalysisOption
```

WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.analyzeCtx(context.Background())
println(opt)
``````````````

---

### disableERM {#disableerm}

```go
disableERM(disable bool) RefineOption
```

是否禁用实体关系模型（ERM）构建（在 rag 中导出名为 rag.disableERM）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| disable | `bool` | 为 true 时不构建实体仓库/关系图谱 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 精炼配置选项 |

**示例**

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.disableERM(true))~
``````````````

---

### disableIndex {#disableindex}

```go
disableIndex(disable bool) RefineOption
```

是否禁用知识索引构建（在 rag 中导出名为 rag.disableIndex）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| disable | `bool` | 为 true 时不构建知识索引（仅做内容精炼） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 精炼配置选项 |

**示例**

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.disableIndex(true))~
``````````````

---

### entryLength {#entrylength}

```go
entryLength(length int) RefineOption
```

RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| length | `int` | 知识条目长度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.knowledgeEntryLength(512)
println(opt)
``````````````

---

### extraPrompt {#extraprompt}

```go
extraPrompt(prompt string) AnalysisOption
```

WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 额外提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.imageExtraPrompt("focus on the error message in the screenshot")
println(opt)
``````````````

---

### getEntityFilter {#getentityfilter}

```go
getEntityFilter(reposName string, entityTypes []string, names []string, HiddenIndex []string, keywords []string) *ypb.EntityFilter
```

构建一个实体过滤器（在 rag 中导出名为 rag.getEntityFilter），用于 k-hop 查询等场景

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| reposName | `string` | 实体仓库名称 |
| entityTypes | `[]string` | 实体类型列表 |
| names | `[]string` | 实体名称列表 |
| HiddenIndex | `[]string` | 实体的 HiddenIndex 列表 |
| keywords | `[]string` | 关键词列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ypb.EntityFilter` | 实体过滤器对象 |

**示例**

``````````````yak
filter = rag.getEntityFilter("my-repos", ["person"], ["张三"], [], ["登录"])
paths = rag.KHopQuery("my-rag", rag.buildFilter(filter))~
``````````````

---

### log {#log}

```go
log(handler func(format string, args ...any)) AnalysisOption
```

WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(format string, args ...any)` | 日志回调函数，参数为格式化字符串与参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.analyzeLog(func(format, args...) { println(sprintf(format, args...)) })
println(opt)
``````````````

---

### statusCard {#statuscard}

```go
statusCard(handler func(id string, data any, tags ...string)) AnalysisOption
```

WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(id string, data any, tags ...string)` | 状态卡片回调，参数为 (id, data, tags...) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.analyzeStatusCard(func(id, data, tags...) { println(id, data) })
println(opt)
``````````````

---

## 可变参数函数详情

### AddDocument {#adddocument}

```go
AddDocument(knowledgeBaseName string, documentName string, document string, metadata map[string]any, opts ...rag.RAGSystemConfigOption) error
```

_addDocument 向指定集合添加文档

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| knowledgeBaseName | `string` | 知识库/集合名称 |
| documentName | `string` | 文档名称 |
| document | `string` | 文档内容 |
| metadata | `map[string]any` | 文档元数据键值对 |

**可选参数**

可作为可变参数 `opts ...rag.RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = rag.AddDocument("my_collection", "doc1", "content", {"key": "value"})
``````````````

---

### BuildCollectionFromFile {#buildcollectionfromfile}

```go
BuildCollectionFromFile(kbName string, path string, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)
```

BuildKnowledgeFromFile 使用 AI 分析文件内容并构建知识库（导出名为 rag.BuildCollectionFromFile）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 知识库名称 |
| path | `string` | 文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（并发、chunkSize、disableIndex 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
entries = rag.BuildCollectionFromFile("my-kb", "/tmp/doc.txt")~

	for entry := range entries {
	    println(entry.KnowledgeTitle)
	}
``````````````

---

### BuildCollectionFromRaw {#buildcollectionfromraw}

```go
BuildCollectionFromRaw(kbName string, content []byte, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)
```

BuildKnowledgeFromBytes 使用 AI 分析字节内容并构建知识库（导出名为 rag.BuildCollectionFromRaw）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 知识库名称 |
| content | `[]byte` | 待分析的原始字节内容 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（并发、chunkSize、disableIndex 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
entries = rag.BuildCollectionFromRaw("my-kb", []byte("some content"))~
``````````````

---

### BuildCollectionFromReader {#buildcollectionfromreader}

```go
BuildCollectionFromReader(kbName string, reader io.Reader, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)
```

BuildKnowledgeFromReader 使用 AI 分析 reader 内容并构建知识库（导出名为 rag.BuildCollectionFromReader）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 知识库名称 |
| reader | `io.Reader` | 数据源 reader |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（并发、chunkSize、disableIndex 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
f = file.Open("/tmp/doc.txt")~
entries = rag.BuildCollectionFromReader("my-kb", f)~
``````````````

---

### BuildIndexKnowledgeFromFile {#buildindexknowledgefromfile}

```go
BuildIndexKnowledgeFromFile(kbName string, path string, option ...any) error
```

从文件构建带索引的知识库条目（导出名为 rag.BuildIndexKnowledgeFromFile）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 知识库名称 |
| path | `string` | 文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（chunkSize、并发等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库与嵌入服务（示意性示例）
rag.BuildIndexKnowledgeFromFile("my-kb", "/tmp/doc.txt")~
``````````````

---

### BuildKnowledgeFromEntityRepos {#buildknowledgefromentityrepos}

```go
BuildKnowledgeFromEntityRepos(name string, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)
```

BuildKnowledgeFromEntityReposByName 基于已有的实体仓库构建知识库（导出名为 rag.BuildKnowledgeFromEntityRepos）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 实体仓库名称 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（并发、disableIndex 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
entries = rag.BuildKnowledgeFromEntityRepos("my-entity-repo")~
``````````````

---

### BuildSearchIndexKnowledge {#buildsearchindexknowledge}

```go
BuildSearchIndexKnowledge(kbName string, text string, option ...any) (*aiforge.SearchIndexResult, error)
```

builds a search index for the given text content.

It generates 5-10 search questions that users might ask to find this content,

and stores the original content as the knowledge entry.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 知识库名称 |
| text | `string` | 待索引的内容（如工具描述、用法、参数） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（rag 选项、AI 选项等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*aiforge.SearchIndexResult` | 搜索索引结果（含生成的问题列表与 EntryID） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
text = `
工具名：端口扫描器
目标：扫描目标主机的开放端口
用法：指定目标IP和端口范围，工具会返回开放的端口列表
`
result = rag.BuildSearchIndexKnowledge("my-tools", text)~
println("Generated questions:", result.Questions)
``````````````

---

### BuildSearchIndexKnowledgeFromFile {#buildsearchindexknowledgefromfile}

```go
BuildSearchIndexKnowledgeFromFile(kbName string, filename string, option ...any) (*aiforge.SearchIndexResult, error)
```

builds a search index from a file.

It reads the file content and calls BuildSearchIndexKnowledge.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 知识库名称 |
| filename | `string` | 待索引内容所在的文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选配置（rag 选项、AI 选项等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*aiforge.SearchIndexResult` | 搜索索引结果（含生成的问题列表与 EntryID） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
result = rag.BuildSearchIndexKnowledgeFromFile("my-tools", "/path/to/tool-description.txt")~
println("Generated questions:", result.Questions)
``````````````

---

### DBQueryCountVectorsByEntry {#dbquerycountvectorsbyentry}

```go
DBQueryCountVectorsByEntry(entryID string, opts ...DBQueryOption) (int, error)
```

_dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量

用于检查某个知识条目有多少向量索引

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| entryID | `string` | 知识条目的 HiddenIndex |

**可选参数**

可作为可变参数 `opts ...DBQueryOption` 传入选项；共 7 个可用选项，详见 [DBQueryOption 选项列表](#option-dbqueryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 向量文档数量 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
count = rag.DBQueryCountVectorsByEntryID("abc123", rag.dbQueryRAGFilename("/tmp/caps.rag"))~
println("This entry has", count, "vector indexes")
``````````````

---

### DBQueryEntity {#dbqueryentity}

```go
DBQueryEntity(keyword string, opts ...DBQueryOption) ([]*schema.ERModelEntity, error)
```

_dbQueryEntity 数据库直接查询实体

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 搜索关键词 |

**可选参数**

可作为可变参数 `opts ...DBQueryOption` 传入选项；共 7 个可用选项，详见 [DBQueryOption 选项列表](#option-dbqueryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*schema.ERModelEntity` | 实体列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 基本用法
entities = rag.DBQueryEntity("用户")~
for _, entity := range entities {
    println(entity.EntityName, entity.EntityType)
}

// 指定集合
entities = rag.DBQueryEntity("关键词", rag.dbQueryCollection("my-repo"))~

// 从 RAG 文件查询
entities = rag.DBQueryEntity("关键词", rag.dbQueryRAGFilename("/tmp/my.rag"))~
``````````````

---

### DBQueryKnowledge {#dbqueryknowledge}

```go
DBQueryKnowledge(keyword string, opts ...DBQueryOption) ([]*schema.KnowledgeBaseEntry, error)
```

_dbQueryKnowledge 数据库直接查询知识库条目

使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms）

适合去重检查、快速验证等场景

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 搜索关键词 |

**可选参数**

可作为可变参数 `opts ...DBQueryOption` 传入选项；共 7 个可用选项，详见 [DBQueryOption 选项列表](#option-dbqueryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*schema.KnowledgeBaseEntry` | 知识库条目列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 基本用法
entries = rag.DBQueryKnowledge("get_location")~
for _, entry := range entries {
    println(entry.KnowledgeTitle)
}

// 指定集合
entries = rag.DBQueryKnowledge("关键词", rag.dbQueryCollection("my-collection"))~

// 从 RAG 文件查询
entries = rag.DBQueryKnowledge("关键词", rag.dbQueryRAGFilename("/tmp/my.rag"))~

// 分页查询
entries = rag.DBQueryKnowledge("关键词", rag.dbQueryLimit(10), rag.dbQueryOffset(20))~
``````````````

---

### DBQueryKnowledgeExists {#dbqueryknowledgeexists}

```go
DBQueryKnowledgeExists(keyword string, opts ...DBQueryOption) (*DBQueryKnowledgeExistsResult, error)
```

_dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引

这个函数用于增量更新时的去重检查

只有当知识条目存在且有对应的向量文档时，才认为该条目已被完整索引

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 搜索关键词（通常是工具/插件名称） |

**可选参数**

可作为可变参数 `opts ...DBQueryOption` 传入选项；共 7 个可用选项，详见 [DBQueryOption 选项列表](#option-dbqueryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*DBQueryKnowledgeExistsResult` | 检查结果，包含是否存在、知识条目、向量数量等 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
result = rag.DBQueryKnowledgeExists("get_location", rag.dbQueryRAGFilename("/tmp/caps.rag"))~
if result.Exists {
    println("Already indexed with", result.VectorDocCount, "vectors")
}
``````````````

---

### DBQueryUniqueKnowledgeTitles {#dbqueryuniqueknowledgetitles}

```go
DBQueryUniqueKnowledgeTitles(opts ...DBQueryOption) ([]string, error)
```

_dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表

使用 SQL DISTINCT 查询，返回不重复的 KnowledgeTitle 列表

适合增量更新时的快速去重检查

**可选参数**

可作为可变参数 `opts ...DBQueryOption` 传入选项；共 7 个可用选项，详见 [DBQueryOption 选项列表](#option-dbqueryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 唯一的知识标题列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取所有唯一的知识标题
titles = rag.DBQueryUniqueKnowledgeTitles(rag.dbQueryCollection("my-collection"))~
for _, title := range titles {
    println(title)
}

// 从 RAG 文件查询
titles = rag.DBQueryUniqueKnowledgeTitles(rag.dbQueryRAGFilename("/tmp/my.rag"))~
``````````````

---

### DBQueryVectorDocument {#dbqueryvectordocument}

```go
DBQueryVectorDocument(keyword string, opts ...DBQueryOption) ([]*schema.VectorStoreDocument, error)
```

_dbQueryVectorDocument 数据库直接查询向量文档

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 搜索关键词 |

**可选参数**

可作为可变参数 `opts ...DBQueryOption` 传入选项；共 7 个可用选项，详见 [DBQueryOption 选项列表](#option-dbqueryoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*schema.VectorStoreDocument` | 向量文档列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 基本用法
docs = rag.DBQueryVectorDocument("关键词")~
for _, doc := range docs {
    println(doc.DocumentID, doc.Content[:100])
}

// 指定集合
docs = rag.DBQueryVectorDocument("关键词", rag.dbQueryCollection("my-collection"))~

// 从 RAG 文件查询
docs = rag.DBQueryVectorDocument("关键词", rag.dbQueryRAGFilename("/tmp/my.rag"))~
``````````````

---

### DeleteDocument {#deletedocument}

```go
DeleteDocument(knowledgeBaseName string, documentName string, opts ...rag.RAGSystemConfigOption) error
```

_deleteDocument 从指定集合删除文档

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| knowledgeBaseName | `string` | 知识库/集合名称 |
| documentName | `string` | 文档名称 |

**可选参数**

可作为可变参数 `opts ...rag.RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = rag.DeleteDocument("my_collection", "doc1")
``````````````

---

### Export {#export}

```go
Export(collectionName string, fileName string, opts ...RAGSystemConfigOption) error
```

ExportRAG 将指定 RAG 集合导出为 .rag 二进制文件（导出名为 rag.Export）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| collectionName | `string` | 要导出的集合名称 |
| fileName | `string` | 导出文件路径 |

**可选参数**

可作为可变参数 `opts ...RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库（示意性示例）
rag.Export("my-collection", "/tmp/my-collection.rag")~
``````````````

---

### Get {#get}

```go
Get(name string, opts ...RAGSystemConfigOption) (*RAGSystem, error)
```

GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | RAG 系统/集合名称 |

**可选参数**

可作为可变参数 `opts ...RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*RAGSystem` | RAG 系统对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库与嵌入服务（示意性示例）
db = rag.Get("my-collection")~
results = db.Query("hello", 5)~
``````````````

---

### GetCollection {#getcollection}

```go
GetCollection(name string, opts ...RAGSystemConfigOption) (*RAGSystem, error)
```

GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | RAG 系统/集合名称 |

**可选参数**

可作为可变参数 `opts ...RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*RAGSystem` | RAG 系统对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库与嵌入服务（示意性示例）
db = rag.Get("my-collection")~
results = db.Query("hello", 5)~
``````````````

---

### Import {#import}

```go
Import(inputPath string, optFuncs ...RAGSystemConfigOption) error
```

ImportRAG 从 .rag 二进制文件导入 RAG 集合到数据库（导出名为 rag.Import）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| inputPath | `string` | .rag 文件路径（支持 .gz 压缩） |

**可选参数**

可作为可变参数 `optFuncs ...RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库（示意性示例）
rag.Import("/tmp/my-collection.rag", rag.importName("imported-collection"))~
``````````````

---

### Query {#query}

```go
Query(query string, opts ...rag.RAGSystemConfigOption) (<-chan *rag.RAGSearchResult, error)
```

_query 统一的查询/搜索接口

支持多种查询模式:

1. 无参数 - 查询所有集合

2. queryCollection/queryCollections - 指定集合查询

3. queryRAGFilename - 从 RAG 文件导入后查询

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| query | `string` | 查询文本 |

**可选参数**

可作为可变参数 `opts ...rag.RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *rag.RAGSearchResult` | 查询结果 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 查询所有集合
results = rag.Query("如何使用 XSS 检测?")~

// 查询指定集合（单个）
results = rag.Query("如何使用 MITM 插件?", rag.queryCollection("yaklang-yakscript-plugins"))~

// 查询多个集合
results = rag.Query("XSS 漏洞", rag.queryCollections("plugins", "tools", "docs"))~

// 从 RAG 文件导入后查询（适合法规条文等精确搜索）
results = rag.Query("法规第2.3条", rag.queryRAGFilename("/path/to/law.rag"))~

// 组合使用
results = rag.Query("XSS 漏洞",
    rag.queryCollections("plugins"),
    rag.queryLimit(20),
    rag.querySimilarityThreshold(0.5),
    rag.queryEnhance(
        rag.QUERY_ENHANCE_TYPE_HYPOTHETICAL_ANSWER,
        rag.QUERY_ENHANCE_TYPE_EXACT_KEYWORD_SEARCH,
    ),
)~
``````````````

---

### QueryDocuments {#querydocuments}

```go
QueryDocuments(knowledgeBaseName string, query string, limit int, opts ...rag.RAGSystemConfigOption) ([]*rag.SearchResult, error)
```

_queryDocuments 在指定集合中查询文档

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| knowledgeBaseName | `string` | 知识库/集合名称 |
| query | `string` | 查询文本 |
| limit | `int` | 返回结果数量上限 |

**可选参数**

可作为可变参数 `opts ...rag.RAGSystemConfigOption` 传入选项；共 47 个可用选项，详见 [RAGSystemConfigOption 选项列表](#option-ragsystemconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*rag.SearchResult` | 搜索结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results, err = rag.QueryDocuments("my_collection", "query", 10)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：DBQueryOption {#option-dbqueryoption}

涉及到的函数有：[rag.DBQueryCountVectorsByEntry](#dbquerycountvectorsbyentry)、[rag.DBQueryEntity](#dbqueryentity)、[rag.DBQueryKnowledge](#dbqueryknowledge)、[rag.DBQueryKnowledgeExists](#dbqueryknowledgeexists)、[rag.DBQueryUniqueKnowledgeTitles](#dbqueryuniqueknowledgetitles)、[rag.DBQueryVectorDocument](#dbqueryvectordocument)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `rag.dbQueryCollection` | `name string` | `DBQueryOption` | 指定查询的集合名称（单个） |
| `rag.dbQueryCollections` | `names ...string` | `DBQueryOption` | 指定查询的多个集合名称 |
| `rag.dbQueryCtx` | `ctx context.Context` | `DBQueryOption` | 设置查询上下文 |
| `rag.dbQueryDB` | `db *gorm.DB` | `DBQueryOption` | 指定数据库连接 |
| `rag.dbQueryLimit` | `limit int` | `DBQueryOption` | 设置查询结果数量限制 |
| `rag.dbQueryOffset` | `offset int` | `DBQueryOption` | 设置查询偏移量（用于分页） |
| `rag.dbQueryRAGFilename` | `filename string` | `DBQueryOption` | 从 RAG 文件导入后查询 |

### 2. 类型：RAGSystemConfigOption {#option-ragsystemconfigoption}

涉及到的函数有：[rag.AddDocument](#adddocument)、[rag.DeleteDocument](#deletedocument)、[rag.Export](#export)、[rag.Get](#get)、[rag.GetCollection](#getcollection)、[rag.Import](#import)、[rag.Query](#query)、[rag.QueryDocuments](#querydocuments)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `rag.aiService` | `aiService aicommon.AICallbackType` | `RAGSystemConfigOption` | 直接指定 RAG 使用的 AI 回调服务 |
| `rag.aiServiceType` | `aiServiceName string, aiServiceConfig ...aispec.AIConfigOption` | `RAGSystemConfigOption` | 按名称与配置指定 RAG 使用的 AI 服务 |
| `rag.buildFilter` | `filter *ypb.EntityFilter` | `RAGSystemConfigOption` | 设置 k-hop 查询的起始实体过滤条件 |
| `rag.buildQuery` | `query string` | `RAGSystemConfigOption` | 设置 k-hop 查询所用的 RAG 检索语句 |
| `rag.db` | `db *gorm.DB` | `RAGSystemConfigOption` | 指定 RAG 使用的数据库连接 |
| `rag.docMetadata` | `key string, value any` | `RAGSystemConfigOption` | 为文档添加一个元数据键值对 |
| `rag.docRawMetadata` | `metadata map[string]any` | `RAGSystemConfigOption` | 直接设置文档的原始元数据 map |
| `rag.documentHandler` | `documentHandler func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)` | `RAGSystemConfigOption` | 导出 RAG 时对每个文档进行处理的回调 |
| `rag.embeddingHandle` | `handle func(text string) any` | `rag.RAGSystemConfigOption` | 创建自定义嵌入处理器 |
| `rag.enableQuestionIndex` | `enable bool` | `RAGSystemConfigOption` | 是否启用文档潜在问题索引 |
| `rag.importName` | `collectionName string` | `RAGSystemConfigOption` | queryCollection 指定要查询的集合名称 |
| `rag.importOverwrite` | `overwriteExisting bool` | `RAGSystemConfigOption` | 导入 RAG 时是否覆盖已存在的同名集合 |
| `rag.importRebuildGraph` | `rebuildHNSWIndex bool` | `RAGSystemConfigOption` | 导入 RAG 时是否重建 HNSW 索引 |
| `rag.khopLimit` | `k int` | `RAGSystemConfigOption` | 设置 k-hop 查询返回的路径数量上限 |
| `rag.khopk` | `k int` | `RAGSystemConfigOption` | 设置 k-hop 的跳数 |
| `rag.khopkMax` | `kMax int` | `RAGSystemConfigOption` | 设置最大路径长度 |
| `rag.khopkMin` | `kMin int` | `RAGSystemConfigOption` | 设置最小路径长度 |
| `rag.lazyEmbedding` | `lazy ...bool` | `rag.RAGSystemConfigOption` | 设置是否延迟加载嵌入客户端 |
| `rag.noEntityRepository` | - | `rag.RAGSystemConfigOption` | 禁用实体仓库 |
| `rag.noHNSWGraph` | `noHNSWGraph bool` | `RAGSystemConfigOption` | 导出 RAG 时是否不导出 HNSW 索引 |
| `rag.noKnowledgeBase` | - | `rag.RAGSystemConfigOption` | 禁用知识库 |
| `rag.noMetadata` | `noMetadata bool` | `RAGSystemConfigOption` | 导出 RAG 时是否不导出元数据 |
| `rag.noOriginInput` | `noOriginInput bool` | `RAGSystemConfigOption` | 导出 RAG 时是否不导出原始输入内容 |
| `rag.noPotentialQuestions` | - | `RAGSystemConfigOption` | 返回一个不在元数据中保存潜在问题的配置选项 |
| `rag.onlyPQCode` | `onlyPQCode bool` | `RAGSystemConfigOption` | 导出 RAG 时是否仅导出 PQ 编码 |
| `rag.pathDepth` | `deep int` | `RAGSystemConfigOption` | 设置 k-hop 查询的路径深度 |
| `rag.progressHandler` | `progressHandler func(percent float64, message string, messageType string)` | `RAGSystemConfigOption` | 导出 RAG 时的进度回调 |
| `rag.queryCollection` | `collectionName string` | `RAGSystemConfigOption` | 指定要查询的集合名称 |
| `rag.queryCollections` | `names ...string` | `rag.RAGSystemConfigOption` | 指定查询的多个集合名称 |
| `rag.queryConcurrent` | `concurrent int` | `RAGSystemConfigOption` | 设置查询操作的并发数 |
| `rag.queryCtx` | `ctx context.Context` | `RAGSystemConfigOption` | 设置 RAG 查询操作的上下文 |
| `rag.queryEnhance` | `enhance ...string` | `RAGSystemConfigOption` | 设置查询增强策略 |
| `rag.queryLimit` | `limit int` | `RAGSystemConfigOption` | 设置查询返回结果的最大数量 |
| `rag.queryRAGFilename` | `filename string` | `rag.RAGSystemConfigOption` | 从 RAG 文件导入后查询（自动导入） |
| `rag.queryScoreLimit` | `scoreLimit float64` | `RAGSystemConfigOption` | 设置集合过滤的分数阈值 |
| `rag.querySimilarityThreshold` | `threshold float64` | `RAGSystemConfigOption` | 设置结果的最小相似度阈值 |
| `rag.queryStatus` | `callback func(label string, i any, tags ...string)` | `RAGSystemConfigOption` | 设置查询状态回调函数 |
| `rag.queryType` | `documentType ...string` | `RAGSystemConfigOption` | 设置文档类型过滤 |
| `rag.ragCosineDistance` | - | `RAGSystemConfigOption` | 使用余弦距离作为向量相似度度量 |
| `rag.ragDescription` | `description string` | `RAGSystemConfigOption` | 设置 RAG 集合的描述信息 |
| `rag.ragEmbeddingModel` | `model string` | `RAGSystemConfigOption` | 设置 RAG 使用的 embedding 模型名称 |
| `rag.ragForceNew` | `force bool` | `RAGSystemConfigOption` | 是否强制创建新集合 |
| `rag.ragHNSWParameters` | `m int, ml float64, efSearch int, efConstruct int` | `RAGSystemConfigOption` | 设置 HNSW 索引参数 |
| `rag.ragImportFile` | `importFile string` | `RAGSystemConfigOption` | 指定导入所用的 RAG 文件路径 |
| `rag.ragModelDimension` | `dimension int` | `RAGSystemConfigOption` | 设置 embedding 模型的向量维度 |
| `rag.serialVersionUID` | `serialVersionUID string` | `RAGSystemConfigOption` | 设置 RAG 序列化版本标识 |
| `rag.setSearchMeta` | `searchType string, searchTarget string` | `rag.RAGSystemConfigOption` | 快捷设置搜索元数据 (search_type 和 search_target) |

