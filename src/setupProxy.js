const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'https://rocky-castle-64423.herokuapp.com/',
      changeOrigin: true,
    })
  )
}
