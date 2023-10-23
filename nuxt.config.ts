// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  target: 'static',
  app: {
    head: {
      title: 'Nuxt3 - theme toggler',
      link: [
        { rel: "icon", type: "image/png", href: "https://vadym4che.github.io/cv/favicon.png" },
        {
          rel: "preconnect",
          href: "https://rsms.me/",
        },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
      ],
    },
    baseURL: '/nuxt-demo/'
  },
  router: {
    base: '/nuxt-demo/'
  },
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
}
