---
sidebar_position: 17
---

# [json] JSON序列化与反序列化

本系统的 JSON API 非常简单，只有两个，一个是序列化一个是反序列化

## API

1. `fn json.Marshal(var_1: interface {}): ([]byte, error)` Json 序列化，把任意一个对象解析成 []byte，内容是 JSON 字符串
1. `fn json.New(var_1: string|[]byte|any): (*yaklib.yakJson, error)` 把字符串或者一个对象，变成 json 序列化之后的内容，只有几种情况，分别为：
    1. `string`
    1. `number`
    1. `object`
    1. `array`
    1. `null`
    
 我们发现，这个包关键返回了一个数据类型，是 `*yaklib.yakJson`
 
 这个类型的定义是
 
 ```go
 type palm/common/yak/yaklib.(yakJson) struct {
   PtrStructMethods(指针结构方法/函数):
       // 判断解析出的对象是否是数组 [] 
       func IsArray() return(bool)
       func IsSlice() return(bool)

       // 判断解析出的对象是否是 Object / map
       func IsObject() return(bool)
       func IsMap() return(bool)

       // 判断是否是空
       func IsNil() return(bool)∂
       func IsNull() return(bool)

       // 判断解析出的是否是数字
       func IsNumber() return(bool)

       // 判断是否是字符串
       func IsString() return(bool)

       // 获得解析出来的具体的值
       func Value() return(interface {})
 }
```