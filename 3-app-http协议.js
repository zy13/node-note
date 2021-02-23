// 引入http模块
const http = require('http')
// 引入fs模块：对文件或目录进行增删改查，以及监听它们的变化
const fs = require('fs')
// 引入mime
const mimes = require('./mime.json')
// 创建http.Sever对象
const server = http.createServer()

// 注册请求回调函数
server.on('request', (req, res) => {
  let { url } = req
  let content = ''


  // 如果应用中动、静态资源同时存在，
  // 那么最好把它们的访问规则区分开来

  // 先写动态资源的规则
  if(url === '/getdate') {
    res.writeHead(200,{
      'content-type': 'text/html;charset=utf-8'
    })
    res.write(`系统时间：${new Date()}`)
    res.end()
    return
  }
  
  try {
    let ext = url.substring(url.lastIndexOf('.'))
    let mime = mimes[ext]
    content = fs.readFileSync(`./assets${url}`).toString()
    // 设置响应头，响应数据的类型
    // res.setHeader('Content-Type', mime)
    // 或者
    res.writeHead(200, 'ok', {
      'Content-Type': mime
    })
  } catch (e) {
    content = 'Not Found'
    res.statusCode = 404
  }
  res.write(content)
  res.end() // 写完数据
})

// 监听网络（网卡IP）
server.listen(8888, 'localhost', () => {
  console.log('服务器请求成功！')
})


