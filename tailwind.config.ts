import type { Config } from 'tailwindcss';
const formKitTailwind = require('@formkit/themes/tailwindcss');

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      }
    }
  },
  plugins: [formKitTailwind],
  content: ["formkit.config.ts"]
}