---
sidebar_position: 1
description: Yaklang is a domain-specific programming language for cybersecurity engineering that unifies scanning, PoC, traffic analysis, and security automation in one language, runtime, and standard library.
---

# Yak: A Language Dedicated to Security Capability Fusion

## What problem are we solving?

When people talk about "hacker programming", Python is usually the first thing that comes to mind. Thanks to its simple syntax and rich ecosystem of security tools, Python is regarded as a must-learn skill for security practitioners.

As skills deepen, people are no longer satisfied with writing Python scripts for personal use. Large-scale needs emerge — tools, platforms, and security products — and Golang enters the picture. As a more efficient language better suited to product distribution, engineering, and platform building, various security teams and white-hat researchers have used it to build many tools and systems.

At this stage, we start paying attention to more professional **security engineering**.

At the same time, an idea gains acceptance: *"security engineering is not only about building security platforms — it also includes developing security capabilities."* We typically use a suitable language to build the platform that handles business needs, but developing security capabilities is often more complex. Different security tools use the "most suitable" language for the job, which fragments security platforms and security-capability modules. Why must security capabilities live in separate projects? Can't they share one platform?

:::tip A note on "most suitable"

A large part of the reason is historical: with no one dedicated to adapting code to new scenarios, "legacy code" simply accumulates.

:::

To solve this, we have invested heavily in Yak. We want it to take on the role of **security-capability fusion**: your PoCs, your scanners, your scanning modules, and your vulnerability-scanning algorithms can all be solved with it.

Our goal is to provide a **one-stop security-capability foundation**.

## Core philosophy: fusing foundational security capabilities

1. A mature content ecosystem
    1. Beginner-friendly, hand-holding security-engineering tutorials
    1. Long-term support, backed by successful enterprise practice
    1. Extremely flexible advanced features and a unique fuzzing experience
1. Fuse multiple security capabilities and tools at the low level, breaking down the walls between tools and security sub-domains
1. Integrate high-quality MIT-licensed tooling
1. Raise the overall security level of the industry

## At a glance: write security tools fast

We create a file `service_scan.yak` with the following content:

```yak
// Minimal argument parsing: --target xxxx  --port 80
scanTarget, scanPorts = cli.String("target"), cli.String("port")

// Batch service scan by default
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)

// Consume scan results (asynchronous scan results)
for result = range results {
    println(result.String())
}
```

Then we run `yak service_scan.yak --target 192.168.1.1/24 --port 22,80` and see output like:

```text
tcp://192.168.1.32:22	 open	openssh[6.6.1]
tcp://192.168.1.21:22	 open	openssh[7.4]
tcp://192.168.1.40:22	 open	openssh[6.6.1]
tcp://192.168.1.43:22	 open	openssh[5.3]
...
tcp://192.168.1.83:80	 open	apache_tomcat[1.1]/coyote[1.1]/coyote_http_connector[1.1]/java[*]/jquery[*]/jquery[1.3.2]
tcp://192.168.1.99:80	 open
tcp://192.168.1.122:80	 open	nginx[*]
tcp://192.168.1.125:80	 open	linux_kernel[*]/nginx[1.10.3]/ubuntu[*]/ubuntu_linux[*]
tcp://192.168.1.126:80	 open	nginx[*]/php[5.4.45]
```

## A Bite of Yaklang!

:::tip Conventions and basic concepts

In this documentation, "Yak" and "Yaklang" generally both refer to the Yak language — don't confuse them.

Fully capitalized **YAK** refers to the Yak ecosystem, which includes the Yaklang programming language and the Yakit security platform.

:::

Following programming-language tradition, the first program to introduce is usually printing "Hello World" to the screen. In Yaklang, this takes just one line:

```yak
print("Hello World")
// Output: Hello World
```

This syntax should look familiar. In Yaklang, this single line is a complete program — you don't need to import a "library" or wrap it in a "class" as in other languages. Yaklang favors a "logically consistent" design. In the code above, unless necessary, you don't need to worry about how `main()` is defined, nor do you need to add a semicolon at the end of a line.

This document gives you a minimal quick-start for Yaklang and helps you get up to speed quickly. Through it you can glimpse almost all of Yaklang's features. For complex concepts, we cover them in later chapters in detail. You can also jump to a more detailed section whenever you encounter syntax you don't understand.

### Creating variables

In Yaklang you can use `var` to create a variable, use `=` directly to auto-create one, or use `:=` to force the creation of a new variable.

```yak
var myVariable = 1
myVariable = 2
myVariable := 3
var myAnotherVariable
```

All of these create variables, but they serve different purposes:

1. `var myVariable = 1` is equivalent to `myVariable := 1` — both create a new variable.
2. `myVariable = 2` assigns `myVariable` to `2`: if `myVariable` didn't exist before, a new variable is created; if it did, its value is set to `2`.
3. `var myAnotherVariable` creates a new variable that is not initialized, so its value is `nil`.

:::tip Note

Yaklang is a dynamically typed language, so you don't need to worry about a variable's type — Yaklang infers it automatically from the assigned value. Therefore, you cannot specify a variable's type at declaration.

:::

To create a variable in Yaklang, you generally use an assignment statement; to create an empty variable, use `var variableName` directly.

### Creating values (literals)

In Yaklang, values (literals) are basic data types such as nil, integers, floats, strings, booleans, arrays, dictionaries, functions, and so on. We can think of values as the value of a variable, and variables as containers for values.

```yak
myIntVariable = 1
myFloatVariable = 3.14
myStringVariable = "Hello World"
myBoolVariable = true
myArrayVariable = [1, 2, 3]
myDictVariable = {"key": "value"}
myFunctionVariable = func() {
    print("Hello World")
}
```

Thanks to Yaklang's "intuitive" design philosophy, the code above needs almost no explanation — readers can understand it naturally.

### An important type: `string`

In Yaklang, the `string` type is the string type — a collection of characters. This type is very important: in real-world engineering, large amounts of data are transmitted and stored as strings. So it helps to know some common `string` operations, which will help you greatly later on.

#### Creating strings

There are several ways to create strings in Yaklang:

1. Create a string with double quotes

```yak
myString := "Hello World"
```

Double-quoted strings behave almost exactly like C-style strings. Note their escaping: if you need a `"` inside the string, write `\"`; for a newline, use `\n`.

2. Create a string with backticks

```yak
myString := `Hello World`
```

Backtick strings can contain newlines, so they are useful for multi-line strings. **Note: backtick strings do not process escapes, so a backtick string cannot itself contain a backtick.**

3. Heredoc syntax

```yak
myString := <<<EOF
Hello World
EOF
```

Heredoc syntax can create multi-line strings and can contain newlines. Unlike backticks, heredoc strings can contain backticks.

#### String formatting and interpolation

Suppose our user is called `John` and we want to output `Hello John`. We can use string formatting. Here are several ways:

1. Format a string with the `string % element` syntax

```yak
name := "John"
println("Hello %v" % name)
// Output: Hello John

assert ("Hello %v" % name) == "Hello John"
```

This syntax uses `%v` to represent a variable's value (`%v` is short for "value"); Yaklang decides the rendering based on the variable's type. Similarly, you can use `%d` for integers, `%f` for floats, and `%s` for strings.

```yak
name, age := "John", 20
println("Hello %v, you are %v years old" % [name, age])
// Output: Hello John, you are 20 years old

assert ("Hello %v, you are %v years old" % [name, age]) == "Hello John, you are 20 years old"
```

If a string has multiple placeholders for multiple variables, wrap them in `[]` after `%`. For example, `[name, age]` above renders as `Hello John, you are 20 years old`.

2. Format a string with the `sprintf` function

```yak
name := "John"
println(sprintf("Hello %v", name))
// Output: Hello John

assert sprintf("Hello %v", name) == "Hello John"
```

`sprintf` is essentially equivalent to the `%` syntax, but supports multiple variables by taking them as direct arguments rather than wrapping them in `[]`.

```yak
name, age := "John", 20
println(sprintf("Hello %v, you are %v years old", name, age))
// Output: Hello John, you are 20 years old

assert sprintf("Hello %v, you are %v years old", name, age) == "Hello John, you are 20 years old"
```

3. f-string interpolation syntax

```yak
name := "John"
println(f"Hello ${name}")
// Output: Hello John

name, age := "John", 20
println(f"Hello ${name}, you are ${age} years old")
// Output: Hello John, you are 20 years old

assert f"Hello ${name}" == "Hello John"
assert f"Hello ${name}, you are ${age} years old" == "Hello John, you are 20 years old"
```

f-string interpolation works by prefixing the string with `f`; inside the string you wrap expressions in `${ }`. Above, placing `${name}` inserts the value of `name` at that position. This is a very common and handy syntax.

### Compound types: lists and dicts

From the earlier sections, we know dicts and lists can be created directly with literals:

```yak
// List
myList := [1, 2, 3]

// Dict
myDict := {"key": "value"}
```

These two types also have a series of common operations; refer to the examples below:

1. List CRUD:

```yak
myList = [1,2,3]

myList.Append(4)
println(myList)
// Output: [1 2 3 4]

myList.Remove(2)
println(myList)
// Output: [1 3 4]

myList[1] = 999
println(myList)
// Output: [1 999 4]

println(myList[2])
// Output: 4
println(myList[:2])
// Output: [1 999]
println(myList[1:])
// Output: [999 4]
println(myList[1:3])
// Output: [999 4]

assert myList == [1, 999, 4]
assert myList[2] == 4 && myList[:2] == [1, 999] && myList[1:] == [999, 4]
```

Besides the basics, `list` also supports `newList = append(oldList, element)` (where `append` is a builtin).

```yak
myList = [1,2,3]
newList = append(myList, 4)
println(newList)
// Output: [1 2 3 4]

newList = append(newList, 5, 6, 7)
println(newList)
// Output: [1 2 3 4 5 6 7]

assert newList == [1, 2, 3, 4, 5, 6, 7]
```

2. Dict CRUD:

```yak
myDict = {}

myDict["name"] = "John"
myDict["age"] = 12
println(myDict)
// Output: map[age:12 name:John]

myDict.Delete("age")
println(myDict)
// Output: map[name:John]

myDict["name"] = "Tom"
myDict["age"] = 22
println(myDict)
// Output: map[age:22 name:Tom]

println(f`Hello ${myDict["name"]}, your age is ${myDict["age"]}`)
// Output: Hello Tom, your age is 22

assert myDict["name"] == "Tom" && myDict["age"] == 22
```

From the above, you can quickly grasp common list and dict operations. For the full set of list and map operations, consult the more detailed documentation — we won't repeat them here.

### Control flow

In Yaklang, you use IF and Switch for conditional control flow, and For for loops. Use braces to wrap the code blocks. You can quickly understand Yaklang's control flow from the examples below:

```yak
scores = [10, 20, 30, 40, 50, 60, 70, 80, 99, 100]
teamScore = 0
for score in scores {
    if score > 90 {
        teamScore += 3
    } elif score > 80 {
        teamScore += 2
    } elif score > 70 {
        teamScore += 1
    } else {
        teamScore += 0
    }
}
println(teamScore)
// Output: 7

assert teamScore == 7
```

Note that we used `elif` for "else if". This is common in other languages, and those familiar with them may prefer `else if`. Yaklang supports both — they are equivalent. Use whichever you prefer.

```yak
result = ""
age = 18
if age > 80 {
    result = "old man"
} else if age > 10 {
    result = "teenager"
} else {
    result = "child"
}
println(result)
// Output: teenager

assert result == "teenager"
```

In for loops, Yaklang uses `in` for foreach: the left of `in` is the loop variable, the right is the collection.

```yak
scores = [10, 20, 30, 40, 50, 60, 70, 80, 99, 100]
for score in scores {
    println(score)
}
// Output:
// 10
// 20
// ...
// 100
```

This loop feels very intuitive to Python users. If you prefer Golang-style `for range`, see:

```yak
scores = [10, 20, 30, 40, 50, 60, 70, 80, 99, 100]
for index, score = range scores {
    println(index, score)
}
// Output:
// 0 10
// 1 20
// 2 30
// ...
```

In `for range`, `index` is the current index and `score` the current value. Use whichever foreach style you like — they have almost no practical difference in Yaklang.

You can also implement a while loop with `for condition {}`:

```yak
i := 0
for i < 10 {
    println(i)
    i += 1
}
// Output:
// 0
// 1
// ...
// 9
```

Here `for condition {}` loops while `condition` is true and stops when it becomes false.

Yaklang also supports the classic three-part for loop:

```yak
for i := 0; i < 10; i++ {
    println(i)
}
// Output:
// 0
// 1
// 2
// ...
```

Here `for i := 0; i < 10; i++` initializes `i`, checks `i < 10`, and steps `i++` — very close to Golang and C.

### Functions and function calls

Function creation in Yaklang is very flexible — there are many ways:

```yak
func myFunction() {
    println("Hello World")
}
myFunction()
// Output: Hello World

fn helloName(name) {
    return sprintf("Hello %v", name)
}
println(helloName("John"))
// Output: Hello John

def helloNameAndAge(name, age) {
    return sprintf("Hello %v, you are %v years old", name, age)
}
println(helloNameAndAge("John", 20))
// Output: Hello John, you are 20 years old

assert helloName("John") == "Hello John"
assert helloNameAndAge("John", 20) == "Hello John, you are 20 years old"
```

These are the most basic function examples. In Yaklang, the keywords `func`, `fn`, and `def` are all equivalent for declaring functions — choose by habit.

Besides declarative functions, Yaklang supports arrow functions — a shorthand created with `=>`:

```yak
myFunction = () => {
    println("Hello World")
}
myFunction()
// Output: Hello World

helloName = (name) => {
    return sprintf("Hello %v", name)
}
println(helloName("John"))
// Output: Hello John

helloNameAndAge = (name, age) => {
    return sprintf("Hello %v, you are %v years old", name, age)
}
println(helloNameAndAge("John", 20))
// Output: Hello John, you are 20 years old

assert helloName("John") == "Hello John"
assert helloNameAndAge("John", 20) == "Hello John, you are 20 years old"
```

On the left of `=>` are the parameters; on the right is the body. With a single parameter you can omit the parentheses, and if the right side is an expression it is returned automatically; if it's a block, the block's last expression is returned automatically.

```yak
helloName = name => sprintf("Hello %v", name)
println(helloName("John"))
// Output: Hello John

assert helloName("John") == "Hello John"
```

This syntax is very concise — pick whichever style suits you.

#### Functions and closures

In Yaklang, functions automatically capture and access outer variables — a feature common in functional programming known as a closure.

```yak
name := "John"
helloWithOutterName = () => sprintf("Hello %v", name)
println(helloWithOutterName())
// Output: Hello John

assert helloWithOutterName() == "Hello John"
```

Here `helloWithOutterName` captures the outer variable `name`, so it can use `name` inside.

Closures can also modify outer variables:

```yak
name := "John"
helloModifiedWithOutterName = () => {
    name = "Jane"
    return sprintf("Hello %v", name)
}
println(helloModifiedWithOutterName())
// Output: Hello Jane

assert helloModifiedWithOutterName() == "Hello Jane"
```

Closures greatly boost expressiveness in functional-style or complex programming — a convenient and important feature.

### Using library functions

Yaklang is a security DSL with many built-in security functions you can use directly to build common security tools.

The most typical example is the `servicescan.Scan` function from "At a glance", which scans a target host's services:

```yak
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)

for result = range results {
    println(result.String())
}
```

Here we call `servicescan.Scan` and assign results to `results`, then iterate with `for result = range results` and print each. The key: `servicescan` is a library and `Scan` is a function in it. In Yaklang, calling a library function is as simple as `libraryName.functionName`.

Many security libraries and functions are built into Yaklang — no dependencies to install, no imports needed. Similar examples include `synscan.Scan` for SYN port scanning and `mitm.Start` to start a MITM hijacking server.

:::tip

Many of these libraries and functions are implemented in Golang and return an error as the last value, so you handle errors with `die(err)` when calling them.

You can also auto-handle errors with the `~` syntax. The next section explains error handling in detail.

:::

### Error handling

1. Receive the error manually and handle it with `die(err)`

```yak
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)
```

If a function returns an error, you receive it and call `die(err)`. Calling `die` when there is no error will itself error.

2. Auto-handle errors with the `~` syntax (WavyCall)

```yak
results = servicescan.Scan(scanTarget, scanPorts)~
```

The `~` syntax auto-handles errors, equivalent to `die(err)`, with some syntactic differences:

- Any function can use `~`, whether or not its last return value is an error type.
- `~` means: if the function returns a non-empty error, it throws the error and interrupts the current function.

3. Catch errors with try-catch

Yaklang supports try-catch syntax:

```yak
try {
    results = servicescan.Scan(scanTarget, scanPorts)~
    for result = range results {
        println(result.String())
    }
} catch err {
    println(err)
} finally {
    println("finally")
}
```

Note that `catch` can take a variable that receives the error from `try`. Do not wrap that variable in parentheses `( )`.

4. Catch errors with `defer recover()`

```yak
defer func {
    err = recover()
    if err != nil {
        println(err)
    }
}
```

Besides try-catch-finally, Yaklang supports `defer recover()` to catch errors. This catches errors that interrupt the current function. It is commonly used inside user-defined functions or when you need to guarantee a function's overall integrity. Example:

```yak
myFunc = () => {
    defer func {
        err = recover()
        if err != nil {
            println(err)
        }
    }
    println("Before Error")
    1/0
    println("After Error")
}
myFunc()
// Output:
//
// Before Error
// runtime error: integer divide by zero
```

Here, when execution reaches `1/0`, it throws and interrupts. Using `defer func { err = recover() }` catches it.

:::tip

If `~` throws an error, `defer recover()` catches it, and so does try-catch-finally.

So we often combine `~` with `defer recover()` to handle errors.

:::

### Concurrency

Yaklang supports concurrency via the `go` keyword, which is typically followed by an anonymous function call that runs asynchronously immediately.

```yak
go func() {
    println("Hello World in Goroutine")
}()
sleep(1)
println("Hello World in Main")
// Output: Hello World in Goroutine
// Output: Hello World in Main
```

:::tip

Users familiar with Golang will love this feature.

:::

#### Using WaitGroup to wait for concurrent tasks

Usually `go` launches concurrent tasks, and we may need to wait for them to finish — that's where `WaitGroup` comes in:

```yak
wg = sync.NewWaitGroup()
for element in [1,2,3] {
    element := element
    wg.Add(1)
    go func() {
        defer wg.Done()
        println(element)
    } ()
}
wg.Wait()
println("All Goroutine is done")
```

#### Using SizedWaitGroup to limit concurrency

`WaitGroup`'s counter is unbounded — you could add tasks indefinitely, which can cause problems. Yaklang provides `SizedWaitGroup` to bound concurrency:

```yak
wg = sync.NewSizedWaitGroup(2)
for element in [1,2,3] {
    element := element
    wg.Add(1)
    go func() {
        defer wg.Done()
        println(element)
        sleep(1)
    } ()
}
wg.Wait()
println("All Goroutine is done")
```

You set `SizedWaitGroup`'s max; once reached, new tasks block until a slot frees up — very useful for limiting concurrency in practice.
