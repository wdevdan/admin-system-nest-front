const env = require('../environments/environment.ts');

const proxy = [
  {
    context: env.API_PATH,
    target: env.BASE_URL,
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    logLevel: 'error',
    secure: false,
  },
];

module.exports = proxy;

// add this in angular.json in "serve": "options": ..
// "proxyConfig": "src/proxy/proxy.config.ts"
