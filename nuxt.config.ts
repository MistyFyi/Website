import { Context } from 'vm'
import locale from './locale'

export default {
  build: {
    extend (config: any, context: Context) {
      if (context.isDev && !process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.(postcss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
          }
        ]
      })
    },
    loaders: {
      sass: {
        import: ['~assets/style/app.sass'],
        implementation: require('sass')
      }
    },
    modules: [],
    plugins: [],
    postcss: {
      plugins: {
        autoprefixer: {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    transpile: ['vuetify/lib'],
    typescript: {
      typeCheck: false
    }
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  generate: {
    fallback: true
  },
  head: {
    titleTemplate: '%s - Ikamu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap' }
    ]
  },
  mode: 'spa',
  modules: [
    ['nuxt-i18n', {
      locales: ['en'],
      defaultLocale: 'en',
      vueI18n: locale,
      strategy: 'no_prefix'
    }],
    ['@nuxtjs/pwa', {}]
  ],
  plugins: [],
  server: {
    port: process.env.NUXT_ENV_PORT,
    host: '0.0.0.0'
  },
  /** typescript config for nuxt */
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true
  }
}
