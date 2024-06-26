import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        integrity: '...',
        crossorigin: 'anonymous'
      }
    ],

    titleTemplate: '%s - d_catalog',
    title: 'd_catalog',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    router: {
      middleware: ['authenticated'], // middleware для проверки авторизации
      base: '/', // базовый путь для всех URL
      extendRoutes(routes, resolve) {
        // Добавляем маршрут для страницы входа
        routes.push({
          name: 'login',
          path: '/login',
          component: resolve(__dirname, 'pages/login.vue') // указываем путь к файлу login.vue
        })
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.css',
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',

    '@/assets/css/bootstrap-icons.css',
    '@/assets/css/main.css',
    '@/assets/css/utility.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/node_modules/jquery/dist/jquery.min.js', ssr: false },
    { src: '@/node_modules/popper.js/dist/umd/popper.min.js', ssr: false }
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
