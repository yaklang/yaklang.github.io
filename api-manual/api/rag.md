# rag

|函数名|函数描述/介绍|
|:------|:--------|
| [rag.AddDocument](#adddocument) ||
| [rag.BuildCollectionFromFile](#buildcollectionfromfile) ||
| [rag.BuildCollectionFromRaw](#buildcollectionfromraw) ||
| [rag.BuildCollectionFromReader](#buildcollectionfromreader) ||
| [rag.DeleteCollection](#deletecollection) ||
| [rag.DeleteDocument](#deletedocument) ||
| [rag.EnableMockMode](#enablemockmode) ||
| [rag.GetCollection](#getcollection) ||
| [rag.GetCollectionInfo](#getcollectioninfo) ||
| [rag.ListCollection](#listcollection) ||
| [rag.NewRagDatabase](#newragdatabase) ||
| [rag.NewTempRagDatabase](#newtempragdatabase) ||
| [rag.Query](#query) ||
| [rag.QueryDocuments](#querydocuments) ||
| [rag.QueryDocumentsWithAISummary](#querydocumentswithaisummary) ||
| [rag.ctx](#ctx) ||
| [rag.docMetadata](#docmetadata) ||
| [rag.docRawMetadata](#docrawmetadata) ||
| [rag.entryLength](#entrylength) ||
| [rag.extraPrompt](#extraprompt) ||
| [rag.khopk](#khopk) |WithKHopK 设置k-hop的跳数，k&amp;gt;=2时返回k-hop路径，k=0返回所有路径 |
| [rag.khopkMax](#khopkmax) |WithKHopKMin 设置最小路径长度，最小值为2 |
| [rag.khopkMin](#khopkmin) |WithKHopKMin 设置最小路径长度，最小值为2 |
| [rag.log](#log) ||
| [rag.queryCollection](#querycollection) |WithRAGCollectionName 指定搜索的集合名称 |
| [rag.queryConcurrent](#queryconcurrent) |WithRAGConcurrent 设置并发数 |
| [rag.queryCtx](#queryctx) |WithRAGCtx 设置上下文 |
| [rag.queryEnhance](#queryenhance) |WithRAGEnhance 启用或禁用增强搜索 |
| [rag.queryLimit](#querylimit) |WithRAGLimit 设置查询结果限制 |
| [rag.queryScoreLimit](#queryscorelimit) |WithRAGCollectionScoreLimit 设置集合搜索分数阈值 |
| [rag.queryStatus](#querystatus) ||
| [rag.queryType](#querytype) |todo 这里暂时使用临时构建图的方式处理，等待恢复图速度优化 |
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


### DeleteCollection

#### 详细描述


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


### ListCollection

#### 详细描述


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

`Query(query string, opts ...RAGQueryOption) (chan *RAGSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |
| opts | `...RAGQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *RAGSearchResult` |   |
| r2 | `error` |   |


### QueryDocuments

#### 详细描述


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
WithKHopKMin 设置最小路径长度，最小值为2


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
todo 这里暂时使用临时构建图的方式处理，等待恢复图速度优化


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


