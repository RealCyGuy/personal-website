// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@formkit/nuxt"],
  googleFonts: {
    families: { "Hanken+Grotesk": [400, 700, 900] },
  },
  app: {
    head: {
      link: [
        {rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png"},
        {rel: 'icon', type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
        {rel: 'icon', type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
        {rel: 'manifest', href: "/site.webmanifest"},
      ]
    }
  }
});
