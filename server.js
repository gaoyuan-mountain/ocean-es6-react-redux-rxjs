const configuration = require('./webpack.dev.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const startMockServer = require('./mock/mock-server');

process.on('unhandledRejection', (err) => {
  console.log(err);
});

const compiler = webpack(configuration);
const server = new WebpackDevServer(compiler, {
  host: '0.0.0.0',
  port: 3000,
  disableHostCheck: true,
  historyApiFallback: {
    disableDotRule: true
  },
  proxy: {
    "/api": {
      target: 'http://localhost:7001',
      pathRewrite: {
        "^/api": ""
      }
    }
  }
});
server.listen(8080);
startMockServer(7001);
