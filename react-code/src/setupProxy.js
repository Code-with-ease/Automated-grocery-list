const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use('/api', proxy({
  //   target: 'https://smart-node-api.herokuapp.com',
  //   changeOrigin: true,
  // }));
  // app.use('/ml', proxy({
  //   target: 'http://localhost:5000',
  //   changeOrigin: true,
  // }));
};
