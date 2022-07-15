module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://express-hhp0-2046575-1258788955.ap-shanghai.run.tcloudbase.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}