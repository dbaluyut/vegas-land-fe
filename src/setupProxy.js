const { createProxyMiddleware } = require('http-proxy-middleware')
// test
module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/*'], {
      target: 'https://rocky-castle-64423.herokuapp.com/',
    })
  )
}
