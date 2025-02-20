module.exports = {
  publicPath: '/tools/dataviewer',
  outputDir: 'tools/dataviewer',
  filenameHashing: false,
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 2919,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      webSocketURL: {
        hostname: 'localhost',
        pathname: '/tools/dataviewer',
        port: 2919,
      },
    },
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
  chainWebpack(config) {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options) => {
        return {
          rootMode: 'upward',
        }
      })
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          prettify: false,
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('rux-'),
          },
        }
      })
    config.externals(['vue', 'vuetify', 'vuex', 'vue-router'])
  },
}
