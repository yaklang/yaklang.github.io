# rag

|函数名|函数描述/介绍|
|:------|:--------|
| [rag.AddDocument](#adddocument) |_addDocument 向指定集合添加文档  |
| [rag.BuildCollectionFromFile](#buildcollectionfromfile) ||
| [rag.BuildCollectionFromRaw](#buildcollectionfromraw) ||
| [rag.BuildCollectionFromReader](#buildcollectionfromreader) ||
| [rag.BuildIndexKnowledgeFromFile](#buildindexknowledgefromfile) ||
| [rag.BuildKnowledgeFromEntityRepos](#buildknowledgefromentityrepos) ||
| [rag.DeleteCollection](#deletecollection) |_deleteCollection 删除指定的 RAG 集合  |
| [rag.DeleteDocument](#deletedocument) |_deleteDocument 从指定集合删除文档  |
| [rag.EnableMockMode](#enablemockmode) ||
| [rag.Export](#export) ||
| [rag.GetCollection](#getcollection) ||
| [rag.GetCollectionInfo](#getcollectioninfo) |_getCollectionInfo 获取指定集合的详细信息  |
| [rag.HasCollection](#hascollection) |_hasCollection 检查指定集合是否存在  |
| [rag.Import](#import) |ImportRAGFromFile 从二进制文件导入RAG数据，支持从文件路径导入 |
| [rag.ListCollection](#listcollection) |_listCollection 获取所有 RAG 集合列表  |
| [rag.NewRagDatabase](#newragdatabase) ||
| [rag.NewTempRagDatabase](#newtempragdatabase) |_newTempRagDatabase 创建临时 RAG 数据库  |
| [rag.Query](#query) ||
| [rag.QueryDocuments](#querydocuments) |_queryDocuments 在指定集合中查询文档  |
| [rag.QueryDocumentsWithAISummary](#querydocumentswithaisummary) |_queryDocumentsWithAISummary 在指定集合中查询文档并生成 AI 摘要  |
| [rag.buildFilter](#buildfilter) ||
| [rag.buildQuery](#buildquery) ||
| [rag.chunkSize](#chunksize) ||
| [rag.ctx](#ctx) ||
| [rag.db](#db) ||
| [rag.docMetadata](#docmetadata) ||
| [rag.docRawMetadata](#docrawmetadata) ||
| [rag.documentHandler](#documenthandler) ||
| [rag.embeddingHandle](#embeddinghandle) |_embeddingHandle 创建自定义嵌入处理器  |
| [rag.entryLength](#entrylength) ||
| [rag.extraPrompt](#extraprompt) ||
| [rag.getEntityFilter](#getentityfilter) ||
| [rag.importName](#importname) ||
| [rag.importOverwrite](#importoverwrite) ||
| [rag.importRebuildGraph](#importrebuildgraph) ||
| [rag.khopLimit](#khoplimit) ||
| [rag.khopk](#khopk) |WithKHopK 设置k-hop的跳数，k&amp;gt;=2时返回k-hop路径，k=0返回所有路径 |
| [rag.khopkMax](#khopkmax) |WithKHopKMax 设置最大路径长度，最小值为2 |
| [rag.khopkMin](#khopkmin) |WithKHopKMin 设置最小路径长度，最小值为2 |
| [rag.log](#log) ||
| [rag.noHNSWGraph](#nohnswgraph) ||
| [rag.noMetadata](#nometadata) |RAG 配置选项 |
| [rag.noOriginInput](#noorigininput) ||
| [rag.onlyPQCode](#onlypqcode) ||
| [rag.pathDepth](#pathdepth) ||
| [rag.progressHandler](#progresshandler) ||
| [rag.queryCollection](#querycollection) |WithRAGCollectionName 指定搜索的集合名称 |
| [rag.queryConcurrent](#queryconcurrent) |WithRAGConcurrent 设置并发数 |
| [rag.queryCtx](#queryctx) |WithRAGCtx 设置上下文 |
| [rag.queryEnhance](#queryenhance) |WithRAGEnhance 启用或禁用增强搜索 |
| [rag.queryLimit](#querylimit) |WithRAGLimit 设置查询结果限制 |
| [rag.queryScoreLimit](#queryscorelimit) |WithRAGCollectionScoreLimit 设置集合搜索分数阈值 |
| [rag.queryStatus](#querystatus) ||
| [rag.queryType](#querytype) ||
| [rag.ragCosineDistance](#ragcosinedistance) ||
| [rag.ragDescription](#ragdescription) ||
| [rag.ragEmbeddingModel](#ragembeddingmodel) |WithEmbeddingModel 设置embedding模型 |
| [rag.ragForceNew](#ragforcenew) ||
| [rag.ragHNSWParameters](#raghnswparameters) |WithHNSWParameters 批量设置HNSW参数 |
| [rag.ragModelDimension](#ragmodeldimension) |WithModelDimension 设置模型维度 |
| [rag.statusCard](#statuscard) ||


## 函数定义
### AddDocument

#### 详细描述
_addDocument 向指定集合添加文档

Example:
```

	err = rag.AddDocument("my_collection", "doc1", "content", {"key": "value"})

```


#### 定义

`AddDocument(knowledgeBaseName string, documentName string, document string, metadata map[string]any, opts ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| documentName | `string` |   |
| document | `string` |   |
| metadata | `map[string]any` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### BuildCollectionFromFile

#### 详细描述


#### 定义

`BuildCollectionFromFile(kbName string, path string, option ...any) (&lt;-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| path | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### BuildCollectionFromRaw

#### 详细描述


#### 定义

`BuildCollectionFromRaw(kbName string, content []byte, option ...any) (&lt;-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| content | `[]byte` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### BuildCollectionFromReader

#### 详细描述


#### 定义

`BuildCollectionFromReader(kbName string, reader io.Reader, option ...any) (&lt;-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| reader | `io.Reader` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### BuildIndexKnowledgeFromFile

#### 详细描述


#### 定义

`BuildIndexKnowledgeFromFile(kbName string, path string, option ...any) (&lt;-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| path | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### BuildKnowledgeFromEntityRepos

#### 详细描述


#### 定义

`BuildKnowledgeFromEntityRepos(name string, option ...any) (&lt;-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### DeleteCollection

#### 详细描述
_deleteCollection 删除指定的 RAG 集合

Example:
```

	err = rag.DeleteCollection("my_collection")

```


#### 定义

`DeleteCollection(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### DeleteDocument

#### 详细描述
_deleteDocument 从指定集合删除文档

Example:
```

	err = rag.DeleteDocument("my_collection", "doc1")

```


#### 定义

`DeleteDocument(knowledgeBaseName string, documentName string, opts ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| documentName | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### EnableMockMode

#### 详细描述


#### 定义

`EnableMockMode()`


### Export

#### 详细描述


#### 定义

`Export(collectionName string, fileName string, opts ...RAGExportOptionFunc) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |   |
| fileName | `string` |   |
| opts | `...RAGExportOptionFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### GetCollection

#### 详细描述


#### 定义

`GetCollection(name string, i ...any) (*RAGSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RAGSystem` |   |
| r2 | `error` |   |


### GetCollectionInfo

#### 详细描述
_getCollectionInfo 获取指定集合的详细信息

Example:
```

	info, err = rag.GetCollectionInfo("my_collection")

```


#### 定义

`GetCollectionInfo(name string) (*rag.CollectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*rag.CollectionInfo` |   |
| r2 | `error` |   |


### HasCollection

#### 详细描述
_hasCollection 检查指定集合是否存在

Example:
```

	exists = rag.HasCollection("my_collection")

```


#### 定义

`HasCollection(name string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Import

#### 详细描述
ImportRAGFromFile 从二进制文件导入RAG数据，支持从文件路径导入


#### 定义

`Import(inputPath string, optFuncs ...RAGExportOptionFunc) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| inputPath | `string` |   |
| optFuncs | `...RAGExportOptionFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### ListCollection

#### 详细描述
_listCollection 获取所有 RAG 集合列表

Example:
```

	collections = rag.ListCollection()

```


#### 定义

`ListCollection() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### NewRagDatabase

#### 详细描述


#### 定义

`NewRagDatabase(path string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` |   |
| r2 | `error` |   |


### NewTempRagDatabase

#### 详细描述
_newTempRagDatabase 创建临时 RAG 数据库

Example:
```

	db, err = rag.NewTempRagDatabase()

```


#### 定义

`NewTempRagDatabase() (*gorm.DB, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` |   |
| r2 | `error` |   |


### Query

#### 详细描述


#### 定义

`Query(query string, opts ...RAGQueryOption) (&lt;-chan *RAGSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |
| opts | `...RAGQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *RAGSearchResult` |   |
| r2 | `error` |   |


### QueryDocuments

#### 详细描述
_queryDocuments 在指定集合中查询文档

Example:
```

	results, err = rag.QueryDocuments("my_collection", "query", 10)

```


#### 定义

`QueryDocuments(knowledgeBaseName string, query string, limit int, opts ...any) ([]rag.SearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| query | `string` |   |
| limit | `int` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]rag.SearchResult` |   |
| r2 | `error` |   |


### QueryDocumentsWithAISummary

#### 详细描述
_queryDocumentsWithAISummary 在指定集合中查询文档并生成 AI 摘要

Example:
```

	summary, err = rag.QueryDocumentsWithAISummary("my_collection", "query", 10)

```


#### 定义

`QueryDocumentsWithAISummary(knowledgeBaseName string, query string, limit int, opts ...any) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| query | `string` |   |
| limit | `int` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### buildFilter

#### 详细描述


#### 定义

`buildFilter(filter *ypb.EntityFilter) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `*ypb.EntityFilter` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### buildQuery

#### 详细描述


#### 定义

`buildQuery(query string) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### chunkSize

#### 详细描述


#### 定义

`chunkSize(size int64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### ctx

#### 详细描述


#### 定义

`ctx(ctx context.Context) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### db

#### 详细描述


#### 定义

`db(db *gorm.DB) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### docMetadata

#### 详细描述


#### 定义

`docMetadata(key string, value any) DocumentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DocumentOption` |   |


### docRawMetadata

#### 详细描述


#### 定义

`docRawMetadata(i map[string]any) DocumentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DocumentOption` |   |


### documentHandler

#### 详细描述


#### 定义

`documentHandler(handler func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### embeddingHandle

#### 详细描述
_embeddingHandle 创建自定义嵌入处理器

Example:
```

	embeddingOpt = rag.embeddingHandle((text) => {
		return [0.1, 0.2, 0.3] // 返回嵌入向量
	})

```


#### 定义

`embeddingHandle(handle func(text string) any) rag.RAGOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `func(text string) any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGOption` |   |


### entryLength

#### 详细描述


#### 定义

`entryLength(length int) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### extraPrompt

#### 详细描述


#### 定义

`extraPrompt(prompt string) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### getEntityFilter

#### 详细描述


#### 定义

`getEntityFilter(reposName string, entityTypes []string, names []string, HiddenIndex []string, keywords []string) *ypb.EntityFilter`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reposName | `string` |   |
| entityTypes | `[]string` |   |
| names | `[]string` |   |
| HiddenIndex | `[]string` |   |
| keywords | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ypb.EntityFilter` |   |


### importName

#### 详细描述


#### 定义

`importName(name string) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### importOverwrite

#### 详细描述


#### 定义

`importOverwrite(b bool) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### importRebuildGraph

#### 详细描述


#### 定义

`importRebuildGraph(b bool) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### khopLimit

#### 详细描述


#### 定义

`khopLimit(k int) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### khopk

#### 详细描述
WithKHopK 设置k-hop的跳数，k&gt;=2时返回k-hop路径，k=0返回所有路径


#### 定义

`khopk(k int) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### khopkMax

#### 详细描述
WithKHopKMax 设置最大路径长度，最小值为2


#### 定义

`khopkMax(kMax int) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMax | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### khopkMin

#### 详细描述
WithKHopKMin 设置最小路径长度，最小值为2


#### 定义

`khopkMin(kMin int) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMin | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### log

#### 详细描述


#### 定义

`log(handler func(format string, args ...any)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(format string, args ...any)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### noHNSWGraph

#### 详细描述


#### 定义

`noHNSWGraph(b bool) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### noMetadata

#### 详细描述
RAG 配置选项


#### 定义

`noMetadata(b bool) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### noOriginInput

#### 详细描述


#### 定义

`noOriginInput(b bool) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### onlyPQCode

#### 详细描述


#### 定义

`onlyPQCode(b bool) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### pathDepth

#### 详细描述


#### 定义

`pathDepth(deep int) KHopQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| deep | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `KHopQueryOption` |   |


### progressHandler

#### 详细描述


#### 定义

`progressHandler(handler func(percent float64, message string, messageType string)) RAGExportOptionFunc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(percent float64, message string, messageType string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGExportOptionFunc` |   |


### queryCollection

#### 详细描述
WithRAGCollectionName 指定搜索的集合名称


#### 定义

`queryCollection(collectionName string) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryConcurrent

#### 详细描述
WithRAGConcurrent 设置并发数


#### 定义

`queryConcurrent(concurrent int) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryCtx

#### 详细描述
WithRAGCtx 设置上下文


#### 定义

`queryCtx(ctx context.Context) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryEnhance

#### 详细描述
WithRAGEnhance 启用或禁用增强搜索


#### 定义

`queryEnhance(enhancePlan ...string) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enhancePlan | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryLimit

#### 详细描述
WithRAGLimit 设置查询结果限制


#### 定义

`queryLimit(limit int) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryScoreLimit

#### 详细描述
WithRAGCollectionScoreLimit 设置集合搜索分数阈值


#### 定义

`queryScoreLimit(scoreLimit float64) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scoreLimit | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryStatus

#### 详细描述


#### 定义

`queryStatus(i func(label string, i any, tags ...string)) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(label string, i any, tags ...string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### queryType

#### 详细描述


#### 定义

`queryType(documentType ...string) RAGQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGQueryOption` |   |


### ragCosineDistance

#### 详细描述


#### 定义

`ragCosineDistance()`


### ragDescription

#### 详细描述


#### 定义

`ragDescription(description string) RAGOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGOption` |   |


### ragEmbeddingModel

#### 详细描述
WithEmbeddingModel 设置embedding模型


#### 定义

`ragEmbeddingModel(model string) RAGOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| model | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGOption` |   |


### ragForceNew

#### 详细描述


#### 定义

`ragForceNew(i ...bool) RAGOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGOption` |   |


### ragHNSWParameters

#### 详细描述
WithHNSWParameters 批量设置HNSW参数


#### 定义

`ragHNSWParameters(m int, ml float64, efSearch int, efConstruct int) RAGOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` |   |
| ml | `float64` |   |
| efSearch | `int` |   |
| efConstruct | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGOption` |   |


### ragModelDimension

#### 详细描述
WithModelDimension 设置模型维度


#### 定义

`ragModelDimension(dimension int) RAGOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dimension | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGOption` |   |


### statusCard

#### 详细描述


#### 定义

`statusCard(handler func(id string, data any, tags ...string)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(id string, data any, tags ...string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


