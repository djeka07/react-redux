const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  app: {
    title: 'Kabang prod',
    charset: 'UTF-8',
    meta: [
      { property: 'og:image:width', content: '200' },
      { property: 'og:image:height', content: '200' }
    ]
  }
}, environment)
