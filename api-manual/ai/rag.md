---
sidebar_position: 5
sidebar_label: "知识库检索增强（RAG）"
---

# 知识库检索增强（RAG）

大模型的知识停在训练那一刻，也不知道你私有的文档、漏洞库、内部规范。**RAG**（Retrieval-Augmented Generation，检索增强生成）解决的就是这个问题：先把你的资料切块、算成向量存进**知识库**，提问时先**检索**出最相关的几段，再把它们拼进提示词交给模型**生成**答案。这样模型就能"带着你的资料"回答，且能给出依据、减少胡编。

`rag` 库提供从建库、入库、检索到导入导出的完整能力。它的两大支柱是：

- **嵌入（Embedding）**：把文本变成一个向量。语义相近的文本，向量也相近。
- **向量检索**：用查询向量在库里找最相近的文档（按相似度打分排序）。

:::tip 本章示例如何离线运行
真实嵌入需要嵌入模型（在线服务或本地模型）。为了让示例**可复现**，我们用 `rag.NewTempRagDatabase()` 建一个**临时库**（不污染你的 Yakit 数据），再用 `rag.embeddingHandle(...)` 注入一个**自定义的确定性嵌入函数**（按关键词造向量）。这样检索结果固定可验证。真实使用时，把 `embeddingHandle` 去掉、改用真实嵌入模型即可。
:::

## 分组速查表

| 分组 | 函数 / 选项（含调用形态） | 说明 |
| --- | --- | --- |
| 建库/取库 | `rag.Get(name, ...opts)` `rag.NewTempRagDatabase()` `rag.HasCollection(name)` `rag.ListCollection()` | 获取或新建知识库 / 临时库 |
| 库对象方法 | `sys.Add(id, content)` `sys.Query(q, topN)` `sys.CountDocuments()` `sys.DeleteDocuments(ids...)` `sys.GetDocument(id)` | 在库对象上增删查 |
| 快捷增删查 | `rag.AddDocument(kb, id, content, meta)` `rag.QueryDocuments(kb, q, limit)` `rag.DeleteDocument(kb, id)` | 直接操作 Yakit 默认库 |
| 统一查询 | `rag.Query(q, ...opts)` | 跨集合语义检索（返回 channel） |
| 查询选项 | `rag.queryLimit(n)` `rag.queryCollections(...)` `rag.querySimilarityThreshold(f)` `rag.queryEnhance(...)` `rag.queryScoreLimit(f)` | 限量、指定集合、相似度阈值、查询增强 |
| 嵌入 | `rag.Embedding(text)` `rag.OnlineEmbedding(text)` `rag.LocalEmbedding(text)` `rag.embeddingHandle(fn)` | 文本转向量；可注入自定义嵌入 |
| 建库配置 | `rag.db(db)` `rag.ragForceNew(true)` `rag.ragModelDimension(n)` `rag.ragDescription(s)` `rag.ragEmbeddingModel(name)` | 指定数据库、强制新建、向量维度等 |
| 从文件建库 | `rag.BuildCollectionFromFile(kb, path)` `rag.BuildSearchIndexKnowledge(kb, text)` | 从文件/文本自动切块建库 |
| 导入导出 | `rag.Export(name, file)` `rag.Import(file, ...opts)` | 知识库打包与迁移 |
| 删除 | `rag.DeleteCollection(name)` `rag.DeleteKnowledgeBase(name)` | 删除集合/知识库 |

## 一分钟跑通：建库 → 入库 → 检索

下面用临时库 + 自定义嵌入完整演示 RAG 的检索环节。自定义嵌入函数把文本映射成一个 3 维向量，三个维度分别代表是否提到 `port`/`xss`/`sql`——这样语义相近的查询就能命中对应文档。

``````````````yak
// 特性: 用临时库 + 自定义嵌入离线跑通 RAG 检索
// 关键词: rag.NewTempRagDatabase, rag.Get, rag.embeddingHandle, sys.Add, sys.Query
// 建一个临时向量库(不写入 Yakit 默认数据)
db = rag.NewTempRagDatabase()~

// 自定义确定性嵌入: 按关键词造向量, 维度=3
embedFn = func(text) {
    t = str.ToLower(text)
    return [
        str.Contains(t, "port") ? 1.0 : 0.0,
        str.Contains(t, "xss")  ? 1.0 : 0.0,
        str.Contains(t, "sql")  ? 1.0 : 0.0,
    ]
}

// 取/建知识库: 指定库、注入自定义嵌入、强制新建、向量维度=3
sys = rag.Get("demo-kb",
    rag.db(db),
    rag.embeddingHandle(embedFn),
    rag.ragForceNew(true),
    rag.ragModelDimension(3))~

// 入库: Add(文档ID, 文档内容)
sys.Add("d1", "port scanning is used to find open ports")~
sys.Add("d2", "xss is a common web vulnerability")~
sys.Add("d3", "sql injection abuses database queries")~

println(sys.CountDocuments()~)   // OUT: 3

// 检索: Query(查询, topN), 返回按相似度排序的结果
results = sys.Query("how to scan ports", 1)~
// 命中的应当是端口相关的 d1
println(results[0].Document.ID)        // OUT: d1
println(results[0].Document.Content)   // OUT: port scanning is used to find open ports
``````````````

`sys.Query` 返回的每个 `SearchResult` 带 `Document`（命中的文档，含 `ID`/`Content`/`Metadata`）和 `Score`（相似度得分，越大越相关）。真实场景里把 `embedFn` 换成真实嵌入模型，库就能理解"开放端口探测""端口扫描器"这类近义表达，而不只是字面包含 `port`。

## RAG 的完整闭环：检索 + 生成

上面只做了"检索"。真正的 RAG 还要把检索到的内容拼进提示词，交给大模型**生成**最终答案。下面把检索结果作为"上下文"喂给 `ai.Chat`（这里用[本章总览](./overview.md)介绍的本地 mock 固定 AI 输出）。

``````````````yak
// 特性: RAG 完整闭环 = 向量检索 + 把上下文拼进提示词交给 ai.Chat 生成
// 关键词: rag.Query 检索, ai.Chat 生成, Retrieval Augmented Generation
// 1) 起一个本地 mock AI(固定回 "grounded-answer")
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"grounded-answer\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"

// 2) 建库并入库(同上, 用自定义嵌入离线跑)
db = rag.NewTempRagDatabase()~
embedFn = func(text) {
    t = str.ToLower(text)
    return [str.Contains(t, "port")?1.0:0.0, str.Contains(t, "xss")?1.0:0.0, str.Contains(t, "sql")?1.0:0.0]
}
sys = rag.Get("kb", rag.db(db), rag.embeddingHandle(embedFn), rag.ragForceNew(true), rag.ragModelDimension(3))~
sys.Add("d1", "port scanning is used to find open ports")~
sys.Add("d2", "xss is a common web vulnerability")~

// 3) 检索: 取最相关的 1 条作为上下文
results = sys.Query("port scan", 1)~
ragContext = ""
for r in results {
    ragContext += r.Document.Content
}
println(ragContext)   // OUT: port scanning is used to find open ports

// 4) 把上下文拼进提示词, 交给模型生成
prompt = f"参考资料:\n${ragContext}\n\n问题: 怎么扫描端口?"
answer = ai.Chat(prompt, ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock"))~
println(answer)   // OUT: grounded-answer
cancel()
``````````````

把 mock 换成真实模型、把库换成你的真实资料，这段骨架就是一个可用的 RAG 问答系统：**检索把"私有知识"塞进上下文，生成让模型"据此作答"**。需要让智能体自动做这件事时，可以把知识库直接挂给 `aim` 智能体（见 [ReAct 智能体引擎](./aim.md) 的 `aim.attachedKnowledgeBase`）。

## 直接生成嵌入向量

如果你只想要"文本 → 向量"这一步（比如自己做相似度计算、聚类），用 `rag.Embedding`。它需要嵌入服务，分在线/本地两种：

- `rag.Embedding(text)`：默认策略（优先在线，回退本地）。
- `rag.OnlineEmbedding(text)`：用在线免费嵌入服务，无需本地模型。
- `rag.LocalEmbedding(text)`：用本地模型（需先安装，如 Qwen3-Embedding）。

```yak
// 生成文本向量(需要嵌入服务, 离线环境会报错)
vec, err = rag.OnlineEmbedding("如何检测 SQL 注入")
if err != nil {
    log.error("embedding failed: %v", err)
    return
}
println(len(vec))   // 例如 1024, 取决于模型维度
```

:::note 嵌入服务需要网络或本地模型
`rag.Embedding/OnlineEmbedding/LocalEmbedding` 都依赖真实嵌入模型，离线无法运行，因此这里只给调用形态。前面的检索示例之所以能离线跑，是因为我们用 `rag.embeddingHandle` 注入了自定义嵌入，绕开了真实模型。
:::

## 快捷接口：直接操作 Yakit 默认知识库

如果你不想自己管理数据库连接，`rag.AddDocument` / `rag.QueryDocuments` 直接读写 Yakit 的**默认知识库**（用真实嵌入模型）。适合在已经配好 AI 的 Yakit 环境里快速建库问答：

```yak
// 往 Yakit 默认知识库写入与检索(需要配好嵌入模型)
rag.AddDocument("my-kb", "doc1", "Yaklang 是面向安全的领域语言", {"source": "manual"})~
rag.AddDocument("my-kb", "doc2", "poc 库用于编写漏洞验证脚本", {"source": "manual"})~

// 语义检索, 返回 topN 结果
results = rag.QueryDocuments("my-kb", "怎么写 PoC", 5)~
for r in results {
    println(f"{r.Document.ID}  score={r.Score}")
}
```

`rag.Query(q, ...opts)` 则是更高层的**跨集合**统一检索（返回 channel），并支持查询增强：

```yak
// 跨集合检索 + 查询增强(需要配好嵌入模型)
ch = rag.Query("XSS 漏洞怎么修",
    rag.queryCollections("plugins", "docs"),   // 在多个集合里找
    rag.queryLimit(10),                         // 最多 10 条
    rag.querySimilarityThreshold(0.5),          // 相似度低于 0.5 的丢弃
    rag.queryEnhance(                           // 查询增强: 提升召回
        rag.QUERY_ENHANCE_TYPE_HYPOTHETICAL_ANSWER,
        rag.QUERY_ENHANCE_TYPE_EXACT_KEYWORD_SEARCH,
    ),
)~
for result = range ch {
    println(result.Document.Content)
}
```

查询增强（`queryEnhance`）会用模型把你的问题改写/扩展（如先生成"假设性答案"再检索、或拆分子问题），通常能显著提高召回质量，代价是多花一次模型调用。常用增强类型：`QUERY_ENHANCE_TYPE_HYPOTHETICAL_ANSWER`（假设答案）、`QUERY_ENHANCE_TYPE_SPLIT_QUERY`（拆分查询）、`QUERY_ENHANCE_TYPE_GENERALIZE_QUERY`（泛化查询）、`QUERY_ENHANCE_TYPE_EXACT_KEYWORD_SEARCH`（精确关键词）。

## 从文件建库与导入导出

把一份长文档变成知识库不用手动切块——`rag.BuildCollectionFromFile` 会自动切块、嵌入并入库：

```yak
// 从文件构建知识库(自动切块+嵌入, 需要嵌入模型)
rag.BuildCollectionFromFile("manual-kb", "/path/to/handbook.md", rag.chunkSize(1024))~

// 知识库可以导出成 .rag 文件迁移, 再在别处导入
rag.Export("manual-kb", "/tmp/manual.rag")~
rag.Import("/tmp/manual.rag", rag.importName("manual-kb-copy"))~
```

## 易错点小结

- **检索 ≠ RAG**：`rag.Query` 只做"检索"。要"生成答案"，必须把检索结果拼进提示词再调 `ai.Chat`（见上文完整闭环）。
- **维度要一致**：自定义嵌入返回的向量维度，必须和建库时 `rag.ragModelDimension(n)` 一致，否则检索会出错。
- **嵌入要钱要网**：`Embedding/OnlineEmbedding/LocalEmbedding` 依赖真实模型；离线/测试用 `rag.embeddingHandle` 注入自定义嵌入。
- **临时库 vs 默认库**：`rag.Get(name, rag.db(临时库))` 不污染环境；`rag.AddDocument/QueryDocuments` 直接写 Yakit 默认库，注意区分用途与清理。
- **mock 后端保持简单**：用本地 mock 配合 RAG 时，handler 里别做复杂逻辑（易出错导致 `ai.Chat` 回退到真实供应商），固定回一段内容即可。
