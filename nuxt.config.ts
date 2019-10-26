module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
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
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'blue',
    height: '2px'
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/index.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', '@/plugins/lazyload'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
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
