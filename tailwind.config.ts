import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     backgroundImage: {
        'img_bg_hero': "url('../assets/bg-hero.jpg')",
     },
    

    extend: {
        colors: {
          'primary-blue': '#106eb0',
          'primary-orange': '#ec7000',
          'peimary-gray': '#33303e',
          'secundary-gray': '#4e4b59',
          'gray-phone': '#f4f4f4',
          'txt-gray': '#7a7786',
          'opacity-gray': 'rgba(100, 80, 57, 0.1)'
        }
    },
  },
  plugins: [],
}
export default config
