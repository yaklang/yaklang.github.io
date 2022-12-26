---
sidebar_position: 8
---

# 8. 字符串：Fuzztag 快速执行 x-string 

Fuzztag 是 Yak 一个特色功能，在生成数据包进行模糊测试领域有非常广泛的使用，并广受用户好评。

新版本的 Yak 中，我们为 fuzztag 新设计了x-string 使用 x 作为字符串声明的前缀，可以快速实现 fuzztag 的渲染，例如我们 x"{{int(1-10)}}" 可以生成 ["1", "2", "3" ... "10"] 的数据

    a = x"Fuzztag int(1-10): {{int(1-10)}}"
    dump(a)
    
    /*
    ([]string) (len=10 cap=10) {
     (string) (len=20) "Fuzztag int(1-10): 1",
     (string) (len=20) "Fuzztag int(1-10): 2",
     (string) (len=20) "Fuzztag int(1-10): 3",
     (string) (len=20) "Fuzztag int(1-10): 4",
     (string) (len=20) "Fuzztag int(1-10): 5",
     (string) (len=20) "Fuzztag int(1-10): 6",
     (string) (len=20) "Fuzztag int(1-10): 7",
     (string) (len=20) "Fuzztag int(1-10): 8",
     (string) (len=20) "Fuzztag int(1-10): 9",
     (string) (len=21) "Fuzztag int(1-10): 10"
    }
    */

