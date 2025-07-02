import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'maroon-primary': '#800000',
        'saffron-gold': '#FFBF00',
        'emerald-green': '#008080',
        'cream-white': '#F5F5DC',
        'dark-brown': '#2C1E1E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;