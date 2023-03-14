---
sidebar_position: 8
---
# 商品金额/数量篡改

## 1 交易金额篡改

**漏洞描述：**

测试资金交易功能时，抓包对交易金额进行修改，甚至重放交易数据包，服务器仍然返回交易成功。

**漏洞案例：**

访问测试网站，访问融资申请功能，账户融资额度为0

![](/img/products/yakit/QuantityTampered-1.png)

提交融资请求后抓包，修改输入金额，重放数据包，提示交易成功

![](/img/products/yakit/QuantityTampered-2.png)

## 2 订单金额篡改

**漏洞描述：**

测试资金交易功能时，抓包对订单金额进行修改，结算时按照修改金额支付

**漏洞案例：**

访问测试网站

![](/img/products/yakit/QuantityTampered-3.png)

具体操作过程：
注册账号登录
添加商品到购物车
结算时抓包修改订单金额为0.01

![](/img/products/yakit/QuantityTampered-4.png)

支付时查看金额是否正确

![](/img/products/yakit/QuantityTampered-5.png)
![](/img/products/yakit/QuantityTampered-6.png)


## 3 商品数量篡改

**漏洞描述：**

测试资金交易功能时，抓包对商品数量进行修改，会出现负数的金额

**漏洞案例：**

具体操作过程：
注册账号登录
添加2个商品到购物车
添加其中一个商品时，抓包将商品数量改为-1

![](/img/products/yakit/QuantityTampered-7.png)

支付时查看金额是否正确

![](/img/products/yakit/QuantityTampered-8.png)


:::note

漏洞修复方案

在交易请求中加入数据完整性校验标签
对交易请求进行加密处理
服务器增加交易验证  

:::


