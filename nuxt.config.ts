// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/api'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 5 * 60, // 5 Minutes
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'style' || request.destination === 'script',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'video',
          handler: 'CacheFirst',
          options: {
            cacheName: 'video-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
            },
            rangeRequests: true,
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    // workbox: {
    //   navigateFallback: '/',
    //   runtimeCaching: [
    //     {
    //       urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'images',
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
    //         }
    //       }
    //     },
    //     {
    //       urlPattern: /\.(?:mp4|webm)$/,
    //       handler: 'CacheFirst'
    //     }
    //   ]
    // },
    manifest: {
      lang: 'cn',
      name: 'My Nuxt App',
      short_name: 'MyApp',
      start_url: '/',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      // display: 'standalone',
      display: 'browser',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  },
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
  plugins: [
    '~/plugins/sw.client.js'
  ]
})