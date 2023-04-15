---
sidebar_position: 13
---

# History

### MITM-history

MITM交互劫持所有流量均展示在HTTP-history页面

![](/img/products/yakit/mitm-39.png)

### 插件-history

插件系统使用任何插件都会在插件-history留下请求记录。比如使用ThinkPHP被动扫描插件

![](/img/products/yakit/mitm-40.png)

插件-history里面显示了所有的请求记录

![](/img/products/yakit/mitm-41.png)

### 爬虫-history

点击`基础工具`--`基础爬虫`--`输入baidu.com`。

![](/img/products/yakit/mitm-42.png)

返回HTTP-history就可以看见爬虫爬取发送成功的数据包。

![](/img/products/yakit/mitm-43.png)

针对三项history里面的所有数据包，均支持对数据包进行单个操作，或者批量操作，具体操作可分为：
1. 选择数据包进行漏洞扫描
2. 复制为POC模板（CSRF POPOC/yak POC/Portscan POC）
3. 标记颜色
4. 数据包作为数据对比
5. 屏蔽删除
6. 下载 Response body

![](/img/products/yakit/mitm-44.png)

其次选择单个数据包也可以对数据包进行编解码，修改请求类型等操作。

![](/img/products/yakit/mitm-45.png)

### 删除/重置-history

点击`删除当前筛选`，即可删除当前列表展示的数据。`重置数据库`是将序号在数据库进行重置，以免数据出现“断号”的现象。

![](/img/products/yakit/mitm-46.png)




