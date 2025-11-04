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
| [rag.Get](#get) ||
| [rag.GetCollection](#getcollection) ||
| [rag.GetCollectionInfo](#getcollectioninfo) |_getCollectionInfo 获取指定集合的详细信息  |
| [rag.HasCollection](#hascollection) |_hasCollection 检查指定集合是否存在  |
| [rag.Import](#import) ||
| [rag.ListCollection](#listcollection) |_listCollection 获取所有 RAG 集合列表  |
| [rag.NewRagDatabase](#newragdatabase) ||
| [rag.NewTempRagDatabase](#newtempragdatabase) |_newTempRagDatabase 创建临时 RAG 数据库  |
| [rag.Query](#query) ||
| [rag.QueryDocuments](#querydocuments) |_queryDocuments 在指定集合中查询文档  |
| [rag.aiService](#aiservice) ||
| [rag.aiServiceType](#aiservicetype) ||
| [rag.buildFilter](#buildfilter) ||
| [rag.buildQuery](#buildquery) ||
| [rag.chunkSize](#chunksize) ||
| [rag.ctx](#ctx) ||
| [rag.db](#db) ||
| [rag.docMetadata](#docmetadata) |WithDocumentMetadataKeyValue sets document metadata key-value pairs |
| [rag.docRawMetadata](#docrawmetadata) |WithDocumentRawMetadata sets raw document metadata |
| [rag.documentHandler](#documenthandler) ||
| [rag.embeddingHandle](#embeddinghandle) |_embeddingHandle 创建自定义嵌入处理器  |
| [rag.entryLength](#entrylength) ||
| [rag.extraPrompt](#extraprompt) ||
| [rag.getEntityFilter](#getentityfilter) ||
| [rag.importName](#importname) |WithRAGCollectionName sets the specific collection name to query |
| [rag.importOverwrite](#importoverwrite) ||
| [rag.importRebuildGraph](#importrebuildgraph) ||
| [rag.khopLimit](#khoplimit) ||
| [rag.khopk](#khopk) |WithKHopK 设置k-hop的跳数，k&amp;gt;=2时返回k-hop路径，k=0返回所有路径 |
| [rag.khopkMax](#khopkmax) |WithKHopKMax 设置最大路径长度，最小值为2 |
| [rag.khopkMin](#khopkmin) |WithKHopKMin 设置最小路径长度，最小值为2 |
| [rag.log](#log) ||
| [rag.noEntityRepository](#noentityrepository) |_noEntityRepository 禁用实体仓库  |
| [rag.noHNSWGraph](#nohnswgraph) ||
| [rag.noKnowledgeBase](#noknowledgebase) |_noKnowledgeBase 禁用知识库  |
| [rag.noMetadata](#nometadata) ||
| [rag.noOriginInput](#noorigininput) ||
| [rag.onlyPQCode](#onlypqcode) ||
| [rag.pathDepth](#pathdepth) ||
| [rag.progressHandler](#progresshandler) ||
| [rag.queryCollection](#querycollection) |WithRAGCollectionName sets the specific collection name to query |
| [rag.queryConcurrent](#queryconcurrent) |WithRAGConcurrent sets the concurrency level for query operations |
| [rag.queryCtx](#queryctx) |WithRAGCtx sets the context for RAG query operations |
| [rag.queryEnhance](#queryenhance) |WithRAGEnhance sets the enhancement strategies to apply |
| [rag.queryLimit](#querylimit) |WithRAGLimit sets the maximum number of results to return |
| [rag.queryScoreLimit](#queryscorelimit) |WithRAGCollectionScoreLimit sets the score limit for collection filtering |
| [rag.queryStatus](#querystatus) |WithRAGQueryStatus sets the query status callback function |
| [rag.queryType](#querytype) |WithRAGDocumentType sets the document type filter |
| [rag.ragCosineDistance](#ragcosinedistance) ||
| [rag.ragDescription](#ragdescription) ||
| [rag.ragEmbeddingModel](#ragembeddingmodel) ||
| [rag.ragForceNew](#ragforcenew) |WithForceNew sets whether to force creation of new collection |
| [rag.ragHNSWParameters](#raghnswparameters) |WithHNSWParameters sets HNSW parameters |
| [rag.ragModelDimension](#ragmodeldimension) |WithModelDimension sets the model dimension |
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

`AddDocument(knowledgeBaseName string, documentName string, document string, metadata map[string]any, opts ...rag.RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| documentName | `string` |   |
| document | `string` |   |
| metadata | `map[string]any` |   |
| opts | `...rag.RAGSystemConfigOption` |   |

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

`BuildIndexKnowledgeFromFile(kbName string, path string, option ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| path | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


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

`DeleteDocument(knowledgeBaseName string, documentName string, opts ...rag.RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| documentName | `string` |   |
| opts | `...rag.RAGSystemConfigOption` |   |

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

`Export(name string, filePath string, opts ...RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| filePath | `string` |   |
| opts | `...RAGSystemConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Get

#### 详细描述


#### 定义

`Get(name string, opts ...RAGSystemConfigOption) (*RAGSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...RAGSystemConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RAGSystem` |   |
| r2 | `error` |   |


### GetCollection

#### 详细描述


#### 定义

`GetCollection(name string, opts ...RAGSystemConfigOption) (*RAGSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...RAGSystemConfigOption` |   |

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

`GetCollectionInfo(name string) (*vectorstore.CollectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*vectorstore.CollectionInfo` |   |
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


#### 定义

`Import(filePath string, optFuncs ...RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` |   |
| optFuncs | `...RAGSystemConfigOption` |   |

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

`Query(query string, opts ...RAGSystemConfigOption) (&lt;-chan *RAGSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |
| opts | `...RAGSystemConfigOption` |   |

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

`QueryDocuments(knowledgeBaseName string, query string, limit int, opts ...rag.RAGSystemConfigOption) ([]*rag.SearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` |   |
| query | `string` |   |
| limit | `int` |   |
| opts | `...rag.RAGSystemConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*rag.SearchResult` |   |
| r2 | `error` |   |


### aiService

#### 详细描述


#### 定义

`aiService(aiService aicommon.AICallbackType) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiService | `aicommon.AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### aiServiceType

#### 详细描述


#### 定义

`aiServiceType(aiServiceName string, aiServiceConfig ...aispec.AIConfigOption) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiServiceName | `string` |   |
| aiServiceConfig | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### buildFilter

#### 详细描述


#### 定义

`buildFilter(filter *ypb.EntityFilter) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `*ypb.EntityFilter` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### buildQuery

#### 详细描述


#### 定义

`buildQuery(query string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


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

`db(db *gorm.DB) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### docMetadata

#### 详细描述
WithDocumentMetadataKeyValue sets document metadata key-value pairs


#### 定义

`docMetadata(key string, value any) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### docRawMetadata

#### 详细描述
WithDocumentRawMetadata sets raw document metadata


#### 定义

`docRawMetadata(metadata map[string]any) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| metadata | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### documentHandler

#### 详细描述


#### 定义

`documentHandler(documentHandler func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentHandler | `func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


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

`embeddingHandle(handle func(text string) any) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `func(text string) any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` |   |


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
WithRAGCollectionName sets the specific collection name to query


#### 定义

`importName(collectionName string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### importOverwrite

#### 详细描述


#### 定义

`importOverwrite(overwriteExisting bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| overwriteExisting | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### importRebuildGraph

#### 详细描述


#### 定义

`importRebuildGraph(rebuildHNSWIndex bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rebuildHNSWIndex | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### khopLimit

#### 详细描述


#### 定义

`khopLimit(k int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### khopk

#### 详细描述
WithKHopK 设置k-hop的跳数，k&gt;=2时返回k-hop路径，k=0返回所有路径


#### 定义

`khopk(k int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### khopkMax

#### 详细描述
WithKHopKMax 设置最大路径长度，最小值为2


#### 定义

`khopkMax(kMax int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMax | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### khopkMin

#### 详细描述
WithKHopKMin 设置最小路径长度，最小值为2


#### 定义

`khopkMin(kMin int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMin | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


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


### noEntityRepository

#### 详细描述
_noEntityRepository 禁用实体仓库

Example:
```

	rag.noEntityRepository()

```


#### 定义

`noEntityRepository() rag.RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` |   |


### noHNSWGraph

#### 详细描述


#### 定义

`noHNSWGraph(noHNSWGraph bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noHNSWGraph | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### noKnowledgeBase

#### 详细描述
_noKnowledgeBase 禁用知识库

Example:
```

	rag.noKnowledgeBase()

```


#### 定义

`noKnowledgeBase() rag.RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` |   |


### noMetadata

#### 详细描述


#### 定义

`noMetadata(noMetadata bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noMetadata | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### noOriginInput

#### 详细描述


#### 定义

`noOriginInput(noOriginInput bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noOriginInput | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### onlyPQCode

#### 详细描述


#### 定义

`onlyPQCode(onlyPQCode bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onlyPQCode | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### pathDepth

#### 详细描述


#### 定义

`pathDepth(deep int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| deep | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### progressHandler

#### 详细描述


#### 定义

`progressHandler(progressHandler func(percent float64, message string, messageType string)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progressHandler | `func(percent float64, message string, messageType string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryCollection

#### 详细描述
WithRAGCollectionName sets the specific collection name to query


#### 定义

`queryCollection(collectionName string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryConcurrent

#### 详细描述
WithRAGConcurrent sets the concurrency level for query operations


#### 定义

`queryConcurrent(concurrent int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryCtx

#### 详细描述
WithRAGCtx sets the context for RAG query operations


#### 定义

`queryCtx(ctx context.Context) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryEnhance

#### 详细描述
WithRAGEnhance sets the enhancement strategies to apply


#### 定义

`queryEnhance(enhance ...string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enhance | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryLimit

#### 详细描述
WithRAGLimit sets the maximum number of results to return


#### 定义

`queryLimit(limit int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryScoreLimit

#### 详细描述
WithRAGCollectionScoreLimit sets the score limit for collection filtering


#### 定义

`queryScoreLimit(scoreLimit float64) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scoreLimit | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryStatus

#### 详细描述
WithRAGQueryStatus sets the query status callback function


#### 定义

`queryStatus(callback func(label string, i any, tags ...string)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(label string, i any, tags ...string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### queryType

#### 详细描述
WithRAGDocumentType sets the document type filter


#### 定义

`queryType(documentType ...string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### ragCosineDistance

#### 详细描述


#### 定义

`ragCosineDistance()`


### ragDescription

#### 详细描述


#### 定义

`ragDescription(description string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### ragEmbeddingModel

#### 详细描述


#### 定义

`ragEmbeddingModel(model string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| model | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### ragForceNew

#### 详细描述
WithForceNew sets whether to force creation of new collection


#### 定义

`ragForceNew(force bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


### ragHNSWParameters

#### 详细描述
WithHNSWParameters sets HNSW parameters


#### 定义

`ragHNSWParameters(m int, ml float64, efSearch int, efConstruct int) RAGSystemConfigOption`

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
| r1 | `RAGSystemConfigOption` |   |


### ragModelDimension

#### 详细描述
WithModelDimension sets the model dimension


#### 定义

`ragModelDimension(dimension int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dimension | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


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


