import { createSEOMeta } from "./utils/seo";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode: 'spa',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Rattanachat's Portfolio",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: "Get to know all about me, my skills and experiences" },
      ...createSEOMeta({
        title: "Rattanachat's Portfolio",
        description: "Get to know all about me, my skills and experiences",
        site_name: "Rattanachat's Portfolio"
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos" },
    { src: "@/plugins/kenesis" },
    { src: "@/plugins/vue-flickity" },
    { src: "@/plugins/mdicon" },
    { src: "@/utils/head-utils.js" }
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', prefix: 'rs' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics',
      { id: 'UA-201854170-1' },
    ]
  ],
  pwa: {
    meta: {
      title: "Rattanachat's Portfolio",
      author: 'rattanachat.s',
    },
    manifest: {
      name: "Rattanachat's Portfolio",
      short_name: 'RS Portfolio',
      lang: 'en',
    },
  },
  googleAnalytics: {
    id: 'UA-201854170-1',
    debug: {
      sendHitTask: true
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
