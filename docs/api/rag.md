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
| [rag.AddDocument](#adddocument) |_addDocument 向指定集合添加文档 参数: - knowledgeBaseName: 知识库/集合名称 - documentName: 文档名称 - document: 文档内容 - metadata: 文档元数据键值对 - opts: 可选的 RAG 系统配置选项 返回值: - 错误信息|
| [rag.BuildCollectionFromFile](#buildcollectionfromfile) |BuildKnowledgeFromFile 使用 AI 分析文件内容并构建知识库（导出名为 rag.BuildCollectionFromFile） 参数: - kbName: 知识库名称 - path: 文件路径 - option: 可选配置（并发、chunkSize、disableIndex ...|
| [rag.BuildCollectionFromRaw](#buildcollectionfromraw) |BuildKnowledgeFromBytes 使用 AI 分析字节内容并构建知识库（导出名为 rag.BuildCollectionFromRaw） 参数: - kbName: 知识库名称 - content: 待分析的原始字节内容 - option: 可选配置（并发、chunkSize、disa...|
| [rag.BuildCollectionFromReader](#buildcollectionfromreader) |BuildKnowledgeFromReader 使用 AI 分析 reader 内容并构建知识库（导出名为 rag.BuildCollectionFromReader） 参数: - kbName: 知识库名称 - reader: 数据源 reader - option: 可选配置（并发、chunk...|
| [rag.BuildIndexKnowledgeFromFile](#buildindexknowledgefromfile) |BuildIndexKnowledgeFromFile 从文件构建带索引的知识库条目（导出名为 rag.BuildIndexKnowledgeFromFile） 参数: - kbName: 知识库名称 - path: 文件路径 - option: 可选配置（chunkSize、并发等） 返回值: -...|
| [rag.BuildKnowledgeFromEntityRepos](#buildknowledgefromentityrepos) |BuildKnowledgeFromEntityReposByName 基于已有的实体仓库构建知识库（导出名为 rag.BuildKnowledgeFromEntityRepos） 参数: - name: 实体仓库名称 - option: 可选配置（并发、disableIndex 等） 返回值: -...|
| [rag.BuildSearchIndexKnowledge](#buildsearchindexknowledge) |BuildSearchIndexKnowledge builds a search index for the given text content. It generates 5-10 search questions that users might ask to find this conte...|
| [rag.BuildSearchIndexKnowledgeFromFile](#buildsearchindexknowledgefromfile) |BuildSearchIndexKnowledgeFromFile builds a search index from a file. It reads the file content and calls BuildSearchIndexKnowledge. 参数: - kbName: 知识库名...|
| [rag.DBQueryCountVectorsByEntry](#dbquerycountvectorsbyentry) |_dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量 用于检查某个知识条目有多少向量索引 Parameters: - entryID: 知识条目的 HiddenIndex - opts: 查询选项|
| [rag.DBQueryEntity](#dbqueryentity) |_dbQueryEntity 数据库直接查询实体 使用 SQL 模糊搜索，不使用语义搜索，速度非常快 适合去重检查、快速验证等场景 Parameters: - keyword: 搜索关键词 - opts: 查询选项（集合、限制、偏移等）|
| [rag.DBQueryKnowledge](#dbqueryknowledge) |_dbQueryKnowledge 数据库直接查询知识库条目 使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms） 适合去重检查、快速验证等场景 Parameters: - keyword: 搜索关键词 - opts: 查询选项（集合、限制、偏移等）|
| [rag.DBQueryKnowledgeExists](#dbqueryknowledgeexists) |_dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引 这个函数用于增量更新时的去重检查 只有当知识条目存在且有对应的向量文档时，才认为该条目已被完整索引 Parameters: - keyword: 搜索关键词（通常是工具/插件名称） - opts: 查询选项 Re...|
| [rag.DBQueryUniqueKnowledgeTitles](#dbqueryuniqueknowledgetitles) |_dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表 使用 SQL DISTINCT 查询，返回不重复的 KnowledgeTitle 列表 适合增量更新时的快速去重检查 Parameters: - opts: 查询选项（集合、限制等） Returns: - []str...|
| [rag.DBQueryVectorDocument](#dbqueryvectordocument) |_dbQueryVectorDocument 数据库直接查询向量文档 使用 SQL 模糊搜索，不使用语义搜索，速度非常快 适合去重检查、快速验证等场景 Parameters: - keyword: 搜索关键词 - opts: 查询选项（集合、限制、偏移等）|
| [rag.DeleteAllKnowledgeBase](#deleteallknowledgebase) |_deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容 清空所有: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等 参数: - 无 返回值: - 错误信息|
| [rag.DeleteCollection](#deletecollection) |_deleteCollection 删除指定的 RAG 集合 参数: - name: 集合名称 返回值: - 错误信息|
| [rag.DeleteDocument](#deletedocument) |_deleteDocument 从指定集合删除文档 参数: - knowledgeBaseName: 知识库/集合名称 - documentName: 文档名称 - opts: 可选的 RAG 系统配置选项 返回值: - 错误信息|
| [rag.DeleteKnowledgeBase](#deleteknowledgebase) |_deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容 包括: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等 参数: - name: 知识库名称 返回值: - 错误信息|
| [rag.DeleteRAG](#deleterag) |_deleteRAG 删除指定的 RAG 系统 参数: - name: RAG 系统名称 返回值: - 错误信息|
| [rag.Embedding](#embedding) |_embedding 生成文本的嵌入向量 使用默认的嵌入服务生成文本的向量表示（优先使用在线服务，回退到本地服务） 参数: - text: 待嵌入的文本 返回值: - 嵌入向量（[]float32） - 错误信息|
| [rag.EnableMockMode](#enablemockmode) ||
| [rag.Export](#export) |ExportRAG 将指定 RAG 集合导出为 .rag 二进制文件（导出名为 rag.Export） 参数: - collectionName: 要导出的集合名称 - fileName: 导出文件路径 - opts: 可选导出配置（noHNSWGraph、noMetadata、onlyPQCode...|
| [rag.Get](#get) |GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection） 参数: - name: RAG 系统/集合名称 - opts: 可选配置（嵌入模型、维度、描述等） 返回值: - RAG 系统对象 - 错误信息|
| [rag.GetCollection](#getcollection) |GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection） 参数: - name: RAG 系统/集合名称 - opts: 可选配置（嵌入模型、维度、描述等） 返回值: - RAG 系统对象 - 错误信息|
| [rag.GetCollectionInfo](#getcollectioninfo) |_getCollectionInfo 获取指定集合的详细信息 参数: - name: 集合名称 返回值: - 集合详细信息对象 - 错误信息|
| [rag.HasCollection](#hascollection) |_hasCollection 检查指定集合是否存在 参数: - name: 集合名称 返回值: - 是否存在|
| [rag.Import](#import) |ImportRAG 从 .rag 二进制文件导入 RAG 集合到数据库（导出名为 rag.Import） 参数: - inputPath: .rag 文件路径（支持 .gz 压缩） - optFuncs: 可选导入配置（db、importName、importOverwrite、importRebu...|
| [rag.ListCollection](#listcollection) |_listCollection 获取所有 RAG 集合列表 参数: - 无 返回值: - 集合名称列表|
| [rag.ListRAG](#listrag) |_listRAG 列出所有 RAG 系统列表 参数: - 无 返回值: - RAG 系统名称列表|
| [rag.LocalEmbedding](#localembedding) |_localEmbedding 使用本地嵌入服务生成文本的向量表示 本地服务需要安装本地模型（如 Qwen3-Embedding-0.6B-Q4_K_M） 参数: - text: 待嵌入的文本 返回值: - 嵌入向量（[]float32，维度 1024） - 错误信息|
| [rag.NewRagDatabase](#newragdatabase) |NewVectorStoreDatabase 在指定路径创建（或打开）一个向量存储数据库（导出名为 rag.NewRagDatabase） 参数: - path: sqlite 数据库文件路径 返回值: - 数据库连接对象 - 错误信息|
| [rag.NewTempRagDatabase](#newtempragdatabase) |_newTempRagDatabase 创建临时 RAG 数据库 参数: - 无 返回值: - 数据库连接对象 - 错误信息|
| [rag.OnlineEmbedding](#onlineembedding) |_onlineEmbedding 使用在线嵌入服务生成文本的向量表示 使用 AIBalance 免费在线服务，无需安装本地模型 参数: - text: 待嵌入的文本 返回值: - 嵌入向量（[]float32，维度 1024） - 错误信息|
| [rag.Query](#query) |_query 统一的查询/搜索接口 支持多种查询模式: 1. 无参数 - 查询所有集合 2. queryCollection/queryCollections - 指定集合查询 3. queryRAGFilename - 从 RAG 文件导入后查询|
| [rag.QueryDocuments](#querydocuments) |_queryDocuments 在指定集合中查询文档 参数: - knowledgeBaseName: 知识库/集合名称 - query: 查询文本 - limit: 返回结果数量上限 - opts: 可选的 RAG 系统配置选项 返回值: - 搜索结果列表 - 错误信息|
| [rag.aiService](#aiservice) ||
| [rag.aiServiceType](#aiservicetype) ||
| [rag.analyzeConcurrency](#analyzeconcurrency) ||
| [rag.buildFilter](#buildfilter) ||
| [rag.buildQuery](#buildquery) ||
| [rag.chunkSize](#chunksize) ||
| [rag.ctx](#ctx) |WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx） 参数: - ctx: 上下文对象 返回值: - 分析可选项|
| [rag.db](#db) ||
| [rag.dbQueryCollection](#dbquerycollection) |_dbQueryCollection 指定查询的集合名称（单个）|
| [rag.dbQueryCollections](#dbquerycollections) |_dbQueryCollections 指定查询的多个集合名称|
| [rag.dbQueryCtx](#dbqueryctx) |_dbQueryCtx 设置查询上下文|
| [rag.dbQueryDB](#dbquerydb) |_dbQueryDB 指定数据库连接|
| [rag.dbQueryLimit](#dbquerylimit) |_dbQueryLimit 设置查询结果数量限制|
| [rag.dbQueryOffset](#dbqueryoffset) |_dbQueryOffset 设置查询偏移量（用于分页）|
| [rag.dbQueryRAGFilename](#dbqueryragfilename) |_dbQueryRAGFilename 从 RAG 文件导入后查询 自动导入 RAG 文件到临时集合，然后在该集合上执行查询|
| [rag.disableERM](#disableerm) ||
| [rag.disableIndex](#disableindex) ||
| [rag.docMetadata](#docmetadata) |WithDocumentMetadataKeyValue sets document metadata key-value pairs|
| [rag.docRawMetadata](#docrawmetadata) |WithDocumentRawMetadata sets raw document metadata|
| [rag.documentHandler](#documenthandler) ||
| [rag.embeddingHandle](#embeddinghandle) |_embeddingHandle 创建自定义嵌入处理器 参数: - handle: 文本到向量的转换回调函数 返回值: - RAG 系统配置选项|
| [rag.enableQuestionIndex](#enablequestionindex) ||
| [rag.entryLength](#entrylength) |RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength） 参数: - length: 知识条目长度 返回值: - 知识构建可选项|
| [rag.extraPrompt](#extraprompt) |WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt） 参数: - prompt: 额外提示词 返回值: - 分析可选项|
| [rag.getEntityFilter](#getentityfilter) ||
| [rag.importName](#importname) |WithRAGCollectionName sets the specific collection name to query|
| [rag.importOverwrite](#importoverwrite) ||
| [rag.importRebuildGraph](#importrebuildgraph) ||
| [rag.khopLimit](#khoplimit) ||
| [rag.khopk](#khopk) |WithKHopK 设置k-hop的跳数，k&gt;=2时返回k-hop路径，k=0返回所有路径|
| [rag.khopkMax](#khopkmax) |WithKHopKMax 设置最大路径长度，最小值为2|
| [rag.khopkMin](#khopkmin) |WithKHopKMin 设置最小路径长度，最小值为2|
| [rag.lazyEmbedding](#lazyembedding) |_lazyEmbedding 设置是否延迟加载嵌入客户端（导出名为 rag.lazyEmbedding） 参数: - lazy: 是否延迟加载，缺省为 true 返回值: - RAG 系统配置选项|
| [rag.log](#log) |WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog） 参数: - handler: 日志回调函数，参数为格式化字符串与参数 返回值: - 分析可选项|
| [rag.noEntityRepository](#noentityrepository) |_noEntityRepository 禁用实体仓库 参数: - 无 返回值: - RAG 系统配置选项|
| [rag.noHNSWGraph](#nohnswgraph) ||
| [rag.noKnowledgeBase](#noknowledgebase) |_noKnowledgeBase 禁用知识库 参数: - 无 返回值: - RAG 系统配置选项|
| [rag.noMetadata](#nometadata) ||
| [rag.noOriginInput](#noorigininput) ||
| [rag.noPotentialQuestions](#nopotentialquestions) |NoPotentialQuestions returns a RAGSystemConfigOption that excludes potential_questions from metadata This is a convenient shortcut for WithNoPotential...|
| [rag.onlyPQCode](#onlypqcode) ||
| [rag.pathDepth](#pathdepth) ||
| [rag.progressHandler](#progresshandler) ||
| [rag.queryCollection](#querycollection) |WithRAGCollectionName sets the specific collection name to query|
| [rag.queryCollections](#querycollections) |_queryCollections 指定查询的多个集合名称 参数: - names: 一个或多个集合名称 返回值: - RAG 系统配置选项|
| [rag.queryConcurrent](#queryconcurrent) |WithRAGConcurrent sets the concurrency level for query operations|
| [rag.queryCtx](#queryctx) |WithRAGCtx sets the context for RAG query operations|
| [rag.queryEnhance](#queryenhance) |WithRAGEnhance sets the enhancement strategies to apply|
| [rag.queryLimit](#querylimit) |WithRAGLimit sets the maximum number of results to return|
| [rag.queryRAGFilename](#queryragfilename) |_queryRAGFilename 从 RAG 文件导入后查询（自动导入） 适合法规条文、技术规范等精确搜索场景 参数: - filename: RAG 文件路径 返回值: - RAG 系统配置选项|
| [rag.queryScoreLimit](#queryscorelimit) |WithRAGCollectionScoreLimit sets the score limit for collection filtering|
| [rag.querySimilarityThreshold](#querysimilaritythreshold) |WithRAGSimilarityThreshold sets the minimum similarity threshold for results|
| [rag.queryStatus](#querystatus) |WithRAGQueryStatus sets the query status callback function|
| [rag.queryType](#querytype) |WithRAGDocumentType sets the document type filter|
| [rag.ragCosineDistance](#ragcosinedistance) ||
| [rag.ragDescription](#ragdescription) ||
| [rag.ragEmbeddingModel](#ragembeddingmodel) ||
| [rag.ragForceNew](#ragforcenew) |WithForceNew sets whether to force creation of new collection|
| [rag.ragHNSWParameters](#raghnswparameters) |WithHNSWParameters sets HNSW parameters|
| [rag.ragImportFile](#ragimportfile) ||
| [rag.ragModelDimension](#ragmodeldimension) |WithModelDimension sets the model dimension|
| [rag.serialVersionUID](#serialversionuid) ||
| [rag.setSearchMeta](#setsearchmeta) |_setSearchMeta 快捷设置搜索元数据 (search_type 和 search_target) 用于同时设置 search_type 和 search_target 两个元数据字段 参数: - searchType: 搜索类型，例如 &#34;AI工具&#34;, &#34;Yak插件&#34;, &#34;aiforge/...|
| [rag.statusCard](#statuscard) |WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard） 参数: - handler: 状态卡片回调，参数为 (id, data, tags...) 返回值: - 分析可选项|


## 函数定义
### AddDocument

#### 详细描述
_addDocument 向指定集合添加文档

参数:

  - knowledgeBaseName: 知识库/集合名称

  - documentName: 文档名称

  - document: 文档内容

  - metadata: 文档元数据键值对

  - opts: 可选的 RAG 系统配置选项



返回值:

  - 错误信息




Example:

``````````````yak
err = rag.AddDocument("my_collection", "doc1", "content", {"key": "value"})
``````````````


#### 定义

`AddDocument(knowledgeBaseName string, documentName string, document string, metadata map[string]any, opts ...rag.RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` | 知识库/集合名称 |
| documentName | `string` | 文档名称 |
| document | `string` | 文档内容 |
| metadata | `map[string]any` | 文档元数据键值对 |
| opts | `...rag.RAGSystemConfigOption` | 可选的 RAG 系统配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### BuildCollectionFromFile

#### 详细描述
BuildKnowledgeFromFile 使用 AI 分析文件内容并构建知识库（导出名为 rag.BuildCollectionFromFile）

参数:

  - kbName: 知识库名称

  - path: 文件路径

  - option: 可选配置（并发、chunkSize、disableIndex 等）



返回值:

  - 知识条目 channel

  - 错误信息




Example:

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
entries = rag.BuildCollectionFromFile("my-kb", "/tmp/doc.txt")~

	for entry := range entries {
	    println(entry.KnowledgeTitle)
	}
``````````````


#### 定义

`BuildCollectionFromFile(kbName string, path string, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 知识库名称 |
| path | `string` | 文件路径 |
| option | `...any` | 可选配置（并发、chunkSize、disableIndex 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |


### BuildCollectionFromRaw

#### 详细描述
BuildKnowledgeFromBytes 使用 AI 分析字节内容并构建知识库（导出名为 rag.BuildCollectionFromRaw）

参数:

  - kbName: 知识库名称

  - content: 待分析的原始字节内容

  - option: 可选配置（并发、chunkSize、disableIndex 等）



返回值:

  - 知识条目 channel

  - 错误信息




Example:

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
entries = rag.BuildCollectionFromRaw("my-kb", []byte("some content"))~
``````````````


#### 定义

`BuildCollectionFromRaw(kbName string, content []byte, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 知识库名称 |
| content | `[]byte` | 待分析的原始字节内容 |
| option | `...any` | 可选配置（并发、chunkSize、disableIndex 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |


### BuildCollectionFromReader

#### 详细描述
BuildKnowledgeFromReader 使用 AI 分析 reader 内容并构建知识库（导出名为 rag.BuildCollectionFromReader）

参数:

  - kbName: 知识库名称

  - reader: 数据源 reader

  - option: 可选配置（并发、chunkSize、disableIndex 等）



返回值:

  - 知识条目 channel

  - 错误信息




Example:

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
f = file.Open("/tmp/doc.txt")~
entries = rag.BuildCollectionFromReader("my-kb", f)~
``````````````


#### 定义

`BuildCollectionFromReader(kbName string, reader io.Reader, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 知识库名称 |
| reader | `io.Reader` | 数据源 reader |
| option | `...any` | 可选配置（并发、chunkSize、disableIndex 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |


### BuildIndexKnowledgeFromFile

#### 详细描述
BuildIndexKnowledgeFromFile 从文件构建带索引的知识库条目（导出名为 rag.BuildIndexKnowledgeFromFile）

参数:

  - kbName: 知识库名称

  - path: 文件路径

  - option: 可选配置（chunkSize、并发等）



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库与嵌入服务（示意性示例）
rag.BuildIndexKnowledgeFromFile("my-kb", "/tmp/doc.txt")~
``````````````


#### 定义

`BuildIndexKnowledgeFromFile(kbName string, path string, option ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 知识库名称 |
| path | `string` | 文件路径 |
| option | `...any` | 可选配置（chunkSize、并发等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### BuildKnowledgeFromEntityRepos

#### 详细描述
BuildKnowledgeFromEntityReposByName 基于已有的实体仓库构建知识库（导出名为 rag.BuildKnowledgeFromEntityRepos）

参数:

  - name: 实体仓库名称

  - option: 可选配置（并发、disableIndex 等）



返回值:

  - 知识条目 channel

  - 错误信息




Example:

``````````````yak
// 依赖 AI 服务与本地数据库（示意性示例）
entries = rag.BuildKnowledgeFromEntityRepos("my-entity-repo")~
``````````````


#### 定义

`BuildKnowledgeFromEntityRepos(name string, option ...any) (<-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 实体仓库名称 |
| option | `...any` | 可选配置（并发、disableIndex 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识条目 channel |
| r2 | `error` | 错误信息 |


### BuildSearchIndexKnowledge

#### 详细描述
BuildSearchIndexKnowledge builds a search index for the given text content.

It generates 5-10 search questions that users might ask to find this content,

and stores the original content as the knowledge entry.



参数:

  - kbName: 知识库名称

  - text: 待索引的内容（如工具描述、用法、参数）

  - option: 可选配置（rag 选项、AI 选项等）



返回值:

  - 搜索索引结果（含生成的问题列表与 EntryID）

  - 错误信息



The function will:

1. Use AI to generate 5-10 search questions based on the text

2. Store the original text as the knowledge entry

3. Set docMetadata with question_index and search_target for each question




Example:

``````````````yak
text = `
工具名：端口扫描器
目标：扫描目标主机的开放端口
用法：指定目标IP和端口范围，工具会返回开放的端口列表
`
result = rag.BuildSearchIndexKnowledge("my-tools", text)~
println("Generated questions:", result.Questions)
``````````````


#### 定义

`BuildSearchIndexKnowledge(kbName string, text string, option ...any) (*aiforge.SearchIndexResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 知识库名称 |
| text | `string` | 待索引的内容（如工具描述、用法、参数） |
| option | `...any` | 可选配置（rag 选项、AI 选项等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.SearchIndexResult` | 搜索索引结果（含生成的问题列表与 EntryID） |
| r2 | `error` | 错误信息 |


### BuildSearchIndexKnowledgeFromFile

#### 详细描述
BuildSearchIndexKnowledgeFromFile builds a search index from a file.

It reads the file content and calls BuildSearchIndexKnowledge.



参数:

  - kbName: 知识库名称

  - filename: 待索引内容所在的文件路径

  - option: 可选配置（rag 选项、AI 选项等）



返回值:

  - 搜索索引结果（含生成的问题列表与 EntryID）

  - 错误信息




Example:

``````````````yak
result = rag.BuildSearchIndexKnowledgeFromFile("my-tools", "/path/to/tool-description.txt")~
println("Generated questions:", result.Questions)
``````````````


#### 定义

`BuildSearchIndexKnowledgeFromFile(kbName string, filename string, option ...any) (*aiforge.SearchIndexResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 知识库名称 |
| filename | `string` | 待索引内容所在的文件路径 |
| option | `...any` | 可选配置（rag 选项、AI 选项等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.SearchIndexResult` | 搜索索引结果（含生成的问题列表与 EntryID） |
| r2 | `error` | 错误信息 |


### DBQueryCountVectorsByEntry

#### 详细描述
_dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量

用于检查某个知识条目有多少向量索引



Parameters:

  - entryID: 知识条目的 HiddenIndex

  - opts: 查询选项




Example:

``````````````yak
count = rag.DBQueryCountVectorsByEntryID("abc123", rag.dbQueryRAGFilename("/tmp/caps.rag"))~
println("This entry has", count, "vector indexes")
``````````````


#### 定义

`DBQueryCountVectorsByEntry(entryID string, opts ...DBQueryOption) (int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| entryID | `string` |  |
| opts | `...DBQueryOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |  |
| r2 | `error` |  |


### DBQueryEntity

#### 详细描述
_dbQueryEntity 数据库直接查询实体

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景



Parameters:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）




Example:

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


#### 定义

`DBQueryEntity(keyword string, opts ...DBQueryOption) ([]*schema.ERModelEntity, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |  |
| opts | `...DBQueryOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.ERModelEntity` |  |
| r2 | `error` |  |


### DBQueryKnowledge

#### 详细描述
_dbQueryKnowledge 数据库直接查询知识库条目

使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms）

适合去重检查、快速验证等场景



Parameters:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）




Example:

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


#### 定义

`DBQueryKnowledge(keyword string, opts ...DBQueryOption) ([]*schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |  |
| opts | `...DBQueryOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.KnowledgeBaseEntry` |  |
| r2 | `error` |  |


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

``````````````yak
result = rag.DBQueryKnowledgeExists("get_location", rag.dbQueryRAGFilename("/tmp/caps.rag"))~
if result.Exists {
    println("Already indexed with", result.VectorDocCount, "vectors")
}
``````````````


#### 定义

`DBQueryKnowledgeExists(keyword string, opts ...DBQueryOption) (*DBQueryKnowledgeExistsResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |  |
| opts | `...DBQueryOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DBQueryKnowledgeExistsResult` |  |
| r2 | `error` |  |


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

``````````````yak
// 获取所有唯一的知识标题
titles = rag.DBQueryUniqueKnowledgeTitles(rag.dbQueryCollection("my-collection"))~
for _, title := range titles {
    println(title)
}

// 从 RAG 文件查询
titles = rag.DBQueryUniqueKnowledgeTitles(rag.dbQueryRAGFilename("/tmp/my.rag"))~
``````````````


#### 定义

`DBQueryUniqueKnowledgeTitles(opts ...DBQueryOption) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...DBQueryOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |  |
| r2 | `error` |  |


### DBQueryVectorDocument

#### 详细描述
_dbQueryVectorDocument 数据库直接查询向量文档

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景



Parameters:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）




Example:

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


#### 定义

`DBQueryVectorDocument(keyword string, opts ...DBQueryOption) ([]*schema.VectorStoreDocument, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |  |
| opts | `...DBQueryOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.VectorStoreDocument` |  |
| r2 | `error` |  |


### DeleteAllKnowledgeBase

#### 详细描述
_deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容

清空所有: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等

参数:

  - 无



返回值:

  - 错误信息




Example:

``````````````yak
err = rag.DeleteAllKnowledgeBase()
``````````````


#### 定义

`DeleteAllKnowledgeBase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DeleteCollection

#### 详细描述
_deleteCollection 删除指定的 RAG 集合

参数:

  - name: 集合名称



返回值:

  - 错误信息




Example:

``````````````yak
err = rag.DeleteCollection("my_collection")
``````````````


#### 定义

`DeleteCollection(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DeleteDocument

#### 详细描述
_deleteDocument 从指定集合删除文档

参数:

  - knowledgeBaseName: 知识库/集合名称

  - documentName: 文档名称

  - opts: 可选的 RAG 系统配置选项



返回值:

  - 错误信息




Example:

``````````````yak
err = rag.DeleteDocument("my_collection", "doc1")
``````````````


#### 定义

`DeleteDocument(knowledgeBaseName string, documentName string, opts ...rag.RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` | 知识库/集合名称 |
| documentName | `string` | 文档名称 |
| opts | `...rag.RAGSystemConfigOption` | 可选的 RAG 系统配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DeleteKnowledgeBase

#### 详细描述
_deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容

包括: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等

参数:

  - name: 知识库名称



返回值:

  - 错误信息




Example:

``````````````yak
err = rag.DeleteKnowledgeBase("my_knowledge_base")
``````````````


#### 定义

`DeleteKnowledgeBase(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 知识库名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DeleteRAG

#### 详细描述
_deleteRAG 删除指定的 RAG 系统

参数:

  - name: RAG 系统名称



返回值:

  - 错误信息




Example:

``````````````yak
err = rag.DeleteRAG("my_rag")
``````````````


#### 定义

`DeleteRAG(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | RAG 系统名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Embedding

#### 详细描述
_embedding 生成文本的嵌入向量

使用默认的嵌入服务生成文本的向量表示（优先使用在线服务，回退到本地服务）

参数:

  - text: 待嵌入的文本



返回值:

  - 嵌入向量（[]float32）

  - 错误信息




Example:

``````````````yak
result, err = rag.Embedding("你好")
if err != nil {
    // handle error
}
// result is []float32
``````````````


#### 定义

`Embedding(text string) ([]float32, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待嵌入的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]float32` | 嵌入向量（[]float32） |
| r2 | `error` | 错误信息 |


### EnableMockMode

#### 详细描述
暂无描述

#### 定义

`EnableMockMode()`


### Export

#### 详细描述
ExportRAG 将指定 RAG 集合导出为 .rag 二进制文件（导出名为 rag.Export）

参数:

  - collectionName: 要导出的集合名称

  - fileName: 导出文件路径

  - opts: 可选导出配置（noHNSWGraph、noMetadata、onlyPQCode 等）



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
rag.Export("my-collection", "/tmp/my-collection.rag")~
``````````````


#### 定义

`Export(collectionName string, fileName string, opts ...RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` | 要导出的集合名称 |
| fileName | `string` | 导出文件路径 |
| opts | `...RAGSystemConfigOption` | 可选导出配置（noHNSWGraph、noMetadata、onlyPQCode 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Get

#### 详细描述
GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection）

参数:

  - name: RAG 系统/集合名称

  - opts: 可选配置（嵌入模型、维度、描述等）



返回值:

  - RAG 系统对象

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库与嵌入服务（示意性示例）
db = rag.Get("my-collection")~
results = db.Query("hello", 5)~
``````````````


#### 定义

`Get(name string, opts ...RAGSystemConfigOption) (*RAGSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | RAG 系统/集合名称 |
| opts | `...RAGSystemConfigOption` | 可选配置（嵌入模型、维度、描述等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RAGSystem` | RAG 系统对象 |
| r2 | `error` | 错误信息 |


### GetCollection

#### 详细描述
GetRagSystem 获取（或按需创建）指定名称的 RAG 系统（导出名为 rag.Get / rag.GetCollection）

参数:

  - name: RAG 系统/集合名称

  - opts: 可选配置（嵌入模型、维度、描述等）



返回值:

  - RAG 系统对象

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库与嵌入服务（示意性示例）
db = rag.Get("my-collection")~
results = db.Query("hello", 5)~
``````````````


#### 定义

`GetCollection(name string, opts ...RAGSystemConfigOption) (*RAGSystem, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | RAG 系统/集合名称 |
| opts | `...RAGSystemConfigOption` | 可选配置（嵌入模型、维度、描述等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RAGSystem` | RAG 系统对象 |
| r2 | `error` | 错误信息 |


### GetCollectionInfo

#### 详细描述
_getCollectionInfo 获取指定集合的详细信息

参数:

  - name: 集合名称



返回值:

  - 集合详细信息对象

  - 错误信息




Example:

``````````````yak
info, err = rag.GetCollectionInfo("my_collection")
``````````````


#### 定义

`GetCollectionInfo(name string) (*vectorstore.CollectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*vectorstore.CollectionInfo` | 集合详细信息对象 |
| r2 | `error` | 错误信息 |


### HasCollection

#### 详细描述
_hasCollection 检查指定集合是否存在

参数:

  - name: 集合名称



返回值:

  - 是否存在




Example:

``````````````yak
exists = rag.HasCollection("my_collection")
``````````````


#### 定义

`HasCollection(name string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否存在 |


### Import

#### 详细描述
ImportRAG 从 .rag 二进制文件导入 RAG 集合到数据库（导出名为 rag.Import）

参数:

  - inputPath: .rag 文件路径（支持 .gz 压缩）

  - optFuncs: 可选导入配置（db、importName、importOverwrite、importRebuildGraph 等）



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
rag.Import("/tmp/my-collection.rag", rag.importName("imported-collection"))~
``````````````


#### 定义

`Import(inputPath string, optFuncs ...RAGSystemConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| inputPath | `string` | .rag 文件路径（支持 .gz 压缩） |
| optFuncs | `...RAGSystemConfigOption` | 可选导入配置（db、importName、importOverwrite、importRebuildGraph 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### ListCollection

#### 详细描述
_listCollection 获取所有 RAG 集合列表

参数:

  - 无



返回值:

  - 集合名称列表




Example:

``````````````yak
collections = rag.ListCollection()
``````````````


#### 定义

`ListCollection() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 集合名称列表 |


### ListRAG

#### 详细描述
_listRAG 列出所有 RAG 系统列表

参数:

  - 无



返回值:

  - RAG 系统名称列表




Example:

``````````````yak
ragSystems = rag.ListRAG()
``````````````


#### 定义

`ListRAG() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | RAG 系统名称列表 |


### LocalEmbedding

#### 详细描述
_localEmbedding 使用本地嵌入服务生成文本的向量表示

本地服务需要安装本地模型（如 Qwen3-Embedding-0.6B-Q4_K_M）

参数:

  - text: 待嵌入的文本



返回值:

  - 嵌入向量（[]float32，维度 1024）

  - 错误信息




Example:

``````````````yak
result, err = rag.LocalEmbedding("你好")
if err != nil {
    // handle error - 本地服务不可用
}
// result is []float32, dimension: 1024
``````````````


#### 定义

`LocalEmbedding(text string) ([]float32, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待嵌入的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]float32` | 嵌入向量（[]float32，维度 1024） |
| r2 | `error` | 错误信息 |


### NewRagDatabase

#### 详细描述
NewVectorStoreDatabase 在指定路径创建（或打开）一个向量存储数据库（导出名为 rag.NewRagDatabase）

参数:

  - path: sqlite 数据库文件路径



返回值:

  - 数据库连接对象

  - 错误信息




Example:

``````````````yak
db = rag.NewRagDatabase("/tmp/my-rag.db")~
``````````````


#### 定义

`NewRagDatabase(path string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | sqlite 数据库文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |


### NewTempRagDatabase

#### 详细描述
_newTempRagDatabase 创建临时 RAG 数据库

参数:

  - 无



返回值:

  - 数据库连接对象

  - 错误信息




Example:

``````````````yak
db, err = rag.NewTempRagDatabase()
``````````````


#### 定义

`NewTempRagDatabase() (*gorm.DB, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |


### OnlineEmbedding

#### 详细描述
_onlineEmbedding 使用在线嵌入服务生成文本的向量表示

使用 AIBalance 免费在线服务，无需安装本地模型

参数:

  - text: 待嵌入的文本



返回值:

  - 嵌入向量（[]float32，维度 1024）

  - 错误信息




Example:

``````````````yak
result, err = rag.OnlineEmbedding("你好")
if err != nil {
    // handle error - 在线服务不可用
}
// result is []float32, dimension: 1024
``````````````


#### 定义

`OnlineEmbedding(text string) ([]float32, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| text | `string` | 待嵌入的文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]float32` | 嵌入向量（[]float32，维度 1024） |
| r2 | `error` | 错误信息 |


### Query

#### 详细描述
_query 统一的查询/搜索接口

支持多种查询模式:

1. 无参数 - 查询所有集合

2. queryCollection/queryCollections - 指定集合查询

3. queryRAGFilename - 从 RAG 文件导入后查询




Example:

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


参数:
  - query: 查询文本
  - opts: 查询配置选项（集合、限制、增强等）

返回值:
  - 查询结果 channel
  - 错误信息
``````````````


#### 定义

`Query(query string, opts ...rag.RAGSystemConfigOption) (<-chan *rag.RAGSearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` | 查询文本 |
| opts | `...rag.RAGSystemConfigOption` | 查询配置选项（集合、限制、增强等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *rag.RAGSearchResult` | 查询结果 channel |
| r2 | `error` | 错误信息 |


### QueryDocuments

#### 详细描述
_queryDocuments 在指定集合中查询文档

参数:

  - knowledgeBaseName: 知识库/集合名称

  - query: 查询文本

  - limit: 返回结果数量上限

  - opts: 可选的 RAG 系统配置选项



返回值:

  - 搜索结果列表

  - 错误信息




Example:

``````````````yak
results, err = rag.QueryDocuments("my_collection", "query", 10)
``````````````


#### 定义

`QueryDocuments(knowledgeBaseName string, query string, limit int, opts ...rag.RAGSystemConfigOption) ([]*rag.SearchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` | 知识库/集合名称 |
| query | `string` | 查询文本 |
| limit | `int` | 返回结果数量上限 |
| opts | `...rag.RAGSystemConfigOption` | 可选的 RAG 系统配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*rag.SearchResult` | 搜索结果列表 |
| r2 | `error` | 错误信息 |


### aiService

#### 详细描述
暂无描述

#### 定义

`aiService(aiService aicommon.AICallbackType) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiService | `aicommon.AICallbackType` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### aiServiceType

#### 详细描述
暂无描述

#### 定义

`aiServiceType(aiServiceName string, aiServiceConfig ...aispec.AIConfigOption) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiServiceName | `string` |  |
| aiServiceConfig | `...aispec.AIConfigOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### analyzeConcurrency

#### 详细描述
暂无描述

#### 定义

`analyzeConcurrency(concurrency int) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrency | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |  |


### buildFilter

#### 详细描述
暂无描述

#### 定义

`buildFilter(filter *ypb.EntityFilter) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `*ypb.EntityFilter` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### buildQuery

#### 详细描述
暂无描述

#### 定义

`buildQuery(query string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### chunkSize

#### 详细描述
暂无描述

#### 定义

`chunkSize(size int64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### ctx

#### 详细描述
WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx）

参数:

  - ctx: 上下文对象



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.analyzeCtx(context.Background())
println(opt)
``````````````


#### 定义

`ctx(ctx context.Context) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### db

#### 详细描述
暂无描述

#### 定义

`db(db *gorm.DB) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### dbQueryCollection

#### 详细描述
_dbQueryCollection 指定查询的集合名称（单个）


Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryCollection("my-collection"))
``````````````


#### 定义

`dbQueryCollection(name string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### dbQueryCollections

#### 详细描述
_dbQueryCollections 指定查询的多个集合名称


Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryCollections("col1", "col2"))
``````````````


#### 定义

`dbQueryCollections(names ...string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### dbQueryCtx

#### 详细描述
_dbQueryCtx 设置查询上下文


Example:

``````````````yak
ctx = context.WithTimeout(context.Background(), 10*time.Second)
results = rag.DBQueryKnowledge("关键词", rag.dbQueryCtx(ctx))
``````````````


#### 定义

`dbQueryCtx(ctx context.Context) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### dbQueryDB

#### 详细描述
_dbQueryDB 指定数据库连接


Example:

``````````````yak
db = rag.NewRagDatabase("/path/to/db")
results = rag.DBQueryKnowledge("关键词", rag.dbQueryDB(db))
``````````````


#### 定义

`dbQueryDB(db *gorm.DB) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### dbQueryLimit

#### 详细描述
_dbQueryLimit 设置查询结果数量限制


Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryLimit(10))
``````````````


#### 定义

`dbQueryLimit(limit int) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### dbQueryOffset

#### 详细描述
_dbQueryOffset 设置查询偏移量（用于分页）


Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryOffset(20), rag.dbQueryLimit(10))
``````````````


#### 定义

`dbQueryOffset(offset int) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| offset | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### dbQueryRAGFilename

#### 详细描述
_dbQueryRAGFilename 从 RAG 文件导入后查询

自动导入 RAG 文件到临时集合，然后在该集合上执行查询


Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryRAGFilename("/path/to/my.rag"))
``````````````


#### 定义

`dbQueryRAGFilename(filename string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` |  |


### disableERM

#### 详细描述
暂无描述

#### 定义

`disableERM(disable bool) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |  |


### disableIndex

#### 详细描述
暂无描述

#### 定义

`disableIndex(disable bool) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |  |


### docMetadata

#### 详细描述
WithDocumentMetadataKeyValue sets document metadata key-value pairs


#### 定义

`docMetadata(key string, value any) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |  |
| value | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### docRawMetadata

#### 详细描述
WithDocumentRawMetadata sets raw document metadata


#### 定义

`docRawMetadata(metadata map[string]any) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| metadata | `map[string]any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### documentHandler

#### 详细描述
暂无描述

#### 定义

`documentHandler(documentHandler func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentHandler | `func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### embeddingHandle

#### 详细描述
_embeddingHandle 创建自定义嵌入处理器

参数:

  - handle: 文本到向量的转换回调函数



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
embeddingOpt = rag.embeddingHandle((text) => {
	return [0.1, 0.2, 0.3] // 返回嵌入向量
})
``````````````


#### 定义

`embeddingHandle(handle func(text string) any) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `func(text string) any` | 文本到向量的转换回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### enableQuestionIndex

#### 详细描述
暂无描述

#### 定义

`enableQuestionIndex(enable bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### entryLength

#### 详细描述
RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength）

参数:

  - length: 知识条目长度



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.knowledgeEntryLength(512)
println(opt)
``````````````


#### 定义

`entryLength(length int) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` | 知识条目长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### extraPrompt

#### 详细描述
WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt）

参数:

  - prompt: 额外提示词



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.imageExtraPrompt("focus on the error message in the screenshot")
println(opt)
``````````````


#### 定义

`extraPrompt(prompt string) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 额外提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### getEntityFilter

#### 详细描述
暂无描述

#### 定义

`getEntityFilter(reposName string, entityTypes []string, names []string, HiddenIndex []string, keywords []string) *ypb.EntityFilter`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reposName | `string` |  |
| entityTypes | `[]string` |  |
| names | `[]string` |  |
| HiddenIndex | `[]string` |  |
| keywords | `[]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ypb.EntityFilter` |  |


### importName

#### 详细描述
WithRAGCollectionName sets the specific collection name to query


#### 定义

`importName(collectionName string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### importOverwrite

#### 详细描述
暂无描述

#### 定义

`importOverwrite(overwriteExisting bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| overwriteExisting | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### importRebuildGraph

#### 详细描述
暂无描述

#### 定义

`importRebuildGraph(rebuildHNSWIndex bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rebuildHNSWIndex | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### khopLimit

#### 详细描述
暂无描述

#### 定义

`khopLimit(k int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### khopk

#### 详细描述
WithKHopK 设置k-hop的跳数，k&gt;=2时返回k-hop路径，k=0返回所有路径


#### 定义

`khopk(k int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### khopkMax

#### 详细描述
WithKHopKMax 设置最大路径长度，最小值为2


#### 定义

`khopkMax(kMax int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMax | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### khopkMin

#### 详细描述
WithKHopKMin 设置最小路径长度，最小值为2


#### 定义

`khopkMin(kMin int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMin | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### lazyEmbedding

#### 详细描述
_lazyEmbedding 设置是否延迟加载嵌入客户端（导出名为 rag.lazyEmbedding）

参数:

  - lazy: 是否延迟加载，缺省为 true



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.lazyEmbedding(true))~
``````````````


#### 定义

`lazyEmbedding(lazy ...bool) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| lazy | `...bool` | 是否延迟加载，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### log

#### 详细描述
WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog）

参数:

  - handler: 日志回调函数，参数为格式化字符串与参数



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.analyzeLog(func(format, args...) { println(sprintf(format, args...)) })
println(opt)
``````````````


#### 定义

`log(handler func(format string, args ...any)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(format string, args ...any)` | 日志回调函数，参数为格式化字符串与参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### noEntityRepository

#### 详细描述
_noEntityRepository 禁用实体仓库

参数:

  - 无



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.noEntityRepository()
``````````````


#### 定义

`noEntityRepository() rag.RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### noHNSWGraph

#### 详细描述
暂无描述

#### 定义

`noHNSWGraph(noHNSWGraph bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noHNSWGraph | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### noKnowledgeBase

#### 详细描述
_noKnowledgeBase 禁用知识库

参数:

  - 无



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.noKnowledgeBase()
``````````````


#### 定义

`noKnowledgeBase() rag.RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### noMetadata

#### 详细描述
暂无描述

#### 定义

`noMetadata(noMetadata bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noMetadata | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### noOriginInput

#### 详细描述
暂无描述

#### 定义

`noOriginInput(noOriginInput bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noOriginInput | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### noPotentialQuestions

#### 详细描述
NoPotentialQuestions returns a RAGSystemConfigOption that excludes potential_questions from metadata
This is a convenient shortcut for WithNoPotentialQuestions(true)


#### 定义

`noPotentialQuestions() RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### onlyPQCode

#### 详细描述
暂无描述

#### 定义

`onlyPQCode(onlyPQCode bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onlyPQCode | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### pathDepth

#### 详细描述
暂无描述

#### 定义

`pathDepth(deep int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| deep | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### progressHandler

#### 详细描述
暂无描述

#### 定义

`progressHandler(progressHandler func(percent float64, message string, messageType string)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progressHandler | `func(percent float64, message string, messageType string)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryCollection

#### 详细描述
WithRAGCollectionName sets the specific collection name to query


#### 定义

`queryCollection(collectionName string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryCollections

#### 详细描述
_queryCollections 指定查询的多个集合名称

参数:

  - names: 一个或多个集合名称



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("如何使用 MITM 插件?", rag.queryCollections("collection1", "collection2", "collection3"))~
``````````````


#### 定义

`queryCollections(names ...string) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` | 一个或多个集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### queryConcurrent

#### 详细描述
WithRAGConcurrent sets the concurrency level for query operations


#### 定义

`queryConcurrent(concurrent int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryCtx

#### 详细描述
WithRAGCtx sets the context for RAG query operations


#### 定义

`queryCtx(ctx context.Context) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryEnhance

#### 详细描述
WithRAGEnhance sets the enhancement strategies to apply


#### 定义

`queryEnhance(enhance ...string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enhance | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryLimit

#### 详细描述
WithRAGLimit sets the maximum number of results to return


#### 定义

`queryLimit(limit int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryRAGFilename

#### 详细描述
_queryRAGFilename 从 RAG 文件导入后查询（自动导入）

适合法规条文、技术规范等精确搜索场景

参数:

  - filename: RAG 文件路径



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("法规第2.3条", rag.queryRAGFilename("/path/to/law.rag"))~
``````````````


#### 定义

`queryRAGFilename(filename string) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | RAG 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### queryScoreLimit

#### 详细描述
WithRAGCollectionScoreLimit sets the score limit for collection filtering


#### 定义

`queryScoreLimit(scoreLimit float64) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scoreLimit | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### querySimilarityThreshold

#### 详细描述
WithRAGSimilarityThreshold sets the minimum similarity threshold for results


#### 定义

`querySimilarityThreshold(threshold float64) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| threshold | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryStatus

#### 详细描述
WithRAGQueryStatus sets the query status callback function


#### 定义

`queryStatus(callback func(label string, i any, tags ...string)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(label string, i any, tags ...string)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### queryType

#### 详细描述
WithRAGDocumentType sets the document type filter


#### 定义

`queryType(documentType ...string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentType | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### ragCosineDistance

#### 详细描述
暂无描述

#### 定义

`ragCosineDistance()`


### ragDescription

#### 详细描述
暂无描述

#### 定义

`ragDescription(description string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### ragEmbeddingModel

#### 详细描述
暂无描述

#### 定义

`ragEmbeddingModel(model string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| model | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### ragForceNew

#### 详细描述
WithForceNew sets whether to force creation of new collection


#### 定义

`ragForceNew(force bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### ragHNSWParameters

#### 详细描述
WithHNSWParameters sets HNSW parameters


#### 定义

`ragHNSWParameters(m int, ml float64, efSearch int, efConstruct int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` |  |
| ml | `float64` |  |
| efSearch | `int` |  |
| efConstruct | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### ragImportFile

#### 详细描述
暂无描述

#### 定义

`ragImportFile(importFile string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| importFile | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### ragModelDimension

#### 详细描述
WithModelDimension sets the model dimension


#### 定义

`ragModelDimension(dimension int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dimension | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### serialVersionUID

#### 详细描述
暂无描述

#### 定义

`serialVersionUID(serialVersionUID string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| serialVersionUID | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` |  |


### setSearchMeta

#### 详细描述
_setSearchMeta 快捷设置搜索元数据 (search_type 和 search_target)

用于同时设置 search_type 和 search_target 两个元数据字段



参数:

  - searchType: 搜索类型，例如 &#34;AI工具&#34;, &#34;Yak插件&#34;, &#34;aiforge/模版/技能&#34; 等

  - searchTarget: 搜索目标，例如插件名称、工具名称等



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.BuildSearchIndexKnowledge("my-tools", text, rag.setSearchMeta("AI工具", "端口扫描器"))
``````````````


#### 定义

`setSearchMeta(searchType string, searchTarget string) rag.RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| searchType | `string` | 搜索类型，例如 &#34;AI工具&#34;, &#34;Yak插件&#34;, &#34;aiforge/模版/技能&#34; 等 |
| searchTarget | `string` | 搜索目标，例如插件名称、工具名称等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `rag.RAGSystemConfigOption` | RAG 系统配置选项 |


### statusCard

#### 详细描述
WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard）

参数:

  - handler: 状态卡片回调，参数为 (id, data, tags...)



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.analyzeStatusCard(func(id, data, tags...) { println(id, data) })
println(opt)
``````````````


#### 定义

`statusCard(handler func(id string, data any, tags ...string)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(id string, data any, tags ...string)` | 状态卡片回调，参数为 (id, data, tags...) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


