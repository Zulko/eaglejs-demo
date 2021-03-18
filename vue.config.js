module.exports = {
  lintOnSave: 'error',
  // runtimeCompiler: process.env.NODE_ENV !== 'production'
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve'
      })
  }
}
