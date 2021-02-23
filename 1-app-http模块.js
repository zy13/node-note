// 引入http模块
const http = require('http')

// 创建http.Sever对象 - 1、通过http.Server类创建
// const server = new http.Server() 
// 或者 const server = http.Server()
// - 2、通过http.creareServer方法创建
const server = http.createServer() // 实际上就是Server类

// 注册请求回调函数
// server.on()-监听事件的通用方法
server.on('request', (req, res) => {
  console.log('我接受到了一个请求')

  // 根据不同的url,返回不同的数据
  console.log('url', req.url)
  if(req.url === '/') {
    res.write('首页') // 静态
  } else if(req.url === '/register') {
    res.write('注册') // 静态
  } else {
    // 动态
    res.write(`Not Found${new Date()}`)
  }

  // res.write('hello') // 写入响应的数据，任何请求都得到一样的数据
  res.end() // 写完数据
})

// 监听网络（网卡IP）
// localhost == 127.0.0.1
server.listen(8888, 'localhost', () => {
  console.log('服务器请求成功！')
})


