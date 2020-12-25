export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lomy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A preview of a company site' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'lomy' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://new-womy.vercel.app/img/proposal/website-snap.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://new-womy.vercel.app/img/proposal/website-snap.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'A preview of the new design'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/lomy/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/composition-api.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  target: 'static',
  // server:{
  //   host:'0.0.0.0',
  //   port: process.env.PORT || 5500
  // }

  generate: {
    dir: 'docs',
    fallback: '404.html'
  },
  router: {
    base: '/lomy/'
  },
}
