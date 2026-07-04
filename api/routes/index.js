const bodyParser = require('body-parser');
const produto = require('./produtoRoute');
const usersRouter = require("./usersRouter");
const authRouter = require("./authRouter");

module.exports = app => {
  app.use(
    bodyParser.json(),
    authRouter,
    produto,
    usersRouter
  );
}
