const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = 'HELLO KOA'
})

app.listen(3000)