module.exports = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: {
    color: 'blue',
    height: '2px'
  },
  generate: {
    dir: 'public'
  },
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/index.scss'],
  plugins: ['@/plugins/element-ui', '@/plugins/lazyload'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  build: {
    transpile: [/^element-ui/],
    extend(config: any, ctx: any) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue|ts)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
          },
          {
            test: /\.ts$/,
            exclude: [/node_modules/, /vendor/, /\.nuxt/],
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        )
      }
    }
  }
}
