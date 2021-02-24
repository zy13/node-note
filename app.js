const http = require('http') // 引入http模块
const fs = require('fs') // 引入fs模块
const mimes = require('./mime.json') // 引入mime
const nunjucks = require('nunjucks') // 引入模板引擎

// let res = nunjucks.renderString('hello {{name}}', {name: 'james'})
// console.log(res)

// 渲染模板文件，进行模板配置
nunjucks.configure('views', {
  autoescape: true,
  watch: true,
  noCache: true // 开发过程不需要做环境
})

const server = http.createServer() // 创建http.Sever对象

let users = [
  {id: 1, name: 'zy1'},
  {id: 2, name: 'zy2'}
]

// 注册请求回调函数
server.on('request', (req, res) => {
  let { url } = req
  let content = ''

  // 如果应用中动、静态资源同时存在，
  // 那么最好把它们的访问规则区分开来
  if(url.startsWith('/public')) {
    try {
      let ext = url.substring(url.lastIndexOf('.'))
      let mime = mimes[ext]
      url = url.replace(/^\/public/, '')
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
  } else {
    if(url === '/getdate') {
      res.writeHead(200,{
        'content-type': 'text/html;charset=utf-8'
      })
      content = `系统时间：${new Date()}`
    }
    if(url === '/users') {
      res.writeHead(200,{
        'content-type': 'text/html;charset=utf-8'
      })
      content = nunjucks.render('users.html', {
        title: '用户列表',
        users
      })
      console.log(content)
    }
  }  

  res.write(content)
  res.end() // 写完数据
})

// 监听网络（网卡IP）
server.listen(8888, 'localhost', () => {
  console.log('服务器请求成功！')
})


