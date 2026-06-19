# Web API 文档生成与校验留档（Coverage Report）

本文件记录 Yaklang Web API 文档一次"全量重生成 + 全量校验"的结论。文件位于文档站仓库根目录、`docs/api` 之外，不会被生成器的 `rsync --delete` 清理。与主仓基线文档 `yaklang/common/yak/yakdoc/generate_web_doc/DOC_COVERAGE_BASELINE.md` 一一对应。

## 执行元信息

- 留档时间：2026-06-19 12:56 CST
- 生成时间：2026-06-19 12:50 CST
- 主仓：`/Users/v1ll4n/Projects/yaklang`
- 文档站：`/Users/v1ll4n/Projects/yaklang.github.io`
- 生成口径：`go run -gcflags=all=-l common/yak/yakdoc/generate_web_doc/generate_web_doc.go -coverage-report /tmp/doc_coverage.md web_doc/`，与 CI（`.github/workflows/generate-web-doc.yml`）完全一致。
- 生成器崩溃情况：两次全量生成均一次通过，无 `found bad pointer in Go heap` 崩溃，无需重试（`debug.SetGCPercent(-1)` 修复有效）。

## 一、覆盖率结论（与主仓基线一致）

- 总函数数：2854
- 有 gap 的函数数：961
- 无 gap（ok）：1893
- 覆盖率（ok / total）：约 66.3%

gap 最多的前若干库：

| 库 | gap 数 |
|:--|:--|
| str | 118 |
| yso | 100 |
| nuclei | 67 |
| hids | 63 |
| rag | 59 |
| risk | 48 |
| systemd | 40 |
| ssa | 40 |
| crawler | 37 |
| codec | 36 |
| yakit | 34 |

完整 61 库明细与逐函数缺失维度见主仓基线文档及生成器底单 `/tmp/doc_coverage.md`。

剩余 gap 分类小结（数据驱动估计）：
- 结构性 go/doc 限制 / 可接受软缺口：约 466 个仅缺参数/返回说明，另含大量 functional-option 变参与 option-setter 函数。
- 规则允许跳过：builder 闭包绑定（`systemd.service_*`、`risk.Save`/`NewRisk`/`Check*` 等）、外部包别名（`dnslog.LookupFirst` = `netx.LookupFirst`）。
- 真实待补：越界库无注释函数，缺描述共 361 个，扣除结构性与 option-setter 后约 200 量级（集中在 `nuclei`、`yakit`、部分 `ssa`/`rag`/`db`/`pprof`）。

## 二、可验证示例统计

通过 `python3 scripts/verify-manual-examples.py` 对全部文档可运行块实跑校验：

- 总 yak 代码块：2737
- 实跑通过（含 assert / `// OUT:` / render）：714
- 自动跳过（示意性块）：2023
- 结论：`ALL verifiable blocks passed`（exit 0）

未对任何真实可验证示例做"降级为示意性"处理，校验结果如实反映文档示例质量。

## 三、孤儿文件清理清单（rsync 对 docs/api 的变更）

同步命令（与 CI 一致）：

```bash
rsync -ai --delete \
    --exclude='_category_.json' --exclude='__global__.md' --exclude='global_buildin_ops.md' \
    web_doc/ docs/api/
```

本次同步结果：

- 更新（内容/时间戳变化）文件：127 个（`docs/api` 下的库文档 `.md` / `.mdx`）。
- 新增文件：0 个。
- 删除（孤儿）文件：0 个。

即本次重生成未产生新增或孤儿文件，`docs/api` 与最新生成结果完全对齐，无需额外清理。

## 四、与主仓基线的对应关系

- 主仓基线：`yaklang/common/yak/yakdoc/generate_web_doc/DOC_COVERAGE_BASELINE.md`，记录覆盖率数字、按库明细、gap 分类与重生成/验证命令。
- 本留档：文档站侧的生成与校验结论、示例统计、孤儿文件清理清单。
- 两者数字口径一致（2854 / 961 / 1893），均来自同一次 `-gcflags=all=-l` 全量生成。

## 五、本轮范围说明

本轮 synthesis 仅做"重生成 + 同步 + 验证 + 双仓留档"，未做：
- git commit / push（未授权）；
- 升级 vendored ANTLR4、修改 `vendor/` 或 `go.mod`（明确留作单独 PR）；
- 改动生成器与校验器核心逻辑（GOGC 修复已就绪）。
