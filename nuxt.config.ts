// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/ui'
  ],
  i18n: {
    locales: [
      { code: 'cn', file: 'cn.json' },
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    defaultLocale: 'cn',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
  vite: {
    logLevel: 'info',
  },
  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})