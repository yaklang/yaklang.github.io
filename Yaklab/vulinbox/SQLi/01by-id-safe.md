---
sidebar_position: 1
---

# 01.不存在 SQL 注入的情况（数字严格校验）

这个示例演示了如何通过对用户输入的参数进行数字严格校验，从而防止 SQL 注入攻击。数字严格校验确保只有有效的数字被用作 SQL 查询的参数，而不允许插入恶意的 SQL 代码。

### 示例代码：

```go
{
    DefaultQuery: "id=1",
    Path:         "/user/by-id-safe",
    Title:        "不存在SQL注入的情况（数字严格校验）",
    Handler: func(writer http.ResponseWriter, request *http.Request) {
        var a = request.URL.Query().Get("id")
        i, err := strconv.ParseInt(a, 10, 64)
        if err != nil {
            writer.Write([]byte(err.Error()))
            writer.WriteHeader(500)
            return
        }
        u, err := s.database.GetUserById(int(i))
        if err != nil {
            writer.Write([]byte(err.Error()))
            writer.WriteHeader(500)
            return
        }
        sqliWriter(writer, request, []*VulinUser{u})
        return
    },
    RiskDetected:   false,
    ExpectedResult: map[string]int{"参数:id未检测到闭合边界": 1},
}
```

### 代码分析：

- 这个示例接收一个名为 `id` 的查询参数，该参数预期是一个整数。
- 通过使用 `strconv.ParseInt` 函数，将用户提供的 `id` 参数解析为一个 64 位整数。如果解析失败，将返回一个错误。
- 使用解析后的整数值来执行数据库查询，这个值不包含恶意的 SQL 注入代码。
- 最后，将查询结果返回给客户端。

### 注意：

数字严格校验是一种有效的防御措施，但在实际应用中，还需要考虑其他安全性方面的因素，例如权限控制和输入验证，以维护应用程序的安全性。
