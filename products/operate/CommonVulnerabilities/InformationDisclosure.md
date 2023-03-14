---
sidebar_position: 14
---
# 信息遍历/泄露

## 1 订单信息遍历/泄露

**漏洞描述：**

管理员没有对订单号进行加密或者权限认证等保护机制，用户可以通过枚举的手法遍历订单信息

**漏洞案例：**

注册2个账号：178xxxx5699    178xxxx5688
账号购买商品
根据订单号规则制定字典（很明显，订单号为时间戳）

![](/img/products/yakit/InformationDisclosure-1.png)

在查看订单模块处抓包
随后去加载字典进行订单遍历
对20230201的时间插入文本内容（因测试用，只制定一部分字典）

![](/img/products/yakit/InformationDisclosure-2.png)

如下图，302状态码是真实存在的订单

![](/img/products/yakit/InformationDisclosure-3.png)
![](/img/products/yakit/InformationDisclosure-4.png)
![](/img/products/yakit/InformationDisclosure-5.png)


:::note

漏洞修复方案

订单查询时应限定某个特定用户
对订单号进行加密或混淆等保护手段
对单一IP短时间大量请求进行限制

:::

## 2 用户信息遍历/泄露

**漏洞案例：**

***1 修改用户名***

漏洞描述：在URL中或者请求包中存在用户名，用户可以通过修改户名导致用户信息泄露

登录测试：hbiit1 admin123
使用yakit抓包，抓取hbiit1用户的包

![](/img/products/yakit/InformationDisclosure-6.png)

修改username参数的值，如修改为admin，发现admin用户的信息泄露
对用户信息进行遍历

![](/img/products/yakit/InformationDisclosure-7.png)
![](/img/products/yakit/InformationDisclosure-8.png)

***2 修改用户参数***

漏洞描述：在URL中或者请求包中存在用户参数（如uid，id,手机号等），用户可以通过修改户参数导致用户信息泄露

登录测试：hbiit      （178xxxx5698/12345678）
使用yakit抓取个人资料的包

![](/img/products/yakit/InformationDisclosure-9.png)

修改App_u_id参数的值为124130
对用户信息进行遍历

![](/img/products/yakit/InformationDisclosure-10.png)

***3 修改收获地址参数***

漏洞描述：在收货地址请求包中存在可修改的参数，用户可以通过修改参数导致用户信息泄露

登录测试：178xxxx5698
修改收货地址时抓包，并修改addressId参数的值

![](/img/products/yakit/InformationDisclosure-11.png)

发送数据包对用户信息进行遍历

![](/img/products/yakit/InformationDisclosure-12.png)


:::note

漏洞修复方案

设置随机token与会话绑定，限制用户权限
对当前账号及用户参数值进行匹配校验，防止越权查看其它账号信息

:::