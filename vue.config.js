module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-marquee-component-fix/'
    : '/',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  lintOnSave:false,
  css: {
    extract: false,
  }
}
