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
| [rag.DBQueryCountVectorsByEntry](#dbquerycountvectorsbyentry) |_dbQueryCountVectorsByEntryID 根据 entry_id 计算向量文档数量 用于检查某个知识条目有多少向量索引 参数: - entryID: 知识条目的 HiddenIndex - opts: 查询选项 返回值: - 向量文档数量 - 错误信息|
| [rag.DBQueryEntity](#dbqueryentity) |_dbQueryEntity 数据库直接查询实体 使用 SQL 模糊搜索，不使用语义搜索，速度非常快 适合去重检查、快速验证等场景 参数: - keyword: 搜索关键词 - opts: 查询选项（集合、限制、偏移等） 返回值: - 实体列表 - 错误信息|
| [rag.DBQueryKnowledge](#dbqueryknowledge) |_dbQueryKnowledge 数据库直接查询知识库条目 使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms） 适合去重检查、快速验证等场景 参数: - keyword: 搜索关键词 - opts: 查询选项（集合、限制、偏移等） 返回值: - 知识库条目列表 - 错误信息|
| [rag.DBQueryKnowledgeExists](#dbqueryknowledgeexists) |_dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引 这个函数用于增量更新时的去重检查 只有当知识条目存在且有对应的向量文档时，才认为该条目已被完整索引 参数: - keyword: 搜索关键词（通常是工具/插件名称） - opts: 查询选项 返回值: - 检查结...|
| [rag.DBQueryUniqueKnowledgeTitles](#dbqueryuniqueknowledgetitles) |_dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表 使用 SQL DISTINCT 查询，返回不重复的 KnowledgeTitle 列表 适合增量更新时的快速去重检查 参数: - opts: 查询选项（集合、限制等） 返回值: - 唯一的知识标题列表 - 错误信息|
| [rag.DBQueryVectorDocument](#dbqueryvectordocument) |_dbQueryVectorDocument 数据库直接查询向量文档 使用 SQL 模糊搜索，不使用语义搜索，速度非常快 适合去重检查、快速验证等场景 参数: - keyword: 搜索关键词 - opts: 查询选项（集合、限制、偏移等） 返回值: - 向量文档列表 - 错误信息|
| [rag.DeleteAllKnowledgeBase](#deleteallknowledgebase) |_deleteAllKnowledgeBase 删除所有知识库及其关联的 RAG 内容 清空所有: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等 参数: - 无 返回值: - 错误信息|
| [rag.DeleteCollection](#deletecollection) |_deleteCollection 删除指定的 RAG 集合 参数: - name: 集合名称 返回值: - 错误信息|
| [rag.DeleteDocument](#deletedocument) |_deleteDocument 从指定集合删除文档 参数: - knowledgeBaseName: 知识库/集合名称 - documentName: 文档名称 - opts: 可选的 RAG 系统配置选项 返回值: - 错误信息|
| [rag.DeleteKnowledgeBase](#deleteknowledgebase) |_deleteKnowledgeBase 删除指定的知识库及其关联的 RAG 内容 包括: RAG 向量库、RAG 集合综述库、知识库条目库、知识库集合、问题索引库等 参数: - name: 知识库名称 返回值: - 错误信息|
| [rag.DeleteRAG](#deleterag) |_deleteRAG 删除指定的 RAG 系统 参数: - name: RAG 系统名称 返回值: - 错误信息|
| [rag.Embedding](#embedding) |_embedding 生成文本的嵌入向量 使用默认的嵌入服务生成文本的向量表示（优先使用在线服务，回退到本地服务） 参数: - text: 待嵌入的文本 返回值: - 嵌入向量（[]float32） - 错误信息|
| [rag.EnableMockMode](#enablemockmode) |_enableMockMode 启用模拟模式（使用 mock 嵌入服务，便于测试） 参数: - 无 返回值: - 无|
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
| [rag.aiService](#aiservice) |aiService 直接指定 RAG 使用的 AI 回调服务（导出名为 rag.aiService） 参数: - aiService: AI 回调函数，用于实体抽取、问题生成等增强能力 返回值: - RAG 系统配置选项|
| [rag.aiServiceType](#aiservicetype) |aiServiceType 按名称与配置指定 RAG 使用的 AI 服务（导出名为 rag.aiServiceType） 参数: - aiServiceName: AI 服务名称（如 openai、ollama 等） - aiServiceConfig: 可选的 AI 配置项（如 ai.apiKey...|
| [rag.analyzeConcurrency](#analyzeconcurrency) |analyzeConcurrency 控制知识构建分析的并发数（在 rag 中导出名为 rag.analyzeConcurrency） 参数: - concurrency: 分析并发数（同时处理的分块数量） 返回值: - 分析配置选项|
| [rag.buildFilter](#buildfilter) |buildFilter 设置 k-hop 查询的起始实体过滤条件（导出名为 rag.buildFilter） 参数: - filter: 实体过滤器，用于确定路径搜索的起点实体 返回值: - RAG 系统配置选项|
| [rag.buildQuery](#buildquery) |buildQuery 设置 k-hop 查询所用的 RAG 检索语句（导出名为 rag.buildQuery），用于定位起始实体 参数: - query: 检索关键词或语句 返回值: - RAG 系统配置选项|
| [rag.chunkSize](#chunksize) |chunkSize 设置文本分块的大小（在 rag 中导出名为 rag.chunkSize），单位为字符数 参数: - size: 每个分块的目标大小 返回值: - 分块器配置选项|
| [rag.ctx](#ctx) |WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx） 参数: - ctx: 上下文对象 返回值: - 分析可选项|
| [rag.db](#db) |db 指定 RAG 使用的数据库连接（导出名为 rag.db） 参数: - db: 数据库连接对象 返回值: - RAG 系统配置选项|
| [rag.dbQueryCollection](#dbquerycollection) |_dbQueryCollection 指定查询的集合名称（单个） 参数: - name: 集合名称 返回值: - 数据库查询选项|
| [rag.dbQueryCollections](#dbquerycollections) |_dbQueryCollections 指定查询的多个集合名称 参数: - names: 一个或多个集合名称 返回值: - 数据库查询选项|
| [rag.dbQueryCtx](#dbqueryctx) |_dbQueryCtx 设置查询上下文 参数: - ctx: 上下文，可用于超时/取消控制 返回值: - 数据库查询选项|
| [rag.dbQueryDB](#dbquerydb) |_dbQueryDB 指定数据库连接 参数: - db: 数据库连接对象（由 rag.NewRagDatabase 等创建） 返回值: - 数据库查询选项|
| [rag.dbQueryLimit](#dbquerylimit) |_dbQueryLimit 设置查询结果数量限制 参数: - limit: 返回结果数量上限 返回值: - 数据库查询选项|
| [rag.dbQueryOffset](#dbqueryoffset) |_dbQueryOffset 设置查询偏移量（用于分页） 参数: - offset: 偏移量（跳过的记录数） 返回值: - 数据库查询选项|
| [rag.dbQueryRAGFilename](#dbqueryragfilename) |_dbQueryRAGFilename 从 RAG 文件导入后查询 自动导入 RAG 文件到临时集合，然后在该集合上执行查询 参数: - filename: RAG 文件路径 返回值: - 数据库查询选项|
| [rag.disableERM](#disableerm) |disableERM 是否禁用实体关系模型（ERM）构建（在 rag 中导出名为 rag.disableERM） 参数: - disable: 为 true 时不构建实体仓库/关系图谱 返回值: - 精炼配置选项|
| [rag.disableIndex](#disableindex) |disableIndex 是否禁用知识索引构建（在 rag 中导出名为 rag.disableIndex） 参数: - disable: 为 true 时不构建知识索引（仅做内容精炼） 返回值: - 精炼配置选项|
| [rag.docMetadata](#docmetadata) |docMetadata 为文档添加一个元数据键值对（导出名为 rag.docMetadata），可多次调用累加 参数: - key: 元数据键 - value: 元数据值（任意类型） 返回值: - RAG 系统配置选项|
| [rag.docRawMetadata](#docrawmetadata) |docRawMetadata 直接设置文档的原始元数据 map（导出名为 rag.docRawMetadata） 参数: - metadata: 元数据键值映射 返回值: - RAG 系统配置选项|
| [rag.documentHandler](#documenthandler) |documentHandler 导出 RAG 时对每个文档进行处理的回调（导出名为 rag.documentHandler） 参数: - documentHandler: 处理函数，接收一个文档并返回处理后的文档与错误 返回值: - RAG 系统配置选项|
| [rag.embeddingHandle](#embeddinghandle) |_embeddingHandle 创建自定义嵌入处理器 参数: - handle: 文本到向量的转换回调函数 返回值: - RAG 系统配置选项|
| [rag.enableQuestionIndex](#enablequestionindex) |enableQuestionIndex 是否启用文档潜在问题索引（导出名为 rag.enableQuestionIndex） 开启后会为文档生成潜在问题并建立索引，提升问答类查询的召回效果。 参数: - enable: 为 true 时启用文档问题索引 返回值: - RAG 系统配置选项|
| [rag.entryLength](#entrylength) |RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength） 参数: - length: 知识条目长度 返回值: - 知识构建可选项|
| [rag.extraPrompt](#extraprompt) |WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt） 参数: - prompt: 额外提示词 返回值: - 分析可选项|
| [rag.getEntityFilter](#getentityfilter) |getEntityFilter 构建一个实体过滤器（在 rag 中导出名为 rag.getEntityFilter），用于 k-hop 查询等场景 参数: - reposName: 实体仓库名称 - entityTypes: 实体类型列表 - names: 实体名称列表 - HiddenIndex:...|
| [rag.importName](#importname) |queryCollection 指定要查询的集合名称（导出名为 rag.queryCollection，导入时别名 rag.importName） 参数: - collectionName: 集合名称 返回值: - RAG 系统配置选项|
| [rag.importOverwrite](#importoverwrite) |importOverwrite 导入 RAG 时是否覆盖已存在的同名集合（导出名为 rag.importOverwrite） 参数: - overwriteExisting: 为 true 时覆盖已存在的集合 返回值: - RAG 系统配置选项|
| [rag.importRebuildGraph](#importrebuildgraph) |importRebuildGraph 导入 RAG 时是否重建 HNSW 索引（导出名为 rag.importRebuildGraph） 参数: - rebuildHNSWIndex: 为 true 时在导入后重建 HNSW 索引 返回值: - RAG 系统配置选项|
| [rag.khopLimit](#khoplimit) |khopLimit 设置 k-hop 查询返回的路径数量上限（导出名为 rag.khopLimit） 参数: - k: 路径数量上限，负数会被归一为 0 返回值: - RAG 系统配置选项|
| [rag.khopk](#khopk) |khopk 设置 k-hop 的跳数（导出名为 rag.khopk），k&gt;=2 时返回 k-hop 路径，k=0 返回所有路径 参数: - k: 跳数，负数会被归一为 0 返回值: - RAG 系统配置选项|
| [rag.khopkMax](#khopkmax) |khopkMax 设置最大路径长度（导出名为 rag.khopkMax） 参数: - kMax: 最大路径长度 返回值: - RAG 系统配置选项|
| [rag.khopkMin](#khopkmin) |khopkMin 设置最小路径长度（导出名为 rag.khopkMin），最小值为 2 参数: - kMin: 最小路径长度，小于 2 时会被归一为 2 返回值: - RAG 系统配置选项|
| [rag.lazyEmbedding](#lazyembedding) |_lazyEmbedding 设置是否延迟加载嵌入客户端（导出名为 rag.lazyEmbedding） 参数: - lazy: 是否延迟加载，缺省为 true 返回值: - RAG 系统配置选项|
| [rag.log](#log) |WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog） 参数: - handler: 日志回调函数，参数为格式化字符串与参数 返回值: - 分析可选项|
| [rag.noEntityRepository](#noentityrepository) |_noEntityRepository 禁用实体仓库 参数: - 无 返回值: - RAG 系统配置选项|
| [rag.noHNSWGraph](#nohnswgraph) |noHNSWGraph 导出 RAG 时是否不导出 HNSW 索引（导出名为 rag.noHNSWGraph） 参数: - noHNSWGraph: 为 true 时导出包不含 HNSW 索引（导入时可重建） 返回值: - RAG 系统配置选项|
| [rag.noKnowledgeBase](#noknowledgebase) |_noKnowledgeBase 禁用知识库 参数: - 无 返回值: - RAG 系统配置选项|
| [rag.noMetadata](#nometadata) |noMetadata 导出 RAG 时是否不导出元数据（导出名为 rag.noMetadata） 参数: - noMetadata: 为 true 时导出包不含文档元数据 返回值: - RAG 系统配置选项|
| [rag.noOriginInput](#noorigininput) |noOriginInput 导出 RAG 时是否不导出原始输入内容（导出名为 rag.noOriginInput） 参数: - noOriginInput: 为 true 时导出包不含原始输入文本 返回值: - RAG 系统配置选项|
| [rag.noPotentialQuestions](#nopotentialquestions) |noPotentialQuestions 返回一个不在元数据中保存潜在问题的配置选项（导出名为 rag.noPotentialQuestions） 等价于 WithNoPotentialQuestions(true)，可减少存储开销。 返回值: - RAG 系统配置选项|
| [rag.onlyPQCode](#onlypqcode) |onlyPQCode 导出 RAG 时是否仅导出 PQ 编码（导出名为 rag.onlyPQCode） 参数: - onlyPQCode: 为 true 时仅导出 PQ 编码以减小体积 返回值: - RAG 系统配置选项|
| [rag.pathDepth](#pathdepth) |pathDepth 设置 k-hop 查询的路径深度（导出名为 rag.pathDepth），至少为 1 参数: - deep: 路径深度，小于 1 时会被归一为 1 返回值: - RAG 系统配置选项|
| [rag.progressHandler](#progresshandler) |progressHandler 导出 RAG 时的进度回调（导出名为 rag.progressHandler） 参数: - progressHandler: 进度回调，接收百分比、消息文本与消息类型 返回值: - RAG 系统配置选项|
| [rag.queryCollection](#querycollection) |queryCollection 指定要查询的集合名称（导出名为 rag.queryCollection，导入时别名 rag.importName） 参数: - collectionName: 集合名称 返回值: - RAG 系统配置选项|
| [rag.queryCollections](#querycollections) |_queryCollections 指定查询的多个集合名称 参数: - names: 一个或多个集合名称 返回值: - RAG 系统配置选项|
| [rag.queryConcurrent](#queryconcurrent) |queryConcurrent 设置查询操作的并发数（导出名为 rag.queryConcurrent） 参数: - concurrent: 并发数（同时检索的子查询数量） 返回值: - RAG 系统配置选项|
| [rag.queryCtx](#queryctx) |queryCtx 设置 RAG 查询操作的上下文（导出名为 rag.queryCtx），可用于超时/取消控制 参数: - ctx: 上下文对象 返回值: - RAG 系统配置选项|
| [rag.queryEnhance](#queryenhance) |queryEnhance 设置查询增强策略（导出名为 rag.queryEnhance），用于扩展或改写查询以提升召回 参数: - enhance: 一个或多个增强策略名称 返回值: - RAG 系统配置选项|
| [rag.queryLimit](#querylimit) |queryLimit 设置查询返回结果的最大数量（导出名为 rag.queryLimit） 参数: - limit: 返回结果数量上限 返回值: - RAG 系统配置选项|
| [rag.queryRAGFilename](#queryragfilename) |_queryRAGFilename 从 RAG 文件导入后查询（自动导入） 适合法规条文、技术规范等精确搜索场景 参数: - filename: RAG 文件路径 返回值: - RAG 系统配置选项|
| [rag.queryScoreLimit](#queryscorelimit) |queryScoreLimit 设置集合过滤的分数阈值（导出名为 rag.queryScoreLimit） 参数: - scoreLimit: 集合分数阈值，低于该值的集合将被跳过 返回值: - RAG 系统配置选项|
| [rag.querySimilarityThreshold](#querysimilaritythreshold) |querySimilarityThreshold 设置结果的最小相似度阈值（导出名为 rag.querySimilarityThreshold） 参数: - threshold: 相似度阈值（0~1），低于该值的结果将被过滤 返回值: - RAG 系统配置选项|
| [rag.queryStatus](#querystatus) |queryStatus 设置查询状态回调函数（导出名为 rag.queryStatus），用于接收查询过程中的状态信息 参数: - callback: 状态回调，接收标签、任意数据与可选标签列表 返回值: - RAG 系统配置选项|
| [rag.queryType](#querytype) |queryType 设置文档类型过滤（导出名为 rag.queryType），仅查询指定类型的文档 参数: - documentType: 一个或多个文档类型 返回值: - RAG 系统配置选项|
| [rag.ragCosineDistance](#ragcosinedistance) |ragCosineDistance 使用余弦距离作为向量相似度度量（导出名为 rag.ragCosineDistance） 返回值: - RAG 系统配置选项|
| [rag.ragDescription](#ragdescription) |ragDescription 设置 RAG 集合的描述信息（导出名为 rag.ragDescription） 参数: - description: 集合描述文本 返回值: - RAG 系统配置选项|
| [rag.ragEmbeddingModel](#ragembeddingmodel) |ragEmbeddingModel 设置 RAG 使用的 embedding 模型名称（导出名为 rag.ragEmbeddingModel） 参数: - model: embedding 模型名称（如 text-embedding-3-small） 返回值: - RAG 系统配置选项|
| [rag.ragForceNew](#ragforcenew) |ragForceNew 是否强制创建新集合（导出名为 rag.ragForceNew），为 true 时会覆盖同名集合 参数: - force: 为 true 时强制新建集合 返回值: - RAG 系统配置选项|
| [rag.ragHNSWParameters](#raghnswparameters) |ragHNSWParameters 设置 HNSW 索引参数（导出名为 rag.ragHNSWParameters） 参数: - m: 每个节点的最大连接数 - ml: 层级生成因子 - efSearch: 查询时的候选集大小（影响召回与速度） - efConstruct: 构建索引时的候选集大小 ...|
| [rag.ragImportFile](#ragimportfile) |ragImportFile 指定导入所用的 RAG 文件路径（导出名为 rag.ragImportFile） 参数: - importFile: RAG 文件路径 返回值: - RAG 系统配置选项|
| [rag.ragModelDimension](#ragmodeldimension) |ragModelDimension 设置 embedding 模型的向量维度（导出名为 rag.ragModelDimension） 参数: - dimension: 向量维度（需与所用 embedding 模型一致） 返回值: - RAG 系统配置选项|
| [rag.serialVersionUID](#serialversionuid) |serialVersionUID 设置 RAG 序列化版本标识（导出名为 rag.serialVersionUID），用于导入导出时的兼容性校验 参数: - serialVersionUID: 序列化版本号字符串 返回值: - RAG 系统配置选项|
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



参数:

  - entryID: 知识条目的 HiddenIndex

  - opts: 查询选项



返回值:

  - 向量文档数量

  - 错误信息




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
| entryID | `string` | 知识条目的 HiddenIndex |
| opts | `...DBQueryOption` | 查询选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 向量文档数量 |
| r2 | `error` | 错误信息 |


### DBQueryEntity

#### 详细描述
_dbQueryEntity 数据库直接查询实体

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景



参数:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）



返回值:

  - 实体列表

  - 错误信息




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
| keyword | `string` | 搜索关键词 |
| opts | `...DBQueryOption` | 查询选项（集合、限制、偏移等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.ERModelEntity` | 实体列表 |
| r2 | `error` | 错误信息 |


### DBQueryKnowledge

#### 详细描述
_dbQueryKnowledge 数据库直接查询知识库条目

使用 SQL 模糊搜索，不使用语义搜索，速度非常快（~2ms）

适合去重检查、快速验证等场景



参数:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）



返回值:

  - 知识库条目列表

  - 错误信息




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
| keyword | `string` | 搜索关键词 |
| opts | `...DBQueryOption` | 查询选项（集合、限制、偏移等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.KnowledgeBaseEntry` | 知识库条目列表 |
| r2 | `error` | 错误信息 |


### DBQueryKnowledgeExists

#### 详细描述
_dbQueryKnowledgeExists 检查知识条目是否存在且有对应的向量索引

这个函数用于增量更新时的去重检查

只有当知识条目存在且有对应的向量文档时，才认为该条目已被完整索引



参数:

  - keyword: 搜索关键词（通常是工具/插件名称）

  - opts: 查询选项



返回值:

  - 检查结果，包含是否存在、知识条目、向量数量等

  - 错误信息




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
| keyword | `string` | 搜索关键词（通常是工具/插件名称） |
| opts | `...DBQueryOption` | 查询选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*DBQueryKnowledgeExistsResult` | 检查结果，包含是否存在、知识条目、向量数量等 |
| r2 | `error` | 错误信息 |


### DBQueryUniqueKnowledgeTitles

#### 详细描述
_dbQueryUniqueKnowledgeTitles 获取唯一的知识标题列表

使用 SQL DISTINCT 查询，返回不重复的 KnowledgeTitle 列表

适合增量更新时的快速去重检查



参数:

  - opts: 查询选项（集合、限制等）



返回值:

  - 唯一的知识标题列表

  - 错误信息




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
| opts | `...DBQueryOption` | 查询选项（集合、限制等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 唯一的知识标题列表 |
| r2 | `error` | 错误信息 |


### DBQueryVectorDocument

#### 详细描述
_dbQueryVectorDocument 数据库直接查询向量文档

使用 SQL 模糊搜索，不使用语义搜索，速度非常快

适合去重检查、快速验证等场景



参数:

  - keyword: 搜索关键词

  - opts: 查询选项（集合、限制、偏移等）



返回值:

  - 向量文档列表

  - 错误信息




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
| keyword | `string` | 搜索关键词 |
| opts | `...DBQueryOption` | 查询选项（集合、限制、偏移等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*schema.VectorStoreDocument` | 向量文档列表 |
| r2 | `error` | 错误信息 |


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
_enableMockMode 启用模拟模式（使用 mock 嵌入服务，便于测试）

参数:

  - 无



返回值:

  - 无




Example:

``````````````yak
rag.EnableMockMode()
``````````````


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
aiService 直接指定 RAG 使用的 AI 回调服务（导出名为 rag.aiService）



参数:

  - aiService: AI 回调函数，用于实体抽取、问题生成等增强能力



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
cb = func(config, msg) { return ai.Chat(msg.GetPrompt())~ }
db = rag.Get("my-rag", rag.aiService(cb))~
``````````````


#### 定义

`aiService(aiService aicommon.AICallbackType) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiService | `aicommon.AICallbackType` | AI 回调函数，用于实体抽取、问题生成等增强能力 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### aiServiceType

#### 详细描述
aiServiceType 按名称与配置指定 RAG 使用的 AI 服务（导出名为 rag.aiServiceType）



参数:

  - aiServiceName: AI 服务名称（如 openai、ollama 等）

  - aiServiceConfig: 可选的 AI 配置项（如 ai.apiKey、ai.model 等）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.aiServiceType("openai", ai.model("gpt-4o-mini")))~
``````````````


#### 定义

`aiServiceType(aiServiceName string, aiServiceConfig ...aispec.AIConfigOption) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiServiceName | `string` | AI 服务名称（如 openai、ollama 等） |
| aiServiceConfig | `...aispec.AIConfigOption` | 可选的 AI 配置项（如 ai.apiKey、ai.model 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### analyzeConcurrency

#### 详细描述
analyzeConcurrency 控制知识构建分析的并发数（在 rag 中导出名为 rag.analyzeConcurrency）



参数:

  - concurrency: 分析并发数（同时处理的分块数量）



返回值:

  - 分析配置选项




Example:

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.analyzeConcurrency(4))~
``````````````


#### 定义

`analyzeConcurrency(concurrency int) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrency | `int` | 分析并发数（同时处理的分块数量） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析配置选项 |


### buildFilter

#### 详细描述
buildFilter 设置 k-hop 查询的起始实体过滤条件（导出名为 rag.buildFilter）



参数:

  - filter: 实体过滤器，用于确定路径搜索的起点实体



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
filter = rag.getEntityFilter("name", "用户登录")
paths = rag.KHopQuery("my-rag", rag.buildFilter(filter))~
``````````````


#### 定义

`buildFilter(filter *ypb.EntityFilter) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `*ypb.EntityFilter` | 实体过滤器，用于确定路径搜索的起点实体 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### buildQuery

#### 详细描述
buildQuery 设置 k-hop 查询所用的 RAG 检索语句（导出名为 rag.buildQuery），用于定位起始实体



参数:

  - query: 检索关键词或语句



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
paths = rag.KHopQuery("my-rag", rag.buildQuery("用户登录流程"))~
``````````````


#### 定义

`buildQuery(query string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` | 检索关键词或语句 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### chunkSize

#### 详细描述
chunkSize 设置文本分块的大小（在 rag 中导出名为 rag.chunkSize），单位为字符数



参数:

  - size: 每个分块的目标大小



返回值:

  - 分块器配置选项




Example:

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.chunkSize(1024))~
``````````````


#### 定义

`chunkSize(size int64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int64` | 每个分块的目标大小 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 分块器配置选项 |


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
db 指定 RAG 使用的数据库连接（导出名为 rag.db）



参数:

  - db: 数据库连接对象



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.db(myDatabaseConn))~
``````````````


#### 定义

`db(db *gorm.DB) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` | 数据库连接对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### dbQueryCollection

#### 详细描述
_dbQueryCollection 指定查询的集合名称（单个）



参数:

  - name: 集合名称



返回值:

  - 数据库查询选项




Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryCollection("my-collection"))
``````````````


#### 定义

`dbQueryCollection(name string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### dbQueryCollections

#### 详细描述
_dbQueryCollections 指定查询的多个集合名称



参数:

  - names: 一个或多个集合名称



返回值:

  - 数据库查询选项




Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryCollections("col1", "col2"))
``````````````


#### 定义

`dbQueryCollections(names ...string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` | 一个或多个集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### dbQueryCtx

#### 详细描述
_dbQueryCtx 设置查询上下文



参数:

  - ctx: 上下文，可用于超时/取消控制



返回值:

  - 数据库查询选项




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
| ctx | `context.Context` | 上下文，可用于超时/取消控制 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### dbQueryDB

#### 详细描述
_dbQueryDB 指定数据库连接



参数:

  - db: 数据库连接对象（由 rag.NewRagDatabase 等创建）



返回值:

  - 数据库查询选项




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
| db | `*gorm.DB` | 数据库连接对象（由 rag.NewRagDatabase 等创建） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### dbQueryLimit

#### 详细描述
_dbQueryLimit 设置查询结果数量限制



参数:

  - limit: 返回结果数量上限



返回值:

  - 数据库查询选项




Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryLimit(10))
``````````````


#### 定义

`dbQueryLimit(limit int) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 返回结果数量上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### dbQueryOffset

#### 详细描述
_dbQueryOffset 设置查询偏移量（用于分页）



参数:

  - offset: 偏移量（跳过的记录数）



返回值:

  - 数据库查询选项




Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryOffset(20), rag.dbQueryLimit(10))
``````````````


#### 定义

`dbQueryOffset(offset int) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| offset | `int` | 偏移量（跳过的记录数） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### dbQueryRAGFilename

#### 详细描述
_dbQueryRAGFilename 从 RAG 文件导入后查询

自动导入 RAG 文件到临时集合，然后在该集合上执行查询



参数:

  - filename: RAG 文件路径



返回值:

  - 数据库查询选项




Example:

``````````````yak
results = rag.DBQueryKnowledge("关键词", rag.dbQueryRAGFilename("/path/to/my.rag"))
``````````````


#### 定义

`dbQueryRAGFilename(filename string) DBQueryOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | RAG 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DBQueryOption` | 数据库查询选项 |


### disableERM

#### 详细描述
disableERM 是否禁用实体关系模型（ERM）构建（在 rag 中导出名为 rag.disableERM）



参数:

  - disable: 为 true 时不构建实体仓库/关系图谱



返回值:

  - 精炼配置选项




Example:

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.disableERM(true))~
``````````````


#### 定义

`disableERM(disable bool) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` | 为 true 时不构建实体仓库/关系图谱 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 精炼配置选项 |


### disableIndex

#### 详细描述
disableIndex 是否禁用知识索引构建（在 rag 中导出名为 rag.disableIndex）



参数:

  - disable: 为 true 时不构建知识索引（仅做内容精炼）



返回值:

  - 精炼配置选项




Example:

``````````````yak
rag.BuildCollectionFromDocuments("my-rag", docs, rag.disableIndex(true))~
``````````````


#### 定义

`disableIndex(disable bool) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` | 为 true 时不构建知识索引（仅做内容精炼） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 精炼配置选项 |


### docMetadata

#### 详细描述
docMetadata 为文档添加一个元数据键值对（导出名为 rag.docMetadata），可多次调用累加



参数:

  - key: 元数据键

  - value: 元数据值（任意类型）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db.Add("doc-id", "content", rag.docMetadata("source", "manual"))~
``````````````


#### 定义

`docMetadata(key string, value any) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 元数据键 |
| value | `any` | 元数据值（任意类型） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### docRawMetadata

#### 详细描述
docRawMetadata 直接设置文档的原始元数据 map（导出名为 rag.docRawMetadata）



参数:

  - metadata: 元数据键值映射



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db.Add("doc-id", "content", rag.docRawMetadata({"source": "manual", "lang": "zh"}))~
``````````````


#### 定义

`docRawMetadata(metadata map[string]any) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| metadata | `map[string]any` | 元数据键值映射 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### documentHandler

#### 详细描述
documentHandler 导出 RAG 时对每个文档进行处理的回调（导出名为 rag.documentHandler）



参数:

  - documentHandler: 处理函数，接收一个文档并返回处理后的文档与错误



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
handler = func(doc) { return doc, nil }
rag.Export("my-rag", "/tmp/my.rag", rag.documentHandler(handler))~
``````````````


#### 定义

`documentHandler(documentHandler func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentHandler | `func(doc schema.VectorStoreDocument) (schema.VectorStoreDocument, error)` | 处理函数，接收一个文档并返回处理后的文档与错误 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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
enableQuestionIndex 是否启用文档潜在问题索引（导出名为 rag.enableQuestionIndex）



开启后会为文档生成潜在问题并建立索引，提升问答类查询的召回效果。



参数:

  - enable: 为 true 时启用文档问题索引



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.enableQuestionIndex(true))~
``````````````


#### 定义

`enableQuestionIndex(enable bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 为 true 时启用文档问题索引 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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
getEntityFilter 构建一个实体过滤器（在 rag 中导出名为 rag.getEntityFilter），用于 k-hop 查询等场景



参数:

  - reposName: 实体仓库名称

  - entityTypes: 实体类型列表

  - names: 实体名称列表

  - HiddenIndex: 实体的 HiddenIndex 列表

  - keywords: 关键词列表



返回值:

  - 实体过滤器对象




Example:

``````````````yak
filter = rag.getEntityFilter("my-repos", ["person"], ["张三"], [], ["登录"])
paths = rag.KHopQuery("my-rag", rag.buildFilter(filter))~
``````````````


#### 定义

`getEntityFilter(reposName string, entityTypes []string, names []string, HiddenIndex []string, keywords []string) *ypb.EntityFilter`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reposName | `string` | 实体仓库名称 |
| entityTypes | `[]string` | 实体类型列表 |
| names | `[]string` | 实体名称列表 |
| HiddenIndex | `[]string` | 实体的 HiddenIndex 列表 |
| keywords | `[]string` | 关键词列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ypb.EntityFilter` | 实体过滤器对象 |


### importName

#### 详细描述
queryCollection 指定要查询的集合名称（导出名为 rag.queryCollection，导入时别名 rag.importName）



参数:

  - collectionName: 集合名称



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryCollection("my-collection"))~
``````````````


#### 定义

`importName(collectionName string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` | 集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### importOverwrite

#### 详细描述
importOverwrite 导入 RAG 时是否覆盖已存在的同名集合（导出名为 rag.importOverwrite）



参数:

  - overwriteExisting: 为 true 时覆盖已存在的集合



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Import("my-rag", rag.ragImportFile("/tmp/my.rag"), rag.importOverwrite(true))~
``````````````


#### 定义

`importOverwrite(overwriteExisting bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| overwriteExisting | `bool` | 为 true 时覆盖已存在的集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### importRebuildGraph

#### 详细描述
importRebuildGraph 导入 RAG 时是否重建 HNSW 索引（导出名为 rag.importRebuildGraph）



参数:

  - rebuildHNSWIndex: 为 true 时在导入后重建 HNSW 索引



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Import("my-rag", rag.ragImportFile("/tmp/my.rag"), rag.importRebuildGraph(true))~
``````````````


#### 定义

`importRebuildGraph(rebuildHNSWIndex bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rebuildHNSWIndex | `bool` | 为 true 时在导入后重建 HNSW 索引 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### khopLimit

#### 详细描述
khopLimit 设置 k-hop 查询返回的路径数量上限（导出名为 rag.khopLimit）



参数:

  - k: 路径数量上限，负数会被归一为 0



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
paths = rag.KHopQuery("my-rag", rag.khopLimit(10))~
``````````````


#### 定义

`khopLimit(k int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` | 路径数量上限，负数会被归一为 0 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### khopk

#### 详细描述
khopk 设置 k-hop 的跳数（导出名为 rag.khopk），k&gt;=2 时返回 k-hop 路径，k=0 返回所有路径



参数:

  - k: 跳数，负数会被归一为 0



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
paths = rag.KHopQuery("my-rag", rag.khopk(2))~
``````````````


#### 定义

`khopk(k int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `int` | 跳数，负数会被归一为 0 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### khopkMax

#### 详细描述
khopkMax 设置最大路径长度（导出名为 rag.khopkMax）



参数:

  - kMax: 最大路径长度



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
paths = rag.KHopQuery("my-rag", rag.khopkMin(2), rag.khopkMax(4))~
``````````````


#### 定义

`khopkMax(kMax int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMax | `int` | 最大路径长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### khopkMin

#### 详细描述
khopkMin 设置最小路径长度（导出名为 rag.khopkMin），最小值为 2



参数:

  - kMin: 最小路径长度，小于 2 时会被归一为 2



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
paths = rag.KHopQuery("my-rag", rag.khopkMin(2), rag.khopkMax(4))~
``````````````


#### 定义

`khopkMin(kMin int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kMin | `int` | 最小路径长度，小于 2 时会被归一为 2 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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
noHNSWGraph 导出 RAG 时是否不导出 HNSW 索引（导出名为 rag.noHNSWGraph）



参数:

  - noHNSWGraph: 为 true 时导出包不含 HNSW 索引（导入时可重建）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Export("my-rag", "/tmp/my.rag", rag.noHNSWGraph(true))~
``````````````


#### 定义

`noHNSWGraph(noHNSWGraph bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noHNSWGraph | `bool` | 为 true 时导出包不含 HNSW 索引（导入时可重建） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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
noMetadata 导出 RAG 时是否不导出元数据（导出名为 rag.noMetadata）



参数:

  - noMetadata: 为 true 时导出包不含文档元数据



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Export("my-rag", "/tmp/my.rag", rag.noMetadata(true))~
``````````````


#### 定义

`noMetadata(noMetadata bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noMetadata | `bool` | 为 true 时导出包不含文档元数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### noOriginInput

#### 详细描述
noOriginInput 导出 RAG 时是否不导出原始输入内容（导出名为 rag.noOriginInput）



参数:

  - noOriginInput: 为 true 时导出包不含原始输入文本



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Export("my-rag", "/tmp/my.rag", rag.noOriginInput(true))~
``````````````


#### 定义

`noOriginInput(noOriginInput bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| noOriginInput | `bool` | 为 true 时导出包不含原始输入文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### noPotentialQuestions

#### 详细描述
noPotentialQuestions 返回一个不在元数据中保存潜在问题的配置选项（导出名为 rag.noPotentialQuestions）



等价于 WithNoPotentialQuestions(true)，可减少存储开销。



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db.Add("doc-id", "content", rag.noPotentialQuestions())~
``````````````


#### 定义

`noPotentialQuestions() RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### onlyPQCode

#### 详细描述
onlyPQCode 导出 RAG 时是否仅导出 PQ 编码（导出名为 rag.onlyPQCode）



参数:

  - onlyPQCode: 为 true 时仅导出 PQ 编码以减小体积



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Export("my-rag", "/tmp/my.rag", rag.onlyPQCode(true))~
``````````````


#### 定义

`onlyPQCode(onlyPQCode bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onlyPQCode | `bool` | 为 true 时仅导出 PQ 编码以减小体积 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### pathDepth

#### 详细描述
pathDepth 设置 k-hop 查询的路径深度（导出名为 rag.pathDepth），至少为 1



参数:

  - deep: 路径深度，小于 1 时会被归一为 1



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
paths = rag.KHopQuery("my-rag", rag.pathDepth(3))~
``````````````


#### 定义

`pathDepth(deep int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| deep | `int` | 路径深度，小于 1 时会被归一为 1 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### progressHandler

#### 详细描述
progressHandler 导出 RAG 时的进度回调（导出名为 rag.progressHandler）



参数:

  - progressHandler: 进度回调，接收百分比、消息文本与消息类型



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
onProgress = func(percent, message, messageType) { println(percent, message) }
rag.Export("my-rag", "/tmp/my.rag", rag.progressHandler(onProgress))~
``````````````


#### 定义

`progressHandler(progressHandler func(percent float64, message string, messageType string)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progressHandler | `func(percent float64, message string, messageType string)` | 进度回调，接收百分比、消息文本与消息类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### queryCollection

#### 详细描述
queryCollection 指定要查询的集合名称（导出名为 rag.queryCollection，导入时别名 rag.importName）



参数:

  - collectionName: 集合名称



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryCollection("my-collection"))~
``````````````


#### 定义

`queryCollection(collectionName string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| collectionName | `string` | 集合名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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
queryConcurrent 设置查询操作的并发数（导出名为 rag.queryConcurrent）



参数:

  - concurrent: 并发数（同时检索的子查询数量）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryConcurrent(4))~
``````````````


#### 定义

`queryConcurrent(concurrent int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` | 并发数（同时检索的子查询数量） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### queryCtx

#### 详细描述
queryCtx 设置 RAG 查询操作的上下文（导出名为 rag.queryCtx），可用于超时/取消控制



参数:

  - ctx: 上下文对象



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
ctx = context.WithTimeout(context.Background(), 10*time.Second)
results = rag.Query("my-rag", "关键词", rag.queryCtx(ctx))~
``````````````


#### 定义

`queryCtx(ctx context.Context) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### queryEnhance

#### 详细描述
queryEnhance 设置查询增强策略（导出名为 rag.queryEnhance），用于扩展或改写查询以提升召回



参数:

  - enhance: 一个或多个增强策略名称



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryEnhance("hyde"))~
``````````````


#### 定义

`queryEnhance(enhance ...string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enhance | `...string` | 一个或多个增强策略名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### queryLimit

#### 详细描述
queryLimit 设置查询返回结果的最大数量（导出名为 rag.queryLimit）



参数:

  - limit: 返回结果数量上限



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryLimit(5))~
``````````````


#### 定义

`queryLimit(limit int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 返回结果数量上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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
queryScoreLimit 设置集合过滤的分数阈值（导出名为 rag.queryScoreLimit）



参数:

  - scoreLimit: 集合分数阈值，低于该值的集合将被跳过



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryScoreLimit(0.5))~
``````````````


#### 定义

`queryScoreLimit(scoreLimit float64) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scoreLimit | `float64` | 集合分数阈值，低于该值的集合将被跳过 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### querySimilarityThreshold

#### 详细描述
querySimilarityThreshold 设置结果的最小相似度阈值（导出名为 rag.querySimilarityThreshold）



参数:

  - threshold: 相似度阈值（0~1），低于该值的结果将被过滤



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.querySimilarityThreshold(0.7))~
``````````````


#### 定义

`querySimilarityThreshold(threshold float64) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| threshold | `float64` | 相似度阈值（0~1），低于该值的结果将被过滤 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### queryStatus

#### 详细描述
queryStatus 设置查询状态回调函数（导出名为 rag.queryStatus），用于接收查询过程中的状态信息



参数:

  - callback: 状态回调，接收标签、任意数据与可选标签列表



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
onStatus = func(label, data, tags...) { println(label) }
results = rag.Query("my-rag", "关键词", rag.queryStatus(onStatus))~
``````````````


#### 定义

`queryStatus(callback func(label string, i any, tags ...string)) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(label string, i any, tags ...string)` | 状态回调，接收标签、任意数据与可选标签列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### queryType

#### 详细描述
queryType 设置文档类型过滤（导出名为 rag.queryType），仅查询指定类型的文档



参数:

  - documentType: 一个或多个文档类型



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
results = rag.Query("my-rag", "关键词", rag.queryType("knowledge"))~
``````````````


#### 定义

`queryType(documentType ...string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentType | `...string` | 一个或多个文档类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragCosineDistance

#### 详细描述
ragCosineDistance 使用余弦距离作为向量相似度度量（导出名为 rag.ragCosineDistance）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.ragCosineDistance())~
``````````````


#### 定义

`ragCosineDistance() RAGSystemConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragDescription

#### 详细描述
ragDescription 设置 RAG 集合的描述信息（导出名为 rag.ragDescription）



参数:

  - description: 集合描述文本



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.ragDescription("安全知识库"))~
``````````````


#### 定义

`ragDescription(description string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` | 集合描述文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragEmbeddingModel

#### 详细描述
ragEmbeddingModel 设置 RAG 使用的 embedding 模型名称（导出名为 rag.ragEmbeddingModel）



参数:

  - model: embedding 模型名称（如 text-embedding-3-small）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.ragEmbeddingModel("text-embedding-3-small"))~
``````````````


#### 定义

`ragEmbeddingModel(model string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| model | `string` | embedding 模型名称（如 text-embedding-3-small） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragForceNew

#### 详细描述
ragForceNew 是否强制创建新集合（导出名为 rag.ragForceNew），为 true 时会覆盖同名集合



参数:

  - force: 为 true 时强制新建集合



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.ragForceNew(true))~
``````````````


#### 定义

`ragForceNew(force bool) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `bool` | 为 true 时强制新建集合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragHNSWParameters

#### 详细描述
ragHNSWParameters 设置 HNSW 索引参数（导出名为 rag.ragHNSWParameters）



参数:

  - m: 每个节点的最大连接数

  - ml: 层级生成因子

  - efSearch: 查询时的候选集大小（影响召回与速度）

  - efConstruct: 构建索引时的候选集大小



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.ragHNSWParameters(16, 0.25, 64, 200))~
``````````````


#### 定义

`ragHNSWParameters(m int, ml float64, efSearch int, efConstruct int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` | 每个节点的最大连接数 |
| ml | `float64` | 层级生成因子 |
| efSearch | `int` | 查询时的候选集大小（影响召回与速度） |
| efConstruct | `int` | 构建索引时的候选集大小 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragImportFile

#### 详细描述
ragImportFile 指定导入所用的 RAG 文件路径（导出名为 rag.ragImportFile）



参数:

  - importFile: RAG 文件路径



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Import("my-rag", rag.ragImportFile("/tmp/my.rag"))~
``````````````


#### 定义

`ragImportFile(importFile string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| importFile | `string` | RAG 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### ragModelDimension

#### 详细描述
ragModelDimension 设置 embedding 模型的向量维度（导出名为 rag.ragModelDimension）



参数:

  - dimension: 向量维度（需与所用 embedding 模型一致）



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
db = rag.Get("my-rag", rag.ragModelDimension(1536))~
``````````````


#### 定义

`ragModelDimension(dimension int) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dimension | `int` | 向量维度（需与所用 embedding 模型一致） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


### serialVersionUID

#### 详细描述
serialVersionUID 设置 RAG 序列化版本标识（导出名为 rag.serialVersionUID），用于导入导出时的兼容性校验



参数:

  - serialVersionUID: 序列化版本号字符串



返回值:

  - RAG 系统配置选项




Example:

``````````````yak
rag.Export("my-rag", "/tmp/my.rag", rag.serialVersionUID("v1"))~
``````````````


#### 定义

`serialVersionUID(serialVersionUID string) RAGSystemConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| serialVersionUID | `string` | 序列化版本号字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RAGSystemConfigOption` | RAG 系统配置选项 |


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


