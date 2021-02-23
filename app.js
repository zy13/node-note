// 引入http模块
const http = require('http')
// 引入fs模块：对文件或目录进行增删改查，以及监听它们的变化
const fs = require('fs')

// 创建http.Sever对象
const server = http.createServer() // 实际上就是Server类

// 注册请求回调函数
// server.on()-监听事件的通用方法
server.on('request', (req, res) => {
  console.log('我接受到了一个请求')

  // 根据不同的url,返回不同的数据
  // console.log('url', req.url)
  // if(req.url === '/') {
  //   res.write(fs.readFileSync('./assets/index.html')) // 静态
  // } else if(req.url === '/register') {
  //   res.write('注册') // 静态
  // } else {
  //   // 动态
  //   res.write(`Not Found${new Date()}`)
  // }

  // res.write('hello') // 写入响应的数据

  // webServer制定一套静态资源访问的规则，这样就方便url的访问
  let {url} = req
  let content = ''
  console.log(url)
  try {
    content = fs.readFileSync(`./assets${url}`).toString()
  } catch (e) {
    content = 'Not Found'
  }
  
  res.write(content)

  res.end() // 写完数据
})

// 监听网络（网卡IP）
// localhost == 127.0.0.1
server.listen(8888, 'localhost', () => {
  console.log('服务器请求成功！')
})


