## htpp模块

[http模块官网文档]：https://nodejs.org/dist/latest-v15.x/docs/api/http.html
[http模块github源码]：https://github.com/nodejs/node/blob/master/lib/http.js

### 五大核心类

* Agent类
* ClientRequest类
* Server类: https://github.com/nodejs/node/blob/1d2ba1eb7414c4ac3d42be2773e70e75d3b0e76a/lib/https.js#L54
* ServerResponse类
* IncomingMessage类

### 基于http模块的服务端的基本工作流撑

- 1、创建Http Server对象
```js
// 引入http模块
const http = require('http')

// 创建http.Sever对象 - 1、通过http.Server类创建
const server1 = new http.Server() 
// 或者 const server1 = http.Server()

// 创建http.Sever对象 - 2、通过http.creareServer方法创建
const server2 = http.createServer()
```

- 2、注册请求回调函数
```js

```
- 3、监听端口

