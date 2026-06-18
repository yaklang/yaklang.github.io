# Yaklang 内置库参考 - 示例脚本编写与验证规范

本规范是「YAK 编程文档」中内置库参考部分（`docs/` 下的 `api/`、`buildinlibs/`、`strings/`、`os-file/`、`network/`、`security/`、`ai/` 等目录）正文示例代码的核心约束。在为手册补充任何带代码的章节前，必须先阅读本文件，并严格按此规范产出与验证示例脚本。本文件是手册示例的"核心验证脚本"标准，先于内容落地。

## 一、为什么需要本规范

手册的价值在于示例可信。读者会直接复制示例运行，因此每一段示例都必须满足：

1. 真实可执行：能用 `yak` 命令行实际跑通，而不是"看起来对"。
2. 自带验证：用 `assert` 锁定关键结果，避免文档与实际行为产生偏差。
3. 语义清晰：用中文注释说明意图，避免读者或后续维护者曲解。

## 二、代码块包裹约定（重要）

手册中所有 Yaklang 示例代码块，统一使用「超长反引号」包裹，并标注 `yak` 语言：

- 围栏使用 14 个反引号（而非常见的 3 个）。
- 起始行写 `yak` 作为语言标识。
- 结束行同样使用 14 个反引号。

形如：

``````````````yak
// 示例代码写在这里
println("hello yaklang")
``````````````

采用超长反引号的原因：Yaklang 示例里经常包含以 `/* ... */` 注释嵌入的输出片段，或字符串中含有 ``` 三反引号、Markdown 片段等。使用 14 个反引号可以保证整段脚本（含内部任意三反引号内容）始终被视为同一个代码块，不会被意外截断。

## 三、脚本内容要求

每个示例脚本必须遵守以下要求：

1. 关键结果必须 `assert`：
   - 断言要覆盖该示例所演示特性的核心产出。
   - 断言信息使用英文，并尽量具体，例如 `assert len(a) == 4, "append should grow slice to length 4"`。
2. 必要的中文注释：
   - 在关键逻辑前用中文注释说明"在做什么、为什么这样做"。
   - 注释解释意图，不要逐行复述代码。
3. 语言约定（遵循仓库规范）：
   - 注释可用中文。
   - `log` 输出、`assert` 信息、字符串字面量内容一律使用英文。
4. 健壮性：
   - 涉及网络等可能失败的操作，使用 `~`、`try/catch` 或 `defer recover()` 处理错误。
   - 网络请求等必须设置超时（如 `poc.timeout(5)`）。
   - 避免死循环；脚本必须能在 10 秒内执行完成。

## 四、验证方式

落库前，每个示例脚本都必须用 `yak` 命令行实际验证：

``````````````yak
// 将示例另存为临时文件后执行，确认 exit code 为 0、assert 全部通过
// 命令: yak /tmp/example.yak
``````````````

验证标准：

- 进程退出码为 0。
- 没有 `assert` 失败、没有 panic、没有未处理错误。
- 在 10 秒内执行结束。

推荐的本地验证流程（人工/脚本）：

1. 把代码块内容写入临时 `.yak` 文件。
2. 运行 `yak <file>.yak`，检查退出码与输出。
3. 通过后再粘贴回手册对应章节，保持代码与已验证内容完全一致。

### 4.1 输出断言：`// OUT:` 与 `/* ... */` 渲染块

除 `assert` 外，本手册用两种"输出标注"把示例的预期输出固化进文档，便于自动比对：

- 行内 `// OUT: xxx`：紧跟在 `println(...)` 之后，声明该行打印到 stdout 的内容。
  自动化校验会要求 `xxx` 出现在脚本实际 stdout 中。

  ``````````````yak
  url = poc.GetUrlFromHTTPRequest("http", packet)
  println(url) // OUT: http://www.example.com/mng/index.html?key=value
  ``````````````

- 尾部 `/* ... */` 渲染块：用于 `fuzz.HTTPRequest(...).Show()` 这类确定性渲染，
  把多行渲染结果原样写进块末尾的 `/* ... */`，自动化校验会逐行比对 stdout。

### 4.2 自动化批量验证脚本

仓库提供统一执行器 `scripts/verify-manual-examples.py`，是本规范的自动化落地：

``````````````yak
// 全量验证 docs/ 下所有 yak 示例块（失败时退出码非 0）
// 命令: python3 scripts/verify-manual-examples.py
//
// 仅列出被跳过的示意性代码块, 供人工复核是否漏写 assert/OUT
// 命令: python3 scripts/verify-manual-examples.py --list-skipped
``````````````

它会：扫描 `docs/` 全部 `.md/.mdx`，提取 14 反引号 `yak` 块；对带 `assert` /
`// OUT:` / 确定性渲染的块逐个 `yak` 执行并比对；自动跳过纯示意性块（真实网络
请求、外部服务依赖等）。stdout 中的 `[INFO] ...` 等 yak 日志行会被过滤，不参与比对。

### 4.3 哪些示例可以"只示意、不验证"

以下情况依赖外部环境、结果不确定，允许保留为示意（不加 `assert/OUT`，会被脚本跳过），
但应在所属章节用 `:::tip` 说明其为示意性示例：

- 真实网络请求：`poc.HTTP(...)`、`fuzz.HTTPRequest(...).Exec()/.ExecFirst()`、
  对真实域名的 `dns` 查询、`mitm.Start`、`synscan.Scan` 等。
- 远程目标/外部服务：连接具体 IP:Port、AI 服务（`ai.Chat` 需 API Key）等。
- 仅配置、无输出的片段（如 `fuzz.HTTPRequest(raw, fuzz.https(true))~`）。
- 罗列 API 用法的"目录式"片段（操作未定义变量、不产生输出）。

## 五、经验沉淀（常见陷阱）

在批量验证过程中反复踩到、需要长期记住的点：

1. 引擎版本必须够新：示例用到的库（如 `jsonstream`）若报
   `module: xxx use undefined` / `reflect ... on zero Value`，多半是本地 `yak`
   二进制旧于源码。请从 yaklang 源码重新编译安装：
   `go build -o $(which yak) ./common/yak/cmd/yak.go`。
2. `slice.Sort()` 原地排序：它会就地修改切片并返回自身。写成 `b = a.Sort()`
   常见会让 `b` 变成空切片，应直接 `a.Sort()` 再使用 `a`。
3. `// OUT:` 只校验"包含"，渲染块校验"逐行相等"：多行确定性输出优先用 `/* ... */`。
4. `FuzzPathAppend` 是直接拼接而非加 `/`：`/prefix` 追加 `A` 得到 `/prefixA`。
5. 文档与实际不符时，以 `yak` 实跑结果为准修正文档（曾据此修正 `FuzzPostParams`
   首行应为 `POST`、`FuzzPathAppend` 路径拼接等）。
6. stdout 可能混入 yak 日志行（如 `sqlite tuned ...`）：比对前需过滤日志，
   `verify-manual-examples.py` 已内置该过滤。
7. 字节相关断言注意类型：如 `tcp` 的 `ReadFastUntilByte` 返回 `([]byte, error)`，
   需 `~` 解包后再断言；字节字面量用数值（如换行用 `10` 而非 `'\n'`）。

## 五、标准示例模板

新增带代码示例的章节时，按如下结构组织（标题、一句话特性说明、可运行示例、断言）：

``````````````yak
// 特性: 切片追加元素 append
// 关键词: append, slice, len
nums = [1, 2, 3]

// append 返回追加后的新切片，需要重新赋值
nums = append(nums, 4)

// 用 assert 锁定核心行为: 长度从 3 增长到 4，且末位为 4
assert len(nums) == 4, "append should grow slice to length 4"
assert nums[3] == 4, "appended element should be at the tail"

println("append example passed")
``````````````

只要遵循以上规范，手册中的每个示例都可被独立复制、运行、验证，确保文档与 Yaklang 实际行为长期一致。
