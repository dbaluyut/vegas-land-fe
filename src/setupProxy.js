module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/', , '/otherApi'], {
      target: 'https://rocky-castle-64423.herokuapp.com/',
    })
  )
}