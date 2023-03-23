---
sidebar_position: 12
---

# 重定向后会话标识携带

**漏洞描述：**

测试当用户已成功登录情况下，再利用URL重定向对非同源网站发起请求时，请求中是否含有如 SessionID，token 等会话标识字段。若重定向后的请求中存在会话标识字段，则表明存在会话标识携带。(注:"同源":"协议 + 域名 + 端口"三者相同)

**漏洞案例：**

访问测试网站拼接需要重定向的网站，输入测试账号密码点击登录

![](/img/products/yakit/SessionIDCarrying-1.png)

成功跳转到baidu.com,并且在重定向后的请求中存在会话标识字段

![](/img/products/yakit/SessionIDCarrying-2.png)


:::note

漏洞修复方案

禁止在用户成功登陆系统后将SessionID，token等会话标识字段返回在URL中

:::


