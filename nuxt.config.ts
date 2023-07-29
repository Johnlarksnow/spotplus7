// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-font-loader',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark', // default value of $colorMode.preference
  },
  fontLoader: {
    external: [
      {
        src: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
        family: 'Poppins',
        class: 'font-poppin',
      },
      {
        src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
        family: 'Inter',
        class: 'font-inter',
      },
    ],
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'in-out',
    },
    layoutTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
})
