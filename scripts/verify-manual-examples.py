#!/usr/bin/env python3
"""
verify-manual-examples.py

批量验证「YAK 编程文档」(docs/) 正文中的 Yaklang 示例代码块是否真实可跑、
输出是否与文档标注一致。这是 MANUAL_EXAMPLE_SPEC.md 的自动化执行器。

工作方式:
  1. 递归扫描 docs/ 下所有 .md / .mdx, 提取用 14 个反引号包裹、且标注为 yak 的代码块
     (支持 Markdown 引用块前缀 "> ", 会自动剥离)。
  2. 对"可确定性验证"的代码块, 用 `yak` 命令行实际执行, 并校验:
       - 进程退出码为 0 (assert 不失败、无 panic)。
       - 代码内每条 `// OUT: xxx` 注释所声明的内容, 都出现在 stdout 中。
       - 对 `fuzz.HTTPRequest(...).Show()` 这类确定性渲染块, 把代码尾部
         `/* ... */` 注释里声明的渲染结果, 与实际 stdout 逐行比对。
  3. "示意性"代码块(真实网络请求 poc.HTTP / fuzz.Exec / mitm / synscan /
     真实域名 DNS / 远程目标等, 既无 assert 也无 OUT 也非确定性渲染)会被跳过,
     用 --list-skipped 可列出它们以供人工复核。

stdout 中的 yak 日志行(形如 "[INFO] ... ")会被过滤, 不参与输出比对。

用法:
  python3 scripts/verify-manual-examples.py                 # 全量验证, 失败返回非 0
  python3 scripts/verify-manual-examples.py --list-skipped  # 仅列出被跳过的示意块
  DOCS=/path/to/docs python3 scripts/verify-manual-examples.py
前置条件: PATH 中存在最新的 `yak` 命令 (含文档里用到的库, 如 jsonstream)。
"""
import os, re, subprocess, sys, tempfile

DOCS = os.environ.get(
    "DOCS",
    os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs"),
)
FENCE14 = "`" * 14  # 14 backticks, 见 MANUAL_EXAMPLE_SPEC.md 第二节
FENCE3 = "`" * 3

# 不验证的遗留目录(相对 docs/): 旧版手册 / 编程实战案例 / 自动生成的完全手册
EXCLUDE_DIRS = {"buildinlibs", "yakexamples", "api"}

# 视为 Yaklang 代码的 3 反引号语言标识。
# 注意: 真正可运行的 yak 示例一律用 `yak` 标注; `go`/`golang` 仅用于展示
# yak 引擎自身的 Golang 源码(讲实现原理), 不属于可执行示例, 故不在此集合内。
YAK_LANGS = {"yak"}

ANSI = re.compile(r"\x1b\[[0-9;]*m")
LOGLINE = re.compile(r"^\[(INFO|WARN|WARNING|ERROR|DEBUG|FATAL|TRACE)\]\s")


def _fence_open(stripped):
    """识别围栏起始行, 返回 (围栏字符串, 是否yak代码块) 或 None。"""
    if stripped == FENCE14 + "yak":
        return FENCE14, True
    if stripped.startswith(FENCE3) and not stripped.startswith(FENCE14):
        lang = stripped[len(FENCE3):].strip().lower()
        if lang in YAK_LANGS:
            return FENCE3, True
    return None


def extract_blocks(path):
    """返回 [(行号, 代码字符串, 围栏长度)], 支持 '> ' 引用前缀。"""
    blocks = []
    lines = open(path, encoding="utf-8").read().split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.lstrip("> ")
        opened = _fence_open(stripped)
        if opened:
            fence, _ = opened
            prefix = line[: len(line) - len(stripped)]
            body, start = [], i + 1
            i += 1
            while i < len(lines):
                cur = lines[i]
                cs = cur[len(prefix):] if cur.startswith(prefix) else cur
                if cs.rstrip() == fence:
                    break
                body.append(cs)
                i += 1
            blocks.append((start + 1, "\n".join(body), len(fence)))
        i += 1
    return blocks


def clean_stdout(s):
    """去掉 ANSI 颜色码与 yak 日志行, 只保留示例真正的 println 输出。"""
    out = []
    for ln in ANSI.sub("", s).split("\n"):
        if LOGLINE.match(ln.strip()):
            continue
        out.append(ln)
    return "\n".join(out)


def expected_outs(code):
    return [
        m.group(1).rstrip()
        for ln in code.split("\n")
        for m in [re.search(r"//\s*OUT:\s*(.*)$", ln)]
        if m
    ]


def expected_render(code):
    m = re.search(r"/\*(.*?)\*/", code, re.S)
    if not m:
        return None
    out = [ln.rstrip() for ln in m.group(1).split("\n") if not ln.strip().startswith("//")]
    return [l for l in out if l.strip() != ""]


def is_render_block(code):
    return (
        "fuzz.HTTPRequest" in code
        and ".Show()" in code
        and "随机" not in code
        and ".Exec(" not in code
        and ".ExecFirst(" not in code
    )


def run(code):
    with tempfile.NamedTemporaryFile("w", suffix=".yak", delete=False) as f:
        f.write(code)
        tmp = f.name
    try:
        p = subprocess.run(["yak", tmp], capture_output=True, text=True, timeout=25)
        return p.returncode, clean_stdout(p.stdout), p.stderr
    finally:
        try:
            os.unlink(tmp)
        except OSError:
            pass


def main():
    list_skipped = "--list-skipped" in sys.argv
    run_all = "--run-all" in sys.argv  # 跑每个 yak 块(含无 assert/OUT 的), 用于找出不可运行片段
    total = ran = skipped = 0
    failed, perfile, skipped_list = [], {}, []

    for root, dirs, files in os.walk(DOCS):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for fn in sorted(files):
            if not (fn.endswith(".md") or fn.endswith(".mdx")):
                continue
            path = os.path.join(root, fn)
            rel = os.path.relpath(path, DOCS)
            for (lineno, code, _fence) in extract_blocks(path):
                total += 1
                has_assert = "assert " in code
                outs = expected_outs(code)
                is_render = is_render_block(code)
                if not (has_assert or outs or is_render or run_all):
                    skipped += 1
                    skipped_list.append((rel, lineno, code.split("\n")[0][:70]))
                    continue
                ran += 1
                perfile[rel] = perfile.get(rel, 0) + 1
                if list_skipped:
                    continue
                rc, out, err = run(code)
                if rc != 0:
                    failed.append((rel, lineno, f"EXIT {rc}", (out + err)[-600:]))
                    continue
                outlines = [l.strip() for l in out.split("\n")]
                bad = False
                for ev in outs:
                    if ev.strip() not in outlines:
                        failed.append((rel, lineno, f"OUT mismatch: '{ev.strip()}'", out[-600:]))
                        bad = True
                        break
                if bad:
                    continue
                if is_render:
                    exp = expected_render(code)
                    if exp:
                        got = [l.rstrip() for l in out.split("\n") if l.strip() != ""]
                        expn = [l.rstrip() for l in exp if l.strip() != ""]
                        if got != expn:
                            failed.append(
                                (rel, lineno, "RENDER mismatch",
                                 "EXP:\n" + "\n".join(expn) + "\n--GOT--\n" + "\n".join(got)))

    print(f"docs root: {DOCS}")
    print(f"total yak blocks: {total}, ran(assert/OUT/render): {ran}, "
          f"skipped(illustrative): {skipped}")
    print("ran per file:")
    for k in sorted(perfile):
        print(f"  {perfile[k]:3d}  {k}")
    if list_skipped:
        print("\nSKIPPED (no assert/OUT/render -> illustrative/network):")
        for rel, lineno, head in skipped_list:
            print(f"  {rel}:~{lineno}  | {head}")
        return 0
    if failed:
        print(f"\nFAILURES ({len(failed)}):")
        for rel, lineno, why, detail in failed:
            print(f"- {rel}:~{lineno} -> {why}")
            if detail:
                print("    " + detail.replace("\n", "\n    "))
        return 1
    print("\nALL verifiable blocks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
