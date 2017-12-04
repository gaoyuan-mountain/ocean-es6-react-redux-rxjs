const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const compress = require('koa-compress');
const bodyParser = require('koa-bodyparser');
const chalk = require('chalk');
const Mock = require('mockjs');
const path = require('path');

const app = new Koa();
const router = new Router();

app.use(compress());
app.use(bodyParser());

app.use(router.all('*', async (ctx, next) => {
  try {
    const mockTemplate = await fs.readFileSync(path.resolve('./mock/mock-data' + ctx.originalUrl), 'utf8');
    ctx.body = {
      code: 0,
      data: Mock.mock(JSON.parse(mockTemplate))
    };
  } catch (err) {
    console.log(err);
    ctx.body = {
      code: 404,
      msg: 'mock api doesn\'t exists'
    };
  }
}).routes());

const startMockServer = (port, callback) => {
  app.listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.log('err');
    }
    console.log('\n===============================================');
    console.info(chalk.green('==> Mock server is started on port ' + port));
    console.log('===============================================\n');
    callback && callback();
  })
}

module.exports = startMockServer;