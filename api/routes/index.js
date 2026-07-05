const bodyParser = require('body-parser');
const produto = require('./produtoRoute');
const usersRouter = require("./usersRouter");
const publicRoutesRouter = require("./publicRoutesRouter");

module.exports = app => {
  app.use(
    bodyParser.json(),
    publicRoutesRouter,
    produto,
    usersRouter
  );
}
