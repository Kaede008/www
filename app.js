const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.response.type = "text/html"
    ctx.response.body = `<h1>你好, 欢迎来到四爷的个人网站!</h1>`
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})