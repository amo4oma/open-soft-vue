const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'staging.opensoftye.com/'  // This is whatever your path from the root is
    : '/'
}