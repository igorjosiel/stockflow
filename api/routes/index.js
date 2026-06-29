const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usersRouter = require("./usersRouter")

module.exports = app => {
  app.use(
    bodyParser.json(),
    produto,
    usersRouter
  )
}
