## htpp模块

[http模块官网文档]：https://nodejs.org/dist/latest-v15.x/docs/api/http.html<br>
[http模块github源码]：https://github.com/nodejs/node/blob/master/lib/http.js

### 五大核心类

* Agent类: https://github.com/nodejs/node/blob/1d2ba1eb7414c4ac3d42be2773e70e75d3b0e76a/lib/https.js#L155
* ClientRequest类: https://github.com/nodejs/node/blob/1d2ba1eb7414c4ac3d42be2773e70e75d3b0e76a/lib/_http_client.js#L100
* Server类: https://github.com/nodejs/node/blob/1d2ba1eb7414c4ac3d42be2773e70e75d3b0e76a/lib/https.js#L54
* ServerResponse类: https://github.com/nodejs/node/blob/1d2ba1eb7414c4ac3d42be2773e70e75d3b0e76a/lib/_http_server.js#L178
* IncomingMessage类: https://github.com/nodejs/node/blob/1d2ba1eb7414c4ac3d42be2773e70e75d3b0e76a/lib/_http_incoming.js#L53

### 基于http模块的服务端的基本工作流程

- 1、创建Http Server对象
```js
// 引入http模块
const http = require('http')

// 创建http.Sever对象 - 1、通过http.Server类创建
// const server = new http.Server() 
// 或者 const server = http.Server()
// - 2、通过http.creareServer方法创建
const server = http.createServer()
```

- 2、注册请求回调函数
```js
server.on('request',callback)
```

- 3、监听端口
```js
server.listen(8888,'localhost')
```

## fs模块

fs模块是文件操作模块，可以对文件或者目录进行增删改查，以及对它们进行监听
```js
// 引入fs模块
const fs = require('fs')
```

### 增删改查-异步方法

- 创建文件
```js
// w:写入（默认）；a:追加写入；r: 读取
fs.writeFile('1.txt', '我是文件1.txt', {flage: 'w'}, (err)=> {
  if(err) {
    return console.log(err)
  }
  console.log('写入成功！')
})
```

- 读取文件
```js
// 第二个参数可以是编码类型'utf-8', 得到的data为字符串
fs.readFile('1.txt', (err, data)=> {
  if(err) {
    return console.log(err)
  }
  console.log(data) // 默认为Buffer数据
  console.log(data.toString()) // 将buffer数据转化为字符串
})
```

- 修改文件名称
```js
// 第一个文件为要修改的文件，第二个参数为修改的名称
fs.rename('1.txt','2.txt', (err)=> {
  if(err) {
    return console.log(err)
  }
  console.log('修改成功')
})
```

- 删除文件
```js
// 第一个文件为要修改的文件，第二个参数为修改的名称
fs.unlink('2.txt', (err)=> {
  if(err) {
    return console.log(err)
  }
  console.log('删除成功')
})
```

- 复制文件
```js
// 第一个文件原文件，第二个参数为复制的文件
fs.copyFile('index.html', 'myIndex.html', (err)=> {
  if(err) {
    return console.log(err)
  }
  console.log('复制成功')
})
// 复制过程：先读取=> 再写入
function mycopy(src, dest) {
  fs.writeFileSync(dest, fs.readFileSync(src))
}
mycopy('index.html','test.html')
```

增删改查-同步方法：加Sync
- 创建文件：fs.writeFileSync('1.txt', '我是文件1.txt'(,{falg: '类型'}))
- 读取文件：fs.readFileSync('1.txt')
- 修改文件名称：fs.renameSync('1.txt','2.txt')
- 删除文件：fs.unlinkSync('2.txt')
- 复制文件：fs.copySync('index.html', 'myIndex.html')

## 练习：用Node.js搭建一个基础的webServer

### 要求

* 1、使用node.js的http模块搭建一个webServer项目
  * 1-1、端口号为8888
* 2、访问http://localhost:8888/public/index.html返回public目录下的index.html内容
  * 2-1、项目目录下创建一个public目录
  * 2-2、public下创建一个index.html文件（文件内容不限）
* 3、访问http://localhost:8888/quote随机返回一句毒鸡汤

### 毒鸡汤

const quotes = [

'虽然我个子矮，但我发际线高啊！',

'有些事情做不完，就留到明天做吧。运气好的话，明天死了就不用做了。',

'善良没用，你得漂亮。',

'好好活下去 每天都有新打击。',

'活着的时候把自己搞得好看一点，这样你就不会死得太难看。',

'世上无难事 只要肯放弃。',

'加油，你是最胖的！' ];






