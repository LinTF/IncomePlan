const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    home: {
      entry: 'src/pages/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
});