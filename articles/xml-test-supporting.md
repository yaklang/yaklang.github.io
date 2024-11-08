#  浅谈XML模糊测试   
Longlone  Yak Project   2024-02-29 17:31  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
![](/articles/wechat2md-01c1c684e6a259dea97dd828d8543ec7.gif)  
  
  
# **前言**  
  
在我们平时进行渗透测试的过程中，我们经常会遇到一些带有XML格式的HTTP请求报文，其通常存在于请求体中，并通过POST请求方法发送，今天我们就来浅谈一下如何对XML这种格式进行模糊测试。  
# **什么是XML**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
XML（可扩展标记语言）是一种标记语言，用于存储和传输数据。它是一种简化版的SGML（标准通用标记语言），旨在同时具有灵活性和简单性，让开发者可以自定义标记元素，其与我们熟悉的HTML很像。  
  
## **XML的一些特征：**   
  
1、**自我描述性**：XML文件的标记通常是描述性的，这意味着标签本身提供了关于数据的信息。例如，John Doe中的标签表明了其中的数据是一个名字。  
2、**结构化数据**：XML提供了一种结构化数据的形式，这让数据易于读取和理解。XML数据通常按层次结构组织，类似于树状结构，有父标签和子标签。    
3、**标准化**：XML是由W3C（万维网联盟）维护的一个开放标准，这有助于保持跨平台的兼容性和数据的一致性。  
4、**文本格式**：XML数据以纯文本形式存储，这使得它可以在不同的系统和程序之间轻松传输。  
5、**解析器普及**：大多数编程语言都提供了解析XML的工具和库，这意味着可以在多种环境中轻松处理XML数据。  
XML常见于配置文件、网络服务（如SOAP）、Office文档格式（如Microsoft Office Open XML）以及许多其他需要结构化存储和数据交换的场景。因其灵活性和简单性，XML成为了数据交换的一种流行选择。  
  
一个简单的XML例子如下：

    <bookstore>
      <book>
        <title lang="en">Harry Potter</title>
        <price>29.99</price>
      </book>
      <book>
        <title lang="en">Learning XML</title>
        <price>39.95</price>
      </book>
    </bookstore>
  
# **什么是XPath**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
XPath，即XML Path Language，是一种查询XML文档中信息的语言。它允许你能够通过定义具体路径来选择和导航文档树中的元素和属性。XPath使用简洁的路径表达式来选取XML文档中的节点或节点集。这些路径表达式看起来有点类似于文件系统的路径，但用于定位XML文档中的部分。  
  
XPath的基础路径表达式包括：  
- / ：根节点  
  
- // ：在当前节点选择文档中的节点，而不考虑它们的位置。  
  
- . ：当前节点  
  
- .. ：父节点  
  
- @ ：属性选择  
  
举一个简单的例子，以上面的XML文档为例，如果想要选取所有的 `<book>` 元素，可以使用以下XPath表达式：  

```
/bookstore/book
```  
如果我们想要选择所有属性lang 值为"en" 的 `<title>` 元素，XPath表达式将会是：

```
//title[@lang='en']
```  
# **XML模糊测试技术实现**   
  
在了解了XML与XPath之后，我们对于如何模糊测试XML就有了一个基本的思路。假设我们的输入是一段请求体为XML格式的HTTP请求报文，那么根据思路我们拆分成以下几步：  
1. 切割HTTP请求报文，得到XML格式的请求体  
  
1. 使用XML解析库将XML解析为一个树形结构  
  
1. 遍历这个树形结构的所有节点，排除一些特殊节点（如注释节点，CharData节点等）后得到剩余的节点，称为普通节点  
  
1. 根据普通节点反推出其在该XML树形结构中的XPath，并将其他相关数据如标签名等存储为模糊测试参数(FuzzParam)  
  
1. 当我们需要进行模糊测试时，遍历上述存储的模糊测试参数，通过XPath定向修改该元素的内容为需要测试的值，就得到了我们模糊测试需要的请求报文  
  
  
上述几个步骤中，最具挑战的应该是如何将一个节点在XML属性结构中的XPath反推出来，对此需要编写一个溯源函数，从普通节点一路回溯到根节点，并根据路径中回溯到的节点拼接为XPath，其关键实现如下：  
```
func GetXpathFromNode(node *xmlquery.Node) string {
    var getXpathFromNode func(node *xmlquery.Node, depth int, path string) string

    getXpathFromNode = func(node *xmlquery.Node, depth int, path string) string {
        if node == nil {
            return ""
        }
        nodeType := node.Type

        if nodeType == xmlquery.CommentNode || nodeType == xmlquery.DeclarationNode || nodeType == xmlquery.CharDataNode {
            return ""
        }

        data := node.Data
        prefix := ""
        switch nodeType {
        case xmlquery.TextNode:
            path = "text()"
        case xmlquery.DocumentNode:
            prefix = "/"
        case xmlquery.ElementNode:
            prefix = data
        case xmlquery.AttributeNode:
            prefix = "@" + data
        }

        hasIndex := false
        if node.PrevSibling != nil {
            count := 0
            for prev := node.PrevSibling; prev != nil; prev = prev.PrevSibling {
                if prev.Type == node.Type && prev.Data == data {
                    count++
                }
            }
            if count > 0 {
                prefix = fmt.Sprintf("%s[%d]", prefix, count+1)
                hasIndex = true
            }
        }

        if !hasIndex && node.NextSibling != nil {
            existed := false
            for next := node.NextSibling; next != nil; next = next.NextSibling {
                if next.Type == node.Type && next.Data == data {
                    existed = true
                    break
                }
            }
            if existed {
                prefix = fmt.Sprintf("%s[1]", prefix)
            }
        }

        if prefix != "" {
            if !strings.HasSuffix(prefix, "/") {
                prefix += "/"
            }
            path = prefix + path
        }

        if depth < 128 && node.Parent != nil {
            path = getXpathFromNode(node.Parent, depth+1, path)
        }

        return strings.TrimRight(path, "/")
    }

    return getXpathFromNode(node, 0, "")
}
```  

 
  
# **XML模糊测试演示**   
至此，Yaklang支持了对XML格式进行模糊测试，我们可以像以前一样轻松地使用Yaklang的fuzz  
标准库来使用它：  
  
## **通过模糊测试参数使用**  

    freq = fuzz.HTTPRequest(`POST / HTTP/1.1
    Content-Type: application/xml
    Host: www.example.com
    
    <bookstore>
      <book>
        <title lang="en">Harry Potter</title>
        <author>J K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
      </book>
      <book>
        <title lang="cn">你好世界</title>
        <author>Lang</author>
        <year>2024</year>
        <price>22.99</price>
      </book>
    </bookstore>`)~
    
    for p in freq.GetCommonParams() {
      p.Fuzz("123").Show()
    }

## **通过FuzzPostXMLParams使用**  
   
```
freq = fuzz.HTTPRequest(`POST / HTTP/1.1
Content-Type: application/xml
Host: www.example.com

<bookstore>
  <book>
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book>
    <title lang="cn">你好世界</title>
    <author>Lang</author>
    <year>2024</year>
    <price>22.99</price>
  </book>
</bookstore>`)~

// 模糊测试全部author元素
freq.FuzzPostXMLParams("author", "123").Show()

// key也支持XPath，模糊测试bookstore/book中语言为cn的title元素
freq.FuzzPostXMLParams("/bookstore/book/title[@lang='cn']", "123").Show()
```
  
  
**END**  
**YAK官方资源**  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777Github  
下载地址：  
https://github.com/yaklang/yakitYakit  
官网下载地址：  
https://yaklang.com/Yakit  
安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
长按识别添加工作人员
开启Yakit进阶之旅  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)
  
