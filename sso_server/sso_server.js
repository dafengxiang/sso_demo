const express = require('express')
const app = express()
const session = require("express-session");
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(session({
  secret: "dfxdfx",              //设置签名秘钥 内容可以任意填写
  cookie: { maxAge: 80 * 1000 }, //设置cookie的过期时间，例：80s后    session和相应的cookie失效过期
  resave: true,                  //强制保存，如果session没有被修改也要重新保存
  saveUninitialized: false       //如果原先没有session那么久设置，否则不设置
}))
app.get('/add', (req, res) => {
  req.session.name = req.query.id
  console.log(121, req.cookies)
  res.setHeader('set-Cookie', `name99=${req.query.id}`)
  res.send('设置成功')
})
app.get('/get', (req, res) => {
  res.send(req.session.name)
})
app.listen(8088)