---
sidebar_position: 12
---

# 标记/替换流量

在日常的工作中，我们需要对测试的目标网站进行流量分析；当然除了在分析流量之外，我们经常需要涉及一些操作，以实现对流量的修改。

作为一个合格的工程师，任何时候掌握对流量的完全控制权其实是非常重要的基本技能。

该功能主要是替换数据包中符合规则的内容，比如替换数据包中自己的敏感信息，对数据包进行颜色标记或者打上标签，方便对数据包进行分类，或快速找出自己感兴趣的数据包。

### 导入规则

点击`从JSON导入`

![](/img/products/yakit/mitm-15.png)

点击`使用默认配置`，导入JSON以后，点击`导入配置`，即可在启动劫持后看到默认规则内容。如果想使用其他规则，只需将JSON文件复制进来，点击导入即可。

**注意**，`全部替换`是本地导入的规则是否需要覆盖之前导入的规则，如果是新增规则请将全部替换关闭，如果是想进行覆盖，则可开启全部替换

![](/img/products/yakit/mitm-16.png)

如果所示官网默认规则。

![](/img/products/yakit/mitm-17.png)

### 新建/编辑规则

点击“点击/替换流量”可以查看已有规则。编写规则的部分采用 Golang 风格正则表达式：推荐使用 https://regex101.com/ 调试

规则如果编译失败，则自动降级为关键字匹配

![](/img/products/yakit/mitm-18.png)

已有的规则可以进行编辑操作，或者新增规则，编辑或新增以后点击`更新到引擎`进行保存

![](/img/products/yakit/mitm-19.png)

### 导出规则

点击`导出配置`，可以将规则导出为JSON文件，可将文件进行分享给他人使用。

![](/img/products/yakit/mitm-20.png)

### 标记替换流量案例

**标记替换文本**

`新增规则`--`设置规则内容`--`选择文本/HTTP Header/Cookie`--`替换结果`--`命中颜色`--`标记Tag`。

![](/img/products/yakit/mitm-21.png)

![](/img/products/yakit/mitm-22.png)

非常简单的配置就可以实现 “百度一下” 变为 YAK一下！

![](/img/products/yakit/mitm-23.png)

为example.com的访问添加Header或Cookie。

![](/img/products/yakit/mitm-24.png)

添加规则Yakit-Hook-Yakit-YYDS。

![](/img/products/yakit/mitm-25.png)

保存规则时如果是针对请求，请勾选请求

![](/img/products/yakit/mitm-26.png)

访问example.com发现Header添加成功，添加内容为Yakit-Hook-Yakit-YYDS。

![](/img/products/yakit/mitm-27.png)





