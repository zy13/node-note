const http = require('http')
const fs = require('fs')
const nunjucks = require('nunjucks')

const server = http.createServer()

const quotes = [
  '虽然我个子矮，但我发际线高啊！',
  '有些事情做不完，就留到明天做吧。运气好的话，明天死了就不用做了。',  
  '善良没用，你得漂亮。',  
  '好好活下去 每天都有新打击。',  
  '活着的时候把自己搞得好看一点，这样你就不会死得太难看。',  
  '世上无难事 只要肯放弃。',  
  '加油，你是最胖的！' 
]

nunjucks.configure('views', {
  autoescape: true,
  watch: true,
  noCache: true
})

server.on('request', (req, res) => {
  let { url } = req
  let content = ''

  // 静态资源
  if(url.startsWith('/public')) {
    console.log(url)
    try {
      content = fs.readFileSync(`.${url}`).toString()
    } catch (e) {
      content = 'not fond'
      res.statusCode = 404
    }
  } else { 
    // 动态资源
    if (url === '/quote') {
      const quote = quotes[Math.floor(Math.random()*quotes.length)]
      content = nunjucks.render('quote.html', {
        quote
      })
      res.statusCode = 200
    } else {
      content = 'not fond'
      res.statusCode = 404
    }
  }
  res.write(content)
  res.end()
})

server.listen(8888)