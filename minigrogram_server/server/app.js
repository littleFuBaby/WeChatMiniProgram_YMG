// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
// koa
// next generation web framework for node.js
const Koa = require('koa')
// 创建一个Koa对象表示web app本身:
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
