// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  dayjs: {
    plugins: ["duration", "relativeTime", "advancedFormat", "weekday"],
  },
  modules: ["@nuxt/content", "@nathanchase/nuxt-dayjs-module"],
  content: {
    markdown: {
      anchorLinks: false,
    },
    // https://content.nuxtjs.org/api/configuration
  },
});
