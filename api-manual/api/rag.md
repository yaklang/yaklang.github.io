# rag

|实例名|实例描述|
|:------|:--------|
QUERY_ENHANCE_TYPE_BASIC|(string) &#34;basic&#34;|
QUERY_ENHANCE_TYPE_EXACT_KEYWORD_SEARCH|(string) &#34;exact_keyword_search&#34;|
QUERY_ENHANCE_TYPE_GENERALIZE_QUERY|(string) &#34;generalize_query&#34;|
QUERY_ENHANCE_TYPE_HYPOTHETICAL_ANSWER|(string) &#34;hypothetical_answer&#34;|
QUERY_ENHANCE_TYPE_SPLIT_QUERY|(string) &#34;split_query&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [rag.AddDocument](#adddocument) |_addDocument 向指定集合添加文档  |
| [rag.BuildCollectionFromFile](#buildcollectionfromfile) ||
| [rag.BuildCollectionFromRaw](#buildcollectionfromraw) ||
| [rag.BuildCollectionFromReader](#buildcollectionfromreader) ||
| [rag.BuildIndexKnowledgeFromFile](#buildindexknowledgefromfile) ||
| [rag.BuildKnowledgeFromEntityRepos](#buildknowledgefromentityrepos) ||
| [rag.BuildSearchIndexKnowledge](#buildsearchindexknowledge) |BuildSearchIndexKnowledge builds a search index for the given text content.  It generates 5-10 search questions that users might ask to find this cont...|
| [rag.BuildSearchIndexKnowledgeFromFile](#buildsearchindexknowledgefromfile) |BuildSearchIndexKnowledgeFromFile builds a search index from a file.  It reads the file content and calls BuildSearchIndexKnowledge.    Parameters:   ...|
| [rag.DBQueryCountVectorsByEntry](#dbquerycountvectorsbyentry) |_dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量  用于检查某个知识条目有多少向量索引    Parameters:    - entryID: 知识条目的 HiddenIndex    - opts: 查询选项    |
| [rag.DBQueryEntity](#dbqueryentity) |_dbQueryEntity 数据库直接查询实体  使用 SQL 模糊搜索，不使用语义搜索，速度非常快  适合去重检查、快速验证等场景    Parameters:    - keyword: 搜索关键词    - opts: 查询选项（集合、限制、偏移等）    |
| [rag.DBQueryKnowledge](#dbqueryknowledge) |_dbQueryKnowledge 数据库直接查询知识库条目  使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms）  适合去重检查、快速验证等场景    Parameters:    - keyword: 搜索关键词    - opts: 查询选项（集合、限制、偏移等）    |
| [rag.DBQueryKnowledgeExists](#dbqueryknowledgeexists) |_dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引  这个函数用于增量更新时的去重检查  只有当知识条目存在且有对应的向量文档时，才认为该条目已被完整索引    Parameters:    - keyword: 搜索关键词（通常是工具/插件名称）    - op...|
| [rag.DBQueryUniqueKnowledgeTitles](#dbqueryuniqueknowledgetitles) |_dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表  使用 SQL DISTINCT 查询，返回不重复的 KnowledgeTitle 列表  适合增量更新时的快速去重检查    Parameters:    - opts: 查询选项（集合、限制等）    Retur...|
| [rag.DBQueryVectorDocument](#dbqueryvectordocument) |_dbQueryVectorDocument 数据库直接查询向量文档  使用 SQL 模糊搜索，不使用语义搜索，速度非常快  适合去重检查、快速验证等场景    Parameters:    - keyword: 搜索关键词    - opts: 查询选项（集合、限制、偏移等）    |
| [rag.DeleteAllKnowledgeBase](#deleteallknowledgebase) |_deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容  清空所有: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等  |
| [rag.DeleteCollection](#deletecollection) |_deleteCollection 删除指定的 RAG 集合  |
| [rag.DeleteDocument](#deletedocument) |_deleteDocument 从指定集合删除文档  |
| [rag.DeleteKnowledgeBase](#deleteknowledgebase) |_deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容  包括: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等  |
| [rag.DeleteRAG](#deleterag) |_deleteRAG 删除指定的 RAG 系统  |
| [rag.Embedding](#embedding) |_embedding 生成文本的嵌入向量  使用默认的嵌入服务生成文本的向量表示（优先使用在线服务，回退到本地服务）  |
| [rag.EnableMockMode](#enablemockmode) ||
| [rag.Export](#export) ||
| [rag.Get](#get) ||
| [rag.GetCollection](#getcollection) ||
| [rag.GetCollectionInfo](#getcollectioninfo) |_getCollectionInfo 获取指定集合的详细信息  |
| [rag.HasCollection](#hascollection) |_hasCollection 检查指定集合是否存在  |
| [rag.Import](#import) ||
| [rag.ListCollection](#listcollection) |_listCollection 获取所有 RAG 集合列表  |
| [rag.ListRAG](#listrag) |_listRAG 列出所有 RAG 系统列表  |
| [rag.LocalEmbedding](#localembedding) |_localEmbedding 使用本地嵌入服务生成文本的向量表示  本地服务需要安装本地模型（如 Qwen3-Embedding-0.6B-Q4_K_M）  |
| [rag.NewRagDatabase](#newragdatabase) ||
| [rag.NewTempRagDatabase](#newtempragdatabase) |_newTempRagDatabase 创建临时 RAG 数据库  |
| [rag.OnlineEmbedding](#onlineembedding) |_onlineEmbedding 使用在线嵌入服务生成文本的向量表示  使用 AIBalance 免费在线服务，无需安装本地模型  |
| [rag.Query](#query) |_query 统一的查询/搜索接口  支持多种查询模式:  1. 无参数 - 查询所有集合  2. queryCollection/queryCollections - 指定集合查询  3. queryRAGFilename - 从 RAG 文件导入后查询    |
| [rag.QueryDocuments](#querydocuments) |_queryDocuments 在指定集合中查询文档  |
| [rag.aiService](#aiservice) ||
| [rag.aiServiceType](#aiservicetype) ||
| [rag.buildFilter](#buildfilter) ||
| [rag.buildQuery](#buildquery) ||
| [rag.chunkSize](#chunksize) ||
| [rag.ctx](#ctx) ||
| [rag.db](#db) ||
| [rag.dbQueryCollection](#dbquerycollection) |_dbQueryCollection 指定查询的集合名称（单个）  |
| [rag.dbQueryCollections](#dbquerycollections) |_dbQueryCollections 指定查询的多个集合名称  |
| [rag.dbQueryCtx](#dbqueryctx) |_dbQueryCtx 设置查询上下文  |
| [rag.dbQueryDB](#dbquerydb) |_dbQueryDB 指定数据库连接  |
| [rag.dbQueryLimit](#dbquerylimit) |_dbQueryLimit 设置查询结果数量限制  |
| [rag.dbQueryOffset](#dbqueryoffset) |_dbQueryOffset 设置查询偏移量（用于分页）  |
| [rag.dbQueryRAGFilename](#dbqueryragfilename) |_dbQueryRAGFilename 从 RAG 文件导入后查询  自动导入 RAG 文件到临时集合，然后在该集合上执行查询  |
| [rag.docMetadata](#docmetadata) |WithDocumentMetadataKeyValue sets document metadata key-value pairs |
| [rag.docRawMetadata](#docrawmetadata) |WithDocumentRawMetadata sets raw document metadata |
| [rag.documentHandler](#documenthandler) ||
| [rag.embeddingHandle](#embeddinghandle) |_embeddingHandle 创建自定义嵌入处理器  |
| [rag.enableQuestionIndex](#enablequestionindex) ||
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
| [rag.noPotentialQuestions](#nopotentialquestions) |NoPotentialQuestions returns a RAGSystemConfigOption that excludes potential_questions from metadata This is a convenient shortcut for WithNoPotential...|
| [rag.onlyPQCode](#onlypqcode) ||
| [rag.pathDepth](#pathdepth) ||
| [rag.progressHandler](#progresshandler) ||
| [rag.queryCollection](#querycollection) |WithRAGCollectionName sets the specific collection name to query |
| [rag.queryCollections](#querycollections) |_queryCollections 指定查询的多个集合名称  |
| [rag.queryConcurrent](#queryconcurrent) |WithRAGConcurrent sets the concurrency level for query operations |
| [rag.queryCtx](#queryctx) |WithRAGCtx sets the context for RAG query operations |
| [rag.queryEnhance](#queryenhance) |WithRAGEnhance sets the enhancement strategies to apply |
| [rag.queryLimit](#querylimit) |WithRAGLimit sets the maximum number of results to return |
| [rag.queryRAGFilename](#queryragfilename) |_queryRAGFilename 从 RAG 文件导入后查询（自动导入）  适合法规条文、技术规范等精确搜索场景  |
| [rag.queryScoreLimit](#queryscorelimit) |WithRAGCollectionScoreLimit sets the score limit for collection filtering |
| [rag.querySimilarityThreshold](#querysimilaritythreshold) |WithRAGSimilarityThreshold sets the minimum similarity threshold for results |
| [rag.queryStatus](#querystatus) |WithRAGQueryStatus sets the query status callback function |
| [rag.queryType](#querytype) |WithRAGDocumentType sets the document type filter |
| [rag.ragCosineDistance](#ragcosinedistance) ||
| [rag.ragDescription](#ragdescription) ||
| [rag.ragEmbeddingModel](#ragembeddingmodel) ||
| [rag.ragForceNew](#ragforcenew) |WithForceNew sets whether to force creation of new collection |
| [rag.ragHNSWParameters](#raghnswparameters) |WithHNSWParameters sets HNSW parameters |
| [rag.ragImportFile](#ragimportfile) ||
| [rag.ragModelDimension](#ragmodeldimension) |WithModelDimension sets the model dimension |
| [rag.setSearchMeta](#setsearchmeta) |_setSearchMeta 快捷设置搜索元数据 (search_type 和 search_target)  用于同时设置 search_type 和 search_target 两个元数据字段    Parameters:    - searchType: 搜索类型，例如 &amp;#34;AI工具&amp;#...|
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


### BuildSearchIndexKnowledge

#### 详细描述
BuildSearchIndexKnowledge builds a search index for the given text content.

It generates 5-10 search questions that users might ask to find this content,

and stores the original content as the knowledge entry.



Parameters:

  - kbName: the knowledge base name

  - text: the content to index (e.g., tool description, usage, parameters)

  - options: optional configuration (rag options, AI options, etc.)



The function will:

1. Use AI to generate 5-10 search questions based on the text

2. Store the original text as the knowledge entry

3. Set docMetadata with question_index and search_target for each question



Example:
```yak
text = `
工具名：端口扫描器
目标：扫描目标主机的开放端口
用法：指定目标IP和端口范围，工具会返回开放的端口列表
`
result = rag.BuildSearchIndexKnowledge("my-tools", text)~
println("Generated questions:", result.Questions)
```


#### 定义

`BuildSearchIndexKnowledge(kbName string, text string, option ...any) (*aiforge.SearchIndexResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| text | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.SearchIndexResult` |   |
| r2 | `error` |   |


### BuildSearchIndexKnowledgeFromFile

#### 详细描述
BuildSearchIndexKnowledgeFromFile builds a search index from a file.

It reads the file content and calls BuildSearchIndexKnowledge.



Parameters:

  - kbName: the knowledge base name

  - filename: the path to the file containing the content to index

  - options: optional configuration (rag options, AI options, etc.)



Example:
```yak
result = rag.BuildSearchIndexKnowledgeFromFile("my-tools", "/path/to/tool-description.txt")~
println("Generated questions:", result.Questions)
```


#### 定义

`BuildSearchIndexKnowledgeFromFile(kbName string, filename string, option ...any) (*aiforge.SearchIndexResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| filename | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.SearchIndexResult` |   |
| r2 | `error` |   |


### DBQueryCountVectorsByEntry

#### 详细描述
_dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量

用于检查某个知识条目有多少向量索引



Parameters:

  - entryID: 知识条目的 HiddenIndex

  - opts: 查询选项



Example:
```yak

	count = rag.DBQueryCountVectorsByEntryID("abc123", rag.dbQueryRAGFilename("/tmp/caps.rag"))~
	println("This entry has", count, "vector indexes")

```


#### 定义

`DBQueryCountVectorsByEntry(entryID string, opts ...DBQueryOption) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| entryID | `string` |   |
| opts | `...DBQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |
| r2 | `error` |   |


### DBQueryEntity

#### 详细描述
_dbQueryEntity 数据库直接查询实体

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景



Parameters:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）



Example:
```yak

	// 基本用法
	entities = rag.DBQueryEntity("用户")~
	for _, entity := range entities {
	    println(entity.EntityName, entity.EntityType)
	}

	// 指定集合
	entities = rag.DBQueryEntity("关键词", rag.dbQueryCollection("my-repo"))~

	// 从 RAG 文件查询
	entities = rag.DBQueryEntity("关键词", rag.dbQueryRAGFilename("/tmp/my.rag"))~

```


#### 定义

`DBQueryEntity(keyword string, opts ...DBQueryOption) ([]*schema.ERModelEntity, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |
| opts | `...DBQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.ERModelEntity` |   |
| r2 | `error` |   |


### DBQueryKnowledge

#### 详细描述
_dbQueryKnowledge 数据库直接查询知识库条目

使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms）

适合去重检查、快速验证等场景



Parameters:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）



Example:
```yak

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

```


#### 定义

`DBQueryKnowledge(keyword string, opts ...DBQueryOption) ([]*schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |
| opts | `...DBQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### DBQueryKnowledgeExists

#### 详细描述
_dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引

这个函数用于增量更新时的去重检查

只有当知识条目存在且有对应的向量文档时，才认为该条目已被完整索引



Parameters:

  - keyword: 搜索关键词（通常是工具/插件名称）

  - opts: 查询选项



Returns:

  - *DBQueryKnowledgeExistsResult: 检查结果，包含是否存在、知识条目、向量数量等



Example:
```yak

	result = rag.DBQueryKnowledgeExists("get_location", rag.dbQueryRAGFilename("/tmp/caps.rag"))~
	if result.Exists {
	    println("Already indexed with", result.VectorDocCount, "vectors")
	}

```


#### 定义

`DBQueryKnowledgeExists(keyword string, opts ...DBQueryOption) (*DBQueryKnowledgeExistsResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |
| opts | `...DBQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DBQueryKnowledgeExistsResult` |   |
| r2 | `error` |   |


### DBQueryUniqueKnowledgeTitles

#### 详细描述
_dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表

使用 SQL DISTINCT 查询，返回不重复的 KnowledgeTitle 列表

适合增量更新时的快速去重检查



Parameters:

  - opts: 查询选项（集合、限制等）



Returns:

  - []string: 唯一的知识标题列表



Example:
```yak

	// 获取所有唯一的知识标题
	titles = rag.DBQueryUniqueKnowledgeTitles(rag.dbQueryCollection("my-collection"))~
	for _, title := range titles {
	    println(title)
	}

	// 从 RAG 文件查询
	titles = rag.DBQueryUniqueKnowledgeTitles(rag.dbQueryRAGFilename("/tmp/my.rag"))~

```


#### 定义

`DBQueryUniqueKnowledgeTitles(opts ...DBQueryOption) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...DBQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |
| r2 | `error` |   |


### DBQueryVectorDocument

#### 详细描述
_dbQueryVectorDocument 数据库直接查询向量文档

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景



Parameters:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）



Example:
```yak

	// 基本用法
	docs = rag.DBQueryVectorDocument("关键词")~
	for _, doc := range docs {
	    println(doc.DocumentID, doc.Content[:100])
	}

	// 指定集合
	docs = rag.DBQueryVectorDocument("关键词", rag.dbQueryCollection("my-collection"))~

	// 从 RAG 文件查询
	docs = rag.DBQueryVectorDocument("关键词", rag.dbQueryRAGFilename("/tmp/my.rag"))~

```


#### 定义

`DBQueryVectorDocument(keyword string, opts ...DBQueryOption) ([]*schema.VectorStoreDocument, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |
| opts | `...DBQueryOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.VectorStoreDocument` |   |
| r2 | `error` |   |


### DeleteAllKnowledgeBase

#### 详细描述
_deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容

清空所有: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等

Example:
```

	err = rag.DeleteAllKnowledgeBase()

```


#### 定义

`DeleteAllKnowledgeBase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


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


### DeleteKnowledgeBase

#### 详细描述
_deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容

包括: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等

Example:
```

	err = rag.DeleteKnowledgeBase("my_knowledge_base")

```


#### 定义

`DeleteKnowledgeBase(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### DeleteRAG

#### 详细描述
_deleteRAG 删除指定的 RAG 系统

Example:
```

	err = rag.DeleteRAG("my_rag")

```


#### 定义

`DeleteRAG(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Embedding

#### 详细描述
_embedding 生成文本的嵌入向量

使用默认的嵌入服务生成文本的向量表示（优先使用在线服务，回退到本地服务）

Example:
```

	result, err = rag.Embedding("你好")
	if err != nil {
	    // handle error
	}
	// result is []float32

```


#### 定义

`Embedding(text string) ([]float32, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]float32` |   |
| r2 | `error` |   |


### EnableMockMode

#### 详细描述


#### 定义

`EnableMockMode()`


### Export

#### 详细描述


#### 定义

`Export(collectionName string, fileName string, opts ...RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |   |
| fileName | `string` |   |
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

`Import(inputPath string, optFuncs ...RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| inputPath | `string` |   |
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


### ListRAG

#### 详细描述
_listRAG 列出所有 RAG 系统列表

Example:
```

	ragSystems = rag.ListRAG()

```


#### 定义

`ListRAG() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### LocalEmbedding

#### 详细描述
_localEmbedding 使用本地嵌入服务生成文本的向量表示

本地服务需要安装本地模型（如 Qwen3-Embedding-0.6B-Q4_K_M）

Example:
```

	result, err = rag.LocalEmbedding("你好")
	if err != nil {
	    // handle error - 本地服务不可用
	}
	// result is []float32, dimension: 1024

```


#### 定义

`LocalEmbedding(text string) ([]float32, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]float32` |   |
| r2 | `error` |   |


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


### OnlineEmbedding

#### 详细描述
_onlineEmbedding 使用在线嵌入服务生成文本的向量表示

使用 AIBalance 免费在线服务，无需安装本地模型

Example:
```

	result, err = rag.OnlineEmbedding("你好")
	if err != nil {
	    // handle error - 在线服务不可用
	}
	// result is []float32, dimension: 1024

```


#### 定义

`OnlineEmbedding(text string) ([]float32, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]float32` |   |
| r2 | `error` |   |


### Query

#### 详细描述
_query 统一的查询/搜索接口

支持多种查询模式:

1. 无参数 - 查询所有集合

2. queryCollection/queryCollections - 指定集合查询

3. queryRAGFilename - 从 RAG 文件导入后查询



Example:
```

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

```


#### 定义

`Query(query string, opts ...rag.RAGSystemConfigOption) (&lt;-chan *rag.RAGSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |
| opts | `...rag.RAGSystemConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *rag.RAGSearchResult` |   |
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


### dbQueryCollection

#### 详细描述
_dbQueryCollection 指定查询的集合名称（单个）

Example:
```

	results = rag.DBQueryKnowledge("关键词", rag.dbQueryCollection("my-collection"))

```


#### 定义

`dbQueryCollection(name string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


### dbQueryCollections

#### 详细描述
_dbQueryCollections 指定查询的多个集合名称

Example:
```

	results = rag.DBQueryKnowledge("关键词", rag.dbQueryCollections("col1", "col2"))

```


#### 定义

`dbQueryCollections(names ...string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


### dbQueryCtx

#### 详细描述
_dbQueryCtx 设置查询上下文

Example:
```

	ctx = context.WithTimeout(context.Background(), 10*time.Second)
	results = rag.DBQueryKnowledge("关键词", rag.dbQueryCtx(ctx))

```


#### 定义

`dbQueryCtx(ctx context.Context) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


### dbQueryDB

#### 详细描述
_dbQueryDB 指定数据库连接

Example:
```

	db = rag.NewRagDatabase("/path/to/db")
	results = rag.DBQueryKnowledge("关键词", rag.dbQueryDB(db))

```


#### 定义

`dbQueryDB(db *gorm.DB) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


### dbQueryLimit

#### 详细描述
_dbQueryLimit 设置查询结果数量限制

Example:
```

	results = rag.DBQueryKnowledge("关键词", rag.dbQueryLimit(10))

```


#### 定义

`dbQueryLimit(limit int) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


### dbQueryOffset

#### 详细描述
_dbQueryOffset 设置查询偏移量（用于分页）

Example:
```

	results = rag.DBQueryKnowledge("关键词", rag.dbQueryOffset(20), rag.dbQueryLimit(10))

```


#### 定义

`dbQueryOffset(offset int) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| offset | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


### dbQueryRAGFilename

#### 详细描述
_dbQueryRAGFilename 从 RAG 文件导入后查询

自动导入 RAG 文件到临时集合，然后在该集合上执行查询

Example:
```

	results = rag.DBQueryKnowledge("关键词", rag.dbQueryRAGFilename("/path/to/my.rag"))

```


#### 定义

`dbQueryRAGFilename(filename string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |   |


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


### enableQuestionIndex

#### 详细描述


#### 定义

`enableQuestionIndex(enable bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |   |


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


### noPotentialQuestions

#### 详细描述
NoPotentialQuestions returns a RAGSystemConfigOption that excludes potential_questions from metadata
This is a convenient shortcut for WithNoPotentialQuestions(true)


#### 定义

`noPotentialQuestions() RAGSystemConfigOption`

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


### queryCollections

#### 详细描述
_queryCollections 指定查询的多个集合名称

Example:
```

	results = rag.Query("如何使用 MITM 插件?", rag.queryCollections("collection1", "collection2", "collection3"))~

```


#### 定义

`queryCollections(names ...string) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` |   |


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


### queryRAGFilename

#### 详细描述
_queryRAGFilename 从 RAG 文件导入后查询（自动导入）

适合法规条文、技术规范等精确搜索场景

Example:
```

	results = rag.Query("法规第2.3条", rag.queryRAGFilename("/path/to/law.rag"))~

```


#### 定义

`queryRAGFilename(filename string) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` |   |


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


### querySimilarityThreshold

#### 详细描述
WithRAGSimilarityThreshold sets the minimum similarity threshold for results


#### 定义

`querySimilarityThreshold(threshold float64) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| threshold | `float64` |   |

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


### ragImportFile

#### 详细描述


#### 定义

`ragImportFile(importFile string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| importFile | `string` |   |

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


### setSearchMeta

#### 详细描述
_setSearchMeta 快捷设置搜索元数据 (search_type 和 search_target)

用于同时设置 search_type 和 search_target 两个元数据字段



Parameters:

  - searchType: 搜索类型，例如 &#34;AI工具&#34;, &#34;Yak插件&#34;, &#34;aiforge/模版/技能&#34; 等

  - searchTarget: 搜索目标，例如插件名称、工具名称等



Example:
```yak
rag.BuildSearchIndexKnowledge("my-tools", text, rag.setSearchMeta("AI工具", "端口扫描器"))
```


#### 定义

`setSearchMeta(searchType string, searchTarget string) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| searchType | `string` |   |
| searchTarget | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` |   |


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


