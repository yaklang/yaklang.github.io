# [xpath] XPATH

xpath 是补全 yak 对 html 处理能力的一个环节，这个内置模块本质上是对 [htmlquery 的精简与再封装](https://github.com/antchfx/htmlquery)。

## API

```go
fn xpath.CreateXPathNavigator(var_1: *html.Node): *htmlquery.NodeNavigator
fn xpath.ExistedAttr(var_1: *html.Node, var_2: string): bool
fn xpath.Find(var_1: *html.Node, var_2: string): []*html.Node
fn xpath.FindOne(var_1: *html.Node, var_2: string): *html.Node
fn xpath.InnerText(var_1: *html.Node): string
fn xpath.LoadHTMLDocument(var_1: interface {}): (*html.Node, error)
fn xpath.OutputHTML(var_1: *html.Node): string
fn xpath.OutputHTMLSelf(var_1: *html.Node): string
fn xpath.Query(var_1: *html.Node, var_2: string): (*html.Node, error)
fn xpath.QueryAll(var_1: *html.Node, var_2: string): ([]*html.Node, error)
fn xpath.SelectAttr(var_1: *html.Node, var_2: string): string
```

## 案例: 使用 `xpath.Find` 来查询 HTML 节点 {#find}

在使用查询 API 之前，我们需要通过 `xpath.LoadHTMLDocument` 来生成一个 HTML 可操作文档，然后把文档的实例传递给其他的查询参数获取内容。

```
doc, err := xpath.LoadHTMLDocument(`
<!DOCTYPE html><html lang="en-US">
<head>
<title>Hello,World!</title>
</head>
<body>
<div class="container">
<header>
	<!-- Logo -->
   <h1>City Gallery</h1>
</header>  
<nav>
  <ul>
    <li><a href="/London">London</a></li>
    <li><a href="/Paris">Paris</a></li>
    <li><a href="/Tokyo">Tokyo</a></li>
  </ul>
</nav>
<article>
  <h1>London</h1>
  <img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">
  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
</article>
<footer>Copyright &copy; W3Schools.com</footer>
</div>
</body>
</html>
`)
die(err)

nodes := xpath.Find(doc, "//p")
for _, node := range nodes {
    println(xpath.InnerText(node))
}
```