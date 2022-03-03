module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-marquee-component/'
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
