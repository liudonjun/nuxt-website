// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      { code: 'cn', file: 'cn.json' },
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
  vite: {
    logLevel: 'info',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})