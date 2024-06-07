---
sidebar_position: 1
---

# 01.安全实体转义

安全实体转义是将特殊字符转换成对应的 HTML 实体，从而防止浏览器将其解释为 HTML 标签或脚本代码。常见的安全实体包括：

1. `<` 转义为 `<`
2. `>` 转义为 `>`
3. `&` 转义为 `&`
4. `'` 转义为 `'` 或 `'`
5. `"` 转义为 `"`

通过对用户输入进行安全实体转义，即使用户输入的内容中包含特殊字符或 HTML 标签，也会被转义为普通文本，而不会被当作代码执行。