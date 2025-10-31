import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [typography],
};

export default config;
