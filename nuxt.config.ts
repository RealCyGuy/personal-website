// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@formkit/nuxt"],
  googleFonts: {
    families: { "Hanken+Grotesk": [400, 700, 900] },
  }
});
