# rag

|函数名|函数描述/介绍|
|:------|:--------|
| [rag.AddDocument](#adddocument) ||
| [rag.DeleteCollection](#deletecollection) ||
| [rag.DeleteDocument](#deletedocument) ||
| [rag.EnableMockMode](#enablemockmode) ||
| [rag.GetCollection](#getcollection) ||
| [rag.GetCollectionInfo](#getcollectioninfo) ||
| [rag.ListCollection](#listcollection) ||
| [rag.NewRagDatabase](#newragdatabase) ||
| [rag.NewTempRagDatabase](#newtempragdatabase) ||
| [rag.QueryDocuments](#querydocuments) ||
| [rag.QueryDocumentsWithAISummary](#querydocumentswithaisummary) ||
| [rag.docMetadata](#docmetadata) ||
| [rag.docRawMetadata](#docrawmetadata) ||
| [rag.ragCosineDistance](#ragcosinedistance) ||
| [rag.ragDescription](#ragdescription) ||
| [rag.ragEmbeddingModel](#ragembeddingmodel) |WithEmbeddingModel 设置embedding模型 |
| [rag.ragForceNew](#ragforcenew) ||
| [rag.ragHNSWParameters](#raghnswparameters) |WithHNSWParameters 批量设置HNSW参数 |
| [rag.ragModelDimension](#ragmodeldimension) |WithModelDimension 设置模型维度 |


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

`GetCollectionInfo(name string) (*CollectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CollectionInfo` |   |
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


### QueryDocuments

#### 详细描述


#### 定义

`QueryDocuments(knowledgeBaseName string, query string, limit int, opts ...any) ([]SearchResult, error)`

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
| r1 | `[]SearchResult` |   |
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


### ragCosineDistance

#### 详细描述


#### 定义

`ragCosineDistance() RAGOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGOption` |   |


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


