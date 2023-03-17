---
sidebar_position: 9
---

# 会话固定测试

**漏洞描述：**

会话标识未更新漏洞，在用户进入登录页面，但还未登录时，就已经产生了一个session，用户输入信息，登录以后，session的id不会改变，也就是说没有建立新session，原来的session也没有被销毁）, 可能会窃取或操纵客户会话和cookie，它们可能用于模仿合法用户，从而使黑客能够以该用户身份查看或变更用户记录以及执行事务。

**漏洞案例：**

访问测试网站系统登录界面

![](/img/products/yakit/session-id-1.png)

登陆前抓包查看当前Cookie字段信息：Cookie: JSESSIONID=E13805470813731028B67D2741B941A2

![](/img/products/yakit/session-id-2.png)

输入测试账号进行登陆

![](/img/products/yakit/session-id-3.png)

登陆后抓包查看当前Cookie字段信息通过对比与之前保存的cookie一致

![](/img/products/yakit/session-id-4.png)


:::note

漏洞修复方案

在客户端登录系统时，应首先判断客户端是否提交浏览器的留存 Session 认证会话属性标识，客户端提交此信息至服务器时，应及时销毁浏览器留存的 Session 认证会话，并要求客户端浏览器重新生成 Session 认证会话属性标识

:::
